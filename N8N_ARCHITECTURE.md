# N8N Automation Architecture

## Trigger
- **Webhook (POST)**: Receives data from the Next.js Funnel Application.
- **Payload**: `{ name, email, company, answers, assigned_package }`

## Workflow Steps

1. **Receive Webhook**
   - Accept the JSON payload.

2. **Save to Supabase**
   - **Node:** Supabase
   - **Operation:** Insert into `leads` table.
   - **Return:** `lead_id`.
   - **Next:** Insert into `applications` table with `lead_id` and `answers`.

3. **Condition (Switch)**
   - **Node:** Switch
   - **Input:** `assigned_package`
   - **Cases:** `FUNDAMENT`, `WACHSTUM`, `DOMINANZ`, `REJECTED`

4. **Action Paths**

   - **Path: REJECTED**
     - **Email:** Send polite rejection email ("Currently not a fit...").
     - **CRM:** Tag as "Unqualified".

   - **Path: FUNDAMENT / WACHSTUM / DOMINANZ**
     - **Email:** Send dynamic offer email.
       - Subject: "Dein Wachstums-Plan: [PACKAGE]"
       - Body: "Based on your answers, we recommend [PACKAGE]..." + Link to Booking.
     - **CRM:** Create Deal in HubSpot/Pipedrive/Notion.
       - Stage: "Application Received"
       - Value: Estimate based on package (e.g., 3k, 8k, 25k).
     - **Notification:** Send Slack/Teams message to Sales Team ("New Qualified Lead: [Name] - [Package]").

5. **WhatsApp Follow-Up (Optional)**
   - **Node:** WhatsApp Business API (or Twilio).
   - **Message:** "Salam [Name], danke für deine Bewerbung. Ich habe dir deinen Plan per Mail gesendet. Beste Grüße, Mustafa."

## Error Handling
- Use Error Trigger node to alert tech team if Supabase insert fails.
