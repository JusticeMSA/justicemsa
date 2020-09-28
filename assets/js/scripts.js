
// Collapse and close navigation in mobile phones
menuBtn.addEventListener("click", () =>{
    nav.classList.toggle("menu-open");
})

navLinks.map(link => {
    link.addEventListener("click", () =>{
        nav.classList.toggle("menu-open");
    })
})
