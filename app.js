import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TestList from './components/Test/TestList';
import Test from './components/Test/Test';
import Results from './components/Results/Results';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/tests" element={<TestList />} />
                <Route path="/tests/:id" element={<Test />} />
                <Route path="/results" element={<Results />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
