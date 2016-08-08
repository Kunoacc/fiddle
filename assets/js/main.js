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