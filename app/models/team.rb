class Team < ActiveRecord::Base
	belongs_to :conference
	has_many :home_games, :class_name => "Game", :foreign_key => "home_id"
	has_many :away_games, :class_name => "Game", :foreign_key => "away_id"
	serialize :coords, JSON
	def games
		@home_games = self.home_games
		@away_games = self.away_games
		return (@home_games + @away_games).sort_by(&:time)
	end
end
