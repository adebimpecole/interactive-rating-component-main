(function(){
    "use strict";
    
    //selectors
    const submit = document.getElementById("submit");
    const pg1 = document.querySelector(".page1");
    const pg2 = document.querySelector(".page2");
    const rates = document.querySelectorAll(".rate");
    let section = document.getElementById("rate");

    let save;
    for(let i = 0; i<rates.length; i++){
        rates[i].addEventListener("click", (event) => {
            // for(let k=0; k<rates.length; k++){
            //     if(rates[k].classList.contains("after")){
            //         rates[k].classList.remove("after");
            //         rates[k].classList.add("rate");
            //     }
            // }
            // rates[i].classList.remove("rate");
            // rates[i].classList.add("after");
            save = event.target.innerHTML;
            
        })
    }
    submit.addEventListener("click", (event) => {
        event.preventDefault();
        pg2.style.display = "flex";
        section.innerHTML= save;
        if(save===undefined){
            section.innerHTML = "0";
        }

    })


})();