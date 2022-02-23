import axios from 'axios';
import { useState, useEffect } from 'react';
import NewMadLibsForm from './new-madlibs-form';
import './mad-libs.css';

const MadLibs = () => {
    const [questions, setQuestions] = useState([]);
    const [values, setValues] = useState([]);
    const [madLib, setMadLib] = useState([])

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
        
        const inputs = [...document.querySelectorAll('input')];
        const answers = inputs.map(n => n.value);

        setMadLib(addMadLib(answers, values));
    }

    const addMadLib = (answers, values) => {
        let getAnswers;

        if(values.length > 10) {
            getAnswers = [values.map((n, i) => (n + answers[i])).slice(0, 10), ...values.slice(10, values.length)];
        } else if( values.length <= 10) {
           getAnswers = values.map((n, i) => (n + answers[i]));
        }

        const combined = getAnswers.reduce((acc, next) => acc + next);

        return combined;
    }

    return (
        <div id="container">
            <h1 id="title">MadLibs!</h1>

            <NewMadLibsForm 
                questions={questions}
                handleSubmit={handleSubmit} 
            />

            <p className='display-text'>{madLib}</p>
        </div>
    );
}

export default MadLibs;