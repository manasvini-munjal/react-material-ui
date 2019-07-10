import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {NavLink} from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";
    
    class NavbarPage extends Component {
    state = {
      isOpen: false
    };
    
    toggleCollapse = () => {
      this.setState({ isOpen: !this.state.isOpen });
    }
    
    render() {
      return (
          <MDBNavbar color="black" dark >
            <MDBNavbarBrand>
              <strong className="white-text">Navbar</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink onClick={this.toggleCollapse}  exact to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink onClick={this.toggleCollapse} exact to="/account">Accounts</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink onClick={this.toggleCollapse} exact to="/contact">Budgets</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink  onClick={this.toggleCollapse} exact to="/category">Categories</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink onClick={this.toggleCollapse} exact to="/posts">Transactions</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className="mr-2">Dropdown</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
               
                      <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBFormInline waves>
                    <div className="md-form my-0">
                      <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                  </MDBFormInline>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        );
      }
    }

    export default NavbarPage;

// const NavBar = () => {
//     return(
//         <div>
//             <AppBar position="static">
//                 <Toolbar>
//                    <Typography variant="title" color="inherit">
//                     Budgeting Dashboard 
                    
                   
         
//           <NavLink activeClassName="is-active" exact to='/'>Home</NavLink> 
//       <NavLink activeClassName="is-active" exact to='/account'>Accounts</NavLink> 
//       <NavLink activeClassName="is-active" exact to='/contact'>Budgets</NavLink> 
//       <NavLink activeClassName="is-active"  exact to='/category'>Categories</NavLink>
//       <NavLink activeClassName="is-active"  exact to='/posts'>Transactions</NavLink>
 

//                    </Typography>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     );
// }

// export default NavBar;