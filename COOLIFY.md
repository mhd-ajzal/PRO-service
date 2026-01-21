# Deploying to Coolify on Hostinger with n8n Integration

This guide covers how to deploy the Design System SaaS Landing Page to Coolify hosted on a Hostinger VPS.

## Prerequisites

1.  **Hostinger VPS**: You need a VPS running Ubuntu (22.04 or 24.04 recommended).
2.  **Domain Name**: Pointed to your VPS IP address (A record).

## Part 1: Installing Coolify on Hostinger VPS

If you haven't installed Coolify yet:

1.  **SSH into your VPS**:
    ```bash
    ssh root@<your-vps-ip>
    ```
2.  **Run the Coolify Installation Script**:
    ```bash
    curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
    ```
3.  **Access Coolify**:
    After installation completes, visit `http://<your-vps-ip>:8000`. Create your admin account.

## Part 2: Deploying the Application

1.  **Create a New Project**:
    - In Coolify, go to "Projects" -> "+ New" -> "Production".
2.  **Add a Resource**:
    - Select "Public Repository" (or GitHub App if you connected it).
    - Enter your repository URL (e.g., `https://github.com/mhd-ajzal/design-system-landing`).
    - **Build Pack**: Choose "Docker Compose" or "Docker Runtime". Since we added a `Dockerfile`, Coolify should detect it. "Nixpacks" is also a great zero-config option if you prefer not to use the Dockerfile, but using the Dockerfile gives us more control. Setup:
        - **Build Pack**: Dockerfile (if available) or Nixpacks.
        - **Port**: 3000
3.  **Environment Variables**:
    - Go to the "Environment Variables" tab of your application in Coolify.
    - Add the following:
      ```
      NEXT_PUBLIC_N8N_WEBHOOK_URL=https://<your-n8n-domain>/webhook/form-submission
      ```
      *Replace `<your-n8n-domain>` with your actual n8n instance domain.*

4.  **Deploy**:
    - Click "Deploy". Coolify will build the Docker image and start the container.

## Part 3: Deploying n8n on Coolify (If needed)

If you don't have an external n8n instance, you can host it on the same Coolify instance.

1.  **Add Resource**: In your Coolify project, click "+ New" -> "Service".
2.  **Search**: Find "n8n".
3.  **Configure**:
    - Set the domain (e.g., `n8n.yourdomain.com`).
    - Deploy.
4.  **Get Webhook URL**:
    - Open your n8n instance.
    - Import the `n8n-workflow.json` from this repository.
    - Activate the workflow.
    - Use the "Production URL" from the Webhook node for your `NEXT_PUBLIC_N8N_WEBHOOK_URL` variable in the Next.js app.

## Part 4: Verifying the Integration

1.  Open your deployed website `https://<your-domain>`.
2.  Go to the "Contact" or "Lead Form" section.
3.  Submit the form.
4.  Check your n8n executions list; you should see a successful execution.
