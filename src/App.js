import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import { Album } from "./components/Album";
import { data } from "./data";
import { Search } from "./components/Search";
import { Dropdown } from "./components/Dropdown";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data,
      isShowAlbums: true,
      inputValue: "",
      isChecked: false,
      renderedData: data,
      selectedOption: "",
    };
  }

  deleteAlbum = (id) => {
    const filteredAlbums = this.state.data.filter((album) => album.id !== id);
    this.setState({ data: filteredAlbums });
  };
  renderAlbums = () => {
    this.setState({ isShowAlbums: !this.state.isShowAlbums });
  };
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value }, () => {
      this.handleSearch();
    });
  };
  handleSearch = () => {
    const searchedAlbum = this.state.data.filter((album) =>
      album.albumName
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase())
    );
    this.setState({ renderedData: searchedAlbum });
  };
  handleReset = () => {
    this.setState({ inputValue: "", renderedData: this.state.data });
  };
  handleCheck = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };
  handleSelect = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  render() {
    const { data, isShowAlbums, inputValue, renderedData, isChecked } =
      this.state;
    const numOfPic = data.reduce((acc, cv) => {
      return (acc += cv.pictures.length);
    }, 0);
    return (
      <div className={`App ${isChecked ? "darkmode" : ""}`}>
        <Header
          numOfAlbums={data.length}
          numOfPic={numOfPic}
          renderAlbums={this.renderAlbums}
          isShowAlbums={isShowAlbums}
        />
        {isShowAlbums ? (
          <div>
            <Search
              inputValue={inputValue}
              handleChange={this.handleChange}
              handleSearch={this.handleSearch}
              handleReset={this.handleReset}
            />
            <div>
              {" "}
              <label htmlFor="">{isChecked ? "Light Mode" : "Dark Mode"}</label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={this.handleCheck}
              />
            </div>
            <Dropdown data={data} handleSelect={this.handleSelect} />
            {renderedData.map((singleAlbum) => {
              return (
                <Album
                  {...singleAlbum}
                  deleteAlbum={this.deleteAlbum}
                  key={singleAlbum.id}
                  // name={singleAlbum.albumName}
                  // description={singleAlbum.description}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
