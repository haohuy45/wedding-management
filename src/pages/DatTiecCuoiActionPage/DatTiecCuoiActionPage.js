import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DatTiecCuoiActionPage extends Component {
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
                        <Label for="soDienThoai">Số điện thoại</Label>
                        <Input type="number" name="soDienThoai" id="soDienThoai" placeholder="Số điện thoại" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="ngayThanhToan">Ngày</Label>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label >Ca</Label>
                        <Input type="text" name="tenCoDau" id="tenCoDau" placeholder="Ca" />
                    </FormGroup>
                    <FormGroup>
                        <Label >Sảnh</Label>
                        <Input type="text" name="sanh" id="tenCoDau" placeholder="Sảnh" />
                    </FormGroup>
                    <FormGroup>
                        <Label >Tiền đặt cọc</Label>
                        <Input type="text" name="tienDatCoc" id="tenCoDau" placeholder="Tiền đặt cọc" />
                    </FormGroup>
                    <FormGroup>
                        <Label >Số lượng bàn</Label>
                        <Input type="number" name="soLuongBan" id="soDienThoai" placeholder="Số lượng bàn" />
                    </FormGroup>
                    <FormGroup>
                        <Label >Số bàn dự trữ</Label>
                        <Input type="number" name="soBanDuTru" id="soDienThoai" placeholder="Số bàn dự trữ" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Đặt bàn</Label>
                        <Input type="number" name="datBan" id="soDienThoai" placeholder="Đặt bàn" />
                    </FormGroup>
                    <Button type="submit" className="btn btn-primary mr-10">Trở về</Button>
                    <Button type="submit" className="btn btn-primary">Lưu lại</Button>
                </Form>

            </div>
        );
    }

}

export default DatTiecCuoiActionPage;