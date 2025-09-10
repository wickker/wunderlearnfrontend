import {
  BookOpen,
  BookText,
  Calendar,
  Coffee,
  MapPin,
  Shield,
  Users,
} from 'lucide-react'
import { useMediaQuery } from 'usehooks-ts'
import { EntryAnimation, ImageFrame } from '@/components/commons'

const highlights = [
  'Natural lighting and climate-controlled comfort',
  'Ergonomic furniture designed for extended study sessions',
  'Quiet zones for individual work and collaborative areas',
  'Premium educational resources and technology',
] as const

const points = [
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Weekend and evening slots available to fit your schedule',
  },
  {
    icon: MapPin,
    title: 'Convenient Location',
    description:
      'Nestled in the heart of River Valley, right next to Great World MRT',
  },
  {
    icon: Users,
    title: 'Collaborative Spaces',
    description: 'Designed for both individual focus and group discussion',
  },
  {
    icon: BookOpen,
    title: 'Curated Learning Materials',
    description:
      'Access to a wide range of textbooks and resources selected for optimal learning outcomes',
  },
  {
    icon: Coffee,
    title: 'Comfortable Atmosphere',
    description:
      'Cozy seating areas and natural lighting create an inspiring environment',
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Peace of mind with secure access and monitored environment',
  },
] as const

const LearningEnvironment = () => {
  const _isLargeScreen = useMediaQuery('(min-width: 1024px)')

  return (
    <section className='flex w-[100dvw] justify-center bg-beige'>
      <div className='w-full max-w-7xl px-6 py-18'>
        <EntryAnimation>
          <h2 className='text-center font-heading text-4xl lg:text-5xl'>
            The <span className='text-sage'>Boutique</span> Learning Environment
          </h2>

          <p className='mt-4 mb-10 text-center text-base text-zinc-500 lg:text-l'>
            Step into a thoughtfully designed space where academic excellence
            meets comfort and inspiration
          </p>
        </EntryAnimation>

        <section className='grid w-full grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] 2xl:gap-24'>
          <div className='flex items-center justify-center'>
            <ImageFrame
              imageUrl='https://placehold.co/800x600'
              imageAlt='Wunderlearn classroom'
              rightNode={
                <div className='flex flex-col items-end overflow-hidden'>
                  <Users className='mb-2 h-8 w-8' />
                  <p className='text-xs opacity-75'>Max 8</p>
                  <p className='text-xs opacity-75'>students</p>
                </div>
              }
              leftNode={
                <div className='overflow-hidden'>
                  <BookText className='mb-2 h-8 w-8' />
                  <p className='text-xs opacity-75'>Premium</p>
                  <p className='text-xs opacity-75'>Resources</p>
                </div>
              }
              translateRight='2xl:group-hover:translate-x-[calc(50px+16px)]'
              translateLeft='2xl:group-hover:-translate-x-[calc(61px+16px)]'
            />
          </div>

          <EntryAnimation>
            <h3 className='font-heading text-3xl lg:text-4xl'>
              Where Learning Meets <span className='text-sage'>Luxury</span>
            </h3>
            <p className='my-6 text-base text-zinc-500 lg:text-lg'>
              Our boutique learning space is meticulously designed to create an
              atmosphere that promotes focus, creativity, and academic
              achievement in a comfortable, premium environment.
            </p>
            {/* Space Highlights Card */}
            <article className='flex flex-col gap-4 rounded-lg border border-zinc-300 bg-cream p-8 shadow-premium'>
              <h4 className='font-heading font-semibold text-sage lg:text-lg'>
                Space Highlights
              </h4>
              <ul className='space-y-2'>
                {highlights.map((h) => (
                  <li
                    key={h}
                    className='flex items-start space-x-2 text-sm text-zinc-500 lg:text-base'
                  >
                    <div className='mt-[7px] h-1.5 w-1.5 rounded-full bg-sage' />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </article>
          </EntryAnimation>
        </section>

        {/* 6 Key Points */}
        <EntryAnimation>
          {points.map((p) => (
            <article
              key={p.title}
              className='flex flex-col items-center justify-center gap-4 rounded-lg border border-zinc-200 bg-beige-light p-8'
            >
              <div className='icon-container'>
                <p.icon className='h-8 w-8 text-sage' />
              </div>
              <h4 className='text-center font-heading font-semibold lg:text-lg'>
                {p.title}
              </h4>
              <p className='text-center text-sm text-zinc-500'>
                {p.description}
              </p>
            </article>
          ))}
        </EntryAnimation>
      </div>
    </section>
  )
}

export default LearningEnvironment
