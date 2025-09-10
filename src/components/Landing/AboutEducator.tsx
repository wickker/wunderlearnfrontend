import { Award, BookOpen, Star, Users } from 'lucide-react'
import { motion } from 'motion/react'
import { useMediaQuery } from 'usehooks-ts'
import { ImageFrame } from '@/components/commons'

const bulletPoints = [
  {
    icon: BookOpen,
    title: 'MOE Teaching Excellence',
    description: `Extensive experience in Singapore's education system, understanding curriculum requirements and examination expectations at the deepest level.`,
  },
  {
    icon: Users,
    title: 'Boutique Approach',
    description: `After being oversubscribed for 1-to-1 lessons, I'm expanding to small group classes to maintain personalized attention while creating collaborative learning opportunities.`,
  },
  {
    icon: Award,
    title: 'Proven Results',
    description:
      '100% of my students have shown significant improvement in their English and Humanities grades, with many achieving their target grades for major examinations.',
  },
] as const

const AboutEducator = () => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)')

  return (
    <section className='flex w-full justify-center bg-beige'>
      <div className='grid w-full max-w-7xl grid-cols-1 items-center gap-6 px-6 py-18 lg:grid-cols-[1fr_1fr]'>
        <div className='grid min-w-full max-w-full place-items-center'>
          <ImageFrame
            imageUrl='https://placehold.co/460x500'
            imageAlt='Wunderlearn'
            rightNode={
              <div className='flex flex-col items-end overflow-hidden'>
                <Award className='mb-2 h-8 w-8' />
                <p className='text-xs opacity-75'>Ex-MOE</p>
                <p className='text-xs opacity-75'>Certified</p>
              </div>
            }
            leftNode={
              <div className='overflow-hidden'>
                <Star className='mb-2 h-8 w-8' />
                <p className='text-xs opacity-75'>8+ Years</p>
                <p className='text-xs opacity-75'>Experience</p>
              </div>
            }
            translateRight='2xl:group-hover:translate-x-[calc(50px+16px)]'
            translateLeft='2xl:group-hover:-translate-x-[calc(65px+16px)]'
          />
        </div>

        <motion.div
          initial={{
            opacity: 0,
            transform: isLargeScreen ? 'translateY(16px)' : 'translateY(0)',
          }}
          whileInView={{ opacity: 1, transform: 'translateY(0)' }}
          viewport={{ amount: 'some', once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='font-heading text-4xl lg:text-5xl'>
            Meet Your <span className='text-sage'>Dedicated Educator</span>
          </h2>

          <p className='my-6 text-base text-zinc-500 lg:text-lg'>
            With over 8 years of experience as a Ministry of Education teacher,
            I've witnessed firsthand the transformative power of personalized
            education in small, nurturing environments.
          </p>

          <div className='flex flex-col gap-y-6'>
            {bulletPoints.map((bulletPoint) => (
              <article
                key={bulletPoint.title}
                className='grid grid-cols-[auto_1fr] gap-x-4'
              >
                <div className='icon-container'>
                  <bulletPoint.icon className='h-6 w-6 text-sage' />
                </div>

                <div>
                  <h3 className='mb-2 font-heading font-semibold text-xl'>
                    {bulletPoint.title}
                  </h3>
                  <p className='text-sm text-zinc-500 lg:text-base'>
                    {bulletPoint.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutEducator
