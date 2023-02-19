import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

function Update(){
  const {userId} = useParams();

  const[user, setUser]= useState({});

  const{register,setValue, handleSubmit} = useForm();

  const navigate =useNavigate();

  async function fetchUser(){
    const result = await fetchUser(`${userId}`);
    setUser(result.data);
  }
   
    function setData(){
        
        setValue("id",user.id)
        setValue("first_name",user.first_name)
        setValue("last_name",user.last_name)
        setValue("dob",user.dob)
        setValue("gender",user.gender)
        setValue("email",user.email)
        setValue("address",user.gender)
  }

  function saveData(data){
    axios.put(`http://localhost:5000/users/${userId}`,data);
    navigate('/user/show');                                                                                           
}
  useEffect(() => {
      fetchUser()
  },)

  return (
    <>
      <div className='container mt-3'>
            <h1><center>Update Form</center></h1>
            <form onSubmit={handleSubmit(saveData)} className="mt-5">
                <label htmlFor='pid'><b>PRODUCT ID :</b></label>
                <input type='number' id='pid' className='form-control' {...register('pid')}/>
                <br></br>
                <label htmlFor='pn'><b>PRODUCT NAME:</b></label>
                <input type='text' id='pn' className='form-control' {...register('pn')}/>
                <br></br>
                <label htmlFor='qn'>PRODUCT QUANTITY:</label>
                <input type='number' id='qn' className='form-control' {...register('qn')}/>
                <br></br>
                <label htmlFor='pc'>PRODUCT PRICE:</label>
                <input type='number' id='pc' className='form-control' {...register('pc')}/>
                <br></br>
                <label htmlFor='dt'>ORDER DATE:</label>
                <input type='datetime-local' id='dt' className='form-control'{...register('dt')}/>
                <br></br>
                <input type='submit' value='UPDATE USER' className='btn btn-outline-danger' />
              </form>
                <button  onClick={()=>{setData()}} className='btn btn-outline-danger'>Load Values saved</button>
        </div>

    </>
  )
}
export default Update;