
/**
 * timeoutid
 */

var tid;

/**
 * Delay the given `fn` with `ms`.
 * 
 * @param {Number} ms
 * @param {Function} fn
 */

module.exports = function(ms, fn){
  return function(){
    if (tid) clearTimeout(tid);
    var args = arguments;
    tid = setTimeout(function(){
      clearTimeout(tid);
      fn.apply(null, args);
    }, ms);
  };
};
