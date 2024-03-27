function hitung() {
  var nominal = document.getElementById("nominal").value * 1000000; // konversi ke nominal dalam rupiah
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
  var totalAkhir = nominal + totalBunga;

  var hasil = `
    <div class="form-group mb-3">
        <span>Nominal</span>
        <h3>Rp ${nominal.toLocaleString()}</h3>
    </div>
    <hr>
    <div class="form-group mb-3">
        <span>Bunga</span>
        <h3>${(bunga * 100).toFixed(2)}%</h3>
    </div>
    <hr>
    <div class="form-group mb-3">
      <span>Pajak bunga 20%</span>
      <h3>Rp ${totalBunga.toLocaleString()}</h3>
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

document.getElementById("nominal").addEventListener("input", function () {
  document.getElementById("nominalValue").textContent = this.value;
});

document.getElementById("tenor").addEventListener("input", function () {
  document.getElementById("tenorValue").textContent = this.value + " bulan";
});
