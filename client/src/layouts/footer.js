import React from 'react'

import styled from 'styled-components'
import { Twitter, Google, Facebook, Youtube } from '../components/socialMedias'
import colors from '../themes/colors'

const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <Twitter />
                <Google />
                <Facebook />
                <Youtube />
            </div>
            <Link href='https://github.com/cuasso' > Powered by Cuasso</Link>
        </FooterContainer>
    )
}
const Link = styled.a`
    color: white;
    text-align: center;
    text-decoration: none;
`

const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:${colors.darkGrey};
    width: 100%;
    height: 5rem;
    min-height: max-content;;
    margin: 0 auto;
    padding: 50px 2rem;
`

export default Footer