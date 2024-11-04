import React, {useState, useEffect} from 'react'
import ServiceItem from './ServiceItem'
// import axios from 'axios'


const ServiceList = () => {
    const [ServiceItems, setServiceItems] = useState ([])

    const getDataUsingFetch = async () => {
        // här ska web API läggas in
        const res = await fetch('')
       setServiceItems(await res.json())
    }

    useEffect(() => {
        getDataUsingFetch()

    }, [])



    return (
        <div className="services">
            {
                ServiceItems.map((item) => (<ServiceItem key={item.id} item={item} />))

            }
        </div>
    )
}

export default ServiceList