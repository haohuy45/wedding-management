import React, { Component } from 'react';
import ListDatTiecCuoi from '../../components/ListDatTiecCuoi/ListDatTiecCuoi';
import DatTiecCuoiItem from '../../components/DatTiecCuoiItem/DatTiecCuoiItem';
import { Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import callApi from './../../utils/apiCaller';
import {Link} from 'react-router-dom'
import ListDichVu from '../../components/ListDichVu/ListDichVu';


class ListDatTiecCuoiPage extends Component {
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
        var {dattieccuois} = this.props;
        // var {dattieccuois} = this.state;
        
        
        return (

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/dattieccuoi/add" className="btn btn-info mb-10">
                    Thêm sản phẩm
              </Link>
                <ListDatTiecCuoi>
                    {this.showDatTiecCuoi(dattieccuois)}
                </ListDatTiecCuoi>
                <p>Các dịch vụ khác</p>
                <ListDichVu>
                    {this.showDatTiecCuoi(dattieccuois)}
                </ListDichVu>
            </div>
        );
    }
    showDatTiecCuoi = (dattieccuois) => {
        var result = null;
        if (dattieccuois > 0) {
            result = dattieccuois.map((dattieccuoi, index) => {
                return (
                    <DatTiecCuoiItem key={index}
                        dattieccuoi={dattieccuoi}
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

// export default connect(mapStateToProps, null) (ListDatTiecCuoiPage);
export default ListDatTiecCuoiPage;