(function (root, factory) {
    if ( typeof define === 'function' && define.amd ) {
        define([], factory(root));
    } else if ( typeof exports === 'object' ) {
        module.exports = factory(root);
    } else {
        root.mostUsedPasswords = factory(root);
    }
})(typeof global !== "undefined" ? global : this.window || this.global, function (root) {

  'use strict';

  //
  // Variables
  //

  var mostUsedPasswords = {};
  var supports = !!document.querySelector && !!root.addEventListener; // Cut the mustard
  var settings;

  // Default settings
  var defaults = {
      formElement: '[data-most-used-pw="true"]',
      passwordElement: '[type="password"]',
      warnText: 'You are trying to use one of the 25 most used passwords of 2015. We know you can do better and choose a safer password.',
      warnClasses: 'message warn',
      passwords: [
        '123456', 
        'password', 
        '12345678', 
        'qwerty', 
        '12345', 
        '123456789', 
        'football', 
        '1234', 
        '1234567', 
        'baseball', 
        'welcome', 
        '1234567890', 
        'abc123', 
        '111111', 
        '1qaz2wsx', 
        'dragon', 
        'master', 
        'monkey', 
        'letmein', 
        'login', 
        'princess', 
        'qwertyuiop', 
        'solo', 
        'passw0rd', 
        'starwars'
      ],
      callbackBefore: function () {},
      callbackAfter: function () {}
  };

  /**
   * Merge two or more objects. Returns a new object.
   * @private
   * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
   * @param {Object}   objects  The objects to merge together
   * @returns {Object}          Merged values of defaults and options
   */
  var extend = function () {

    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    // Check if a deep merge
    if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
      deep = arguments[0];
      i++;
    }

    // Merge the object into the extended object
    var merge = function (obj) {
      for ( var prop in obj ) {
        if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
          // If deep merge and property is an object, merge properties
          if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
            extended[prop] = extend( true, extended[prop], obj[prop] );
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    // Loop through each object and conduct a merge
    for ( ; i < length; i++ ) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;

  };


  /**
   * Initialize Plugin
   * @public
   * @param {Object} options User settings
   */
  mostUsedPasswords.init = function ( options ) {

    // feature test
    if ( !supports ) return;

    // Merge user options with defaults
    settings = extend( defaults, options || {} );

    // Check for bad passwords on submitting the form
    document.querySelector(settings.formElement).addEventListener('submit', function (ev) {

      // go through the list of bad passwords
      if (settings.passwords.indexOf(document.querySelector(settings.passwordElement).value) >= 0) {
        
        // create the warn message
        var warnElement = document.createElement("p");
        var warnText = document.createTextNode(settings.warnText);
      
        // append the warn message
        warnElement.className = settings.warnClasses;
        warnElement.appendChild(warnText);
        this.insertBefore(warnElement, document.querySelector(settings.passwordElement));
        
        // prevent sending the form
        ev.preventDefault();
      }

    });

  };

  return mostUsedPasswords;

});
