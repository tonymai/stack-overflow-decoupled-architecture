class QuestionsController < ApplicationController

	def index
	end

	def show
		@id = params[:id]
	end

  def edit
    @id = params[:id]
  end


end
