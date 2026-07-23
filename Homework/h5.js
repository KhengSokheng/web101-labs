let scores = [45, 82, 91, 60, 77, 33];

displayScores();

function displayScores(){

    const list = document.getElementById("scoreList");

    list.innerHTML = "";

    scores.forEach(score=>{

        let color="orange";

        if(score>=90){

            color="green";

        }else if(score<50){

            color="red";
        }

        list.innerHTML += `
            <div class="score ${color}">
                ${score}
            </div>
        `;

    });

    const highest = Math.max(...scores);

    const lowest = Math.min(...scores);

    const average =
    (scores.reduce((a,b)=>a+b,0)/scores.length).toFixed(1);

    document.getElementById("summary").innerHTML=
    `Highest: ${highest} | Lowest: ${lowest} | Average: ${average}`;
}

function addScore(){

    const input=document.getElementById("scoreInput");

    const score=Number(input.value);

    if(score<0 || score>100 || input.value===""){

        alert("Enter a score between 0 and 100");

        return;
    }

    scores.push(score);

    displayScores();

    input.value="";
}