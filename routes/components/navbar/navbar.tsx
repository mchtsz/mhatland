import style from "./navbar.module.css"

const openNav = () => {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("menuBtn").style.visibility = "hidden";
}

const closeNav = () => {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("menuBtn").style.visibility = "visible";
}

const openNavAndToggle = () => {
    document.getElementById("menuBtn").classList.toggle(style.active)
    openNav()
}

const closeNavAndToggle = () => {
    document.getElementById("menuBtn").classList.toggle(style.active)
    closeNav()
}

export default function Navbar() {
    return <nav use={{openNav, closeNav, style}}>
        <div id="myNav" class={style.overlay}>
            <a href="javascript:void(0)" class={style.closebtn} onclick={closeNavAndToggle}>&times;</a>
            <div class={style.overlay_content}>
                <a href="/arbeid">Arbeid</a>
                <a href="#">Om meg</a>
                <a href="#">Kontakt</a>
            </div>
        </div>


        <div class={[style.logo]}>
            <a href="/home"><img src="/components/navbar/logo.svg" /></a>
        </div>

        <div class={[style.favicon]}>
            <a href="/home"><img src="/components/navbar/favicon.svg" /></a>
        </div>
        

        <div class={[style.container1, style.meny, style.nav, style.nav_style]} 
        onclick={openNavAndToggle} id="menuBtn">
            <div class={[style.bar1]}></div>
            <div class={[style.bar2]}></div>
            <div class={[style.bar3]}></div>
        </div>
    </nav>
}