// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.eventListeners = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if (!this.eventListeners.hasOwnProperty(eventName)) {
      this.eventListeners[eventName] = [];
    }
    this.eventListeners[eventName].push(callback);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    for (let callback of this.eventListeners[eventName]) {
      callback();
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.eventListeners[eventName] = [];
  }
}

module.exports = Events;
