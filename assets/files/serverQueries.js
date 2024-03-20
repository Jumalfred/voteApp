export const fetchData = async (link, userData) => {
    try {
        const url = 'http://192.168.0.124:9000' + link;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
};

export default fetchData;
