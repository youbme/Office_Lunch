import React from 'react'
import {  Link } from 'react-router-dom'

export default function Header() {
  
  return (
    <>
     {/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js" integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script>
     */}
     <nav class="navbar navbar-expand-lg navbar-light bg-gradient-secondary">
                    <h1>
                        <Link class="navbar-brand text-white" to={"/"}>
                            Cibus
                        </Link>
                    </h1>
                    <button class="navbar-toggler ml-md-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-lg-auto text-center">
                            <li class="nav-item active  mr-lg-3">
                                <Link class="nav-link" to={"/"}>Home
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li class="nav-item  mr-lg-3 mt-lg-0 mt-3">
                                <Link class="nav-link" to={"/service"}>services</Link>
                            </li>
                            {/* <li class="nav-item mb-lg-0 mb-3">
                                <a class="nav-link scroll" href="#register">register</a>
                            </li> */}
                            <li>
                                {/* <button type="button" class="btn  ml-lg-2 w3ls-btn" data-toggle="modal" aria-pressed="false" data-target="#exampleModal">
                                    Login
                                </button> */}
                                <button type="button" className="btn  ml-lg-2 w3ls-btn" data-bs-toggle="modal"  aria-pressed="false" data-bs-target="#exampleModal">
                                    Login
                                </button> 
                            </li>
                        </ul>
                    </div>

                </nav>
              
    </>
  )
}
