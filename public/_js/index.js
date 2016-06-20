define([
    'chibijs',
    'async-series',
    './_app/dom-fade',
    './_app/states',
    './_app/targets'
  ], function (chibi, series, domFade, states, targets) {

  // Init Config

  var initApp = function() {
    series([
      function(done) {
        states.init();
        done()
      },
      function(done) {
        targets.init();
        done()
      },
      function(done) {
        setTimeout(function() {
          domFade.init();
        }, 100);
      }
      ], function(err) {
        console.log('Problem.')
    });
  }

  // Run App
  document.addEventListener('DOMContentLoaded', initApp);
});
