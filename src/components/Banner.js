import React, {useState,useEffect} from 'react';
import './styles/Banner.scss';
import banner1 from './images/banner-img-1.jpeg';
import banner2 from './images/banner-img-2.jpeg';
import banner3 from './images/banner-img-3.jpeg';
import banner4 from './images/banner-img-4.jpeg';

const Banner = () => {
  const images = [banner1, banner2, banner3, banner4];

const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next image index and loop back to the beginning if needed
      const nextImageIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextImageIndex);
    }, 3000); // Change the image every 3 seconds

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);
  return (
    <div>
        <div className='banner'>
          <img src={images[currentImageIndex]} alt='img' className='banner-img' />
          <div className='banner-decription'>
            <h1>Gau Seva Dham</h1>
            <p>
            "Gau Seva Dham" is a term commonly associated with organizations and initiatives in India that focus on the welfare and protection of cows, often referred to as "Gau Mata" or the mother of all living creatures in Hinduism. These organizations work towards the betterment and care of cows, and their efforts encompass several aspects of cow welfare.
            </p>
            <button className='view-products'>View all Products</button>
          </div>
        </div>
    </div>
  )
}

export default Banner;