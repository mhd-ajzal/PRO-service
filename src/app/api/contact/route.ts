import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "http://localhost:5678/webhook-test/form-submission";

        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            console.error(`n8n responded with status: ${response.status}`);
            return NextResponse.json({ error: `n8n submission failed with status ${response.status}` }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact API Network/Fetch Error:", error);
        return NextResponse.json({ error: "Could not connect to n8n. Is it running?" }, { status: 500 });
    }
}
