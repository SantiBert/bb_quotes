import React from 'react';
import styled from '@emotion/styled';

const ContenteQuote = styled.div`
    padding:3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width:800px;
    margin-top:10rem;

    @media (min-width: 992px){
        margin-top:10rem;
    }
    h1{
        font-family:Arial, Helvetica, sans-serif;
        text-align: center;
        position:relative;
        padding-left: 4rem;
    }
`;

const Quote = ({ quote }) => {
    return (
        <ContenteQuote>
            <h1>
                {quote.quote}
            </h1>
            <p>
                {quote.author}
            </p>
        </ContenteQuote>
    );
}

export default Quote;