import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? 'active' : ''
        return (
          <li className={active}>
            <Link to={to} >
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  // // constructor(props) {
  // //   super(props);

  // //   this.toggle = this.toggle.bind(this);
  // //   this.state = {
  // //     isOpen: false
  // //   };
  // // }
  // // toggle() {
  // //   this.setState({
  // //     isOpen: !this.state.isOpen
  // //   });
  // // }
  // logout() {
  //   sessionStorage.setItem("userData", '');
  //   sessionStorage.clear();
  //   this.setState({ redirectToReferrer: true });
  // }

  render() {
    // if (this.state.redirectToReferrer) {
    //   return (<Redirect to={'/login'} />)
    // }
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Quản lý tiệc cưới</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Trang chủ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/dattieccuoi-list">Đặt tiệc cưới</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/hoadonthanhtoan-list">Hóa đơn thanh toán</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/baocaodoanhso-list">Báo cáo doanh số</NavLink>
              </NavItem>
              {/* {this.showMenus(menus)} */}

            </Nav>
          </Collapse>
        </Navbar>
        {/* <button type="button" onClick={this.logout} className="logout">Logout</button> */}
      </div>
    );
  }
  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  }

}

export default Menu