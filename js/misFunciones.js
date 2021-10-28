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

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].id + "</td>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "<td><button onclick=\"obtenerItemEspecificoCategorias(" +  respuesta[i].id + ")\">Editar</button></td>";
        myTable += "<td><button onclick=\"borrarInformacionCategorias(" +  respuesta[i].id + ")\">Eliminar</button></td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado1").html(myTable);
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

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].id + "</td>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].brand + "</td>";
        myTable += "<td>" + respuesta[i].year + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "<td><button onclick=\"obtenerItemEspecificoOrtopedics(" +  respuesta[i].id + ")\">Editar</button></td>";
        myTable += "<td><button onclick=\"borrarInformacionOrtopedics(" +  respuesta[i].id + ")\">Eliminar</button></td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado2").html(myTable);
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

    $("#Aid").val('');
    $("#Aname").val('');
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

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].idClient + "</td>";
        myTable += "<td>" + respuesta[i].email + "</td>";
        //myTable +="<td>"  + respuesta[i].password+"</td>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].age + "</td>";
        myTable += "<td><button onclick=\"obtenerItemEspecificoClients(" +  respuesta[i].idClient + ")\">Editar</button></td>";
        myTable += "<td><button onclick=\"borrarInformacionClients(" +  respuesta[i].idClient + ")\">Eliminar</button></td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado3").html(myTable);
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

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].idMessage + "</td>";
        myTable += "<td>" + respuesta[i].messageText + "</td>";
        myTable += "<td><button onclick=\"obtenerItemEspecificoMessages(" +  respuesta[i].idMessage + ")\">Editar</button></td>";
        myTable += "<td><button onclick=\"borrarInformacionMessages(" +  respuesta[i].idMessage + ")\">Eliminar</button></td>";
        myTable += "</tr>";
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

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].idReservation + "</td>";
        myTable += "<td>" + respuesta[i].startDate + "</td>";
        myTable += "<td>" + respuesta[i].devolutionDate + "</td>";
        myTable += "<td>" + respuesta[i].status + "</td>";
        myTable += "<td><button onclick=\"obtenerItemEspecificoReservations(" +  respuesta[i].idReservation + ")\">Editar</button></td>";
        myTable += "<td><button onclick=\"borrarInformacionReservations(" +  respuesta[i].idReservation + ")\">Eliminar</button></td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado5").html(myTable);
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
            $("#RstartDateate").val();
            $("#RdevolutionDate").val();
            $("#Rstatus").val();

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

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].idAdmin + "</td>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].email + "</td>";
        //myTable += "<td>" + respuesta[i].password + "</td>";
        myTable += "<td><button onclick=\"obtenerItemEspecificoAdmins(" +  respuesta[i].idAdmin + ")\">Editar</button></td>";
        myTable += "<td><button onclick=\"borrarInformacionAdmins(" +  respuesta[i].idAdmin + ")\">Eliminar</button></td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado6").html(myTable);
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


