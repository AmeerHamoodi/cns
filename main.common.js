/**
 * @author Ameer Hamoodi
 * @description An es6 JavaScript module to emit events between different js files
 */

module.exports = {
  called: [],
  /**
   * @description Emits message between different js files
   * @param {string} name - Name of event emitted
   * @param {object} [msg] - Data to be sent between files
   */
  emit: function(name, msg = undefined) {
    if (typeof msg == "undefined") {
      CNS.called.push({ name: name, msg: msg });
    }
  },
  /**
   * @description Listens for event
   * @param {string} name - Name of the event to listen for
   * @param {function} cb - Function to be called back when event fired
   */
  on: function(name, cb) {
    setInterval(function() {
      CNS.called.forEach((item, i) => {
        if (CNS.called.name == name) {
          cb();
          CNS.called.splice(i, 1);
        }
      });
    }, 10);
  }
};
