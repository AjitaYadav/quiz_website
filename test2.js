import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Test = () => {
    const { id } = useParams();
    const [test, setTest] = useState(null);
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        const fetchTest = async () => {
            try {
                const response = await axios.get(`/api/tests/${id}`);
                setTest(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchTest();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/api/tests/${id}/submit`, { answers });
            alert('Test submitted');
        } catch (error) {
            console.error(error);
        }
    };

    if (!test) return <p>Loading...</p>;

    return (
        <form onSubmit={handleSubmit}>
            <h1>{test.name}</h1>
            {test.questions.map(question => (
                <div key={question.id}>
                    <p>{question.text}</p>
                    {question.options.map(option => (
                        <label key={option.id}>
                            <input
                                type="radio"
                                name={`question_${question.id}`}
                                value={option.id}
                                onChange={() => setAnswers(prev => ({ ...prev, [question.id]: option.id }))}
                            />
                            {option.text}
                        </label>
                    ))}
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
};

export default Test;
