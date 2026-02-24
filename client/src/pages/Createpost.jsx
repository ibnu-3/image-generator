import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Createpost = () => {
  const navigate= useNavigate()
  const [form, setForm] =useState({name:'', prompt:'', photo:'',});
const [loading, setLoading]=useState(false)
const [generatingImg, setGeneratingImg]=useState(false)

  return (
    <div>Createpost</div>
  )
}

export default Createpost