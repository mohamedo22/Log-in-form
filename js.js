const user = {
    "user_name": "mohamed",
    "password": "12345678"
};

function checkValid() {
    let user_txt = document.getElementById("username");
    let pass_txt = document.getElementById("password");

    if (user_txt.value === user.user_name) {
        user_txt.style.borderBottomColor = "green";
    } else {
        user_txt.style.borderBottomColor = "";
    }

    if (pass_txt.value === user.password) {
        pass_txt.style.borderBottomColor = "green";
    } else {
        pass_txt.style.borderBottomColor = "";
    }
}
function login()
{
    let user_txt = document.getElementById("username");
    let pass_txt = document.getElementById("password");
    if (user_txt.value === user.user_name) 
    {
         if (pass_txt.value === user.password) 
         {
            window.alert(`Hello Mr ${user.user_name}`);
         } 
         else
         {window.alert("The password incorrect"); }
    }
    else {
        window.alert("This user name not found")
    }

   
}
setInterval(checkValid, 1);
