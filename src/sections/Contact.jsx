import React from 'react'
import icHome from '../assets/icons/ic_home.svg'
import icCall from '../assets/icons/ic_call.svg'
import icEmail from '../assets/icons/ic_email.svg'
import icInstagram from '../assets/icons/ic_instagram.svg'
import ButtonAction from '../components/ButtonAction'
import FadeInSection from '../components/FadeInSection'

const Contact = () => {
  return (
    <FadeInSection delay={0.4}>
      <section id='contact' className='mt-32 lg:mt-48 w-full lg:w-[900px] xl:w-[1100px] mx-auto p-4 lg:p-0 text-center flex flex-col gap-16 lg:flex-row'>
        <div className='w-full lg:w-2/5'>
          <h2 className='text-purple-600 text-3xl font-bold'>Contact</h2>
          <div className='text-slate-600 font-semibold mt-8 flex flex-col gap-4'>
            <div className='w-full shadow p-4 rounded-lg'>
              <div className='flex gap-4 items-center'>
                <div className='w-8 h-8 flex justify-center items-center'>
                  <img src={icHome} alt="Address" />
                </div>
                <p>New York USA</p>
              </div>
            </div>
            <div className='w-full shadow p-4 rounded-lg'>
              <div className='flex gap-4 items-center'>
                <div className='w-8 h-8 flex justify-center items-center'>
                  <img src={icCall} alt="Phone" />
                </div>
                <p>+6285 7656 xxxx</p>
              </div>
            </div>
            <div className='w-full shadow p-4 rounded-lg'>
              <div className='flex gap-4 items-center'>
                <div className='w-8 h-8 flex justify-center items-center'>
                  <img src={icEmail} alt="Email" />
                </div>
                <p>johndue@example.com</p>
              </div>
            </div>
            <div className='w-full shadow p-4 rounded-lg'>
              <div className='flex gap-4 items-center'>
                <div className='w-8 h-8 flex justify-center items-center'>
                  <img src={icInstagram} alt="Instagram" />
                </div>
                <p>@johndue</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-3/5'>
          <h2 className='text-purple-600 text-3xl font-bold'>Send Your Message</h2>
          <div className='text-slate-600 mt-8 flex flex-col gap-4'>
            <form className='flex flex-col gap-4'>
              <div className='flex gap-4'>
                <input className='w-full bg-slate-100 rounded-lg p-4 outline-purple-600' type="text" name='name' placeholder='Your Name' />
                <input className='w-full bg-slate-100 rounded-lg p-4 outline-purple-600' type="email" name='email' placeholder='Your Email' />
              </div>
              <input className='w-full bg-slate-100 rounded-lg p-4 outline-purple-600' type="text" name='subject' placeholder='Subject' />
              <textarea className='w-full bg-slate-100 rounded-lg p-4 outline-purple-600'  name='message' placeholder='Your Message' rows={4}></textarea>
              <div>
                <ButtonAction url={"#"} caption={"Send Message"}/>
              </div>
            </form>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}

export default Contact