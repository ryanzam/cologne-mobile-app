import { useEffect, useState } from "react";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:3000/api/items');
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