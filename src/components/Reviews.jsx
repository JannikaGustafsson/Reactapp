import React from 'react'
import Quotes from '../assets/images/icons/quotes.svg'
import Rating from '../assets/images/icons/rating.png'
import Face1 from '../assets/images/icons/Frannie.png'
import RatingFull from '../assets/images/icons/rating-full.png'
import Face2 from '../assets/images/icons/Albert.png'

const Reviews = () => {
  return (
    <section id="reviews">
    <div className="flex">
        <h4 className="h1 flex headline-left">Clients are Loving Our App</h4>
    <div className="cards flex">
    <div className="card">
    <div className="quotes">
        <img src={Quotes} alt="Quote icon" />
    </div>
        <img src={Rating} alt="4 out of 5 stars" />
            <p className="frannie-review">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas
                lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                <img src={Face1} alt="Frannie Summers" />
                <p className="author-f">Frannie Summers</p>
                <p className="c">Designer</p>
        </div>
            <div className="card-2">
                <div className="quotes">
                    <img src={Quotes} alt="Quote icon" />
                </div>
                    <img src={RatingFull} alt="5 out of 5 stars" />
                    <p className="albert-review">Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla
                    tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
                    <img src={Face2} alt="Albert Flores" />
                    <p className="author-a">Albert Flores</p>
                    <p className="c">Developer</p>
        </div>
        </div>
        </div>        
    </section>
  )
}

export default Reviews