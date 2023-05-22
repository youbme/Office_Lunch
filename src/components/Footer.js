import React from 'react'
import { Link } from 'react-router-dom'
import fb from '../images/fb.png'
import {BsLinkedin, BsFacebook,BsGoogle, BsTwitter } from 'react-icons/bs';

export default function Footer() {
  return (
    <>
    <footer id="footer" class="text-sm-left text-center">
            <div class="container py-4 py-sm-5">
                <div class="d-flex justify-content-between footer-bottom-cpy">
                    <div class="cpy-right">
                        <p>© 2023 Access System</p>
                    </div>
                    <div class="social-icons pb-md-0 pb-4">
                        <ul class="social-iconsv2 agileinfo">
                            <li>
                                <Link href="#">
                                  <BsFacebook className='react-icons'/>
                                    
                                    
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    
                                    <BsTwitter className='react-icons'/>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    
                                    <BsGoogle className='react-icons'/>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    
                                    <BsLinkedin class='react-icons' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
