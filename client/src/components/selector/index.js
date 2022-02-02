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
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
    
    ${props => props.one && (!props.active) && `animation-name: one;` }
    ${props => props.two && (!props.active) && `animation-name: two;` }

    ${props => props.two && props.active && `
        color: inherit;
        background-color:white;
        animation-name: twoActive;
    `}
    
    ${props => props.one && props.active && `
        background-color:white;
        color: inherit;
        animation-name: oneActive;
    `}

    @keyframes one {
      from  {border-radius:  0px 0px 0px 0px}
      to    {border-radius:  0px 0px 25px 0px;}
    }

    @keyframes two {
      from  {border-radius: 0px  0px 0px 0px;}
      to    {border-radius: 0px 0px 0px 25px;}
    }

    @keyframes oneActive {
      from  {border-radius:  0px 0px 0px 0px}
      to    {border-radius:  0px 25px 0px 0px}
    }

    @keyframes twoActive {
      from {border-radius: 0px  0px 0px 0px;}
      to   {border-radius: 25px 0px 0px 0px;}
    }
`

const Container = styled.ul`
    display: flex;
    list-style-type: none;
    width: 100%;
    height: 3rem;
`