import React, { Component } from 'react';
import Header from './Header';
import NewsList from './NewsList';
import NewsTab from './NewsTab';

class App extends Component {
  state = {
    category: 'all',
  };

  handleSelect = (category) => {
    this.setState({
      category,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <NewsTab category={this.state.category} onSelect={ this.handleSelect }/>
        <NewsList category={this.state.category}/>
      </div>
    );
  }
}

export default App;
