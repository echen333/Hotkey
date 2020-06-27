window.onload=function(){
	chrome.storage.sync.get("sizing",function(change){
		if(change.sizing){
			if(change.sizing=="None"){
				chrome.tabs.executeScript({file: "injectorHotkey.js"});
			}
			if(change.sizing=="Small"){
				chrome.tabs.executeScript({file: "injectorHotkeySmall.js"});
			}
			if(change.sizing=="Medium"){
				chrome.tabs.executeScript({file: "injectorHotkeyMed.js"});
			}
			if(change.sizing=="Large"){
				chrome.tabs.executeScript({file: "injectorHotkeyLarge.js"});
			}
			if(change.sizing=="XLarge"){
				chrome.tabs.executeScript({file: "injectorHotkeyXlarge.js"});
			}
		}
	});	
}