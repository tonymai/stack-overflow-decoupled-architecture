class QuestionsController < ApplicationController
	before_filter :allow_cross_domain

	def index
		render :json => Question.all.to_json
	end


	private

	def allow_cross_domain
	  headers['Access-Control-Allow-Origin'] = '*'
	  headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
	  headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
	end

end
