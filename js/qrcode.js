document.addEventListener('DOMContentLoaded', function() {
    const qrcodeContainer = document.getElementById('qrcode');
    if (qrcodeContainer) {
        const currentUrl = window.location.href;
        const qrcode = new QRCode(qrcodeContainer, {
            text: currentUrl,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
}); 