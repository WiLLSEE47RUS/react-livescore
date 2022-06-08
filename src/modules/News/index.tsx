import React, { useEffect, useMemo, useState } from 'react';
import { NewsContent, NewsGridItem, NewsWrapper } from './News.styled';
import { InputAdornment, TextField, Tooltip } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useDebounce } from '../../hooks/useDebounce';
import { DEFAULT_DEBOUNCE } from '../../constants/api.constants';
import { useGetNewsQuery } from '../../services/news';
import { Spinner } from '../../components/Spinner';

const News = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isInit, setIsInit] = useState(false);

  const debouncedSearchValue = useDebounce(searchValue, DEFAULT_DEBOUNCE);

  useEffect(() => {
    setIsInit(true);
  }, []);

  const { data, isLoading, isFetching } = useGetNewsQuery(isInit ? debouncedSearchValue : searchValue);
  const newsData = useMemo(() => data && data.articles || [], [data]);

  const handleNewsClick = (url: string) => {
    if(url) window.open(url, '_blank').focus();
  };

  return (
    <NewsWrapper>
      <TextField
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        variant='outlined'
        placeholder='Название новости'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Search />
            </InputAdornment>
          ),
        }}
      />
      {newsData && !isLoading && !isFetching ? (
        <NewsContent>
          {newsData.map(news => (
            <Tooltip title={`Источник: ${ news.source.name }`} onClick={() => handleNewsClick(news.url)}>
              <NewsGridItem>
                <img src={news.urlToImage} alt='logo' />
                <h2>{news.title}</h2>
                <p>{news.description}</p>
              </NewsGridItem>
            </Tooltip>
          ))}
        </NewsContent>
      ) : (
        <Spinner width="50px" />
      )}
    </NewsWrapper>
  );
};

export default News;
