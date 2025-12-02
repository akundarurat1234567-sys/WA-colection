function uldanli() {
    fetch('../navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;

            const menuToggle = document.querySelector('.menu-toggle');
            const navMenu = document.querySelector('header nav ul');
            const overlay = document.querySelector('.menu-overlay');

            if (menuToggle && navMenu && overlay) {
                menuToggle.addEventListener('click', () => {
                    navMenu.classList.toggle('show');
                    overlay.classList.toggle('active');
                });

                // Tutup menu jika overlay diklik
                overlay.addEventListener('click', () => {
                    navMenu.classList.remove('show');
                    overlay.classList.remove('active');
                });

                // Tutup menu saat salah satu link diklik
                navMenu.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        navMenu.classList.remove('show');
                        overlay.classList.remove('active');
                    });
                });
            }
        })
        .catch(error => console.error('Gagal memuat navbar:', error));
}

document.addEventListener("DOMContentLoaded", uldanli);
    