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
