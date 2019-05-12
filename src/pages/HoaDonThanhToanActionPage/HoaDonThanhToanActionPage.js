import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class HoaDonThanhToanActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(date) {
        this.setState({
          startDate: date
        });
      }
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Form>
                    <FormGroup>
                        <Label for="tenCoDau">Tên chú rể</Label>
                        <Input type="text" name="tenCoDau" id="tenCoDau" placeholder="Tên chú rể" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="tenCoDau">Tên cô dâu</Label>
                        <Input type="text" name="tenCoDau" id="tenCoDau" placeholder="Tên cô dâu" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="ngayThanhToan">Ngày thanh toán</Label>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="donGiaToiThieu">Đơn giá tối thiểu</Label>
                        <Input type="donGiaToiThieu" name="donGiaToiThieu" id="donGiaToiThieu" placeholder="Đơn giá tối thiểu" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="tongTienBan">Ghi chú</Label>
                        <Input type="tongTienBan" name="tongTienBan" id="tongTienBan" placeholder="Ghi chú" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="soLuongBan">Số lượng bàn</Label>
                        <Input type="soLuongBan" name="soLuongBan" id="soLuongBan" placeholder="Số lượng bàn" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="donGiaBan">Đơn giá bàn</Label>
                        <Input type="donGiaBan" name="donGiaBan" id="donGiaBan" placeholder="Đơn giá bàn" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="tongTienBan">Tổng tiền bàn</Label>
                        <Input type="tongTienBan" name="tongTienBan" id="tongTienBan" placeholder="Tổng tiền bàn" />
                    </FormGroup>
                    <Button type="submit" className="btn btn-info mr-10">Trở về</Button>
                    <Button type="submit" className="btn btn-success">Lưu lại</Button>
                </Form>
            </div>
        );
    }
}

export default HoaDonThanhToanActionPage;