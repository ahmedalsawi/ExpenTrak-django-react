import React from "react";

import moment from "moment";

import Select from "./atoms/Select";
import SelectMultiple from "./atoms/SelectMultiple";
export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      amount: 0,
      date: moment().format("YYYY-MM-DD"),
      category: {},
      labels: [],
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Submit form data to backend
    this.props.handleAdd(this.state);
    // TODO clear the form on submit
  };

  // TODO clean this later
  category = [{ id: 1, name: "c1" }];
  label = [{ id: 1, name: "l1" }];

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            name="title"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="amount"
            type="number"
            step="0.01"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            name="date"
            type="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
        </div>

        <Select
          className="form-control"
          name="category"
          onChange={this.handleChange}
          value={this.state.category}
          options={this.category.map((item) => {
            return {
              name: item.name,
              value: item.id,
            };
          })}
        ></Select>

        <SelectMultiple
          className="form-control"
          name="labels"
          onChange={(this, this.handleChange)}
          value={this.state.labels}
          options={this.label.map((item) => {
            return {
              name: item.name,
              value: item.id,
            };
          })}
        ></SelectMultiple>

        <input type="submit" className="btn btn-primary" />
      </form>
    );
  }
}