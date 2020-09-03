import React, { Component } from 'react';

const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: ""
}
class login extends Component {
    state = initialState

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox"
        this.setState({
            [event.target.name] : isCheckbox
            ? event.target.checked
            :event.target.value
        })
    }

    validate = () =>{
        let emailError= ""
        let passwordError= ""
        if(!this.state.email){
            emailError = "*Please fill out this field"
        }
        
        else if (this.state.email !== "s@gmail.com"){
            passwordError =  "invalid credential"
        }
        if (!this.state.password){
            passwordError = "*Please fill out this field"
        }
        else if (this.state.password !== '123'){
            passwordError = "invalid credential"
        }
        if (emailError || passwordError){
            this.setState({emailError, passwordError})
            return false;
        }
        return true
    }
    handleSubmit = event =>{
        event.preventDefault()
        const isValid = this.validate()
        if (isValid){
            prompt('success')
            console.log(this.state)
            this.setState(initialState)
        }
    }
   
    render() {
        return (
            <div>
                {/* <!-- Home Popup Section --> */}
                <div class="modal fade subscribe_popup" id="onload-popup" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="ion-ios-close-empty"></i></span>
                                </button>
                                <div class="row no-gutters">
                                    <div class="col-sm-5">
                                        <div class="background_bg h-100" data-img-src={require("./assets/images/popup_img.jpg")}></div>
                                    </div>
                                    <div class="col-sm-7">
                                        <div class="popup_content">
                                            <div class="popup-text">
                                                <div class="heading_s4">
                                                    <h4>Subscribe and Get 25% Discount!</h4>
                                                </div>
                                                <p>Subscribe to the newsletter to receive updates about new products.</p>
                                            </div>
                                            <form method="post">
                                                <div class="form-group">
                                                    <input name="email" required type="email" class="form-control rounded-0" placeholder="Enter Your Email" />
                                                </div>
                                                <div class="form-group">
                                                    <button class="btn btn-fill-line btn-block text-uppercase rounded-0" title="Subscribe" type="submit">Subscribe</button>
                                                </div>
                                            </form>
                                            <div class="chek-form">
                                                <div class="custome-checkbox">
                                                    <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox3" value="" />
                                                    <label class="form-check-label" for="exampleCheckbox3"><span>Don't show this popup again!</span></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Screen Load Popup Section -->  */}

                {/* <!-- START SECTION BREADCRUMB --> */}
                <div class="breadcrumb_section bg_gray page-title-mini">
                    <div class="container">
                        {/* <!-- STRART CONTAINER --> */}
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="page-title">
                                    <h1>Login</h1>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <ol class="breadcrumb justify-content-md-end">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li class="breadcrumb-item active">Login</li>
                                </ol>
                            </div>
                        </div>
                        {/* </div><!-- END CONTAINER--> */}
                    </div>
                </div>
                {/* <!-- END SECTION BREADCRUMB --> */}

                {/* <!-- START MAIN CONTENT --> */}
                <div class="main_content">

                    {/* <!-- START LOGIN SECTION --> */}
                    <div class="login_register_wrap section">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-6 col-md-10">
                                    <div class="login_wrap">
                                        <div class="padding_eight_all bg-white">
                                            <div class="heading_s1">
                                                <h3>Login</h3>
                                            </div>
                                            <form method="post" onSubmit= {this.handleSubmit}>
                                                <div class="form-group">
                                                    <input type="text" required="" class="form-control" name="email" placeholder="Your Email" value={this.state.email} onChange={this.handleChange} />
                                                    <div style={{color: 'red', fontSize: '12px'}}>{this.state.emailError} </div>
                                                </div>
                                                <div class="form-group">
                                                    <input class="form-control" required="" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                                                    <div style={{color: 'red', fontSize: '12px'}}>{this.state.passwordError} </div>
                                                </div>
                                                <div class="login_footer form-group">
                                                    <div class="chek-form">
                                                        <div class="custome-checkbox">
                                                            <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                                                            <label class="form-check-label" for="exampleCheckbox1"><span>Remember me</span></label>
                                                        </div>
                                                    </div>
                                                    <a href="#">Forgot password?</a>
                                                </div>
                                                <div class="form-group">
                                                    <button type="submit" class="btn btn-fill-out btn-block" name="login">Log in</button>
                                                </div>
                                            </form>
                                            <div class="different_login">
                                                <span> or</span>
                                            </div>
                                            <ul class="btn-login list_none text-center">
                                                <li><a href="#" class="btn btn-facebook"><i class="ion-social-facebook"></i>Facebook</a></li>
                                                <li><a href="#" class="btn btn-google"><i class="ion-social-googleplus"></i>Google</a></li>
                                            </ul>
                                            <div class="form-note text-center">Don't Have an Account? <a href="signup.html">Sign up now</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END LOGIN SECTION --> */}

                   

                </div>
                {/* <!-- END MAIN CONTENT --> */}
                <a href="#" class="scrollup" style={{display: 'none'}}><i class="ion-ios-arrow-up"></i></a>
           
            </div>
        );
    }
}

export default login;