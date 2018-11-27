var i=0;

function increment(){
    i+=1;
}

function decrement(){
    i-=1;
}

function textareaFunction(){
    var r = document.createElement("span");
    var x = document.createElement("input");
    var y = document.createElement("textarea");
    var linebreak = document.createElement("br");
    var linebreak1 = document.createElement("br");
    var linebreak2 = document.createElement("br");
    y.setAttribute("cols",100);
    y.setAttribute("rows",4);
    y.setAttribute("placeholder","Work Experience");
    x.setAttribute("placeholder","Job Title");
    x.setAttribute("type","text");
    x.setAttribute("name","jobTitle");
    x.setAttribute("class","input-group col-6");
    y.setAttribute("class","input-group col-6");
    increment();
    linebreak.setAttribute("id","lb0_"+i);
    linebreak1.setAttribute("id","lb1_"+i);
    linebreak2.setAttribute("id","lb2_"+i);
    x.setAttribute("id","jobTitle_"+i);
    r.setAttribute("id","workExperience_"+i);
    r.appendChild(linebreak);
    r.appendChild(x);
    r.appendChild(linebreak1);
    r.appendChild(y);
    r.appendChild(linebreak2);
    document.getElementById("workSection").appendChild(r);
}
function removeElement(){
    if(i == 0)
        alert("Element cannot be removed!");
    else {
        var child = document.getElementById("workExperience_"+i);
        var parent = document.getElementById("workSection");
        parent.removeChild(child);
        decrement();
    }
}