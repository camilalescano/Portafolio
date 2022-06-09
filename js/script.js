function copiarCorreo() {    
    var copyText = document.getElementById("miCorreo");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*Para celulares*/  
    
    navigator.clipboard.writeText(copyText.value);
  
    /*Alert con Bootstrap*/
    document.getElementById("alertcopiado").style.display = "block";
  }