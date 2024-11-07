import React, { useState } from 'react'
import Bell from '../assets/images/icons/bell.svg'
import Letter from '../assets/images/icons/letter-small.svg'
import { json } from 'react-router-dom'

const Newsletter = () => {
    const [formData, setFormData] = useState({email: ''})
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const {email, value} = e.target;
        setFormData({...formData, [email]: value})

        if (value.trim() === '') {
            setErrors(prevErrors => ({...prevErrors, [email]: 'This field is required'}))
        } else {
            setErrors(prevErrors => ({...prevErrors, [email]: ''}))
        }
    } 

    const handleOK = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newErrors = {}
        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === '') {
                newErrors[field] = 'This field is required'
            }
        })

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        const res = await fetch ('https://localhost:7066/api/contactform', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
    
        if (res.ok) {
           setSubmitted(true)
           setFormData({email: ''})
        }        
    }
    if (submitted) {
        return (
            <div ClassName="informationbox">
                <h1>Thank you for your subscribtion!</h1>
                <p>We will start your subscribtion as of now</p>
                <button className="btn-green" onClick={handleOK}>OK</button>
            </div>
        )
    }

  return (
        <form onSubmit={handleSubmit} noValidate>
            <div id="newsletter" className="flex">
                <div className="flex bell-img">         
                    <img className="bell" src={Bell} alt="Bell icon" />
                    <h2>Subscribe to our newsletter to stay informed about latest updates</h2> 
                </div>        
            <div className="input-container">
                <div className="flex">            
                    <div className="form-group">
                    <input className="input-c" type="email" name="email" required placeholder="Your Email" aria-label="Email address" value={formData.email} onChange={handleChange} />
                    <img src={Letter} alt="Envelope icon" className="envelope-icon" />
                    <span>{errors.email && errors.email}</span>
                    </div>
                    <button type="submit" className="style" aria-label="Subscribe to newsletter">Subscribe</button>
                </div>
            </div>
            </div>
        </form>
    )
}

export default Newsletter