import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  SimpleGrid,
  chakra,
  useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoMail
} from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import nustvondevImage from '../public/images/IMG_0004.JPG'
import hdbThumb from '../public/images/stories/12.png'
import mfwThumb from '../public/images/stories/4.png'
const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop),
  baseStyle: { objectFit: 'cover' }
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m Software Engineer in Viet Nam, i love technical and
        business!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Hoa Huu Nguyen
          </Heading>
          <p>Tech BDM ( Tech / Developer / Business / Driven / Manager )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src={nustvondevImage}
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          👨‍💻 Greetings, I am Hoa, a software engineer currently employed at
          Hutech University. Presently, my focus lies in the study and
          implementation of algorithms, concurrently managing various projects
          utilizing technologies such as Node.js, Go, and others. Feel free to
          reach out to me via email at{' '}
          <Link
            as={NextLink}
            href="mailto:hoahuunguyen.dev@gmail.com"
            passHref
            target="_blank"
          >
            hoahuunguyen.dev@gmail.com
          </Link>
          .
        </Paragraph>
        <Paragraph>
          🌱 With a wealth of experience, I am a Software Engineer passionate
          not only about technology but also about the synergy between technical
          expertise and business acumen .
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Personal Attributes
        </Heading>

        <List>
          <ListItem>
            &bull; High sense of responsibility, exercising caution in every
            assigned task.
          </ListItem>
          <ListItem>&bull; Quick grasp of emerging technologies.</ListItem>
          <ListItem>
            &bull; Capable of working independently or collaboratively in a
            team.
          </ListItem>
          <ListItem>&bull; Effective under high-pressure situations.</ListItem>
          <ListItem>
            &bull; Accumulated significant experience in the software industry.
          </ListItem>
          <ListItem>&bull; Strong self-learning abilities.</ListItem>
        </List>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>

        <BioSection>
          <BioYear>2020 to present</BioYear>
          Studying on HUTECH University
        </BioSection>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Music, Podcast, Reading Technology News, Market Research, Gaming,
          Traveling, Coffee, Design System,
        </Paragraph>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/hoahuunguyen-dev/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                hoahuunguyen-dev
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/nustvondev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @nustvondev
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/vjetnodejs/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                Hoa Huu Nguyen
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:hoahuunguyen.dev@gmail.com" target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={<IoMail />}>
                hoahuunguyen.dev@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/j4m3s" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @j4m3s
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://tuoitre.vn/san-choi-hoc-thuat-cua-sinh-vien-cong-nghe-thong-tin-truong-hutech-20210311161745798.htm"
            title="2020"
            thumbnail={mfwThumb}
          >
            The second prize in My First Web 2020, organized by iNET.
          </GridItem>
          <GridItem
            href="https://www.hutech.edu.vn/homepage/tin-tuc/hoat-dong-sinh-vien/14614016-sinh-vien-khoa-cong-nghe-thong-tin-trinh-lang-nhieu-phan-mem-co-tinh-ung-dung-cao-tai-cuoc-thi-hdban"
            title="2023"
            thumbnail={hdbThumb}
          >
            The second prize in HDBank Hackathon, organized by HDBank, AWS.
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
