import React, { Component } from "react";
import { Row, Col,} from "reactstrap";
import { Link } from "react-router-dom";

//CountDown
import Countdown from "react-countdown-now";

// Import images
import logoDark from "../../assets/images/logo-dark.png";

class PagesComingsoon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Completionist = () => <span>You are good to go!</span>;

    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        return <Completionist />;
      } else {
        return (
          <div className="counter-number">
            <div className="coming-box">
              144
              <span>Days</span>
            </div>
            <div className="coming-box">
              {hours}
              <span>Hours</span>
            </div>
            <div className="coming-box">
              {minutes}
              <span>Minutes</span>
            </div>
            <div className="coming-box">
              {seconds}
              <span>Seconds</span>
            </div>
          </div>
        );
      }
    };

    return (
      <React.Fragment>
        <div className="home-btn d-none d-sm-block">
          <Link to="/" className="text-dark">
            <i className="fas fa-home h2"></i>
          </Link>
        </div>

        <div className="authentication-bg d-flex align-items-center pb-0 vh-100">
          <div className="content-center w-100">
            <div className="container">
              <Row>
              <Col lg={12}>
                  <div className="home-wrapper text-center">
                    <img src={logoDark} alt="logo" height="22" />
                    <h3 className="mt-4">Let's get started with Veltrix</h3>
                    <p className="mb-5">
                      It will be as simple as Occidental in fact it will be
                      Occidental.
                    </p>

                    <Row className="justify-content-center mt-5">
                    <Col md={8}>
                        <div className="countdown">
                          <Countdown
                            date={Date.now() + Date.now()}
                            renderer={renderer}
                          />
                        </div>
                      </Col>
                    </Row>

                    <div className="text-center coming-soon-search-form pt-4">
                      <form action="#">
                        <input type="text" placeholder="Enter email address" />
                        <button type="submit" className="btn btn-primary">
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PagesComingsoon;
