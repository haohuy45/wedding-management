import React, { Component } from 'react';

class ListDatTiecCuoi extends Component {
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
                                <th>Tên món ăn</th>
                                <th>Đơn giá</th>
                                <th>Ghi chú</th>
                                
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

export default ListDatTiecCuoi;