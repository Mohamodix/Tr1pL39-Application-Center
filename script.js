const webhookURL = "https://discord.com/api/webhooks/1498020140690706452/sXSz15uceYZizB4IfbGRnIjyIEo6qotWUjVxBm7q4nUpStU7T0vbCY9KI96B7OcZgHty"; 

document.getElementById("applyForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const f = e.target;

    const clean = (text) => {
        if (!text) return "None";
        return String(text).slice(0, 1024);
    };

    const payload = {
        content: "📩 **New TR1PL39 Application Received**",
        embeds: [{
            title: "Application Details",
            color: 0x5e72e4,
            fields: [
                { name: "👤 Name", value: clean(f.name.value) },
                { name: "🎂 Age", value: clean(f.age.value) },
                { name: "⏱ Hours", value: clean(f.hours.value) },
                { name: "🏴 Previous Gangs", value: clean(f.gangs.value) },
                { name: "📝 Why Join", value: clean(f.why.value) },
                { name: "💼 Experience", value: clean(f.experience.value) }
            ],
            footer: {
                text: "TR1PL39 Recruitment System"
            },
            timestamp: new Date().toISOString()
        }]
    };

    try {
        const res = await fetch(webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (!res.ok) throw new Error("Webhook failed");

        alert("✅ Application submitted successfully!");
        f.reset();

    } catch (err) {
        console.error(err);
        alert("❌ Failed to submit application. Try again later.");
    }
});
