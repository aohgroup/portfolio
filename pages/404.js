import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Divider my={6} />
      <Box my={6} align="center">
        <Heading as="h1">404 - Not found</Heading>
        <Text>Trang bạn đang tìm kiếm không được tìm thấy</Text>
        <Button as={NextLink} href="/" colorScheme="teal">
          Trở về trang chủ
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
