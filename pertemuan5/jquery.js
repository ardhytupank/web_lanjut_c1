$("#simpan").click(function(){
    var kode_produk = $("#kode_produk").val()
    if (kode_produk == "") {
        $("#lihat_kode_produk").text("Kode Produk masih kosong!")
    }else{
        $("#lihat_kode_produk").text("")
    }

    var nama_produk = $("#nama_produk").val()
    if (nama_produk == "") {
        $("#lihat_nama_produk").text("Nama Produk masih kosong!")
    }else{
        $("#lihat_nama_produk").text("")
    }

    var jenis_produk = $("#jenis_produk").val()
    if (jenis_produk == "") {
        $("#lihat_jenis_produk").text("Jenis Produk belum dipilih!")
    }else{
        $("#lihat_jenis_produk").text("")
    }

    var harga_produk = $("#harga_produk").val()
    if (harga_produk == "") {
        $("#lihat_harga_produk").text("Harga produk masih kosong!")
    }else{
        $("#lihat_harga_produk").text("")
    }

    var stok = $("#stok_produk").val()
    if (stok == "") {
        $("#lihat_stok").text("Stok produk masih kosong!")
    }else{
        $("#lihat_stok").text("")
    }
})