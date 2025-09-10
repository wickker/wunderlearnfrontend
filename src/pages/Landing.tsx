import {
  AboutEducator,
  Hero,
  LearningEnvironment,
  Reviews,
  Subjects,
} from '@/components/Landing'

const Landing = () => {
  return (
    <main>
      <Hero />
      <AboutEducator />
      <Subjects />
      <LearningEnvironment />
      <Reviews />
    </main>
  )
}

export default Landing
