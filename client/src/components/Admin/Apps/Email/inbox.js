import React, { Component } from "react";
import SettingMenu from "../../Shared/SettingMenu";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

//Images
import user2 from "../../../../assets/images/users/user-2.jpg";
import user3 from "../../../../assets/images/users/user-3.jpg";
import user4 from "../../../../assets/images/users/user-4.jpg";
import user6 from "../../../../assets/images/users/user-6.jpg";

class EmailInbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folder_menu: false,
      tag_menu: false,
      more_menu: false
    };
    this.toggleFolder = this.toggleFolder.bind(this);
    this.toggleTag = this.toggleTag.bind(this);
    this.toggleMore = this.toggleMore.bind(this);
  }

  toggleFolder() {
    this.setState(prevState => ({
      folder_menu: !prevState.folder_menu
    }));
  }

  toggleTag() {
    this.setState(prevState => ({
      tag_menu: !prevState.tag_menu
    }));
  }

  toggleMore() {
    this.setState(prevState => ({
      more_menu: !prevState.more_menu
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Row className="align-items-center">
            <Col sm={6}>
              <div className="page-title-box">
                <h4 className="font-size-18">Inbox</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">Email</Link>
                  </li>
                  <li className="breadcrumb-item active">Inbox</li>
                </ol>
              </div>
            </Col>

            <Col sm={6}>
              <div className="float-right d-none d-md-block">
                <SettingMenu />
              </div>
            </Col>
          </Row>

          <Row>
            <div className="col-12">
              <div className="email-leftbar card">
                <Link
                  to="email-compose"
                  className="btn btn-danger rounded btn-custom btn-block waves-effect waves-light"
                >
                  Compose
                </Link>

                <div className="mail-list mt-4">
                  <Link to="#" className="active">
                    Inbox <span className="ml-1">(18)</span>
                  </Link>
                  <Link to="#">Starred</Link>
                  <Link to="#">Important</Link>
                  <Link to="#">Draft</Link>
                  <Link to="#">Sent Mail</Link>
                  <Link to="#">Trash</Link>
                </div>

                <h5 className="mt-4">Labels</h5>

                <div className="mail-list mt-4">
                  <Link to="#">
                    <span className="mdi mdi-arrow-right-drop-circle text-info float-right"></span>
                    Theme Support
                  </Link>
                  <Link to="#">
                    <span className="mdi mdi-arrow-right-drop-circle text-warning float-right"></span>
                    Freelance
                  </Link>
                  <Link to="#">
                    <span className="mdi mdi-arrow-right-drop-circle text-primary float-right"></span>
                    Social
                  </Link>
                  <Link to="#">
                    <span className="mdi mdi-arrow-right-drop-circle text-danger float-right"></span>
                    Friends
                  </Link>
                  <Link to="#">
                    <span className="mdi mdi-arrow-right-drop-circle text-success float-right"></span>
                    Family
                  </Link>
                </div>

                <h5 className="mt-4">Chat</h5>

                <div className="mt-4">
                  <Link to="#" className="media">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src={user2}
                      alt="veltrix"
                      height="36"
                    />
                    <div className="media-body chat-user-box">
                      <p className="user-title m-0">Scott Median</p>
                      <p className="text-muted">Hello</p>
                    </div>
                  </Link>

                  <Link to="#" className="media">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src={user3}
                      alt="veltrix"
                      height="36"
                    />
                    <div className="media-body chat-user-box">
                      <p className="user-title m-0">Julian Rosa</p>
                      <p className="text-muted">What about our next..</p>
                    </div>
                  </Link>

                  <Link to="#" className="media">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src={user4}
                      alt="veltrix"
                      height="36"
                    />
                    <div className="media-body chat-user-box">
                      <p className="user-title m-0">David Medina</p>
                      <p className="text-muted">Yeah everything is fine</p>
                    </div>
                  </Link>

                  <Link to="#" className="media">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src={user6}
                      alt="veltrix"
                      height="36"
                    />
                    <div className="media-body chat-user-box">
                      <p className="user-title m-0">Jay Baker</p>
                      <p className="text-muted">Wow that's great</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="email-rightbar mb-3">
                <Card>
                  <div className="btn-toolbar p-3" role="toolbar">
                    <div className="btn-group mo-mb-2">
                      <button
                        type="button"
                        className="btn btn-primary waves-light waves-effect"
                      >
                        <i className="fa fa-inbox"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary waves-light waves-effect"
                      >
                        <i className="fa fa-exclamation-circle"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary waves-light waves-effect"
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </div>
                    <div className="btn-group ml-1 mo-mb-2">
                      <Dropdown
                        isOpen={this.state.folder_menu}
                        toggle={this.toggleFolder}
                      >
                        <DropdownToggle
                          tag="button"
                          color="primary"
                          className="btn btn-primary waves-effect waves-light"
                          caret
                        >
                          <i className="fa fa-folder"></i>
                          <i className="mdi mdi-chevron-down ml-1"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a" href="#">
                            Updates
                          </DropdownItem>
                          <DropdownItem tag="a" href="#">
                            Social
                          </DropdownItem>
                          <DropdownItem tag="a" href="#">
                            Team Manage
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    <div className="btn-group ml-1 mo-mb-2">
                      <Dropdown
                        isOpen={this.state.tag_menu}
                        toggle={this.toggleTag}
                      >
                        <DropdownToggle
                          tag="button"
                          color="primary"
                          className="btn btn-primary waves-effect waves-light"
                          caret
                        >
                          <i className="fa fa-tag"></i>
                          <i className="mdi mdi-chevron-down ml-1"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a" href="#">
                            Updates
                          </DropdownItem>
                          <DropdownItem tag="a" href="#">
                            Social
                          </DropdownItem>
                          <DropdownItem tag="a" href="#">
                            Team Manage
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    <div className="btn-group ml-1 mo-mb-2">
                      <Dropdown
                        isOpen={this.state.more_menu}
                        toggle={this.toggleMore}
                      >
                        <DropdownToggle
                          tag="button"
                          color="primary"
                          className="btn btn-primary waves-effect waves-light"
                          caret
                        >
                          More
                          <i className="mdi mdi-chevron-down ml-1"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a" href="#">
                            Mark as Unread
                          </DropdownItem>
                          <DropdownItem tag="a" href="#">
                            Mark as Important
                          </DropdownItem>
                          <DropdownItem tag="a" href="#">
                            Add to Tasks
                          </DropdownItem>
                          <DropdownItem tag="a" href="#">
                            Add Star
                          </DropdownItem>
                          <DropdownItem tag="a" href="#">
                            Mute
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                  <ul className="message-list">
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <input type="checkbox" id="chk19" />
                          <label htmlFor="chk19" className="toggle"></label>
                        </div>
                        <Link to="#" className="title">
                          Peter, me (3)
                        </Link>
                        <span className="star-toggle far fa-star"></span>
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link to="#" className="subject">
                          Hello –{" "}
                          <span className="teaser">
                            Trip home from Colombo has been arranged, then Jenna
                            will come get me from Stockholm. :)
                          </span>
                        </Link>
                        <div className="date">Mar 6</div>
                      </div>
                    </li>

                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <input type="checkbox" id="chk20" />
                          <label htmlFor="chk20" className="toggle"></label>
                        </div>
                        <Link to="#" className="title">
                          me, Susanna (7)
                        </Link>
                        <span className="star-toggle far fa-star"></span>
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link to="#" className="subject">
                          <span className="badge-warning badge mr-2">
                            Freelance
                          </span>
                          Since you asked... and i'm inconceivably bored at the
                          train station –
                          <span className="teaser">
                            Alright thanks. I'll have to re-book that somehow,
                            i'll get back to you.
                          </span>
                        </Link>
                        <div className="date">Mar. 6</div>
                      </div>
                    </li>

                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <input type="checkbox" id="chk6" />
                          <label htmlFor="chk6" className="toggle"></label>
                        </div>
                        <Link to="#" className="title">
                          Web Support Dennis
                        </Link>
                        <span className="star-toggle far fa-star"></span>
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link to="#" className="subject">
                          Re: New mail settings –
                          <span className="teaser">
                            Will you answer him asap?
                          </span>
                        </Link>
                        <div className="date">Mar 7</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <input type="checkbox" id="chk7" />
                          <label htmlFor="chk7" className="toggle"></label>
                        </div>
                        <Link to="#" className="title">
                          me, Peter (2)
                        </Link>
                        <span className="star-toggle far fa-star"></span>
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link to="#" className="subject">
                          <span className="badge-info badge mr-2">Support</span>
                          Off on Thursday -
                          <span className="teaser">
                            Eff that place, you might as well stay here with us
                            instead! Sent from my iPhone 4 4 mar 2014 at 5:55 pm
                          </span>
                        </Link>
                        <div className="date">Mar 4</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <input type="checkbox" id="chk8" />
                          <label htmlFor="chk8" className="toggle"></label>
                        </div>
                        <Link to="#" className="title">
                          Medium
                        </Link>
                        <span className="star-toggle far fa-star"></span>
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link to="#" className="subject">
                          <span className="badge-primary badge mr-2">
                            Social
                          </span>
                          This Week's Top Stories –
                          <span className="teaser">
                            Our top pick for you on Medium this week The Man Who
                            Destroyed America’s Ego
                          </span>
                        </Link>
                        <div className="date">Feb 28</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <input type="checkbox" id="chk9" />
                          <label htmlFor="chk9" className="toggle"></label>
                        </div>
                        <Link to="#" className="title">
                          Death to Stock
                        </Link>
                        <span className="star-toggle far fa-star"></span>
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link to="#" className="subject">
                          Montly High-Res Photos –
                          <span className="teaser">
                            To create this month's pack, we hosted a party with
                            local musician Jared Mahone here in Columbus, Ohio.
                          </span>
                        </Link>
                        <div className="date">Feb 28</div>
                      </div>
                    </li>

                    <li className="unread">
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <input type="checkbox" id="chk3" />
                          <label htmlFor="chk3" className="toggle"></label>
                        </div>
                        <Link to="#" className="title">
                          Randy, me (5)
                        </Link>
                        <span className="star-toggle far fa-star"></span>
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link to="#" className="subject">
                          <span className="badge-success badge mr-2">
                            Family
                          </span>
                          Last pic over my village –
                          <span className="teaser">
                            Yeah i'd like that! Do you remember the video you
                            showed me of your train ride between Colombo and
                            Kandy? The one with the mountain view? I would love
                            to see that one again!
                          </span>
                        </Link>
                        <div className="date">5:01 am</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <input type="checkbox" id="chk4" />
                          <label htmlFor="chk4" className="toggle"></label>
                        </div>
                        <Link to="#" className="title">
                          Andrew Zimmer
                        </Link>
                        <span className="star-toggle far fa-star"></span>
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link to="#" className="subject">
                          Mochila Beta: Subscription Confirmed –{" "}
                          <span className="teaser">
                            You've been confirmed! Welcome to the ruling
                            className of the inbox. For your records, here is a
                            copy of the information you submitted to us...
                          </span>
                        </Link>
                        <div className="date">Mar 8</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <input type="checkbox" id="chk5" />
                          <label htmlFor="chk5" className="toggle"></label>
                        </div>
                        <Link to="#" className="title">
                          Infinity HR
                        </Link>
                        <span className="star-toggle far fa-star"></span>
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link to="#" className="subject">
                          Sveriges Hetaste sommarjobb –
                          <span className="teaser">
                            Hej Nicklas Sandell! Vi vill bjuda in dig till
                            "First tour 2014", ett rekryteringsevent som
                            erbjuder jobb på 16 semesterorter iSverige.
                          </span>
                        </Link>
                        <div className="date">Mar 8</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <input type="checkbox" id="chk10" />
                          <label htmlFor="chk10" className="toggle"></label>
                        </div>
                        <Link to="#" className="title">
                          Revibe
                        </Link>
                        <span className="star-toggle far fa-star"></span>
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link to="#" className="subject">
                          <span className="badge-danger badge mr-2">
                            Friends
                          </span>
                          Weekend on Revibe –
                          <span className="teaser">
                            Today's Friday and we thought maybe you want some
                            music inspiration for the weekend. Here are some
                            trending tracks and playlists we think you should
                            give a listen!
                          </span>
                        </Link>
                        <div className="date">Feb 27</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <input type="checkbox" id="chk11" />
                          <label htmlFor="chk11" className="toggle"></label>
                        </div>
                        <Link to="#" className="title">
                          Erik, me (5)
                        </Link>
                        <span className="star-toggle far fa-star"></span>
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link to="#" className="subject">
                          Regarding our meeting –
                          <span className="teaser">
                            That's great, see you on Thursday!
                          </span>
                        </Link>
                        <div className="date">Feb 24</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <input type="checkbox" id="chk12" />
                          <label htmlFor="chk12" className="toggle"></label>
                        </div>
                        <Link to="#" className="title">
                          KanbanFlow
                        </Link>
                        <span className="star-toggle far fa-star"></span>
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link to="#" className="subject">
                          <span className="badge-primary badge mr-2">
                            Social
                          </span>
                          Task assigned: Clone ARP's website –{" "}
                          <span className="teaser">
                            You have been assigned a task by Alex@Work on the
                            board Web.
                          </span>
                        </Link>
                        <div className="date">Feb 24</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <input type="checkbox" id="chk13" />
                          <label htmlFor="chk13" className="toggle"></label>
                        </div>
                        <Link to="#" className="title">
                          Tobias Berggren
                        </Link>
                        <span className="star-toggle far fa-star"></span>
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link to="#" className="subject">
                          Let's go fishing! –
                          <span className="teaser">
                            Hey, You wanna join me and Fred at the lake
                            tomorrow? It'll be awesome.
                          </span>
                        </Link>
                        <div className="date">Feb 23</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <input type="checkbox" id="chk14" />
                          <label htmlFor="chk14" className="toggle"></label>
                        </div>
                        <Link to="#" className="title">
                          Charukaw, me (7)
                        </Link>
                        <span className="star-toggle far fa-star"></span>
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link to="#" className="subject">
                          Hey man –{" "}
                          <span className="teaser">
                            Nah man sorry i don't. Should i get it?
                          </span>
                        </Link>
                        <div className="date">Feb 23</div>
                      </div>
                    </li>
                    <li className="unread">
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <input type="checkbox" id="chk15" />
                          <label htmlFor="chk15" className="toggle"></label>
                        </div>
                        <Link to="#" className="title">
                          me, Peter (5)
                        </Link>
                        <span className="star-toggle far fa-star"></span>
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link to="#" className="subject">
                          <span className="badge-info badge mr-2">Support</span>
                          Home again! –{" "}
                          <span className="teaser">
                            That's just perfect! See you tomorrow.
                          </span>
                        </Link>
                        <div className="date">Feb 21</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <input type="checkbox" id="chk16" />
                          <label htmlFor="chk16" className="toggle"></label>
                        </div>
                        <Link to="#" className="title">
                          Stack Exchange
                        </Link>
                        <span className="star-toggle far fa-star"></span>
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link to="#" className="subject">
                          1 new items in your Stackexchange inbox –{" "}
                          <span className="teaser">
                            The following items were added to your Stack
                            Exchange global inbox since you last checked it.
                          </span>
                        </Link>
                        <div className="date">Feb 21</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <input type="checkbox" id="chk17" />
                          <label htmlFor="chk17" className="toggle"></label>
                        </div>
                        <Link to="#" className="title">
                          Google Drive Team
                        </Link>
                        <span className="star-toggle far fa-star"></span>
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link to="#" className="subject">
                          You can now use your storage in Google Drive –{" "}
                          <span className="teaser">
                            Hey Nicklas Sandell! Thank you for purchasing extra
                            storage space in Google Drive.
                          </span>
                        </Link>
                        <div className="date">Feb 20</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <input type="checkbox" id="chk18" />
                          <label htmlFor="chk18" className="toggle"></label>
                        </div>
                        <Link to="#" className="title">
                          me, Susanna (11)
                        </Link>
                        <span className="star-toggle far fa-star"></span>
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link to="#" className="subject">
                          Train/Bus –{" "}
                          <span className="teaser">
                            Yes ok, great! I'm not stuck in Stockholm anymore,
                            we're making progress.
                          </span>
                        </Link>
                        <div className="date">Feb 19</div>
                      </div>
                    </li>
                  </ul>
                </Card>
                <Row className="mt-4">
                  <div className="col-7">Showing 1 - 20 of 1,524</div>
                  <div className="col-5">
                    <div className="btn-group float-right">
                      <button
                        type="button"
                        className="btn btn-sm btn-success waves-effect"
                      >
                        <i className="fa fa-chevron-left"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-success waves-effect"
                      >
                        <i className="fa fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                </Row>
              </div>
            </div>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default EmailInbox;
