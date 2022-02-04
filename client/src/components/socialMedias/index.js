import styled from "styled-components"
import colors from "../../themes/colors"

export const Twitter = () => (
    <Container>
        <Svg viewBox="0 -7 15 30">
            <path d="M15.36 3.434c-0.542 0.241-1.124 0.402-1.735 0.476 0.624-0.374 1.103-0.966 1.328-1.67-0.583 0.346-1.23 0.598-1.917 0.733-0.551-0.587-1.336-0.954-2.205-0.954-1.668 0-3.020 1.352-3.020 3.019 0 0.237 0.026 0.467 0.078 0.688-2.51-0.126-4.735-1.328-6.224-3.155-0.261 0.446-0.41 0.965-0.41 1.518 0 1.048 0.534 1.972 1.344 2.514-0.495-0.016-0.961-0.151-1.368-0.378 0 0.013 0 0.025 0 0.038 0 1.463 1.042 2.683 2.422 2.962-0.253 0.069-0.52 0.106-0.796 0.106-0.194 0-0.383-0.018-0.568-0.054 0.384 1.2 1.5 2.073 2.821 2.097-1.034 0.81-2.335 1.293-3.75 1.293-0.244 0-0.484-0.014-0.72-0.042 1.336 0.857 2.923 1.357 4.63 1.357 5.554 0 8.592-4.602 8.592-8.593 0-0.13-0.002-0.261-0.009-0.39 0.59-0.426 1.102-0.958 1.507-1.563z" />
        </Svg>
    </Container>
)

export const Google = () => (
    <Container>
        <Svg viewBox="-13 -13 72 72">
            <path d="M48,22h-5v-5h-4v5h-5v4h5v5h4v-5h5 M16,21v6.24h8.72c-0.67,3.76-3.93,6.5-8.72,6.5c-5.28,0-9.57-4.47-9.57-9.75
s4.29-9.74,9.57-9.74c2.38,0,4.51,0.82,6.19,2.42v0.01l4.51-4.51C23.93,9.59,20.32,8,16,8C7.16,8,0,15.16,0,24s7.16,16,16,16
c9.24,0,15.36-6.5,15.36-15.64c0-1.17-0.11-2.29-0.31-3.36C31.05,21,16,21,16,21z" />
        </Svg>
    </Container >
)

export const Facebook = () => (
    <Container>
        <Svg viewBox="0 -7 16 30">
            <path d="M12 3.303h-2.285c-0.27 0-0.572 0.355-0.572 0.831v1.65h2.857v2.352h-2.857v7.064h-2.698v-7.063h-2.446v-2.353h2.446v-1.384c0-1.985 1.378-3.6 3.269-3.6h2.286v2.503z" />
        </Svg>
    </Container>
)

export const Youtube = () => (
    <Container>
        <Svg viewBox="-150 -150 800 800">
            <path d="M459,61.2C443.7,56.1,349.35,51,255,51c-94.35,0-188.7,5.1-204,10.2C10.2,73.95,0,163.2,0,255s10.2,181.05,51,193.8
          C66.3,453.9,160.65,459,255,459c94.35,0,188.7-5.1,204-10.2c40.8-12.75,51-102,51-193.8S499.8,73.95,459,61.2z M204,369.75v-229.5
          L357,255L204,369.75z" />
        </Svg>
    </Container >
)


const Container = styled.a`
    width: 3rem;
    height: 3rem;    
    float: left;
    margin: .5rem 1rem .5rem 0;
    color: ${colors.white};
    border: .125rem solid #f3f3f3;
    box-shadow: 0 0 8px 0 rgba(50, 50, 50, 0.15);
    border-radius: 50%;
    transition: 250ms;

    &&:hover,
    :focus {
        outline-color: inherit;
        color: ${colors.lightRed};
        box-shadow: 0 0 24px 0 ${colors.lightRed}
    }

    @media (max-width: 600px) {
        width: 2rem;
        height: 2rem;
  }
`

const Svg = styled.svg`
    width: 100%;
    max-width: 5rem;
    height: 100%;
    max-height: 5rem;
    display: block;
    margin: 0 auto;
    fill: currentColor
`