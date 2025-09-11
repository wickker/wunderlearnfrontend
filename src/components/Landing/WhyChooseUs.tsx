import { Award, BookOpen, Clock, Heart, Target, Users } from 'lucide-react'
import { EntryAnimation } from '@/components/commons'

const metrics = [
  {
    label: 'Years MOE Experience',
    value: '8+',
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

const _reasons = [
  {
    icon: Award,
    title: 'Ex-MOE Teacher Expertise',
    description:
      "8+ years of Ministry of Education experience with deep understanding of Singapore's curriculum and examination requirements.",
    highlight: 'MOE Certified',
  },
  {
    icon: Users,
    title: 'Intimate Class Sizes',
    description:
      'Maximum 10 students per class ensures every student receives personalized attention and tailored learning strategies.',
    highlight: 'Max 10 Students',
  },
  {
    icon: Target,
    title: 'Proven Track Record',
    description:
      '100% of our students show measurable improvement in their grades, with majority achieving their target examination results.',
    highlight: '100% Improvement',
  },
  {
    icon: Heart,
    title: 'Boutique Experience',
    description:
      'Premium learning environment designed for comfort and focus, moving away from typical tuition centre atmospheres.',
    highlight: 'Premium Environment',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description:
      'Weekend and evening slots available to accommodate busy student schedules without compromising on quality.',
    highlight: 'Flexible Timing',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Coverage',
    description:
      'From Primary English to Secondary Humanities, we offer specialized programs for different learning levels and needs.',
    highlight: 'Full Curriculum',
  },
] as const

const WhyChooseUs = () => {
  return (
    <section className='flex w-[100dvw] justify-center bg-beige'>
      <div className='w-full max-w-7xl px-6 py-18'>
        <EntryAnimation>
          <h2 className='text-center font-heading text-4xl lg:text-5xl'>
            Why Choose <span className='text-sage'>Our Boutique Academy</span>
          </h2>

          <p className='mt-4 mb-10 text-center text-base text-zinc-500 lg:text-l'>
            Discover what sets us apart in Singapore's competitive tuition
            landscape
          </p>

          <div className='grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:grid-cols-4'>
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className='bg-(image:--gradient-sage) flex w-full flex-col items-center rounded-lg p-8 text-center text-cream'
              >
                <h3 className='mb-2 font-heading font-semibold text-3xl'>
                  {metric.value}
                </h3>
                <p className='text-sm'>{metric.label}</p>
              </div>
            ))}
          </div>
        </EntryAnimation>
      </div>
    </section>
  )
}

export default WhyChooseUs
