import React from 'react'
import Quotes from '../assets/images/icons/quotes.svg'
import Face1 from '../assets/images/icons/Frannie.png'
import Face2 from '../assets/images/icons/Albert.png'
import Testimonial from './Testimonial'

const ClientTestimonials = () => {

  const [testimonials, setTestimonials] = useState([])

  const getTestimonials = async () => {
  const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
  const data = await res.json()
  setTestimonials(data)
  }
  
  useEffect(() => {
    getTestimonials()
  }, [])
 
  return (
    <section id="Testimonials">
          <div className="flex">
            <h4 className="h1 flex headline-left">Clients are Loving Our App</h4>
            <div className="cards flex">

            <div className="card">
            <div className="quotes">
            <img src={Quotes} alt="Quote icon" />
          </div>
            {
              testimonials.map((testimonial) => (
              <Testimonial key={testimonial.id} item={testimonial} />
            ))
          }

        

      </div>
      </div>
      </div>        
    </section>
    )
  }

export default ClientTestimonials