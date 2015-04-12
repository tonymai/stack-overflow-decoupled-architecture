$(document).on('page:change', function(){
  
  $('input[name="post[title]"]').on('keyup',function(e) {
    previewTitle();
  });

  $('textarea[name="post[content]"]').on('keyup',function(e) {
    previewContent();
  });

});


function previewTitle() {
  var title = $('input[name="post[title]"]').val();
  $('.preview-title').html('<h3>'+title+'</h3>');
};

function previewContent() {
  var content = $('textarea[name="post[content]"]').val();
  var converted_content = convertText(content);
  $('.preview-content').html(converted_content);
};

function convertText(content) {
  //line break
  content = content.replace(/\n/g, '<br />');
  //bold
  while (content.match(/\*\*/g) && content.match(/\*\*/g).length >= 2) {
    content = content.replace(/\*\*/, '<strong>');
    content = content.replace(/\*\*/, '</strong>');
  };
  while (content.match(/\_\_/g) && content.match(/\_\_/g).length >= 2) {
    content = content.replace(/\_\_/, '<strong>');
    content = content.replace(/\_\_/, '</strong>');
  };
  //italic
  while (content.match(/\*/g) && content.match(/\*/g).length >= 2) {
    content = content.replace(/\*/, '<em>');
    content = content.replace(/\*/, '</em>');
  };
  while (content.match(/\_/g) && content.match(/\_/g).length >= 2) {
    content = content.replace(/\_/, '<em>');
    content = content.replace(/\_/, '</em>');
  };
  return content;
}