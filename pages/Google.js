class Google {
	get searchSection() {
		return $('form[role="search"]');
	}
	get searchInput() {
		return $('form[role="search"] input[type="text"]');
	}
	get searchButton() {
		return $('form[role="search"] input[type="submit"]');
	}
	searchFor(searchPhrase) {
		logger.step(`Searching for '${searchPhrase}' in google`);
		this.searchInput.waitForDisplayed();
		this.searchInput.setValue(searchPhrase);
		// I decided to use enter because I believe it's more common scenario then clicking on eyeglass, in standard project I would prefer to cover both scenarios
		browser.keys('Enter');
	}
}
export default new Google();
