function hitung() {
  var nominal = document.getElementById("nominal").value * 10000000; // konversi ke nominal dalam rupiah
  var tenor = parseInt(document.getElementById("tenor").value);
  var bunga;

  // if (nominal <= 50000000) {
  //   bunga = 0.05;
  // } else if (nominal <= 500000000) {
  //   bunga = 0.06;
  // } else {
  //   bunga = 0.07;
  // }

  bunga = 0.0675;

  // rumus deposito
  var totalBunga = nominal * bunga * (tenor / 12);
  var pajak = totalBunga * 0.2;
  var nilaiBunga = totalBunga - pajak;
  var totalAkhir = nominal + nilaiBunga;

  var hasil = `
    <div class="form-group mb-3">
      <span>Nilai bunga</span>
      <h3>Rp ${totalBunga.toLocaleString()}</h3>
    </div>
    <hr>
    <div class="form-group mb-3">
      <span>Pajak bunga 20%</span>
      <h3>Rp ${nilaiBunga.toLocaleString()}</h3>
    </div>
    <hr>
    <div class="form-group mb-3">
      <span>Total akumulasi deposito</span>
      <h3>Rp ${totalAkhir.toLocaleString()}</h3>
    </div>
    <hr>
  `;

  document.getElementById("hasil").innerHTML = hasil;
}

// document.getElementById("nominal").addEventListener("input", function () {
//   document.getElementById("nominalValue").textContent = (
//     this.value * 10000000
//   ).toLocaleString();
// });

document.getElementById("nominal").addEventListener("input", function () {
  var nominal = this.value * 10000000;
  document.getElementById("nominalValue").value =
    "Rp " + nominal.toLocaleString() + ".-";
});

document.getElementById("nominalValue").addEventListener("input", function () {
  var value = this.value.replace(/[^\d]/g, ""); // Hapus karakter non-digit
  if (value !== "") {
    var nominal = parseInt(value);
    document.getElementById("nominal").value = nominal / 10000000;
  }
});

document.getElementById("tenor").addEventListener("input", function () {
  document.getElementById("tenorValue").textContent = this.value + " bulan";
});
