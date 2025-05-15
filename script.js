// Gerekli HTML elementlerini seçelim
const menuToggle = document.querySelector('.menu-toggle'); // Hamburger butonu
const navUl = document.querySelector('nav ul'); // Navigasyon menüsünün ul etiketi

if (menuToggle && navUl) { // Elementlerin bulunduğundan emin olalım
    menuToggle.addEventListener('click', () => {
        // nav ul elementine 'menu-acik' class'ını ekleyip/kaldıralım
        navUl.classList.toggle('menu-acik');

        const isExpanded = navUl.classList.contains('menu-acik');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });
} else {
    console.error("Hamburger menü butonu veya navigasyon listesi bulunamadı!");
}

// İsteğe bağlı: Menü dışına tıklanınca menüyü kapatma (daha ileri seviye)
document.addEventListener('click', (event) => {
    const isClickInsideNav = navUl.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);
if (!isClickInsideNav && !isClickOnToggle && navUl.classList.contains('menu-acik')) {
    navUl.classList.remove('menu-acik');
    menuToggle.setAttribute('aria-expanded', 'false');
}
});

// İsteğe bağlı: Menü linkine tıklanınca menüyü kapatma
if (navUl) {
    const menuLinks = navUl.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navUl.classList.contains('menu-acik')) {
                navUl.classList.remove('menu-acik');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
}