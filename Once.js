/*
You'll implement once, a function that takes another function as an argument, 
and returns a new version of that function that can only be called once.

Subsequent calls to the resulting function should have no effect
(and should return undefined).

For example:
  logOnce = once(console.log)
  logOnce("foo") // -> "foo"
  logOnce("bar") // -> no effect
*/


// Solution

function once(fn) {
  let isCall = false;
  
  return (...arg) => {
    if (!isCall) {
      isCall = true;
      return fn(...arg);
    }
  }
}

// or

const once = (fn, cnt = 0) =>
  (...args) => cnt++ ? undefined : fn(...args);