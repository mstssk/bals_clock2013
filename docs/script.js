(function(){

function getElemById(id){
	return document.getElementById(id);
}

function remove(elem){
	if(elem && elem.parentNode){
		elem.parentNode.removeChild(elem);
	}
}

var num = 	["./img/num0.png"
			,"./img/num1.png"
			,"./img/num2.png"
			,"./img/num3.png"
			,"./img/num4.png"
			,"./img/num5.png"
			,"./img/num6.png"
			,"./img/num7.png"
			,"./img/num8.png"
			,"./img/num9.png"];
var h2 = getElemById("h2");
var h1 = getElemById("h1");
var h0 = getElemById("h0");
var m1 = getElemById("m1");
var m0 = getElemById("m0");
var s1 = getElemById("s1");
var s0 = getElemById("s0");
var balstime = new Date("2013/08/02 23:21:53 +0900");
function count(){
	var remain = (balstime - new Date()) / 1000;
	if(remain < 0){
		clearInterval(timeoutID);
		if(getElemById("fg")){ // Delay 'bals' if foreground effect stil exists.
			setTimeout(function(){
				bals();
			}, 3000);
		}else{
			bals();
		}
	}else{
		var h = remain / 3600 | 0;
		var tmp = remain % 3600;
		var m = tmp / 60 | 0;
		var s = tmp % 60 | 0;
		h2.src = num[h / 100 % 100 | 0];
		h1.src = num[h / 10 % 10| 0];
		h0.src = num[h % 10];
		m1.src = num[m / 10 | 0];
		m0.src = num[m % 10];
		s1.src = num[s / 10 | 0];
		s0.src = num[s % 10];
	}
}

function bals(){
	clearInterval(timeoutID);
	var effect = getElemById("effect");
	effect.style.display = null;
	setTimeout(function(){
		remove(effect);
		remove(getElemById("ornithopter"));
		remove(getElemById("particles"));
		remove(getElemById("text"));
		getElemById("text_finished").style.display = null;
	}, 3000);

	var family = getElemById("family");
	family.style.display = null;
	family.className += "flying";

	var castle = getElemById("castle");
	castle.className += "falldown";
	
	var megaa = getElemById("megaa");
	megaa.className += "falldown";
	megaa.style.display = null;

	setTimeout(function(){
		remove(megaa);
	}, 50000);
	setTimeout(function(){
		remove(castle);
		remove(family);
	}, 60000);

	return "目がああああ";
}
window["bals"] = function(){return bals();};

var timeoutID = setInterval(count,1000);

window.onload = function(){
	// fade-in animation
	var fg = getElemById("fg");
	fg.className += "fadein";
	setTimeout(function(){
		// Delete fourground element after fade-in animation.
		remove(fg);
	}, 3000);

	// ornithopter
	var ornithopter = getElemById("ornithopter");
	if((balstime.getTime() - (new Date().getTime())) < 60000){
		remove(ornithopter);
	}else{
		setTimeout(function(){
			remove(ornithopter);
		}, 60000);
	}
};
})();
