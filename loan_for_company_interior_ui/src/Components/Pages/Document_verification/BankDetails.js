import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { addBank, getUsers } from '../../../ApiServices/ApiServices';


function BankDetails() {

  const naviage = useNavigate()  

  const {register, handleSubmit, watch, formState:{errors}} = useForm();
  

  async function saveBankDetails(Data){
    const resp = await addBank(Data)
    if (resp.status === 201){
      naviage('/register/')
    }
  }

  const [bank, setBank] =  useState([]);

  // to fetch all users registered to show in dropdown
  async function fetchData(){
    const result  = await getUsers() 
    setBank(result.data);
  }

  
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <>
    <form onSubmit={handleSubmit(saveBankDetails)} action="" className='container jumbotron mt-5 shadow'>
        <center><h1>Bank Details</h1></center>

        <br /><br />
        <label htmlFor="user_id"><b>User:</b></label>
        {/* <input type="text" {...register('user')} className='form-control'/> */}
        <select {...register('user')} id="user_id" className='form-control'>
          {

            bank.map(opt=>{
              if (opt.role == "Customer"){
              return (
                
                  <option value={opt.id}>ID:{opt.id}, First Name:{opt.first_name}, Last Name:{opt.last_name}</option>
                
              );
            }
            }
            )

          }
        </select>
        <br /><br />

        <label htmlFor=""><b>Bank Name:</b></label>
        <input type="text" className='form-control' {...register('bank_name')} placeholder='e.g. SBI'/>
        <br /><br />
    
        <label htmlFor=""><b>Current Account Number:</b></label>
        <input type="text" className='form-control' {...register('current_account_no', {minLength:{value:10, message:"Min value is 10"}})}/>
        <p className='text-danger'>{errors.current_account_no?.message}</p>
        <br /><br />

        <label htmlFor=""><b>IFC Code:</b></label>
        <input type="text" className='form-control' {...register('ifsc_code',{minLength:{value:10, message:"Min value is 10"}})}/>
        <p className='text-danger'>{errors.ifsc_code?.message}</p>
        <br /><br />

        <label htmlFor=""><b>Passbook Book:</b></label>
        <input type="file"  className='form-control' {...register('passbook_copy')}/>
        <br /><br />

        <input type="submit" className='btn btn-outline-success col-5 float-left' value='Submit'/>
        <input type="reset" className='btn btn-outline-warning col-5 float-right'/>
    </form>
    </>
  )
}

export default BankDetails;