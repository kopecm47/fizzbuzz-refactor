$(document).ready(function(){
	var x = prompt("Please Insert A Value");
  if (x.indexOf(".") == -1) {
    var y = parseInt(x);
    var max = +y;
  } else {
    var y = parseInt(x);
    var z = +y;
    var max = Math.round(z);
  }
  /*var max = prompt("Please Insert A Value");*/
  function fizzbuzz(max){
    var i;
	  for(i=1;i<=max;i++){
		  if(i % 3 == 0 && i % 5 == 0){
			  document.write("fizz buzz</br>");
		  }
		  else if(i % 3 == 0){
			  document.write("fizz</br>");
		  }
		  else if(i % 5 == 0){
			  document.write("buzz</br>");
		  }
		  else{
			  document.write(i);
        document.write("</br>");
		  }
	  }	  
  }
  fizzbuzz(max);
});