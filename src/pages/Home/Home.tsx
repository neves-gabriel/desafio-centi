import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import {
  HomePage,
  LoadMoreButton,
  SectionButtonsContainer,
  TopContainer,
} from './Home.styles';
import type { SectionOption, SortOption, WindowOption } from './Home.types';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { PostsContainer } from '../../components/PostsContainer';
import { SectionButton } from '../../components/SectionButton';

import { SelectContainer } from '../../components/SelectContainer';
import SECTIONS_OPTIONS from '../../config/sectionsOptions.json';
import SORT_OPTIONS from '../../config/sortOptions.json';
import WINDOW_OPTIONS from '../../config/windowOptions.json';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import { getPostsService, PostData } from '../../service/api';

const sortOptions: SortOption[] = SORT_OPTIONS;
const sectionsOptions: SectionOption[] = SECTIONS_OPTIONS;
const windowOptions: WindowOption[] = WINDOW_OPTIONS;

export const Home = () => {
  const { width } = useWindowDimensions();

  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState<'LOADING' | 'ERROR' | 'OK' | ''>('');
  const [postsData, setPostsData] = useState<PostData[]>([]);
  const [selectedSection, setSelectedSection] = useState<string>('hot');
  const [selectedSortOption, setSelectedSortOption] = useState<SortOption>({
    value: 'viral',
    label: 'Populares',
  });
  const [selectedWindowOption, setSelectedWindowOption] =
    useState<WindowOption>({
      value: 'day',
      label: 'Dia',
    });
  const [numberColumns, setNumberColumns] = useState<number>(
    Math.floor((0.9 * width) / 265)
  );
  const [postsContainerWidth, setPostsContainerWidth] = useState<string>(
    (numberColumns * 250 + (numberColumns - 1) * 15).toString()
  );

  const postsColumnsData: PostData[][] = Array.from(
    {
      length: numberColumns,
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_v, _i) => []
  );
  postsData.forEach((postData: PostData, index: number) =>
    postsColumnsData[index % numberColumns].push(postData)
  );

  useEffect(() => {
    setNumberColumns(Math.floor((0.9 * width) / 265));
    setPostsContainerWidth(
      (numberColumns * 250 + (numberColumns - 1) * 15).toString()
    );
  }, [numberColumns, width]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading('LOADING');
      try {
        const { postsData, status, success } = await getPostsService({
          section: selectedSection,
          sort: selectedSortOption.value,
          window: selectedWindowOption.value,
          page: 1,
        });
        if (success && status === 200) {
          setLoading('OK');
          setPostsData(postsData);
        }
      } catch (error) {
        setLoading('ERROR');
      }
    };
    fetchPosts();
  }, [selectedSection, selectedSortOption, selectedWindowOption]);

  const fetchMorePosts = async () => {
    try {
      const { postsData, status, success } = await getPostsService({
        section: selectedSection,
        sort: selectedSortOption.value,
        window: selectedWindowOption.value,
        page: pageNumber + 1,
      });
      if (success && status === 200) {
        setPageNumber(pageNumber + 1);
        setPostsData([...postsData]);
      }
    } catch (error) {
      setLoading('ERROR');
    }
  };

  return (
    <HomePage>
      <Header />
      <TopContainer width={postsContainerWidth}>
        <SectionButtonsContainer width={postsContainerWidth}>
          {sectionsOptions.map((section: SectionOption) => (
            <SectionButton
              key={section.id}
              section={section}
              setSelectedSection={setSelectedSection}
              selectedSection={selectedSection}
            />
          ))}
        </SectionButtonsContainer>

        <SelectContainer
          selectedSection={selectedSection}
          selectedSortOption={selectedSortOption}
          sortOptions={sortOptions}
          selectedWindowOption={selectedWindowOption}
          windowOptions={windowOptions}
          setSelectedSortOption={setSelectedSortOption}
          setSelectedWindowOption={setSelectedWindowOption}
        />
      </TopContainer>

      {loading === 'LOADING' && (
        <ReactLoading
          type={'spin'}
          color={'#6272a4'}
          height={330}
          width={185}
        />
      )}

      {loading === 'ERROR' && (
        <div>
          <h1>Erro ao carregar os posts</h1>
        </div>
      )}

      {loading === 'OK' && (
        <PostsContainer
          postsColumnsData={postsColumnsData}
          postsContainerWidth={postsContainerWidth}
        />
      )}

      <LoadMoreButton type="button" onClick={() => fetchMorePosts()}>
        Carregar mais posts
      </LoadMoreButton>
      <Footer />
    </HomePage>
  );
};
