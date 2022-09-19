(function (window) {

  var Speak = {};

  var speakWord = "Good Bye";


  Speak.speak = function (name) {
    console.log(speakWord + " " + name);
  };


  window.Speak = Speak;
})(window);
