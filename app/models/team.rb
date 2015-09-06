class Team < ActiveRecord::Base
	belongs_to :conference
	has_many :home_games, :class_name => "Game", :foreign_key => "home_id"
	has_many :away_games, :class_name => "Game", :foreign_key => "away_id"
	serialize :coords, JSON
end
