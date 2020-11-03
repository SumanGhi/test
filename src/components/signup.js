import React, { Component } from 'react';
import axios from 'axios';

const initialState = {
    FirstName: "",
    LastName: "",
    email: "",
    district: "",
    address: "",
    DoB: "",
    gender: "",
    contactNo: "",
    password: "",
    rePassword: "",
    userName: "suman"
}
class signup extends Component {
    state = initialState

    handleAddress = () => {
        prompt("Hello")
    }

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
        let emailError, rePassError, error = ""
        let passwordError = ""
        let addressError, contactError, dateError, genderError =""
        if (!this.state.FirstName || !this.state.LastName) {
            nameError = "*Please fill out this field"
        } else if (!this.state.FirstName.match(/^[a-zA-Z]+$/) || !this.state.LastName.match(/^[a-zA-Z]+$/)){
            nameError = "*Only letters"
        }

        if(!this.state.address){
            addressError="*Please fill out this field"
        } 

        if(!this.state.contactNo){
            contactError="*Please fill out this field"
        } else if(!Number(this.state.contactNo) || this.state.contactNo.length != 10){
            contactError = "*invalid number"
        }

        let lastAtPos =this.state.email.lastIndexOf('@');
        let lastDotPos =this.state.email.lastIndexOf('.');
        if (!this.state.email) {
            emailError = "*Please fill out this field"
        }else if (!(lastAtPos < lastDotPos && lastAtPos > 0 &&this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
            emailError = "Email is not valid";
          }

        if (!this.state.password) {
            passwordError = "*Please fill out this field"
        } else if(this.state.password.length<8){
            passwordError = "*The password provided is not long enough."
        }

        if (!this.state.rePassword) {
            rePassError = "*Please fill out this field"
        } else if (this.state.password !== this.state.rePassword) {
            rePassError = "Password doesn't match"
        }

        if (!this.state.checkbox) {
            error = "*accept?"
        }

        if(!this.state.DoB){
            dateError = "*select DoB"
        }

        if(!this.state.gender){
            genderError = "*select gender"
        }

        
        if (nameError || passwordError || emailError || rePassError || error || addressError || contactError || dateError || genderError) {
            this.setState({ nameError, passwordError, emailError, rePassError, error, addressError, contactError, dateError, genderError })
            return false;
        }
        return true
    }
    handleSubmit = event => {
        event.preventDefault()
        const isValid = this.validate()
        if (isValid) {
            // console.log(this.state)
            axios
                .post(
                    "http://127.0.0.1:5000/user/save",
                    {
                        user: {
                            firstName: this.state.FirstName,
                            userName: this.state.userName,
                            lastName: this.state.LastName,
                            userEmail: this.state.email,
                            password: this.state.password,
                            address: {
                                address_1: this.state.address
                            },
                            contactNo: {
                                contact_1: this.state.contactNo
                            }, 
                            userGender: this.state.gender,
                            userDoB: this.state.DoB
                        }
                    }
                )
                .then(submit=>{
                    // this.setState(initialState)
                    console.log(submit)
                    this.props.history.push('/login') 
                })
                .catch(error => {
                    console.log(error)
                })
            

        }
    }
    handleUser=()=>{
        this.props.history.push('/admin')
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
                                        <div style={{float:'right'}}>
                                                <button style={{margin:'5px',color:'red'}} onClick={this.handleUser}>User</button>
                                                <button style={{margin:'5px',color:'red'}} >Customer</button>
                                            </div>
                                            <div class="heading_s1">
                                                <h3>Create an Account</h3>
                                            </div>
                                            <form method="post" onSubmit={this.handleSubmit}>
                                                <div class="form-group">
                                                <div style={{ display: "flex" }} >
                                                    <input type="text" style={{marginRight:"10px"}} value={this.state.FirstName} onChange={this.handleChange} required="" class="form-control" name="FirstName" placeholder="Enter Your FirstName" />
                                                    <input type="text" style={{marginLeft:"10px"}} value={this.state.LastName} onChange={this.handleChange} required="" class="form-control" name="LastName" placeholder="Enter Your LastName" />
                                                </div>
                                                    <div style={{ color: 'red', fontSize: '12px' }}>{this.state.nameError} </div>
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" value={this.state.email} onChange={this.handleChange} required="" class="form-control" name="email" placeholder="Enter Your Email" />
                                                    <div style={{ color: 'red', fontSize: '12px' }}>{this.state.emailError} </div>
                                                </div>
                                                
                                                <div class="form-group" >
                                                    <input class="form-control" value={this.state.address} onChange={this.handleChange} required="" name="address" placeholder="Address" />
                                                    {/* <div style={{ display: "flex" }} ><input class="form-control" style={{ width: "90%" }} value={this.state.address} onChange={this.handleChange} required="" name="address" placeholder="Address line 1" />
                                                    <button onClick={this.handleAddress} style={{marginLeft:"20px",color:"blue",fontSize:"20px"}}>+</button></div> */}

                                                    <div style={{ color: 'red', fontSize: '12px' }}>{this.state.addressError} </div>
                                                </div>
                                                <div style={{ display: "flex" }} >
                                                    <div class="form-group">
                                                        <input class="form-control" value={this.state.DoB} onChange={this.handleChange} required="" max="2005-12-31" type="date" name="DoB" />
                                                        <div style={{ color: 'red', fontSize: '12px' }}>{this.state.dateError} </div>
                                                    </div>
                                                    <div class="form-group" style={{marginLeft:"20px"}} value={this.state.gender} onChange={this.handleChange}>
                                                        <div class="form-check">
                                                            <label class="form-check-label">
                                                                <input type="radio" class="form-check-input" name="gender" value="male"/>Male
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <label class="form-check-label">
                                                                <input type="radio" class="form-check-input" name="gender" value="female"/>Female
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <label class="form-check-label">
                                                                <input type="radio" class="form-check-input" name="gender" value="other"/>Other
                                                            </label>
                                                        </div>
                                                        <div style={{ color: 'red', fontSize: '12px' }}>{this.state.genderError} </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <input class="form-control" value={this.state.contactNo} onChange={this.handleChange} required="" name="contactNo" placeholder="Contact" />
                                                    <div style={{ color: 'red', fontSize: '12px' }}>{this.state.contactError} </div>
                                                </div>
                                                <div class="form-group">
                                                    <input class="form-control" value={this.state.password} onChange={this.handleChange} required="" type="password" name="password" placeholder="Password" />
                                                    <div style={{ color: 'red', fontSize: '12px' }}>{this.state.passwordError} </div>
                                                </div>
                                                <div class="form-group">
                                                    <input class="form-control" value={this.state.rePassword} onChange={this.handleChange} required="" type="password" name="rePassword" placeholder="Confirm Password" />
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