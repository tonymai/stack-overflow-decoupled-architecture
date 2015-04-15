$(document).on('page:change', function(){

  $('.edit-post').on('submit', function(e) {
    e.preventDefault();
    var id = $('h2').attr('class')

    var $title = $('input[name="post[title]"]')
    var $content = $('textarea[name="post[content]"]')

    var $previewTitle = $('.preview-title')
    var $previewContent = $('.preview-content')

    var $error = $('div.error')

    $.ajax({
      url: 'http://localhost:3001' + $('.edit-post').attr('action'),
      type: 'PUT',
      data: { question: { title: $title.val(), content: $previewContent.html() } }
    }).done(function(response) {
      window.location.href = '/questions/' + id
    }).fail(function(response) {
      $error.text(response.responseJSON.error);
    });
  });
});