class Team < ActiveRecord::Base
	belongs_to :conference
	serialize :coords, JSON
end
