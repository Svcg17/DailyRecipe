import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Lightbox
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

// import images
import work1 from "../../assets/images/gallery/work-1.jpg";
import work2 from "../../assets/images/gallery/work-2.jpg";
import work3 from "../../assets/images/gallery/work-3.jpg";
import work4 from "../../assets/images/gallery/work-4.jpg";
import work5 from "../../assets/images/gallery/work-5.jpg";
import work6 from "../../assets/images/gallery/work-6.jpg";
import work7 from "../../assets/images/gallery/work-7.jpg";
import work8 from "../../assets/images/gallery/work-8.jpg";
import work9 from "../../assets/images/gallery/work-10.jpg";
import work10 from "../../assets/images/gallery/work-11.jpg";
import work11 from "../../assets/images/gallery/work-12.jpg";
import work12 from "../../assets/images/gallery/work-1.jpg";

// import users
import user1 from "../../assets/images/users/user-1.jpg";
import user2 from "../../assets/images/users/user-2.jpg";
import user3 from "../../assets/images/users/user-3.jpg";
import user4 from "../../assets/images/users/user-4.jpg";
import user5 from "../../assets/images/users/user-5.jpg";
import user6 from "../../assets/images/users/user-6.jpg";
import user7 from "../../assets/images/users/user-7.jpg";
import user8 from "../../assets/images/users/user-8.jpg";

const images = [
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
  work7,
  work8,
  work9,
  work10,
  work11,
  work12
];

class PagesGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isGallery: false,
      galleryList: [
        {
          id: 1,
          title: "Open Imagination",
          auther: "Curtis Marion",
          workImg: work1,
          userImg: user1
        },
        {
          id: 2,
          title: "Locked Steel Gate",
          auther: "Curtis Marion",
          workImg: work2,
          userImg: user2
        },
        {
          id: 3,
          title: "Mac Sunglasses",
          auther: "Curtis Marion",
          workImg: work3,
          userImg: user3
        },
        {
          id: 4,
          title: "Morning Dew",
          auther: "Curtis Marion",
          workImg: work4,
          userImg: user4
        },
        {
          id: 5,
          title: "Console Activity",
          auther: "Curtis Marion",
          workImg: work5,
          userImg: user5
        },
        {
          id: 6,
          title: "Open Imagination",
          auther: "Curtis Marion",
          workImg: work6,
          userImg: user6
        },
        {
          id: 7,
          title: "Backpack Content",
          auther: "Curtis Marion",
          workImg: work7,
          userImg: user7
        },
        {
          id: 8,
          title: "Sunset Bulb Glow",
          auther: "Curtis Marion",
          workImg: work8,
          userImg: user8
        },
        {
          id: 9,
          title: "Console Activity",
          auther: "Curtis Marion",
          workImg: work9,
          userImg: user4
        },
        {
          id: 10,
          title: "Open Imagination",
          auther: "Curtis Marion",
          workImg: work10,
          userImg: user5
        },
        {
          id: 11,
          title: "Open Imagination",
          auther: "Curtis Marion",
          workImg: work11,
          userImg: user1
        },
        {
          id: 12,
          title: "Shake It!",
          auther: "Curtis Marion",
          workImg: work12,
          userImg: user6
        }
      ]
    };
  }

  render() {
    const { photoIndex } = this.state;
    return (
      <React.Fragment>
        {this.state.isGallery ? (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            enableZoom={false}
            onCloseRequest={() => this.setState({ isGallery: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
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
        <div className="container-fluid">
          <Row className="align-items-center">
            <Col sm={6}>
              <div className="page-title-box">
                <h4 className="font-size-18">Gallery</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">Extra Pages</Link>
                  </li>
                  <li className="breadcrumb-item active">Gallery</li>
                </ol>
              </div>
            </Col>

            <Col sm={6}>
              <div className="float-right d-none d-md-block">
                <SettingMenu />
              </div>
            </Col>
          </Row>

          <div className="row">
            {this.state.galleryList.map(gallery => (
              <Col xl={3} md={6}>
                <Link
                  to="#"
                  className="gallery-popup"
                  title="Open Imagination"
                  onClick={() =>
                    this.setState({ isGallery: true, photoIndex: 0 })
                  }
                >
                  <div className="project-item">
                    <div className="overlay-container">
                      <img
                        src={gallery.workImg}
                        alt="img"
                        className="gallery-thumb-img"
                      />
                      <div className="project-item-overlay">
                        <h4>{gallery.title}</h4>
                        <p>
                          <img
                            src={gallery.userImg}
                            alt="user"
                            className="avatar-sm rounded-circle"
                          />
                          <span className="ml-2">{gallery.auther}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PagesGallery;
