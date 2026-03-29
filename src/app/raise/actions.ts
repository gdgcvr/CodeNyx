"use server";

import { sendQueryNotification } from "@/util/discord";

export async function submitQuery(formData: FormData) {
  const name = formData.get("name") as string;
  const teamId = parseInt(formData.get("teamId") as string);
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  // Server-side validation
  if (!name || name.length > 50) {
    return { error: "Name is required and must be less than 50 characters." };
  }
  if (isNaN(teamId) || teamId < 1 || teamId > 50) {
    return { error: "Team ID must be between 1 and 50." };
  }
  if (!title || title.length > 50) {
    return { error: "Title is required and must be less than 50 characters." };
  }
  if (!description) {
    return { error: "Description is required." };
  }

  try {
    await sendQueryNotification(name, teamId, title, description);

    return { success: true };
  } catch (err) {
    console.error("Submit query error:", err);
    return {
      error: "An unexpected error occurred while sending notification.",
    };
  }
}
