// REACT IMPORTS
import { Link } from 'react-router-dom';

// MATERIAL UI
import { useMediaQuery } from "@mui/material";

// COMPONENTS AND UTILITIES
import withSplashScreen from '../hoc/withSplashScreen'

// STYLE
import '../styles/home.less'
import { useState } from 'react';


function Home() {

  const is_lg = useMediaQuery('(max-width: 990px)')
  const [images, setImages] = useState([])

    //Widget to select images for room creation 
    function showWidget(e) {
      e.preventDefault()

      const widget = window.cloudinary.createUploadWidget(
          {
              cloudName: "dld2niqwt",
              uploadPreset: "oxxf82pj"
          },
          (error, result) => {
              if (!error && result.event === "success") {
                  setImages((prev) => [...prev, { url: result.info.url, public_id: result.info.public_id }]);
              }
              if(error){
                  console.log(error);
              }
          }
      );
      widget.open();
  }

  return (
    <div>
      <div className="home">
        <div className="content">
          <div className='first'/>
          <h1 className='gradient__text'>Welcome on <code>FAISS <span >Search</span></code></h1>
          <div className="divider" style={{marginBottom:'2.5rem'}}></div>
          <p>You want to search your image easily ? You are at the right place. Choose your option.</p>
          <div className="wrapper">
            <button className="btn" onClick={(e) => showWidget(e)}>
                Select image(s)
            </button>
          </div>
          
          <div className="images-preview-container">
              {images.map((image, index) => (
                  <div className="image-preview" key={index}>
                      <img src={image.url} alt=''/>
                  </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default withSplashScreen(Home);  
