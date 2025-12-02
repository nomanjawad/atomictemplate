import { Container, Content, Section, BaseImage } from "@atoms"
import { galleryPageData } from "@data"
import { TextBlock, TextBlockOption } from "@molecules"
import { Gallery } from "@organisms/Gallery"

export default function GallerySnapshotSection() {
  const images = galleryPageData.gallery.images.map((img, index) => ({
    image: img,
    alt: `Gallery image ${index + 1}`,
  }))

  const textBlockOption: TextBlockOption = {
    title: {
      tag: "h2",
      variant: "primary",
    },
  }

  return (
    <Section>
      <Container>
        <Content direction="column" gap="xl">
          <TextBlock
            title={galleryPageData.gallery.title}
            description={galleryPageData.gallery.description}
            options={textBlockOption}
          />

          <Gallery variant="masonry" columns={3} gap={16} rounded={true}>
            {images.map((img, index) => (
              <BaseImage src={img.image} alt={img.alt} key={index} />
            ))}
          </Gallery>
        </Content>
      </Container>
    </Section>
  )
}
