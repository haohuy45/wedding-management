import React, { Component } from 'react';
import BaoCaoDoanhSoItem from '../../components/BaoCaoDoanhSoItem/BaoCaoDoanhSoItem';
import { Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import callApi from './../../utils/apiCaller';
import {Link} from 'react-router-dom'
import BaoCaoDoanhSoList from '../../components/BaoCaoDoanhSoList/BaoCaoDoanhSoList';


class BaoCaoDoanhSoPage extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         dattieccuois: []
    //     }
    // }
    // componentDidMount(){
    //     callApi('dattieccuois', 'GET', null).then (res =>{
    //         this.setState({
    //             dattieccuois : res.data
    //         });
    //     });
    // }
    render() {
        var {baocaodoanhsos} = this.props;
        // var {dattieccuois} = this.state;
        
        
        return (

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/baocaodoanhso/add" className="btn btn-info mb-10">
                    Thêm sản phẩm
              </Link>
                <BaoCaoDoanhSoList>
                    {this.showBaoCaoDoanhSo(baocaodoanhsos)}
                </BaoCaoDoanhSoList>
            </div>
        );
    }
    showBaoCaoDoanhSo = (baocaodoanhsos) => {
        var result = null;
        if (baocaodoanhsos > 0) {
            result = baocaodoanhsos.map((baocaodoanhso, index) => {
                return (
                    <BaoCaoDoanhSoItem key={index}
                        baocaodoanhso={baocaodoanhso}
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

// export default connect(mapStateToProps, null) (baocaodoanhsoListPage);
export default BaoCaoDoanhSoPage;