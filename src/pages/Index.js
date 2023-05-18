import React from 'react'



export default function Index() {
    // const handleclick = () =>
    // {
    //     window.onload = function () {
    //         document.getElementById("password1").onchange = validatePassword;
    //         document.getElementById("password2").onchange = validatePassword;
    //     }
    // } 
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
            <img class="position-absolute img-fluid agile-img" src="images/i1.png" alt="" />
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
                            <form action="#" method="get" class="register-wthree">
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
                                            <input class="form-control" type="text" placeholder="Johnson" name="email" required=""/>
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
                                            <input class="form-control" type="email" placeholder="example@email.com" name="email" required=""/>
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
                                            <input type="password" class="form-control" placeholder="*******" name="Password" id="password1" required=""/>
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
                                            <input type="password" class="form-control" placeholder="*******" name="Password" id="password2" required=""/>
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
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="#" method="post">
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Username</label>
                            <input type="text" class="form-control" placeholder=" " name="Name" id="recipient-name" required=""/>
                        </div>
                        <div class="form-group">
                            <label for="password" class="col-form-label">Password</label>
                            <input type="password" class="form-control" placeholder=" " name="Password" id="password" required=""/>
                        </div>
                        <div class="right-w3l">
                            <input type="submit" class="form-control" value="Login"/>
                        </div>
                        <div class="row sub-w3l my-3">
                            <div class="col sub-agile">
                                <input type="checkbox" id="brand1" value=""/>
                                <label for="brand1" class="text-secondary">
                                    <span></span>Remember me?</label>
                            </div>
                            <div class="col forgot-w3l text-right">
                                <a href="#" class="text-secondary">Forgot Password?</a>
                            </div>
                        </div>
                        <p class="text-center dont-do">Don't have an account?
                            <a href="#register" class="scroll text-dark font-weight-bold">
                                Register Now</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- //login -->
    <!-- js --> */}
    <script src="js/jquery-2.2.3.min.js"></script>
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
    <script src="js/responsiveslides.min.js"></script>
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
    <script src="js/move-top.js"></script>
    <script src="js/easing.js"></script>
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
     <script src="js/bootstrap.js"></script>
    </>
  )
}

