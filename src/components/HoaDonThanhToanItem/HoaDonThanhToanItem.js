import React, { Component } from 'react';

class HoaDonThanhToanItem extends Component {
    render() {
        var { hoadonthanhtoan, index} = this.props;
        var statusName = hoadonthanhtoan.status ? 'Còn hàng' : 'Hết hàng';
        var statusClass = hoadonthanhtoan.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{hoadonthanhtoan.id}</td>
                <td>{hoadonthanhtoan.name}</td>
                <td>{hoadonthanhtoan.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                <button type="button" className="btn btn-success mr-10">
                        Sửa
                    </button>
                    <button type="button" className="btn btn-danger">
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default HoaDonThanhToanItem;