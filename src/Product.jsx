import React, { useEffect, useState } from 'react';
import './Product.css';

function Product() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [selectedSeries, setSelectedSeries] = useState([]);
    const [selectedExclusive, setSelectedExclusive] = useState([]);

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

    const seriesOptions = ['One Piece', 'Batman'];
    const exclusiveOptions = ['Exclusive', 'Non-Exclusive'];

    const handleSeriesChange = (e) => {
        const value = e.target.value;
        if (selectedSeries.includes(value)) {
            setSelectedSeries(selectedSeries.filter(series => series !== value));
        } else {
            setSelectedSeries([...selectedSeries, value]);
        }
    };

    const handleExclusiveChange = (e) => {
        const value = e.target.value;
        if (selectedExclusive.includes(value)) {
            setSelectedExclusive(selectedExclusive.filter(exclusive => exclusive !== value));
        } else {
            setSelectedExclusive([...selectedExclusive, value]);
        }
    };

    const filteredData = data.filter(item => {
        if (selectedSeries.length > 0 && !selectedSeries.every(series => item.series.includes(series))) {
            return false;
        }
        if (selectedExclusive.length > 0 && !selectedExclusive.every(exclusive => item.exclusive === 1 ? exclusive === 'Exclusive' : exclusive === 'Non-Exclusive')) {
            return false;
        }
        return true;
    });

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <label>Filter by Series:</label>
            {seriesOptions.map((series, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        id={`seriesFilter-${index}`}
                        value={series}
                        checked={selectedSeries.includes(series)}
                        onChange={handleSeriesChange}
                    />
                    <label htmlFor={`seriesFilter-${index}`}>{series}</label>
                </div>
            ))}
            <label>Filter by Exclusive:</label>
            {exclusiveOptions.map((exclusive, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        id={`exclusiveFilter-${index}`}
                        value={exclusive}
                        checked={selectedExclusive.includes(exclusive)}
                        onChange={handleExclusiveChange}
                    />
                    <label htmlFor={`exclusiveFilter-${index}`}>{exclusive}</label>
                </div>
            ))}
            <div className="grid-container">
                {filteredData.map((d, i) => (
                    <div className="grid-item" key={i}>
                        <img src={d.image_url} alt={d.Name} />
                        <h3>{d.Name}</h3>
                        <p>{d.Description}</p>
                        <p>Price: ${d.Price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
