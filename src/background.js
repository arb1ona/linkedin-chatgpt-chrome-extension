/*global chrome*/

console.log("background working");
// Declaring constants to store LinkedIn URLs.
const linkedInListViewURL = "https://www.linkedin.com/jobs/collections";
const linkedInDetailView = "https://www.linkedin.com/jobs/view";

// This function returns the appropriate job description class name based on the URL.
function getJobDescriptionClassName(url) {
	// If the URL starts with the LinkedIn list view URL, return the list view class name, else return the detail view class name.
	return url.startsWith(linkedInListViewURL)
		? "jobs-search__job-details--container"
		: "jobs-description-content__text";
}

// This function grabs the job description text from the web page.
function grabJobDescription(className) {
	const jobDetailsContainer = document.body.querySelector(`.${className}`);
	const jobDetails = jobDetailsContainer.textContent;
	const cleanedJobDetails = jobDetails.replace(/\s\s+/g, " ");
	console.log("cleanedJobDetails", cleanedJobDetails);
	return cleanedJobDetails;
}

// This is an event listener that runs when a tab is updated in Chrome.
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	// Check if the tab is fully loaded and active.
	if (changeInfo.status === "complete" && tab.active) {
		// Check if the URL of the tab matches the LinkedIn list or detail view URL.
		if (
			tab.url?.startsWith(linkedInListViewURL) ||
			tab.url?.startsWith(linkedInDetailView)
		) {
			// Execute the grabJobDescription function on the current tab and store the result in local storage.
			chrome.scripting
				.executeScript({
					target: { tabId: tabId },
					func: grabJobDescription,
					args: [getJobDescriptionClassName(tab.url)],
				})
				.then((queryResult) => {
					chrome.storage.local.set({ jobDescription: queryResult[0].result });
				});
		}
	}
});

// function toggleButton(tabId) {
// 	chrome.scripting.executeScript({
// 		target: { tabId: tabId },
// 		function: injectedToggleButton,
// 	});
// }

// // The function to be injected into the tab
// function injectedToggleButton() {
// 	let generatorButton = document.getElementById("show-generator-button");
// 	if (generatorButton) {
// 		generatorButton.style.display =
// 			generatorButton.style.display === "none" ? "block" : "none";
// 	} else {
// 		generatorButton = document.createElement("button");
// 		generatorButton.id = "show-generator-button";
// 		generatorButton.textContent = "Show Generator";
// 		generatorButton.style.position = "fixed";
// 		generatorButton.style.bottom = "20px";
// 		generatorButton.style.right = "20px";
// 		generatorButton.style.zIndex = 1000;
// 		document.body.appendChild(generatorButton);

// 		// Example of adding a tooltip on hover
// 		generatorButton.onmouseover = function () {
// 			// Show tooltip logic here
// 			console.log("Tooltip shown here"); // Replace with your actual tooltip logic
// 		};
// 	}
// }

// // Listen for clicks on the extension's icon
// chrome.action.onClicked.addListener((tab) => {
// 	// Ensure the script is only injected on LinkedIn pages
// 	if (
// 		tab.url &&
// 		(tab.url.startsWith("https://www.linkedin.com/jobs/view") ||
// 			tab.url.startsWith("https://www.linkedin.com/jobs/collections"))
// 	) {
// 		toggleButton(tab.id);
// 	}
// });
