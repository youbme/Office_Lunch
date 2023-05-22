import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import auth_service from '../service/auth_service';

export default function Login() {

    const [userpass, setuserpass] = useState({
        username:"",
        password:""
    });

    const {username,password}= userpass;
    const onInputChange= (e)=>{
    setuserpass({...userpass,[e.target.name]:e.target.value})
    // console.log(userpass)
    }

    const onSubmit = async (e)=>{
        e.preventDefault();
        const login = auth_service.logindata(userpass.username,userpass.password);
        // console.log(login);
		localStorage.setItem('user',login);
    
	}

  return (
    <>
   
   {/* <!-- login form --> */}
	<section class="w3l-login">
		<div class="overlay">
			<div class="wrapper">
				<div class="logo">
					<a class="brand-logo" href="index.html">Access System Portal</a>
				</div>
				<div class="form-section">
					<h3>Login</h3>
					<form onSubmit={(e)=>onSubmit(e)} method="post" class="signin-form">
						<div class="form-input">
							<input type="text" name="username" placeholder="Username" required="" autofocus value={username} onChange={(e)=>onInputChange(e)}/>
						</div>
						<div class="form-input">
							<input type="password" name="password" placeholder="Password" required="" value={password} onChange={(e)=>onInputChange(e)}/>
						</div>
						<label class="check-remaind">
							<input type="checkbox"/>
							<span class="checkmark"></span>
							<p class="remember">Remember me</p>
						</label>
						<button type="submit" class="btn btn-primary theme-button mt-4">Log in</button>
						<div class="new-signup">
							<a href="#reload" class="signuplink">Forgot username or password?</a>
						</div>
					</form>
					<p class="signup">Don’t have account yet? <NavLink to={"/signup"} class="signuplink">Sign Up</NavLink></p>
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
