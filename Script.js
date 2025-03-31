function loop(){
  var nasc = parseInt (document.getElementById("x").value);
  var ano = 2024;
  while (nasc <= ano){
    if (nasc % 4 == 0){
      alert (nasc + " Era bissexto");
    }
    
    nasc = nasc + 1;
  }
}
  