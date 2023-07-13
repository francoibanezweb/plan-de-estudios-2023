fetch('assets/JSON/plan.json')
  .then(response => response.json())
  .then(data => {
    const tabla = document.getElementById('tabla-asignaturas');
    const tbody = tabla.querySelector('tbody');

    data.troncal.niveles.forEach(nivel => {
      nivel.asignaturas.forEach(asignatura => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
              <td>${asignatura.nro}</td>
              <td>${asignatura.asignatura}</td>
              <td>${asignatura.horas.anuales}</td>
              <td>${asignatura.horas.cuatrim || '-'}</td>
              <td>${asignatura.correlatividades.cursada.join(', ')}</td>
              <td>${asignatura.correlatividades.aprobada.join(', ')}</td>
            `;
        tbody.appendChild(fila);
      });
    });
    data.electiva.niveles.forEach(nivel => {
      nivel.asignaturas.forEach(asignatura => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
              <td>${asignatura.nro}</td>
              <td>${asignatura.asignatura}</td>
              <td>${asignatura.horas.anuales}</td>
              <td>${asignatura.horas.cuatrim || '-'}</td>
            `;
        tbody.appendChild(fila);
      });
    });
  })
  .catch(error => {
    console.error('Error al leer el archivo JSON:', error);
  });
