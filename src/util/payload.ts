export function getDiscordQueryPayload(
  name: string,
  teamId: number,
  title: string,
  description: string,
) {
  return {
    username: "Query Relay",
    embeds: [
      {
        title: "🚨 New Query Received",
        color: 1733608,
        fields: [
          {
            name: "Participant Name",
            value: name,
            inline: true,
          },
          {
            name: "Team ID",
            value: teamId.toString(),
            inline: true,
          },
          {
            name: "Query Title",
            value: title,
            inline: false,
          },
          {
            name: "Description",
            value: description,
            inline: false,
          },
        ],
        footer: {
          text: "Automated GDGCVR query notification",
        },
        timestamp: new Date().toISOString(),
      },
    ],
  };
}
