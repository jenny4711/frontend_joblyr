import React,{useState} from 'react'
import '../CSS/JobDetail.css'
import JoblyApi from "../api";

const JobDetail = ({id,title,salary,equity,dt,setErrMsg}) => {
  const [err,setErr]=useState(true)
  const jobApply = async (e) => {
    let username = dt.username;
    console.log(username);
    try {
      let res = await JoblyApi.applyJob(username, id);
      console.log(res);
      setErr(false)
      setErrMsg("");
     
    } catch (e) {
      console.error(e);
      setErrMsg(e);
      
    }
    console.log("added");
   
  };


 
  return (
    <div key={id} className='JobDetail'>
   <h5>TITLE: {title}</h5>
<h5>SALARY: ${salary}</h5>
<h5>EQUITY{equity}</h5>
<div >
  {console.log(err,'err')}
  <button className='JobDetail-btn' onClick={jobApply}>{err === false?'SAVED':'APPLY'}</button>
</div>
      
    </div>
  )
}
export default JobDetail