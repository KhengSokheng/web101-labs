function checkGrade(){

    const score = Number(document.getElementById("score").value);

    let grade = "";

    if(score < 0 || score > 100){

        grade = "Invalid Score";

    }else if(score >= 90){

        grade = "Grade A";

    }else if(score >= 80){

        grade = "Grade B";

    }else if(score >= 50){

        grade = "Grade C";

    }else{

        grade = "Grade F";

    }

    document.getElementById("result").innerHTML =
    `Score: ${score} - ${grade}`;

}