import React, { useEffect, useState } from 'react';

const TopTrendingTips = () => {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/trending-tips")
            .then((res) => res.json())
            .then((data) => setTips(data));
    }, []);
    return (
        <section className="my-10 px-4 md:px-12">
            <h2 className="text-3xl font-bold text-center mb-8"> Top Trending Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tips.map((tip) => (
                    <div key={tip.id} className="card shadow-xl text-center">
                        <div className="card-body">
                            <h1 className='font-bold text-3xl
                             text-secondary'>{tip.category}</h1>
                            <h3 className="text-xl font-semibold text-secondary">{tip.title}</h3>
                            <p className="text-sm text-secondary">{tip.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopTrendingTips;