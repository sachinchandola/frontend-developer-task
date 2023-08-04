import React from 'react'
import { useState } from 'react';

export default function Company() {
     const [cname,scname] =useState('');
     const [logo,slogo] =useState('');
     const [exp,sexp] =useState('');
     const [avai,savai] =useState('');
     const [salary,ssalary] =useState('');
     const [role,srole] =useState('');
     const [location,slocation] =useState('');
 let a=0;
   function fun(e){
   a=a+1;
   localStorage.setItem("no",a);
      localStorage.setItem(`cname${a}`, cname);
       localStorage.setItem(`logo${a}`, logo);
       localStorage.setItem(`exp${a}`, exp);
       localStorage.setItem(`avai${a}`, avai);
       localStorage.setItem(`salary${a}`, salary);
       localStorage.setItem(`role${a}`, role);
       localStorage.setItem(`location${a}`, location);
    //    export default cname, {logo, exp, avai, salary, role, location};
      e.preventDefault();
   }

  return (
    <div className='whole'>
      <h1 className='head'>Add JOBS</h1>
      <div className="formm">

      <br /><br /><br />
        <form >
            <label htmlFor="">Company name</label>
            <input type="text" name="company" onChange={(e)=>{scname(e.target.value)}}/><br /><br /><br />
            <label htmlFor="">Company logo</label>
            <input type="file" name="logo" onChange={(e)=>{slogo(e.target.value)}}/><br /><br /><br />
            <label htmlFor="">Work experience</label>
            <input type="text" name="exp" placeholder='in month / in year' onChange={(e)=>{sexp(e.target.value)}}/><br /><br /><br />
            <label htmlFor="">Availability</label>
            <input type="text" name="avai" placeholder='ASAP' onChange={(e)=>{savai(e.target.value)}}/><br /><br /><br />
            <label htmlFor="">salary</label>
            <input type="text" name="salary" onChange={(e)=>{ssalary(e.target.value)}} /><br /><br /><br />
            <label htmlFor="">Role</label>
            <input type="text" name="role" onChange={(e)=>{srole(e.target.value)}}/><br /><br /><br />
            <label htmlFor="">location</label>
            <input type="text" name="location" onChange={(e)=>{slocation(e.target.value)}}/><br /><br /><br />

            <button type="submit" className="signupbtn" onClick={fun}>ADD</button>
        </form>
      </div>
      
    </div>
   
  )
}
