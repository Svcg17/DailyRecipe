import React, { Component } from "react";
import SettingMenu from "../../Shared/SettingMenu";
import { Row, Col, Card, CardBody } from "reactstrap";

// Full Calendar
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import { Link } from "react-router-dom";

const DefaultEvents = [
  {
    title: "All Day Event",
    start: new Date().setDate(new Date().getDate() + 1)
  },
  {
    id: 999,
    title: "Repeating Event",
    start: new Date().setDate(new Date().getDate() - 5),
    allDay: false,
    className: "bg-teal"
  },
  {
    id: 999,
    title: "Meeting",
    start: new Date().setDate(new Date().getDate() - 3),
    allDay: false,
    className: "bg-purple"
  },
  {
    id: 999,
    title: "Meeting",
    start: new Date().setDate(new Date().getDate() + 4),
    allDay: false,
    className: "bg-warning"
  },
  {
    title: "Meeting",
    start: new Date().setDate(new Date().getDate() + 4),
    allDay: false,
    className: "bg-danger"
  }
];

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calendarWeekends: true,
      calendarEvents: DefaultEvents
    };
    this.calendarComponentRef = React.createRef();
    this.handleDateClick = this.handleDateClick.bind(this);
  }
  componentDidMount() {}

  handleDateClick = arg => {
    var title = prompt("Event Title:");
    this.setState({ selectedDay: arg });
    if (title == null) {
    } else {
      var newEvent = {};
      newEvent = {
        id: this.state.calendarEvents.length + 1,
        title: title,
        start: this.state.selectedDay
          ? this.state.selectedDay.date
          : new Date(),
        className: "bg-primary"
      };
      this.setState({
        calendarEvents: this.state.calendarEvents.concat(newEvent),
        selectedDay: null
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Row className="align-items-center">
            <Col sm={6}>
              <div className="page-title-box">
                <h4 className="font-size-18">Calendar</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item active">Calendar</li>
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
            <Col>
              <Card>
                <CardBody>
                  <FullCalendar
                    ref={this.calendarComponentRef}
                    defaultView="dayGridMonth"
                    plugins={[BootstrapTheme, dayGridPlugin, interactionPlugin]}
                    slotDuration={"00:15:00"}
                    minTime={"08:00:00"}
                    maxTime={"19:00:00"}
                    handleWindowResize={true}
                    themeSystem="bootstrap"
                    header={{
                      left: "prev,next today",
                      center: "title",
                      right: "dayGridMonth,dayGridWeek,dayGridDay"
                    }}
                    dateClick={this.handleDateClick}
                    editable={true}
                    droppable={true}
                    eventLimit={true}
                    selectable={true}
                    events={this.state.calendarEvents}
                    id="calendar"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Calendar;
