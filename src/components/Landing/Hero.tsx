import { ArrowDown, ArrowRight } from 'lucide-react'
import { EntryAnimation } from '@/components/commons'

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
  // TODO: Add poster="fallback.jpg"

  return (
    <section className='relative isolate mx-auto grid w-full grid-cols-1 lg:min-h-[calc(100dvh-72px)]'>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload='auto'
        className='col-start-1 row-start-1 h-full w-full object-cover object-center'
      >
        <source src='promo.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      <div className='z-10 col-start-1 row-start-1 flex flex-col justify-center bg-black/50 px-6 py-18 text-white lg:bg-black/40 lg:px-12'>
        <div className='lg:max-w-[50%]'>
          <EntryAnimation>
            <h1 className='font-heading text-5xl lg:text-6xl'>
              Premium English & Humanities Tuition by ex-MOE Teacher
            </h1>

            <p className='my-6 text-base lg:text-lg'>
              Boutique small group classes (max 6-8 students) in our cosy
              learning space. Join Singapore's most trusted English and
              Humanities tuition for Primary and Secondary subjects.
            </p>

            <div className='flex flex-col items-center gap-4 lg:flex-row'>
              <button className='btn-primary group' type='button'>
                Join Our Waitlist
                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
              </button>

              <button className='btn-secondary' type='button'>
                Book Trial Lesson
              </button>
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

      <div className='z-20 col-start-1 row-start-1 hidden h-full w-full items-end justify-center text-white lg:flex'>
        <a
          className='mb-6 animate-bounce hover:cursor-pointer'
          href='#about-educator'
        >
          <ArrowDown className='h-8 w-8' />
        </a>
      </div>
    </section>
  )
}

export default Hero
