import React from 'react'

export default function Candidates( props) {
  let i;
  for(i=1;i<=localStorage.getItem("no");i++)
  {
let cn = localStorage.getItem(`cname${i}`);
let ex = localStorage.getItem(`exp${i}`);
let avai= localStorage.getItem(`avai${i}`);
let sa= localStorage.getItem(`salary${i}`);
let role= localStorage.getItem(`role${i}`);
let loc= localStorage.getItem(`location${i}`); 

  return (
    
    <div className="class" >    
       <h1 className='head'>Available Job </h1>
       
       <div className='box'>
          <div className="cname">
           <h1>Infosys</h1>
           <button type="button" class="btn btn-success kk" >open</button>
         </div>
         <hr />
        <div className="exp">
             
           <div><h6>experience</h6>
           0-1 year</div>
           <div><h6>Availability</h6>
           1 week </div>
           <div><h6>salary</h6>
           30k/month</div>
         </div>
         <hr />
         <div className="sl">
         <div className="skill">
          <h6>role</h6>
          web developer
         </div>
         
         <div className="loca">
         <h6>Location</h6>
         delhi
         </div>
         </div>
       </div>
        <hr />

       <div className='box'>
          <div className="cname">
           <h1>TCS</h1>
           <button type="button" class="btn btn-success kk" >open</button>
         </div>
         <hr />
        <div className="exp">
             
           <div><h6>experience</h6>
           2 year</div>
           <div><h6>Availability</h6>
           1 week</div>
           <div><h6>salary</h6>
           40k/month</div>
         </div>
         <hr />
         <div className="sl">
         <div className="skill">
          <h6>role</h6>
          Backend developer
         </div>
         
         <div className="loca">
         <h6>Location</h6>
         noida
         </div>
         </div>
       </div>
       
       <hr />
      
       
       <div className='box'>
          <div className="cname">
           <h1>{cn}</h1>
           <button type="button" class="btn btn-success kk" >open</button>
         </div>
         <hr />
        <div className="exp">
             
           <div><h6>experience</h6>
           {ex}</div>
           <div><h6>Availability</h6>
           {avai}</div>
           <div><h6>salary</h6>
           {sa}</div>
         </div>
         <hr />
         <div className="sl">
         <div className="skill">
          <h6>role</h6>
          {role}
         </div>
         
         <div className="loca">
         <h6>Location</h6>
         {loc}
         </div>
         </div>
       </div>
       <hr />
</div>
   )
  }
}
