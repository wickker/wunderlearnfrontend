import { ArrowRight, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { EntryAnimation } from '@/components/commons'
import { WHATSAPP_LINK } from '@/utils/constants'

const contacts = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+65 9XXX XXXX',
    description: 'Mon-Fri, 9AM - 7PM',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@wunderlearn.com',
    description: 'Response within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Rivershire, 31 Leonie Hill, Singapore 239229',
    description: 'Convenient @ Great World MRT',
  },
  {
    icon: Clock,
    label: 'Class Hours',
    value: 'Weekends & Evenings',
    description: 'Flexible scheduling',
  },
] as const

const CtaAndContact = () => {
  return (
    /* biome-ignore lint: default */
    <section
      className='flex w-[100dvw] scroll-mt-18 flex-col items-center justify-center bg-navy'
      id='contact'
    >
      <div className='w-full max-w-5xl px-6 py-18'>
        <EntryAnimation>
          <h2 className='mb-8 text-center font-heading text-4xl text-cream lg:text-5xl'>
            Ready to Transform Your Academic Journey?
          </h2>

          <p className='mb-8 text-center text-base text-cream lg:text-lg'>
            Join Singapore's most cosy boutique learning community. Limited
            spaces available to maintain our intimate learning environment.
          </p>

          <div className='mb-8 flex flex-col items-center justify-center gap-4 lg:flex-row'>
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

          {/* Urgency Indicator */}
          <div className='mx-auto flex w-fit justify-center rounded-lg border border-sage/30 bg-sage/20 p-4 backdrop-blur-sm'>
            <div className='flex items-center justify-center space-x-2 text-cream text-sm'>
              <div className='h-2 w-2 animate-pulse rounded-full bg-sage' />
              <span className='font-medium'>
                Only X spaces left for XXXX intake
              </span>
            </div>
          </div>

          {/* Contact Cards */}
          <section className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {contacts.map((contact) => (
              <article
                key={contact.label}
                className='rounded-2xl border border-zinc-300/50 bg-beige/10 p-8 text-center backdrop-blur-sm'
              >
                <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sage/20'>
                  <contact.icon className='h-6 w-6 text-sage' />
                </div>
                <h4 className='mb-2 font-heading font-medium text-cream text-lg'>
                  {contact.label}
                </h4>
                <p className='break-words text-cream text-sm opacity-90'>
                  {contact.value}
                </p>
                <p className='mt-1 text-cream text-xs opacity-75'>
                  {contact.description}
                </p>
              </article>
            ))}
          </section>

          <div className='mt-16 text-center text-cream'>
            <div className='mx-auto max-w-2xl space-y-4'>
              <h3 className='font-heading font-medium text-2xl'>
                Your Success is Our Priority
              </h3>
              <p className='leading-relaxed opacity-90'>
                Join families across Singapore who have chosen excellence for
                their children's academic journey.
              </p>
            </div>
          </div>
        </EntryAnimation>
      </div>

      <div className='h-[1px] w-[94%] bg-zinc-300/50' />
      <div className='mx-auto p-3 text-center text-cream text-sm'>
        Copyright © {new Date().getFullYear()} Wunderlearn. Made with 💜 in
        Singapore.
      </div>
    </section>
  )
}

export default CtaAndContact
