# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
big12 = Conference.create(name: 'Big 12')

Team.create(
	name: 'Texas',
	abbreviation: 'TEX',
	color: '#CD5828',
	conference: big12,
	coords: {
		lat: 30.2830709,
		long: -97.7315521
	}
)
Team.create(
	name: 'Oklahoma',
	abbreviation: 'OKLA',
	color: '#B20838',
	conference: big12,
	coords: {
		lat: 35.2060435,
		long: -97.4431378
	}
)
Team.create(
	name: 'Baylor',
	abbreviation: 'BAY',
	color: '#034733',
	conference: big12,
	coords: {
		lat: 31.5583435,
		long: -97.1154131
	}
)