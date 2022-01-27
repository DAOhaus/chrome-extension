let property1 = 49591116;
let property2 = 47195519;
let property3 = 36315835;
let PROPERTY1_PAGE = `https://www.airbnb.com/rooms/${property1}`;
let PROPERTY2_PAGE = `https://www.airbnb.com/rooms/${property2}`;
let PROPERTY3_PAGE = `https://www.airbnb.com/rooms/${property3}`;

chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  var activeTab = tabs[0];
  currentTab = activeTab.url;
  if (currentTab.includes(PROPERTY1_PAGE) ||
  	currentTab.includes(PROPERTY2_PAGE) ||
  	currentTab.includes(PROPERTY3_PAGE)) {
  	document.body.innerText = "You can gain part ownership in this property!";
  } else {
  	document.body.innerText = "Navigate to a tokenized property"
  }
});