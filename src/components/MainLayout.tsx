import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import SideMenubar from './SideMenubar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Flex>
      <SideMenubar />
      <Box flex="1" p={4}>
        {children}
      </Box>
    </Flex>
  );
};

export default MainLayout;