$("#Save").click(function () {
  preventDefault();

  //compress and save
  var css    = ace.edit("css-editor").getSession().getValue();
  var script = ace.edit("js-editor").getSession().getValue();
  var html   = ace.edit("htm-editor").getSession().getValue();
  var EasyZip = require('easy-zip').EasyZip;
  var zip = new EasyZip();
  zip.file('index.html', html);
  zip.file('main.css', css);
  zip.file('main.js', script);
  zip.writeToFile('fiddle.zip');
});
//save file
$("#Save").click();

//keypress event
$(document).keydown(function(e){
  if (e.keyCode==83 && e.altKey)
    $("#Save").click();
});






$(document).keydown(function(e){
  if (e.keyCode==84 && e.altKey)
    $("#Tidy").click();
});