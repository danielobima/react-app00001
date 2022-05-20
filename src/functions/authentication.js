import axios from "axios";
const login = (email,password,Callback) =>{
    
    let body = {
        "email": email,
    "password": password
        };
    axios
    .post("https://reqres.in/api/login", body)
    .then(function(response) {
        //console.log(response);
        Callback(true,"Successfully logged in.");
    })
    .catch(function(error) {
        console.log(error);
        Callback(false,error.response.data.error);
    });
    
}

// const checkAuthentication = ()=>{
    
// }
export const Login = login;