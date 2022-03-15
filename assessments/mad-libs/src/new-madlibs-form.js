import './mad-form.css';
import { v4 as uuid } from 'uuid';
import { useState, useEffect, useRef } from 'react';

const NewMadLibsForm = ({ questions, handleSubmit, formData, setFormData }) => {
    const [isFilled, setFilled] = useState(false);
    let count = 1;

    const handleChange = (e) => {
        console.log(e);
        
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData, 
             [name]: value 
        }))
        
    }

    useEffect(() => {
        // console.log(formData);
        if(formData.length === 10) {
            setFilled(true);
        }
    }, [formData])

    

    return (
        <form className='madlibsform' onSubmit={handleSubmit}> 
            { questions.map(q => {
                    let countString = `${count}`;
                    count ++;
                    return (
                        <div className='form-element' key={uuid()}>
                            <label htmlFor={countString} className="form-label">
                                {q.slice(0,1).toUpperCase() + q.slice(1, q.length)}:
                            </label>
                            <input 
                            type='text' 
                            name={countString}
                            id={countString} 
                            className='form-input' 
                            value={formData.countString}
                            placeholder={q}
                            onChange={handleChange}
                            />
                        </div>
                    )
                   
                    })
                }
         {isFilled && <button className='form-btn' type='submit'>Make MadLib!</button>}
        </form>
    );
}

export default NewMadLibsForm;