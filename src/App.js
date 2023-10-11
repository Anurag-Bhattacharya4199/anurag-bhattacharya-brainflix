import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Videos from "./data/video-details.json";
import MainContent from "./components/MainContent/MainContent";

class App extends React.Component {
  state = {
    Videos: Videos,
    currentVideo: Videos[0],
  };
  changeVideoSelection = (id) => {
    const selectedVideoID = this.state.Videos.findIndex(
      (video) => id === video.id
    );
    this.setState({
      currentVideo: this.state.Videos[selectedVideoID],
    });
  };
  render() {
    return (
      <>
        <Header />
        <MainContent
          Videos={this.state.Videos}
          currentVideo={this.state.currentVideo}
          changeVideoSelection={this.changeVideoSelection}
        />
      </>
    );
  }
}

export default App;
