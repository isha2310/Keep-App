import { FC } from "react"
import { IconButton, SideButton, TextButton, Wrapper } from "./utils.styled"
import KeepIcon from '../../Assets/keep.svg'
import Archieves from '../../Assets/archive.svg'

type Props = {
    active: String,
    handleActiveState: () => void
}

const Sidebar: FC <Props> = ({active, handleActiveState}) => {
    return(
        <Wrapper>
            <SideButton onClick={handleActiveState} >
                <IconButton src={KeepIcon} style={ active === 'Keep' ? {backgroundColor: '#eddeff', border: '2px solid #8019ff',
                filter: 'contrast(1)'} : {}} />
                <TextButton>Notes</TextButton>
            </SideButton>
            <SideButton onClick={handleActiveState} >
                <IconButton src={Archieves} style={ active === 'Archieves' ? {backgroundColor: '#eddeff', border: '2px solid #8019ff',filter: 'contrast(1)'} : {}} />
                <TextButton>Archieves</TextButton>
            </SideButton>
        </Wrapper>
    )
}

export default Sidebar