describe('Google', () => {

  describe('Search page loads', () => {


    it(`loads the google search page`, browser => {
      browser.url('http://www.google.com')
             .waitForElementVisible('body', 1000)

      browser.assert.title('Google')
      browser.end()
    })
  })
})
