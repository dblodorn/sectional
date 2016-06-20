require("!style!css!sass!./../_sass/_states.sass");

define('states', ['chibijs','simplestatemanager'], function(chibi,ssm) {

  var states  = {};

  states.init = function(){
  
    ssm.addState({
      id: 'mobile',
      query: '(max-width: 767px)',
      onEnter: function(){
        $("html").setClass('mobile');
      }
    });

    ssm.addState({
      id: 'tablet',
      query: '(min-width: 768px) and (max-width: 1023px)',
      onEnter: function(){
        $("html").setClass('tablet');
      }
    });

    ssm.addState({
      id: 'desktop',
      query: '(min-width: 1024px)',
      onEnter: function(){
        $("html").setClass('desktop');
      }
    });

  }

  return states;

});