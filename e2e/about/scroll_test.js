// HELPER FUNCTIONS ____________________________________________________________
function getToBottom(browser, cb) {
  browser.execute(function() {
    var offsetY = document.body.clientHeight - window.innerHeight
    scrollTo(0, offsetY)
  }, cb)
}

function getToMid(browser, cb) {
  browser.execute(function() {
    var offsetY = document.body.clientHeight / 2
    scrollTo(0, offsetY)
  }, cb)
}

function getToTop(browser, cb) {
  browser.execute(function() {
    scrollTo(0, 0)
  }, cb)
}

// TEST SUITE __________________________________________________________________
module.exports = {
  beforeEach: function(browser) {
    browser.url('http://localhost:3000/about')
      .waitForElementPresent('.nav-arrow--up', 1000)
  },

  'user scrolls to middle of page': function(browser) {
    getToMid(browser, function() {
      browser.pause(600)

      browser.expect.element('.nav-arrow--up').not.to.be.present
      browser.expect.element('.nav-arrow--down').not.to.be.present

      browser.expect.element('.filter-top').to.be.visible
      browser.expect.element('.filter-bottom').to.be.visible

      browser.end()
    })
  },

  'user scrolls to top of page from middle': function(browser) {
    getToMid(browser, function() {
      getToTop(browser, function() {
        browser.pause(600)

        browser.expect.element('.nav-arrow--up').to.be.present
        browser.expect.element('.nav-arrow--down').not.to.be.present

        browser.expect.element('.filter-top').not.to.be.visible
        browser.expect.element('.filter-bottom').to.be.visible

        browser.end()
      })
    })
  },

  'user scrolls to bottom': function(browser) {
    getToBottom(browser, function() {
      browser.pause(1500)

      browser.expect.element('.nav-arrow--up').not.to.be.present
      browser.expect.element('.nav-arrow--down').to.be.present

      browser.expect.element('.filter-top').to.be.visible
      browser.expect.element('.filter-bottom').not.to.be.visible

      browser.expect.element('.entry__container:last-child')
        .to.have.css('opacity').which.equals(1)

      browser.end()
    })
  },

  'user scrolls to middle from bottom': function(browser) {
    getToBottom(browser, function() {
      browser.waitForElementPresent('.nav-arrow--down', 1000)

      getToMid(browser, function() {
        browser.pause(1500)

        browser.expect.element('.nav-arrow--up').not.to.be.present
        browser.expect.element('.nav-arrow--down').not.to.be.present

        browser.expect.element('.filter-top').to.be.visible
        browser.expect.element('.filter-bottom').to.be.visible

        browser.end()
      })
    })
  }
}
