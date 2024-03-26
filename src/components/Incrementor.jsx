import { makeCounter } from '../makeCounter.js'

const incrementorCounter = makeCounter()

export const Incrementor = ({ setCount }) => (
  <section>
    <h1>&lt;Incrementor&gt;: {incrementorCounter()}</h1>
    <button onClick={() => setCount((count) => (count.value += 1))}>+1</button>
  </section>
)
