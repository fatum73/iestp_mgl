document.addEventListener('DOMContentLoaded', function () {
  const gridItems = document.querySelectorAll('.section-three-item');
  const detailContents = document.querySelectorAll('.section-three-detail-content');

  // Ocultar todos los detalles por defecto
  detailContents.forEach(content => content.style.display = 'none');

  // Mostrar el contenido con data-target="content1" por defecto
  const defaultContentId = 'content1';
  document.getElementById(defaultContentId).style.display = 'flex';

  gridItems.forEach(item => {
    item.addEventListener('click', function () {
      // Ocultar todos los detalles
      detailContents.forEach(content => content.style.display = 'none');
      
      // Quitar la clase active de todos los items
      gridItems.forEach(i => i.classList.remove('active'));

      // Agregar la clase active al item clickeado
      this.classList.add('active');
      
      // Mostrar el detalle correspondiente
      const target = this.getAttribute('data-target');
      document.getElementById(target).style.display = 'flex';
    });
  });
});
