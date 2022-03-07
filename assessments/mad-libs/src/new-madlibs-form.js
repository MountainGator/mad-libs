import './mad-form.css';
import { v4 as uuid } from 'uuid';
import { useState, useEffect } from 'react';

const NewMadLibsForm = ({ questions, values, handleSubmit, formData, setFormData }) => {
    const [isFilled, setFilled] = useState(false);

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
            {useEffect(() => {
                questions.map(q => {
                let uID = uuid();
                return (
                    <div className='form-element' key={uuid()}>
                        <label htmlFor={uID} className="form-label">
                            {q.slice(0,1).toUpperCase() + q.slice(1, q.length)}:
                        </label>
                        <input 
                        type='text' 
                        name={uID} 
                        className='form-input' 
                        value={formData.uID}
                        placeholder={q}
                        onChange={handleChange}
                        />
                    </div>
                    )
                    })
                }, [questions, values])
            }
         {isFilled && <button className='form-btn' type='submit'>Make MadLib!</button>}
        </form>
    );
}

export default NewMadLibsForm;