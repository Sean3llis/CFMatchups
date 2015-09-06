class ConferencesController < ApplicationController
	def index
		@conferences = Conference.all
		render json: @conferences
	end
end
