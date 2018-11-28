var i=0;
var j=0;
var k=0;

function increment(){
    i+=1;
}
function decrement(){
    i-=1;
}
function incrementSkill(){
    j+=1;
}
function decrementSkill(){
    j-=1;
}
function incrementEducation(){
    k+=1;
}
function decrementEducation(){
    k-=1;
}

function textareaFunction(){
    let r = document.createElement("span");
    let x = document.createElement("input");
    let y = document.createElement("textarea");
    let linebreak = document.createElement("br");
    let linebreak1 = document.createElement("br");
    let linebreak2 = document.createElement("br");
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
        let child = document.getElementById("workExperience_"+i);
        let parent = document.getElementById("workSection");
        parent.removeChild(child);
        decrement();
    }
}

function skillFunction(){
    let r = document.createElement("input");
    let linebreak = document.createElement("br");
    r.setAttribute("type","text");
    r.setAttribute("name","Skills");
    r.setAttribute("class","input-group col-6");
    r.setAttribute("placeholder","Skill");
    incrementSkill();
    linebreak.setAttribute("id","lb_"+i);
    r.setAttribute("id","Skills_"+i);
    document.getElementById("skillSection").appendChild(r);
    document.getElementById("skillSection").appendChild(linebreak);
}

function removeSkill(){
    if(j==0)
    alert("Element cannot be removed!");
    else{
        let child = document.getElementById("Skills_"+i);
        let lb = document.getElementById("lb_"+i);
        let parent = document.getElementById("skillSection");
        parent.removeChild(child);
        parent.removeChild(lb);
        decrementSkill(); 
    }
}