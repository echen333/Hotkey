function goToActivityTab() {	
		document.getElementById("s").selectedIndex=3;
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