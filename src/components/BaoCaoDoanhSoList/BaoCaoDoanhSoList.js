import React, { Component } from 'react';
import { Label } from 'reactstrap';

class BaoCaoDoanhSoList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Đặt tiệc cưới</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Ngày</th>
                                <th>Số lượng tiệc cưới</th>
                                <th>Doanh thu</th>
                                <th>Tỉ lệ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default BaoCaoDoanhSoList;