var i = 1;
function addNum() {
	document.getElementById("mcount").innerHTML = i;
	i++;
}

function pos(){
	let post = document.createElement("DIV");
	post.setAttribute("class", "post");
	
	let p = document.createElement("P");
	p.setAttribute("class", "post-time");
	p.innerHTML = Date();
	post.appendChild(p);
	
	let p2 = document.createElement("P");
	let text = document.getElementById("input").innerHTML;
	p2.setAttribute("class", "post-content");
	p2.innerHTML = text;
	post.appendChild(p2);
	
	document.getElementById("posts").appendChild(post);
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

function radioBtn(String val){
	let btn = document.getElementsByClassName("controls left")[0];
	var n = btn.getElementsByTagName("input")[0];
	let blue = btn.getElementsByTagName("input")[1];
	let red = btn.getElementsByTagName("input")[2];
	
	if(val == "red"){
		red.checked = true;
		blue.checked = false;
	}else{
		red.checked = false;
		blue.checked = true;
	}
}
