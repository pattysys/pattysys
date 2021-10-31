$(document).ready(function(){
    traerInformacionCategorias();
});

function traerInformacionCategorias() {
    $.ajax({
        url: "http://localhost:8080/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(respuesta) {
    let myTable = `<div class="container"><div class="row">`;
    for(i=0;i <respuesta.length;i++){
        myTable += `<div class="card m-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${respuesta[i].name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${respuesta[i].description}</h6>
                  <button class="btn btn-danger" onclick = "obtenerItemEspecificoCategorias(${respuesta[i].id})">Editar</button>
                  <button class="btn btn-danger" onclick = "borrarInformacionCategorias(${respuesta[i].id})">Eliminar</button>
                </div>
            </div>`
    }

    myTable+= "</div></div>";
    $("#resultado1").append(myTable);


}

function guardarInformacionCategorias() {
    let var2 = {
        name: $("#Cname").val(),
        description: $("#Cdescription").val()
    };

    $.ajax({
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            dataType: 'JSON',
            data: JSON.stringify(var2),

            url: "http://localhost:8080/api/Category/save",


            success: function (response) {
                console.log(response);
                console.log("Se guardo correctamente");
                alert("Se guardo correctamente");
                window.location.reload()

            },

            error: function (jqXHR, textStatus, errorThrown) {
                window.location.reload()
                alert("No se guardo correctamente");


            }
        }
    );
}
function borrarInformacionCategorias(idElemento) {

    //JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        url: 'http://localhost:8080/api/Category/' + idElemento,
        type: 'DELETE',
        contentType: 'application/json',

        success: function (response) {
            console.log(response);
            alert("Se elimino correctamente");
            window.location.reload()
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}

function obtenerItemEspecificoCategorias(idItem) {
    $.ajax({
        dataType: 'json',
        url: 'http://localhost:8080/api/Category/' + idItem,
        type: 'GET',
        success: function (response) {
            console.log(response);



            var item = response;

            $("#Cid").val(item.id);
            $("#Cname").val(item.name);
            $("#Cdescription").val(item.description);

            $("#CbuttonSave").attr('disabled', true);
            $("#CbuttonUpdate").attr('disabled', false);


        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

}

clearCategoryForm = () => {

    $("#Cid").val('');
    $("#Cname").val('');
    $("#Cdescription").val('');

    $("#CbuttonSave").attr('disabled', false);
    $("#CbuttonUpdate").attr('disabled', true);
}

function actualizarInformacionCategorias() {

    if (!$('#Cid').val()) {
        alert('Debes ingresar un id');
        return;
    }
    var elemento = {
        id: $("#Cid").val(),
        name: $("#Cname").val(),
        description: $("#Cdescription").val()

    }

    var dataToSend = JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    $.ajax({
        type: "PUT",
        url: 'http://localhost:8080/api/Category/update',
        dataType: "text",
        async: false,
        data: dataToSend,
        contentType: "application/json; charset=utf-8",

        success: function (response) {

            $("#miResultado").empty();
            $("#Cid").val();
            $("#Cname").val();
            $("#Cdescription").val();

            alert("Se actualizo correctamente");
            window.location.reload()
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

    disableCreate = (id) => {
        return ($('#' + id).val() != '') ? true : false;
    }

    disableUpdate = (id) => {
        return ($('#' + id).val() != '') ? false : true;
    }

}



///=======================================================ortopedics=============================
$(document).ready(function(){
    traerInformacionOrtopedics();
});

function traerInformacionOrtopedics() {
        $.ajax({
            url: "http://localhost:8080/api/Ortopedic/all",
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                console.log(respuesta);
                pintarRespuestaOrtopedics(respuesta);
            }
        });
    }

function pintarRespuestaOrtopedics(respuesta) {
    let myTable = `<div class=""container"><div class="row">`;
    for(i=0;i <respuesta.length;i++){
        myTable+=  `<div class="card m-2" style="width: 18rem;" >
                        <div class="card-body">
                          <h5 class="card-title">${respuesta[i].name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${respuesta[i].brand}</h6>
                               <h6 className="card-subtitle mb-2 text-muted">${respuesta[i].year}</h6>
                                <p class="card text">${respuesta[i].description}</p>
                        <button class="btn btn-danger" onclick = "obtenerItemEspecificoOrtopedics(${respuesta[i].id})">Editar</button>
                        <button class="btn btn-danger" onclick = "borrarInformacionOrtopedics(${respuesta[i].id})">Eliminar</button>
                  </div>
            </div>`
                    }
       myTable+= "</div></div>";
    $("#resultado2").append(myTable);

}

function guardarInformacionOrtopedics() {
        let var3 = {
            name: $("#Oname").val(),
            brand: $("#Obrand").val(),
            year: $("#Oyear").val(),
            description: $("#Odescription").val(),
        };

        $.ajax({
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            dataType: 'JSON',
            data: JSON.stringify(var3),

            url: "http://localhost:8080/api/Ortopedic/save",


            success: function (response) {
                console.log(response);
                console.log("Se guardo correctamente");
                alert("Se guardo correctamente");
                window.location.reload()

            },

            error: function (jqXHR, textStatus, errorThrown) {
                window.location.reload()
                alert("No se guardo correctamente");


            }
        });

    }
function borrarInformacionOrtopedics(idElemento) {

        //JSON= JavaScript Object Notation
        $.ajax({
            dataType: 'json',
            url: 'http://localhost:8080/api/Ortopedic/' + idElemento,
            type: 'DELETE',
            contentType: 'application/json',
            success: function (response) {
                console.log(response);
                alert("Se elimino correctamente");
                window.location.reload()
            },

            error: function (jqXHR, textStatus, errorThrown) {

            }
        });
    }


function obtenerItemEspecificoOrtopedics(idItem) {
        $.ajax({
            dataType: 'json',
            url: 'http://localhost:8080/api/Ortopedic/' + idItem,
            type: 'GET',
            success: function (response) {
                console.log(response);
                var item = response;

                $("#Oid").val(item.id);
                $("#Oname").val(item.name);
                $("#Obrand").val(item.brand);
                $("#Oyear").val(item.year);
                $("#Odescription").val(item.description);

                $("#ObuttonSave").attr('disabled', true);
                $("#ObuttonUpdate").attr('disabled', false);
            },

            error: function (jqXHR, textStatus, errorThrown) {

            }
        });

    }

clearOrtopedicForm = () => {

        $("#Oid").val('');
        $("#Oname").val('');
        $("#Obrand").val('');
        $("#Oyear").val('');
        $("#Odescription").val('');

        $("#ObuttonSave").attr('disabled', false);
        $("#ObuttonUpdate").attr('disabled', true);
    }

function actualizarInformacionOrtopedics() {

        if (!$('#Oid').val()) {
            alert('Debes ingresar un id');
            return;
        }
        var elemento = {
            id: $("#Oid").val(),
            name: $("#Oname").val(),
            brand: $("#Obrand").val(),
            year: $("#Oyear").val(),
            description: $("#Odescription").val()
        }

        var dataToSend = JSON.stringify(elemento);
        //JSON= JavaScript Object Notation
        $.ajax({
            type: "PUT",
            url: 'http://localhost:8080/api/Ortopedic/update',
            dataType: "text",
            async: false,
            data: dataToSend,
            contentType: "application/json; charset=utf-8",

            success: function (response) {

                $("#miResultado").empty();
                $("#Oid").val();
                $("#Oname").val();
                $("#Obrand").val();
                $("#Oyear").val();
                $("#Odescription").val();

                alert("Se actualizo correctamente");
                window.location.reload()
            },

            error: function (jqXHR, textStatus, errorThrown) {

            }
        });

        disableCreate = (id) => {
            return ($('#' + id).val() != '') ? true : false;
        }

        disableUpdate = (id) => {
            return ($('#' + id).val() != '') ? false : true;
        }

}

///===================================================clients ========================
$(document).ready(function(){
    traerInformacionClients();
});
function traerInformacionClients() {
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaClients(respuesta);
        }
    });
}

function pintarRespuestaClients(respuesta) {

    let myTable = `<div class=""container"><div class="row">`;
    for(i=0;i <respuesta.length;i++){
        myTable+=  `<div class="card m-2" style="width: 18rem;" >
                        <div class="card-body">
                          <h5 class="card-title">${respuesta[i].name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${respuesta[i].email}</h6>
                               <h6 className="card-subtitle mb-2 text-muted">${respuesta[i].age}</h6>
                        <button class="btn btn-danger" onclick = "obtenerItemEspecificoClients(${respuesta[i].idClient})">Editar</button>
                        <button class="btn btn-danger" onclick = "borrarInformacionClients(${respuesta[i].idClient})">Eliminar</button>
                  </div>
            </div>`
    }
    myTable+= "</div></div>";
    $("#resultado3").append(myTable);

}

function guardarInformacionClients() {
    let var4 = {
        email: $("#Clemail").val(),
        password: $("#Clpassword").val(),
        name: $("#Clname").val(),
        age: $("#Clage").val()
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),

        url: "http://localhost:8080/api/Client/save",


        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");


        }
    });

}
function borrarInformacionClients(idElemento) {

    //JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        url: 'http://localhost:8080/api/Client/' + idElemento,
        type: 'DELETE',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
            alert("Se elimino correctamente");
            window.location.reload()
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}


function obtenerItemEspecificoClients(idItem) {
    $.ajax({
        dataType: 'json',
        url: 'http://localhost:8080/api/Client/' + idItem,
        type: 'GET',
        success: function (response) {
            console.log(response);
            var item = response;

            $("#Clid").val(item.idClient);
            $("#Clname").val(item.name);
            $("#Clemail").val(item.email);
            $("#Clpassword").val(item.password);
            $("#Clage").val(item.age);

            $("#ClbuttonSave").attr('disabled', true);
            $("#ClbuttonUpdate").attr('disabled', false);
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

}

clearClientForm = () => {

    $("#Clid").val('');
    $("#Clname").val('');
    $("#Clemail").val('');
    $("#Clpassword").val('');
    $("#Clage").val('');

    $("#ClbuttonSave").attr('disabled', false);
    $("#ClbuttonUpdate").attr('disabled', true);
}

function actualizarInformacionClients() {

    if (!$('#Clid').val()) {
        alert('Debes ingresar un id');
        return;
    }
    var elemento = {
        idClient: $("#Clid").val(),
        name: $("#Clname").val(),
        email: $("#Clemail").val(),
        password: $("#Clpassword").val(),
        age: $("#Clage").val()
    }

    var dataToSend = JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    $.ajax({
        type: "PUT",
        url: 'http://localhost:8080/api/Client/update',
        dataType: "text",
        async: false,
        data: dataToSend,
        contentType: "application/json; charset=utf-8",

        success: function (response) {

            $("#miResultado").empty();
            $("#Clid").val();
            $("#Clname").val();
            $("#Clemail").val();
            $("#Clpassword").val();
            $("#Clage").val();

            alert("Se actualizo correctamente");
            window.location.reload()
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

    disableCreate = (id) => {
        return ($('#' + id).val() != '') ? true : false;
    }

    disableUpdate = (id) => {
        return ($('#' + id).val() != '') ? false : true;
    }

}

//==================================================messages=========================
$(document).ready(function(){
    traerInformacionMessages();
});

function traerInformacionMessages() {
    $.ajax({
        url: "http://localhost:8080/api/Message/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaMessages(respuesta);
        }
    });
}

function pintarRespuestaMessages(respuesta) {
    let myTable = `<div class=""container"><div class="row">`;
    for(i=0;i <respuesta.length;i++){
        myTable+=  `<div class="card m-2" style="width: 18rem;" >
                        <div class="card-body">
                          <h5 class="card-title">${respuesta[i].messageText}</h5>
                        <button class="btn btn-danger" onclick = "obtenerItemEspecificoMessages(${respuesta[i].idMessage})">Editar</button>
                        <button class="btn btn-danger" onclick = "borrarInformacionMessages(${respuesta[i].idMessage})">Eliminar</button>
                  </div>
            </div>`

    }
    myTable += "</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMessages() {
    let var5 = {
        idMessage: $("#idMessage").val(),
        messageText: $("#MmessageText").val(),
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var5),

        url: "http://localhost:8080/api/Message/save",


        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");


        }
    });

}
function borrarInformacionMessages(idElemento) {

    //JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        url: 'http://localhost:8080/api/Message/' + idElemento,
        type: 'DELETE',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
            alert("Se elimino correctamente");
            window.location.reload()
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}


function obtenerItemEspecificoMessages(idItem) {
    $.ajax({
        dataType: 'json',
        url: 'http://localhost:8080/api/Message/' + idItem,
        type: 'GET',
        success: function (response) {
            console.log(response);
            var item = response;

            $("#Mid").val(item.idMessage);
            $("#MmessageText").val(item.messageText);

            $("#MbuttonSave").attr('disabled', true);
            $("#MbuttonUpdate").attr('disabled', false);
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

}

clearMessageForm = () => {

    $("#Mid").val('');
    $("#MmessageText").val('');

    $("#MbuttonSave").attr('disabled', false);
    $("#MbuttonUpdate").attr('disabled', true);
}

function actualizarInformacionMessages() {

    if (!$('#Mid').val()) {
        alert('Debes ingresar un id');
        return;
    }
    var elemento = {
        idMessage: $("#Mid").val(),
        messageText: $("#MmessageText").val()
    }

    var dataToSend = JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    $.ajax({
        type: "PUT",
        url: 'http://localhost:8080/api/Message/update',
        dataType: "text",
        async: false,
        data: dataToSend,
        contentType: "application/json; charset=utf-8",

        success: function (response) {

            $("#miResultado").empty();
            $("#Mid").val();
            $("#MmessageText").val();

            alert("Se actualizo correctamente");
            window.location.reload()
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

    disableCreate = (id) => {
        return ($('#' + id).val() != '') ? true : false;
    }

    disableUpdate = (id) => {
        return ($('#' + id).val() != '') ? false : true;
    }

}

//======================================================reservations=====================
$(document).ready(function(){
    traerInformacionReservations();
});


function traerInformacionReservations() {
    $.ajax({
        url: "http://localhost:8080/api/Reservation/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaReservations(respuesta);
        }
    });
}

function pintarRespuestaReservations(respuesta) {

    let myTable = `<div class=""container"><div class="row">`;
    for(i=0;i <respuesta.length;i++){
        myTable+=  `<div class="card m-2" style="width: 18rem;" >
                        <div class="card-body">
                          <h5 class="card-title">${respuesta[i].startDate}</h5>
                          <h5 class="card-title">${respuesta[i].devolutionDate}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${respuesta[i].status}</h6>
                        <button class="btn btn-danger" onclick = "obtenerItemEspecificoReservations(${respuesta[i].idReservation})">Editar</button>
                        <button class="btn btn-danger" onclick = "borrarInformacionReservations(${respuesta[i].idReservation})">Eliminar</button>
                  </div>
            </div>`
    }
    myTable += "</table>";
    $("#resultado6").html(myTable);
}

function guardarInformacionReservations() {
    let var6 = {
        startDate: $("#RstartDate").val(),
        devolutionDate: $("#RdevolutionDate").val(),
        status: $("#Rstatus").val(),

    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var6),
        url: "http://localhost:8080/api/Reservation/save",

        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");

        }
    });

}

function borrarInformacionReservations(idElemento) {

    //JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        url: 'http://localhost:8080/api/Reservation/' + idElemento,
        type: 'DELETE',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
            alert("Se elimino correctamente");
            window.location.reload()
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}


function obtenerItemEspecificoReservations(idItem) {
    $.ajax({
        dataType: 'json',
        url: 'http://localhost:8080/api/Reservation/' + idItem,
        type: 'GET',
        success: function (response) {
            console.log(response);
            var item = response;

            $("#Rid").val(item.idReservation);
            $("#RstartDate").val(item.startDate.split('T')[0]);
            $("#RdevolutionDate").val(item.devolutionDate.split('T')[0]);
            $("#Rstatus").val(item.status);

            $("#RbuttonSave").attr('disabled', true);
            $("#RbuttonUpdate").attr('disabled', false);
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

}

clearReservationForm = () => {

    $("#Rid").val('');
    $("#RstartDate").val('');
    $("#RdevolutionDate").val('');
    $("#Rstatus").val('');

    $("#RbuttonSave").attr('disabled', false);
    $("#RbuttonUpdate").attr('disabled', true);
}

function actualizarInformacionReservations() {

    if (!$('#Rid').val()) {
        alert('Debes ingresar un id');
        return;
    }
    var elemento = {
        idReservation: $("#Rid").val(),
        startDate: $("#RstartDate").val(),
        devolutionDate: $("#RdevolutionDate").val(),
        status: $("#Rstatus").val()
    }

    var dataToSend = JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    $.ajax({
        type: "PUT",
        url: 'http://localhost:8080/api/Reservation/update',
        dataType: "text",
        async: false,
        data: dataToSend,
        contentType: "application/json; charset=utf-8",

        success: function (response) {

            $("#miResultado").empty();
            $("#Rid").val();
            $("#RstartDate").val();
            $("#RdevolutionDate").val();
            $("#Rstatus").val();

            alert("Se actualizo correctamente");
            window.location.reload()
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

    disableCreate = (id) => {
        return ($('#' + id).val() != '') ? true : false;
    }

    disableUpdate = (id) => {
        return ($('#' + id).val() != '') ? false : true;
    }

}

//===========================================ADMINI===================================================================
$(document).ready(function(){
    traerInformacionAdmins();
});

function traerInformacionAdmins() {
    $.ajax({
        url: "http://localhost:8080/api/Admin/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaAdmins(respuesta);
        }
    });
}

function pintarRespuestaAdmins(respuesta) {

    let myTable = `<div class=""container"><div class="row">`;
    for(i=0;i <respuesta.length;i++){
        myTable+=  `<div class="card m-2" style="width: 18rem;" >
                        <div class="card-body">
                          <h5 class="card-title">${respuesta[i].name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${respuesta[i].email}</h6>
                        <button class="btn btn-danger" onclick = "obtenerItemEspecificoAdmins(${respuesta[i].idAdmin})">Editar</button>
                        <button class="btn btn-danger" onclick = "borrarInformacionAdmins(${respuesta[i].idAdmin})">Eliminar</button>
                  </div>
            </div>`
    }
    myTable+= "</div></div>";
    $("#resultado7").append(myTable);

}

function guardarInformacionAdmins() {
    let var7 = {
        idAdmin: $("#Aid").val(),
        name: $("#Aname").val(),
        email: $("#Aemail").val(),
        password: $("#Apassword").val(),
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var7),
        url: "http://localhost:8080/api/Admin/save",



        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");


        }
    });

}
function borrarInformacionAdmins(idElemento) {

    //JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        url: 'http://localhost:8080/api/Admin/' + idElemento,
        type: 'DELETE',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
            alert("Se elimino correctamente");
            window.location.reload()
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}


function obtenerItemEspecificoAdmins(idItem) {
    $.ajax({
        dataType: 'json',
        url: 'http://localhost:8080/api/Admin/' + idItem,
        type: 'GET',
        success: function (response) {
            console.log(response);
            var item = response;

            $("#Aid").val(item.idAdmin);
            $("#Aname").val(item.name);
            $("#Aemail").val(item.email);
            $("#Apassword").val(item.password);

            $("#AbuttonSave").attr('disabled', true);
            $("#AbuttonUpdate").attr('disabled', false);
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

}

clearAdminForm = () => {

    $("#Aid").val('');
    $("#Aname").val('');
    $("#Aemail").val('');
    $("#Apassword").val('');

    $("#AbuttonSave").attr('disabled', false);
    $("#AbuttonUpdate").attr('disabled', true);
}

function actualizarInformacionAdmins() {

    if (!$('#Aid').val()) {
        alert('Debes ingresar un id');
        return;
    }
    var elemento = {
        idAdmin: $("#Aid").val(),
        name: $("#Aname").val(),
        email: $("#Aemail").val(),
        password: $("#Apassword").val()
    }

    var dataToSend = JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    $.ajax({
        type: "PUT",
        url: 'http://localhost:8080/api/Admin/update',
        dataType: "text",
        async: false,
        data: dataToSend,
        contentType: "application/json; charset=utf-8",

        success: function (response) {

            $("#miResultado").empty();
            $("#Aid").val();
            $("#Aname").val();
            $("#Aemail").val();
            $("#Apassword").val();

            alert("Se actualizo correctamente");
            window.location.reload()
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

    disableCreate = (id) => {
        return ($('#' + id).val() != '') ? true : false;
    }

    disableUpdate = (id) => {
        return ($('#' + id).val() != '') ? false : true;
    }

}


