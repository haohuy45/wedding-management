import React, { Component } from 'react';

class BaoCaoDoanhSoItem extends Component {
    render() {
        var { baocaodoanhso, index} = this.props;
        var statusName = baocaodoanhso.status ? 'Còn hàng' : 'Hết hàng';
        var statusClass = baocaodoanhso.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{baocaodoanhso.id}</td>
                <td>{baocaodoanhso.name}</td>
                <td>{baocaodoanhso.price}</td>
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

export default BaoCaoDoanhSoItem;