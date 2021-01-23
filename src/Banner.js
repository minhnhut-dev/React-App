import {Component} from "react";
import logo from './kmin.png';
import banner1 from './banner1.jpg';
import banner2 from './banner2.jpg';
import 'react-slideshow-image/dist/styles.css'
import {Fade} from 'react-slideshow-image';
const fadeImages = ['kmin.png', 'kmin.png', 'kmin.png'];
class Banner extends Component {

    render() {
        return (
            <div className="Banner">
                 <div className="content">
                    <img className="mySlide" src={logo}></img>
                </div>
                </div>
        );

    }
}

export default Banner;