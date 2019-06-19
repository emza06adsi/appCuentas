
var html = "";
const conceptosNombre = {
    tiendaSuper: "tiendaSuper",
    gastosFijos: "gastosFijos",
    formación: "formación",
    ocio: "ocio",
    transporte: "transporte",
    vivienda: "vivienda",
    saludBienestar: "saludBienestar",
    seguros: "seguros",
    servicios: "servicios",
    mascotas: "mascotas"
}
for (const key in conceptosNombre) {
    html += `<option>${key} <option>`
}
document.getElementById("tipoGasto").innerHTML = html


function tipoConcepto() {
    let html = "";
    let conceptos = {
        tiendaSuper: [
            "Alimentación", "Limpieza", "Perfumería", "Hogar y Menaje", "Ropa",
            "Calzado", "Informática", "Regalos", "Varios"
        ],
        gastosFijos: [
            "Agua", "Luz", "Gas", "Teléfono", "Comunidad", "Servicio", "Televisión", "GOtros"
        ],
        formación: [
            "Colegio", "Extraescolares", "Libros", "Excursiones", "Cursos", "fVarios"
        ],
        ocio: [
            "Vacaciones", "Excursiones", "Espectáculos", "Deporte", "Restaurantes", "Bares", "Libros y Revistas",
            "Juegos", "Música", "oOtros"
        ],
        transporte: [
            "Taller", "Combustible", "Seguros", "Multas", "Impuestos", "Público", "Correos", "TOtros",
        ],
        vivienda: [
            "Muebles", "Electrodomesticos", "Reparaciones", "V- Informática", "Impuestos", "V - Otros",
        ],
        saludBienestar: ["Médicos", "Farmacia", "S - Otros", "Cuidado Personal",
        ],
        seguros: [
            "Vivienda", "Vida", "Jubilación", "Electrodomesticos"
        ],
        servicios: ["Luz", "Agua y Basura", "Gasoleo", "Impuestos", "Mantenimiento", "Jardinería", "C - Otros",
        ],
        mascotas: [
            "Alimentos", "Salud", "Juguetes", "M - Otros",
        ]
    }
    var concepto = document.getElementById("tipoGasto").value;
 // console.table(conceptosNombre[key])
 if (concepto == "tiendaSuper") {
    conceptos.tiendaSuper.forEach(element => {
       html += `<option>${element} <option>`
    });
}
else if (concepto == "gastosFijos") {
    conceptos.gastosFijos.forEach(element => {
       html += `<option>${element} <option>`
    });
}
else if (concepto == "formación") {
    conceptos.formación.forEach(element => {
       html += `<option>${element} <option>`
    });
} else if (concepto == "ocio") {
    conceptos.ocio.forEach(element => {
       html += `<option>${element} <option>`
    });
} else if (concepto == 'transporte') {
    conceptos.transporte.forEach(element => {
       html += `<option>${element} <option>`
    });
} else if (concepto == "vivienda") {
    conceptos.vivienda.forEach(element => {
       html += `<option>${element} <option>`
    });
} else if (concepto == "saludBienestar") {
    conceptos.saludBienestar.forEach(element => {
       html += `<option>${element} <option>`
    });
} else if (concepto == "seguros") {
    conceptos.seguros.forEach(element => {
       html += `<option>${element} <option>`
    });
} else if (concepto == "servicios") {
    conceptos.servicios.forEach(element => {
       html += `<option>${element} <option>`
    });
} else if (concepto == "mascotas") {
    conceptos.mascotas.forEach(element => {
       html += `<option>${element} <option>`
    });
} else {
    html += ""
}
document.getElementById("gasto").innerHTML = html;
}
