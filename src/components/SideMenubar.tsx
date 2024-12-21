import React from 'react';
import { Box, Stack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SideMenubar: React.FC = () => {
  return (
    <Box w="200px" bg="gray.100" p={4}>
      <Stack gap={4}>
        <Link to="/a" style={{ width: '100%' }}>
          <Button w="100%">A</Button>
        </Link>
        <Link to="/b" style={{ width: '100%' }}>
          <Button w="100%">B</Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default SideMenubar;