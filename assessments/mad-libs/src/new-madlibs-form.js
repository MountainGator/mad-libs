import './mad-form.css';
import { v4 as uuid } from 'uuid';

const NewMadLibsForm = ({ questions, handleSubmit }) => {
    
    return (
        <form className='madlibsform' onSubmit={handleSubmit}> 
            {questions.map(q => (
            <div className='form-element' key={uuid()}>
            <label htmlFor={q} className="form-label">
                {q.slice(0,1).toUpperCase() + q.slice(1, q.length)}:
            </label>
            <input 
            type='text' 
            id={uuid()}
            name={q} 
            className='form-input' 
            required
            />
            </div>
            ))
            }
         <button className='form-btn' type='submit'>Make MadLib!</button>
        </form>
    );
}

export default NewMadLibsForm;