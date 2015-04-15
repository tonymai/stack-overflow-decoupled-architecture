class AnswersController < ApplicationController

  def create
    question = Question.find(params[:question_id])
    answer = question.answers.new(answer_params)
    if answer.save
      render json: answer, status: :created
    else
      render json: { error: answer.errors.full_messages.to_sentence }, status: :unprocessable_entity
    end
  end

  def upvote
    answer = Answer.find(params[:id])
    answer.increase_vote
    render json: answer, status: :ok
  end

  def downvote
    answer = Answer.find(params[:id])
    answer.decrease_vote
    render json: answer, status: :ok
  end

  private

  def answer_params
    params.require(:answer).permit(:title, :content)
  end

end
