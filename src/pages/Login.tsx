import React from 'react';
import { Box, Flex, Heading, Stack, Input, Button } from '@chakra-ui/react';

const Login: React.FC = () => {
  return (
    <Flex height="100vh">
      <Box flex="1" display="flex" alignItems="center" justifyContent="flex-end">
        <Flex direction="column" align="flex-start" pb={20}>
          <Heading as="h1" size="7xl">Welcome,</Heading>
          <Heading as="h1" size="4xl">오늘의 말씀 관리자 페이지입니다.</Heading>
        </Flex>
      </Box>
    <Box width="10%" />
      <Box flex="1" display="flex" alignItems="center" justifyContent="flex-start">
        <Box p={8} borderWidth={1} borderRadius="lg" boxShadow="lg" width="100%" maxWidth="md" bg="white">
          <Stack gap={4}>
            <Box width="100%">
              <label htmlFor="email">ID</label>
              <Input id="email" type="email" />
            </Box>
            <Box width="100%">
              <label htmlFor="password">Password</label>
              <Input id="password" type="password" />
            </Box>
            <Button width="100%">Login</Button>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;