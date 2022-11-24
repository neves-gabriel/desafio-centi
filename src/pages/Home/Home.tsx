import React, { useEffect, useState } from 'react';

import { HomePage, SectionButtonsContainer, TopContainer } from './Home.styles';
import type { SectionOption, SortOption, WindowOption } from './Home.types';
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
      const { postsData, status, success } = await getPostsService({
        section: selectedSection,
        sort: selectedSortOption.value,
        window: selectedWindowOption.value,
        page: 1,
      });
      if (success && status === 200) {
        setPostsData(postsData);
      }
    };
    fetchPosts();
  }, [selectedSection, selectedSortOption, selectedWindowOption]);

  return (
    <HomePage>
      <Header />
      <TopContainer width={postsContainerWidth}>
        <SectionButtonsContainer>
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
      <PostsContainer
        postsColumnsData={postsColumnsData}
        postsContainerWidth={postsContainerWidth}
      />
    </HomePage>
  );
};
