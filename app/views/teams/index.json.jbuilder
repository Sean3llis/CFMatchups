json.teams @teams do |team|
	json.id team.id
	json.name team.name
	json.abbreviation team.abbreviation
	json.color team.color
	json.coords team.coords

	json.conference team.conference.name

	json.games team.games do |game|
		json.homeTeam game.home.abbreviation
		json.awayTeam game.away.abbreviation
		json.gameTime game.time
		json.coords game.home.coords
	end
	
end