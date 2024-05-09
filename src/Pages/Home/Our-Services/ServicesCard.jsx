import { Link } from "react-router-dom";


const ServicesCard = ({service}) => {

    const {title, img, price, _id} = service;
    
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{title}</h2>
    <p>Price :${price}</p>
    <div className="card-actions">
     <Link to={`/book/${_id}`}>
     <button className="btn btn-primary">Book Now</button>
     </Link>
    </div>
  </div>
</div> 
        </div>
    );
};

export default ServicesCard;