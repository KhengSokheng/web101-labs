function generateTable(){

    const number = Number(document.getElementById("number").value);

    const tableBody = document.getElementById("tableBody");

    tableBody.innerHTML = "";

    if(number === "" || isNaN(number)){

        alert("Please enter a number.");

        return;
    }

    for(let i = 1; i <= 10; i++){

        tableBody.innerHTML += `
            <tr>
                <td>${number} x ${i}</td>
                <td>${number * i}</td>
            </tr>
        `;
    }

}