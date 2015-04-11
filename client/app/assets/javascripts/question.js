//We do this to avoid turbo link issues
$(document).on('page:change', function(){
	//We assigned each page body a class name to handle different requests
	if ($('body').is('.index')){
		$.ajax({
			url: 'http://localhost:3001/questions', 
			type: 'GET',

		}).done(function(response) {
			appendQuestion(response);

		});

		//Lets define some jquery vars to pass into ajax call to create new question.
		$('.new-question').on('submit', function(e) {
			e.preventDefault();
			var $title = $('input[name="question[title]"]')
			var $content = $('textarea[name="question[content]"]')
			$.ajax({
				url: 'http://localhost:3001' + $('.new-question').attr('action'),
				type: 'POST',
				data: { question: { title: $title.val(), content: $content.val() } }
			//We are going to call the appendQuestion function defined below to dry it up and clear the values
			}).done(function(response) {
				appendQuestion([response]);
				$title.val('');
				$content.val('');
			});
		});


	}
	else if 
		($('body').is('.show')){
			var id = $('h1').attr('class')
			$.ajax({
				url: 'http://localhost:3001/questions/'+id+'', 
				type: 'GET',

			}).done(function(response) {
				$('h1').text(response.question.title);
				$('h3').text(response.question.content);
				var source = $('#answer_template').html();
				var templatingFunction = Handlebars.compile(source);
				var context = {};
				$('.results').html(templatingFunction(response));
			});
		}	

});

function appendQuestion(response) {
	//Grabbing the Handlebars script 
	var source = $('#question_template').html();
	var templatingFunction = Handlebars.compile(source);
	//Creating an empty object where the context of our response is going to live
	var context = {};
	context.questions = response;
	$('.results').append(templatingFunction(context));
	// debugger
};