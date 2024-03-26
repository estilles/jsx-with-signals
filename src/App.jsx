import { ref } from '@/core/reactivity.js'

import { makeCounter } from '@/makeCounter.js'

import { Wrapper } from '@/components/Wrapper.jsx'
import { Incrementor } from '@/components/Incrementor.jsx'

const appCounter = makeCounter()

export const App = () => {
  const count = ref(0)
  const setCount = (cb) => cb(count)
  return (
    <section>
      <h1>&lt;Counter&gt;: {appCounter()}</h1>
      <Wrapper value={count} />
      <Incrementor setCount={setCount} />
    </section>
  )
}
