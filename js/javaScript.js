let clickSubmit=document.getElementById("btnSubmit");

clickSubmit.addEventListener("click",()=>{
    document.getElementById("containerThankYou").style.visibility="visible";
    document.getElementById("containerRating").style.visibility="hidden";
});