(function(window) {
a = function() {
	this.initialize();
}
a._SpriteSheet = new createjs.SpriteSheet({images: ["QuizSprites.png"], frames: [[2,2,23,25,0,1,1],[27,2,23,25,0,1,1],[52,2,23,25,0,1,1],[77,2,23,25,0,1,1],[102,2,23,25,0,1,1]]});
var a_p = a.prototype = new createjs.Sprite();
a_p.Sprite_initialize = a_p.initialize;
a_p.initialize = function() {
	this.Sprite_initialize(a._SpriteSheet);
	this.paused = false;
}
window.a = a;
b = function() {
	this.initialize();
}
b._SpriteSheet = new createjs.SpriteSheet({images: ["QuizSprites.png"], frames: [[2,29,23,23,0,1,1],[27,29,23,23,0,1,1],[52,29,23,23,0,1,1],[77,29,23,23,0,1,1],[102,29,23,23,0,1,1]]});
var b_p = b.prototype = new createjs.Sprite();
b_p.Sprite_initialize = b_p.initialize;
b_p.initialize = function() {
	this.Sprite_initialize(b._SpriteSheet);
	this.paused = false;
}
window.b = b;
c = function() {
	this.initialize();
}
c._SpriteSheet = new createjs.SpriteSheet({images: ["QuizSprites.png"], frames: [[2,54,38,29,0,1,1]]});
var c_p = c.prototype = new createjs.Sprite();
c_p.Sprite_initialize = c_p.initialize;
c_p.initialize = function() {
	this.Sprite_initialize(c._SpriteSheet);
	this.paused = false;
}
window.c = c;
d = function() {
	this.initialize();
}
d._SpriteSheet = new createjs.SpriteSheet({images: ["QuizSprites.png"], frames: [[42,54,33,31,0,3.15,1.35]]});
var d_p = d.prototype = new createjs.Sprite();
d_p.Sprite_initialize = d_p.initialize;
d_p.initialize = function() {
	this.Sprite_initialize(d._SpriteSheet);
	this.paused = false;
}
window.d = d;
e = function() {
	this.initialize();
}
e._SpriteSheet = new createjs.SpriteSheet({images: ["QuizSprites.png"], frames: [[77,54,28,14,0,1,1]]});
var e_p = e.prototype = new createjs.Sprite();
e_p.Sprite_initialize = e_p.initialize;
e_p.initialize = function() {
	this.Sprite_initialize(e._SpriteSheet);
	this.paused = false;
}
window.e = e;
}(window));

