var saldoActual = 0;

function consultaSaldo() {
  var saldoDisponible = saldoActual;
  var saldo = document.getElementById("saldoactual");

  if (saldoDisponible === 0) {
    Swal.fire({
      title: "Banco Afonca.S.A",
      icon: "error",
      html: "<b class='purple'>No cuenta con suficiente saldo</b>",
      confirmButtonColor: "#5B2C6F",
    });
  }
  if (saldoDisponible < saldoActual) {
    Swal.fire({
      title: "Banco Afonca.S.A",
      icon: "warning",
      html: "<b class= 'purple'>Actualmente no tiene suficiente fondo!</b>",
      confirmButtonColor: "#5B2C6F",
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
    Swal.fire({
      title: "Banco Afonca.S.A",
      icon: "success",
      html: "<b class='purple'>Se ha realizado el deposito correctamente!</b>",
      confirmButtonColor: "#5B2C6F",
    });
    saldoDepositar = saldoDepositar + depositar;
    saldoActual = saldoDepositar;
    limpiar();
    saldo.innerHTML = `Saldo actual:$${saldoActual}.00`;

    document.getElementById("montoDepositar").focus();
  } else {
    Swal.fire({
      title: "Banco Afonca.S.A",
      icon: "warning",
      html: "<b class='purple'>Para depositar debe ingresar el valor al campo que sea mayor a 0.00.</b>",
      confirmButtonColor: "#5B2C6F",
    });
    limpiar();
    document.getElementById("montoDepositar").focus();
  }
}

function retirarSaldo() {
  var saldoRetirar = saldoActual;
  var retirar = parseFloat(document.getElementById("montoRetirar").value);
  var saldo = document.getElementById("saldoactual");

  if (retirar == 0) {
    Swal.fire({
      title: "Banco Afonca.S.A",
      icon: "warning",
      html: "<b class='purple'>Para poder realizar el retiro debe ingresar un valor mayor a 0.00</b>",
      confirmButtonColor: "#5B2C6F",
    });
  }
  if (retirar < 0) {
    Swal.fire({
      title: "Banco Afonca.S.A",
      icon: "error",
      html: "<b class='purple'>No se aceptan valores negativos.</b>",
      confirmButtonColor: "#5B2C6F",
    });
    limpiar();
    document.getElementById("montoRetirar").focus();
  }
  if (saldoRetirar == 0) {
    Swal.fire({
      title: "Banco Afonca.S.A",
      icon: "warning",
      html: "<b class='purple'>Su saldo actual es de $0.00, deposite para poder continuar con la transasion.</b>",
      confirmButtonColor: "#5B2C6F",
    });
    limpiar();
  }

  if (retirar > saldoRetirar) {
    Swal.fire({
      title: "Banco Afonca.S.A",
      icon: "error",
      html: "<b class='purple'>El retiro solicitado es mayor al saldo disponible!.</b>",
      confirmButtonColor: "#5B2C6F",
    });
    limpiar();

    document.getElementById("montoRetirar").focus();
  }

  if (retirar <= saldoRetirar && retirar > 0 && retirar != 0) {
    saldoRetirar = saldoRetirar - retirar;
    saldoActual = saldoRetirar;

    Swal.fire({
      title: "Banco Afonca.S.A",
      icon: "success",
      html: "<b class='purple'>Se ha realizado el retiro correctamente!</b>",
      confirmButtonColor: "#5B2C6F",
    });
	saldo.innerHTML = `Saldo actual:$${saldoActual}.00`;
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
