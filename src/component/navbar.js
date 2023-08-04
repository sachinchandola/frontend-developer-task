import React from 'react'
import { Link } from 'react-router-dom';
 

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <div >
  <img className='title1' src="png.png" alt="" height={80} width={80}/>
    <Link className="navbar-brand title" href="#">dekho</Link>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="d-flex " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/candidates">For Candidates</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/company">For Company</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModals">Sign Up</button>
      <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModall">Login</button>
      </form>
    </div>
  </div>
</nav>




<div className="modal fade" id="exampleModals" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">SignUp Here</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form action="action_page.php">
  <div className="container">
    

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>
<br /> <br />
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
<br /> <br />
    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
<br /> <br />
    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember me
    </label>

  

    <div className="clearfix">
      <button type="button" className="cancelbtn">Cancel</button>
      <button type="submit" className="signupbtn">Sign Up</button>
    </div>
  </div>
</form>
      </div>
    </div>
  </div>
</div>



<div className="modal fade" id="exampleModall" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Login Here</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form action="action_page.php" method="post">
  

  <div className="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>
    <br /> <br />
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
   <br /> <br />
    <button type="submit">Login</button>
    <br /> <br />
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div className="container" >
    
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
      </div>
      
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar;
