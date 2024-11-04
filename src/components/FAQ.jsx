import React from 'react'
import Telephone from '../assets/images/icons/telephone.svg'
import ArrowBlue from '../assets/images/icons/arrow-blue.svg'
import Message from '../assets/images/icons/message.svg'
import ArrowGreen from '../assets/images/icons/arrow-green.svg'

const FAQ = () => {
  return (
    <section>
        <div className="container-f">        
            <div className="faq">
            <div>
                <h4 className="h2">Any questions? Check out the FAQs</h4>
        </div>
    <div className="questionmark">
        <p>Still have unanswered questions and need to get in touch?</p>
    </div>
    <div className="flex contactboxes">       
    <div className="contact-box">
        <img src={Telephone} alt="A phone" />
        <p className="clr">Still have questions?</p>
        <div className="contact-link">
        <a href="">Contact us</a>
        <img src={ArrowBlue} alt="A blue arrow" />
        </div>
    </div>
    <div className="contact-box">
        <img src={Message} alt="Message icon" />
        <p className="clr">Don't like phone calls?</p>
        <div className="contact-link">
        <a href="">Contact us</a>
        <img src={ArrowGreen} alt="A green arrow" />
        </div>      
    </div>
    </div>
    </div>    
        <div className="long-box">   
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
    <div className="question-box question-box-open">
        <p>Can I schedule future transfers?</p>
        <a href="#features" className="btn-round btn-primary">
            <i className="fa-solid fa-chevron-up"></i>
        </a>
        <p className="small">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus.
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