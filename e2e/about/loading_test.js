module.exports = {
  beforeEach: function(browser) {
    browser.url('http://localhost:3000/about')
  },

  'only page title visible first': function(browser) {
    browser
      .pause(200)
      .expect.element('.section__heading')
        .to.be.present
        .and
        .to.be.visible

    browser
      .expect.element('.nav-arrow--up').not.to.be.present

    browser
      .expect.element('.article-heading').not.to.be.visible

    browser
      .expect.element('.article-text').not.to.be.visible

    browser.end()
  }
}
