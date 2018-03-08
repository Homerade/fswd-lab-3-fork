// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    beforeEach: function(browser) {
        const devServer = browser.globals.devServerURL
  
        browser
          .url(devServer)
          .waitForElementVisible('#app', 5000);  
    },
    'basic e2e tests': function (browser) {
      browser
        .click('a[href="#/tasks"]')        
        .pause(5000)
        .assert.elementPresent('ul.list-group')
        .click('a[href="#/register"]')
        .pause(5000)
        .assert.elementPresent('input[name="username"]')
        .end()
    },

    'adding a task': function(browser) {
        browser
            .click('a[href="#/tasks"]')
            .pause(5000)
            .setValue('input[name="newTask"]', "My new task")
            .click('form button')
            .pause(5000)
            .assert.containsText('ul.list-group li:last-child', "My new task")
            .click('ul.list-group li:last-child button.close')
            .pause(5000)
            .end()
    }
  }