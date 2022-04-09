import { render, screen } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import SectionHero from '.'

describe('<Example />', () => {
  it('should render the SectionHero heading', () => {
    render(
      <ThemeProvider theme={theme}>
        <SectionHero />
      </ThemeProvider>
    )

    expect(screen.getByText('React Avançado')).toBeInTheDocument()
  })
})
