window.onload=function(){
	chrome.storage.sync.get("sizing",function(change){if(change.sizing){document.getElementById("finalSize").innerText=change.sizing;}});
	chrome.storage.sync.get("one",function(change){if(change.one){document.getElementById("cvvOne").value=change.one;}});
	chrome.storage.sync.get("two",function(change){if(change.two){document.getElementById("cvvTwo").value=change.two;}});
	chrome.storage.sync.get("three",function(change){if(change.three){document.getElementById("cvvThree").value=change.three;}});
	chrome.storage.sync.get("checked",function(change){
		if(change.checked){
			if(change.checked=="true"){
				document.getElementById("cvvCheck").checked=true;
			}
		}
	});
	if(document.getElementById("save")){
		document.getElementById("save").addEventListener('click',function(){
			var size=document.getElementById("sizing").value;
			var cOne=document.getElementById("cvvOne").value;
			var cTwo=document.getElementById("cvvTwo").value;
			var cThree=document.getElementById("cvvThree").value;
			var checks=document.getElementById("cvvCheck").checked;
			chrome.storage.sync.set({"sizing":size});
			chrome.storage.sync.set({"one":cOne});
			chrome.storage.sync.set({"two":cTwo});
			chrome.storage.sync.set({"three":cThree});
			document.getElementById("finalSize").innerText=size;
			document.getElementById("cvvOne").value=cOne;
			document.getElementById("cvvTwo").value=cTwo;
			document.getElementById("cvvThree").value=cThree;
			chrome.storage.sync.set({"checked":checks})
		});
	}
}