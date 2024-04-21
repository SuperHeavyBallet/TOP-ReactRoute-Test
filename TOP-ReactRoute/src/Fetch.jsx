import { useState, useEffect } from "react";

const FetchGetRequest = () => {
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const fetchDataForPosts = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts?_limit=8`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`);
                }
                let postsData = await response.json();
                setData(postsData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchDataForPosts();
    }, []);

    return <div></div>
}

export default FetchGetRequest;