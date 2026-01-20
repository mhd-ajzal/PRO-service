export async function submitToN8n(data: any) {
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "http://localhost:5678/webhook-test/form-submission"; // Replace with user's actual URL later

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`n8n submission failed: ${response.statusText}`);
        }

        return await response.json().catch(() => ({ success: true })); // Handle cases where n8n returns simple text
    } catch (error) {
        console.error("Error submitting to n8n:", error);
        throw error;
    }
}
