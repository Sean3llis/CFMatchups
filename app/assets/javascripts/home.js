(function($){ $(document).ready(function(){
	CFB = {};
	var mapURL = '/map.json';
	var teamsURL = '/teams.json';
	d3.json(mapURL, drawMap);

	function drawMap(error, geoData){
		// handle errors
		if(error){
			return console.warn(error);
		}

		var data = geoData;
		var w = 1170;
		var h = w/2;

		CFB.svg = d3.select('#d3')
			.append('svg')
			.attr('width', w)
			.attr('height', h)


		CFB.proj = d3.geo.albersUsa()
		.scale(1000)
    .translate([w / 2, h / 2])

		var path = d3.geo.path().projection(CFB.proj);
		
		CFB.map = CFB.svg.selectAll('path')
			.data(data.features)
			.enter()
			.append('path')
			.attr('d', path)



		d3.json(teamsURL, plotPoints )
	}

	function plotPoints(error, teamData){
		console.log(teamData);
		if(error){
			return console.warn(error);
		}

		var pin = CFB.svg.selectAll('.pin')
			.data(teamData.teams)
			.enter()
			.append('circle', '.pin')
			.attr('r', 12)
			.attr('stroke-width', '0')
			.attr('fill', function(d){
				return d.color;
			})
			.attr('cx', function(d){
				console.log(d);
				var xAxis = CFB.proj([
					d.coords.long,
					d.coords.lat
				])
				return xAxis[0];
			})
			.attr('cy', function(d){
				var yAxis = CFB.proj([
					d.coords.long,
					d.coords.lat
				]);
				return yAxis[1];
			});
		CFB.labels = CFB.svg.selectAll('text')
			.data(teamData.teams)
			.enter()
			.append('text')
			.text(function(d){
				console.log(d)
				return d.abbreviation
			})
			.attr('x', function(d){
				console.log(d);
				var xAxis = CFB.proj([
					d.coords.long,
					d.coords.lat
				])
				return xAxis[0];
			})
			.attr('y', function(d){
				var yAxis = CFB.proj([
					d.coords.long,
					d.coords.lat
				]);
				return yAxis[1] + 4;
			})
			.attr('font-family', 'sans-serif')
			.attr('text-anchor', 'middle')
			.attr('fill', '#ffffff')
			.attr('font-size', '10px')
	}





})})(jQuery)