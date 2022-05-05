import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url);
                manageErrors(res);
                const json = await res.json();
                setData(json);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url])

    return { loading, error, data };
}

function manageErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export default useFetch;