import React from "react";
import Selector from "./Selector";
import Action from "./Action";

export default function Header(props) {
  return (
    <header>
      <Selector
        selectedValue={props.selectedValue}
        changeValue={props.changeValue}
      />
      <Action />
    </header>
  );
}
