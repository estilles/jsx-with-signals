import { makeCounter } from '../makeCounter.js'

const displayCounter = makeCounter()

export const Display = ({ value }) => (
  <section>
    <h1>&lt;Display&gt;: {displayCounter()}</h1>
    <main>{value}</main>
  </section>
)
