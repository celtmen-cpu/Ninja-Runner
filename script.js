function sendWebhook(message) {
    fetch("https://discord.com/api/webhooks/1505977380085305444/bQ0lNlWKdU_hMducap-CNu2W727gQs4XgDRRoELtw0w-XgyyZp5yjhjdVuB6x5nzvg7A", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: message
        })
    
    });
}

document.querySelectorAll(".windows").forEach(el => {
    el.addEventListener("click", () => {
        sendWebhook("Nouveau téléchargement Windows");
        window.location.href = "https://github.com/celtmen-cpu/Ninja-Runner/releases/download/0.4/Ninja-Runner.windows-0.4.zip";
    });
});

document.querySelectorAll(".mac").forEach(el => {
    el.addEventListener("click", () => {
        sendWebhook("Nouveau téléchargement Mac");
        window.location.href = "https://github.com/celtmen-cpu/Ninja-Runner/releases/download/0.4/Ninja-Runner.mac-v0.4.dmg";
    });
});

document.querySelectorAll(".android").forEach(el => {
    el.addEventListener("click", () => {
        sendWebhook("Nouveau téléchargement Android");
        window.location.href = "https://github.com/celtmen-cpu/Ninja-Runner/releases/download/0.4/Ninja-Runner.android-v0.4.apk";
    });
});