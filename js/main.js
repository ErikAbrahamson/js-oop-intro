$(document).ready(function() {
  var Song = function(songName, bandName) {
    this.songName = songName;
    this.bandName = bandName;
  };
  var dt = new Song('Minerva','Deftones');
  Song.prototype.countName = function() {
    return this.songname.split(' ').length;
  };
  Song.prototype.createElement = function() {
    var element = $('<span></span>');
    element.text(this.songName + ' by ' + this.bandName);
    return element;
  };
  $('body').append(dt.createElement());
});
