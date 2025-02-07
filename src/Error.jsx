import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from "./Style/Button";
import styled from 'styled-components'

const Error = () => {
    return(
        <Wrapper>
            <img src='./images/error.svg' alt='error' />
            <NavLink to='/'>
            <Button className='btn'> GO BACK</Button></NavLink>
        </Wrapper>
    )
}
    

const Wrapper = styled.section`
padding: 9rem 0;
display: flex;
align-items: center;
flex-direction: column;

.btn{
    margin-top: 3rem;
    font-size: 1.8rem;
}

`;
export default Error