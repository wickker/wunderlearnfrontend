import { BookOpen, PenTool } from 'lucide-react'
import { EntryAnimation } from '@/components/commons'
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
      'Grammar & vocabulary',
      'Creative writing',
      'Comprehension skills',
      'Oral communication',
    ],
  },
] as const

const secondarySubects: Subject[] = [
  {
    name: 'English Language',
    color: 'bg-navy-dark',
    description:
      'Master language skills with focus on synthesis, writing excellence, and oral communication for O-Level and N-Level examinations',
    keyFocusAreas: [
      'Comprehension & synthesis',
      'Writing excellence',
      'Language control',
      'Oral proficiency',
    ],
  },
  {
    name: 'Literature',
    color: 'bg-sage',
    description:
      'Develop critical literary analysis skills for deep textual appreciation and examination success',
    keyFocusAreas: [
      'Analysis based on the SPECS and SLIMS framework',
      'Close annotations of prescribed texts',
    ],
  },
  {
    name: 'Humanities',
    description:
      'Build strong analytical and inquiry skills through source-based learning for History, Geography, and Social Studies examinations',
    color: 'bg-navy-dark',
    keyFocusAreas: [
      'Source analysis skills',
      'Explanation and elaboration',
      'Develop an inquiry mindset',
    ],
  },
] as const

type SubjectCardProps = {
  subject: Subject
}

const SubjectCard = ({ subject }: SubjectCardProps) => {
  return (
    <article className='group flex h-full flex-col rounded-2xl border border-zinc-300 bg-beige p-8'>
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
                <div className='aspect-square h-1.5 w-1.5 rounded-full bg-sage' />
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
  return (
    <section className='mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-18'>
      <EntryAnimation>
        <h2 className='text-center font-heading text-4xl lg:text-5xl'>
          Subjects We <span className='text-sage'>Excel In</span>
        </h2>

        <p className='mt-4 mb-10 text-center text-base text-zinc-500 lg:text-l'>
          Specialized tuition programs designed to build confidence and achieve
          academic excellence
        </p>
      </EntryAnimation>

      <div className='grid w-full grid-cols-1 gap-6 lg:grid-cols-[1fr_3fr] lg:items-stretch'>
        {/* Primary Section */}
        <section className='flex h-full flex-col'>
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
        <section className='flex h-full flex-col'>
          <div className='mb-6 flex items-center gap-4'>
            <div className='icon-container'>
              <PenTool className='h-6 w-6 text-sage' />
            </div>
            <h3 className='mb-2 font-heading font-semibold text-xl'>
              Secondary Level
            </h3>
          </div>
          <div className='grid flex-1 grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch'>
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
