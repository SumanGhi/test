import React, { Component } from 'react'
import data from '../myList.json'

export default class viewCart extends Component {

    state = {
        list: []
    }
    addItem=()=>{
        data.cart.map((cart)=>{
        this.setState((state) =>{
            const list = [...state.list,cart.quantity]
            return {list}
        })
    })
    }
    componentDidMount(){
        this.addItem()
    }
    handleMinus = i => {
        this.setState((state) =>{
            const list = state.list.map((item,j) =>{
                if(item<2){
                    return item
                }
                if (j==i){
                return (item-1)
                }
                else{
                    return item
                }
            })
            return {list}
            
        })
    
    }
    handlePlus = i => {
        this.setState((state) =>{
            const list = state.list.map((item,j) =>{
                if (j==i){
                return (item+1)
                }
                else{
                    return item
                }
            })
            return {list}
            
        })
    }
    render() {
        return (
            <div>
                {/* <!-- START SECTION BREADCRUMB --> */}
                <div class="breadcrumb_section bg_gray page-title-mini">
                    <div class="container">
                        {/* <!-- STRART CONTAINER --> */}
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="page-title">
                                    <h1>View Cart</h1>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <ol class="breadcrumb justify-content-md-end">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li class="breadcrumb-item active">View Cart</li>
                                </ol>
                            </div>
                        </div>
                        {/* </div><!-- END CONTAINER--> */}
                    </div>
                </div>
                {/* <!-- END SECTION BREADCRUMB --> */}

                <div style={{ margin: '50px' }}>
                {this.state.list.map((cart,index) =>
                
                <div class="view-cart-item" key={index}>
                        <div class="row">
                            <div class="col-xs-4 col-sm-2">
                                <img class="image" src="assets/images/ghajini .jpg" alt="el_img2" height="100px" width="150px" />
                            </div>
                            <div class="col-xs-8 col-sm-10" style={{ paddingTop: '30px' }}>
                                <h4>Paracitamol</h4>
                                <h6 style={{ opacity: '0.5' }}>This medicine is used to cure sick people.</h6>
                            </div>
                        </div>
                        <div style={{ marginTop: '20px' }}>

                            <div class="row">
                                <div class="col-xs-4 col-sm-3"><h5>Saving: Rs 10</h5>Remove</div>
                                <div class="col-xs-8 col-sm-9" >
                                    <h5>Total Price: Rs 100</h5>
                                    <div style={{ display: 'flex' }} >
                                        
                                        <div onClick={this.handleMinus.bind(this, index)}> <img src="assets/images/minus-cart.png" alt="" height="32px" width="32px" /></div>
                                        <div style={{ margin: '0 20px 0 20px', fontSize: '20px' }}>{cart}</div>
                                        <div onClick={this.handlePlus.bind(this, index)}><img src="assets/images/plus-cart.png" alt="" height="32px" width="32px" /></div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                )}


                    
                </div>
            </div>
        )
    }
}
