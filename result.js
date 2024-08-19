import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Results = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await axios.get('/api/results');
                setResults(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchResults();
    }, []);

    return (
        <div>
            <h1>Your Results</h1>
            <ul>
                {results.map(result => (
                    <li key={result.testId}>
                        Test: {result.testName} - Score: {result.score}/{result.totalQuestions}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Results;
