import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='pt-8 text-2xl text-center border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='flex flex-col gap-16 my-10 md:flex-row'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About Photo" />
        <div className='flex flex-col justify-center gap-6 text-gray-600 md:w-2/4'>
          <p>Welcome to Techtrove! Your one-stop destination for top-quality electronics and gadgets.</p>
          <p>At TechTrove, We are dedicated to bringing you the latest technology with unbeatable reliability and style.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At TechTrove, To provide our customers with innovative, high-quality tech products that enhance everyday life.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>At TechTrove, To be the most trusted and customer-centric tech brand, delivering excellence and innovation to every home.</p>
        </div>
      </div>
      <div className='py-4 text-xl'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col mb-20 text-sm md:flex-row'>
        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>At TechTrove, every product goes through strict quality checks to ensure top performance, reliability, and durability. We are committed to delivering only the best technology for our customers.</p>
        </div>
        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
          <b>Convenience</b>
          <p className='text-gray-600'>We make shopping for technology easy and hassle-free. From effortless browsing to fast checkout and reliable delivery, Techtrove ensures a seamless experience from start to finish.</p>
        </div>
        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>At TechTrove, our customers are our priority. Our dedicated support team is always ready to assist you with inquiries, guidance, and after-sales support to ensure a smooth and satisfying shopping experience.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
