let yesSize = 20;
let noClicks = 0;
let messages = [
    "Chiar...? 😢", "Sigur? 🥺", "But I really like you 🥹💕", "Ioio 😔💔",
    "I'll be really sad 😭", "pls pls pls pls pls 😣", "Picos for a month? 🥰", "O sa iti placa mult promit! ❤️",
    "Last chance! 😖", "Bine stop playing de parca era dupa tine 😾"
];
let sadGifs = [
    "https://media.giphy.com/media/d2lcHJTG5Tschttps://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmQ1NHR4ZTNjNW5hZnJhM2MxYTI3d2F0YTdkZDFsOXF0eDA1dHU2ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l41lTlEowSJv98r7O/giphy.gifg/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa291eGlibGU4aDIzczJxMXRpYzM3NmdteHd5YzVnajRhNGdxdHQ2ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fFa05KbZowXiEIyRse/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTlkN293eDI0bmFhNXIyZmdkZGZrOWs5a2l6dDNhaGt6cW12eWhsMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/12Bpme5pTzGmg8/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnpxdmJub3F2ZzQydDhieWtzbjJyaTd0aWVjOGVqZ3hzemk1OGd6byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sLkIthus9lEwoe7PRx/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnp2aGcwdXhrdGxncmY1emp6Y3lmcnBnMHEyaXNscTZhZmxuM3BydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6gDSyjaOPwZ4A/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWZ6MW11bHQ1YWZ1d3FlY3luYmNnZXl3NXFveDduZDViYTIxbGY4bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/e1Tf1eOo6976zuGv3C/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc21mM3lrand3NWltdG1sM3VsdDZsM2wxZ2hyOHA2aXlhdm9tbXFqeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mi4ec226vjAkehSLk0/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWd6c3Z0aGZraWw1M3IwaWd4dmx1azk4eGJkYTh3ZGN3cjJmN2d4MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7AzEXdIb1wyCTWJntb/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmY3aGQwZmVhcW50NXcxdmtyMHVodWJvN2V1bnNrM2oweHpyZ2ZocyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aWMJvA76tNnBR9gkpT/giphy.gif",
    // "https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif?cid=790b7611a9d7owx24naa5r2fgddfk9k9kizt3ahkzqmvyhl3&ep=v1_gifs_search&rid=giphy.gif&ct=g", 
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3ltZzBvY216emQ2aHh5ejF6a3drOTd2amE3cWlkNjdwdjA0Y3dyNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qUIm5wu6LAAog/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHY5Mmg1MDRxMnRhNzBiZDRzMjg1aXRpMTJmbDI1b2dod3h2c2RhaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OHRF8LZis06OiPDJby/giphy.gif" 
];
let messageIndex = 0;

document.getElementById("yesBtn").addEventListener("click", sayYes);
document.getElementById("noBtn").addEventListener("click", growYesButton);

// Play background music on first user interaction (Yes or No)
function playMusic() {
    const music = document.getElementById('bgMusic');
    if (music.paused) {
        music.volume = 0.5; // Optional: set volume
        music.play();
    }
    // Remove event listeners after first play to avoid redundant calls
    document.getElementById('yesBtn').removeEventListener('click', playMusic);
    document.getElementById('noBtn').removeEventListener('click', playMusic);
}
document.getElementById('yesBtn').addEventListener('click', playMusic);
document.getElementById('noBtn').addEventListener('click', playMusic);

function sayYes() {
    document.getElementById('message').innerText = "YAY ❤️🥰 Further details to be provided😝";
    document.getElementById('noBtn').style.display = 'none';
    document.getElementById('gif').src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGVmYW9keHZ4bGFtb3kwNTNmOGJmejdwN2UwYTBrd250ZTlqNnE2MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/A8ReUjJdMCNOM/giphy.gif"
    startHearts();
}

function growYesButton() {
    noClicks++;
    if (noClicks >= 10) {
        document.getElementById('yesBtn').style.width = '50vw';
        document.getElementById('yesBtn').style.height = '50vh';
        document.getElementById('yesBtn').style.fontSize = '25px';
        document.getElementById('noBtn').style.display = 'none';

    } else {
        yesSize += 15;
        document.getElementById('yesBtn').style.fontSize = yesSize + 'px';
    }
    document.getElementById('message').innerText = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    document.getElementById('gif').src = sadGifs[Math.min(noClicks, sadGifs.length - 1)];
}

function startHearts() {
    for (let i = 0; i < 50; i++) {
        createHeart();
    }
}

function createHeart() {
    let heart = document.createElement('img');
    heart.classList.add('heart');
    heart.src = 'freaky-patrick.png'; // Your image filename
    document.body.appendChild(heart);
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    setTimeout(() => { heart.remove(); }, 2000);
}

let musicStarted = false;
document.body.addEventListener('click', function() {
    if (!musicStarted) {
        let audio = document.getElementById('bgMusic');
        audio.play().catch(error => {
            console.log("Audio play failed:", error);
        });
        musicStarted = true;
    }
});