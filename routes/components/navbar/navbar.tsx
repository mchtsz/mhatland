import { useClient } from "@klevn/jxc";
import style from "./navbar.module.css"

const openNav = () => {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("menuBtn").style.visibility = "hidden";
}

const closeNav = () => {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("menuBtn").style.visibility = "visible";
}

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


        <div class={[style.logo]}>
            <a href="./index.html"><img src="./mhatland.svg" /></a>
        </div>

        <div class={[style.container1, style.meny, style.nav, style.nav_style]} onclick={openNav} id="menuBtn">
            <div class={[style.bar1]}></div>
            <div class={[style.bar2]}></div>
            <div class={[style.bar3]}></div>
        </div>
    </nav>
}