import React from "react";
import { object, func } from "prop-types";

export class ContactForm extends React.Component {
  static defaultProps = {
    data: {
      name: "",
      email: "",
      option: "",
      select: "",
      message: "",
      terms: false,
    },
  };

  static propTypes = {
    onChange: func.isRequired,
    onSubmit: func.isRequired,
    data: object.isRequired,
  };

  constructor(props) {
    super(props);
    this.fieldChange = this.fieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /**
   * When form is submitted forward contact data to parent
   * @param {event} DOMEvent
   */
  handleSubmit(event) {
    event.preventDefault();

    console.log(this.props.data);
    this.props.onSubmit(this.props.data);
  }

  fieldChange(event) {
    let target = event.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let data = this.props.data;
    this.props.onChange({ ...data, [name]: value });
  }

  isSelected(key, option) {
    return this.props.data[key] === option;
  }

  options = [
    { id: 1, label: "I have question about my membership" },
    { id: 2, label: "I have technical question" },
    { id: 3, label: "I would like to change membership" },
    { id: 4, label: "Other question" },
  ];

  render() {
    let data = this.props.data;

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Contact Form</h3>

        <div className="form-group">
          <label className="form-label">Your Name:</label>
          <input
            name="name"
            className="form-control"
            value={data.name}
            onChange={this.fieldChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Your Best Email:</label>
          <input
            name="email"
            className="form-control"
            value={data.email}
            onChange={this.fieldChange}
          />
        </div>

        <label className="form-label">Select your membership option:</label>
        <div className="form-group row">
          <label className="form-label col-xs-4">
            <input
              type="radio"
              name="option"
              value="A"
              checked={data.option === "A"}
              onChange={this.fieldChange}
            />{" "}
            Option A
          </label>
          <label className="form-label col-xs-4">
            <input
              type="radio"
              name="option"
              value="B"
              checked={data.option === "B"}
              onChange={this.fieldChange}
            />{" "}
            Option B
          </label>
          <label className="form-label col-xs-4">
            <input
              type="radio"
              name="option"
              value="C"
              checked={data.option === "C"}
              onChange={this.fieldChange}
            />{" "}
            Option C
          </label>
        </div>

        <hr />

        <div className="form-group">
          <label className="form-label">What can we help you with:</label>
          <select
            className="form-control"
            name="select"
            onChange={this.fieldChange}
          >
            {this.options.map((option) => {
              return (
                <option
                  key={option.id}
                  selected={option.id === data.select}
                  value={option.id}
                >
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Message:</label>
          <textarea
            name="message"
            rows="10"
            placeholder="Please type your question here"
            className="form-control"
            value={data.message}
            onChange={this.fieldChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            {" "}
            <input
              type="checkbox"
              name="terms"
              checked={data.terms}
              onChange={this.fieldChange}
            />{" "}
            I agree to terms and conditions{" "}
          </label>
        </div>

        <input type="submit" value="Send" className="contactform-submit" />
      </form>
    );
  }
}
