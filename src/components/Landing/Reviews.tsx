import { EntryAnimation } from '@/components/commons'

const Reviews = () => {
  return (
    <section className='mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-18'>
      <EntryAnimation>
        <h2 className='text-center font-heading text-4xl lg:text-5xl'>
          What Our <span className='text-sage'>Students & Parents</span> Say
        </h2>

        <p className='mt-4 mb-10 text-center text-base text-zinc-500 lg:text-l'>
          Real stories from our leanring community about their transformative
          academic journey
        </p>
      </EntryAnimation>
    </section>
  )
}

export default Reviews
