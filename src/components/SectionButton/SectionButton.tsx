import type { Dispatch, SetStateAction } from 'react';

import { AiOutlineFire, AiOutlineUser } from 'react-icons/ai';
import { BiUpvote } from 'react-icons/bi';
import { ButtonContainer } from './SectionButton.styles';
import type { SectionOption } from '../../pages/Home/Home.types';

interface ISectionButtonProps {
  section: SectionOption;
  selectedSection: string;
  setSelectedSection: Dispatch<SetStateAction<string>>;
}

export const SectionButton = (props: ISectionButtonProps) => {
  const { section, selectedSection, setSelectedSection } = props;

  return (
    <ButtonContainer
      color={section.color}
      selected={selectedSection === section.value}
      onClick={() => setSelectedSection(section.value)}
    >
      <p>
        <span>
          {section.icon === 'AiOutlineFire' ? <AiOutlineFire /> : null}
          {section.icon === 'BiUpvote' ? <BiUpvote /> : null}
          {section.icon === 'AiOutlineUser' ? <AiOutlineUser /> : null}
        </span>
        {section.label}
      </p>
    </ButtonContainer>
  );
};
