//reference: https://scotch.io/tutorials/create-a-custom-usefetch-react-hook
import React, { useState, useEffect } from 'react';

const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch(url, options);
                const text = res.text();
                setResponse(text);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);
    return { response, error };
};

export default useFetch;
