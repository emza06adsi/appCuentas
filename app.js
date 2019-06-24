
firebase.initializeApp({
    apiKey: "AIzaSyDNDQi1Z6TGahCe-ckfa49a0TyToklU6CQ",
    authDomain: "cuentas-c7281.firebaseapp.com",
    projectId: "cuentas-c7281"
});

var db = firebase.firestore();
// ------------------------------------------------
// dom
function dom() {
    let opcion = document.getElementById('dom').value
    var html = ''
    if (opcion == 'egreso') {

        html += `<center>
                <label for="nombre"></label>
                <label for="tipo de gasto">tipo de gasto</label>
                <select class="form-control col-lg-6 my-3  " placeholder="tipoGasto" id="tipoGasto" value=""  onchange="tipoConcepto()">
                    <option>tiendaSuper</option>
                    <option>gastosFijos</option>
                    <option>formación</option>
                    <option>ocio</option>
                    <option>transporte</option>
                    <option>vivienda</option>
                    <option>saludBienestar</option>
                    <option>seguros</option>
                    <option>servicios</option>
                    <option>mascotas</option>
                </select>
                <label for="tipo de gasto">gasto</label>
                <select class="form-control col-lg-6 my-3  " placeholder="Gasto" id="gasto" value=""></select>
                <label for="tipo de gasto">fecha</label>
                <input type="date" name="" id="fecha" class="form-control col-lg-6 my-3  " >
                <label for="tipo de gasto">monto</label>
                <input type="text" placeholder="$$$$$$$$$$" name="" id="valor" class="form-control col-lg-6 my-3  " >
                <textarea class="form-control col-lg-6 my-3" placeholder="comentario" id=comentario value=""></textarea>
                <button class="btn btn-info col-lg-6" id="boton" onclick="guardar()">Guardar</button>
            </center>
            <!--  -->
            <table class="table table-striped table-bordered my-3">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th>tipo de gasto</th>
                    <th>gasto</th>
                    <th>comentario</th>
                    <th>fecha</th>
                    <th>editar</th>
                    <th>eliminar</th>
                </tr>
            </thead>
            <tbody id="tabla">
                
            </tbody>
                
            </table>
            <script src="app.js"></script>`
    }
    else if (opcion == 'ingreso') {
        html += `
            <center>
                <label for="tipo de ingreso">que ingresa</label>
                <input type="text" id="ingreso" value="" class="form-control col-lg-6 my-3">
                <label for="tipo de ingreso">fecha de ingreso</label>
                <input type="date" name="" id="fecha" value="" class="form-control col-lg-6 my-3  ">
                <label for="tipo de ingreso">valor de ingreso</label>
                <input type="text" name="" id="valor" value="" class="form-control col-lg-6 my-3  ">
                <textarea class="form-control col-lg-6 my-3" placeholder="comentario" id="comentario" value=""></textarea>
                <button class="btn btn-info col-lg-6" id="boton" onclick="guardar()">Guardar</button>
            </center>
            <!--  -->
            <table class="table table-striped table-bordered my-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th>Ingreso</th>
                        <th>Fecha</th>
                        <th>valor del ingreso</th>
                        <th>Comentario</th>
                        <th>Eliminar</th>
                        <th>Editar</th>
        
                    </tr>
                </thead>
                <tbody id="tabla">
        
                </tbody>
        
            </table>`
    }

    document.getElementById('egreso').innerHTML = html;

}
// -------------------------------------------------------------------------
// --egreso



