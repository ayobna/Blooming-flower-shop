import React from 'react';
import { AboutSection, AboutInfo, InfoTitle,InfoDir, InfoDesc} from './style'
import { withRouter} from 'react-router-dom';
const About = () => {
    return (
        <AboutSection>
              <div className="container">
            
                    <AboutInfo>
                        <InfoTitle>Welcome to Blooming</InfoTitle>
                        <InfoDir>Flowers and Gardening</InfoDir>
                        <InfoDesc>
                        our shop provide all the tool you will need in order to create and take care of your garden. our products are always of the high quality.
                    </InfoDesc>
                        <InfoDesc>
                        Of course we also provide the freshest and healthiest plants and bouquets. So you can start grow your flower plant or spices with the bast start possible or gift someone special beautiful flower bouquets, and of course decorate your home with!
                    </InfoDesc>
                    </AboutInfo>
            </div>
        </AboutSection>
    )
}

export default withRouter(About);
