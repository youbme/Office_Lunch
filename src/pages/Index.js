import React from 'react'
import cycle from '../images/i1.png';
import { useState } from 'react';
import auth_service from '../service/auth_service'
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Index() {

   const navigate = useNavigate();

    const [userpass, setuserpass] = useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:""
    })

    const {username,email,password,confirmpassword}= userpass;

   
    const onInputChange= (e)=>{
    setuserpass({...userpass,[e.target.name]:e.target.value})
    //  console.log(userpass)
    }


    const onSubmit = async (e)=>{
        e.preventDefault();
        
       // const userpass = auth_service.logindata();
    //    auth_service.signupdata(userpass.username,userpass.email,userpass.password);
        await axios.post("http://localhost:2000/officeLunch/employees/register",{
            username,
            email,
            password})
            .then(response=>{
                alert("Succesfully Registered")
                console.log(response.data)
            })
            .catch(error=>{
                alert("Failed to Register")
                console.log(error)
            })
		
    }


    const [userpasslogin, setuserpasslogin] = useState({
        usernamelogin:"",
        passwordlogin:""
    });

    const {usernamelogin,passwordlogin}= userpasslogin;
    const onInputChangelogin= (e)=>{
    setuserpasslogin({...userpasslogin,[e.target.name]:e.target.value})
    console.log(userpasslogin);

    }

    const onSubmitlogin = async (e)=>{
        e.preventDefault();
        
        const login = auth_service.logindata(userpasslogin.usernamelogin,userpasslogin.passwordlogin);
        console.log(userpasslogin.usernamelogin);

        setuserpasslogin({
            usernamelogin:"",
            passwordlogin:""
        });
        // setLoggedIn(true);
        navigate("/service");
      
      
    
	}

  return (
    <>
     <div class="home">
    
        {/* <!-- banner --> */}
        <div class="banner" id="banner">
            {/* <!-- header --> */}
        
        
            {/* <!-- //header --> */}
            <div class="container">
                {/* <!-- banner-text --> */}
                <div class="banner-text text-center">
                    <div class="slider-info">
                        
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- register --> */}
        <div class="w3-register py-4  position-relative" id="register">
            <img class="position-absolute img-fluid agile-img" src={cycle} alt="" />
            <div class="container py-lg-5">
                <div class="row register-form py-md-5">
                    <div class="offset-lg-2"></div>
                    {/* <!-- register details --> */}
                    <div class="offset-lg-4">
                    </div>
                    <div class="col-lg-6 wthree-form-left py-md-5 pt-sm-5 pb-sm-3">
                        <div class="title-wthree">
                            <h3 class="agile-title">
                                register
                            </h3>
                            <span></span>
                        </div>
                        {/* <!-- register form grid --> */}
                        <div class="register-top1">
                            <form  onSubmit={(e)=>onSubmit(e)} method="get" class="register-wthree">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-1 d-md-flex align-items-end justify-content-end px-md-0">
                                            <label class="mb-0">
                                                <span class="fas fa-user"></span>
                                            </label>
                                        </div>
                                        <div class="col-md-11">
                                            <label>
                                                UserName
                                            </label>
                                            <input class="form-control" type="text" placeholder="Username" name="username" required=""value={username} onChange={(e)=>onInputChange(e)}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-1 d-md-flex align-items-end justify-content-end px-md-0">
                                            <label class="mb-0">
                                                <span class="fas fa-envelope-open"></span>
                                            </label>
                                        </div>
                                        <div class="col-md-11">
                                            <label>
                                                Email
                                            </label>
                                            <input class="form-control" type="email" placeholder="email" name="email" required="" value={email} onChange={(e)=>onInputChange(e)}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-1 d-md-flex align-items-end justify-content-end px-md-0">
                                            <label class="mb-0">
                                                <span class="fas fa-lock"></span>
                                            </label>
                                        </div>
                                        <div class="col-md-11">
                                            <label>
                                                password
                                            </label>
                                            <input type="password" class="form-control" placeholder="Password" name="password"  required="" value={password} onChange={(e)=>onInputChange(e)}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-1 d-md-flex align-items-end justify-content-end px-md-0">
                                            <label class="mb-0">
                                                <span class="fas fa-lock"></span>
                                            </label>
                                        </div>
                                        <div class="col-md-11">
                                            <label>
                                                confirm password
                                            </label>
                                            {/* <input type="password" class="form-control" placeholder="Confirm Password" name="comfirmpassword"  required="" value={confirmpassword} onChange={(e)=>onInputChange(e)}/> */}
                                            <input type="password" className='form-control' name="confirmpassword" placeholder="Confirm Password" required="" value={confirmpassword} onChange={(e)=>onInputChange(e)} />

                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-lg-5 mt-3">
                                    <div class="offset-1"></div>
                                    <div class="col-md-11">
                                        <button type="submit" class="btn btn-agile btn-block w-100">register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* <!--  //register form grid ends here --> */}
                    </div>

                </div>
                {/* <!-- //register details container --> */}
            </div>
        </div>
        {/* <!-- footer --> */}
        
        {/* <!-- //footer --> */}
    </div>
    {/* <!-- login  --> */}
    {/* <button type="button" className="btn  ml-lg-2 w3ls-btn" data-bs-toggle="modal"  aria-pressed="false" data-bs-target="#exampleModal">
                                    Login
                                </button> */}
    <div class="modal fade" id="exampleModal" tabindex="-1"  data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form onSubmit={(e)=>onSubmitlogin(e)}  method="post">
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Username</label>
                            <input type="text" class="form-control" placeholder="Username" name="usernamelogin" id="recipient-name" required value={usernamelogin} onChange={(e)=>onInputChangelogin(e)} />
                        </div>
                        <div class="form-group">
                            <label for="password" class="col-form-label">Password</label>
                            <input type="password" class="form-control" placeholder=" " name="passwordlogin" id="password" required  value={passwordlogin} onChange={(e)=>onInputChangelogin(e)}/>
                        </div>
                        <div class="right-w3l">
                        <div data-bs-dismiss="modal">
                            <input  type="submit"  class="form-control" value="Login"/>
                        </div>
                        </div>
                       
                        <p class="text-center dont-do">Don't have an account?
                     
                            <a href="#register" class="scroll text-dark font-weight-bold">
                                <div data-bs-dismiss="modal">Register Now</div>
                                </a>
                                
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- //login -->
    <!-- js --> */}

    
    {/* <script src="js/jquery-2.2.3.min.js"></script> */}
    {/* <!-- //js -->
    <!-- script for password match --> */}
    {/* <script>
   
        window.onload = function () {
            document.getElementById("password1").onchange = validatePassword;
            document.getElementById("password2").onchange = validatePassword;
        }

        function validatePassword() {
            var pass2 = document.getElementById("password2").value;
            var pass1 = document.getElementById("password1").value;
            if (pass1 != pass2)
                document.getElementById("password2").setCustomValidity("Passwords Don't Match");
            else
                document.getElementById("password2").setCustomValidity('');
            //empty string means no validation error
        }
        </script> */}
   
    {/* <!-- script for password match -->
    <!-- testimonials  Responsiveslides --> */}
    {/* <script src="js/responsiveslides.min.js"></script> */}
    {/* <script> */}
         {/* You can also use"$(window).load(function() {" */}
        {/* $(function () {
            // Slideshow 4
            $("#slider3").responsiveSlides({
                auto: true,
                pager: true,
                nav: false,
                speed: 500,
                namespace: "callbacks",
                before: function () {
                    $('.events').append("<li>before event fired.</li>");
                },
                after: function () {
                    $('.events').append("<li>after event fired.</li>");
                }
            }); */}

        {/* });
    </script> */}
    {/* <!-- //testimonials  Responsiveslides -->
    <!-- start-smooth-scrolling --> */}
    {/* <script src="js/move-top.js"></script>
    <script src="js/easing.js"></script> */}
    {/* <script>
        jQuery(document).ready(function ($) {
            $(".scroll").click(function (event) {
                event.preventDefault();

                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000);
            });
        });
    </script> */}
    {/* <!-- //end-smooth-scrolling -->
    <!-- smooth-scrolling-of-move-up --> */}
    {/* <script> */}
        {/* $(document).ready(function () { */}
            
            {/* var defaults = {
                containerID: 'toTop', // fading element id
                containerHoverID: 'toTopHover', // fading element hover id
                scrollSpeed: 1200,
                easingType: 'linear' 
            }; */}
            

            {/* // $().UItoTop({
                easingType: 'easeOutQuart'
            });

         });
     </script> */}
    {/* // <script src="js/SmoothScroll.min.js"></script> */}

    {/* <!-- //smooth-scrolling-of-move-up -->
    <!-- Bootstrap core JavaScript
================================================== -->
    <!-- Placed at the end of the document so the pages load faster --> */}
     {/* <script src="js/bootstrap.js"></script> */}
    </>
  )
}

