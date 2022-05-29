import { useState } from 'react'
import Nav from '../components/Nav'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Onboarding = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [formData, setFormData] = useState({
        user_id: cookies.UserId,
        dog_name: '',
        dog_age: '',
        gender_identity: 'male',
        gender_interest: 'everyone',
        url: '',
        dog_about: '',
        matches: []
    })

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.put('http://localhost:8000/user', {formData})
            const success = response.status === 200
            if(success) navigate('/dashboard')
        } catch(err){
            console.log(err)
        }
    }

    const handleChange = (e) => {
        const value = e.target.value === 'checkbox' ? e.target.checked : e.target.value
        const name = e.target.name
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <>
            <Nav
                minimal={true}
                setShowModal={() => { }}
                showModal={false}

            />
            <div className='onboarding'>
                <h2>CREATE ACCOUNT</h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor='dog_name'>Dog's Name</label>
                        <input
                            id="dog_name"
                            type="text"
                            name="dog_name"
                            placeholder="Dog's Name"
                            required={true}
                            value={formData.dog_name}
                            onChange={handleChange}
                        />
                        <label>Dog's Age</label>
                        <input
                            id="dog_age"
                            type="number"
                            name="dog_age"
                            placeholder="Dog's Age"
                            required={true}
                            value={formData.dog_age}
                            onChange={handleChange}
                        />
                        <label>Gender</label>
                        <div className='multiple-input-container'>
                            <input
                                id="male-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="male"
                                onChange={handleChange}
                                checked={formData.gender_identity === 'male'}
                            />
                            <label htmlFor='male-gender-identity'>Male</label>
                            <input
                                id="female-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="female"
                                onChange={handleChange}
                                checked={formData.gender_identity === 'female'}
                            />
                            <label htmlFor='female-gender-identity'>Female</label>
                        </div>
                        <label>Show Me</label>
                        <div className='multiple-input-container'>
                            <input
                                id="everyone-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="everyone"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'everyone'}
                            />
                            <label htmlFor='everyone-gender-interest'>Everyone</label>
                            <input
                                id="male-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="male"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'male'}
                            />
                            <label htmlFor='male-gender-interest'>Male</label>
                            <input
                                id="female-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="female"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'female'}
                            />
                            <label htmlFor='female-gender-interest'>Female</label>

                        </div>

                        <label htmlFor='dog_about'>About the dog</label>
                        <input
                            id="dog_about"
                            type="text"
                            name="dog_about"
                            required={true}
                            placeholder="I love to hang with my pals.."
                            value={formData.dog_about}
                            onChange={handleChange}
                        />
                        <input type={"submit"} />
                    </section>

                    <section>
                        <label htmlFor='about'>Profile</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className='photo-container'>
                            {formData.url && <img src={formData.url} alt="profile pic preview" />}
                        </div>
                    </section>
                </form>
            </div>
        </>
    )
}

export default Onboarding