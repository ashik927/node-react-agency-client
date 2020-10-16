import React, { useEffect, useState } from 'react';
import './ClientFeedback.css';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import ClientFeedbacks from '../ClientFeedbacks/ClientFeedbacks';


const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : customer1
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : customer2
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : customer3
    }
]

const ClientFeedback = () => {
    const[review , setReview] = useState([]);

    useEffect(()=>{
        fetch('https://cryptic-anchorage-36092.herokuapp.com/readreview')
        .then(res => res.json())
        .then(result=> setReview(result))

    },[])
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h1 className="text-center">Clients <span style={{color: '#7AB259'}}>Feedback</span> </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        review.map(testimonial => <ClientFeedbacks testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default ClientFeedback;