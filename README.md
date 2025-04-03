# 🎥 MayStream

![MaycolAI](https://i.postimg.cc/7Yg6XQyz/14-sin-t-tulo-20250403015554.png)

⚡ Descripción

MayStream es una herramienta de transmisión en vivo diseñada para ser utilizada en la terminal de Linux. Inspirada en OBS Studio, MayStream permite a los usuarios transmitir videos en vivo a plataformas como YouTube directamente desde la terminal, sin necesidad de interfaces gráficas.

Con solo unos comandos, podrás configurar tu clave de transmisión, video y empezar a transmitir en vivo. Es perfecto para quienes desean hacer directos desde un entorno Linux, sin complicaciones.


---

📦 Instalación

1. Instalar Node.js y FFmpeg

Primero, asegúrate de tener Node.js y FFmpeg instalados en tu sistema:

```
sudo apt update && sudo apt upgrade
sudo apt install nodejs ffmpeg
```

2. Instalar MayStream

Instala MayStream globalmente desde NPM:

```
npm install maystream
```

---

🖥️ Comandos disponibles

```
npx maystream setkey [clave]
```

Configura la clave de transmisión para tu plataforma (ej. YouTube).

```
npx maystream setvideo [ruta]
```

Configura la ruta del video a transmitir.

```
npx maystream start
```

Inicia la transmisión en vivo.



---

⚙️ Configuración

Los parámetros de configuración como la clave de transmisión y la ruta del video se guardan en un archivo config.json. Puedes editar este archivo manualmente si prefieres no usar los comandos.

Ejemplo de archivo config.json:

```
{
  "key": "TU-CLAVE-SECRETA",
  "video": "/ruta/a/tu/video.mp4"
}
```

---

<h1 align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=30&pause=5&color=37DD00&center=true&vCenter=true&width=650&lines=MayStream+📽️" alt="Typing SVG">
</h1>

<h1 align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=30&pause=5&color=00F7FF&center=true&vCenter=true&width=650&lines=Lo+puedes+usar+en+Linux+y+Termux." alt="Typing SVG">
</h1>

---

🎬 Uso

1. Configurar la clave de transmisión:

```

npx maystream setkey TU-CLAVE
```

2. Configurar la ruta del video:

```
npx maystream setvideo /ruta/a/tu/video.mp4
```

3. Iniciar la transmisión:

```
npx maystream start
```

Esto comenzará la transmisión en vivo en la plataforma configurada.


---

🚀 Contribuir

Si quieres contribuir a MayStream, puedes hacer un fork de este repositorio, crear una rama con tu funcionalidad, y luego hacer un pull request.


---

👨‍💻 Desarrollado por:

SoyMaycol
Inspirado por la comunidad de usuarios de Linux y streamers.

---

📜 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.


---

¡Disfruta transmitiendo en vivo directamente desde tu terminal Linux! 🚀


---
