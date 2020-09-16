import React from 'react';
import styled from '@emotion/styled';

const Message = styled.div`
    position: absolute;
    top: 6rem;
    left: 2.6rem;
    width: calc(100% - 5rem);
    border-radius: .4rem;
    padding: .2rem;
`

const ErrorText = styled.p`
    font-size: 1.4rem;
    font-weight: bolder;
    color: red;
    text-transform: uppercase;
    text-align: center;
`

const Warn = ({warn}) => {
    return (
        <Message>
            <ErrorText>{warn}</ErrorText>
        </Message>
    );
}

export default Warn;
