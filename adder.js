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
    x.setAttribute("class","input-group col-6");
    y.setAttribute("class","input-group col-6");
    increment();
    linebreak.setAttribute("id","lb0_"+i);
    linebreak1.setAttribute("id","lb1_"+i);
    linebreak2.setAttribute("id","lb2_"+i);
    x.setAttribute("id","JobTitle_"+i);
    y.setAttribute("id","Work_"+i);
    r.setAttribute("id","WorkExperience_"+i);
    x.setAttribute("name","JobTitle_"+i);
    y.setAttribute("name","Work_"+i);
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
        let child = document.getElementById("WorkExperience_"+i);
        let parent = document.getElementById("workSection");
        parent.removeChild(child);
        decrement();
    }
}

function skillFunction(){
    let r = document.createElement("input");
    let linebreak = document.createElement("br");
    r.setAttribute("type","text");
    r.setAttribute("class","input-group col-6");
    r.setAttribute("placeholder","Skill");
    incrementSkill();
    linebreak.setAttribute("id","lb_"+j);
    r.setAttribute("id","Skills_"+j);
    r.setAttribute("name","Skills_"+j);
    document.getElementById("skillSection").appendChild(r);
    document.getElementById("skillSection").appendChild(linebreak);
}

function removeSkill(){
    if(j==0)
        alert("Element cannot be removed!");
    else{
        let child = document.getElementById("Skills_"+j);
        let lb = document.getElementById("lb_"+j);
        let parent = document.getElementById("skillSection");
        parent.removeChild(child);
        parent.removeChild(lb);
        decrementSkill(); 
    }
}

function educationFunction(){
    let r = document.createElement("span");
    let x = document.createElement("input");
    let y = document.createElement("input");
    let linebreak = document.createElement("br");
    let linebreak1 = document.createElement("br");
    let linebreak2 = document.createElement("br");
    x.setAttribute("type","text");
    y.setAttribute("type","text");
    x.setAttribute("class","input-group col-6");
    y.setAttribute("class","input-group col-6");
    x.setAttribute("placeholder","College/University");
    y.setAttribute("placeholder","Qualification");
    incrementEducation();
    linebreak.setAttribute("id","lb_"+k);
    linebreak1.setAttribute("id","lb1_"+k);
    linebreak2.setAttribute("id","lb2_"+k);
    x.setAttribute("id","College_"+k);
    y.setAttribute("id","Qualification_"+k);
    r.setAttribute("id","Education_"+k);
    x.setAttribute("name","College_"+k);
    y.setAttribute("name","Qualification_"+k);
    r.appendChild(x);
    r.appendChild(linebreak);
    r.appendChild(y);
    document.getElementById("collegeSection").appendChild(linebreak1);
    document.getElementById("collegeSection").appendChild(r);
    document.getElementById("collegeSection").appendChild(linebreak2);
}

function removeEducation(){
    if(k==0)
        alert("Element cannot be removed!");
    else{
        let child = document.getElementById("Education_"+k);
        let parent = document.getElementById("collegeSection");
        let lb = document.getElementById("lb_"+k);
        let lb1 = document.getElementById("lb1_"+k);
        let lb2 = document.getElementById("lb2_"+k);
        parent.removeChild(child);
        parent.removeChild(lb);
        parent.removeChild(lb1);
        parent.removeChild(lb2);
        decrementEducation();
    }
}