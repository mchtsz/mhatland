import "../index/global.css";

import "./arbeid.css";

import Navbar from "../components/navbar/navbar";

import Footer from "../components/footer/footer";

export default () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/favicon.svg"/>

        <title>Marthin - Hjem</title>
      </head>

      <body>
        <Navbar></Navbar>

        <main>
          <section>
            <div class="skole">
              <a href="https://skole.mhatland.com" target="blank">Skole side</a>
            </div>
          </section>
        </main>
        
        <Footer></Footer>
      </body>
    </html>
  );
};
