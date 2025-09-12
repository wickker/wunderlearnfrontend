import {
  AboutEducator,
  CtaAndContact,
  Hero,
  LearningEnvironment,
  Reviews,
  Subjects,
  WhyChooseUs,
} from '@/components/Landing'

const Landing = () => {
  return (
    <main>
      <Hero />
      <AboutEducator />
      <Subjects />
      <LearningEnvironment />
      <Reviews />
      <WhyChooseUs />
      <CtaAndContact />
    </main>
  )
}

export default Landing
