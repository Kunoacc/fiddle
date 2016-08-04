$("#Run").click(function(event) {
  event.preventDefault();

  var previewDoc = window.frames[0].document;

  var css    = ace.edit("css-editor").getSession().getValue();
  var script = ace.edit("js-editor").getSession().getValue();
  var html   = ace.edit("htm-editor").getSession().getValue();

  previewDoc.write("<!DOCTYPE html>");
  previewDoc.write("<html>");
  previewDoc.write("<head>");
  previewDoc.write("<style type='text/css'>" + css + "</style>");
  previewDoc.write("<script type='text/javascript'>window.onload = function() {" + script + "}</script>");
  previewDoc.write("</head>");
  previewDoc.write("<body>");
  previewDoc.write(html);
  previewDoc.write("<script type='text/javascript'>" + script + "</script>");
  previewDoc.write("</body>");
  previewDoc.write("</html>");
  previewDoc.close();
});

// Preview code on page load
$("#Run").click();

//run 'alt + r'
$(document).keydown(function(e){
  if (e.keyCode==82 && e.altKey)
    $("#Run").click();
});

//Save
$('#Save').click(function (event) {
  event.preventDefault();

var css    = ace.edit("css-editor").getSession().getValue();
var script = ace.edit("js-editor").getSession().getValue();
var html   = ace.edit("htm-editor").getSession().getValue();
var zip = new require('node-zip')();
var fs = require('fs');
zip.file('index.html', html);
zip.file('main.css', css);
zip.file('main.js', script);
var data = zip.generate({base64:false,compression:'DEFLATE'});
fs.writeFileSync('fiddle.zip', data, 'binary');
});

//save 'alt + s'
$(document).keydown(function(e){
  if (e.keyCode==83 && e.altKey)
    $("#Save").click();
});


//Tidy Up
$('#Tidy').click(function(event) {
  event.preventDefault();

  var html = ace.edit("htm-editor").getSession().getValue();
  var html2 = html_beautify(html);

  ace.edit("htm-editor").getSession().setValue(html2);

  var css = ace.edit("css-editor").getSession().getValue();
  var css2 = css_beautify(css);

  ace.edit("css-editor").getSession().setValue(css2);

  var js = ace.edit("js-editor").getSession().getValue();
  var js2 = js_beautify(js);

  ace.edit("js-editor").getSession().setValue(js2);
});

// tidy 'alt + t'
$(document).keydown(function(e){
  if (e.keyCode==84 && e.altKey)
    $("#Tidy").click();
});


//Collaborate
$('#Together').click(function (event) {
  event.preventDefault();

  TogetherJS(this);
  return false;
});

//collaborate 'alt + c'
$(document).keydown(function(e){
  if (e.keyCode==62 && e.altKey)
    $("#Tidy").click();
});
