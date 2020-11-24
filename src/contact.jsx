import React, { Component } from "react";
import "./css/Contact.css";

class Contact extends Component {
  state = {
    Message: { firstName: "", email: "", message: "" },
  };

  handleChange = (e) => {
    const Message = { ...this.state.Message };
    Message[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ Message });
  };

  render() {
    return (
      <div className="body">
        <div className="contactDiv">
          <div className="row">
            <div className="col-sm-5">
              <span>
                <h2>
                  <strong>Contact Us:</strong>
                </h2>
              </span>
              <div className="inputfields">
                <input
                  autoFocus
                  value={this.state.Message.firstName}
                  onChange={this.handleChange}
                  name="firstName"
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
                <input
                  value={this.state.Message.email}
                  onChange={this.handleChange}
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="inputfield2">
                <textarea
                  value={this.state.Message.message}
                  onChange={this.handleChange}
                  name="message"
                  type="text"
                  className="form-control"
                  rows="8"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <div>
                <button className="btn btn-dark col-sm-2">Send</button>
              </div>
            </div>

            <div className="col-sm-6">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13621.655901056978!2d74.2126341!3d31.4027185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x879e9b82857bcd94!2sCOMSATS%20University%2C%20Lahore%20Campus!5e0!3m2!1sen!2s!4v1606246424178!5m2!1sen!2s"
                  width="600"
                  height="450"
                  frameBorder="0"
                  style={{
                    border: 0,
                    height: "325px",
                    width: "450px",
                    marginTop: "60px",
                    backgroundColor: "black",
                  }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="Comsats"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
