document.addEventListener('DOMContentLoaded', function () {
    const pdfButtons = document.querySelectorAll('.pdf-button');
    
    pdfButtons.forEach(button => {
        button.addEventListener('click', function () {
            const pdfUrl = this.getAttribute('data-pdf');
            window.open(pdfUrl, '_blank');
        });
    });
});
