import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import MetisMenu from "metismenujs";

import SimpleBar from "simplebar-react";

const SidebarContent = props => {
  return (
    <div id="sidebar-menu">
      <ul className="metismenu list-unstyled" id="side-menu">
        <li className="menu-title">Main</li>

        <li>
          <Link to="/admin/dashboard" className="waves-effect">
            <i className="ti-home"></i>
            <span className="badge badge-pill badge-primary float-right">
              2
            </span>
            <span>Dashboard</span>
          </Link>
        </li>

        <li>
          <Link to="/admin/calendar" className=" waves-effect">
            <i className="ti-calendar"></i>
            <span>Calendar</span>
          </Link>
        </li>

        <li>
          <Link to="/admin/#" className="has-arrow waves-effect">
            <i className="ti-email"></i>
            <span>Email</span>
          </Link>
          <ul className="sub-menu" aria-expanded="false">
            <li>
              <Link to="/admin/email-inbox">Inbox</Link>
            </li>
            <li>
              <Link to="/admin/email-read">Email Read</Link>
            </li>
            <li>
              <Link to="/admin/email-compose">Email Compose</Link>
            </li>
          </ul>
        </li>

        <li className="menu-title">Components</li>
        <li>
          <Link to="/admin/#" className="has-arrow waves-effect">
            <i className="mdi mdi-food-apple-outline"></i>
            <span>Meals</span>
          </Link>
          <ul className="sub-menu" aria-expanded="false">
            <li>
              <Link to="/admin/meals">View Meals</Link>
            </li>
            <li>
              <Link to="/admin/meals/create">Create a New Meal</Link>
            </li>
            <li>
              <Link to="/admin/diet">Diet</Link>
            </li>
            {/* <li>
              <Link to="ui-cards">Cards</Link>
            </li>
            <li>
              <Link to="ui-carousel">Carousel</Link>
            </li>
            <li>
              <Link to="ui-dropdowns">Dropdowns</Link>
            </li>
            <li>
              <Link to="ui-grid">Grid</Link>
            </li>
            <li>
              <Link to="ui-images">Images</Link>
            </li>
            <li>
              <Link to="ui-lightbox">Lightbox</Link>
            </li>
            <li>
              <Link to="ui-modals">Modals</Link>
            </li>
            <li>
              <Link to="ui-rangeslider">Range Slider</Link>
            </li>
            <li>
              <Link to="ui-session-timeout">Session Timeout</Link>
            </li>
            <li>
              <Link to="ui-progressbars">Progress Bars</Link>
            </li>
            <li>
              <Link to="ui-sweet-alert">Sweet-Alert</Link>
            </li>
            <li>
              <Link to="ui-tabs-accordions">Tabs &amp; Accordions</Link>
            </li>
            <li>
              <Link to="ui-typography">Typography</Link>
            </li>
            <li>
              <Link to="ui-video">Video</Link>
            </li>
            <li>
              <Link to="ui-general">General</Link>
            </li>
            <li>
              <Link to="ui-colors">Colors</Link>
            </li>
            <li>
              <Link to="ui-rating">Rating</Link>
            </li> */}
          </ul>
        </li>

        <li>
          <Link to="/admin/#" className="has-arrow waves-effect">
            <i className="mdi mdi-book-open-page-variant"></i>
            <span>Plans</span>
          </Link>
          <ul className="sub-menu" aria-expanded="false">
            <li>
              <Link to="/admin/diet">Diet</Link>
            </li>
            <li>
              <Link to="form-elements">Form Elements</Link>
            </li>
            <li>
              <Link to="form-validation">Form Validation</Link>
            </li>
            <li>
              <Link to="form-advanced">Form Advanced</Link>
            </li>
            <li>
              <Link to="form-editors">Form Editors</Link>
            </li>
            <li>
              <Link to="form-uploads">Form File Upload</Link>
            </li>
            <li>
              <Link to="form-xeditable">Form Xeditable</Link>
            </li>
            <li>
              <Link to="form-repeater">Form Repeater</Link>
            </li>
            <li>
              <Link to="form-wizard">Form Wizard</Link>
            </li>
            <li>
              <Link to="form-mask">Form Mask</Link>
            </li>
          </ul>
        </li>


        <li>
          <Link to="/admin/#" className="waves-effect">
            <i className="ti-receipt"></i>
            <span className="badge badge-pill badge-success float-right">
              6
            </span>
            <span>Forms</span>
          </Link>
          <ul className="sub-menu" aria-expanded="false">
            <li>
              <Link to="form-elements">Form Elements</Link>
            </li>
            <li>
              <Link to="form-validation">Form Validation</Link>
            </li>
            <li>
              <Link to="form-advanced">Form Advanced</Link>
            </li>
            <li>
              <Link to="form-editors">Form Editors</Link>
            </li>
            <li>
              <Link to="form-uploads">Form File Upload</Link>
            </li>
            <li>
              <Link to="form-xeditable">Form Xeditable</Link>
            </li>
            <li>
              <Link to="form-repeater">Form Repeater</Link>
            </li>
            <li>
              <Link to="form-wizard">Form Wizard</Link>
            </li>
            <li>
              <Link to="form-mask">Form Mask</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/admin/#" className="has-arrow waves-effect">
            <i className="ti-pie-chart"></i>
            <span>Charts</span>
          </Link>
          <ul className="sub-menu" aria-expanded="false">
            <li>
              <Link to="charts-chartist">Chartist Chart</Link>
            </li>
            <li>
              <Link to="e-charts">E Chart</Link>
            </li>
            <li>
              <Link to="charts-chartjs">Chartjs Chart</Link>
            </li>
            <li>
              <Link to="apex-chart">Apex Chart</Link>
            </li>
            <li>
              <Link to="charts-sparkline">Sparkline Chart</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/admin/#" className="has-arrow waves-effect">
            <i className="ti-view-grid"></i>
            <span>Tables</span>
          </Link>
          <ul className="sub-menu" aria-expanded="false">
            <li>
              <Link to="tables-basic">Basic Tables</Link>
            </li>
            <li>
              <Link to="tables-datatable">Data Table</Link>
            </li>
            <li>
              <Link to="tables-responsive">Responsive Table</Link>
            </li>
            <li>
              <Link to="tables-editable">Editable Table</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/admin/#" className="has-arrow waves-effect">
            <i className="ti-face-smile"></i>
            <span>Icons</span>
          </Link>
          <ul className="sub-menu" aria-expanded="false">
            <li>
              <Link to="icons-material">Material Design</Link>
            </li>
            <li>
              <Link to="icons-fontawesome">Font Awesome</Link>
            </li>
            <li>
              <Link to="icons-ion">Ion Icons</Link>
            </li>
            <li>
              <Link to="icons-themify">Themify Icons</Link>
            </li>
            <li>
              <Link to="icons-dripicons">Dripicons</Link>
            </li>
            <li>
              <Link to="icons-typicons">Typicons Icons</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/admin/#" className="waves-effect">
            <i className="ti-location-pin"></i>
            <span className="badge badge-pill badge-danger float-right">2</span>
            <span>Maps</span>
          </Link>
          <ul className="sub-menu" aria-expanded="false">
            <li>
              <Link to="maps-google"> Google Map</Link>
            </li>
            <li>
              <Link to="maps-vector"> Vector Map</Link>
            </li>
          </ul>
        </li>

        <li className="menu-title">Extras</li>

        <li>
          <Link to="/admin/#" className="has-arrow waves-effect">
            <i className="ti-archive"></i>
            <span> Authentication </span>
          </Link>
          <ul className="sub-menu" aria-expanded="false">
            <li>
              <Link to="pages-login-2">Login 2</Link>
            </li>
            <li>
              <Link to="pages-register-2">Register 2</Link>
            </li>
            <li>
              <Link to="pages-recoverpw-2">Recover Password 2</Link>
            </li>
            <li>
              <Link to="pages-lock-screen-2">Lock Screen 2</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/admin/#" className="has-arrow waves-effect">
            <i className="ti-support"></i>
            <span> Extra Pages </span>
          </Link>
          <ul className="sub-menu" aria-expanded="false">
            <li>
              <Link to="pages-timeline">Timeline</Link>
            </li>
            <li>
              <Link to="pages-invoice">Invoice</Link>
            </li>
            <li>
              <Link to="pages-directory">Directory</Link>
            </li>
            <li>
              <Link to="pages-blank">Blank Page</Link>
            </li>
            <li>
              <Link to="pages-404">Error 404</Link>
            </li>
            <li>
              <Link to="pages-500">Error 500</Link>
            </li>
            <li>
              <Link to="pages-pricing">Pricing</Link>
            </li>
            <li>
              <Link to="pages-gallery">Gallery</Link>
            </li>
            <li>
              <Link to="pages-maintenance">Maintenance</Link>
            </li>
            <li>
              <Link to="pages-comingsoon">Coming Soon</Link>
            </li>
            <li>
              <Link to="pages-faq">FAQs</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/admin/#" className="has-arrow waves-effect">
            <i className="ti-bookmark-alt"></i>
            <span> Email Templates </span>
          </Link>
          <ul className="sub-menu" aria-expanded="false">
            <li>
              <Link to="/admin/email-template-basic">Basic Action Email</Link>
            </li>
            <li>
              <Link to="/admin/email-template-Alert">Alert Email</Link>
            </li>
            <li>
              <Link to="/admin/email-template-Billing">Billing Email</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/admin/#" className="has-arrow waves-effect">
            <i className="ti-more"></i>
            <span>Multi Level</span>
          </Link>
          <ul className="sub-menu" aria-expanded="true">
            <li>
              <Link to="/admin/#">Level 1.1</Link>
            </li>
            <li>
              <Link to="/admin/#" className="has-arrow">
                Level 1.2
              </Link>
              <ul className="sub-menu" aria-expanded="true">
                <li>
                  <Link to="/admin/#">Level 2.1</Link>
                </li>
                <li>
                  <Link to="/admin/#">Level 2.2</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.initMenu();
  }

  componentDidUpdate(prevProps) {
    if (this.props.type !== prevProps.type) {
      this.initMenu();
    }
  }

  initMenu() {
    if (this.props.type !== "condensed" || this.props.isMobile) {
      new MetisMenu("#side-menu");

      var matchingMenuItem = null;
      var ul = document.getElementById("side-menu");
      var items = ul.getElementsByTagName("a");
      for (var i = 0; i < items.length; ++i) {
        if (this.props.location.pathname === items[i].pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }
      if (matchingMenuItem) {
        this.activateParentDropdown(matchingMenuItem);
      }
    }
  }

  activateParentDropdown = item => {
    item.classList.add("mm-active");
    const parent = item.parentElement;

    if (parent) {
      parent.classList.add("mm-active"); // li
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show");

        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add("mm-active");
          }
        }
      }
      return false;
    }
    return false;
  };

  render() {
    return (
      <React.Fragment>
        {this.props.type !== "condensed" ? (
          <SimpleBar style={{ maxHeight: "100%" }}>
            <SidebarContent />
          </SimpleBar>
        ) : (
          <SidebarContent />
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(Sidebar);
