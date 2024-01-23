import React, { useEffect, useState } from 'react';
import './Product.css';

function App() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8081/funkos')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                return res.json();
            })
            .then(data => setData(data))
            .catch(err => setError(err.message));
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="grid-container">
            {data.map((d, i) => (
                <div className="grid-item" key={i}>
                    <img src={d.image_url} alt={d.Name} />
                    <h3>{d.Name}</h3>
                    <p>{d.Description}</p>
                    <p>Price: ${d.Price}</p>
                </div>
            ))}

        </div>
    );
}

export default App