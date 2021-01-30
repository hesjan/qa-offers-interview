import { startBrowserMaximized } from '../helpers/test-utils';
import { Google, GoogleResults, Home,JobOffers } from "../pages";

describe('User', () => {
	const testData = [{ companyName: '10clouds', url: '10clouds.com', positionName: 'Senior QA' }];

	testData.forEach(data => {
		it(`should be able to search for new QA opportunities as ${data.positionName}`, () => {
			startBrowserMaximized();
			Google.searchFor(data.companyName);
			expect(GoogleResults.isUrlDisplayedByHref(data.url), `${data.url} is not displayed in google results`).to.be.true;
			GoogleResults.clickOnLinkByUrl(data.url);
			Home.clickOnCareersLink();
			expect(JobOffers.getListOfOffersByPositionName(data.positionName).length).to.eql(1);
		});
	})
});
