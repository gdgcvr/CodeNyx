"use server";

import { getDiscordQueryPayload } from "./payload";

export async function sendQueryNotification(
  name: string,
  teamId: number,
  title: string,
  description: string,
) {
  const webhookURL = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookURL) {
    throw new Error("DISCORD_WEBHOOK_URL is not defined in environment");
  }

  const payload = getDiscordQueryPayload(name, teamId, title, description);

  try {
    const response = await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(
        `Discord API error: ${response.status} ${response.statusText}`,
      );
    }

    console.log("Message sent to Discord!");
  } catch (err) {
    console.error("Error sending message:", err);
    throw err;
  }
}
