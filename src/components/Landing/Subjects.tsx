import { BookOpen, PenTool } from 'lucide-react'
import { motion } from 'motion/react'
import { useMediaQuery } from 'usehooks-ts'
import { cn } from '@/utils/functions'

type Subject = {
  name: string
  description: string
  color: string
  keyFocusAreas: string[]
}

const primarySubects: Subject[] = [
  {
    name: 'English Language',
    color: 'bg-sage',
    description:
      'Comprehensive language skills development focusing on reading, writing, speaking, and listening',
    keyFocusAreas: [
      'Grammar & Vocabulary',
      'Creative Writing',
      'Comprehension Skills',
      'Oral Communication',
    ],
  },
] as const

const secondarySubects: Subject[] = [
  {
    name: 'English Language & Literature',
    color: 'bg-navy-dark',
    description:
      'Advanced language proficiency and literary analysis for O-Level and N-Level examinations',
    keyFocusAreas: [
      'Essay Writing',
      'Literature Analysis',
      'Language Paper Techniques',
      'Oral Examination Prep',
    ],
  },
  {
    name: 'Humanities',
    description:
      'Comprehensive coverage of History, Geography, and Social Studies for secondary examinations',
    color: 'bg-sage',
    keyFocusAreas: [
      'Historical Analysis',
      'Geographical Concepts',
      'Socical Studies Skills',
      'Source-Based Questions',
    ],
  },
] as const

type SubjectCardProps = {
  subject: Subject
}

const SubjectCard = ({ subject }: SubjectCardProps) => {
  return (
    <article className='group rounded-2xl border border-zinc-300 bg-beige p-8'>
      <div className={cn(`mb-6 h-2 w-full rounded-t-xl`, subject.color)} />

      <div className='space-y-4'>
        <h4 className='font-heading font-semibold text-xl'>{subject.name}</h4>
        <p className='text-zinc-500 leading-relaxed'>{subject.description}</p>
        <div className='space-y-3'>
          <h5 className='font-heading font-semibold text-sage text-sm'>
            Key Focus Areas:
          </h5>
          <ul className='space-y-2'>
            {subject.keyFocusAreas.map((area) => (
              <li
                key={area}
                className='flex items-center space-x-2 text-sm text-zinc-500'
              >
                <div className='h-1.5 w-1.5 rounded-full bg-sage' />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

const Subjects = () => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)')

  return (
    <section className='flex w-full max-w-7xl flex-col items-center px-6 py-18'>
      <motion.div
        initial={{
          opacity: 0,
          transform: isLargeScreen ? 'translateY(16px)' : 'translateY(0)',
        }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
        viewport={{ amount: 'some', once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='text-center font-heading text-4xl lg:text-5xl'>
          Subjects We <span className='text-sage'>Excel In</span>
        </h2>

        <p className='mt-4 mb-8 text-center text-base text-zinc-500 lg:text-l'>
          Specialized tuition programs designed to build confidence and achieve
          academic excellence
        </p>
      </motion.div>

      <div className='grid w-full grid-cols-1 gap-6 lg:grid-cols-[1fr_2fr]'>
        {/* Primary Section */}
        <section>
          <div className='mb-6 flex items-center gap-4'>
            <div className='icon-container'>
              <BookOpen className='h-6 w-6 text-sage' />
            </div>
            <h3 className='mb-2 font-heading font-semibold text-xl'>
              Primary Level
            </h3>
          </div>

          {primarySubects.map((s) => (
            <SubjectCard key={s.name} subject={s} />
          ))}
        </section>

        {/* Secondary Section */}
        <section>
          <div className='mb-6 flex items-center gap-4'>
            <div className='icon-container'>
              <PenTool className='h-6 w-6 text-sage' />
            </div>
            <h3 className='mb-2 font-heading font-semibold text-xl'>
              Secondary Level
            </h3>
          </div>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
            {secondarySubects.map((s) => (
              <SubjectCard key={s.name} subject={s} />
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default Subjects
