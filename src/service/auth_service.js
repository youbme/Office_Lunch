
import axios from 'axios'

const API_URL ="http://localhost:2000/officeLunch/employees";

 class auth_service{

    logindata(username,password){
       
    return axios.post(API_URL +"/login",{
        username,
        password
    })
    .then(response=>{
        const cookies = response.headers.get('Set-Cookie');
        console.log("/////"+cookies);
        console.log(response.headers.get('Content-Type'));
        console.log(response);
        localStorage.setItem("user",response.data);
        alert('Logged In Successfully!');
        return JSON.stringify(response.data)
    }).catch(error=>{
        alert('Failed to Login In');
        console.log(error);
    });
    }

    signupdata(username,email,password){
        return axios.post(API_URL + "/register",{
            username,
            email,
            password
        } )
        .then(response=>{
            console.log(response.data)
            alert('Your registration was successfully submitted!');
            return JSON.stringify(response.data);
        }).catch(error=>{
            alert('Failed to Register!');
            console.log(error);
        });
    }

    logout(){
        return axios.post(API_URL + "/logout")
        .then(response=>{
            console.log(response.data);
            return JSON.stringify(response.data);
        }).catch(error=>{
            console.log(error);
        });
    }

    // getdata(username,foodPref){
    //     console.log(username,foodPref)
    //     return axios.post(API_URL +"/enroll",{
    //         username,
    //         foodPref
    //     })
    //     .then(response=>{
    //         console.log(response.data);
    //         // localStorage.setItem("user1",response.data);
    //         return JSON.stringify(response.data);
    //     }).catch(error=>{
    //         console.log(error);
    //     })
        
    // }
    getdata(username,foodPref){
       
        return axios.post(API_URL +"/enroll",{
            username,
            foodPref
        })
        .then(response=>{
            console.log(response.data);
            // localStorage.setItem("user",response.data);
            return JSON.stringify(response.data)
        }).catch(error=>{
            console.log(error);
        });
        }


}


 // eslint-disable-next-line import/no-anonymous-default-export
 export default new auth_service();
