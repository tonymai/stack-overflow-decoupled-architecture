class QuestionsController < ApplicationController
	before_filter :allow_cross_domain

	def index
		render :json => Question.all
	end

	def show
		render :json => { question: Question.find(params[:id]),
											answers: Answer.where(question_id: params[:id]) }
	end

	def create
		question = Question.new(question_params)
		question.save
		render :json => question
	end


	private

	def allow_cross_domain
	  headers['Access-Control-Allow-Origin'] = '*'
	  headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
	  headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
	end

	def question_params
		params.require(:question).permit(:title, :content)
	end

end
