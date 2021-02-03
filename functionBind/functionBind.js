/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function(func, obj, str) {
  // TODO: Your code here
  if (str) {
    return (param) => {
      return func(str, param);
    }
  } else {
    obj.key = func;
    return () => { return obj.key() };
  }
};

// var alice = {
//   name: 'alice',
//   shout: function() {
//     console.log(this.name);
//   }
// }

// var boundShout = bind(alice.shout, alice);
// boundShout(); // alerts 'alice'
// boundShout = bind(alice.shout, {name: 'bob'});
// boundShout(); // alerts 'bob'

// var func = function(a, b){ return a + b };
// var boundFunc = bind(func, null, 'foo');
// var result = boundFunc('bar');
// console.log(result);
// console.log(result === 'foobar'); // true


/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function(obj, str) {
  // TODO: Your code here
  if (str) {
    return (param) => {
      return Function(param, str);
    }
  } else {
    obj.key = Function;
    return obj.key();
  }
};


var alice = {
  name: 'alice',
  shout: function(){
    console.log(this.name);
  }
}
var boundShout = alice.shout.bind(alice);
var a = boundShout(); // alerts 'alice'
boundShout = alice.shout.bind({name: 'bob'});
var b = boundShout(); // alerts 'bob'
console.log(a, b)
var func = function(a, b){ return a + b };
var boundFunc = func.bind(null, 'foo');
var result = boundFunc('bar');
console.log(result === 'foobar'); // true
