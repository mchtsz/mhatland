import { useClient } from "@klevn/jxc";
import style from "./navbar.module.css"

const openNav = () => {
    document.getElementById("myNav").style.height = "100%";
}

const closeNav = () => {
    document.getElementById("myNav").style.height = "0%";
}

useClient({openNav, closeNav})

export default function Navbar() {
    return <nav>
        <div id="myNav" class={style.overlay}>
            <a href="javascript:void(0)" class={style.closebtn} onclick={closeNav}>&times;</a>
            <div class={style.overlay_content}>
                <a href="#">Arbeid</a>
                <a href="#">Om meg</a>
                <a href="#">Kontakt</a>
            </div>
        </div>
        <div class={[style.meny, style.nav, style.nav_style]}>
            <span onclick={openNav} >Meny</span>
        </div>
    </nav>
}