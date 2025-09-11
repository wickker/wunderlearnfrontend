import { Quote, Star } from 'lucide-react'
import { useMediaQuery } from 'usehooks-ts'
import { Chip, EntryAnimation } from '@/components/commons'
import { cn } from '@/utils/functions'

type Review = {
  subject: string
  content: string
  name: string
  relation: string
  rating: number
  type: 'Student' | 'Parent'
}

const reviews: Review[] = [
  {
    type: 'Parent',
    name: 'Mrs Sarah Tan',
    relation: 'Mother of Emma (Secondary 3)',
    content:
      "The transformation in Emma's English grades has been remarkable. From struggling with essays to achieving A1 in her recent exams. The small class environment really allows for personalized attention that big tuition centres simply cannot provide.",
    rating: 5,
    subject: 'English Language',
  },
  {
    type: 'Student',
    name: 'Marcus Lim',
    relation: 'Secondary 4 Student',
    content:
      'I used to dread History lessons, but the way concepts are explained here makes everything so much clearer. The classroom feels more like a cozy study cafe than a typical tuition centre. I actually look forward to classes now!',
    rating: 5,
    subject: 'Humanities',
  },
  {
    type: 'Parent',
    name: 'Mr David Wong',
    relation: 'Father of Sophie (Primary 5)',
    content:
      "Sophie's confidence in English has grown tremendously. The teacher's MOE background really shows in how she structures lessons and prepares students for exams. We've tried other centres but nothing compares to this boutique experience.",
    rating: 5,
    subject: 'Primary English',
  },
  {
    type: 'Student',
    name: 'Priya Krishnan',
    relation: 'Secondary 3 Student',
    content:
      'The literature discussions here are amazing! Our teacher helps us see deeper meanings in texts that I never noticed before. The small class means everyone gets to share their thoughts, which makes learning so much more engaging.',
    rating: 5,
    subject: 'English Literature',
  },
  {
    type: 'Parent',
    name: 'Mrs Jennifer Lee',
    relation: 'Mother of Ryan (Secondary 2)',
    content:
      'Ryan was always intimidated by Geography, but the interactive approach and beautiful learning space here has changed his entire attitude. His exam scores have improved by 2 grades! The investment is absolutely worth it.',
    rating: 5,
    subject: 'Geography',
  },
  {
    type: 'Student',
    name: 'Alicia Chen',
    relation: 'Secondary 4 Student',
    content:
      "Coming here feels like going to a premium study lounge rather than a tuition centre. The environment is so conducive for learning, and our teacher's experience really shows. I've improved from C6 to A2 in just 6 months!",
    rating: 5,
    subject: 'English Language',
  },
] as const

type ReviewCardProps = {
  review: Review
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const isXlScreen = useMediaQuery('(min-width: 1280px)')

  return (
    <article
      className={cn(
        'relative flex flex-col rounded-lg border border-zinc-300 bg-beige p-8',
        isXlScreen && 'h-[520px] min-w-[220px] max-w-[220px]',
      )}
    >
      <div className='flex flex-wrap items-center gap-2'>
        <Chip className='text-sage'>{review.subject}</Chip>
        <Chip
          className={cn(
            'capitalize',
            review.type === 'Student' ? 'text-sage' : 'text-navy-dark',
          )}
        >
          {review.type} Review
        </Chip>
      </div>
      <div className='my-4 flex space-x-1'>
        {Array(review.rating)
          .fill(0)
          .map((_, i) => (
            /* biome-ignore lint: default */
            <Star key={i} className='h-4 w-4 fill-sage text-sage' />
          ))}
      </div>
      <p className='text-sm text-zinc-500'>
        <i>"{review.content}"</i>
      </p>
      <div className='my-4 h-[1px] bg-zinc-300' />
      <h4 className='font-heading font-medium text-base'>{review.name}</h4>
      <p className='text-xs text-zinc-500'>{review.relation}</p>

      <div className='-top-3 -left-3 absolute flex h-8 w-8 items-center justify-center rounded-full bg-sage'>
        <Quote className='h-4 w-4 text-white' />
      </div>
    </article>
  )
}

const Reviews = () => {
  const reviewCardsDesktop = reviews
    .slice(0, 5)
    .map((review) => <ReviewCard key={review.name} review={review} />)

  return (
    <section className='mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-18'>
      <EntryAnimation>
        <h2 className='text-center font-heading text-4xl lg:text-5xl'>
          What Our <span className='text-sage'>Students & Parents</span> Say
        </h2>

        <p className='mt-4 mb-10 text-center text-base text-zinc-500 lg:text-l'>
          Real stories from our learning community about their transformative
          academic journey
        </p>
      </EntryAnimation>

      {/* Carousel */}
      <section className='relative mb-8 hidden h-[540px] w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_16%,_black_calc(100%-16%),transparent_100%)] xl:block'>
        <div className='carousel-animation absolute top-4 left-0 flex h-full w-full items-stretch justify-around gap-x-6 pl-6'>
          {reviewCardsDesktop}
        </div>

        <div className='carousel-animation-offset absolute top-4 left-[100%] flex h-full w-full items-stretch justify-around gap-x-6 pl-6'>
          {reviewCardsDesktop}
        </div>
      </section>

      {/* Mobile */}
      <EntryAnimation>
        <div className='grid grid-cols-1 items-stretch gap-6 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] xl:hidden'>
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        <div className='mx-auto max-w-2xl rounded-lg bg-sage p-8 text-cream'>
          <div className='space-y-4 text-center'>
            <h3 className='font-heading font-medium text-2xl'>
              Join Our Success Stories
            </h3>
            <p className='opacity-90'>
              Experience the difference that personalized, boutique education
              can make in your academic journey.
            </p>
            <div className='flex justify-center space-x-2'>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  /* biome-ignore lint: default */
                  <Star key={i} className='h-5 w-5 fill-current' />
                ))}
            </div>
            <div className='text-sm opacity-75'>
              Average rating from 50+ families
            </div>
          </div>
        </div>
      </EntryAnimation>
    </section>
  )
}

export default Reviews
