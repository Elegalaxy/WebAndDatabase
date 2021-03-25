var n = 1;
function addNum() {
	document.getElementById("mcount").innerHTML = n;
	n++;
}

function pos(){
	let isChild = false;
	if(dropMenu.selectedIndex == 0){
		post = document.getElementById("posts");
		isChild = false;
	}else{
		post = postArr[dropMenu.selectedIndex*2-1];
		post.appendChild(document.createElement("BR"));
		post.appendChild(document.createElement("BR"));
		isChild = true;
	}
	postCount = btn.getElementsByTagName("input")[0].value;

	for(let i = 0; i < postCount; i++){
		let p = document.createElement("DIV");
		let l = post.style.marginLeft;
		let mar = l.substring(0,l.length-2);

		p.setAttribute("class", "post-time");
		p.innerHTML = Date();
		p.style.marginLeft = 0;
		if(isChild){
			p.style.marginLeft = parseInt(mar) + 10 + "px";
		}
		post.appendChild(p);
		post.appendChild(document.createElement("BR"));
		
		let p2 = document.createElement("DIV");
		let text = document.getElementById("inputTxt").value;
		createOption(text);
		p2.innerHTML = text;
		p2.setAttribute("class", "post-content");
		p2.style.marginLeft = 0;

		if(isChild){
			p2.style.marginLeft = parseInt(mar) + 10 + "px";
		}

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
var postArr = document.getElementById("posts").getElementsByTagName("div");
function changePost(){

	for(let i = 0; i < postArr.length; i++){
		if(i < slider.value*2){
			postArr[i].style.display = "block";
		}
		else{
			postArr[i].style.display = "none";
		}
	}
}

var dropMenu = document.getElementsByTagName("select")[0];

function createOption(post){
	let opt = document.createElement("OPTION");
	opt.innerHTML = post;
	dropMenu.appendChild(opt);
}