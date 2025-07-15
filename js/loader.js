function includeHTML(targetId, filePath) {
  return fetch(filePath)
    .then(res => {
      if (!res.ok) throw new Error(`No se pudo cargar ${filePath}`);
      return res.text();
    })
    .then(html => {
      document.getElementById(targetId).innerHTML = html;
    })
    .catch(err => {
      console.error(err);
    });
}


// Cargar todas las secciones
includeHTML('radicacion', 'form_radicacion.html').then(() => {
  const btn = document.getElementById('btnEnviarRadicacion');
  if (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      Swal.fire({
        title: '¿Está seguro?',
        text: '¿Deseas radicar esta solicitud?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, radicar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "radicacion.html";
        }
      });
    });
  }
});

includeHTML('main', 'filter_table.html')

