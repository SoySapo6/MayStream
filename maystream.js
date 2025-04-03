#!/usr/bin/env node

const { exec } = require("child_process");
const readline = require("readline");
const fs = require("fs");
const path = require("path");

const configFilePath = path.join(__dirname, "config.json");

// Cargar configuración o crear archivo por defecto
let config = { video: "", key: "" };
if (fs.existsSync(configFilePath)) {
    config = JSON.parse(fs.readFileSync(configFilePath, "utf8"));
} else {
    fs.writeFileSync(configFilePath, JSON.stringify(config, null, 2));
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function saveConfig() {
    fs.writeFileSync(configFilePath, JSON.stringify(config, null, 2));
}

function setKey(key) {
    config.key = key;
    saveConfig();
    console.log("✅ Clave de transmisión guardada.");
}

function setVideo(videoPath) {
    if (!fs.existsSync(videoPath)) {
        console.log("❌ El archivo de video no existe.");
        return;
    }
    config.video = videoPath;
    saveConfig();
    console.log("✅ Video configurado para transmisión.");
}

function startStream() {
    if (!config.video || !config.key) {
        console.log("⚠️ Configura primero el video y la clave con:");
        console.log("   maystream setkey [clave]");
        console.log("   maystream setvideo [ruta]");
        return;
    }

    console.log("🎥 Iniciando transmisión...");
    const cmd = `ffmpeg -re -stream_loop -1 -i "${config.video}" \
        -c:v libx264 -preset veryfast -b:v 3000k \
        -r 30 -c:a aac -b:a 192k \
        -f flv "rtmp://a.rtmp.youtube.com/live2/${config.key}"`;

    const streamProcess = exec(cmd);

    streamProcess.stdout.on("data", (data) => console.log(data));
    streamProcess.stderr.on("data", (data) => console.error(data));

    streamProcess.on("exit", () => {
        console.log("❌ Transmisión finalizada.");
    });

    // Capturar entrada del usuario para detener transmisión
    rl.question("Presiona [Enter] para detener la transmisión...", () => {
        streamProcess.kill();
        rl.close();
    });
}

// Comandos disponibles
const args = process.argv.slice(2);
if (args.length === 0) {
    console.log("📢 MayStream - Comandos disponibles:");
    console.log("  maystream setkey [clave]  → Configurar clave de transmisión");
    console.log("  maystream setvideo [ruta] → Configurar video a transmitir");
    console.log("  maystream start           → Iniciar transmisión");
} else {
    switch (args[0]) {
        case "setkey":
            if (args[1]) setKey(args[1]);
            else console.log("⚠️ Debes ingresar una clave.");
            break;
        case "setvideo":
            if (args[1]) setVideo(args[1]);
            else console.log("⚠️ Debes ingresar la ruta del video.");
            break;
        case "start":
            startStream();
            break;
        default:
            console.log("⚠️ Comando no reconocido.");
    }
}
