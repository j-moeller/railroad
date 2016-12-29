var svg = document.querySelector("svg");

function mousedown() {
	var event = new MouseEvent("test");
	event.initEvent("mousedown", true, true);
	svg.dispatchEvent(event);
}

function mousemove(e) {
	var event = new MouseEvent("test", e);
	event.initEvent("mousemove", true, true);
	svg.dispatchEvent(event);
}

function mouseup() {
	var event = new MouseEvent("test");
	event.initEvent("mouseup", true, true);
	svg.dispatchEvent(event);
}

function wheel(e) {
	var event = new WheelEvent("test", e);
	event.initEvent("mousewheel", true, true);
	svg.dispatchEvent(event);
}

function executeRepeating(scenario) {
	var d = new Date().getTime();
	for (var i = 0; i < 20; i++) {
		mousedown();
		scenario.forEach(function(d) { mousemove({movementX: d[0], movementY: d[1]}); });
		mouseup();
	}
	console.log(new Date().getTime() - d);
}

function executeComplex(scenario) {
	var d = new Date().getTime();
	mousedown();
	scenario.forEach(function(d) {
		if (d.length == 2) {
			mousemove({movementX: d[0], movementY: d[1]});
		} else {
			wheel({clientX: d[0], clientY: d[1], deltaY: d[2]})
		}
	});
	mouseup();
	console.log(new Date().getTime() - d);
}

