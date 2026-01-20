export async function submitToN8n(data: any) {
    // Call our local API proxy to avoid CORS issues
    const webhookUrl = "/api/contact";

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
