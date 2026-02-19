import { ArrowDown, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { EntryAnimation } from '@/components/commons'
import { WHATSAPP_LINK } from '@/utils/constants'
import { cn } from '@/utils/functions'

const statistics = [
  {
    value: '12+',
    metric: 'Years MOE Experience',
  },
  {
    value: '100%',
    metric: 'Student Improvement',
  },
  {
    value: '6-8',
    metric: 'Max Class Size',
  },
] as const

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <section className='relative isolate mx-auto grid w-full grid-cols-1 lg:h-[calc(100dvh-72px)]'>
      <div className='col-start-1 row-start-1 h-full w-full overflow-hidden'>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload='auto'
          poster='hero_fallback.png'
          className={cn(
            'h-full w-full object-cover object-center',
            isLoaded ? 'opacity-100' : 'opacity-0',
          )}
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src='promo.mp4' type='video/mp4' />
        </video>
      </div>

      <div className='z-10 col-start-1 row-start-1 flex flex-col justify-center bg-black/50 px-6 py-18 text-white lg:bg-black/40 lg:px-12'>
        <div className='lg:max-w-[50%]'>
          <EntryAnimation>
            <h1 className='font-heading text-5xl lg:text-6xl'>
              Premium English & Humanities Tuition by ex-MOE Teacher
            </h1>

            <p className='my-6 text-base lg:text-lg'>
              Boutique small-group tuition in Singapore, with a maximum of 6 to
              8 students per class in a cosy learning space. We offer trusted
              English tuition, Humanities tuition, and Junior College General
              Paper (GP) tuition for Primary, Secondary, and JC students, with
              personalised feedback and close guidance.
            </p>

            <div className='flex flex-col items-center gap-4 lg:flex-row'>
              <button className='btn-primary group' type='button'>
                Join Our Waitlist
                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
              </button>

              <a
                className='btn-secondary'
                type='button'
                href={WHATSAPP_LINK}
                target='_blank'
                rel='noopener noreferrer'
              >
                Book Trial Lesson
              </a>
            </div>

            <div className='mt-8 flex flex-nowrap items-center gap-x-6'>
              {statistics.map((s) => (
                <article
                  key={s.metric}
                  className='flex flex-col items-center text-center'
                >
                  <p className='font-heading text-2xl'>{s.value}</p>
                  <p className='text-sm'>{s.metric}</p>
                </article>
              ))}
            </div>
          </EntryAnimation>
        </div>
      </div>

      <a
        className='absolute bottom-0 z-20 mb-6 hidden w-full animate-bounce justify-center text-white hover:cursor-pointer lg:flex'
        href='#about-educator'
      >
        <ArrowDown className='h-8 w-8' />
      </a>
    </section>
  )
}

export default Hero
