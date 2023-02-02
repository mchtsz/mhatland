import "../index/global.css";

import "./info.module.css";

import Navbar from "../components/navbar/navbar.js";

import Footer from "../components/footer/footer.js";

export default () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="My name is Marthin Hatland, I'm a frotend developer."
        />
        <meta
          name="keywords"
          content="Marthin Hatland, Hatland, info, frontend"
        />
        <meta name="author" content="Marthin Hatland" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/favicon.svg" />

        <title>Information - About me</title>
      </head>

      <body>
        <Navbar></Navbar>

        <main>
          <section></section>
        </main>

        <Footer></Footer>
      </body>
    </html>
  );
};
