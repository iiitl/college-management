
import './hero.css';


import { useState, useEffect } from "react";





export const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Creator", "Developer", "Coder" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
   
    <section className="banner" id="home">
      <table>
        <tr className="align-items-center">
          <td>
        
             
              <div>
                <span className="tagline">Welcome to IIIT Lucknow</span>
                <h1>{`Hello!`} <span className="txt-rotate"   data-rotate='[ "Creator", "Developer", "Coder" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                  scrambled it to make a type specimen book.</p>
               
               
                {/*Add  About Us page link*/}
                 <a href="#"> <button className="connectbutton">Let's Connect </button></a>
                

              </div>
            
          </td>
          <td>
          
             
                <div>
               
                  <img src="heroimage.png" alt="Header Img" className='heroimage'/>
                </div>
            
          </td>
        </tr>
      </table>
    </section>
    
  )
};
