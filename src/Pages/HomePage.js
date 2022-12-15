import {
  Box,
  Center,
  Text,
  UnorderedList,
  ListItem,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Home() {
  const navigate = useNavigate();
  const base_url = 'http://localhost:5000/api';
  return (
    <Center height="100vh">
      <Box>
        <Text
          fontSize="2.4rem"
          textAlign={'center'}
          fontWeight={500}
          lineHeight={1.2}
          paddingBottom="1.2rem"
        >
          Welcome to the Broken Fridge Study
        </Text>
        <Center>
          <UnorderedList textAlign={'center'} paddingBottom="1.2rem">
            <ListItem
              className="card-title"
              marginBottom="0.5rem"
              fontSize="1.5rem"
              textAlign={'left'}
              fontWeight={400}
              lineHeight={1}
            >
              Study Instruction1
            </ListItem>
            <ListItem
              className="card-title"
              marginBottom="0.5rem"
              fontSize="1.5rem"
              textAlign={'left'}
              fontWeight={400}
              lineHeight={1}
            >
              Study Instruction2
            </ListItem>
            <ListItem
              className="card-title"
              marginBottom="0.5rem"
              fontSize="1.5rem"
              textAlign={'left'}
              fontWeight={400}
              lineHeight={1}
            >
              Study Instruction3
            </ListItem>
          </UnorderedList>
        </Center>
        <Center>
          <Button
            colorScheme={'blue'}
            onClick={() => {
              axios.post(`${base_url}/users`, {}).then((res) => {
                sessionStorage.setItem('userId', res.data._id )
              });
              navigate('/test')
            }}
          >
            Start study
          </Button>
        </Center>
      </Box>
    </Center>
  );
}
