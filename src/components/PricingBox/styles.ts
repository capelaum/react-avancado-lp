import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  gap: 4rem;

  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: ${theme.spacings.medium} calc(${theme.spacings.medium} / 2);

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.large} ${theme.spacings.medium};
      flex-direction: row;
      justify-content: center;
      align-items: start;
      gap: 2rem;
    `}
  `}
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};

    border-radius: ${theme.border.radius};
    background: ${theme.colors.white};
    width: 100%;

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.medium};
      max-width: 72rem;
    `}
  `}
`

export const Prices = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: ${theme.spacings.medium};
    ${media.greaterThan('medium')`
    margin-bottom: ${theme.spacings.large};
  `}
  `}
`

export const FullPrice = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.large};
    font-weight: 400;
    span {
      text-decoration: line-through;
    }
  `}
`

export const DiscountPrice = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    span {
      color: ${theme.colors.texts};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export const BenefitsList = styled.div`
  ul {
    ${({ theme }) => css`
      list-style: none;
      margin-bottom: ${theme.spacings.large};
    `}
  }

  li {
    ${({ theme }) => css`
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.small};
      position: relative;
      padding-left: ${theme.spacings.small};

      &::after {
        content: ' ';
        position: absolute;
        width: 0.9rem;
        height: 0.9rem;
        top: 0.9rem;
        left: 0rem;
        border-radius: 100%;
        background: ${theme.colors.secondary};
      }

      &:not(:last-child) {
        margin-bottom: ${theme.spacings.xsmall};
      }
    `}
  }
`

export const ButtonFullPrice = styled.span`
  ${({ theme }) => css`
    text-decoration: line-through;
    opacity: 0.9;
    margin-right: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const ButtonDiscountPrice = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`
