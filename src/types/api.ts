export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button?: {
    label: string
    url: string
  }
  media: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  media: {
    alternativeText: string
    url: string
  }
}

export type TechIcon = {
  title: string
  icon: {
    alternativeText: string
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type Concept = {
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: Concept[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
}
