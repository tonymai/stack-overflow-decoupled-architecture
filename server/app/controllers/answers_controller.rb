class AnswersController < ApplicationController

  def create
    answer = Answer.new(answer_params)
    answer.save
    render json: answer
  end

end
