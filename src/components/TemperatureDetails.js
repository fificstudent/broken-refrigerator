import React from 'react';
import { Text, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.5rem;
  box-shadow: 0 2px 15px -3px rgb(0 0 0 / 7%), 0 10px 20px -2px rgb(0 0 0 / 4%);
  min-width: 18rem;
`;

export const TemperatureDetails = ({ title, temp }) => {
  return (
    <Card>
      <Flex
        className="card-body"
        flex="1 1 auto"
        padding="2rem"
        flexDirection={'column'}
      >
        <Text
          className="card-title"
          marginBottom="0.5rem"
          fontSize="2.4rem"
          textAlign={'center'}
          fontWeight={500}
          lineHeight={1.2}
        >
          {title}
        </Text>
        <Text
          className="card-text"
          textAlign={'center'}
          fontSize="3.6rem"
          fontWeight={200}
        >
          {temp} <span>&#176;</span>C
        </Text>
      </Flex>
    </Card>
  );
};
