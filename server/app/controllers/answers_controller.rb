class AnswersController < ApplicationController

  def create
    answer = Answer.new(answer_params)
    answer.save
    render json: answer
  end

  private
  
  def question_params
    params.require(:answer).permit(:title, :content)
  end

end
