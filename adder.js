var i=0;

function increment(){
    i+=1;
}

function textareaFunction(){
    var r = document.createElement('span');
    var x = document.createElement("input");
    var y = document.createElement("TEXTAREA");
    var g = document.createElement("input");
    var linebreak = document.createElement("br");
    var linebreak2 = document.createElement("br");
    y.setAttribute("cols",100);
    y.setAttribute("rows",4);
    y.setAttribute("placeholder","Work Experience");
    y.setAttribute("style","position:relative");
    x.setAttribute("placeholder","Job Title");
    x.setAttribute("type","text");
    x.setAttribute("name","jobTitle");
    increment();
    r.appendChild(y);
    x.setAttribute("id","jobTitle_"+i);
    g.setAttribute("type","button");
    g.setAttribute("onclick", "removeElement('myForm','id_"+i+"')");
    g.setAttribute("class","btn btn-primary ml-2");
    g.setAttribute("value","Remove");
    r.appendChild(g);
    r.setAttribute("id","workExperience_"+i);
    document.getElementById("myForm").appendChild(x);
    document.getElementById("myForm").appendChild(linebreak);
    document.getElementById("myForm").appendChild(linebreak2);
    document.getElementById("myForm").appendChild(r);
}
function removeElement(parentDiv, childDiv){
    if(childDiv == parentDiv)
        alert("Element cannot be removed!");
    else if(document.getElementById(childDiv)){
        var child = document.getElementById(childDiv);
        var parent = document.getElementById(parentDiv);
        parent.removeChild(child);
    }
    else{
        alert("Element has already been removed or doesn't exist!");
    }
}