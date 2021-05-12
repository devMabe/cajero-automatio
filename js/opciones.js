var saldoActual = 0;

function consultaSaldo() {
  var saldoDisponible = saldoActual;
  var saldo = document.getElementById("saldoactual");

  if (saldoDisponible === 0) {
    swal({
      title: "Banco Afonca.S.A",
      icon: "error",
      text: "No cuenta con suficiente saldo",
      button: "Aceptar",

    });
  }
  if (saldoDisponible < saldoActual) {
    swal({
      title: "Banco Afonca.S.A",
      icon: "warning",
      text: "Actualmente no tiene suficiente fondo!",
      button: "Aceptar",
    });
  } else {
    saldo.innerHTML = `Usted cuenta con un saldo de:$${saldoActual}.00`;
  }
}

function depositarSaldo() {
  var saldoDepositar = saldoActual;
  var depositar = parseFloat(document.getElementById("montoDepositar").value);
  var saldo = document.getElementById("saldoactual");

  if (depositar > 0.0 && depositar != 0) {

    saldoDepositar = saldoDepositar + depositar;
    saldoActual = saldoDepositar;
    limpiar();
    saldo.innerHTML = `Saldo actual:$${saldoActual}.00`;

    swal({
      title: "Banco Afonca.S.A",
      text: "Se ha realizado el deposito correctamente!",
      icon: "success",
      button: "Aceptar",

    });
    document.getElementById("montoDepositar").focus();
  } else {
    swal('Banco Afonca S.A', 'Para depositar debe ingresar el valor al campo que sea mayor a 0.00', 'warning');
    limpiar();
    document.getElementById("montoDepositar").focus();
  }
}



function retirarSaldo() {
  var saldoRetirar = saldoActual;
  var retirar = parseFloat(document.getElementById("montoRetirar").value);
  var saldo = document.getElementById("saldoactual");


  if (retirar == 0) {
    swal({
      title: "Banco Afonca.S.A",
      icon: "warning",
      text: "Para poder realizar el retiro debe ingresar un valor mayor a 0.00",
      button: "Aceptar",
    });
    limpiar();
  }

  if (retirar < 0) {
    swal({
      title: "Banco Afonca.S.A",
      icon: "error",
      text: "No se aceptan valores negativos.",
      button: "Aceptar",
    });

    limpiar();
    document.getElementById("montoRetirar").focus();
  }
  if (saldoRetirar == 0) {
    swal({
      title: "Banco Afonca.S.A",
      icon: "warning",
      text: "Su saldo actual es de $0.00, deposite para poder continuar con la transasion.",
      button: "Aceptar",
    });

    limpiar();
  }

  if (retirar > saldoRetirar) {
    swal({
      title: "Banco Afonca.S.A",
      icon: "error",
      text: "El retiro solicitado es mayor al saldo disponible!",
      button: "Aceptar",
    });
    limpiar();

    document.getElementById("montoRetirar").focus();
  }

  if (retirar <= saldoRetirar && retirar > 0 && retirar != 0) {
    saldoRetirar = saldoRetirar - retirar;
    saldoActual = saldoRetirar;

    saldo.innerHTML = `Saldo actual:$${saldoActual}.00`;
    swal({
      title: "Banco Afonca.S.A",
      icon: "success",
      text: "Se ha realizado el retiro correctamente!",
      button: "Aceptar",
    });
    limpiar();
    document.getElementById("montoRetirar").focus();
  } else {

    saldo.innerHTML = 'Debe ingresar el valor al campo!';
    limpiar();
    document.getElementById("montoRetirar").focus();
  }
}

function limpiar() {
  document.getElementById("montoRetirar").value = "";
  document.getElementById("montoDepositar").value = "";
}