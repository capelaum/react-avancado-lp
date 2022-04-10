import Container from 'components/Container'
import Heading from 'components/Heading'
import Image from 'next/image'
import React from 'react'
import { SectionAboutProjectProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'

const SectionAboutProject = ({
  title,
  description,
  media
}: SectionAboutProjectProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <Image
            src={getImageUrl(media.url)}
            alt={media.alternativeText}
            layout="fill"
            objectFit="contain"
          />
        </S.Image>
        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
