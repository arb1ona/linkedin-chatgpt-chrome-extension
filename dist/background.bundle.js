(() => {
	console.log("background working");
	const t = "https://www.linkedin.com/jobs/collections";
	function e(t) {
		const e = document.body
			.querySelector(".".concat(t))
			.textContent.replace(/\s\s+/g, " ");
		return console.log("cleanedJobDetails", e), e;
	}
	chrome.tabs.onUpdated.addListener(function (o, n, s) {
		var c, r, i;
		"complete" === n.status &&
			s.active &&
			((null !== (c = s.url) && void 0 !== c && c.startsWith(t)) ||
				(null !== (r = s.url) &&
					void 0 !== r &&
					r.startsWith("https://www.linkedin.com/jobs/view"))) &&
			chrome.scripting
				.executeScript({
					target: { tabId: o },
					func: e,
					args: [
						((i = s.url),
						i.startsWith(t)
							? "jobs-search__job-details--container"
							: "jobs-description-content__text"),
					],
				})
				.then((t) => {
					chrome.storage.local.set({ jobDescription: t[0].result });
				});
	});
})();
