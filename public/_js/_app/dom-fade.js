define('domFade', ['async-series','chibijs'], function(series,chibi) {

  var domFade = {};

  domFade.init = function(){
    series([
      function(done) {
        setTimeout(function() {
          $("main").setClass('fade-in');
          done()
        }, 50);
      },
      function(done) {
        setTimeout(function() {
          $("header").setClass('fade-in');
        }, 10);
      }
      ], function(err) {
        console.log('Problem.')
    });
  }

  return domFade;

});