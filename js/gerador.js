function show(){
    var string = document.querySelector("#string").value;
    if(string !="")
    {
        document.querySelector("#qrcode").innerHTML = "";
        document.querySelector(".output").style.display = "block";
        //JsBarcode("#barcode", string); //Barcode desativo até amanhaâã
    
        jQuery(function(){
                jQuery("#qrcode").qrcode(string);
        });
    }
    else {
        document.querySelector(".output").style.display = "none"
        document.getElementById("modalNew").style.display = "none"
        document.getElementById("modalTextQrcode").style.display = "none"
    }
}