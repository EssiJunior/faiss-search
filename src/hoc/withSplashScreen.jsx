// REACT IMPORTS
import { Component } from 'react'

// COMPONENTS
import Loader from '../components/Loader/Loader'

// STYLE
import './splash_screen.less'

// ASSETS
import logo from "../assets/logo.png"

const SplashContent = () => {
    return (
        <div className='splash'>
            <img src={logo} alt="logo" loading='lazy'/>
            <h2>Search your images easily</h2>
            <Loader />
        </div>
    )
}

export default function withSplashScreen(WrappedComponent) {
    // eslint-disable-next-line react/display-name
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            try {
                // Put here your await requests/ API requests
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 6500)
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            // while checking user session, show "loading" message
            if (this.state.loading) return SplashContent();

            // otherwise, show the desired route
            return <WrappedComponent {...this.props} />;
        }
    };
}
