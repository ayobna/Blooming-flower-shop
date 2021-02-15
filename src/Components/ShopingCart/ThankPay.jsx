import React ,{useEffect} from 'react'
import { withRouter } from 'react-router-dom';
import {ThankYou} from './style'
function ThankPay(props) {

        useEffect(() => {
            const timer = setTimeout(() => {
                props.history.push({
                    pathname: '/',
                    });
            }, 4000);
            return () => clearTimeout(timer);
          }, [ props.history]);

    return (
       <ThankYou>       
            Thank you for buying!
        </ThankYou>
    )
}
export default withRouter(ThankPay)
