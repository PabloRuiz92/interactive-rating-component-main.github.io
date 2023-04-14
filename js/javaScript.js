let clickScore1=document.getElementById("btnScore1");
let clickScore2=document.getElementById("btnScore2");
let clickScore3=document.getElementById("btnScore3");
let clickScore4=document.getElementById("btnScore4");
let clickScore5=document.getElementById("btnScore5");
let clickSubmit=document.getElementById("btnSubmit");

clickSubmit.addEventListener("click",()=>{
    document.getElementById("containerThankYou").style.visibility="visible";
    document.getElementById("containerRating").style.visibility="hidden";
});

clickScore1.addEventListener("click",()=>{
    document.getElementById("selectedScore").innerText = document.getElementById("btnScore1").value;
});

clickScore2.addEventListener("click",()=>{
    document.getElementById("selectedScore").innerText = document.getElementById("btnScore2").value;
});

clickScore3.addEventListener("click",()=>{
    document.getElementById("selectedScore").innerText = document.getElementById("btnScore3").value;
});

clickScore4.addEventListener("click",()=>{
    document.getElementById("selectedScore").innerText = document.getElementById("btnScore4").value;
});

clickScore5.addEventListener("click",()=>{
    document.getElementById("selectedScore").innerText = document.getElementById("btnScore5").value;
});
