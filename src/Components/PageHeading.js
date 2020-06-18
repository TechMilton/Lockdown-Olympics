import React, { Component } from "react";

class PageHeading extends Component {
  render() {
    const { children } = this.props;
    return (
      <header className="header">
        {children}
      </header>
    );
  }
}

PageHeading.defaultProps = {
  children: "Lockdown Olympics"
}

export default PageHeading;