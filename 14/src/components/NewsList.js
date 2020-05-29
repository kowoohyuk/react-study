import React, { useState, useEffect } from 'react';
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

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category && category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&apiKey=728e9bd0bd0b41f293c05d5faa325358${query}`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(`Error: ${e}`);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }
  if (!articles) {
    return null;
  }
  return (
    <NewsListBlock>
      {articles.map( article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
