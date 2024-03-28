function hitung() {
  var nominal = document.getElementById("nominal").value * 10000000; // konversi ke nominal dalam rupiah
  var tenor = parseInt(document.getElementById("tenor").value);
  var bunga;

  // bunga = 0.0675;
  if (tenor <= 1) {
    bunga = 0.06; // 6%
  } else {
    bunga = 0.0675; // 6,75%
  }

  // rumus deposito
  var totalBunga = nominal * bunga * (tenor / 12);
  var pajak = totalBunga * 0.2; // pajak  20%
  var nilaiPajakBunga = totalBunga - pajak;
  var totalAkhir = nominal + nilaiPajakBunga - pajak;

  var hasil = `
    <div class="form-group mb-3">
      <span>Nilai bunga</span>
      <h3>Rp ${totalBunga.toLocaleString()}</h3>
    </div>
    <hr>
    <div class="form-group mb-3">
      <span>Bunga net</span>
      <h3>Rp ${nilaiPajakBunga.toLocaleString()}</h3>
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

// document.getElementById("tenor").addEventListener("input", function () {
//   document.getElementById("tenorValue").textContent = this.value + " bulan";
// });

document.getElementById("tenor").addEventListener("input", function () {
  var tenor = parseInt(this.value);
  document.getElementById("tenorValue").textContent = tenor + " bulan";

  var bunga;
  if (tenor <= 1) {
    bunga = 6.0;
  } else {
    bunga = 6.75;
  }

  document.getElementById("sukuBunga").textContent = bunga + " %";
});
