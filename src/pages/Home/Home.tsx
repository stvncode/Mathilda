import { Flex } from '@mantine/core'
import { About, Contact, Following, Prices } from 'features'
import { FC, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

interface TargetRefs {
  [key: string]: React.RefObject<HTMLDivElement>
}

export const Home: FC = () => {
  const location = useLocation()

  const targetRefs: TargetRefs = {
    about: useRef<HTMLDivElement>(null),
    following: useRef<HTMLDivElement>(null),
    prices: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    if (location.hash) {
      const targetElement = targetRefs[location.hash.substring(1)]?.current
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <Flex direction="column" mt={40} gap={60}>
      <div ref={targetRefs.about} />
      <About />
      <div ref={targetRefs.following} />
      <Following />
      <div ref={targetRefs.prices} />
      <Prices />
      <div ref={targetRefs.contact} />
      <Contact />
    </Flex>
  )
}