$(document).on('page:change', function(){
  $('.new-post').on('submit', function(e) {
    e.preventDefault();
    var $title = $('input[name="post[title]"]')
    var $content = $('textarea[name="post[content]"]')
    
    $.ajax({
      url: 'http://localhost:3001' + $('.new-post').attr('action'),
      type: 'POST',
      data: { question: { title: $title.val(), content: $content.val() }, answer: { title: $title.val(), content: $content.val() } }
    }).done(function(response) {
      appendPost([response]);
      $title.val('');
      $content.val('');
    });
  });
});