import React, { Component } from "react";
import { Link } from "react-router-dom";

// import images
import logoDark from "../../assets/images/logo-dark.png";
import user6 from "../../assets/images/users/user-6.jpg";
import bg from "../../assets/images/bg.jpg";

class PagesLockScreen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        {" "}
        <div
          className="accountbg"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${bg})`
          }}
        ></div>
        <div className="wrapper-page account-page-full">
          <div className="card shadow-none">
            <div className="card-block">
              <div className="account-box">
                <div className="card-box shadow-none p-4">
                  <div className="p-2">
                    <div className="text-center mt-4">
                      <Link to="/">
                        <img src={logoDark} height="22" alt="logo" />
                      </Link>
                    </div>

                    <h4 className="font-size-18 mt-5 text-center">Locked</h4>
                    <p className="text-muted text-center">
                      Hello Smith, enter your password to unlock the screen!
                    </p>

                    <form className="mt-4" action="#">
                      <div className="pt-3 text-center">
                        <img
                          src={user6}
                          className="rounded-circle img-thumbnail avatar-lg"
                          alt="thumbnail"
                        />
                        <h6 className="font-size-16 mt-3">Robert Smith</h6>
                      </div>

                      <div className="form-group">
                        <label htmlFor="userpassword">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="userpassword"
                          placeholder="Enter password"
                        />
                      </div>

                      <div className="form-group row">
                        <div className="col-12 text-right">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            type="submit"
                          >
                            Unlock
                          </button>
                        </div>
                      </div>
                    </form>

                    <div className="mt-5 pt-4 text-center">
                      <p>
                        Not you ? return{" "}
                        <Link
                          to="pages-login-2"
                          className="font-weight-medium text-primary"
                        >
                          {" "}
                          Sign In{" "}
                        </Link>{" "}
                      </p>
                      <p>
                        © {new Date().getFullYear()} Veltrix. Crafted with{" "}
                        <i className="mdi mdi-heart text-danger"></i> by
                        Themesbrand
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PagesLockScreen2;
