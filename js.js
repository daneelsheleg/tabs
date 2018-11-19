var  boxtextElem, btninfoElem;
function openBox(open, info) {
   
    boxtextElem = document.getElementsByClassName("box-text");
    for (var i = 0; i < boxtextElem.length; i++) {
        boxtextElem[i].style = "display:none";
    }
    btninfoElem = document.getElementsByClassName("btn-info");
    for (var i = 0; i < btninfoElem.length; i++) {
        btninfoElem[i].className.replace("active", " ");
    }
    document.getElementById(info).style = "display:block";

}
  document.getElementById("OpenRun").click();