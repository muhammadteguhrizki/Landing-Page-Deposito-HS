function hitung() {
  var nominal = document.getElementById("nominal").value * 5000000; // konversi ke nominal dalam rupiah start deposito
  var tenor = parseInt(document.getElementById("tenor").value);
  var bunga;

  // bunga = 0.0675;
  if (tenor <= 1) {
    bunga = 0.06; // 6%
  } else {
    bunga = 0.0675; // 6,75%
  }

  // var totalBunga = ((nominal * bunga * 30) / 366) * tenor;
  var totalBunga = Math.round((nominal * bunga * 30) / 366) * tenor;
  // var pajak = Math.round(totalBunga * 0.2); // pajak  20%

  var pajak = 0;
  if (totalBunga >= 7500000) {
    // Jika totalBunga lebih besar dari atau sama dengan 7.5 juta
    pajak = Math.round(totalBunga * 0.2); // pajak 20%
  }

  var nilaiPajakBunga = totalBunga - pajak;
  var totalAkhir = nominal + nilaiPajakBunga;

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
//     this.value * 5000000
//   ).toLocaleString();
// });

document.getElementById("nominal").addEventListener("input", function () {
  var nominal = this.value * 5000000;
  document.getElementById("nominalValue").value =
    "Rp " + nominal.toLocaleString() + ".-";
});

document.getElementById("nominalValue").addEventListener("input", function () {
  var value = this.value.replace(/[^\d]/g, ""); // Hapus karakter non-digit
  if (value !== "") {
    var nominal = parseInt(value);
    document.getElementById("nominal").value = nominal / 5000000;
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
    bunga = 0.06;
  } else {
    bunga = 0.0675;
  }

  document.getElementById("sukuBunga").textContent =
    (bunga * 100).toFixed(2) + "%";
});
