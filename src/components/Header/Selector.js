import React, { Fragment } from "react";

import { selectorElement } from "./../../constants";

export default function Selector(props) {
  let options = [];

  for (let i of selectorElement) {
    props.selectedValue === i
      ? options.push(<option selected>{i}</option>)
      : options.push(<option>{i}</option>);
  }

  return (
    <Fragment>
      <label>Selector </label>
      <select onChange={props.changeValue}>{options}</select>
    </Fragment>
  );
}

/*selectorValue = { this.state.selectorValue }
changeValue = { this.changeValue }*/
