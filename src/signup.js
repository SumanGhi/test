import React, { Component } from 'react';
import axios from 'axios';

const initialState = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    nameError: "",
    passwordError: "",
    emailError: "",
    rePassError: "",
    checkbox: "",
    error: ""
}
class signup extends Component {
    state = initialState

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox"
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        })
    }

    validate = () => {
        let nameError = ""
        let emailError , rePassError, error = ""
        let passwordError = ""
        if (!this.state.name) {
            nameError = "*Please fill out this field"
        }
        if (!this.state.email) {
            emailError = "*Please fill out this field"
        }
        if (!this.state.password ) {
            passwordError = "*Please fill out this field"
        }
        if (!this.state.rePassword) {
            rePassError = "*Please fill out this field"
        }
        if(!this.state.checkbox){
            error = "*accept?"
        }

        else if (this.state.password !== this.state.rePassword) {
            rePassError = "Password doesn't match"
        }
        if (nameError || passwordError || emailError || rePassError || error ) {
            this.setState({ nameError ,passwordError , emailError , rePassError, error  })
            return false;
        }
        return true
    }
    handleSubmit = event => {
        event.preventDefault()
        const isValid = this.validate()
        if (isValid) {
            console.log(this.state)
            axios
            .post(
                "http://localhost:3000/signup",
                {
                    user: {
                        name: this.state.name,
                        email: this.state.email,
                        password: this.state.password
                    }
                }
            )
            .catch(error=>{
                console.log("registration error")
            })
            this.setState(initialState)
            this.props.history.push('/login')

        }
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
                                    <h1>Register</h1>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <ol class="breadcrumb justify-content-md-end">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li class="breadcrumb-item active">Register</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END CONTAINER--> */}
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
                                                <h3>Create an Account</h3>
                                            </div>
                                            <form method="post" onSubmit={this.handleSubmit}>
                                                <div class="form-group">
                                                    <input type="text"  value={this.state.name} onChange={this.handleChange}  required="" class="form-control" name="name" placeholder="Enter Your Name" />
                                                    <div style={{ color: 'red', fontSize: '12px' }}>{this.state.nameError} </div>
                                                </div>
                                                <div class="form-group">
                                                    <input type="text"  value={this.state.email} onChange={this.handleChange}  required="" class="form-control" name="email" placeholder="Enter Your Email" />
                                                    <div style={{ color: 'red', fontSize: '12px' }}>{this.state.emailError} </div>
                                                </div>
                                                <div class="form-group">
                                                    <input class="form-control"  value={this.state.password} onChange={this.handleChange}  required="" type="password" name="password" placeholder="Password" />
                                                    <div style={{ color: 'red', fontSize: '12px' }}>{this.state.passwordError} </div>
                                                </div>
                                                <div class="form-group">
                                                    <input class="form-control"  value={this.state.rePassword} onChange={this.handleChange}  required="" type="password" name="rePassword" placeholder="Confirm Password" />
                                                    <div style={{ color: 'red', fontSize: '12px' }}>{this.state.rePassError} </div>
                                                </div>
                                                <div class="login_footer form-group">
                                                    <div class="chek-form">
                                                        <div class="custome-checkbox">
                                                            <input class="form-check-input" onChange={this.handleChange} type="checkbox" name="checkbox" id="exampleCheckbox2" value="" />
                                                            <label class="form-check-label" for="exampleCheckbox2"><span>I agree to terms &amp; Policy.</span></label>
                                                            <div style={{ color: 'red', fontSize: '12px' }}>{this.state.error} </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <button type="submit" class="btn btn-fill-out btn-block" name="register">Register</button>
                                                </div>
                                            </form>
                                            <div class="different_login">
                                                <span> or</span>
                                            </div>
                                            <ul class="btn-login list_none text-center">
                                                <li><a href="#" class="btn btn-facebook"><i class="ion-social-facebook"></i>Facebook</a></li>
                                                <li><a href="#" class="btn btn-google"><i class="ion-social-googleplus"></i>Google</a></li>
                                            </ul>
                                            <div class="form-note text-center">Already have an account? <a href="login.html">Log in</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END LOGIN SECTION --> */}
                </div>
                {/* <!-- END MAIN CONTENT --> */}

            </div>
        );
    }
}

export default signup;