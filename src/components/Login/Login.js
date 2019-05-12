import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PostData } from '../services/PostData';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, Button } from 'mdbreact';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {

  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      redirect: false
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);

  }
  login() {
    if (this.state.username && this.state.password) {
      PostData('login', this.state).then((result) => {
        let responseJson = result;
        if (responseJson.userData) {
          sessionStorage.setItem('userData', responseJson);
          this.setState({ redirect: true });
        }

      });
    }

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {

    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/'} />)
    }

    if (sessionStorage.getItem('userData')) {
      return (<Redirect to={'/'} />)
    }

    return (
      <div className="row" id="Body">
        <div className="medium-5 columns left">
        <h4>Login</h4>
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
        <label>Password</label>
        <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
        <input type="submit" className="button success" value="Login" onClick={this.login}/>
        <a href="/signup">Registration</a>
        </div>
      </div>
      //   <MDBContainer>
      //   <MDBRow>
      //     <MDBCol md="6">
      //       <form>
      //         <p className="h5 text-center mb-4">Sign in</p>
      //         <div className="grey-text">
      //           <MDBInput
      //             label="Type your email"
      //             icon="envelope"
      //             group
      //             type="text"
      //             validate
      //             error="wrong"
      //             success="right"
      //             onChange={this.onChange}
      //           />
      //           <MDBInput
      //             label="Type your password"
      //             icon="lock"
      //             group
      //             type="password"
      //             validate
      //             onChange={this.onChange}
      //           />
      //         </div>
      //         <div className="text-center" >
      //           <Button type="submit" onClick={this.login} >Login</Button>
      //           {/* <input type="submit" className="button success" value="Login" onClick={this.login}/>
      //           <a href="/signup">Registration</a> */}
      //         </div>
      //       </form>
      //     </MDBCol>
      //   </MDBRow>
      // </MDBContainer>
      // <Form>
      //   <FormGroup>
      //     <Label >Username</Label>
      //     <Input type="text" name="username" placeholder="Username" onChange={this.onChange} />
      //   </FormGroup>
      //   <FormGroup>
      //     <Label >Password</Label>
      //     <Input type="password" name="password"  placeholder="Password" onChange={this.onChange} />
      //   </FormGroup>
      //   <Button type="submit" className="button success" value="Login" onClick={this.login}>Submit</Button>
      // </Form>
    );
  }
}

export default Login;