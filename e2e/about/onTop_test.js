// TODO: Refactor with correct scrolling action
module.exports = {
  '@disabled': true,

  beforeEach: function(browser) {
    browser.url('http://localhost:3000/about')
      .waitForElementPresent('.nav-arrow--up', 1000)
      .setWindowPosition(0, 600)
      .setWindowPosition(0, 0)
  },

  'displays arrow for getting back to user': function(browser) {
    browser.expect.element('.nav-arrow--up').to.be.present
    browser.expect.element('.nav-arrow--down').not.to.be.present

    browser.end()
  },

  'hides top filter and shows bottom filter': function(browser) {
    browser.expect.element('.filter-top').not.to.be.visible
    browser.expect.element('.filter-bottom').to.be.visible

    browser.end()
  }
}
