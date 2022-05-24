import axios from "axios";
import Cookies from 'js-cookie';
export const Login = (email,password,Callback) =>{
    
    let body = {
        "email": email,
    "password": password
        };
    axios
    .post("https://reqres.in/api/login", body)
    .then(function(response) {
        Cookies.set('LoggedIn','true',{ expires: 1 });
        Callback(true,"Successfully logged in.");
    })
    .catch(function(error) {
        console.log(error);
        Callback(false,error.response.data.error);
    });
    
}
const creds = {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
};

export const authenticated = ()=>{
    if(Cookies.get('LoggedIn') === 'true')
        return true;
    else
        return false;
}
export const logOut = ()=>{
    Cookies.remove('LoggedIn');
    window.location.href = "/sign-in"
}