// Mostrar el mensaje cuando se presione el sobre
document.querySelector('.heart').addEventListener('click', function() {
    document.getElementById('messagePanel').style.display = 'block';
});

// Redirigir a flor.html cuando se presione el botón
document.getElementById('openFlorBtn').addEventListener('click', function() {
    window.location.href = 'flor.html';
});
