import { Dispatch, SetStateAction } from 'react';
import Select from 'react-select';
import { SelectStyles } from './SelectContainer.styles';
import { SortOption, WindowOption } from '../../pages/Home/Home.types';

interface SelectContainerProps {
  selectedSection: string;
  selectedSortOption: SortOption;
  sortOptions: SortOption[];
  selectedWindowOption: WindowOption;
  windowOptions: WindowOption[];
  setSelectedSortOption: Dispatch<SetStateAction<SortOption>>;
  setSelectedWindowOption: Dispatch<SetStateAction<WindowOption>>;
}

export const SelectContainer = (props: SelectContainerProps) => {
  const {
    selectedSection,
    selectedSortOption,
    sortOptions,
    selectedWindowOption,
    windowOptions,
    setSelectedSortOption,
    setSelectedWindowOption,
  } = props;

  return (
    <>
      {selectedSection === 'hot' || selectedSection === 'user' ? (
        <Select
          styles={SelectStyles}
          defaultValue={selectedSortOption}
          onChange={(option) => {
            if (option) {
              setSelectedSortOption(option);
            }
          }}
          options={sortOptions}
          isSearchable={false}
        />
      ) : null}

      {selectedSection === 'top' ? (
        <Select
          styles={SelectStyles}
          defaultValue={selectedWindowOption}
          onChange={(option) => {
            if (option) {
              setSelectedWindowOption(option);
            }
          }}
          options={windowOptions}
          isSearchable={false}
        />
      ) : null}
    </>
  );
};
