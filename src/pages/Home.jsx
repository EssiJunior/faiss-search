// REACT IMPORTS
import { Link } from 'react-router-dom';

// MATERIAL UI
import { useMediaQuery } from "@mui/material";

// COMPONENTS AND UTILITIES
import withSplashScreen from '../hoc/withSplashScreen'

// STYLE
import '../styles/home.less'


function Home() {

  const is_lg = useMediaQuery('(max-width: 990px)')
  

  return (
    <div>
      <div className="home">
        <div className="content">
          <div className='first'/>
          <h1 className='gradient__text'>Welcome on <code>FAISS <span >Search</span></code></h1>
          <div className="divider"></div>
          <p>You want to search your image easily ? You are at the right place. Choose your option.</p>
          <div className="wrapper">
            <Link class="btn" to='/management'>
                Start managing ...
            </Link>
            <Link class="btn" to='/signin'>
                Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withSplashScreen(Home);  
