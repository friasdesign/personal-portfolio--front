// TODO: refactor mess
function getToBottom(browser, cb) {
  browser.execute(function() {
    var offsetY = document.body.clientHeight - window.innerHeight
    scrollTo(0, offsetY)
  }, cb)
}

module.exports = {
  beforeEach: function(browser) {
    browser.url('http://localhost:3000/about')
      .waitForElementPresent('.nav-arrow--up', 1000)
  },

  'user gets to bottom': function(browser) {
    getToBottom(browser, function() {
      browser.pause(1500)

      browser.expect.element('.nav-arrow--up').not.to.be.present
      browser.expect.element('.nav-arrow--down').to.be.present

      browser.expect.element('.filter-top').to.be.visible
      browser.expect.element('.filter-bottom').not.to.be.visible

      browser.expect.element('.entry__container:last-child')
        .to.have.css('opacity').which.equals(1)
    })
    browser.end()
  },
}
