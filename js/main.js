

function getvalue(){
    let username = "ahmad";
    let password =123456;
    let form1 = document.form.user.value;
    let form2 = document.form.pass.value;
    if (form1 === username && form2 === password){
        // alert("Wrong Username or Password");
        console.log("wrong Username or Password ");
    }
}

getvalue();