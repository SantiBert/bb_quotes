import React, { useState } from 'react';
import Quote from './components/Quote';
import styled from '@emotion/styled';

const Content = styled.div`
  display:flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007b35 0%,  #007b35 40%,  #0f574e 100%);
  background-size: 300px;
  font-size: 'Arial', Arial, Helvetica, sans-serif;
  color:#fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {

  const [quote, getQuote] = useState({});



  const callApi = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const quote = await api.json();
    console.log(quote);
  }

  return (
    <Content>
      <Quote
        quote={quote}
      />
      <Button
        onClick={callApi}
      >
        Obtener frase
      </Button>
    </Content>
  );
}

export default App;
