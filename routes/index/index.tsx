import "./style.css";

import Navbar from "../components/navbar/navbar";

export default () => {
    return <html lang="en">

    <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet"/>
        <title>Nettside</title>
    </head>
    
    <body>
        <div class="all">
            <Navbar></Navbar>

            <main>
                <section>
                    <div class="section" id="section">
                        
                    </div>
                </section>

                <article>
                    <div class="article" id="article">
                        
                    </div>
                </article>
            </main>

            <footer>
                <div class="footer" id="footer">
                    <p>&copy;2023 Marthin Hatland</p>
                </div>
            </footer>
        </div>
    </body>
    
    </html>
}