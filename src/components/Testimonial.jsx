import React from 'react'

const Testimonial = ({item}) => {
  return (
        <div className="card-2">
        <div className="quotes">            
            <img src={Quotes} alt="Quote icon" />
        </div>
            <img className="rating" src={RatingFull} alt="5 out of 5 stars" />
            <p className="albert-review">{item.comment}</p>
            <img src={item.avatarUrl} alt={item.author} />
            <p className="author-a">{item.author}</p>
            <p className="c">{item.jobRole}</p>
        </div>
    )
}

export default Testimonial