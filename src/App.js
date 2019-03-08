import React, { Component, Fragment } from "react";

import Header from "./components/Header";
import Navigator from "./components/Navigator";
import EditorFrame from "./components/EditorFrame";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: 2
    };

    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e) {
    alert(e.target.value);
  }

  render() {
    return (
      <Fragment>
        <Header
          selectedValue={this.state.selectedValue}
          changeValue={this.changeValue}
        />
        <main>
          <Navigator />
          <EditorFrame />
        </main>
      </Fragment>
    );
  }
}
