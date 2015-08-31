(function($){ $(document).ready(function(){
	CFB = {};
	var mapURL = '/map.json';
	var teamsURL = '/teams';
	d3.json(mapURL, drawMap);

	function drawMap(error, geoData){
		// handle errors
		if(error){
			return console.warn(error);
		}

		var data = geoData;
		var margin = 75;
		var w = 1000 - margin;
		var h = 1080 - margin;

		CFB.svg = d3.select('#d3')
			.append('svg')
			.attr('width', w + margin)
			.attr('height', h + margin)
			.append('g')
			.attr('class', 'map');


		CFB.proj = d3.geo.albersUsa()

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
			.data(teamData)
			.enter()
			.append('circle', '.pin')
			.attr('r', 12)
			.attr('stroke-width', '0')
			.attr('fill', function(d){
				return d.color;
			})
			.attr('cx', function(d){
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
			.data(teamData)
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