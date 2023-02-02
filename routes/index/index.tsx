import "./global.css";
import Style from "./home.module.css";

import Navbar from "../components/navbar/navbar.js";

import Footer from "../components/footer/footer.js";

export default () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="This site is a portfolio for Marthin Hatland. Here you can look and read about his work and projects."/>
        <meta name="keywords" content="HTML, CSS, JavaScript, Marthin Hatland, Hatland"/>
        <meta name="author" content="Marthin Hatland" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/favicon.svg" />

        <title>Marthin Hatland - portfolio </title>
      </head>

      <body>
        <Navbar></Navbar>

        <main>
          <article class={[Style.index_article]}>
            <section class={[Style.index_section]}>
              <div class={[Style.me_container]}>
                <h1>Marthin Hatland</h1>
                <h4>Web Developer</h4>
              </div>
            </section>

            <section class={[Style.index_section]}>
              <img src="/assets/swebsite.svg" />
            </section>
          </article>
        </main>

        <Footer></Footer>
      </body>
    </html>
  );
};
