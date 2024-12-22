import React from 'react';
import { Box, Flex, Heading, Button, VStack, HStack, Card, Textarea, Input } from '@chakra-ui/react';

const ReflectionDetailPage: React.FC = () => {
  return (
    <Flex direction="column" height="100vh">
      {/* Header Area */}
      <Flex justifyContent="space-between" alignItems="center" p={4} borderBottom="1px solid" borderColor="gray.200">
        <Heading as="h1" size="3xl">2024-12-24 (수)</Heading>
        <HStack gap={4}>
          <Button variant='surface'>Button 1</Button>
          <Button variant='surface'>Button 2</Button>
          <Button variant='solid'>Button 3</Button>
        </HStack>
      </Flex>

      {/* Content Area */}
      <Flex flex="1" overflow="hidden">
        {/* Area 2 */}
        <Box flex="1" maxW="33%" overflowY="auto" p={4} borderRight="1px solid" borderColor="gray.200">
          <VStack gap={4}>
            {/* Content for Area 2 */}
            <Card.Root size="lg" minWidth="100%">
							<Card.Header>
								<Heading size="md">제 1 독서</Heading>
							</Card.Header>
							<Card.Body>
								▥ 사무엘기 하권의 말씀입니다.7,1-5.8ㄷ-12.14ㄱ.16
								다윗 1 임금이 자기 궁에 자리 잡고,
								주님께서 그를 사방의 모든 원수에게서 평온하게 해 주셨을 때이다.
								2 임금이 나탄 예언자에게 말하였다.
								“보시오, 나는 향백나무 궁에 사는데,
								하느님의 궤는 천막에 머무르고 있소.”
								3 나탄이 임금에게 말하였다.
								“주님께서 임금님과 함께 계시니,
								가셔서 무엇이든 마음 내키시는 대로 하십시오.”
								4 그런데 그날 밤, 주님의 말씀이 나탄에게 내렸다.
								5 “나의 종 다윗에게 가서 말하여라.
								‘주님이 이렇게 말한다.
								내가 살 집을 네가 짓겠다는 말이냐?
								8 나는 양 떼를 따라다니던 너를 목장에서 데려다가,
								내 백성 이스라엘의 영도자로 세웠다.
								9 또한 네가 어디를 가든지 너와 함께 있으면서,
								모든 원수를 네 앞에서 물리쳤다.
								나는 너의 이름을 세상 위인들의 이름처럼 위대하게 만들어 주었다.
								10 나는 내 백성 이스라엘을 위하여 한곳을 정하고,
								그곳에 그들을 심어 그들이 제자리에서 살게 하겠다.
								그러면 이스라엘은 더 이상 불안해하지 않아도 되고,
								다시는 전처럼, 불의한 자들이 그들을 괴롭히지 않을 것이다.
								11 곧 내가 나의 백성 이스라엘에게 판관을 임명하던 때부터 해 온 것처럼,
								나는 너를 모든 원수에게서 평온하게 해 주겠다.
								더 나아가 주님이 너에게 한 집안을 일으켜 주리라고 선언한다.
								12 너의 날수가 다 차서 조상들과 함께 잠들게 될 때,
								네 몸에서 나와 네 뒤를 이을 후손을 내가 일으켜 세우고,
								그의 나라를 튼튼하게 하겠다.
								14 나는 그의 아버지가 되고 그는 나의 아들이 될 것이다.
								16 너의 집안과 나라가 네 앞에서 영원히 굳건해지고,
								네 왕좌가 영원히 튼튼하게 될 것이다.’”
								주님의 말씀입니다.
							</Card.Body>
            </Card.Root>
            <Card.Root size="lg" minWidth="100%">
							<Card.Header>
								<Heading size="md">복음</Heading>
							</Card.Header>
							<Card.Body>
								✠ 루카가 전한 거룩한 복음입니다.1,67-79
								그때에 요한의 67 아버지 즈카르야는 성령으로 가득 차 이렇게 예언하였다.
								68 “주 이스라엘의 하느님께서는 찬미받으소서.
								그분께서는 당신 백성을 찾아와 속량하시고
								69 당신 종 다윗 집안에서 우리를 위하여 힘센 구원자를 일으키셨습니다.
								70 당신의 거룩한 예언자들의 입을 통하여 예로부터 말씀하신 대로
								71 우리 원수들에게서, 우리를 미워하는 모든 자의 손에서
								우리를 구원하시려는 것입니다.
								72 그분께서는 우리 조상들에게 자비를 베푸시고
								당신의 거룩한 계약을 기억하셨습니다.
								73 이 계약은 우리 조상 아브라함에게 하신 맹세로
								74 원수들 손에서 구원된 우리가 두려움 없이
								75 한평생 당신 앞에서 거룩하고 의롭게 당신을 섬기도록 해 주시려는 것입니다.
								76 아기야, 너는 지극히 높으신 분의 예언자라 불리고
								주님을 앞서 가 그분의 길을 준비하리니
								77 죄를 용서받아 구원됨을 주님의 백성에게 깨우쳐 주려는 것이다.
								78 우리 하느님의 크신 자비로 높은 곳에서 별이 우리를 찾아오시어
								79 어둠과 죽음의 그늘에 앉아 있는 이들을 비추시고
								우리 발을 평화의 길로 이끌어 주실 것이다.”
								주님의 말씀입니다.
							</Card.Body>
            </Card.Root>
          </VStack>
        </Box>
        

        {/* Area 3 */}
        <Box flex="2" overflowY="auto" p={4}>
					<VStack gap={4}>

						{/* 묵상 */}
						<Card.Root size="lg" minWidth="100%">
							<Card.Header>
								<Heading size="md">묵상</Heading>
							</Card.Header>
							<Card.Body>
								<Textarea
									placeholder="묵상을 입력하세요."
									size="lg"
									minH="300px"
									resize="vertical"
								/>
							</Card.Body>
						</Card.Root>

						{/* 강론 URL */}
						<Card.Root size="lg" minWidth="100%">
							<Card.Header>
								<Heading size="md">강론 URL</Heading>
							</Card.Header>
							<Card.Body>
							<Input placeholder="URL을 입력하세요." />
							</Card.Body>
						</Card.Root>

						{/* 단어 */}
						<Card.Root size="lg" minWidth="100%">
							<Card.Header>
								<Heading size="md">단어 1</Heading>
							</Card.Header>
							<Card.Body>
								<VStack gap={4}>
                  <Input placeholder="단어를 입력하세요." />
                  <Textarea
                    placeholder="설명을 입력하세요."
                    size="lg"
                    minH="300px"
                    resize="vertical"
                  />
                </VStack>
							</Card.Body>
						</Card.Root>

						<Button width="100%" variant="solid">
              단어 추가
            </Button>

					</VStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ReflectionDetailPage;