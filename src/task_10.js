function toggleMenu() {
    const mobileMenu = document.querySelector('#mobileMenu');
    if (mobileMenu.classList.contains("openMenu")) {
        mobileMenu.classList.remove("openMenu")
    } else {
        mobileMenu.classList.add("openMenu")
    }
}