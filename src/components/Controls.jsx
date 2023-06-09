import React, { Component } from "react";

class Controls extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="controls">
          <select
            onInput={this.props.onSearchInput}
            defaultValue="0"
            className="filter"
          >
            <option value="0" disabled>
              Filter
            </option>
            <option value="All">All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
          </select>

          <select
            onInput={this.props.onSortInput}
            defaultValue="0"
            className="sort"
          >
            <option value="0" disabled>
              Sort
            </option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>

          <button onClick={this.props.onReset} className="resetButton">
            Reset
          </button>
        </div>
      </>
    );
  }
}

export default Controls;
