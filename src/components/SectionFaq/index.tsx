import Container from 'components/Container'
import Heading from 'components/Heading'
import React from 'react'
import { SectionFaqProps } from 'types/api'
import * as S from './styles'

const SectionFaq = ({ title, questions, extraQuestions }: SectionFaqProps) => (
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading>{title}</Heading>

        <S.Questions>
          {questions.map(({ question, answer }) => (
            <S.Question key={question}>
              <Heading lineBottom>{question}</Heading>
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </S.Question>
          ))}
        </S.Questions>

        {extraQuestions?.map(({ question, answer }) => (
          <S.ExtraQuestion key={question}>
            <Heading lineBottom>{question}</Heading>
            <div dangerouslySetInnerHTML={{ __html: answer }} />
          </S.ExtraQuestion>
        ))}
      </Container>
    </S.Content>
  </S.Wrapper>
)

export default SectionFaq
