var n = 1;
function addNum() {
	document.getElementById("mcount").innerHTML = n;
	n++;
}

function pos(){
	post = document.getElementById("posts");
	postCount = btn.getElementsByTagName("input")[0].value;

	for(let i = 0; i < postCount; i++){
		let p = document.createElement("DIV");
		p.setAttribute("class", "post-time");
		p.innerHTML = Date();
		post.appendChild(p);
		post.appendChild(document.createElement("BR"));
		
		let p2 = document.createElement("DIV");
		let text = document.getElementById("input").innerHTML;
		p2.setAttribute("class", "post-content");
		p2.innerHTML = text;

		if(postColor == 1){
			p2.style.color = "red";
		}else if(postColor == 2){
			p2.style.color = "blue";
		}

		if(textBold){
			p2.style.fontWeight = "bold";
		}
		
		if(textItalic){
			p2.style.fontStyle = "italic";			
		}
	
		post.appendChild(p2);
		post.appendChild(document.createElement("BR"));

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

var bg = document.getElementById("menu").getElementsByTagName("input")[0];
bg.addEventListener('change', updateValue);

function updateValue(){
	document.body.style.backgroundColor = bg.value;
}

var textBold = false;
var textItalic = false;
function textStyle(isBold){
	if(isBold){
		textBold = !textBold;
	}else{
		textItalic = !textItalic;
	}
}

var slider = document.getElementsByClassName("controls left")[1].getElementsByTagName("input")[0];
slider.addEventListener('input', changePost);
function changePost(){
	let postArr = document.getElementById("posts").getElementsByTagName("div");

	for(let i = 0; i < postArr.length; i++){
		if(i < slider.value*2){
			postArr[i].style.display = "block";
		}
		else{
			postArr[i].style.display = "none";
		}
	}
}
