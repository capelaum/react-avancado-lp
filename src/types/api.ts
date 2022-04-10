export type Image = {
  alternativeText: string
  url: string
}

export type Button = {
  label: string
  url: string
}

export type LogoProps = Image

export type HeaderProps = {
  title: string
  description: string
  button?: Button
  media: Image
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  media: Image
}

export type TechIcon = {
  title: string
  icon: Image
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type Module = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: Module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  id: string
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: Button
}

export type SocialIcon = {
  title: string
  url: string
}

export type Author = {
  id?: string
  name: string
  role: string
  photo: Image
  description: string
  socialIcons: SocialIcon[]
}

export type SectionAuthorsProps = {
  title: string
  authors: Author[]
}

export type Review = {
  id: string
  name: string
  text: string
  photo: {
    url: string
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type Question = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
  extraQuestions?: Question[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps[]
  sectionAuthors: SectionAuthorsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
