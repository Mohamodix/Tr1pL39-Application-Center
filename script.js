const webhookURL = "https://discord.com/api/webhooks/1498009732462674081/lDTQlzpfCVCk7iyF2SuunEh_e3ZgMlV99rw7tTR4E-xsUC1cAHROpFXUlMCeQ38_cSBQ";

document.getElementById("applyForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const f = e.target;

    const payload = {
        content: "📩 New TR1PL39 Application",
        embeds: [{
            title: "New Application",
            color: 3447003,
            fields: [
                { name: "Name", value: f.name.value },
                { name: "Age", value: f.age.value },
                { name: "Hours", value: f.hours.value },
                { name: "Previous Gangs", value: f["previous-gangs"].value || "None" },
                { name: "Why Join", value: f.why.value },
                { name: "Experience", value: f.experience.value || "None" }
            ]
        }]
    };

    await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    alert("Application sent!");
    f.reset();
});
