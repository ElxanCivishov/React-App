import React, { Component } from "react";

import SearchBox from "../SearchBox/SearchBox";
import Header from "../Header/Header";

class MainPage extends Component {
  render() {
    return (
      <>
        <Header />
        <SearchBox />
      </>
    );
  }
}

export default MainPage;
