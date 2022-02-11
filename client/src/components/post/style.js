import styled from "styled-components";

export const PostContainer = styled.div`
    width: 700px;
    margin: 0 auto;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    
    @media (max-width: 800px) {
        width: 80%
    }
`
export const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`