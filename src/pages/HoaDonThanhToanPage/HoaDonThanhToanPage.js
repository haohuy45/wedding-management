import React, { Component } from 'react';
import HoaDonThanhToanItem from '../../components/HoaDonThanhToanItem/HoaDonThanhToanItem';
import { Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import callApi from './../../utils/apiCaller';
import {Link} from 'react-router-dom'
import HoaDonThanhToanList from '../../components/HoaDonThanhToanList/HoaDonThanhToanList';


class HoaDonThanhToanPage extends Component {
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
        var {hoadonthanhtoans} = this.props;
        // var {dattieccuois} = this.state;
        
        
        return (

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/hoadonthanhtoan/add" className="btn btn-info mb-10">
                    Thêm sản phẩm
              </Link>
                <HoaDonThanhToanList>
                    {this.showHoaDonThanhToan(hoadonthanhtoans)}
                </HoaDonThanhToanList>
            </div>
        );
    }
    showHoaDonThanhToan = (hoadonthanhtoans) => {
        var result = null;
        if (hoadonthanhtoans > 0) {
            result = hoadonthanhtoans.map((hoadonthanhtoan, index) => {
                return (
                    <HoaDonThanhToanItem key={index}
                        hoadonthanhtoan={hoadonthanhtoan}
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

// export default connect(mapStateToProps, null) (hoadonthanhtoanListPage);
export default HoaDonThanhToanPage;