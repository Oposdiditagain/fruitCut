/**
 * Created by mwj on 2018/1/23.
 */

const canvas = document.querySelector('#sc');
const ctx = canvas.getContext('2d');
const c = $('#sc');
const root = document.querySelector('#root');
let nodes = [];
let w = 0;
let h = 0;

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    function( callback ){
      window.setTimeout(callback, 1000 / 60);
    };
})();

$(document).ready(function () {
  root.addEventListener('mousemove',init);
  // canvas.addEventListener('click',init);

  function Node() {
    return {
      x: 300,
      y: 300,
      radius: 15,
      tRadius: 0.1,
      color: 'red',
      opacity: 1,
      tOpacity: 0.05
    }
  }

  function getMousePos(e){
    let node = new Node();
    node.x = e.pageX - c.offset().left;
    node.y = e.pageY - c.offset().top;
    nodes.push(node);
  }

  function update() {
    // console.log(nodes);
    for(let i = 0; i < nodes.length; i++){
      draw(i);
      if(nodes[i].radius - nodes[i].tRadius  > 0){
        nodes[i].radius -= nodes[i].tRadius;
      }else {
        nodes[i].radius = 0;
      }
      nodes[i].opacity -= nodes[i].tOpacity;
      if(nodes[i].opacity <= 0){
        nodes.splice(i,1);
        i--;
      }
    }

  }

  function draw(index) {
    // ctx.globalAlpha = nodes[index].opacity;
    ctx.fillStyle = "#cbd3db";
    ctx.strokeStyle = "#cbd3db";
    ctx.beginPath();
    ctx.lineTo(nodes[index].x,nodes[index].y);
    ctx.arc(nodes[index].x, nodes[index].y, nodes[index].radius,  Math.PI / 4 ,  Math.PI / 6  , true);
    ctx.stroke();
    ctx.fill();
  }

  function init(e) {

    getMousePos(e);
  }
  function loop() {
    // console.log(nodes);o
    ctx.globalAlpha = 1;
    ctx.fillStyle = "rgba(255,255,255,0)";
    ctx.clearRect(0,0,w,h);
    update();
    window.requestAnimationFrame(loop);

  }

  $(window).resize(function(){
    re();
  });
  function re(){
    w = window.innerWidth;
    h = window.innerHeight;
    // cx = w/2;
    // cy = h/2;
  }
  // (function() {
  // 	let lastTime = 0;
  // 	let vendors = ['webkit', 'moz'];
  // 	for(let xx = 0; xx < vendors.length && !window.requestAnimationFrame; ++xx) {
  // 		window.requestAnimationFrame = window[vendors[xx] + 'RequestAnimationFrame'];
  // 		window.cancelAnimationFrame = window[vendors[xx] + 'CancelAnimationFrame'] ||
  // 									  window[vendors[xx] + 'CancelRequestAnimationFrame'];
  // 	}

  // 	if (!window.requestAnimationFrame) {
  // 		window.requestAnimationFrame = function(callback, element) {
  // 			let currTime = new Date().getTime();
  // 			let timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
  // 			let id = window.setTimeout(function() {
  // 				callback(currTime + timeToCall);
  // 			}, timeToCall);
  // 			lastTime = currTime + timeToCall;
  // 			return id;
  // 		};
  // 	}
  // 	if (!window.cancelAnimationFrame) {
  // 		window.cancelAnimationFrame = function(id) {
  // 			clearTimeout(id);
  // 		};
  // 	}
  // }());
  re();
  loop();
});

