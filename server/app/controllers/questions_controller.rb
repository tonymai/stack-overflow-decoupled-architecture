class QuestionsController < ApplicationController

	def index
		render json: Question.all
	end

	def show
		render json: { question: Question.find(params[:id]),
											answers: Answer.where(question_id: params[:id]) }
	end

	def create
		question = Question.new(question_params)
		question.save
		render json: question
	end

	private

	def question_params
		params.require(:question).permit(:title, :content)
	end

end
