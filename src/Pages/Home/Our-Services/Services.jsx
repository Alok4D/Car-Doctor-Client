import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="mr-4"> 
            <div className="text-center">
                <h3 className='text-3xl text-[#FF3811] font-bold'>Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServicesCard key={Services._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;