import "../index/global.css";

import Style from "./javascript.module.css";

import Navbar from "../components/navbar/navbar.js";

import Footer from "../components/footer/footer.js";

export default () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Marthin Hatland" />
        <meta name="robots" content="noindex" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/favicon.svg" />

        <title>Marthin Hatland - Javascript </title>
      </head>

      <body>
        <Navbar></Navbar>

        <main>
          <article class={[Style.index_article]}>
            <section class={[Style.index_section]}>
              <div class={[Style.me_container]}>
                <p id="nameInput" class={[Style.input]}></p>

                <p id="alder" class={[Style.input]}></p>

                <p id="klokke" class={[Style.klokke]}></p>
              </div>
              <button id="navnBtn" class={[Style.button, Style.navnBtn]}>
                Oppdater navn
              </button>

              <button id="alderBtn" class={[Style.button, Style.alderBtn]}>
                Sjekk alder
              </button>
            </section>
          </article>
        </main>

        <Footer></Footer>
      </body>

      <script>
        {() => {
          function showTime() {
            //console.time("hour")
            const today = new Date(); // henter dato
            let hour = today.getHours(); // henter time
            let min = today.getMinutes().toString().padStart(2, "0"); // Legger til null foran minutter hvis < 10
            let sec = today.getSeconds().toString().padStart(2, "0"); // Legger til null foran sekunder hvis < 10
            document.getElementById(
              "klokke"
            ).innerText = `Klokken er nå: ${hour}:${min}:${sec}`; // viser tid i html
            //console.timeEnd("hour")
          }

          setInterval(showTime, 1000); // Update the clock every second

          var name = localStorage.getItem("name");
          var alderLog =
            JSON.parse(localStorage.getItem("alderLog" + name)) || []; //make an array and get it from localstorage

          function updateName() {
            document.getElementById(
              "nameInput"
            ).innerHTML = `Velkommen ${name}`; //henter fra localstorage
            document.getElementById(
              "alder"
            ).innerHTML = `[${formatAlderLog(alderLog)}]`; //henter fra localstorage
          }

          function promptName() {
            document.getElementById("navnBtn").addEventListener("click", () => {
              var nameInput = prompt("Hva heter du?") //henter navn fra prompt
              localStorage.setItem("name", nameInput) // legger inn i localstorage
              name = nameInput; //setter navnet til name
              alderLog = JSON.parse(localStorage.getItem("alderLog" + name)) || [] // henter fra localstorage
              updateName() // oppdaterer navnet
            });
          }
          // kaller på funksjonene
          updateName()
          promptName()

          document.getElementById("alderBtn").addEventListener("click", () => {
            const alder = Number(prompt("Hvor gammel er du?"));

            alderLog.push(alder); //pusher alderLog inn i arrayen

            const formattedAlderLog = formatAlderLog(alderLog); // formaterer arrayen
            if (alder > 17) {
              document.getElementById(
                "alder"
              ).innerText = `Du er ${alder}, og eldre enn meg. [${formattedAlderLog}]`;
            } else {
              document.getElementById(
                "alder"
              ).innerText = `Du er ${alder}, og yngre enn meg. [${formattedAlderLog}]`;
            }
            if (alder == 17) {
              document.getElementById(
                "alder"
              ).innerText = `Du er ${alder}, og like gammel som meg. [${formattedAlderLog}]`;
            }

            localStorage.setItem("alderLog" + name, JSON.stringify(alderLog)); //setter inn i localstorage
          });

          function formatAlderLog(alderLogInput: number[]): string {
            if (alderLogInput.length === 0) return "ingenting"; // Hvis arrayen er tom, returner "ingenting"

            return alderLogInput.join("år, ") + "år"; // legger til "år" etter hvert tall.
          }
        }}
      </script>
    </html>
  );
};
