const webhookURL = "https://discord.com/api/webhooks/1498020140690706452/sXSz15uceYZizB4IfbGRnIjyIEo6qotWUjVxBm7q4nUpStU7T0vbCY9KI96B7OcZgHty";

document.getElementById("applyForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const f = e.target;

    await fetch(webhookURL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            content: "📩 New TR1PL39 Application",
            embeds: [{
                title: "Application Received",
                color: 6173956,
                fields: [
                    { name: "Name", value: f.name.value },
                    { name: "Age", value: f.age.value },
                    { name: "Hours", value: f.hours.value },
                    { name: "Gangs", value: f.gangs.value || "None" },
                    { name: "Why Join", value: f.why.value },
                    { name: "Experience", value: f.experience.value || "None" }
                ]
            }]
        })
    });

    alert("Application submitted!");
    f.reset();
});
