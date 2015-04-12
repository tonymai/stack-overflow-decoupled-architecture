class AnswersController < ApplicationController

  def create
    question = Question.find(params[:question_id])
    answer = question.answers.new(answer_params)
    if answer.save
      render json: answer, status: :created
    else
      render json: answer.errors.full_messages.to_sentence, status: :unprocessable_entity
    end
  end

  private

  def answer_params
    params.require(:answer).permit(:title, :content)
  end

end
