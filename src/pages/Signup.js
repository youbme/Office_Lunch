import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import auth_service from '../service/auth_service';
import axios from 'axios';

export default function Signup() {

	
    const [userpass, setuserpass] = useState({
        username:"",
        password:"",
        confirmpassword:""
    })

    const {username,password,confirmpassword}= userpass;

   
    const onInputChange= (e)=>{
    setuserpass({...userpass,[e.target.name]:e.target.value})
    //  console.log(userpass)
    }


    const onSubmit = async (e)=>{
        e.preventDefault();
       // const userpass = auth_service.logindata();
        const signup = auth_service.signupdata(userpass.username,userpass.password);
		
        // console.log(signup)
		// console.log(userpass)
		// const response = await axios.post("http://localhost:2000/officeLunch/employees/register",userpass);
		// console.log(response.data);
		window.location.href='/login';
    }
  return (
    <>
    <section class="w3l-login">
		<div class="overlay">
			<div class="wrapper">
				<div class="logo">
					<a class="brand-logo" href="index.html">Access System Portal</a>
				</div>
				<div class="form-section">
					<h3>SignUp</h3>
					<form onSubmit={(e)=>onSubmit(e)} method="post" class="signin-form">
						<div class="form-input">
							<input type="text" name="username" placeholder="Username" required="" autofocus value={username} onChange={(e)=>onInputChange(e)}/>
						</div>
						<div class="form-input">
							<input type="password" name="password" placeholder="Password" required="" value={password} onChange={(e)=>onInputChange(e)} />
						</div>
						<div class="form-input">
							<input type="password" name="confirmpassword" placeholder="Confirm Password" required="" value={confirmpassword} onChange={(e)=>onInputChange(e)} />
						</div>
						{/* <label class="check-remaind">
							<input type="checkbox"/>
							<span class="checkmark"></span>
							<p class="remember">Remember me</p>
						</label> */}
						<button type="submit" class="btn btn-primary theme-button mt-4">Log in</button>
					</form>
					<p class="signup">have account?<NavLink to={"/"} class="signuplink">LogIn</NavLink></p>
				</div>
			</div>
		</div>
		<div id='stars'></div>
		<div id='stars2'></div>
		<div id='stars3'></div>
		{/* <!-- //copyright --> */}
	</section>
    </>
  )
}
