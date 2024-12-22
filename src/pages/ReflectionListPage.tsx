import React, { useState } from 'react';
import { Box, Table, HStack, Flex } from '@chakra-ui/react';
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination"

const ReflectionListPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Dummy data for demonstration
  const data = Array.from({ length: 50 }, (_, index) => ({
    no: index + 1,
    date: `2023-10-${(index % 30) + 1}`,
    reflection: `Reflection ${index + 1}`,
    status: index % 2 === 0 ? 'Complete' : 'Incomplete',
  }));

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const currentData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const items = [
    { id: 10, date: "2024-12-26", reflection: "안녕하세요, 사랑하는 교우 여러분, 오늘도...", status: "-" },
    { id: 9, date: "2024-12-26", reflection: "안녕하세요, 사랑하는 교우 여러분, 오늘도...", status: "-" },
    { id: 8, date: "2024-12-26", reflection: "안녕하세요, 사랑하는 교우 여러분, 오늘도...", status: "-" },
    { id: 7, date: "2024-12-26", reflection: "안녕하세요, 사랑하는 교우 여러분, 오늘도...", status: "-" },
    { id: 6, date: "2024-12-26", reflection: "안녕하세요, 사랑하는 교우 여러분, 오늘도...", status: "-" },
    { id: 5, date: "2024-12-26", reflection: "안녕하세요, 사랑하는 교우 여러분, 오늘도...", status: "-" },
    { id: 4, date: "2024-12-26", reflection: "안녕하세요, 사랑하는 교우 여러분, 오늘도...", status: "-" },
    { id: 3, date: "2024-12-26", reflection: "안녕하세요, 사랑하는 교우 여러분, 오늘도...", status: "-" },
    { id: 2, date: "2024-12-25", reflection: "안녕하세요, 사랑하는 교우 여러분, 오늘도...", status: "임시 저장" },
    { id: 1, date: "2024-12-24", reflection: "안녕하세요, 사랑하는 교우 여러분, 오늘도...", status: "등록 완료" },
  ]

  return (
    <Box p={4}>
      <Table.Root size="lg">
        <Table.Header>
        <Table.Row>
          <Table.ColumnHeader textAlign="center">No.</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center">날짜</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center">묵상</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center">상태</Table.ColumnHeader>
        </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell textAlign="center">{item.id}</Table.Cell>
              <Table.Cell textAlign="center">{item.date}</Table.Cell>
              <Table.Cell textAlign="center">{item.reflection}</Table.Cell>
              <Table.Cell textAlign="center">{item.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Flex justifyContent="flex-end" mt={4}>
        <PaginationRoot count={20} pageSize={2} defaultPage={1} variant="solid" size="lg">
          <HStack>
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
          </HStack>
        </PaginationRoot>
      </Flex>
    </Box>
  );
};

export default ReflectionListPage;