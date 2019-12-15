import { useState } from 'react';

const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const createDictionary = (paragraph) => {
        const dicctionary = [];
        const words = paragraph.split(' ');
        words.map((item) => {
            if (item.length >= 5 && item.length <= 14) {
                dicctionary.push({
                    word: item,
                    length: item.length,
                });
            }
            return null;
        });
        return dicctionary;
    };
    const sortData = (unsortedData) => {
        const sortedData = [...unsortedData];
        sortedData.sort((a, b) => {
            const keyA = a.length;
            const keyB = b.length;
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });
        return sortedData;
    };
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try{
    //             const res = await fetch(url, options);
    //             const text = await res.text();
    //             setResponse(sortData(createDictionary(text))[99]);
    //         } catch (error) {
    //             setError(error);
    //         }
    //     };
    //     fetchData();
    // }, []);
    const fetchData = async () => {
        try {
            const res = await fetch(url, options);
            const text = await res.text();
            setResponse(sortData(createDictionary(text))[99]);
        } catch (error) {
            setError(error);
        }
    };
    fetchData();
    return { response, error };
};

export default useFetch;
