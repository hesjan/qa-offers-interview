class GoogleResults {
	get resultsSection() {
		return $('#search');
	}
	get listOfResults() {
		return $$('#search div.g');
	}
	getElementByHref(href) {
		return $(`div.r > a[href*="${href}"]`);
	}

	isUrlDisplayedByHref(href) {
		this.resultsSection.waitForDisplayed();
		return this.getElementByHref(href).isDisplayed();
	}
	clickOnLinkByUrl(url) {
		logger.step(`Selecting element with url: ${url} from google results`);
		this.getElementByHref(url).waitForDisplayed();
		this.getElementByHref(url).click();
	}
}
export default new GoogleResults();
