import React from 'react';
import { Box, Stack, Button, Separator, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Avatar } from "@/components/ui/avatar"

const SideMenubar: React.FC = () => {
  return (
    <Box w="200px" bg="white" p={4} h="100vh" display="flex" flexDirection="column" justifyContent="space-between">
      <Stack gap={10} pt={10}>
      <Box textAlign="center">
        <Text fontSize="3xl" fontWeight="bold">오늘의 말씀</Text>
      </Box>
      
      <Stack gap={1}>
        <Link to="/reflection-list" style={{ width: '100%' }}>
        <Button w="100%" h="70px" fontSize="4xl" variant={location.pathname === '/reflection-list' ? 'subtle' : 'ghost'}>묵상</Button>
        </Link>
        <Separator />
        <Link to="/word-list" style={{ width: '100%' }}>
        <Button w="100%" h="70px" fontSize="4xl" variant={location.pathname === '/word-list' ? 'subtle' : 'ghost'}>단어</Button>
        </Link>
        <Separator />
        <Link to="/notification" style={{ width: '100%' }}>
        <Button w="100%" h="70px" fontSize="4xl" variant={location.pathname === '/notification' ? 'subtle' : 'ghost'}>알림</Button>
        </Link>
      </Stack>
      </Stack>
      <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" mt={4}>
      <Avatar />
      <Text mt={3} mb={10}>김재덕 신부님</Text>
      </Box>
    </Box>
  );
};

export default SideMenubar;