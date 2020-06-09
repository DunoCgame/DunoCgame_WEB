var ArticulosImpar = document.getElementsByClassName("ArticuloJuegoClase");
 
 if(ArticulosImpar.length%2==1){
	
	 ArticulosImpar[ArticulosImpar.length-1].style.width = "100%";	
	 
 }
 
var Menu = document.getElementById("MenuId");
var item = Menu.getElementsByClassName("link");
			
for(var i = 0; i < item.length; i++){
	
	  item[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("active");
			current[0].className = current[0].className.replace("active", "");
			this.className += " active";
	  });
	  
}