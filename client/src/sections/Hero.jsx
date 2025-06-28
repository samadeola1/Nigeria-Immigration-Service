import React, { useState, useEffect } from 'react'
import img1 from '../images/WhatsApp Image 2025-06-21 at 12.05.59_5118bdb6 1.svg'
import img2 from '../images/image 177.svg'
import img3 from '../images/image 178.svg'
import img4 from '../images/Frame 1000009760.svg'
import img5 from '../images/WhatsApp Image 2025-06-21 at 12.05.59_5118bdb6 2.svg'
import img6 from '../images/image 177 (1).svg'
import img7 from '../images/iPhone 13 mini - 10.svg'
import img8 from '../images/image 178 (1).svg'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Desktop slides data
  const desktopSlides = [
    {
      image: img1,
      content: (
        <div className="absolute lg:bottom-80 xl:bottom-100">
          <h1 className="lg:text-[75px] xl:text-[84px] font-bold text-white drop-shadow-lg leading-tight">
            Nigeria <span className="text-[#6BCE9C]">Immigration</span> Service
          </h1>
          <p className="text-[28px] font-semibold lg:w-[80%] xl:w-[60%] text-white drop-shadow-md mt-4 leading-relaxed">
            Begin your journey with confidence. Whether you're pursuing career
            growth, world-class education, or a better future for your family,
            we are ready to welcome you.
          </p>
        </div>
      ),
    },
    {
      image: img2,
      content: (
        <div className="absolute bottom-100">
          <p className="text-[84px] font-semibold w-[75%] text-white drop-shadow-md leading-relaxed">
            Your Gateway TO A New Life In Nigeria.
          </p>
        </div>
      ),
    },
    {
      image: img4,
      content: (
        <div className="absolute bottom-80 ">
          <p className="lg:text-[75px] xl:text-[84px] font-semibold xl:w-[70%] text-white drop-shadow-md ">
            Fast, Transparent Processes and Multiple Immigration Pathways
          </p>
        </div>
      ),
    },
    {
      image: img3,
      content: (
        <div className="absolute bottom-80">
          <p className="lg:text-[75px] xl:text-[84px] font-semibold lg:w-[80%] xl:w-[65%] text-white  drop-shadow-md leading-relaxed">
            Making Immigration Simple, Secure, and Accessible for All
          </p>
        </div>
      ),
    },
  ];

  // Mobile slides data
  const mobileSlides = [
    {
      image: img5,
      content: (
        <div className='absolute bottom-8 md:bottom-80 px-3 md:px-6'>
          <h1 className='text-[28px] md:text-[42px] font-bold text-white drop-shadow-lg'>
            Nigeria <span className='text-[#6BCE9C]'>Immigration</span> Service
          </h1>
          <p className='text-[16px] md:text-[20px] font-normal text-white drop-shadow-md mt-2'>
            Begin your journey with confidence. Whether you're pursuing career growth, world-class education, or a better future for your family, we are ready to welcome you.
          </p>
        </div>
      )
    },
    {
      image: img6,
      content: (
        <div className='absolute top-50 md:top-100 px-4 md:px-6'>
          <p className='text-[26px] md:text-[42px] font-bold w-70 md:w-full text-white drop-shadow-md'>
            Your Gateway TO A New Life In Nigeria.
          </p>
        </div>
      )
    },
    {
      image: img7,
      content: (
        <div className='absolute bottom-20 md:bottom-80 px-4 md:px-6'>
          <p className='text-[28px] md:text-[42px] font-bold md:w-[85%] text-white drop-shadow-md'>
            Fast, Transparent Processes and Multiple Immigration Pathways
          </p>
        </div>
      )
    },
    {
      image: img8,
      content: (
        <div className='absolute bottom-20 md:bottom-80 px-4 md:px-6'>
          <p className='text-[28px] md:text-[42px] font-bold md:w-[85%] text-white drop-shadow-md'>
            Making Immigration Simple, Secure, and Accessible for All
          </p>
        </div>
      )
    }
  ]

  useEffect(() => {
    // Preload images to prevent blinking
    [...desktopSlides, ...mobileSlides].forEach((slide) => {
      const img = new Image()
      img.src = slide.image
    })

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % desktopSlides.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [desktopSlides.length])

  return (
    <div className='w-full'>
      {/* Desktop Version */}
      <div className='w-full hidden lg:block relative min-h-screen overflow-hidden'>
        {/* All desktop slides */}
        {desktopSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              className='w-full min-h-screen object-cover' 
              src={slide.image} 
              alt={`Nigeria Immigration Service - Slide ${index + 1}`} 
            />
            <div className='absolute inset-0 z-10'>
              <div className='w-11/12 container mx-auto'>
                <div className='animate-fade-in-up'>
                  {slide.content}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Version */}
      <div className='lg:hidden relative overflow-hidden'>
        {/* All mobile slides */}
        {mobileSlides.map((slide, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
          >
            <div className='relative'>
              <img 
                className='w-full' 
                src={slide.image} 
                alt={`Nigeria Immigration Service - Mobile Slide ${index + 1}`} 
              />
              <div className='animate-fade-in-up'>
                {slide.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero