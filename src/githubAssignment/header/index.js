import React from 'react'
import { WrapperDiv } from './styles';
import Title from './components/title';
import SelectionList from './components/selectionList';

/** Header Has two components 
 *  Title to show Heading Link facebook/react and stats on the right
 *  Selection List two show various selection of github repo like Code, issues, etc. */
const Header = () => {

    return(
    <WrapperDiv>
        <Title />
        <SelectionList />
    </WrapperDiv>
    )
}

export default Header;