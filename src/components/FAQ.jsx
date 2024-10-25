import React from 'react'
import Telephone from '../assets/images/icons/telephone.svg'
import ArrowBlue from '../assets/images/icons/arrow-blue.svg'
import Message from '../assets/images/icons/message.svg'
import ArrowGreen from '../assets/images/icons/arrow-green.svg'

const FAQ = () => {
  return (
    <section>
    <div className="container-f">        
    <div id="faq">
    <div>
        <h4 className="h2">Any questions? Check out the FAQs</h4>
    </div>
    <div>
        <p>Still have unanswered questions and need to get in touch?</p>
    </div>
    <div className="flex">       
    <div className="contact-box">
        <img src={Telephone} />
        <p className="clr">Still have questions?</p>
        <a href="">Contact us</a>
        <img src={ArrowBlue} />
    </div>
    <div className="contact-box">
        <img src={Message} />
        <p className="clr">Don't like phone calls?</p>
        <a href="">Contact us</a>
        <img src={ArrowGreen} />
    </div>
</div>
</div>    
<div id="long-box">   
    <div className="question-box">
        <p className="txt-clr">Is any of my personal information stored in the App?</p>
        <a href="#features" className="btn-round btn-gray">
            <i className="fa-solid fa-chevron-down"></i>
        </a>
    </div>        
    <div className="question-box">
        <p>What formats can I download my transaction history in?</p>
        <a href="#features" className="btn-round btn-gray">
            <i className="fa-solid fa-chevron-down"></i>
        </a>            
    </div>
    <div className="question-box">
        <p>Can I schedule future transfers?</p>
        <a href="#features" className="btn-round btn-primary">
            <i className="fa-solid fa-chevron-up"></i>
        </a>
        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus.
            Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis
            accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus
            gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse
            ut consequat.</p>
    </div>
    <div className="question-box">
    <p>When can I use Banking App services?</p>
    <a href="#features" className="btn-round btn-gray">
        <i className="fa-solid fa-chevron-down"></i>
    </a>
    </div>
    <div className="question-box">
        <p>Can I create my own password that is easy for me to remember?                
        </p>
        <a href="#features" className="btn-round btn-gray">
            <i className="fa-solid fa-chevron-down"></i>
        </a>
    </div>
    <div className="question-box">
        <p>What happens if I forget or lose my password?</p>
        <a href="#features" className="btn-round btn-gray">
            <i className="fa-solid fa-chevron-down"></i>
        </a>
    </div>
</div>
</div>
</section>
  )
}

export default FAQ