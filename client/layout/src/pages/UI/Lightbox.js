import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";

//Lightbox
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

// import image
import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img5 from "../../assets/images/small/img-5.jpg";
import img6 from "../../assets/images/small/img-6.jpg";
import img7 from "../../assets/images/small/img-7.jpg";

const images = [img1, img2, img3, img4, img5, img6];

class UiLightbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isFits: false,
      isEffects: false,
      isGallery: false,
      isGalleryZoom: false,
      isOpen: false,
      isOpen1: false,
      modal_standard: false
    };
    this.openModal = this.openModal.bind(this);
    this.openModal1 = this.openModal1.bind(this);
    this.tog_standard = this.tog_standard.bind(this);
  }

  tog_standard() {
    this.setState(prevState => ({
      modal_standard: !prevState.modal_standard
    }));
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  openModal1() {
    this.setState({ isOpen1: true });
  }

  render() {
    const { photoIndex } = this.state;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="page-title-box">
                <h4 className="font-size-18">Lightbox</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">UI Elements</Link>
                  </li>
                  <li className="breadcrumb-item active">Lightbox</li>
                </ol>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="float-right d-none d-md-block">
                <SettingMenu />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Single image lightbox</h4>
                  <p className="card-title-desc">
                    Three simple popups with different scaling settings.
                  </p>

                  {this.state.isFits ? (
                    <Lightbox
                      mainSrc={images[photoIndex]}
                      enableZoom={false}
                      imageCaption={
                        "Caption. Can be aligned it to any side and contain any HTML."
                      }
                      onCloseRequest={() => this.setState({ isFits: false })}
                    />
                  ) : null}

                  {this.state.isEffects ? (
                    <Lightbox
                      mainSrc={images[3]}
                      enableZoom={false}
                      onCloseRequest={() => this.setState({ isEffects: false })}
                    />
                  ) : null}

                  {this.state.isGallery ? (
                    <Lightbox
                      mainSrc={images[photoIndex]}
                      nextSrc={images[(photoIndex + 1) % images.length]}
                      prevSrc={
                        images[(photoIndex + images.length - 1) % images.length]
                      }
                      enableZoom={false}
                      onCloseRequest={() => this.setState({ isGallery: false })}
                      onMovePrevRequest={() =>
                        this.setState({
                          photoIndex:
                            (photoIndex + images.length - 1) % images.length
                        })
                      }
                      onMoveNextRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + 1) % images.length
                        })
                      }
                      imageCaption={"Project " + parseFloat(photoIndex + 1)}
                    />
                  ) : null}

                  {this.state.isGalleryZoom ? (
                    <Lightbox
                      mainSrc={images[photoIndex]}
                      nextSrc={images[(photoIndex + 1) % images.length]}
                      prevSrc={
                        images[(photoIndex + images.length - 1) % images.length]
                      }
                      onCloseRequest={() =>
                        this.setState({ isGalleryZoom: false })
                      }
                      onMovePrevRequest={() =>
                        this.setState({
                          photoIndex:
                            (photoIndex + images.length - 1) % images.length
                        })
                      }
                      onMoveNextRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + 1) % images.length
                        })
                      }
                    />
                  ) : null}

                  <div className="row">
                    <div className="col-6">
                      <h5 className="mt-0 font-14 m-b-15">Fits (Horz/Vert)</h5>
                      <img
                        onClick={() => this.setState({ isFits: true })}
                        className="img-fluid"
                        alt=""
                        src={img2}
                        width="145"
                      />
                    </div>
                    <div className="col-6">
                      <h5 className="mt-0 font-14 m-b-15">Effects</h5>
                      <img
                        onClick={() => this.setState({ isEffects: true })}
                        className="img-fluid"
                        alt=""
                        src={img3}
                        width="75"
                      />

                      <p className="mt-2 mb-0 text-muted">
                        No gaps, zoom animation, close icon in top-right corner.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Lightbox gallery</h4>
                  <p className="card-title-desc">
                    In this example lazy-loading of images is enabled for the
                    next image based on move direction.{" "}
                  </p>

                  <div className="popup-gallery">
                    <div className="img-fluid float-left">
                      <img
                        src={img1}
                        onClick={() =>
                          this.setState({ isGallery: true, photoIndex: 0 })
                        }
                        alt=""
                        width="120"
                      />
                    </div>
                    <div className="img-fluid float-left">
                      <img
                        src={img2}
                        onClick={() =>
                          this.setState({ isGallery: true, photoIndex: 1 })
                        }
                        alt=""
                        width="120"
                      />
                    </div>
                    <div className="img-fluid float-left">
                      <img
                        src={img3}
                        onClick={() =>
                          this.setState({ isGallery: true, photoIndex: 2 })
                        }
                        alt=""
                        width="120"
                      />
                    </div>
                    <div className="img-fluid float-left">
                      <img
                        src={img4}
                        onClick={() =>
                          this.setState({ isGallery: true, photoIndex: 3 })
                        }
                        alt=""
                        width="120"
                      />
                    </div>
                    <div className="img-fluid float-left">
                      <img
                        src={img5}
                        onClick={() =>
                          this.setState({ isGallery: true, photoIndex: 4 })
                        }
                        alt=""
                        width="120"
                      />
                    </div>
                    <div className="img-fluid float-left">
                      <img
                        src={img6}
                        onClick={() =>
                          this.setState({ isGallery: true, photoIndex: 5 })
                        }
                        alt=""
                        width="120"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Zoom Gallery</h4>
                  <p className="card-title-desc">
                    Zoom effect works only with images.
                  </p>

                  <div className="zoom-gallery">
                    <img
                      src={img3}
                      className="float-left"
                      onClick={() =>
                        this.setState({ isGalleryZoom: true, photoIndex: 2 })
                      }
                      alt=""
                      width="275"
                    />
                    <img
                      src={img7}
                      className="float-left"
                      onClick={() =>
                        this.setState({ isGalleryZoom: true, photoIndex: 4 })
                      }
                      alt=""
                      width="275"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Popup with video or map</h4>
                  <p className="card-title-desc">
                    In this example lazy-loading of images is enabled for the
                    next image based on move direction.{" "}
                  </p>

                  <Row>
                    <Col>
                      <Button
                        className="btn btn-secondary"
                        onClick={this.openModal}
                      >
                        Open Youtube Video
                      </Button>{" "}
                      <Button
                        className="btn btn-secondary"
                        onClick={this.openModal1}
                      >
                        Open Vimeo Video
                      </Button>{" "}
                      <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        onClose={() => this.setState({ isOpen: false })}
                      />
                      <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen1}
                        onClose={() => this.setState({ isOpen1: false })}
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UiLightbox;
