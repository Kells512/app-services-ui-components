import "./customStyles.css";
import React from "react";
import { Label } from "@patternfly/react-core";

class ConsumerGroupLabel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="row">
        <div class="child">
          <Label
            color="green"
            className="pf-c-label mas-m-solid mas-m-text"
            isCompact
          >
            G
          </Label>
        </div>
      </div>
    );
  }
}

export default ConsumerGroupLabel;
