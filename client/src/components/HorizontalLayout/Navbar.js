import React, { Component } from "react";
import { Collapse } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import classname from "classnames";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
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

  activateParentDropdown = item => {
    item.classList.add("active");
    const parent = item.parentElement;

    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
          }
        }
      }
    }
    return false;
  };
  render() {
    return (
      <React.Fragment>
        <div className="topnav">
          <div className="container-fluid">
            <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
              <Collapse
                isOpen={this.props.menuOpen}
                className="navbar-collapse"
              >
                <div id="navigation">
                  <ul className="navbar-nav">
                  <li className="menu-title">Main</li>

{/* <li>
  <Link to="/admin" className="waves-effect">
    <i className="ti-home"></i>
    <span className="badge badge-pill badge-primary float-right">
      2
    </span>
    <span>Dashboard</span>
  </Link>
</li> */}

<li>
  <Link to="/admin/weekly-selection" className=" waves-effect">
    <i className="ti-calendar"></i>
    <span>Weekly Selection</span>
  </Link>
</li>

<li>
  <Link to="/admin/orders" className=" waves-effect">
    <i className="mdi mdi-note-outline"></i>
    <span>Orders</span>
  </Link>
</li>

{/* <li>
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
</li> */}

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
      <Link to="/admin/plans">Plans</Link>
    </li>
    {/* <li>
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
    </li> */}
  </ul>
</li>

<li>
  <Link to="/admin/#" className="has-arrow waves-effect">
    <i className="mdi mdi-human"></i>
    <span>Users</span>
  </Link>
  <ul className="sub-menu" aria-expanded="false">
    <li>
      <Link to="/admin/users">View Users</Link>
    </li>
    <li>
      <Link to="/admin/reviews">Users' Reviews</Link>
    </li>
    <li>
      <Link to="/admin/tips">Users' Tips</Link>
    </li>
    <li>
      <Link to="/admin/comments">Users' Comments</Link>
    </li>
  </ul>
</li>

<li>
  <Link to="/admin/#" className="has-arrow waves-effect">
    <i className="mdi mdi-file-document-outline" />
    <span>Publish</span>
  </Link>
  <ul className="sub-menu" aria-expanded="false">
    <li>
      <Link to="/admin/articles">Articles</Link>
    </li>
    <li>
      <Link to="/admin/articles/create-article">Create Article</Link>
    </li>
    <li>
      <Link to="/admin/policy-and-terms">Update Policy and Terms of Service</Link>
    </li>
  </ul>
</li>
                  </ul>
                </div>
              </Collapse>
            </nav>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Navbar);
