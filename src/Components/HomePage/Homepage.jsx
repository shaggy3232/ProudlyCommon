import { Component } from 'react';
import "./Homepage.css"
import GlassmorphicNavbar from '../GlassmorphicNavbar/GlassmorphicNavbar';
import HeroBanner from '../HeroBanner/HeroBanner';




class Homepage extends Component {
    render(){
        return(
            <div className = "bg" >
                <GlassmorphicNavbar/>
                <HeroBanner/>
            </div>

        )
    }
}
export default Homepage