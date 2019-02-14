import React, { Component } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

class NewsList extends Component {
  state = {
    loading: false,
    articles: null
  };

  loadData = async () => {
    try {
      this.setState({
        loading: true
      });
      const response = await axios.get(
        '/v2/top-headlines?country=kr&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f'
      );
      this.setState({
        articles: response.data.articles
      });
    } catch (e) {
      console.log(e);
    }
    this.setState({
      loading: false
    });
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    const { articles, loading } = this.state;
    if (loading || !articles) {
      return <NewsListBlock>로딩중..</NewsListBlock>;
    }
    return (
      <NewsListBlock>
        {articles.map(article => (
          <NewsItem key={article.url} article={article} />
        ))}
      </NewsListBlock>
    );
  }
}

export default NewsList;
