function goToActivityTab() {
		document.getElementById("s").selectedIndex=1;
		//for(var i=0;i<sizeSelect.length;i++){
		//	if(sizeSelect[i].textContent=="Medium"){

		//	}
		//}
		var activityTab = document.getElementsByName("commit")[0];
        	activityTab.click();
		sleepFor(500);
		var addToCart=document.getElementsByClassName("button checkout")[0];
		addToCart.click();
}

goToActivityTab();
function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}