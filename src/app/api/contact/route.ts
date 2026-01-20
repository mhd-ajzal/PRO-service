import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "https://meronatic-developer.app.n8n.cloud/webhook/form-submission";

        console.log(`[API] Sending to n8n: ${webhookUrl}`);

        // Add timeout to prevent Netlify serverless function hanging
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000); // 8 second timeout

        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            signal: controller.signal,
        });

        clearTimeout(timeout);

        console.log(`[API] n8n responded with status: ${response.status}`);

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`[API] n8n error response: ${errorText}`);
            return NextResponse.json({ error: `n8n submission failed with status ${response.status}` }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("[API] Contact API Error:", error);

        if (error.name === 'AbortError') {
            return NextResponse.json({ error: "Request timeout - n8n took too long to respond" }, { status: 504 });
        }

        return NextResponse.json({ error: error.message || "Could not connect to n8n" }, { status: 500 });
    }
}
