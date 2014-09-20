window.debug = function () {
  window.console && window.console.log.apply(window.console, arguments);
}
debug("JS Debug Works", "Example 2nd Arg");
