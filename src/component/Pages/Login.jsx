// import React, { useState } from 'react'
// import "../../styles/Login.scss";
// import close from "./close.svg";
// import facebook from "./facebook.svg";
// import google from "./google.svg";
// // import { useState } from "react";

// const Login = () => {

 
//     return (
    
//         <div className='back_login'>
//             <div className="wrapper">
//                 <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet"></link>

//                 <span class="icon-close">
//                     <img src={close} alt="close_icon"
//                         height={20} width={20} />
//                 </span>

//                 <div class="form-box login">
//                     <h2>Log into your account</h2>
//                     <div class="login-register">
//                         <p>Or
//                             <a class="register-link">Create</a>account</p>

//                     </div>
//                     <form action="#">
//                         <div class="input-box">

//                             <input type="email" required placeholder='Email Address' />

//                         </div>
//                         <div class="input-box">

//                             <input type="password" required placeholder='Password' />

//                         </div>
//                         <div class="remember_me">
//                             <a href="/">forgot password?</a>
//                         </div>
//                         <button type="submit" className='btn_'>Login</button>

//                         <p className='or'>or</p>

//                         <div>
//                             <span className='icons'>
//                                 <button className='btn_icon' > <img src={google} alt="google_icon" className='img'
//                                     height={20} width={20} />Log in with Google</button>
//                             </span>

//                             <span className='icons'>
//                                 <button className='btn_icon'><img src={facebook} className='img' alt="facebook_icon"
//                                     height={20} width={20} />Log in with Facebook</button>
//                             </span>
//                         </div>
//                     </form>
//                 </div>
//                 <div class="form-box register">
//             <h2>Create an account</h2>
//             <div class="register-login">
//                     <p>Or
//                         <a class="login-link">Login</a>to your account</p>

//                 </div>
//             <form action="#">
//                 <div class="input-box_register">
                    
//                     <input type="email" required placeholder='First Name'/> 
//                     <input type="email" required placeholder='Last Name'/> 

//                 </div>
//                 <div class="input-box">
                    
//                     <input type="email" required placeholder='Email Address'/> 

//                 </div>
//                 <div class="input-box">
                    
//                     <input type="password" required placeholder='Password'/>
                    
//                 </div>
//                 <div class="input-box">
                    
//                     <input type="password" required placeholder='Confirm Password'/>
                    
//                 </div>
//                 <div class="t_c">
//                     <label for="box">
//                         <input type="checkbox" required />agree to the
//                     </label>
//                     <a href="#">terms & conditions</a><br/>
//                 <button type="submit" className='btn_'>Sign up</button>
//                 </div>
//                 <p className='or'>or</p>

// <div>
// <span className='icons'>
// <button className='btn_icon' > <img src={google} alt="google_icon" className='img'
// height={20} width={20}/>Log in with Google</button>
// </span>

// <span className='icons'>
// <button className='btn_icon'><img src={facebook}  className='img'  alt="facebook_icon"
// height={20} width={20} />Log in with Facebook</button>
// </span>
// </div>
//             </form>
//             </div>

//             </div>
//         </div>
//     )
// }

// export default Login