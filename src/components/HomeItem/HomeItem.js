import React, { Component } from 'react';

class HomeItem extends Component {
    render() {
        var { dattieccuoi, index} = this.props;
        var statusName = dattieccuoi.status ? 'Còn hàng' : 'Hết hàng';
        var statusClass = dattieccuoi.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{dattieccuoi.id}</td>
                <td>{dattieccuoi.name}</td>
                <td>{dattieccuoi.price}</td>
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

export default HomeItem;