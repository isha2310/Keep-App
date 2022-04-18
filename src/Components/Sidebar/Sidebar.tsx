import { FC } from 'react';
import {
  IconButton, SideButton, TextButton, Wrapper,
} from './utils.styled';
import KeepIcon from '../../Assets/keep.svg';
import Archieves from '../../Assets/archive.svg';

type Props = {
    active: string,
    handleActiveState: () => void,
    isSidebarActive: boolean,
    sideBarWidth: string[]
}

const Sidebar: FC <Props> = ({
  active, handleActiveState, isSidebarActive, sideBarWidth,
}) => {
  let width = {
    widths: (isSidebarActive ? sideBarWidth[1] : sideBarWidth[0]), boxShadow: (!!isSidebarActive),
  };

  return (
    <Wrapper
      {...width}
    >
      <SideButton
        onClick={handleActiveState}
      >
        <IconButton
          src={KeepIcon}
          style={active === 'Keep' ? {
            backgroundColor: '#eddeff',
            border: '2px solid #8019ff',
            filter: 'contrast(1)',
            opacity: '0.9',
          } : {}}
        />
        <TextButton>Notes</TextButton>
      </SideButton>
      <SideButton
        onClick={handleActiveState}
      >
        <IconButton
          src={Archieves}
          style={active === 'Archieves' ? {
            backgroundColor: '#eddeff', border: '2px solid #8019ff', filter: 'contrast(1)', opacity: '0.9',
          } : {}}
        />
        <TextButton>Archieves</TextButton>
      </SideButton>
    </Wrapper>
  );
};

export default Sidebar;
