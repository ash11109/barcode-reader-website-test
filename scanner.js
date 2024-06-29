document.addEventListener('DOMContentLoaded', function() {
    const barcodeInput = document.getElementById('barcodeInput');
    barcodeInput.focus();
    barcodeInput.addEventListener('input', function(event) {
        const barcode = event.target.value;
        console.log('Scanned Barcode:', barcode);
        event.target.value = '';
    });
});