function guardar() {
    let opcion = document.getElementById('dom').value

    if (opcion == 'egreso') {
        let tipoGasto = document.getElementById('tipoGasto').value
        let gasto = document.getElementById('gasto').value
        let comentario = document.getElementById('comentario').value
        let valor = document.getElementById('valor').value
        let fecha = document.getElementById("fecha").value


        db.collection("gastos").add({

            tipoGasto: tipoGasto,
            gasto: gasto,
            valor: valor,
            fecha: fecha,
            comentario: comentario

        })
            .then(function (docRef) {
                console.log("este es el id", docRef.id);
                console.log(db.collection("gastos"))
                tipoGasto = document.getElementById('tipoGasto').value = ""
                gasto = document.getElementById('gasto').value = ""
                comentario = document.getElementById('comentario').value = ""
                fecha = document.getElementById('fecha').value = ""
                valor = document.getElementById('valor').value = ""

            })
            .catch(function (error) {
                console.error("error", error);
            });
    }
    else if (opcion == 'ingreso') {
        let queIngresa = document.getElementById('ingreso').value
        let fecha = document.getElementById('fecha').value
        let valor = document.getElementById('valor').value
        let comentario = document.getElementById('comentario').value


        db.collection("ingresos").add({

            queIngresa: queIngresa,
            valorIngresado: valor,
            fecha: fecha,
            comentario: comentario

        })
            .then(function (docRef) {
                console.log("este es el id", docRef.id);
                console.log(db.collection("ingresos"))
                queIngresa = document.getElementById('ingreso').value = ""
                fecha = document.getElementById('fecha').value = ""
                valor = document.getElementById('valor').value = ""
                comentario = document.getElementById('comentario').value = ""


            })
            .catch(function (error) {
                console.error("error", error);
            });
    }

}
//base de satos
function leer() {
    let opcion = document.getElementById('dom').value

    if (opcion == "egreso") {
        var tabla = document.getElementById("tabla")
        db.collection("gastos").onSnapshot((querySnapshot) => {
            tabla.innerHTML = ""
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                tabla.innerHTML += `<tr>
        <th scope="row">${doc.id}</th>
        <th>${doc.data().tipoGasto}</th>
        <th>${doc.data().gasto}</th>
        <th>${doc.data().comentario}</th>
        <th>${doc.data().fecha}</th>
        
        <th>     <button class="btn btn-danger  id="boton" onclick="eliminar('${doc.id}')">Eliminar</button>
        </th>
        <th>     <button class="btn btn-warning  id="" onclick="editar('${doc.id}','${doc.data().tipoGasto}','${doc.data().gasto}',
        '${doc.data().comentario}','${doc.data().fecha}')">Editar</button>
        </th>

    </tr>`
            });
        });
    }
    else if (opcion == "ingreso") {
        var tabla = document.getElementById("tabla")
        db.collection("ingresos").onSnapshot((querySnapshot) => {
            tabla.innerHTML = ""
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                tabla.innerHTML += `<tr>
        <th scope="row">${doc.id}</th>
        <th>${doc.data().queIngresa}</th>
        <th>${doc.data().valorIngresado}</th>
        <th>${doc.data().fecha}</th>
        <th>${doc.data().comentario}</th>
        
        <th>     <button class="btn btn-danger  id="boton" onclick="eliminar('${doc.id}')">Eliminar</button>
        </th>
        <th>     <button class="btn btn-warning  id="" onclick="editarI('${doc.id}','${doc.data().queIngresa}','${doc.data().valorIngresado}',
        '${doc.data().fecha}','${doc.data().comentario}')">Editar</button>
        </th>

    </tr>`
            });
        });
    }
}
// borrar
//aca voyMM
function eliminar(id) {
    let opcion = document.getElementById('dom').value
    if (opcion == "egreso") {
        db.collection("gastos").doc(id).delete().then(function () {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
    }
    else if (opcion == "ingreso") {
        // console.log("eliminando el sistema")
        db.collection("ingresos").doc(id).delete().then(function () {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
    }
}


// actualizar
function editar(id, tipoGasto, gasto, comentario, fecha) {
    document.getElementById('tipoGasto').value = tipoGasto
    document.getElementById('gasto').value = gasto
    document.getElementById('comentario').value = comentario
    document.getElementById("fecha").value = fecha
    var boton = document.getElementById('boton')
    boton.innerHTML = 'Editar'

    boton.onclick = function () {
        var washingtonRef = db.collection("gastos").doc(id);

        let tipoGasto = document.getElementById('tipoGasto').value;
        let gasto = document.getElementById('gasto').value
        let comentario = document.getElementById('comentario').value
        let fecha = document.getElementById("fecha").value


        return washingtonRef.update({
            tipoGasto: tipoGasto,
            gasto: gasto,
            comentario: comentario,
            fecha: fecha

        })
            .then(function () {
                console.log("Document successfully updated!");
                boton.innerHTML = 'Guardar'


                tipoGasto = document.getElementById('tipoGasto').value = ""
                gasto = document.getElementById('gasto').value = ""
                comentario = document.getElementById('comentario').value = ""
                fecha = document.getElementById('fecha').value = ""

                boton.onclick = function () {
                    let tipoGasto = document.getElementById('tipoGasto').value
                    let gasto = document.getElementById('gasto').value
                    let comentario = document.getElementById('comentario').value
                    let valor = document.getElementById('valor').value
                    let fecha = document.getElementById("fecha").value


                    db.collection("gastos").add({

                        tipoGasto: tipoGasto,
                        gasto: gasto,
                        valor: valor,
                        fecha: fecha,
                        comentario: comentario

                    })
                        .then(function (docRef) {
                            console.log("este es el id", docRef.id);
                            console.log(db.collection("gastos"))
                            tipoGasto = document.getElementById('tipoGasto').value = ""
                            gasto = document.getElementById('gasto').value = ""
                            comentario = document.getElementById('comentario').value = ""
                            fecha = document.getElementById('fecha').value = ""
                            valor = document.getElementById('valor').value = ""

                        })
                        .catch(function (error) {
                            console.error("error", error);
                        });
                }
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });


    }

}




function editarI(
    id,
    queIngresa,
    valorIngresado,
    fecha,
    comentario) {
    alert(id + " id " + queIngresa + " ingreso " + valorIngresado + " valor " + fecha + " fecha " + comentario + " comentario ")
    document.getElementById('ingreso').value = queIngresa
    document.getElementById('valor').value = valorIngresado
    document.getElementById('comentario').value = comentario
    document.getElementById("fecha").value = fecha
    var boton = document.getElementById('boton')
    boton.innerHTML = 'Editar'

    boton.onclick = function () {
        var washingtonRef = db.collection("ingresos").doc(id);


        let queIngresa = document.getElementById('ingreso').value;
        let valorIngresado = document.getElementById('valor').value
        let comentario = document.getElementById('comentario').value
        let fecha = document.getElementById("fecha").value


        return washingtonRef.update({
            queIngresa: queIngresa,
            valorIngresado: valorIngresado,
            comentario: comentario,
            fecha: fecha

        })
            .then(function () {
                
                console.log("Document successfully updated!");
                boton.innerHTML = 'Guardar'

                queIngresa = document.getElementById('ingreso').value = ""
                valorIngresado = document.getElementById('valor').value = ""
                comentario = document.getElementById('comentario').value = ""
                fecha = document.getElementById('fecha').value = ""

                boton.onclick = function () {
                    let queIngresa = document.getElementById('ingreso').value
                    let fecha = document.getElementById('fecha').value
                    let valor = document.getElementById('valor').value
                    let comentario = document.getElementById('comentario').value
            
            
                    db.collection("ingresos").add({
            
                        queIngresa: queIngresa,
                        valorIngresado: valor,
                        fecha: fecha,
                        comentario: comentario
            
                    })
                        .then(function (docRef) {
                            console.log("este es el id", docRef.id);
                            console.log(db.collection("ingresos"))
                            queIngresa = document.getElementById('ingreso').value = ""
                            fecha = document.getElementById('fecha').value = ""
                            valor = document.getElementById('valor').value = ""
                            comentario = document.getElementById('comentario').value = ""
            
            
                        })
                        .catch(function (error) {
                            console.error("error", error);
                        });
                    
                
                
                
                
                
                
                
                
                
                
                
                
                    
                }

            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });


    }


}


// -------------------------------------------------------------------------
// --ingreso
