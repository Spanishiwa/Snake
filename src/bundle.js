/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _snakeView = __webpack_require__(1);
	
	var _snakeView2 = _interopRequireDefault(_snakeView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener("DOMContentLoaded", function () {
	  new _snakeView2.default();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _board = __webpack_require__(2);
	
	var _board2 = _interopRequireDefault(_board);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var View = function () {
	  function View() {
	    _classCallCheck(this, View);
	
	    this.board = new _board2.default();
	
	    document.addEventListener("keypress", this.handleKeyEvent);
	
	    window.setInterval(this.step.bind(this), 500);
	  }
	
	  _createClass(View, [{
	    key: "handleKeyEvent",
	    value: function handleKeyEvent(event) {
	      var inputDir = event.keyCode;
	
	      switch (inputDir) {
	        case 37:
	          return this.board.snake.turn("W");
	        case 38:
	          return this.board.snake.turn("N");
	        case 39:
	          return this.board.snake.turn("E");
	        case 40:
	          return this.board.snake.turn("S");
	        default:
	          return;
	      }
	    }
	  }, {
	    key: "step",
	    value: function step() {
	      this.board.snake.move();
	      this.board.render();
	    }
	  }]);
	
	  return View;
	}();
	
	exports.default = View;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _snake = __webpack_require__(3);
	
	var _snake2 = _interopRequireDefault(_snake);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Board = function () {
	  function Board() {
	    _classCallCheck(this, Board);
	
	    this.snake = new _snake2.default();
	    this.apples = [];
	    this.dimensions = [20, 20];
	
	    this.render();
	  }
	
	  _createClass(Board, [{
	    key: "render",
	    value: function render() {
	      var board = document.getElementById("board");
	      board.innerHTML = "";
	
	      for (var i = 0; i < this.dimensions[0]; i += 1) {
	        var row = document.createElement("LI");
	        row.id = "row" + i;
	        row.className = 'row';
	        board.appendChild(row);
	        for (var j = 0; j < this.dimensions[1]; j += 1) {
	          var cell = document.createElement("div");
	          cell.id = "row" + i + "col" + j;
	          cell.className = 'cell empty';
	          row.appendChild(cell);
	        }
	      }
	
	      this.insertSnake();
	    }
	  }, {
	    key: "insertSnake",
	    value: function insertSnake() {
	      var snakeCoords = this.snake.segments;
	
	      for (var i = 0; i < snakeCoords.length; i += 1) {
	        var x = snakeCoords[i].x;
	        var y = snakeCoords[i].y;
	
	        var snakeCell = document.getElementById("row" + x + "col" + y);
	        snakeCell.className = 'cell snake';
	      }
	    }
	  }]);
	
	  return Board;
	}();
	
	exports.default = Board;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _coord = __webpack_require__(4);
	
	var _coord2 = _interopRequireDefault(_coord);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Snake = function () {
	  function Snake() {
	    _classCallCheck(this, Snake);
	
	    this.dir = "N";
	    this.segments = [new _coord2.default(10, 10), new _coord2.default(11, 10), new _coord2.default(12, 10)];
	  }
	
	  _createClass(Snake, [{
	    key: "move",
	    value: function move() {
	      for (var i = 0; i < this.segments.length; i += 1) {
	        var x = this.segments[i].x;
	        var y = this.segments[i].y;
	        var dirToMove = this.dirToCoord(this.dir);
	
	        this.segments[i] = this.segments[i].plus(dirToMove);
	      }
	      return this.segments.some(this.outOfBounds);
	    }
	  }, {
	    key: "outOfBounds",
	    value: function outOfBounds() {
	      var head = this.segments[0];
	
	      if (head.x < 0 || head.x > 19) {
	        return true;
	      } else if (head.y < 0 || head.y > 19) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	  }, {
	    key: "dirToCoord",
	    value: function dirToCoord(dir) {
	      switch (dir) {
	        case "N":
	          return new _coord2.default(-1, 0);
	        case "S":
	          return new _coord2.default(1, 0);
	        case "E":
	          return new _coord2.default(0, 1);
	        case "W":
	          return new _coord2.default(0, -1);
	        default:
	          return;
	      }
	    }
	  }, {
	    key: "turn",
	    value: function turn(newDir) {
	      if (this.dirToCoord(newDir).isOpposite(this.dirToCoord(this.dir))) {
	        return;
	      } else {
	        this.dir = newDir;
	      }
	    }
	  }]);
	
	  return Snake;
	}();
	
	exports.default = Snake;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Coord = function () {
	  function Coord(x, y) {
	    _classCallCheck(this, Coord);
	
	    this.x = x;
	    this.y = y;
	  }
	
	  _createClass(Coord, [{
	    key: "plus",
	    value: function plus(coord2) {
	      return new Coord(this.x + coord2.x, this.y + coord2.y);
	    }
	  }, {
	    key: "equals",
	    value: function equals(coord2) {
	      return this.x === coord2.x && this.y === coord2.y;
	    }
	  }, {
	    key: "isOpposite",
	    value: function isOpposite(coord2) {
	      return this.x === -1 * coord2.x && this.y === -1 * coord2.y;
	    }
	  }]);
	
	  return Coord;
	}();
	
	exports.default = Coord;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map