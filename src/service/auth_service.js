
import axios from 'axios'

const API_URL ="http://localhost:2000/officeLunch/employees";

 class auth_service{

    logindata(username,password){

    return axios.post(API_URL +"/login",{
        username,
        password
    })
    .then(response=>{
        console.log(response.data);
        return (response.data)
    }).catch(error=>{
        console.log(error);
    });
    }

    signupdata(username,password){
        return axios.post(API_URL + "/register",{
            username,
            password
        } )
        .then(response=>{
            return JSON.stringify(response.data);
        }).catch(error=>{
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

    getdata(){
        return axios.get(API_URL )
        .then(response=>{
            return JSON.stringify(response.data);
        }).catch(error=>{
            console.log(error);
        })
        
    }


}


 // eslint-disable-next-line import/no-anonymous-default-export
 export default new auth_service();
