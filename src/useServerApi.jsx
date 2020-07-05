import {useState, useEffect, useRef} from 'react';

export default function useServerApi(url, initialData) {
const [data, setData] = useState(initialData);
const [isLoading, setLoading] = useState(false);
const [hasError, setError] = useState(null);
const timestampRef = useRef()
useEffect(() => {
    const fetchData = async () => {
        const timestamp = Date.now();
        timestampRef.current = timestamp;
        setLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            if (timestampRef.current === timestamp) {
                const data = await response.json();
                setData(data);
            }
            setError(null);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };
    fetchData();
}, [url])

return [{data, isLoading, hasError}];
}
