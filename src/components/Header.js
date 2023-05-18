import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
   
     <nav class="navbar navbar-expand-lg navbar-light bg-gradient-secondary">
                    <h1>
                        <Link class="navbar-brand text-white" to={"/index"}>
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
                                <Link class="nav-link" to={"/index"}>Home
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li class="nav-item  mr-lg-3 mt-lg-0 mt-3">
                                <Link class="nav-link" to={"/service"}>services</Link>
                            </li>
                            <li class="nav-item mb-lg-0 mb-3">
                                <a class="nav-link scroll" href="#register">register</a>
                            </li>
                            <li>
                                <button type="button" class="btn  ml-lg-2 w3ls-btn" data-toggle="modal" aria-pressed="false" data-target="#exampleModal">
                                    Login
                                </button>
                            </li>
                        </ul>
                    </div>

                </nav>
    </>
  )
}
