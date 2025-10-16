document.addEventListener("DOMContentLoaded", () => {
    const buyButtons = document.querySelectorAll('.btn-buy');
    buyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Produk ditambahkan ke keranjang! (Demo)');
        });
    });
});
