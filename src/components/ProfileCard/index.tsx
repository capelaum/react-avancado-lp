import React from 'react'
import {
  FaBehanceSquare,
  FaDribbble,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa'
import { GrGithub } from 'react-icons/gr'
import { RiComputerLine } from 'react-icons/ri'
import { Author } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'

const icons: IconsType = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribble: <FaDribbble />,
  instagram: <FaInstagram />,
  website: <RiComputerLine />,
  behance: <FaBehanceSquare />,
  linkedin: <FaLinkedin />
}

type IconsType = {
  [key: string]: any
}

const ProfileCard: React.FC<Author> = ({
  name,
  role,
  photo,
  socialIcons,
  description
}) => (
  <S.Card>
    <S.Image src={getImageUrl(photo.url)} alt={photo.alternativeText} />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialIcons.map((item) => (
        <S.Link key={item.url}>
          <a href={item.url} title={item.title}>
            {icons[item.title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
