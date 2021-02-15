import React from 'react'
import { Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';
function FeedbackInfo(props) {

function BuyProduct() {
    console.log(props.tools)
    debugger
   if(props.feedInfo.Img.indexOf('tools')!==-1){
   props.history.push({
    pathname: "/flowers",
    state:{Product:props.tools,Name:"Tools"}
        });
   }else if(props.feedInfo.Img.indexOf('bouquets')!==-1){
    props.history.push({
        pathname: "/flowers",
        state:{Product:props.bouquets,Name:"bouquets"}
        });
   }else  {
    props.history.push({
        pathname: "/flowers",
        state:{Product:props.planting,Name:"plants"}
        });
   }
}

    return (
        <div>
              <Button  type="submit" onClick={BuyProduct} >Buy the product</Button> 
        </div>
    )
}

export default withRouter(FeedbackInfo)
