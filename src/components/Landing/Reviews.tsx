import { Quote, Star } from 'lucide-react'
import { Chip, EntryAnimation } from '@/components/commons'
import { cn } from '@/utils/functions'

type Review = {
  imagePath: string
  name: string
  relation: string
  type: 'Student' | 'Parent'
  school?: string
}

const reviews: Review[] = [
  {
    type: 'Student',
    name: 'Kelly Ko',
    relation: 'Secondary 4 Express',
    imagePath: 'review_1.png',
    school: 'Canberra Secondary School',
  },
  {
    type: 'Parent',
    name: 'Adeline',
    relation: 'Parent of Ryan Chang, Secondary 4 NA',
    imagePath: 'review_2.png',
    school: 'Seng Kang Secondary School',
  },
  {
    type: 'Student',
    name: 'Josiah Sim',
    relation: 'Secondary 2 Express',
    imagePath: 'review_4.png',
    school: 'Anglo Chinese School (Independent)',
  },
  {
    type: 'Student',
    name: 'Louis Hii',
    relation: 'Secondary 4 Express',
    imagePath: 'review_3.png',
    school: 'New Town Secondary School',
  },
  {
    type: 'Student',
    name: 'Sarah Khoh',
    relation: 'Secondary 4 Express',
    imagePath: 'review_7.png',
    school: "Methodist Girls' School",
  },
  {
    type: 'Student',
    name: 'John Wee',
    relation: 'Year 3 IB Diploma',
    imagePath: 'review_5.png',
    school: 'Anglo Chinese School (Independent)',
  },
  {
    type: 'Student',
    name: 'Rachelle Tan',
    relation: 'Secondary 4 Express',
    imagePath: 'review_6.png',
    school: "Methodist Girls' School",
  },
  {
    type: 'Student',
    name: 'Yi Jia',
    relation: 'O-Level Private Candidate',
    imagePath: 'review_8.png',
  },
] as const

type ReviewCardProps = {
  review: Review
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <article className='relative flex flex-col rounded-lg border border-zinc-300 bg-beige px-4 py-8 xl:max-h-[96%]'>
      <Chip
        className={cn(
          'mb-3 capitalize',
          review.type === 'Student' ? 'text-sage' : 'text-navy-dark',
        )}
      >
        {review.type} Review
      </Chip>
      <img
        src={review.imagePath}
        alt={`Wunderlearn review by ${review.name}`}
        className='h-full w-full rounded-xl object-cover object-center'
      />
      <div className='my-4 h-[1px] bg-zinc-300' />
      <h4 className='font-heading font-medium text-base'>{review.name}</h4>
      <p className='text-xs text-zinc-500'>{review.relation}</p>
      <p className='text-xs text-zinc-500'>{review.school}</p>

      {/* Quote Icon */}
      <div className='-top-3 -left-3 absolute flex h-8 w-8 items-center justify-center rounded-full bg-sage'>
        <Quote className='h-4 w-4 text-white' />
      </div>
    </article>
  )
}

const Reviews = () => {
  const reviewCardsDesktopTop = reviews
    .slice(0, 4)
    .map((review) => <ReviewCard key={review.name} review={review} />)
  const reviewCardsDesktopBottom = reviews
    .slice(4, 8)
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

      {/* Carousel (To Left)*/}
      <section className='carousel-mask relative mb-8 hidden h-[640px] w-full overflow-hidden xl:block'>
        <div className='carousel-animation-rtl absolute top-4 left-0 flex h-full w-full items-stretch gap-x-6 pr-3 pl-3'>
          {reviewCardsDesktopTop}
        </div>

        <div className='carousel-animation-offset-rtl absolute top-4 left-[100%] flex h-full w-full items-stretch justify-around gap-x-6 pr-3 pl-3'>
          {reviewCardsDesktopTop}
        </div>
      </section>

      {/* Carousel (To Right)*/}
      <section className='carousel-mask relative mb-8 hidden h-[640px] w-full overflow-hidden xl:block'>
        <div className='carousel-animation-ltr absolute top-4 left-0 flex h-full w-full items-stretch gap-x-6 pr-3 pl-3'>
          {reviewCardsDesktopBottom}
        </div>

        <div className='carousel-animation-offset-ltr absolute top-4 left-[100%] flex h-full w-full items-stretch justify-around gap-x-6 pr-3 pl-3'>
          {reviewCardsDesktopBottom}
        </div>
      </section>

      {/* Mobile */}
      <EntryAnimation>
        <div className='grid grid-cols-1 items-stretch gap-6 px-12 sm:px-16 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] lg:px-0 xl:hidden'>
          {reviews.slice(0, 6).map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        {/* CTA */}
        <div className='mx-auto mt-6 max-w-2xl rounded-lg bg-sage p-8 text-cream'>
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
                  <Star key={i} className='h-5 w-5 fill-current' />
                ))}
            </div>
            {/* <div className='text-sm opacity-75'>
              Average rating from 50+ families
            </div> */}
          </div>
        </div>
      </EntryAnimation>
    </section>
  )
}

export default Reviews
