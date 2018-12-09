import React, { Component } from 'react';

interface Props {
  _id: string;
}
interface State {
  id: string;
}
export default class extends Component<Props> {
  state: State = {
    id: 'Hello'
  };
  render() {
    return (
      <div>
        <h1>{this.props._id}</h1>
      </div>
    );
  }
}
