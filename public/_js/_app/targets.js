require("!style!css!sass!./../_sass/_targets.sass");

define('targets', ['chibijs'], function(chibi) {

  var targets    = {},
      appState   = '',
      targetName = '',
      tgtClicked = 'target-active',
      tgtHovered = 'target-hovered',
      // SECTIONS & CSS Selectors
      targetDiv  = '.target-section',
      sections   = [
        'section_one','section_two','section_three','section_four','section_five'
      ];

  // Logic for manipulating sections on click
  targets.targetStateClick = function() {
    
    // Section Checker - Use for any special functions unique to Section
    var targetChecker = function() {
      for (i = 0; i < sections.length; i++) { 
        if(targetName === sections[i]) {
          console.log(targetName);
        }
      }
    }

    // Click Actions
    if(!$(this).hasClass(tgtClicked)) {
      // Switch App State
      appState = 'activated';
      $('body').setClass('activated');
      // Manipulate Classes
      $(targetDiv).removeClass(tgtClicked);
      $(targetDiv).removeClass(tgtHovered);
      $(this).addClass(tgtClicked);
      // Which Target
      targetName = $(this).attr('ID');
      targetChecker();
    } else if ($(this).hasClass(tgtClicked)) {
      appState = 'initial';
      $('body').setClass('initial');
      $(targetDiv).removeClass(tgtClicked);        
    }
  }

  // Logic for manipulating sections on hover
  targets.targetStateHover = function() {
    // Check to Make sure we are in the initial app state
    if(appState != 'activated') {
      if(!$(this).hasClass(tgtHovered)) {
        $(targetDiv).removeClass(tgtHovered);
        $(this).addClass(tgtHovered);
      } else if ($(this).hasClass(tgtHovered)) {
        $(targetDiv).removeClass(tgtHovered);
      }
    }
  }

  targets.init = function(){
    // INIT STATE
    $('body').setClass('initial');
    appState   = 'initial';
    // Click
    $(targetDiv).on('click',targets.targetStateClick);
    // Hover
    $(targetDiv).on('mouseenter',targets.targetStateHover);
  }

  return targets;

});