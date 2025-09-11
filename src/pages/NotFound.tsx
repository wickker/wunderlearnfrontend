import { ArrowLeft, Home } from 'lucide-react'

const NotFound = () => {
  return (
    <div className='bg-(image:--gradient-hero) flex min-h-screen items-center justify-center'>
      <div className='mx-auto px-4'>
        <div className='mx-auto max-w-2xl space-y-8 text-center'>
          <div className='space-y-4'>
            <h1 className='font-heading font-medium text-8xl text-sage'>404</h1>
            <h2 className='font-heading font-medium text-3xl'>
              Page Not Found
            </h2>
            <p className='text-lg text-zinc-500 leading-relaxed'>
              Oops! The page you're looking for doesn't exist. It might have
              been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          <div className='flex flex-col justify-center gap-4 sm:flex-row'>
            <button className='btn-primary group' type='button'>
              <Home className='mr-2 h-4 w-4' />
              Return to Home
              <ArrowLeft className='group-hover:-translate-x-1 ml-2 h-4 w-4 transition-transform' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
