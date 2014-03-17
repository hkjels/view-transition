
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var classes = require('classes');
var events = require('event');
var transitionEnd = require('transitionend');

/**
 * Add transition-effect to specified view.
 *
 * @param {View} View
 * @return {View}
 */

module.exports = function(View){

  /**
   * Mixin `Emitter`.
   */

  Emitter(View.prototype);

  /**
   * Show content.
   */

  View.prototype.show = function() {
    classes(this.el).add('content');
    classes(this.el).add('is-visible');
  };

  /**
   * Hide content.
   */

  View.prototype.hide = function() {
    events.bind(this.el, transitionEnd, complete.bind(this));
    classes(this.el).remove('is-visible');
    function complete() {
      this.emit('hidden');
      events.unbind(this.el, transitionEnd, complete);
    }
  };

  /**
   * Remove content entirely.
   */

  View.prototype.dispose = function() {
    this.el.parentNode.removeChild(this.el);
  };

  return View;
};

