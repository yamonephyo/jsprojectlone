const form = document.querySelector('.form'),
    username = document.getElementById('username'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    cfmpassword = document.getElementById('cfmpassword');


//Show Success
function shwosucces(input){
    const formcontrol = input.parentElement;
    formcontrol.className= "form-control success";
}


//Show Error
function showerror(input,message){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control error";


    const small = formcontrol.querySelector('small');
    small.innerText = message;

}



// Check Required Fields
function checkrequired(inputarr){

    inputarr.forEach(function(input){
        // console.log(input);
        // console.log(input.value);


        if(input.value === ""){
            showerror(input,"Something is required");
        }else{
            shwosucces(input);
        }
        
    });

}




// Event Listener
form.addEventListener('submit',function(e){
    // console.log(username.value);

    checkrequired([username,email,password,cfmpassword]);

    e.preventDefault();
});


