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
		if question.save
			render json: question, status: :created
		else
			render json: question.errors.full_messages.to_sentence, status: :unprocessable_entity
		end
	end

  def destroy
    question = Question.find(params[:id])
    question.destroy
    render json: { message: 'success', status: :ok }
  end

  # def edit
  #   @question = Question.find(params[:id])
  # end

  # def update
  #   @question = Question.find(params[:id])

  #   if @question.update_attributes(question_params)
  #     redirect_to :question
  #   else
  #     @question = Question.find(params[:id])
  #     @error = @question.errors.full_messages.to_sentence
  #     render :edit, status: 400
  #   end
  # end

	private

	def question_params
		params.require(:question).permit(:title, :content)
	end

end
