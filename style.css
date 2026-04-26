document.getElementById('discordForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const webhookURL = "https://discord.com/api/webhooks/1498009737768337602/KLwxaE1uSRSjG3yYoPJm84U8BDidiQVO7145fuafteV4B4aQ2VyaLtFsvF6Mxe7ZFg_t";
    
    const embedData = {
        username: "Tr1pL39 Bot",
        embeds: [{
            title: "New Recruitment Application",
            color: 255, // Blue
            fields: [
                { name: "Nick", value: document.getElementById('idNick').value, inline: true },
                { name: "Discord", value: document.getElementById('discord').value, inline: true },
                { name: "Full Name", value: document.getElementById('fullName').value },
                { name: "Serial", value: document.getElementById('serial').value },
                { name: "Corruption Def", value: document.getElementById('corruption').value },
                { name: "Backup Def", value: document.getElementById('backup').value }
            ],
            footer: { text: "CIT Group: Tr1pL39" },
            timestamp: new Date()
        }]
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(embedData)
    }).then(() => {
        alert("Application Sent!");
        location.reload();
    });
});
