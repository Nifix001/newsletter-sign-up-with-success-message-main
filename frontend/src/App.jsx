import { useEffect, useState } from 'react';
import imgD from '../src/assets/illustration-sign-up-desktop.svg';
import imgM from '../src/assets/illustration-sign-up-mobile.svg';
import icon from '../src/assets/icon-list.svg'

function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [screen, setScreen] = useState(window.innerWidth)


  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);
  }

  return (
    <main>
    <div>
      <div>
        <h3>Stay Updated</h3>
        <p>Join 60,000+ product managers recieving montly updates on: </p>
        <ul>
          <li><img src={icon} alt="icon" /> Product discovery and building what matters</li>
          <li><img src={icon} alt="icons" /> Measuring to ensure updates are a success</li>
          <li><img src={icon} alt="icon" /> And much more!</li>
        </ul> 
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Email Address</label>
          <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="email@company.com" reqiuired />
          <button type='submit'>Subscribe to montly newsletter</button>
        </form>
      </div>
      <div>
        <img src={screen < 1000 ? imgM : imgD } alt="" />
      </div>
    </div>
  </main>

  )
}

export default App
