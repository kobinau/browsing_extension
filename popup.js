// Initialize button with user's preferred color
let get_history = document.getElementById("get_history");
let refresh_history = document.getElementById("refresh_history");

// When the button is clicked, inject setPageBackgroundColor into current page
get_history.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	
chrome.history.search({text: '', maxResults: 100}, function(data) {
    data.forEach(function(page) {
        console.log(page);
    });
});
//	chrome.scripting.executeScript({
//	target: { tabId: tab.id },
//	function: setPageBackgroundColor,
 //  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
chrome.storage.sync.get("color", ({ color }) => {
document.body.style.backgroundColor = color;
});
}

refresh_history.addEventListener("click", async () => {
//	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//	chrome.scripting.executeScript({
//	target: { tabId: tab.id },
	console.log("hello my name is kobi");
//	function: getFullHistory,
//   });
});
