import { CheckCircle, Trophy } from 'lucide-react'
import { EntryAnimation } from '@/components/commons'

const metrics = [
  {
    label: 'Years MOE Experience',
    value: '12+',
  },
  {
    label: 'Student Improvement',
    value: '100%',
  },
  {
    label: 'Max Class Size',
    value: '8',
  },
  {
    label: 'Success Stories',
    value: '50+',
  },
] as const

// const reasons = [
//   {
//     icon: Award,
//     title: 'Ex-MOE Teacher Expertise',
//     description:
//       "12+ years of Ministry of Education experience with deep understanding of Singapore's curriculum and examination requirements.",
//     highlight: 'MOE Certified',
//   },
//   {
//     icon: Users,
//     title: 'Intimate Class Sizes',
//     description:
//       'Maximum 8 students per class ensures every student receives personalized attention and tailored learning strategies.',
//     highlight: 'Max 8 Students',
//   },
//   {
//     icon: Target,
//     title: 'Proven Track Record',
//     description:
//       '100% of our students show measurable improvement in their grades, with majority achieving their target examination results.',
//     highlight: '100% Improvement',
//   },
//   {
//     icon: Heart,
//     title: 'Boutique Experience',
//     description:
//       'Premium learning environment designed for comfort and focus, moving away from typical tuition centre atmospheres.',
//     highlight: 'Premium Environment',
//   },
//   {
//     icon: Clock,
//     title: 'Flexible Scheduling',
//     description:
//       'Weekend and evening slots available to accommodate busy student schedules without compromising on quality.',
//     highlight: 'Flexible Timing',
//   },
//   {
//     icon: BookOpen,
//     title: 'Comprehensive Coverage',
//     description:
//       'From Primary English to Secondary Humanities, we offer specialized programs for different learning levels and needs.',
//     highlight: 'Full Curriculum',
//   },
// ] as const

const pros = [
  'Maximum 8 students per class',
  'Ex-MOE teacher with 12+ years experience',
  'Premium, comfortable learning environment',
  'Personalized attention for every student',
  'Flexible scheduling options',
  '100% track record of student improvement',
] as const

const cons = [
  '20-30+ students per class',
  'Variable teacher qualifications',
  'Standard classroom setups',
  'Limited individual attention',
  'Fixed rigid schedules',
  'Mixed success rates',
] as const

const WhyChooseUs = () => {
  return (
    /* biome-ignore lint: default */
    <section
      className='flex w-[100dvw] scroll-mt-18 justify-center bg-beige'
      id='why-choose-us'
    >
      <div className='w-full max-w-7xl px-6 py-18'>
        <EntryAnimation>
          <h2 className='text-center font-heading text-4xl lg:text-5xl'>
            Why Choose <span className='text-sage'>Our Boutique Academy</span>
          </h2>

          <p className='mt-4 mb-10 text-center text-base text-zinc-500 lg:text-l'>
            Discover what sets us apart in Singapore's competitive tuition
            landscape
          </p>

          {/* Metrics */}
          <div className='grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:grid-cols-4'>
            {metrics.map((metric) => (
              <article
                key={metric.label}
                className='bg-(image:--gradient-sage) flex w-full flex-col items-center rounded-lg p-8 text-center text-cream'
              >
                <h3 className='mb-2 font-heading font-semibold text-3xl'>
                  {metric.value}
                </h3>
                <p className='text-sm'>{metric.label}</p>
              </article>
            ))}
          </div>

          {/* Reasons */}
          {/* <section className='mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr]'>
            {reasons.map((r) => (
              <article
                key={r.title}
                className='flex flex-col gap-4 rounded-lg border border-zinc-200 bg-beige-light p-8'
              >
                <Chip className='mb-2 text-sage'>{r.highlight}</Chip>
                <div className='icon-container'>
                  <r.icon className='h-8 w-8 text-sage' />
                </div>
                <h4 className='font-heading font-semibold lg:text-lg'>
                  {r.title}
                </h4>
                <p className='text-sm text-zinc-500'>{r.description}</p>
              </article>
            ))}
          </section> */}

          <section className='mx-auto mt-10 max-w-4xl rounded-lg border border-zinc-300 bg-cream p-8'>
            <h3 className='mb-8 text-center font-heading font-semibold text-2xl'>
              <span className='text-sage'>Boutique Learning</span> vs
              Traditional Tuition Centres
            </h3>

            <div className='grid w-full grid-cols-1 gap-6 md:grid-cols-2'>
              {/* Pros */}
              <article>
                <h4 className='mx-auto mb-4 flex items-center font-heading font-semibold text-lg text-sage lg:justify-center'>
                  <Trophy className='mr-2 h-5 w-5' />
                  Our Boutique Approach
                </h4>
                <ul className='flex flex-col space-y-3 lg:items-center'>
                  {pros.map((item) => (
                    <li key={item} className='flex items-start space-x-3'>
                      <CheckCircle className='mt-0.5 h-5 w-5 flex-shrink-0 text-sage' />
                      <span className='text-zinc-500'>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* Cons */}
              <article>
                <h4 className='mb-4 font-heading font-semibold text-lg text-zinc-500 lg:text-center'>
                  Traditional Tuition Centres
                </h4>
                <ul className='flex flex-col space-y-3 lg:items-center'>
                  {cons.map((item) => (
                    <li key={item} className='flex items-start space-x-3'>
                      <div className='mt-0.5 h-5 w-5 flex-shrink-0 rounded-full border-2 border-zinc-500/30' />
                      <span className='text-zinc-500/70'>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>
        </EntryAnimation>
      </div>
    </section>
  )
}

export default WhyChooseUs
