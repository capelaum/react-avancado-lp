import Button from 'components/Button'
import Container from 'components/Container'
import Logo from 'components/Logo'
import React from 'react'
import { HeaderProps, LogoProps } from 'types/api'
import { gaEvent } from 'utils/ga'
import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

interface SectionHeroProps {
  logo: LogoProps
  header: HeaderProps
}

const SectionHero = ({ logo, header }: SectionHeroProps) => (
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{header.title}</S.Title>
          <S.Description>{header.description}</S.Description>
          <S.ButtonWrapper>
            <Button href={header.button?.url ?? '#'} onClick={onClick} wide>
              {header.button?.label}
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src={getImageUrl(header.media.url)}
          alt={header.media.alternativeText}
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
