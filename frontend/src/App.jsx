import { useEffect, useState } from 'react';
import imgD from '../src/assets/illustration-sign-up-desktop.svg';
import imgM from '../src/assets/illustration-sign-up-mobile.svg';
import icon from '../src/assets/icon-list.svg';
import success from '../src/assets/icon-success.svg'

function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);
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
    <main className='bg-charcoal w-screen h-screen flex justify-center items-center'>
      {
      !isSubmitted
       ?
    <div className='bg-white rounded-3xl shadow-xl flex justify-between w-1/2 h-3/5 gap-8 py-12 px-8 xs:max-lg:h-full xs:max-lg:w-full xs:max-lg:flex xs:max-lg:flex-col-reverse xs:max-lg:p-2'>
      <div className='justify-start px-8 py-12'>
        <h3 className='text-6xl text-center font-bold text-charcoal'>Stay Updated!</h3>
        <p className='text-roboto text-gray-900 my-4 font-medium text-base'>Join 60,000+ product managers recieving monthly <br /> updates on: </p>
        <ul>
          <li className='flex gap-4 text-roboto text-gray-900 my-3 font-medium text-base'><img src={icon} alt="icon" /> Product discovery and building what matters</li>
          <li className='flex gap-4 text-roboto text-gray-900 my-3 font-medium text-base'><img src={icon} alt="icons" /> Measuring to ensure updates are a success</li>
          <li className='flex gap-4 text-roboto text-gray-900 my-3 font-medium text-base'><img src={icon} alt="icon" /> And much more!</li>
        </ul> 
        <form
        action='post' 
        onSubmit={handleSubmit} 
        className="grid "
        >
          <div className='flex justify-between'>
          <label htmlFor="email" className='text-roboto text-charcoal my-3 font-bold text-sm' >Email Address</label>
          {
            error ?
            <h3 className='text-rose-400 text-sm'>Valid email required</h3>
            :
            <></>
          }
          </div>
          <input 
          type="email" 
          value={email}  
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          onInvalid= {(e) =>{
            e.preventDefault()
            setError(true);
          }}
          placeholder="email@company.com" 
          className={`rounded-xl p-4
          ${error ? "border-rose-400" : "border-2" }
          ${error ? "border-2" : "outline-0"} focus:outline-2
          ${error ? "outline-rose-400" : "outline-slate-500"}
          ${error ? "bg-rose-100" : ""}
          `}
          reqiuired 
          />
          <button className='bg-charcoal text-white text-base font-semibold py-4 px-12 rounded-xl hover:bg-tmt mt-8' type='submit'>Subscribe to montly newsletter</button>
        </form>
      </div>
      <div className='flex items-center'>
        <img src={screen < 1024 ? imgM : imgD } alt="" />
      </div>
    </div>
    :
       <div className='bg-white p-16 w-3/12 h-1/2 rounded-3xl m-auto grid gap-6'>
        <img src={success} alt="success" />
        <h1 className='text-charcoal font-bold text-6xl'>Thanks for Subscribing!</h1>
        <p className='text-base text-gray-800 font-medium'>A confirmation mail has been sent to <span className='text-charcoal font-bold'>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
        <button className='bg-charcoal text-white text-base font-semibold py-4 px-12 rounded-xl hover:bg-tmt ' 
        onClick={() => {
          setEmail('');
          setIsSubmitted('');
        }}>Dismiss message</button>
       </div> 
      }
  </main>

  )
}

export default App
