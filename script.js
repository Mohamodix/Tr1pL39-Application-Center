const webhookURL = "https://discord.com/api/webhooks/1498060496077721682/tbrD84uxTX-OKkoKCu3Dv1cQYt2k131Z0ZzkUcHsD4vMozIAYAWa1g2kVUL0PGSGyvcD"; 

document.getElementById("applyForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const f = e.target;

    const clean = (text) => {
        if (!text) return "None";
        return String(text).slice(0, 1024);
    };

    const payload = {
        content: "New Application Received",
        embeds: [{
            title: "Application Details",
            color: 0x5e72e4,
            fields: [
                { name: "Name", value: clean(f.name.value) },
                { name: "Age", value: clean(f.age.value) },
                { name: "Hours", value: clean(f.hours.value) },
                { name: "Previous Gangs", value: clean(f.gangs.value) },
                { name: "Why Join", value: clean(f.why.value) },
                { name: "Experience", value: clean(f.experience.value) }
            ],
            timestamp: new Date().toISOString()
        }]
    };

    try {
        const res = await fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (!res.ok) throw new Error("Failed");

        alert("Application submitted");
        f.reset();

    } catch (err) {
        alert("Submission failed");
    }
});
