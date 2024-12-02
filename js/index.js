function peringatan() {
    let angkaPertama = document.getElementById("angka-pertama").value;
    let angkaKedua = document.getElementById("angka-kedua").value;
    // console.log(angkaPertama, angkaKedua)
    let hasilPenjuamlahan = parseInt(angkaPertama) + parseInt(angkaKedua);
    document.write("Hasilnya penjumlahannya adalah " + hasilPenjuamlahan);
}