import Button from 'components/Button'
import React from 'react'
import { PricingBoxProps } from 'types/api'
import { gaEvent } from 'utils/ga'
import * as S from './styles'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

interface PricingBoxComponentProps {
  pricingBoxes: PricingBoxProps[]
}

const PricingBox = ({ pricingBoxes }: PricingBoxComponentProps) => (
  <S.Content>
    {pricingBoxes.map(
      ({
        id,
        totalPrice,
        numberInstallments,
        priceInstallment,
        benefits,
        button
      }) => (
        <S.Box key={id}>
          <S.Prices>
            <S.FullPrice>
              De <span>R${totalPrice}</span> por apenas
            </S.FullPrice>
            <S.DiscountPrice>
              <span>{numberInstallments}x de</span> R${priceInstallment}
            </S.DiscountPrice>
          </S.Prices>
          <S.BenefitsList dangerouslySetInnerHTML={{ __html: benefits }} />

          <Button href={button.url} onClick={onClick} withPrice>
            <p>{button.label}</p>
            <div>
              <S.ButtonFullPrice>R${totalPrice}</S.ButtonFullPrice>
              <S.ButtonDiscountPrice>
                R${numberInstallments * priceInstallment}
              </S.ButtonDiscountPrice>
            </div>
          </Button>
        </S.Box>
      )
    )}
  </S.Content>
)

export default PricingBox
