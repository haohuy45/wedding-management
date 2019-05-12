import React, { Component } from 'react';

class HomeList extends Component {
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
                                <th>Tên sảnh</th>
                                <th>Loại sảnh</th>
                                <th>Số lượng bàn tối đa</th>
                                <th>Đơn giá bàn tối thiểu</th>
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

export default HomeList;