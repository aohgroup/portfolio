import { WorkGridItem } from '@/components/grid-item'
import Layout from '@/components/layouts/article'
import Section from '@/components/section'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import thumbTiktok from '../public/images/features/tiktokfeature.png'
const Features = () => {
  return (
    <Layout title={'Features'}>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Features
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="tiktokfeature"
              thumbnail={thumbTiktok}
              title="App get tiktok"
              category="features"
            >
              Get video(FHD,HD), Audio from tiktok remove watermark
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Features
