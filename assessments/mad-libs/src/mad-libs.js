import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import NewMadLibsForm from './new-madlibs-form';
import './mad-libs.css';

const MadLibs = () => {
    const [questions, setQuestions] = useState([]);
    const [values, setValues] = useState([]);
    const [madLib, setMadLib] = useState([])
    
    const INITIAL_VALUE = {
        name: '',
        madLibText: ''
    };

    const [formData, setFormData] = useState(INITIAL_VALUE);

    

    useEffect(() => {
        async function getMadLib () {
            const res = await axios.get('http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=10');
            const { blanks, value } = res.data;

            setQuestions(blanks);
            setValues(value.filter(v => v !== 0));
        }

        getMadLib();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        const inputs = [...document.querySelectorAll('input')];
        const answers = inputs.map(n => n.value);

        setMadLib(addMadLib(answers, values));
    }

    const addMadLib = (answers, values) => {
        let otherAnswers;
        if(values.length > 10) {
            otherAnswers = [values.map((n, i) => (answers[i] + n)).slice(1, 10), ...values.slice(10, values.length)];
        } else if( values.length <= 10) {
           otherAnswers = values.map((n, i) => (answers[i] + n)).slice(1, 10);
        }
        
        const first = answers[0] + ' ' + values[0];
        const combined = [first, ...otherAnswers].reduce((acc, next) => acc + next);
        console.log(combined);
        return combined;
    }

    useEffect(() => {
        
    }, []);  

    return (
        <div id="container">
            <h1 id="title">MadLibs!</h1>
        <NewMadLibsForm 
            questions={questions}
            handleSubmit={handleSubmit} 
            setFormData={setFormData} 
            formData={formData} 
            />
        <p className='display-text'>{madLib}</p>
        </div>
    );
}

export default MadLibs;