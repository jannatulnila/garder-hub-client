import React, { useEffect, useState } from 'react';

const FeaturedGrdeners = () => {
    const [gardeners, setGardeners] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/featured-gardeners')
            .then((res) => res.json())
            .then((data) => setGardeners(data));
    }, []);

    

    return (
        <div className="my-10 px-4 md:px-12">
            <h2 className="text-3xl font-bold text-center mb-8"> Featured Gardeners</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gardeners.map((gardener) => (
                    <div key={gardener.id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={gardener.image}
                                alt={gardener.name}
                                className="h-52 w-full m-5"
                            />
                        </figure>
                        <div className="card-body text-center">
                            <div className="badge badge-success mt-2">Active</div>
                            <h3 className="text-2xl font-semibold text-secondary">{gardener.name}</h3>
                            <p className="text-sm text-secondary">{gardener.location}</p>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedGrdeners;