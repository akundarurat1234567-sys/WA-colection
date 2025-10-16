function uldanli() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => console.error('Gagal memuat navbar:', error));
}

document.addEventListener("DOMContentLoaded", uldanli);
