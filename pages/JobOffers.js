class JobOffers {
	get showOpenPositionsButton() {
		return $('a[data-element="careers-jobs-btn"]');
	}
	get jobOffersSection() {
		return $('[data-element="careers-jobs-section"]');
	}
	get listOfOffers() {
		return $$('a.tenc-careers-jobs__ad');
	}
	clickShowOpenPositions() {
		logger.step('Clicking on show open position button');
		this.showOpenPositionsButton.waitForDisplayed();
		this.showOpenPositionsButton.click();
	}
	getListOfOffersByPositionName(positionName) {
		logger.step(`Getting list of jobs with name: ${positionName}`);
		this.clickShowOpenPositions();
		return this.listOfOffers.filter(offer => {
			return offer.getText().includes(positionName);
		})
	}
}
export default new JobOffers();
