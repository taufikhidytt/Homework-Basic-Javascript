function inputForm(){
    document.getElementById('validateName').innerHTML = "";
    document.getElementById('nama').classList.remove('is-invalid');

    document.getElementById('validateAge').innerHTML = "";
    document.getElementById('umur').classList.remove('is-invalid');

    document.getElementById('validateMoney').innerHTML = "";
    document.getElementById('uang').classList.remove('is-invalid');

    let inputName = document.getElementById('nama').value;
    let inputAge = document.getElementById('umur').value;
    let inputMoney = document.getElementById('uang').value;

    inputValidate(inputName, inputAge, inputMoney);
}

function inputValidate(inputName, inputAge, inputMoney){
    let status;
    if(inputName === ""){
        document.getElementById('validateName').innerHTML = "Name required";
        document.getElementById('nama').classList.add('is-invalid');
        status = false;
    } else if(inputName.length < 10){
        document.getElementById('validateName').innerHTML = "Name minimum 10 karakter";
        document.getElementById('nama').classList.add('is-invalid');
        status = false;
    }else{
        status = true;
    }

    if(inputAge === ""){
        document.getElementById('validateAge').innerHTML = "Age required";
        document.getElementById('umur').classList.add('is-invalid');
        status = false;
    } else if(inputAge < 25){
        document.getElementById('validateAge').innerHTML = "Age minimum 25 year";
        document.getElementById('umur').classList.add('is-invalid');
        status = false;
    } else{
        status = true;
    }

    if(inputMoney === ""){
        document.getElementById('validateMoney').innerHTML = "Money required";
        document.getElementById('uang').classList.add('is-invalid');
        status = false;
    } else if(inputMoney < 100000 || inputMoney > 1000000){
        document.getElementById('validateMoney').innerHTML = "Money minimal 100000 and maximal 1000000";
        document.getElementById('uang').classList.add('is-invalid');
        status = false;
    } else{
        status = true;
    }

    if(status === true){
        inputData(inputName, inputAge, inputMoney);
    }
}

let dataName = [];
let dataAge = [];
let dataMoney = [];
function inputData(inputName, inputAge, inputMoney){
    dataName.push(inputName);
    dataAge.push(inputAge);
    dataMoney.push(inputMoney);

    let html = 
    `<tr>
        <td>${inputName}</td>
        <td>${inputAge}</td>
        <td>${inputMoney}</td>
    </tr>`;

    document.getElementById("ulRegist").innerHTML += html;

    let rataRataAge = 0;
    for (let index = 0; index < dataAge.length; index++) {
        rataRataAge += parseInt(dataAge[index]);
    }
    let avgAge = rataRataAge / dataAge.length;
    document.getElementById("rataRataAge").innerHTML = avgAge;

    let rataRataMoney = 0;
    for (let index = 0; index < dataMoney.length; index++) {
        rataRataMoney += parseInt(dataMoney[index]);
    }
    let avgMoney = rataRataMoney / dataMoney.length;
    document.getElementById("rataRataMoney").innerHTML = avgMoney;
    
    let msg = 
    `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Congratulations!</strong> You have successfully entered the data list.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
    `
    document.getElementById("msg").innerHTML = msg;

    document.getElementById('nama').value = "";
    document.getElementById('umur').value = "";
    document.getElementById('uang').value = "";
}