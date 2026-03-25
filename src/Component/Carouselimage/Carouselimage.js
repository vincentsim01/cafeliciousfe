import React,{useState,useEffect} from 'react';
import './Carouselimage.css'

const Carouselimage = ({images}) => {
    let [carouselindex, setcarouselindex]=useState(0);
    function prevcarouselindex(){
        if(carouselindex===0){
            return;
        }
        setcarouselindex((prev)=>(prev - 1 + images.length) % images.length)
    }
      if (!images || images.length === 0) {
        return <p>No images</p>;
    }


    function nextcarouselindex(){
        setcarouselindex((prev)=>(prev + 1) % images.length)
    }

    return(
        <div id='carouselcontainer'>
            <h1 className='text-4xl'>GALLERY</h1>
            {images?.length > 0 && (
                <img className='theimage' src={images[carouselindex]} alt="carousel" />
            )}
            <div id='buttoncontainer'>
                  <button onClick={prevcarouselindex} id='prevbutton'>Previous</button><button className='ml-3' onClick={nextcarouselindex} id='nextbutton'>Next</button>
            </div>
          
        </div>
    )
}

export default Carouselimage;