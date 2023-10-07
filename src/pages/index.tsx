import React, { useEffect, useState } from 'react'
import Header from "../components/Header"
import Text from "../components/Text"
import ScrollImages from '../components/Images'
import Icons from '../components/Icon'
import Image from '../components/Image'
import styles from '@/styles/Welcome.module.css'

export default function Welcome() {

  const [ images, setImages ] = useState<Element[]>() 
  const [ carousel, setCarousel ] = useState<HTMLDivElement | null>()
  let [ currentItem, setCurrentItem ] = useState<number>(0)

  useEffect(() => {
    setImages(Array.from(document.querySelectorAll('#images')))
    setCarousel(document.querySelector('#carousel') as HTMLDivElement)
  }, [])

  useEffect(() => {
   
    const scrollAndHighlight = () => {
      if (images && images[currentItem]) {
        const prevItem = document.querySelector(`.${styles.highlight}`);
        if (prevItem) {
          prevItem.classList.remove(`${styles.highlight}`);
        }
        
        const currentItemElement = images[currentItem];

        currentItemElement.classList.add(`${styles.highlight}`);
      }
    };

    scrollAndHighlight();
  }, [currentItem, images]);

  const handleLeftClick = () => {
    setCurrentItem((prevItem) => {
      let newIndex = prevItem - 1;
      if (newIndex < 0) {
        newIndex = images!.length - 1; 
      }
      return newIndex;
    });
    const firstImage = carousel!.querySelector('#images') as HTMLDivElement
    const firstImageWidth = firstImage.offsetWidth

    if (currentItem === 0) {
      carousel!.scrollLeft = firstImageWidth * (images!.length - 1);
    } else {
      carousel!.scrollLeft -= firstImageWidth;
    }
  }

  const handleRightClick = () => {
    setCurrentItem((prevItem) => {
      let newIndex = prevItem + 1;
      if (newIndex >= images!.length) {
        newIndex = 0; 
      }
      return newIndex;
    });

    const firstImage = carousel!.querySelector('#images') as HTMLDivElement
    const firstImageWidth = firstImage.offsetWidth

    if (currentItem === images!.length - 1) {
      carousel!.scrollLeft = 0;
    } else {
      carousel!.scrollLeft += firstImageWidth;
    }
  }

  const arrayImages = ['/world.jpg', '/world.jpg', '/world2.jpg', '/world3.jpg']
  
  return (
    <>
      <div className="bg-blueOcean">
        <Header id='top' justify_between='justify-between'/>
        <section className='pt-8 sm:pt-24 h-screen'>
          <Text elem='h1' className='text-2xl text-white sm:text-3xl text-center max-w-5xl m-auto'>
            Compartilhe. Leia. Conecte-se. O seu passaporte para um universo de histórias emocionantes.
          </Text>
          <div className='flex justify-center scroll-smooth pt-11 gap-8 relative w-[55%] m-auto items-center'>
              <div onClick={handleLeftClick} className='absolute left-[-10%]'>
                <Icons left className='w-16 cursor-pointer text-white' onClick={handleLeftClick}/>
              </div>
              <div className='flex overflow-x-hidden scroll-smooth gap-8 w-[100%]' id='carousel'>
                <ScrollImages images={arrayImages} className='max-w-sm h-80 w-64 snap-start' id='images'/>
              </div>
              <div onClick={handleRightClick} className='absolute right-[-10%]'>
                <Icons right className='w-16 cursor-pointer text-white' onClick={handleRightClick}/>
              </div>
          </div>
        </section>
        <section className='flex-col gap-8 pt-8 h-screen flex items-center sm:flex-row sm:gap-28'>
          <div className='flex text-center flex-col sm:w-1/2'>
            <Text elem='h2' className='text-3xl sm:text-5xl text-white font-sans'>
              Sua livraria online
            </Text>
            <Text elem='p' className='text-2xl sm:text-3xl text-white font-sans'>
              Armazene seus livros favoritos, leia com seus amigos, pesquise e descubra novos livros
            </Text>            
          </div>
            <Image 
              path='/library_img_site.jpg' 
              desc='An library ilustrating the functionality of the web site'
              className='w-[62%] h-[62%] sm:h-[71%] sm:w-[32%] object-cover'
            />
        </section>
      </div>
    </>
    )
}