var p_scen1 = [[-4,-3],[-3,-2],[-3,-3],[-4,-4],[-2,-2],[-3,-5],[-2,-1],[-3,-4],[-2,-2],[-3,-3],[-4,-3],[-3,-2],[-4,-3],[-2,-1],[-4,-4],[-2,-3],[-2,-2],[-4,-6],[-2,-4],[-2,-3],[-5,-7],[-2,-2],[-4,-6],[-2,-3],[-4,-5],[-5,-5],[-2,-3],[-5,-5],[-2,-3],[-4,-5],[-3,-4],[-4,-6],[-2,-4],[-3,-4],[-6,-8],[-2,-5],[-3,-5],[-6,-9],[-5,-8],[-2,-3],[-5,-8],[-4,-7],[-3,-3],[-2,-3],[-3,-4],[-1,-2],[0,0],[-37,-18],[-19,-9],[-7,-4],[-7,-4],[-13,-9],[-4,-3],[-5,-4],[-9,-6],[-5,-2],[-8,-6],[-4,-2],[-3,-3],[-7,-4],[-3,-2],[-4,-3],[-3,-2],[-3,-2],[-8,-6],[-5,-4],[-2,-2],[-3,-2],[-5,-4],[-3,-2],[-2,-3],[-7,-6],[-4,-3],[-6,-8],[-4,-5],[-7,-10],[-8,-9],[-3,-4],[-4,-3],[-1,-1],[-32,-20],[-9,-6],[-21,-13],[-19,-12],[-26,-21],[-8,-8],[-16,-18],[-7,-8],[-6,-8],[-12,-13],[-6,-6],[-6,-6],[-11,-11],[-5,-6],[-11,-14],[-5,-8],[-5,-8],[-10,-15],[-11,-23],[-4,-7],[-4,-5],[-4,-5],[-1,0],[0,2],[-62,-40],[-28,-21],[-26,-26],[-26,-27],[-12,-12],[-26,-26],[-11,-15],[-13,-16],[-27,-30],[-14,-13],[-12,-12],[-21,-24],[-9,-11],[-18,-28],[-23,-32],[-8,-8],[-7,-8],[-11,-18],[-6,-8],[-6,-7],[-10,-13],[-5,-4],[-8,-9],[-4,-2],[-2,-2],[-4,-2],[-1,-1],[-1,0],[-2,-3],[-3,-4],[-4,-4],[-1,-3],[-3,-6],[-2,-6],[-3,-5],[-3,-7],[-1,-4],[-4,-5],[-61,-83],[-17,-28],[-17,-24],[-16,-20],[-27,-42],[-12,-26],[-24,-47],[-10,-20],[-9,-19],[-17,-35],[-8,-17],[-5,-15],[-9,-28],[-5,-14],[-10,-27],[-4,-11],[-4,-8],[-2,-13],[-2,-7],[-1,-11],[-21,45],[-16,59],[-13,45],[-13,49],[-7,34],[-12,46],[-5,21],[-2,6],[-1,4],[-1,1],[0,53],[-6,27],[-14,49],[-9,45],[-3,19],[-6,40],[-5,39],[-5,30],[-2,14],[-3,11],[-6,22],[-2,13],[-6,23],[-5,22],[-1,3],[0,1],[0,0],[0,1],[-15,64],[-7,25],[-7,28],[-13,54],[-7,24],[-11,46],[-5,20],[-5,20],[-7,35],[-4,17],[-8,33],[-6,17],[-8,31],[-6,15],[-3,9],[-6,13],[-1,4],[0,2],[-1,0],[-9,36],[-7,17],[-6,16],[-6,17],[-5,17],[-13,34],[-12,36],[-11,35],[-5,17],[-9,30],[-5,13],[-3,11],[-7,17],[-3,7],[-3,6],[-3,8],[-1,4],[-1,3],[-1,2],[-1,2],[-2,4],[-1,2],[0,0],[0,1],[13,-25],[5,-8],[9,-14],[11,-16],[6,-10],[12,-21],[6,-11],[7,-11],[17,-27],[9,-16],[19,-34],[10,-16],[17,-26],[20,-29],[8,-15],[14,-29],[7,-11],[13,-18],[6,-12],[8,-17],[20,-46],[10,-22],[7,-12],[3,-5],[8,-10],[6,-6],[15,-14],[17,-17],[10,-10],[10,-8],[21,-20],[33,-29],[22,-22],[11,-13],[11,-12],[11,-11],[13,-12],[21,-23],[10,-12],[21,-22],[10,-14],[10,-12],[21,-20],[9,-9],[21,-16],[9,-7],[23,-22],[6,-9],[18,-26],[9,-9],[6,-8],[8,-7],[2,0],[1,-1],[4,-1],[2,-1],[1,-1],[2,0],[2,-9],[8,-12],[14,-22],[15,-29],[14,-23],[7,-14],[15,-33],[13,-30],[7,-13],[17,-27],[10,-19],[11,-22],[24,-44],[12,-16],[24,-44],[22,-40],[8,-14],[8,-13],[14,-24],[6,-7],[8,-15],[5,-6],[4,-10],[10,-22],[7,-13],[6,-12],[10,-12],[4,-4],[4,-4],[3,-1],[12,16],[48,85],[23,49],[12,28],[11,23],[20,41],[8,20],[13,31],[3,12],[4,6],[1,8],[1,1],[0,0],[7,33],[8,17],[12,25],[13,28],[29,59],[13,30],[12,32],[23,55],[10,25],[8,24],[14,47],[8,22],[13,38],[5,17],[9,33],[4,17],[1,1],[0,17],[10,19],[18,29],[11,19],[27,51],[12,24],[25,53],[14,28],[25,47],[22,42],[8,22],[14,42],[4,18],[5,18],[6,30],[4,17],[7,30],[3,11],[2,8],[4,10],[1,1],[0,2],[0,0],[1,0],[0,1],[0,1],[1,1],[0,-1]];
var p_scen2 = [[21,-49],[30,-54],[10,-15],[24,-40],[14,-24],[13,-22],[27,-44],[13,-25],[29,-48],[15,-21],[20,-30],[5,-5],[0,0],[0,-6],[0,-5],[0,-9],[6,-27],[6,-29],[16,-64],[8,-30],[8,-29],[11,-53],[6,-19],[13,-40],[15,-48],[27,-71],[10,-28],[16,-45],[6,-16],[7,-15],[0,-1],[0,-32],[15,-51],[20,-56],[12,-49],[7,-33],[2,-16],[7,-30],[3,-16],[4,-18],[6,-35],[4,-19],[12,-34],[4,-15],[9,-29],[3,-11],[3,-8],[1,-3],[1,-1],[0,0],[0,-28],[0,-22],[0,-28],[6,-44],[4,-21],[5,-40],[2,-15],[1,-14],[4,-22],[3,-11],[2,-13],[6,-31],[3,-13],[5,-16],[0,-2],[0,-1],[0,0],[0,0],[-73,-10],[-66,-7],[-87,-13],[-58,-6],[-56,-5],[-57,-1],[-17,0],[-36,0],[-38,0],[-30,4],[-11,0],[-8,0],[-11,0],[-6,0],[-7,0],[-14,0],[-6,0],[-4,0],[0,0],[-71,-21],[-28,-8],[-53,-17],[-22,-11],[-22,-12],[-44,-22],[-22,-9],[-42,-15],[-17,-4],[-17,-4],[-24,-5],[-8,-1],[-10,-2],[-21,-2],[-10,-2],[-19,-3],[-8,-1],[-8,-2],[-12,-2],[-5,-1],[-8,-3],[-4,-1],[-4,-1],[-5,-4],[-1,0],[-1,0],[0,0],[0,4],[0,0],[0,0],[0,0],[0,1],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,1],[0,0],[0,0],[0,1],[0,0],[0,1],[0,0],[-1,1],[0,0],[0,1],[0,0],[0,0],[0,1],[0,1],[-1,2],[-1,1],[-1,3],[-1,2],[0,1],[0,0],[0,0],[0,0],[0,0],[0,1],[-1,2],[-1,7],[-2,5],[-1,7],[-1,3],[0,3],[-2,10],[0,5],[-1,6],[0,14],[-2,6],[-1,14],[-3,9],[0,9],[-3,22],[-2,12],[-7,38],[-3,13],[-4,26],[-2,12],[-3,12],[-3,20],[-1,7],[-7,23],[-5,16],[-18,37],[-7,20],[-15,41],[-7,20],[-15,37],[-9,21],[-8,24],[-21,50],[-10,20],[-8,21],[-14,33],[-6,16],[-8,29],[-2,4],[0,0],[0,1],[0,0],[-1,0],[-3,23],[-15,37],[-20,48],[-18,48],[-9,26],[-8,24],[-16,48],[-10,23],[-9,24],[-15,40],[-6,16],[-13,34],[-4,15],[-12,41],[-2,6],[-1,5],[0,1],[-1,1],[-1,2],[0,1],[-1,0],[0,1],[0,1],[-1,2],[-1,1],[0,1],[-1,2],[-1,3],[0,1],[-1,3],[-2,4],[0,2],[-21,38],[-10,18],[-8,19],[-14,40],[-8,19],[-16,41],[-6,19],[-6,16],[-9,27],[-3,11],[-4,11],[-6,18],[-3,6],[-2,5],[0,1],[0,0],[0,0],[27,5],[15,4],[34,8],[42,11],[22,5],[52,12],[27,7],[27,7],[53,16],[28,10],[31,12],[70,25],[36,13],[73,25],[31,10],[29,11],[74,33],[19,8],[30,12],[9,4],[9,3],[1,0],[0,1],[45,22],[10,6],[8,5],[7,5]];
var p_scen3 = [[-14,-23],[-3,-8],[-3,-9],[-7,-14],[-7,-10],[-4,-5],[-3,-6],[-8,-14],[-5,-9],[-9,-16],[-3,-8],[-4,-7],[-9,-16],[-4,-9],[-5,-10],[-10,-23],[-4,-12],[-9,-23],[-6,-12],[-6,-14],[-14,-31],[-7,-17],[-14,-31],[-8,-14],[-5,-15],[-12,-30],[-5,-12],[-4,-10],[-4,-14],[-1,-3],[-4,-8],[-1,-4],[-3,-11],[-13,-17],[-6,-8],[-4,-6],[-6,-6],[-12,-17],[-6,-11],[-17,-21],[-8,-11],[-9,-10],[-13,-20],[-8,-10],[-6,-10],[-14,-22],[-7,-10],[-7,-8],[-11,-18],[-5,-8],[-10,-14],[-4,-5],[-4,-6],[-3,-4],[0,-1],[-1,0],[0,-1],[0,2],[35,-57],[13,-24],[31,-48],[19,-28],[56,-81],[17,-26],[30,-49],[12,-16],[13,-15],[23,-23],[11,-10],[23,-21],[10,-12],[6,-11],[7,-12],[1,0],[0,0],[33,-61],[18,-36],[57,-98],[42,-63],[37,-52],[16,-24],[18,-23],[31,-40],[13,-16],[13,-12],[20,-20],[8,-8],[8,-8],[12,-17],[7,-10],[15,-21],[7,-7],[6,-8],[11,-11],[5,-3],[2,-2],[3,-1],[0,-1],[12,21],[18,35],[14,27],[24,49],[27,69],[17,41],[9,32],[3,18],[2,13],[7,55],[6,35],[11,72],[7,30],[6,30],[11,66],[3,31],[8,49],[3,18],[4,20],[2,19],[1,4],[0,2],[0,0],[0,1],[13,95],[3,32],[3,33],[5,57],[2,26],[3,48],[1,20],[1,29],[0,10],[0,7],[0,11],[0,5],[0,7],[0,1],[0,0],[0,1],[0,3],[0,3],[0,3],[0,7],[0,3],[0,8],[0,4],[0,5],[0,12],[0,6],[0,5],[0,6],[0,0],[15,72],[3,22],[3,41],[3,20],[2,36],[1,15],[1,15],[1,25],[2,8],[0,13],[0,7],[0,5],[0,2],[0,2],[0,2],[0,3],[0,1],[0,1],[0,0],[0,0],[-111,29],[-103,19],[-32,8],[-74,18],[-72,20],[-36,10],[-34,10],[-59,15],[-26,5],[-46,4],[-18,2],[-15,1],[-26,2],[-12,2],[-10,1],[-20,3],[-10,1],[-14,1],[-7,0],[-5,1],[-10,1],[-6,2],[-12,2],[-4,0],[-4,1],[-5,0],[0,0],[0,0],[0,-16],[0,-17],[0,-26],[0,-14],[0,-14],[0,-25],[0,-14],[4,-19],[10,-55],[4,-25],[3,-22],[5,-40],[0,-20],[0,-31],[1,-13],[0,-11],[2,-17],[1,-6],[0,-2],[1,0],[26,-51],[14,-18],[29,-36],[15,-20],[31,-38],[14,-16],[14,-12],[23,-20],[12,-9],[25,-17],[10,-7],[12,-8],[26,-15],[16,-8],[16,-8],[32,-18],[14,-8],[23,-15],[12,-6],[9,-7],[13,-10],[3,-3],[2,-2],[1,-1],[0,0],[0,-2],[0,0],[0,0],[0,-2],[0,0],[-1,-2],[-3,-2],[-2,-1],[-5,-3],[-2,-2],[-2,-1],[-5,-3],[-1,-2],[-2,-3],[-6,-5],[-3,-3],[-6,-5],[-3,-2],[-4,-2],[-2,-1],[0,0],[0,-2],[-1,0],[0,0],[-41,-36],[-17,-16],[-35,-37],[-18,-17],[-18,-19],[-38,-43],[-19,-24],[-20,-22],[-37,-42],[-17,-17],[-16,-16],[-28,-27],[-11,-11],[-12,-12],[-25,-20],[-11,-10],[-11,-8],[-15,-15],[-6,-7],[-83,-65],[-26,-21],[-28,-19],[-26,-23],[-45,-44],[-20,-20],[-37,-31],[-18,-14],[-18,-15],[-32,-28],[-15,-14],[-27,-22],[-12,-10],[-9,-7],[-12,-9],[-5,-4],[-5,-3],[-7,-6],[-3,-2],[-6,-5],[-2,-1],[0,-1],[-1,0],[-48,64],[-47,71],[-17,28],[-51,79],[-17,22],[-41,61],[-9,15],[-11,19],[-3,5],[-1,1],[-1,1],[-73,128],[-16,31],[-30,62],[-13,30],[-23,53],[-11,26],[-18,47],[-8,19],[-5,16],[-11,29],[-6,13],[-4,12],[0,0],[-1,0],[-37,128],[-14,37],[-25,75],[-21,61],[-9,23],[-7,21],[-14,41],[-8,20],[-10,28],[-2,8],[-2,4],[-3,5],[-1,2],[-1,2],[-1,2],[0,0],[-23,48],[-4,7],[-1,9],[-2,7],[-4,16],[-3,8],[-2,7],[-4,13],[-2,6],[-3,10],[-1,5],[-2,4],[-1,2],[0,1],[0,0],[-28,-94],[-6,-27],[-12,-53],[-4,-26],[-5,-24],[-9,-43],[-4,-24],[-5,-24],[-7,-37],[-4,-12],[-3,-8],[-2,-6],[-1,-1],[-1,-4],[0,-1],[-1,-1],[0,0],[-16,-47],[-8,-17],[-12,-30],[-6,-16],[-6,-21],[-13,-44],[-5,-22],[-8,-25],[-11,-55],[-4,-23],[-8,-33],[-3,-11],[-1,-7],[-1,-3],[-1,0],[0,-30],[0,-27],[0,-53],[0,-29],[0,-48],[0,-24],[0,-54],[0,-30],[0,-27],[0,-50],[0,-21],[0,-19],[0,-2],[0,1],[0,1],[0,1],[-36,-48],[-10,-19],[-12,-20],[-20,-43],[-9,-29],[-18,-65],[-8,-36],[-8,-37],[-12,-52],[-6,-15],[-5,-13],[-4,-7],[0,0],[0,0],[0,0],[0,0],[28,-14],[19,-7],[46,-21],[29,-12],[70,-26],[35,-12],[36,-12],[68,-18],[30,-7],[58,-9],[29,-3],[27,-1],[44,-2],[16,-2],[25,-2],[13,-1],[11,-1],[21,-4],[11,-2],[20,-4],[10,-3],[9,-1],[12,-4],[5,-2],[3,-1],[5,-3],[3,0],[4,-1],[4,-2],[5,-1],[16,-3],[9,-2],[9,-2],[19,-4],[7,-1],[11,-2],[4,-1],[2,0],[1,0],[0,0],[39,73],[56,123],[17,46],[26,71],[21,65],[15,59],[4,18],[5,16],[7,29],[2,12],[2,6],[3,0],[0,0],[0,0],[0,0],[26,22],[20,22],[14,14],[32,31],[19,20],[18,25],[41,58],[19,31],[19,31],[29,59],[11,28],[19,58],[7,25],[5,21],[7,32],[4,10],[4,17],[2,6],[1,5],[1,13],[2,4],[1,4],[1,3],[0,1],[0,0],[0,0],[59,63],[11,14],[10,13],[10,13],[18,23],[7,11],[12,22],[6,12],[5,9],[9,20],[4,8],[5,9],[8,14],[4,8],[8,15],[3,8],[3,9],[6,16],[3,7],[5,11],[2,4],[2,3],[1,2],[0,2],[1,1],[0,1],[0,1],[1,3],[0,3],[1,2],[2,7],[1,2],[0,1],[2,4],[0,2],[0,4],[1,0],[0,1],[1,1]];

var z_scen1 = [[130,158,37],[130,158,38],[130,158,33],[130,158,76],[130,158,39],[130,158,45],[130,158,94],[130,158,51],[130,158,43],[130,158,89],[130,158,57],[130,158,57],[130,158,46],[130,158,39],[130,158,40],[130,158,38],[130,158,39],[130,158,46],[130,158,47],[130,158,42],[130,158,28],[130,158,20],[130,158,16],[130,158,10],[0,-20],[0,-7],[0,-20],[0,-32],[0,-31],[0,-15],[0,-21],[-2,-48],[-1,-23],[-1,-42],[-1,-22],[0,-20],[0,-28],[0,-10],[0,-10],[0,-4],[0,-4],[0,-4],[0,-7],[0,-1],[0,0],[3,-46],[0,-60],[0,-37],[0,-14],[0,-29],[0,-32],[0,-31],[0,-13],[0,-18],[0,-19],[3,-28],[3,-12],[2,-11],[3,-13],[3,-5],[2,-8],[1,-4],[0,-1],[1,-1],[0,0],[0,-18],[0,-14],[0,-30],[0,-14],[0,-15],[0,-17],[0,-26],[0,-11],[1,-17],[1,-6],[1,-5],[2,-9],[0,-3],[1,-1],[0,-1],[0,0],[655,636,-8],[655,636,-27],[655,636,-80],[655,636,-244],[655,636,-199],[655,636,-223],[655,636,-102],[655,636,-164],[655,636,-70],[655,636,-78],[655,636,-15],[655,636,-153],[655,636,-152],[655,636,-272],[655,636,-135],[655,636,-245],[655,636,-95],[655,636,-132],[655,636,-48],[655,636,-29],[655,636,-15],[655,636,-49],[655,636,-63],[655,636,-3],[655,636,-40],[655,636,-56],[655,636,-67],[655,636,-185],[655,636,-80],[655,636,-194],[655,636,-89],[655,636,-166],[655,636,-43],[655,636,-26],[655,636,-46],[655,636,-3],[655,636,-1],[655,636,7],[655,636,76],[655,636,78],[655,636,182],[655,636,126],[655,636,73],[655,636,132],[655,636,60],[655,636,166],[655,636,68],[655,636,75],[655,636,179],[655,636,66],[655,636,128],[655,636,32],[655,636,127],[655,636,148],[655,636,142],[655,636,254],[655,636,88],[655,636,171],[655,636,60],[655,636,128],[655,636,68],[655,636,85],[655,636,53],[655,636,19],[655,636,36],[655,636,7],[6,-5],[6,-3],[16,-5],[5,-2],[11,-2],[6,-1],[10,-2],[9,-2],[10,-4],[6,-2],[10,-2],[10,-2],[10,-2],[6,-2],[14,-4],[19,-8],[9,-3],[18,-7],[28,-13],[10,-6],[11,-8],[19,-18],[13,-10],[3,-1],[1,0],[0,0],[1,0],[0,0],[1,0],[1,0],[2,0],[1,-1],[3,-1],[265,624,-5],[265,624,-44],[265,624,-171],[265,624,-205],[265,624,-119],[265,624,-206],[265,624,-151],[265,624,-54],[265,624,-68],[265,624,-68],[265,624,-43],[265,624,-105],[265,624,-153],[265,624,-180],[265,624,-156],[265,624,-111],[265,624,-247],[265,624,-103],[265,624,-197],[265,624,-75],[265,624,-55],[265,624,-17],[265,624,2],[265,624,2],[265,624,108],[265,624,97],[265,624,111],[265,624,92],[265,624,69],[265,624,167],[265,624,81],[265,624,162],[265,624,69],[265,624,80],[265,624,37],[265,624,84],[265,624,39],[265,624,50],[265,624,15],[265,624,71],[265,624,95],[265,624,119],[265,624,202],[265,624,101],[265,624,170],[265,624,79],[265,624,157],[265,624,57],[265,624,92],[265,624,39],[-41,-9],[-28,-8],[-25,-8],[-21,-6],[-18,-6],[-8,-2],[-17,-4],[-16,-3],[-7,-3],[-14,-3],[-14,-3],[-3,-1],[-5,-1],[-3,-1],[-6,-1],[-4,-1],[-2,0],[-1,0],[0,0],[1127,167,-8],[1127,167,-66],[1127,167,-125],[1127,167,-316],[1127,167,-145],[1127,167,-214],[1127,167,-80],[1127,167,-77],[1127,167,-10],[1127,167,-130],[1127,167,-182],[1127,167,-194],[1127,167,-348],[1127,167,-159],[1127,167,-98],[1127,167,-102],[1127,167,-75],[1127,167,-72],[1127,167,-5],[1127,167,5],[1127,167,18],[1127,167,47],[1127,167,71],[1127,167,207],[1127,167,119],[1127,167,159],[1127,167,296],[1127,167,101],[1127,167,103],[1127,167,188],[1127,167,49],[1127,167,33],[1127,167,15],[1127,167,10],[1127,167,53],[1127,167,114],[1127,167,121],[1127,167,92],[1127,167,136],[1127,167,41],[1127,167,80],[1127,167,65],[1127,167,153],[1127,167,78],[1127,167,6],[2,42],[1,18],[3,38],[1,44],[0,18],[0,32],[1,26],[0,26],[0,15],[0,28],[0,12],[0,20],[0,11],[0,25],[0,24],[0,10],[0,15],[-1,7],[-1,5],[-1,9],[-1,3],[-1,3],[0,0],[0,0],[0,11],[0,14],[0,16],[0,7],[0,13],[-1,7],[0,8],[-2,14],[-1,9],[-2,15],[0,7],[-1,8],[-2,13],[-1,7],[-2,13],[-1,7],[0,7],[-1,18],[-1,9],[-2,8],[-3,16],[-1,9],[-4,19],[-2,11],[-2,9],[-4,20],[-1,9],[-1,8],[-2,12],[-1,6],[-1,7],[0,1],[0,0],[0,1],[837,194,0],[837,194,5],[837,194,47],[837,194,69],[837,194,65],[837,194,48],[837,194,49],[837,194,58],[837,194,62],[837,194,55],[837,194,46],[837,194,51],[837,194,49],[837,194,49],[837,194,30],[837,194,5],[0,21],[0,6],[0,5],[0,4],[0,3],[0,1],[0,1],[0,0]];
var z_scen2 = [[0,-29],[0,-86],[-4,0],[-5,0],[-9,-1],[-24,-6],[-25,-5],[-43,-9],[-11,-1],[-13,-4],[-1,0],[-1,-1],[-1,0],[0,1],[4,4],[20,25],[13,18],[13,18],[21,25],[6,8],[4,4],[1,2],[1,0],[0,0],[0,0],[0,0],[0,-10],[0,-6],[0,-20],[0,-26],[0,-19],[0,-7],[0,-8],[0,-19],[0,-13],[0,-15],[0,-25],[0,-11],[0,-20],[0,-11],[0,-9],[0,-16],[0,-7],[0,-11],[0,-5],[0,-12],[2,-8],[4,-17],[2,-17],[0,-4],[1,-2],[0,-1],[0,0],[0,0],[672,390,-41],[672,390,-67],[672,390,-152],[672,390,-156],[672,390,-70],[672,390,-92],[672,390,-49],[672,390,-89],[672,390,5],[672,390,0],[672,390,-160],[672,390,-189],[672,390,-166],[672,390,-161],[672,390,-260],[672,390,-94],[672,390,-133],[672,390,-24],[672,390,-38],[672,390,-29],[672,390,-26],[672,390,-16],[672,390,-21],[672,390,-7],[672,390,6],[672,390,-83],[672,390,-130],[672,390,-112],[672,390,-97],[672,390,-37],[672,390,-20],[518,288,-31],[518,288,-68],[518,288,-101],[518,288,-279],[518,288,-98],[518,288,-103],[518,288,-30],[518,288,-10],[518,288,-7],[595,316,-16],[595,316,-18],[595,316,-46],[595,316,-152],[595,316,-218],[595,316,-137],[595,316,-165],[595,316,-7],[595,316,-2],[595,316,5],[595,316,19],[595,316,29],[595,316,41],[595,316,57],[595,316,131],[595,316,163],[595,316,73],[595,316,73],[595,316,186],[595,316,98],[595,316,228],[595,316,126],[595,316,106],[595,316,183],[595,316,50],[595,316,4],[595,316,53],[595,316,84],[595,316,103],[595,316,275],[595,316,142],[595,316,225],[595,316,97],[595,316,195],[595,316,54],[595,316,19],[595,316,3],[14,-23],[9,-8],[29,-28],[23,-20],[9,-9],[12,-9],[20,-15],[10,-6],[18,-13],[10,-9],[12,-10],[28,-26],[16,-13],[27,-21],[22,-17],[19,-11],[9,-6],[19,-11],[7,-4],[6,-2],[6,-3],[1,-1],[1,0],[0,0],[86,366,-62],[86,366,-151],[86,366,-186],[86,366,-337],[86,366,-255],[86,366,-65],[86,366,0],[86,366,0],[86,366,-165],[86,366,-232],[86,366,-273],[86,366,-267],[86,366,-475],[86,366,-173],[86,366,-62],[86,366,-18],[86,366,0],[86,366,2],[86,366,20],[86,366,66],[86,366,161],[86,366,227],[86,366,259],[86,366,265],[86,366,381],[86,366,145],[86,366,98],[86,366,74],[86,366,11],[86,366,1],[86,366,4],[86,366,-36],[86,366,-136],[86,366,-160],[86,366,-177],[86,366,-318],[86,366,-128],[86,366,-234],[86,366,-110],[86,366,-76],[86,366,-134],[86,366,-76],[86,366,-55],[86,366,-53],[86,366,-5],[86,366,36],[86,366,119],[86,366,117],[86,366,114],[86,366,124],[86,366,124],[86,366,122],[86,366,196],[86,366,99],[86,366,85],[86,366,188],[86,366,63],[86,366,90],[86,366,64],[86,366,50],[86,366,50],[86,366,5],[86,366,-91],[86,366,-154],[86,366,-191],[86,366,-180],[86,366,-146],[86,366,-268],[86,366,-126],[86,366,-113],[86,366,-171],[86,366,-95],[86,366,-109],[86,366,-15],[18,-13],[24,-15],[13,-8],[12,-7],[21,-12],[9,-5],[20,-11],[23,-17],[24,-24],[10,-9],[19,-16],[11,-7],[10,-8],[24,-20],[15,-14],[28,-35],[14,-16],[11,-10],[13,-6],[4,-2],[4,0],[5,-2],[2,-1],[103,317,6],[103,317,62],[103,317,200],[103,317,297],[103,317,155],[103,317,136],[103,317,263],[103,317,112],[103,317,194],[103,317,37],[103,317,55],[103,317,77],[103,317,182],[103,317,208],[103,317,143],[103,317,250],[103,317,97],[103,317,132],[991,375,-50],[991,375,-124],[991,375,-405],[991,375,-451],[991,375,-265],[991,375,-80],[991,375,-72],[991,375,-76],[991,375,-86],[991,375,-44],[991,375,-24],[991,375,14],[991,375,-176],[991,375,-668],[991,375,-290],[991,375,-404],[991,375,-84],[991,375,-33],[991,375,-20],[991,375,1],[991,375,7],[991,375,4],[991,375,23],[991,375,56],[991,375,200],[991,375,90],[991,375,274],[991,375,171],[991,375,161],[991,375,279],[991,375,129],[991,375,86],[991,375,43],[991,375,4],[991,375,0],[991,375,0],[906,60,14],[906,60,0],[906,60,-141],[906,60,-111],[906,60,-113],[906,60,-76],[906,60,-32],[906,60,-27],[906,60,-3],[906,60,-63],[906,60,-23],[906,60,14],[906,60,73],[906,60,97],[906,60,113],[906,60,125],[906,60,85],[906,60,140],[906,60,74],[906,60,13],[0,-28],[0,-20],[0,-22],[4,-14],[10,-31],[5,-11],[5,-11],[10,-17],[14,-26],[8,-18],[8,-17],[14,-26],[12,-16],[4,-9],[8,-14],[2,-8],[4,-15],[2,-8],[0,-1],[663,510,-14],[663,510,-62],[663,510,-145],[663,510,-433],[663,510,-178],[663,510,-337],[663,510,-49],[663,510,-18],[663,510,-6],[663,510,0],[663,510,1],[663,510,48],[663,510,128],[663,510,172],[663,510,193],[663,510,146],[663,510,192],[663,510,33],[137,596,-9],[137,596,-24],[137,596,-137],[137,596,-280],[137,596,-130],[137,596,-234],[137,596,-120],[137,596,-16],[9,-22],[7,-16],[17,-37],[16,-36],[6,-13],[11,-19],[5,-6],[5,-8],[12,-22],[6,-13],[7,-14],[17,-24],[7,-11],[15,-20],[6,-8],[6,-7],[7,-9],[2,-1],[0,0],[567,507,0],[567,507,-57],[567,507,-156],[567,507,-403],[567,507,-170],[567,507,-278],[567,507,-125],[567,507,-157],[567,507,-45],[567,507,-51],[567,507,-54],[567,507,-52],[567,507,-48],[567,507,-89],[567,507,-149],[567,507,-203],[567,507,-441],[567,507,-152],[567,507,-263],[567,507,-124],[567,507,-93],[567,507,-51],[567,507,111],[567,507,137],[567,507,164],[567,507,307],[567,507,114],[567,507,239],[567,507,119],[567,507,200],[567,507,98],[567,507,89],[567,507,101],[567,507,30],[567,507,35],[567,507,1],[567,507,-18],[567,507,-146],[567,507,-201],[567,507,-175],[567,507,-136],[567,507,-267],[567,507,-142],[567,507,-197],[567,507,-104],[567,507,-98],[567,507,-153],[567,507,-25],[567,507,-6],[567,507,0],[567,507,23],[567,507,120],[567,507,194],[567,507,413],[567,507,207],[567,507,424],[567,507,183],[567,507,204],[567,507,59],[567,507,109],[567,507,61],[567,507,59],[567,507,93],[567,507,66],[567,507,60],[567,507,42],[62,-20],[19,-6],[49,-16],[48,-17],[47,-21],[49,-23],[23,-10],[18,-6],[30,-9],[8,-1],[12,-3],[4,-1],[3,-1],[3,0],[1,0],[278,568,-96],[278,568,-210],[278,568,-564],[278,568,-449],[278,568,-120],[278,568,-42],[278,568,-1],[278,568,0],[278,568,0],[278,568,8],[278,568,25],[278,568,97],[278,568,165],[278,568,407],[278,568,235],[278,568,344],[278,568,96],[278,568,67],[278,568,121],[278,568,68],[278,568,95],[278,568,96],[278,568,89],[278,568,78],[278,568,35],[278,568,-49],[278,568,-89],[278,568,-147],[278,568,-175],[278,568,-139],[278,568,-250],[278,568,-143],[278,568,-242],[278,568,-100],[278,568,-200],[278,568,-65],[278,568,-81],[278,568,-41],[278,568,-67],[278,568,-9],[278,568,18],[278,568,58],[278,568,90],[278,568,155],[278,568,138],[278,568,232],[278,568,126],[278,568,214],[278,568,89],[278,568,147],[278,568,64],[278,568,142],[278,568,55],[278,568,142],[278,568,126],[278,568,9],[278,568,17],[-15,25],[-15,18],[-8,8],[-13,16],[-12,15],[-4,6],[-10,16],[-4,7],[-13,24],[-3,6],[-4,13],[-3,7],[-5,14],[-6,20],[-4,19],[-3,8],[-6,16],[-7,16],[-3,7],[-4,11],[0,1],[-1,0],[676,126,21],[676,126,-9],[676,126,-114],[676,126,-157],[676,126,-261],[676,126,-104],[676,126,-49],[676,126,-36],[676,126,-50],[676,126,-30],[676,126,-38],[676,126,-24],[676,126,0],[676,126,-464],[676,126,-302],[676,126,-276],[676,126,-256],[676,126,-229],[676,126,-261],[676,126,-71],[676,126,-104],[676,126,-100],[676,126,-100],[676,126,-68],[676,126,-109],[676,126,-67],[676,126,-87],[676,126,-58],[676,126,148],[676,126,312],[676,126,166],[676,126,172],[676,126,418],[676,126,209],[676,126,162],[676,126,257],[676,126,45],[676,126,64],[676,126,69],[676,126,45],[676,126,63],[676,126,42],[676,126,56],[676,126,26],[676,126,29],[676,126,60],[676,126,101],[676,126,102],[676,126,145],[676,126,41],[0,38],[0,34],[0,47],[-1,25],[-8,58],[-4,31],[-2,26],[-6,51],[-2,25],[-2,18],[-2,28],[0,10],[0,14],[0,77],[0,28],[0,55],[0,54],[2,28],[3,45],[1,18],[1,19],[1,35],[0,16],[0,26],[0,10],[0,7],[0,9],[0,4],[0,1],[0,0],[617,411,32],[617,411,76],[617,411,118],[617,411,253],[617,411,190],[617,411,100],[617,411,69],[617,411,61],[617,411,51],[617,411,48],[617,411,37],[617,411,30],[617,411,15],[617,411,32],[617,411,40],[617,411,29],[1,10],[0,3],[1,2],[0,1],[0,0],[0,1]];

executeRepeating(p_scen1);
executeRepeating(p_scen2);
executeRepeating(p_scen3);

executeComplex(z_scen1);
executeComplex(z_scen2);
