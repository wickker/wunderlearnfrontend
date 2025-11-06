const _statistics = [
  {
    value: '8+',
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
    <section className='mx-auto grid grid-cols-1'>
      <video autoPlay loop muted playsInline preload='auto'>
        <source src='promo.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </section>

    // <section className='mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-6 py-18 lg:grid-cols-[1fr_1fr]'>
    //   <EntryAnimation>
    //     <h1 className='font-heading text-5xl lg:text-6xl'>
    //       Premium English & Humanities Tuition by{' '}
    //       <span className='text-sage'>Ex-MOE Teacher</span>
    //     </h1>

    //     <p className='my-6 text-base text-zinc-500 lg:text-lg'>
    //       Boutique small group classes (max 6-8 students) in our cosy learning
    //       space. Join Singapore's most trusted English and Humanities tuition
    //       for Primary and Secondary subjects.
    //     </p>

    //     <div className='flex flex-col items-center gap-4 lg:flex-row'>
    //       <button className='btn-primary group' type='button'>
    //         Join Our Waitlist
    //         <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
    //       </button>

    //       <button className='btn-secondary' type='button'>
    //         Book Trial Lesson
    //       </button>
    //     </div>

    //     <div className='mt-8 flex flex-nowrap items-center gap-x-6'>
    //       {statistics.map((s) => (
    //         <article
    //           key={s.metric}
    //           className='flex flex-col items-center text-center'
    //         >
    //           <p className='font-heading text-2xl text-sage'>{s.value}</p>
    //           <p className='text-sm text-zinc-500'>{s.metric}</p>
    //         </article>
    //       ))}
    //     </div>
    //   </EntryAnimation>

    //   <div className='grid min-w-full max-w-full place-items-center'>
    //     <ImageFrame
    //       imageUrl='https://placehold.co/1000x800'
    //       imageAlt='Wunderlearn'
    //       rightNode={
    //         <div className='overflow-hidden'>
    //           <p className='font-heading text-lg'>English</p>
    //           <p className='text-xs opacity-75'>Literature</p>
    //           <p className='text-xs opacity-75'>Language</p>
    //         </div>
    //       }
    //       leftNode={
    //         <div className='overflow-hidden'>
    //           <p className='font-heading text-lg'>Humanities</p>
    //           <p className='text-xs opacity-75'>History</p>
    //           <p className='text-xs opacity-75'>Geography</p>
    //         </div>
    //       }
    //       translateRight='2xl:group-hover:translate-x-[calc(65px+16px)]'
    //       translateLeft='2xl:group-hover:-translate-x-[calc(95px+16px)]'
    //     />
    //   </div>
    // </section>
  )
}

export default Hero
