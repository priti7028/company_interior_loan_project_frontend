import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addDocs, getApplications } from '../../../ApiServices/ApiServices';


function Documents() {

    const naviagate =  useNavigate();

    const [ applications, setApplications ] = useState([]);

    const {register, handleSubmit} = useForm();

    async function saveDocuments(Data){
        const resp = await addDocs(Data)
        if (resp.status === 201){
          naviagate('/register/')
        }
      }
    

    async function fetchApplications(){
        const result1 = await getApplications()
        setApplications(result1.data);
    }

    useEffect(()=>{
        fetchApplications();
    },[])

  return (
    <>
        <form action="" onSubmit={handleSubmit(saveDocuments)} className='container jumbotron mt-5 shadow'>

            <center><h1>Documents</h1></center>
            <br /><br />

            <label htmlFor="id_application"><b>Application:</b></label>
            <select {...register('application')} id="id_application" className='form-control'>
                {
                    applications.map(opt=>{
                        return (
                            <>
                                <option value={opt.id} >Application Number:{opt.id}, Aadhar Card:{opt.aadhaar_no}</option>
                            </>
                        );
                    })
                }
            </select>
            
            <br /><br />

            <label htmlFor=""><b>Aadhar Card:</b></label>
            <input type="file" id='aadhaar_card' className='form-control'  {...register('aadhaar_card')}/>
            <br /><br />

            <label htmlFor=""><b>PAN Card:</b></label>
            <input type="file" className='form-control' {...register('pan_card')}/>
            <br /><br />

            <label htmlFor=""><b>Bussiness Address Proof or Copy of Rent Agreement:</b></label>
            <input type="file" className='form-control' {...register('business_address_proof_or_copy_of_rent_agreement')}/>
            <br /><br />

            <label htmlFor=""><b>Electricity Bill:</b></label>
            <input type="file" className='form-control' {...register('electricity_bill')}/>
            <br /><br />

            <label htmlFor=""><b>MSME Certificate:</b></label>
            <input type="file" className='form-control' {...register('msme_certificate')}/>
            <br /><br />

            <label htmlFor=""><b>GST Certificate:</b></label>
            <input type="file" className='form-control' {...register('gst_certificate')}/>
            <br /><br />

            <label htmlFor=""><b>Udyog Aadhar Registration:</b></label>
            <input type="file" className='form-control' {...register('udyog_aadhaar_registration')}/>
            <br /><br />

            <label htmlFor=""><b>Bussiness License:</b></label>
            <input type="file" className='form-control' {...register('business_license')}/>
            <br /><br />

            <label htmlFor=""><b>Bussiness Plan or Proposal:</b></label>
            <input type="file" className='form-control' {...register('business_plan_or_proposal')}/>
            <br /><br />

            <label htmlFor=""><b>Three Year ITR with Balance Sheet:</b></label>
            <input type="file" className='form-control' {...register('three_year_itr_with_balance_sheet')}/>
            <br /><br />
            
            <label htmlFor=""><b>Collatral Documents:</b></label>
            <input type="file" className='form-control' {...register('collateral_document')}/>
            <br /><br />

            <label htmlFor=""><b>Stamp Duty:</b></label>
            <input type="file" className='form-control' {...register('stamp_duty')}/>
            <br /><br />

            <label htmlFor=""><b>Status</b></label>
            <select name="" id="" className='form-control' {...register('status')}>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
                <option value="Inprocess">Inprocess</option>
            </select>
            <br /><br />
            <label htmlFor=""><b>Remark:</b></label>
            <textarea id="id_remark" cols="30" rows="3" className='form-control' {...register('remark')}></textarea>
            <br /><br />
            <input type="submit" value='Save' className='btn btn-outline-success col-5'/>
            <input type="submit" className='btn btn-outline-warning col-5 float-right'/>
        </form>
    </>
  )
}

export default Documents