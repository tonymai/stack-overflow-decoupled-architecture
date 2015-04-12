$(document).on('page:change', function(){
  $('.new-post').on('submit', function(e) {
    e.preventDefault();
    var $title = $('input[name="post[title]"]')
    var $content = $('textarea[name="post[content]"]')

    var $previewTitle = $('.preview-title')
    var $previewContent = $('.preview-content')

    var $error = $('div.error')

    $.ajax({
      url: 'http://localhost:3001' + $('.new-post').attr('action'),
      type: 'POST',
      data: { question: { title: $title.val(), content: $previewContent.html() }, answer: { title: $title.val(), content: $previewContent.html() } }

    }).done(function(response) {
      appendPost([response]);
      
      $error.text('');
      $previewTitle.text('');
      $previewContent.text('');
      $title.val('');
      $content.val('');

    }).fail(function(response) {
      $error.text(response.responseText);
    });
  });
});