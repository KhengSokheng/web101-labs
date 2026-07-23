const btn = document.getElementById("toggleBtn");
const text = document.getElementById("description");

btn.addEventListener("click", () => {

    if(text.classList.contains("hide")){

        text.classList.remove("hide");

        btn.innerText = "Show Less";

    }else{

        text.classList.add("hide");

        btn.innerText = "Show More";

    }

});