import React from 'react';
import { useParams, Link } from 'react-router-dom';
import hotels from '../data';

const HotelDetail = () => {
    const { id } = useParams();
    const hotel = hotels.find(hotel => hotel.id === parseInt(id));

    if (!hotel) {
        return <p>Hotel not found</p>;
    }

    return (
        <section className="hotel-detail">
            <Link to="/">Back to list</Link>
            <h2>{hotel.name}</h2>
            <p>{hotel.location}</p>
            <p>{hotel.description}</p>
            <p>{hotel.price}</p>
            <p>{hotel.rating}</p>
            <img src={hotel.image} alt={hotel.name} />
        </section>
    );
};

export default HotelDetail;
