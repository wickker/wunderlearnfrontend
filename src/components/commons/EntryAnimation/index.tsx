import { motion } from 'motion/react'
import type { PropsWithChildren } from 'react'
import { useMediaQuery } from 'usehooks-ts'

const EntryAnimation = ({ children }: PropsWithChildren) => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)')

  return (
    <motion.div
      initial={{
        opacity: 0,
        transform: isLargeScreen ? 'translateY(16px)' : 'translateY(0)',
      }}
      whileInView={{ opacity: 1, transform: 'translateY(0)' }}
      viewport={{ amount: 'some', once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default EntryAnimation
