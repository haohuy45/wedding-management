import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Slider from "react-slick";

class HomeActionPage extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Form>
                    <FormGroup>
                        <Label for="donGiaToiThieu">Tên sảnh</Label>
                        <Input type="donGiaToiThieu" name="donGiaToiThieu" id="donGiaToiThieu" placeholder="Tên sảnh" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="loaiSanh">Loại sảnh</Label>
                        <Input type="select" name="select" id="loaiSanh">
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                            <option>E</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <label>Số lượng bàn tối đa</label>
                    <Slider {...settings}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                    </FormGroup>
                    <FormGroup>
                        <Label for="donGiaToiThieu">Đơn giá tối thiểu</Label>
                        <Input type="donGiaToiThieu" name="donGiaToiThieu" id="donGiaToiThieu" placeholder="Đơn giá tối thiểu" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="ghiChu">Ghi chú</Label>
                        <Input type="ghiChu" name="ghiChu" id="ghiChu" placeholder="Ghi chú" />
                    </FormGroup>
                    <Button type="submit" className="btn btn-info mr-10">Trở về</Button>
                    <Button type="submit" className="btn btn-success">Lưu lại</Button>
                </Form>

            </div>
        );
    }
}

export default HomeActionPage;