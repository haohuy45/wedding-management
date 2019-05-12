import React, { Component } from 'react';
import { Label } from 'reactstrap';

class HoaDonThanhToanList extends Component {
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
                                <th>Dịch vụ</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th>Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
                <div className="panel-footer">
                    <div>
                        <Label for="tongTienBan">Tổng tiền bàn</Label>
                    </div>
                    <div>
                        <Label for="tongTienHoaDon">Tổng tiền hóa đơn</Label>
                    </div>
                    <div>
                        <Label for="tongTienDatCoc">Tiền đặt cọc</Label>
                    </div>
                    <div>
                        <Label for="conLai">Còn lại</Label>
                    </div>
                </div>
            </div>
        );
    }
}

export default HoaDonThanhToanList;