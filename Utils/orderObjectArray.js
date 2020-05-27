
    let ciudadesOrdenadas = [];
    let nombresCiudades = CIUDADES.map(ciudad => ciudad.dsNombre).sort();
    nombresCiudades.forEach(ciudad => {
        ciudadesOrdenadas.push(CIUDADES.filter(ciudadDesordenada => ciudadDesordenada.dsNombre === ciudad)[0]);
    });
