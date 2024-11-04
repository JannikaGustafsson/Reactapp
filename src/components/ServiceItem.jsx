import React from 'react'
import { Link } from 'react-router-dom'

const ServiceItem = ({item}) => {
    return (
        <Link to={`/services/${item.id}`}>
            <div className="item">
                <div className="header">
                    <h3>{item.title}</h3>
                </div>
            <div className="body">
                <img src="{item.imageUrl}" alt="{item.imageAlt}" />
            </div>
            <div className="Footer">
                <p>{item.text}</p>
            </div>
            </div>
        </Link>
    )
}

export default ServiceItem