import styled from "styled-components"
import colors from "../../themes/colors"

const Selector = props => {
    const { options, defaultValue, onChange } = props
    const selected = defaultValue === 1
    
    return (
        <Container>
            <OptionWrapper active={selected} onClick={() => onChange(1)}>
                <Option one active={selected}>{options[0]}</Option>
            </OptionWrapper>
            <OptionWrapper active={!selected} onClick={() => onChange(2)}>
                <Option two active={!selected}>{options[1]}</Option>
            </OptionWrapper>
        </Container>
    )
}

export default Selector

const OptionWrapper = styled.div`
    width: 50%;
    height: 100%;
    background-color:${props => props.active ? colors.red : `white`};
`
const Option = styled.li`
    display: inline-flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color:${colors.red};
    align-items: center;
    color: white;    
    
    ${props => props.one && (!props.active) && 'border-radius: 0px 0px 25px 0px;'}
    ${props => props.two && (!props.active) && 'border-radius: 0px 0px 0px 25px;'}

    ${props => props.two && props.active && `
        color: inherit;
        background-color:white;
        border-radius: 25px 0px 0px 0px;
    `}
    
    ${props => props.one && props.active && `
        background-color:white;
        color: inherit;
        border-radius: 0px 25px 0px 0px;
    `}
`

const Container = styled.ul`
    display: flex;
    list-style-type: none;
    width: 100%;
    height: 3rem;
`