import React,{useState,useEffect} from 'react';

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
        <>
            {images?.length > 0 && (
                <img src={images[carouselindex]} alt="carousel" />
            )}
            <button onClick={prevcarouselindex}>Previous</button><button className='ml-3' onClick={nextcarouselindex}>Next</button>
        </>
    )
}

export default Carouselimage;