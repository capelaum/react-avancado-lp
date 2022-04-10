import Container from 'components/Container'
import Heading from 'components/Heading'
import ProfileCard from 'components/ProfileCard'
import React from 'react'
import { SectionAuthorsProps } from 'types/api'
import * as S from './styles'

const SectionAboutUs = ({ title, authors }: SectionAuthorsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map((profile) => (
        <ProfileCard
          key={profile.id}
          name={profile.name}
          role={profile.role}
          photo={profile.photo}
          socialIcons={profile.socialIcons}
          description={profile.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
