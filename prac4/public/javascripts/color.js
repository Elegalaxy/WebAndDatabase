function loadHeading(){
    let xml = new XMLHttpRequest();
    xml.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let c = document.getElementById("color");
            c.style.color = this.responseText;
            c.innerHTML = this.responseText;
        }
    };
    xml.open("GET", "/color", true);
    xml.send();
}