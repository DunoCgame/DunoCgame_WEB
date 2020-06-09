var MenuSub=false;

document.getElementById("ButtonMenu").addEventListener("click", function(){
	 if(MenuSub==false){
		MenuSub=true;
		document.getElementById("ColapseMenu").style.display="table";
		}
else
	if(MenuSub==true){
		MenuSub=false;
		document.getElementById("ColapseMenu").style.display="none";
		}


 }  
 
 
	);
 
 


