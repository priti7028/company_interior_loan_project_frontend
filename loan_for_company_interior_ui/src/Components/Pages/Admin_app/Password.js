import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
function ConfirmPassword() {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is mendatory')
      .min(3, 'Password must be at 3 char long'),
    confirmPwd: Yup.string()
      .required('Password is mendatory')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
  })
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4))
    return false
  }
}
