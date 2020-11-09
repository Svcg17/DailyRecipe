import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Link } from "react-router-dom";

// import images
import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";

import user1 from "../../assets/images/users/user-1.jpg";
import user2 from "../../assets/images/users/user-2.jpg";
import user3 from "../../assets/images/users/user-3.jpg";
import user4 from "../../assets/images/users/user-4.jpg";
import user5 from "../../assets/images/users/user-5.jpg";
import user6 from "../../assets/images/users/user-6.jpg";

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="page-title-box">
                <h4 className="font-size-18">Images</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">UI Elements</Link>
                  </li>
                  <li className="breadcrumb-item active">Images</li>
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
                  <h4 className="card-title">Image thumbnails</h4>
                  <p className="card-title-desc">
                    In addition to our border-radius utilities, you can use
                    <code className="highlighter-rouge">.img-thumbnail</code> to
                    give an image a rounded 1px border appearance.
                  </p>

                  <div className="">
                    <img
                      className="img-thumbnail"
                      alt="200x200"
                      width="200"
                      src={img3}
                      data-holder-rendered="true"
                    />
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Image Rounded & Circle</h4>
                  <p className="card-title-desc">
                    Use classes
                    <code>.rounded</code> and <code>.rounded-circle</code>.
                  </p>

                  <div className="">
                    <img
                      className="rounded mr-2 mo-mb-2"
                      alt="veltrix"
                      width="200"
                      src={img4}
                      data-holder-rendered="true"
                    />
                    <img
                      className="rounded-circle"
                      alt="veltrix"
                      src={user4}
                      data-holder-rendered="true"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Responsive images</h4>
                  <p className="card-title-desc">
                    Images in Bootstrap are made responsive with{" "}
                    <code className="highlighter-rouge">.img-fluid</code>.{" "}
                    <code className="highlighter-rouge">max-width: 100%;</code>{" "}
                    and <code className="highlighter-rouge">height: auto;</code>{" "}
                    are applied to the image so that it scales with the parent
                    element.
                  </p>

                  <div className="">
                    <img src={img2} className="img-fluid" alt="Responsive" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Default media object</h4>
                  <p className="card-title-desc">
                    The default media displays a media object (images, video,
                    audio) to the left or right of a content block.
                  </p>

                  <div className="media mb-4">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src={user6}
                      alt="Generic"
                      height="64"
                    />
                    <div className="media-body">
                      <h5 className="mt-0 font-16">Media heading</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>

                  <div className="media mb-4">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src={user2}
                      alt="Generic"
                      height="64"
                    />
                    <div className="media-body">
                      <h5 className="mt-0 font-16">Media heading</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                      <div className="media mt-3">
                        <Link className="d-flex pr-3" to="#">
                          <img
                            src={user3}
                            alt="Generic"
                            height="64"
                            className="rounded-circle"
                          />
                        </Link>
                        <div className="media-body">
                          <h5 className="mt-0 font-16">Media heading</h5>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin. Cras purus odio,
                          vestibulum in vulputate at, tempus viverra turpis.
                          Fusce condimentum nunc ac nisi vulputate fringilla.
                          Donec lacinia congue felis in faucibus.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="media">
                    <div className="media-body">
                      <h5 className="mt-0 mb-1 font-16">Media object</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                    <img
                      className="d-flex ml-3 rounded-circle"
                      src={user4}
                      alt="Generic"
                      height="64"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Media alignment</h4>
                  <p className="card-title-desc">
                    The images or other media can be aligned top, middle, or
                    bottom. The default is top aligned.
                  </p>

                  <div className="media mb-4">
                    <img
                      className="d-flex align-self-start rounded mr-3"
                      src={user3}
                      alt="Generic"
                      height="64"
                    />
                    <div className="media-body">
                      <h5 className="mt-0 font-16">Top-aligned media</h5>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                      </p>
                      <p className="mb-0">
                        Donec sed odio dui. Nullam quis risus eget urna mollis
                        ornare vel eu leo. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                      </p>
                    </div>
                  </div>

                  <div className="media mb-4">
                    <img
                      className="d-flex align-self-center rounded mr-3"
                      src={user5}
                      alt="Generic"
                      height="64"
                    />
                    <div className="media-body">
                      <h5 className="mt-0 font-16">Center-aligned media</h5>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                      </p>
                      <p className="mb-0">
                        Donec sed odio dui. Nullam quis risus eget urna mollis
                        ornare vel eu leo. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                      </p>
                    </div>
                  </div>

                  <div className="media">
                    <img
                      className="d-flex align-self-end rounded mr-3"
                      src={user1}
                      alt="Generic"
                      height="64"
                    />
                    <div className="media-body">
                      <h5 className="mt-0 font-16">Bottom-aligned media</h5>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                      </p>
                      <p className="mb-0">
                        Donec sed odio dui. Nullam quis risus eget urna mollis
                        ornare vel eu leo. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
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

export default Images;
