// Show certificate info dynamically with image
function showCertificate(name) {
    const display = document.getElementById('certificate-display');

    // Create image filename: lowercase + replace spaces with dash
    let imgSrc = `images/${name.toLowerCase().replace(/ /g, '-')}.jpg`;

    // Display certificate name and image
    display.innerHTML = `
        <p>${name} Certificate</p>
        <img src="${imgSrc}" alt="${name}" style="width:300px; margin-top:10px; border:2px solid #fff; border-radius:5px;">
    `;
}

// Contact form submission to backend
document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const form = e.target;
    const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };

    const response = await fetch('http://localhost:4000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById('form-status').innerText = result.message;
    form.reset();
});