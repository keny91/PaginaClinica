 




/*  
$('#pie').ready(function(){
*/
 /*   clickInicio();*/
    
/*  });*/


function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "./../WordpressXML/import.xml", true);
  xmlhttp.send();
}




function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  //var ContentTable="<tr><th>Artist</th><th>Title</th></tr>";
  var ContentTable;
  var x = xmlDoc.getElementsByTagName("item");
  for (i = 0; i <x.length; i++) { 
    ContentTable += "<div class=\"BlogDisplayContainer row\"><a href=\""+x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue+"\">" +

    "<div class=\"col-md-8\">"
    x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
    "</td><td>" +
     +
    "</td></tr>";
    x[i].getElementsByTagName("wp:attachment_url")[0].childNodes[0].nodeValue +
    "</td></tr>";
    

    +"</a></div>"
  }
  document.getElementById("WordpressContainer").innerHTML = ContentTable;
}

loadXMLDoc();  // this executes the script when loaded



/*
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Artist</th><th>Title</th></tr>";
  var x = xmlDoc.getElementsByTagName("item");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("WordpressContainer").innerHTML = table;
}

*/