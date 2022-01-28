// background.js

let property1 = 49591116;
let property2 = 47195519;
let property3 = 36315835;
let PROPERTY1_PAGE = `https://www.airbnb.com/rooms/${property1}`;
let PROPERTY2_PAGE = `https://www.airbnb.com/rooms/${property2}`;
let PROPERTY3_PAGE = `https://www.airbnb.com/rooms/${property3}`;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	console.log(tabId);
	if (changeInfo.url.includes(PROPERTY1_PAGE) ||
		changeInfo.url.includes(PROPERTY2_PAGE) ||
		changeInfo.url.includes(PROPERTY3_PAGE)) {
		var notificationOptions = {
			type: 'basic',
    		title: 'Airbnb Notification',
    		message: 'You can gain part ownership in this property!',
    		priority: 2,
    		iconUrl: '/images/airbnb_icon.png',
    		buttons: [
    			{
        			title: 'Proceed'
    			},
    			{
        			title: 'No Thanks'
    			}
			]
		};
		chrome.notifications.create('notify1', notificationOptions, function(id) { 
			console.log(`notification created with id ${id}`); 
		});
	}
});