(function($){ $(document).ready(function(){
	CFB = {};
	var mapURL = '/map.json';
	var teamsURL = '/teams.json';
	d3.json(mapURL, drawMap);

	//On hover bring circle to top
	d3.selection.prototype.moveToFront = function() {
		return this.each(function(){
			this.parentNode.appendChild(this);
		});
	};

	function drawMap(error, geoData){
		// handle errors
		if(error){
			throw error;
		}

		var data = geoData;
		var w = window.innerWidth;
		var h = window.innerHeight;

		CFB.svg = d3.select('#d3')
			.append('svg')
			.attr('width', w)
			.attr('height', h)


		CFB.proj = d3.geo.albersUsa()
			.scale(1000)
	    	.translate([w / 2, h / 2])

		CFB.path = d3.geo.path().projection(CFB.proj);
		
		CFB.map = CFB.svg.selectAll('path')
			.data(data.features)
			.enter()
			.append('path')
			.attr('d', CFB.path)
			.classed('state-path', true);

		d3.json(teamsURL, plotPoints )
	}

	function plotPoints(error, teamData){
		CFB.teams = teamData.teams

		var teamGroups = CFB.svg.selectAll('g')
			.data(CFB.teams)
			.enter()
			.append('g')
			.classed('team-group', true)

		var teamPins = teamGroups.append('circle', '.pin')
			.classed('team-pin', true)
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

		teamGroups
			.on("mouseover", pinOver)
			.on("mouseout", pinOut)
			.on("click", pinClick)

		var Teamlabels = teamGroups.append('text')
			.text(function(d){
				return d.abbreviation
			})
			.attr('x', function(d){
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
			.classed('team-label', true)
			.attr('font-family', 'sans-serif')
			.attr('text-anchor', 'middle')
			.attr('fill', '#ffffff')
			.attr('font-size', '10px')

			// var line = d3.svg.line()
			// 	.interpolate('cardinal')
			// 	.x(function(d){
			// 		return CFB.proj([d.coords.long, d.coords.lat])[0];
			// 	})
			// 	.y(function(d){
			// 		return CFB.proj([d.coords.long, d.coords.lat])[1];
			// 	})
			// CFB.svg.append("path")
			// 	.classed('team-path', true)
			// 	.attr("d", line(CFB.teams))


	}

	function pinOver(pin){
		d3.select(this).moveToFront();
		d3.select(this)
			.selectAll('.team-pin')
			.transition()
			.duration(300)
			.attr('r', 22)

	}

	function pinOut(){
		d3.select(this)
			.selectAll('.team-pin')
			.transition()
			.duration(300)
			.attr('r', 12);
	}

	function pinClick(){
		var clickedTeam = d3.select(this).data()
		
		var newLine = d3.svg.line()
			.interpolate('cardinal')
			.x(function(d){
				return CFB.proj([d.coords.long, d.coords.lat])[0];
			})
			.y(function(d){
				return CFB.proj([d.coords.long, d.coords.lat])[1];
			})

		CFB.svg.append("path")
			.classed('team-path', true)
			.attr("d", newLine( clickedTeam ) )

			// var line = d3.svg.line()
			// 	.interpolate('cardinal')
			// 	.x(function(d){
			// 		return CFB.proj([d.coords.long, d.coords.lat])[0];
			// 	})
			// 	.y(function(d){
			// 		return CFB.proj([d.coords.long, d.coords.lat])[1];
			// 	})
			// CFB.svg.append("path")
			// 	.classed('team-path', true)
			// 	.attr("d", line(CFB.teams))

	}

	var lineTransition = function(path){
		path.transition()
			.transition(1000)
			.attrTween("stroke-dasharray", tweenDash)
	}

	var tweenDash = function(){
		var len = this.getTotalLength(),
    interpolate = d3.interpolateString("0," + len, len + "," + len);
    return function(t) { return interpolate(t); };
	}




})})(jQuery)