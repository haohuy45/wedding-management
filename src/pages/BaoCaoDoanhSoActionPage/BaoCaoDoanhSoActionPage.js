import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class BaoCaoDoanhSoActionPage extends Component {
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
                        <Label for="thang">Tháng</Label>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                        />
                        <FormGroup>
                            <Label for="tongDoanhThu">Tổng doanh thu</Label>
                            <Input type="text" name="tongDoanhThu" id="tongDoanhThu" placeholder="Tổng doanh thu" />
                        </FormGroup>
                    </FormGroup>
                    <Button type="submit" className="btn btn-info mr-10">Trở về</Button>
                    <Button type="submit" className="btn btn-success">Lưu lại</Button>
                </Form>
            </div>
        );
    }
}

export default BaoCaoDoanhSoActionPage;