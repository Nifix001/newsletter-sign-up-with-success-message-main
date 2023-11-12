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
    <div className='bg-white rounded-3xl shadow-xl flex justify-between w-1/2 h-3/4 gap-4 py-8 px-6 xs:max-lg:h-screen xs:max-lg:w-screen xs:max-lg:flex xs:max-lg:flex-col-reverse xs:max-lg:p-0 xs:max-lg:gap-2 xs:max-lg:rounded-none'>
      <div className='justify-start grid p-2 xs:max-lg:px-8 xs:max-lg:py-8 xs:max-lg:items-start'>
        <h3 className='text-4xl mb-2 text-center font-bold text-charcoal xs:max-lg:text-start'>Stay Updated!</h3>
        <p className='text-roboto text-gray-900 my-4 font-medium text-base xl'>Join 60,000+ product managers recieving monthly updates on: </p>
        <ul>
          <li className='flex gap-4 text-roboto text-gray-900  font-medium text-sm'><img src={icon} alt="icon" /> Product discovery and building what matters</li>
          <li className='flex gap-4 text-roboto text-gray-900  font-medium text-sm'><img src={icon} alt="icons" /> Measuring to ensure updates are a success</li>
          <li className='flex gap-4 text-roboto text-gray-900  font-medium text-sm'><img src={icon} alt="icon" /> And much more!</li>
        </ul> 
        <form
        action='post' 
        onSubmit={handleSubmit} 
        className="grid "
        >
          <div className='flex justify-between'>
          <label htmlFor="email" className='text-roboto text-charcoal my-3 font-bold text-sm ' >Email Address</label>
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
          className={`rounded-xl p-2
          ${error ? "border-rose-400" : "border-2" }
          ${error ? "border-2" : "outline-0"} focus:outline-2
          ${error ? "outline-rose-400" : "outline-slate-500"}
          ${error ? "bg-rose-100" : ""}
          `}
          reqiuired 
          />
          <button className='bg-charcoal text-white text-sm font-medium py-4 px-12 rounded-xl hover:bg-gradient-to-r hover:from-tmt hover:to-orange-400 mt-8 xs:max-lg:px-4' type='submit'>Subscribe to montly newsletter</button>
        </form>
      </div>
        <img src={screen < 1024 ? imgM : imgD } alt=""  className='xs:max-lg:w-full xs:max-lg:object-fill'/>
    </div>
    :
       <div className='bg-white py-14 px-8 w-2/6 h-2/3 rounded-3xl  flex flex-col justify-evenly xs:max-lg:w-screen xs:max-lg:h-screen xs:max-lg:rounded-none xs:max-lg:gap-1 xs:max-lg:pb-2'>
        <img src={success} alt="success" width="40px" height="40px" className='-mb-28' />
        <h1 className='text-charcoal font-bold text-4xl mt-24 '>Thanks for Subscribing!</h1>
        <p className='text-sm text-gray-800 my-2 font-medium xs:max-lg:-mt-6'>A confirmation mail has been sent to <span className='text-charcoal font-bold'>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
        <button className='bg-charcoal text-white text-sm font-semibold py-4 px-12 rounded-xl hover:bg-gradient-to-r hover:from-tmt hover:to-orange-400 xs:max-lg:py-8 xs:max-lg:px-4 xs:max-lg:mt-36' 
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
