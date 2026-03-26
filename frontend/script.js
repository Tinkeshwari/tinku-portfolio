function showCertificate(name) {
    const certificateImg = document.getElementById('certificate-img');
    certificateImg.src = `../images/${name}.jpg`;
    certificateImg.style.display = 'block';
}