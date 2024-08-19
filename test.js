import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TestList = () => {
    const [tests, setTests] = useState([]);

    useEffect(() => {
        const fetchTests = async () => {
            try {
                const response = await axios.get('/api/tests');
                setTests(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchTests();
    }, []);

    return (
        <div>
            <h1>Available Tests</h1>
            <ul>
                {tests.map(test => (
                    <li key={test.id}>
                        <Link to={`/tests/${test.id}`}>{test.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TestList;
