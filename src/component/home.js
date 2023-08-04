import React from "react";

export default function Home() {
  return (
    <div>
      <div class="about">
        <div>
          <h1 className="about1">JOBSdekho</h1>
          <h4 className="about2">Where startups and job seekers connect.</h4>
          <button type="button" class="btn btn-success about3" data-bs-toggle="modal" data-bs-target="#exampleModali">
            Form For Candidates
          </button>
        <p> (Help You Get Hired Quickly) </p>
        </div>
        <img
          className="img1"
          src="imgjpg.jpg"
          alt=""
          height={400}
          width={700}
        />
      </div>

      <div className="company">
        <h1 className="company1">LEADING COMPANIES BUILD TEAMS ON JOBSdekho</h1>
        <img src="logo-png.png" alt="" height={400} width={600} />
      </div>

      <div className="foot">
        <div className="foot1">
          <div>
            <h1>JOBSdekho</h1>
          </div>
          <div>
            <h6>For Candidates</h6>
            <br />
            Overview <br />
            Startup Jobs <br />
            Web3 Jobs <br />
            Featured <br />
            Salary Calculator <br />
            Startup Hiring Data <br />
            Tech Startups <br />
            Remote
          </div>
          <div>
            <h6>For Recruiters</h6> <br />
            Overview <br />
            Recruit Pro <br />
            Curated <br />
            RecruiterCloud <br />
            Hire Developers <br />
            Pricing
          </div>
          <div>
            <h6>Company</h6>
            <br />
            About <br />
            AngelList Venture <br />
            Help <br />
            Blog <br />
            Terms & Risks <br />
            Privacy & Cookies
          </div>
        </div>
        <div className="foot2">
          <div>
            Copyright © 2023 Wellfound (formerly AngelList Talent). All rights
            reserved.
          </div>
          <div>
            Browse by: Jobs, Remote Jobs, Locations, Startups, Industries, Tech
            Hubs
          </div>
        </div>
      </div>


      
<div className="modal fade" id="exampleModali" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Enter Your Info</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form action="action_page.php">
  <div className="con">
  <label for="myfile"><b> Resume:</b></label>
<input type="file" id="myfile" name="myfile"/>
 <br />    
<br />
<label for="Name"><b>Full Name</b></label>
    <input type="text" placeholder="Enter fullname" name="email" required/>
<br /> <br />
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>
<br /> <br />
    <label for="phone"><b>Phone number</b></label>
    <input type="number" placeholder="Enter phone number" name="phone" required/>
<br /> <br />
    <label for="git"><b>Github/linked link</b></label>
    <input type="text"  name="git" required/>
<br /> <br />
<label for="col"><b>college name</b></label>
    <input type="text"  name="col" required/>
<br /> <br />
<label for="col"><b>Current job role</b></label>
    <input type="text" placeholder="fresher/web developer..." name="col" required/>
<br /> <br />
<label for="col"><b>skillset</b></label>
    <input type="text" placeholder="xyz, abc, ..." name="col" required/>
<br /> <br />
<label for="gender"><b>Gender</b></label>
  <input type="radio" id="age1" name="age" value="male"/>
  <label for="age1">male</label><br/>
  <input type="radio" id="age2" name="age" value="female"/>
  <label for="age2">female</label><br/>  
  <input type="radio" id="age3" name="age" value="other"/>
  <label for="age3">other</label><br />
<br /> <br />
    <div className="clearfix">
      <button type="submit" className="signupbtn">Saved</button>
    </div>
  </div>
</form>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
