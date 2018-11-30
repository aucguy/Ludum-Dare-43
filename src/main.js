base.registerModule('main', function() {
  var util = base.importModule('util');
  
  function init() {
    util.removeLoadingScreen();
    var game = new Phaser.Game({
      width: 640,
      height: 480,
      parent: 'gameContainer',
      canvasID: 'display',
      state: new CustomBootState()
    });
  }
  
  var CustomBootState = util.extend(util.BootState, 'CustomBootState', {
    update: function() {
      this.game.add.image(10, 10, 'image/scribble');
    }
  });
  
  return {
    init: init
  }
});