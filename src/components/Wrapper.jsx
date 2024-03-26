import { Display } from './Display.jsx'
import { makeCounter } from '../makeCounter.js'

const wrapperCounter = makeCounter()

export const Wrapper = ({ value }) => (
  <section>
    <h1>&lt;Wrapper&gt;: {wrapperCounter()}</h1>
    <Display value={value} />
  </section>
)
