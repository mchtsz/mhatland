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
        <meta name="robots" content="noindex"/>
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

                <p id="klokke" class={[Style.klokke]}></p>
              </div>
              <button id="navnBtn" class={[Style.button]}>Oppdater navn</button>
            </section>
          </article>
        </main>

        <Footer></Footer>
      </body>

      <script>
      {
        () => {
          function showTime() {
            //console.time("hour")
            const today = new Date() // Get the current time
            let hour = today.getHours() // Get the hour
            let min = today.getMinutes().toString().padStart(2, "0") // Add a zero in front of numbers < 10
            let sec = today.getSeconds().toString().padStart(2, "0") // Add a zero in front of numbers < 10
            document.getElementById("klokke").innerText = `Klokken er nå: ${hour}:${min}:${sec}` // Display the time
            //console.timeEnd("hour")
          }
    
          setInterval(showTime, 1000) // Update the clock every second
          function updateName() {
            document.getElementById('nameInput').innerHTML = ((`Velkommen ` + localStorage.getItem("name")))//henter fra localstorage
          }

          function promptName(){
            document.getElementById('navnBtn').addEventListener("click", () => {
              var nameInput = prompt("Hva heter du?")
              localStorage.setItem("name", nameInput) // legger inn i localstorage
              updateName()
              
            })
          };
          updateName()
          promptName ()
        }
      }
      </script>
    </html>
  );
};
