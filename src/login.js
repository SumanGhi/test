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
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        })
    }

    validate = (props) => {
        let emailError = ""
        let passwordError = ""
        if (!this.state.email) {
            emailError = "*Please fill out this field"
        }

        else if (this.state.email !== this.props.login.email) {
            passwordError = "invalid credential"
        }
        if (!this.state.password) {
            passwordError = "*Please fill out this field"
        }
        else if (this.state.password !== this.props.login.password) {
            passwordError = "invalid credential"
        }
        if (emailError || passwordError) {
            this.setState({ emailError, passwordError })
            return false;
        }
        return true
    }
    handleSubmit = event => {
        event.preventDefault()
        const isValid = this.validate()
        if (isValid) {
            console.log(this.state)
            this.setState(initialState)
            this.props.history.push('/index')
            this.props.history.go('/index')
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
                                            <form method="POST" onSubmit={this.handleSubmit}>
                                                <div class="form-group">
                                                    <input type="text" required="" class="form-control" name="email" placeholder="Your Email" value={this.state.email} onChange={this.handleChange} />
                                                    <div style={{ color: 'red', fontSize: '12px' }}>{this.state.emailError} </div>
                                                </div>
                                                <div class="form-group">
                                                    <input class="form-control" required="" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                                                    <div style={{ color: 'red', fontSize: '12px' }}>{this.state.passwordError} </div>
                                                </div>
                                                <div class="login_footer form-group">
                                                    <div class="chek-form">
                                                        <div class="custome-checkbox">
                                                            <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                                                            <label class="form-check-label" htmlFor="exampleCheckbox1"><span>Remember me</span></label>
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
                                            <div class="form-note text-center">Don't Have an Account? <a href="signup">Sign up now</a></div>
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

export default login;