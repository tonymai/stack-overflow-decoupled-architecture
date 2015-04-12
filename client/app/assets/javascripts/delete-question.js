$(document).on('page:change', function(){
  $('.delete').on('click', function(e) {
    e.preventDefault
    $.ajax({
      url: 'http://localhost:3001' + $('.delete').attr('href'),
      type: 'DELETE'
    }).done(function() {
      window.location.href = '/';
    });
  });
  
});