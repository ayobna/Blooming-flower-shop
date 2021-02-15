import React, { Component } from 'react';
import axios from 'axios'
import { Container, Row } from 'react-bootstrap'
import { ProductSection, ProductTitle } from './style'
import IndexInfo from './IndexInfo';
import { withRouter } from 'react-router-dom'
class Product extends Component {

    state = {
        Products: []
    }


    componentDidMount() {
        axios.get('js/data.json').then(res => { this.setState({ Products: res.data.Products }) })
    }

    pageToGo = (id) => {
        if (id === 1) {
            this.props.history.push({
                pathname: "/flowers",
                state:{Product:this.props.tools,Name:"Tools"}
            })
        }
        else if (id === 2) {
            this.props.history.push({
                pathname: "/flowers",
                state:{Product:this.props.bouquets,Name:"Bouquets"}
            })
        }
        else if (id === 3) {
            this.props.history.push({
                pathname: "/flowers",
                state:{Product:this.props.planting,Name:"Plants"}
            })
        }
    }

    render() {

        const { Products } = this.state;


        return (
            <ProductSection>
                <Container>
                    <Row>
                        <div className="Image">
                            <ProductTitle>Our Products</ProductTitle>

                            {Products.map((ProductItem,index) =>

                                <IndexInfo ProductItem={ProductItem} key={index}  pageToGo={this.pageToGo} />)
                            }
                        </div>
                    </Row>
                </Container>
            </ProductSection>
        )
    }


}

export default withRouter(Product);
