import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import img1 from '../public/images/stories/1.png'
import img2 from '../public/images/stories/2.png'
import img3 from '../public/images/stories/3.png'
import img4 from '../public/images/stories/4.png'
import img5 from '../public/images/stories/5.png'
import img6 from '../public/images/stories/6.png'
import img7 from '../public/images/stories/7.png'
import img8 from '../public/images/stories/8.png'
import img9 from '../public/images/stories/9.png'
import img10 from '../public/images/stories/10.png'
import img11 from '../public/images/stories/11.png'
import img12 from '../public/images/stories/12.png'
import img13 from '../public/images/stories/13.png'
import img14 from '../public/images/stories/14.png'

const stories = [
  {
    title: '2019',
    thumbnail: img1,
    href: '#'
  },
  {
    title: '2020',
    thumbnail: img2,
    href: '#'
  },
  {
    title: '2021',
    thumbnail: img3,
    href: '#'
  },
  {
    title: '2021',
    thumbnail: img4,
    href: '#'
  },
  {
    title: '2021',
    thumbnail: img5,
    href: '#'
  },
  {
    title: '2022',
    thumbnail: img6,
    href: '#'
  },
  {
    title: '2022',
    thumbnail: img7,
    href: '#'
  },
  {
    title: '2022',
    thumbnail: img8,
    href: '#'
  },
  {
    title: '2019',
    thumbnail: img9,
    href: '#'
  },
  {
    title: '2023',
    thumbnail: img10,
    href: '#'
  },
  {
    title: '2023',
    thumbnail: img11,
    href: '#'
  },
  {
    title: '2023',
    thumbnail: img12,
    href: '#'
  },
  {
    title: '2023',
    thumbnail: img13,
    href: '#'
  },
  {
    title: '2023',
    thumbnail: img14,
    href: '#'
  }
].reverse()
const itemsPerPage = 2
const totalPages = Math.ceil(stories.length / itemsPerPage)

const Memories = () => (
  <Layout title="Memories">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Memories
      </Heading>
      {Array.from({ length: totalPages }, (_, page) => {
        const startIndex = page * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        const itemsOnPage = stories.slice(startIndex, endIndex)

        return (
          <Section key={page} delay={page * 0.2}>
            <SimpleGrid columns={[1, 2, 2]} gap={6}>
              {itemsOnPage.map((post, index) => (
                <GridItem
                  key={index}
                  title={post.title}
                  thumbnail={post.thumbnail}
                  href={post.href}
                />
              ))}
            </SimpleGrid>
          </Section>
        )
      })}
    </Container>
  </Layout>
)

export default Memories
export { getServerSideProps } from '../components/chakra'
