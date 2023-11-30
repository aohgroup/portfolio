import Layout from '@/components/layouts/article'
import Section from '@/components/section'
import NextLink from 'next/link'
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  LinkBox,
  Progress,
  Stack,
  Text
} from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
const init = {
  urlVideo: '',
  isLoading: false,
  error: '',
  success: '',
  isLoaded: false,
  urlDownloadFHD: '',
  urlDownloadHD: '',
  urlDownloadAudio: '',
  urlView: '',
  title: ''
}
const Tiktokfeature = () => {
  const [form, setForm] = useState(init)
  const handleClick = async () => {
    if (!form.urlVideo) return
    setForm({ ...form, isLoading: true })
    try {
      const urlServer = 'https://snapvideo.io/wp-json/aio-dl/video-data'
      //const videoUrl =
      // 'https://www.tiktok.com/@nguyetsieuquay.kom/video/7300795226724093192?is_from_webapp=1&sender_device=pc&web_id=7239555217447421441'
      const respone = await axios.post(urlServer, {
        url: form.urlVideo
      })
      const { data } = respone
      // Sử dụng biểu thức chính quy để lấy đoạn chuỗi mong muốn
      const match = data.medias[0].url.match(/url=(.*)/)

      // Lấy giá trị từ group trong kết quả
      const extractedString = match && match[1]

      ;(form.title = data.title),
        (form.urlView = extractedString || ''),
        (form.urlDownloadFHD = data.medias[0].url || ''),
        (form.urlDownloadHD = data.medias[1].url || ''),
        (form.urlDownloadAudio = data.medias[2].url || ''),
        (form.isLoaded = true)
      setForm({
        ...form
      })
    } catch (error) {
      console.log(error)
    }
    setForm({ ...form, isLoading: false })
  }
  return (
    <Layout title={'TikTok'}>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Get Video Tiktok
        </Heading>
        <Section delay={0.2}>
          <Box w={'100%'}>
            <LinkBox>
              <Text fontSize={14}>Enter Tiktok URL: </Text>
              <InputGroup>
                <Input
                  placeholder="Link URL..."
                  pr="4.5rem"
                  disabled={form.isLoading}
                  value={form.urlVideo}
                  onChange={e => {
                    setForm({ ...form, urlVideo: e.target.value })
                  }}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                    colorScheme={'blue'}
                    disabled={form.isLoading}
                  >
                    Get Video
                  </Button>
                </InputRightElement>
              </InputGroup>
            </LinkBox>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Box w={'100%'} textAlign={'center'}>
            {form.isLoading ? (
              <Progress size="xs" isIndeterminate />
            ) : (
              form.isLoaded && (
                <LinkBox>
                  <Text fontSize={14}>{form.title}</Text>
                  <Stack mt={{ base: 4, md: 0 }}>
                    {form.urlDownloadFHD && (
                      <Button
                        as={NextLink}
                        href={form.urlDownloadFHD}
                        colorScheme="teal"
                        target="_blank"
                      >
                        Download Video Full HD{' '}
                      </Button>
                    )}
                    {form.urlDownloadHD && (
                      <Button
                        as={NextLink}
                        href={form.urlDownloadHD}
                        colorScheme="teal"
                        target="_blank"
                      >
                        Download Video HD{' '}
                      </Button>
                    )}
                    {form.urlDownloadAudio && (
                      <Button
                        as={NextLink}
                        href={form.urlDownloadAudio}
                        colorScheme="teal"
                        target="_blank"
                      >
                        Download Audio Video{' '}
                      </Button>
                    )}
                  </Stack>
                  <Divider my={6} />
                  <AspectRatio maxW="560px">
                    <iframe
                      title={form.title}
                      src={form.urlView}
                      allowFullScreen
                    />
                  </AspectRatio>
                </LinkBox>
              )
            )}
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Tiktokfeature
