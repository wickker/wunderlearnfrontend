import { Award, BookOpen, Briefcase, Users } from 'lucide-react'
import { EntryAnimation } from '@/components/commons'

const sections = [
  {
    icon: BookOpen,
    title: 'MOE Teaching Excellence',
    description: `Deep familiarity with Singapore's MOE curriculum and assessment standards ensures lessons are aligned to current syllabus outcomes, exam formats, and marking expectations. Teaching is regularly updated in response to MOE/SEAB syllabus revisions and assessment changes, so students are always prepared for what is tested, how it is evaluated, and the skills required to score well`,
    imagePosition: 'left',
  },
  {
    icon: Users,
    title: 'Boutique Approach',
    description: `A boutique, small-group model is designed for quality, not scale. With only 6 to 8 students per class, every learner receives close guidance, detailed feedback, and consistent progress tracking. Lessons are structured to build strong writing and critical thinking, while creating a safe, supportive environment for active participation.\n\nLanguage grows through use, so students regularly practise speaking, presenting, and expressing ideas with confidence. This balance of personalised attention and collaborative learning helps students make meaningful, measurable improvement.`,
    imagePosition: 'right',
  },
  {
    icon: Award,
    title: 'Proven Results',
    description:
      '100% of students have shown strong improvement in English and Humanities, with many achieving their target grades for major examinations (PSLE, O-Levels and A-Levels/GP). Lessons focus on exam-proven strategies, clear writing frameworks, and effective answering techniques to help students maximise marks and perform with confidence.',
    imagePosition: 'left',
  },
  {
    icon: Briefcase,
    title: 'CV & Scholarship Coaching',
    description: `Beyond academic results, students are coached to position themselves for the opportunities they want. From sprucing up scholarship applications to refining CVs and portfolios, students are guided through education pathway decisions so their strengths come through clearly and their applications stand out.`,
    imagePosition: 'right',
  },
] as const

const AboutEducator = () => {
  return (
    /* biome-ignore lint: default */
    <section
      className='flex w-[100dvw] scroll-mt-18 justify-center bg-beige'
      id='about-educator'
    >
      <div className='w-full max-w-7xl px-6 py-18'>
        <EntryAnimation>
          <h2 className='text-center font-heading text-4xl lg:text-5xl'>
            Meet Your <span className='text-sage'>Dedicated Educator</span>
          </h2>

          <p className='mt-4 mb-10 text-center text-base text-zinc-500 lg:text-l'>
            With over 12 years of experience as a Ministry of Education teacher,
            I've witnessed firsthand the transformative power of personalized
            education in small, nurturing environments.
          </p>
        </EntryAnimation>

        <div className='mt-12 flex flex-col gap-12 lg:gap-16'>
          {sections.map((section) => (
            <EntryAnimation key={section.title}>
              <article
                className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                  section.imagePosition === 'left' ? '' : 'lg:grid-flow-dense'
                }`}
              >
                <div
                  className={`flex items-center justify-center ${
                    section.imagePosition === 'right' ? 'lg:col-start-2' : ''
                  }`}
                >
                  <img
                    src='https://placehold.co/500x300'
                    alt={section.title}
                    className='h-auto w-full max-w-[500px] rounded-xl'
                  />
                </div>

                <div className='flex flex-col justify-center'>
                  <div className='mb-4 flex items-center gap-3'>
                    <section.icon className='h-6 w-6 text-sage' />
                    <h3 className='font-heading font-semibold text-2xl lg:text-3xl'>
                      {section.title}
                    </h3>
                  </div>
                  <p className='whitespace-pre-line text-sm text-zinc-500 lg:text-base'>
                    {section.description}
                  </p>
                </div>
              </article>
            </EntryAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutEducator
