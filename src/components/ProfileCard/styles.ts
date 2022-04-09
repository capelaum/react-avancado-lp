import styled from 'styled-components'

export const Card = styled.article`
  ${({ theme }) => `
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.medium};
    text-align: center;
  `}
`

export const Image = styled.div`
  position: relative;
  width: 12.5rem;
  height: 12.5rem;
  margin: auto;

  ${({ theme }) => `
    margin-bottom: ${theme.spacings.xsmall};
    img {
      border-radius: 100%;
    }
  `}
`

export const Name = styled.div`
  ${({ theme }) => `
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`

export const Role = styled.div`
  ${({ theme }) => `
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const SocialLinks = styled.ul`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Link = styled.li`
  ${({ theme }) => `
    display: block;
    > a {
      padding: ${theme.spacings.xxsmall};
      color: ${theme.colors.secondary};
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  `}
`

export const Description = styled.div`
  ${({ theme }) => `
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.texts};
  `}
`
