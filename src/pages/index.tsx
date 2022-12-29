import { Button, Center } from '@mantine/core'
import { log } from 'next-axiom'

const test: any = process.env.API_KEY

export default function Home() {
  log.debug(test)
  return (
    <>
      <Center style={{ width: 400, height: 200 }}>
        <Button>Hello</Button>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Center>
    </>
  )
}
