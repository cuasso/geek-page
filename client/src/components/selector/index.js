import styled from "styled-components"
import colors from "../../themes/colors"

const Selector = props => {
    const { options, defaultValue, onChange } = props
    const selected = defaultValue === 1

    return (
        <Container>
            <OptionWrapper active={selected} onClick={() => onChange(1)}>
                <Option selector='one' active={selected}>{options[0]}</Option>
            </OptionWrapper>
            <OptionWrapper active={!selected} onClick={() => onChange(2)}>
                <Option selector='two' active={!selected}>{options[1]}</Option>
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
    align-items: center;    
    animation-duration: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
    
    ${props => props.active
        ? `background-color:white;
           color: inherit;
           animation-name: ${props.selector}-active;`

        : `background-color:${colors.red};
           color: white;
           animation-name: ${props.selector};`
    }

    @keyframes one {
      from  {border-radius: 0px 0px 0px 0px;}
      to    {border-radius: 0px 0px 25px 0px;}
    }

    @keyframes two {
      from  {border-radius: 0px 0px 0px 0px;}
      to    {border-radius: 0px 0px 0px 25px;}
    }

    @keyframes one-active {
      from  {border-radius: 0px 0px 0px 0px;}
      to    {border-radius: 0px 25px 0px 0px;}
    }

    @keyframes two-active {
      from {border-radius: 0px 0px 0px 0px;}
      to   {border-radius: 25px 0px 0px 0px;}
    }
`

const Container = styled.ul`
    display: flex;
    list-style-type: none;
    width: 100%;
    height: 3rem;
`