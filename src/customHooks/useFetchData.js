import { useEffect, useState } from 'react'



const useFetchData = (apiEndpoint) => {
    const [data, setData] = useState([]);
    const [totaldata, setTotalData] = useState([])
    const apiCall = async () => {
        try {
            const response = await fetch(apiEndpoint);
            const data = await response.json();
            if (response.ok) {
                setData(data);
                setTotalData(data);
            }
        } catch (error) {
            throw new Error("Server Error");
        }
    }
    useEffect(() => {
        apiCall();
    }, [apiEndpoint])

    return [data, setData, totaldata, setTotalData];
}

export default useFetchData