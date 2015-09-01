# Create Conferences

big12 = Conference.create(name: 'Big 12')

# Populate Teams

tex = Team.create(
	name: 'Texas',
	abbreviation: 'TEX',
	color: '#CD5828',
	conference: big12,
	coords: {
		lat: 30.2830709,
		long: -97.7315521
	}
)
okla = Team.create(
	name: 'Oklahoma',
	abbreviation: 'OKLA',
	color: '#B20838',
	conference: big12,
	coords: {
		lat: 35.2060435,
		long: -97.4431378
	}
)
bay = Team.create(
	name: 'Baylor',
	abbreviation: 'BAY',
	color: '#034733',
	conference: big12,
	coords: {
		lat: 31.5583435,
		long: -97.1154131
	}
)
tcu = Team.create(
	name: 'TCU',
	abbreviation: 'TCU',
	color: '#413B67',
	conference: big12,
	coords: {
		lat: 32.7102452,
		long: -97.3686229
	}
)
ttech = Team.create(
	name: 'Texas Tech',
	abbreviation: 'TTECH',
	color: '#ED2D23',
	conference: big12,
	coords: {
		lat: 33.5912753,
		long: -101.8728813
	}
)
iast = Team.create(
	name: 'Iowa State',
	abbreviation: 'IAST',
	color: '#CE1126',
	conference: big12,
	coords: {
		lat: 42.0139988,
		long: -93.6357691
	}
)
ksst = Team.create(
	name: 'Kansas State',
	abbreviation: 'KSST',
	color: '#480d76',
	conference: big12,
	coords: {
		lat: 39.2021509,
		long: -96.5938556
	}
)
wvu = Team.create(
	name: 'West Virginia',
	abbreviation: 'WVU',
	color: '#EAAA00',
	conference: big12,
	coords: {
		lat: 39.6510156,
		long: -79.9556771
	}
)
okst = Team.create(
	name: 'Oklahoma State',
	abbreviation: 'OKST',
	color: '#F46717',
	conference: big12,
	coords: {
		lat: 36.1261208,
		long: -97.0664825
	}
)
kan = Team.create(
	name: 'Kansas',
	abbreviation: 'KAN',
	color: '#001D9C',
	conference: big12,
	coords: {
		lat: 38.9635819,
		long: -95.24637
	}
)







