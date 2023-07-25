import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json()
            setData(data);
            setLoading(false);
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false);
        }
    }

    const reLoad = () => {
        setLoading(true);
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { data, loading, error, reLoad }
}

export default useFetch;