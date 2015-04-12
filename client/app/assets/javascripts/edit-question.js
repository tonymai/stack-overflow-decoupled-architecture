$(document).on('page:change', function(){
  if ($('div').is('.view-edit')){
    var id = $('h2').attr('class')
    var $title = $('input[name="post[title]"]')
    var $content = $('textarea[name="post[content]"]')

    $.ajax({
      url: 'http://localhost:3001/questions/' + id + '/edit',
      type: 'GET',
    }).done(function(response) {
      $title.val(response.title);
      $content.val(response.content);
      previewTitle();
      previewContent();
    });
  };
});