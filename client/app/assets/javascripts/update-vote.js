$(document).on('page:change', function(){

  $(document).on('click', 'a.vote-action', function(e) {
    e.preventDefault();
    updateVote(this);
  });

});

function updateVote(that) {
  $.ajax({
    url: 'http://localhost:3001' + $(that).attr('href'),
    type: 'GET',
  })
  .done(function(response) {
    $('.vote-count[data-id='+response.id+']').text(response.vote_count);
  });
};