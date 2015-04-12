$(document).on('page:change', function(){
	if ($('div').is('.view-index')){
		$.ajax({
			url: 'http://localhost:3001/questions', 
			type: 'GET',
		}).done(function(response) {
			appendPost(response);
		});
	}
	else if 
		($('div').is('.view-show')){
			var id = $('h2').attr('class')
			$.ajax({
				url: 'http://localhost:3001/questions/'+id, 
				type: 'GET',
			}).done(function(response) {
				$('h2').text(response.question.title);
				$('.question-content').text(response.question.content);
				appendPost(response.answers);
			});
		}	
});

function appendPost(response) {
	var source = $('#post_template').html();
	var templatingFunction = Handlebars.compile(source);
	var context = {};
	context.post = response;
	$('.results').prepend(templatingFunction(context));
};