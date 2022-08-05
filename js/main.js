const toggleSidebar = () => {
    let sidebar = document.querySelector(".sidebar-overlay");
    sidebar.classList.toggle("-translate-x-full");
}

const toggleMobileMenu = () => {
    document.querySelector('#mobile-menu').classList.toggle('hidden');
}

const scrollToTop = () => {
    window.scrollTo(0,0);
}
