import React from 'react'
import apple from '../images/apple.jpg'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <>
    {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to={""}><img  src="logo.jpg" alt='txt'/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="main.html">Main</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={""}>User</Link>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
	<section class="w3l-login">
		<div class="overlay">
			<div class="wrapper">
				<div class="logo">
					<Link class="brand-logo">Access System Portal</Link>
				</div>
			<div class="form-section">
				<h3>Today </h3>
				<p><span id="date-time"></span>.</p>
				<h2>Today's Food Item</h2>
				<div>
					<img  src={apple} alt='food'/>
					</div>
					<div>
					<h4>Preference</h4>
					<hr/>
					<div class="form-check">
					  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
					  <label class="form-check-label" for="flexCheckDefault">
					    Veg
					  </label>
					</div>
					<div class="form-check">
					  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
					  <label class="form-check-label" for="flexCheckChecked">
					    Non-Veg
					  </label>
					</div>

				</div>
				<br/>
				<button class="btn btn-success">Submit</button>
			</div>
		</div>
		</div>
		<div id='stars'></div>
		<div id='stars2'></div>
		<div id='stars3'></div>
		{/* <!-- //copyright --> */}
	</section>


<script>
var dt = new Date();
document.getElementById('date-time').innerHTML=dt;
</script>
    </>
  )
}
