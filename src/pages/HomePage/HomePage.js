import React, { Component } from 'react';
import HomeItem from '../../components/HomeItem/HomeItem';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom'
import HomeList from '../../components/HomeList/HomeList';
import { Redirect } from 'react-router-dom';
import {Button} from 'reactstrap'

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirectToReferrer: false,
        };
        this.logout = this.logout.bind(this);
    
    }
    componentWillMount() {

        if (sessionStorage.getItem("userData")) {
            console.log("call user feed:")
        }

        else {
            this.setState({ redirectToReferrer: true });
        }
    }
    logout() {
        sessionStorage.setItem("userData", '');
        sessionStorage.clear();
        this.setState({ redirectToReferrer: true });
    }

    render() {
        var { homes } = this.props;
        var {dattieccuois} = this.state;
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/login'} />)}


            return (

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {/* <button type="button" onClick={this.logout} className="logout">Logout</button> */}
                    
                    <Link to="/home/add" className="btn btn-info mb-10 mr-10">
                        Thêm sản phẩm
                    </Link>
                    <Button type="submit" onClick={this.logout} className="btn btn-info mb-10">Logout</Button>
                    <HomeList>
                        {this.showHome(homes)}
                    </HomeList>
                    
                </div>
            );
        }
        showHome = (homes) => {
            var result = null;
            if (homes > 0) {
                result = homes.map((home, index) => {
                    return (
                        <HomeItem key={index}
                            home={home}
                            index={index} />
                    )
                });
            }
            return <Switch>{result}</Switch>
        }
    }

    // const mapStateToProps = state => {
    //     return {
    //         dattieccuois: state.dattieccuois
    //     }
    // }

    // export default connect(mapStateToProps, null) (HomeListPage);
    export default HomePage;