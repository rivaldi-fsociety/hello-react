import React, {Component} from 'react';
import TopNavbarComp from "../../component/LandingPageComponent/TopNavbarComp";
import BottomNavbarComp from "../../component/LandingPageComponent/BottomNavbarComp";

class Home extends Component{
    render(){
        return(
            <div>
                <TopNavbarComp/>
                {/* <BottomNavbarComp/> */}
            </div>
        )
    }
}

export default Home;