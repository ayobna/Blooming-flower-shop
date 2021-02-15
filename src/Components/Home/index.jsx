import React  from 'react';
import { HomeSection , HomeInformation , HomeTitle , HomeInfo , HomeDesc } from './style'

const Home = () => {
    return (
        
        <HomeSection>

            <div className="container">
                <HomeInformation>
                    <HomeTitle>Blooming</HomeTitle>
                    <HomeInfo >always colorful</HomeInfo>
                    <HomeDesc>
                        The place where you can find all you want in the gardening world with a kick of color.
                    </HomeDesc>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}

export default Home;
