var n = 1;
function addNum() {
	document.getElementById("mcount").innerHTML = n;
	n++;
}

function pos(){
	post = document.getElementById("posts");
	postCount = btn.getElementsByTagName("input")[0].value;

	for(let i = 0; i < postCount; i++){
		let p = document.createElement("P");
		p.setAttribute("class", "post-time");
		p.innerHTML = Date();
		post.appendChild(p);
		
		let p2 = document.createElement("P");
		let text = document.getElementById("input").innerHTML;
		p2.setAttribute("class", "post-content");
		p2.innerHTML = text;
		if(postColor == 1){
			p2.style.color = "red";
		}else if(postColor == 2){
			p2.style.color = "blue";
		}
		post.appendChild(p2);
	}
}

function menuBtn(){
	let main = document.getElementById("main");
	let menu = document.getElementById("menu");
	if(main.style.display == "none"){
		main.style.display = "block";
		menu.style.display = "none";
	}else{
		main.style.display = "none";
		menu.style.display = "block";
	}
}

var btn = document.getElementsByClassName("controls left")[0];
var postColor = 0; //Black, Red, Blue
var postCount = 1;

function radioBtn(val){	
	if(val == "red"){
		postColor = 1;
	}else if(val == "blue"){
		postColor = 2;
	}
}
