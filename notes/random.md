``` tsx
setInterval(updateClock, 1000)

          let defaultDato = localStorage.getItem("dato") ?? "03/03/2006"
          let dato = defaultDato
          let prefix = localStorage.getItem("prefix") ?? "Min bursdag er om: "

          function updateClock() {
            // 2004/2/23
            var splitDate = dato.split("/") // Split the date into an array
            /*if (splitDate.length < 3) {
              dato = defaultDato
              return alert("Ugyldig dato")
            }
            */

            const birthTime = new Date(`${splitDate[1]}/${splitDate[0]}/${splitDate[2]}`).getTime() // Get the time of birth
            const currentTime = new Date().getTime() // Get the current time
            
            //document.getElementById("bursdag").innerText = `${prefix}${days}dager ${hours}timer ${mins}min ${secs}sekunder`
          }

          const bursdagBTN = document.getElementById("btn") // Henter button

          bursdagBTN.addEventListener("click", () => {
            dato = prompt("Når er din bursdag? (DD/MM/YYYY)")
            localStorage.setItem("dato", dato)
            prefix = "Din bursdag er om: "

            localStorage.setItem("prefix", prefix)
          })
```

tostring = converter det meste til string

padstart = 2 lang hvis ikke putter 0 på start (padstart) Hvis 1 = 01 hvis 2 = 02