const effectStack = []

const activeEffect = () => (effectStack.length ? effectStack.at(-1) : undefined)

export class Ref {
  #currentValue = null
  #subscriptions = new Set()

  constructor(initialValue) {
    this.#currentValue = initialValue
  }

  get value() {
    this.#track()
    return this.#currentValue
  }

  set value(newValue) {
    if (newValue !== this.#currentValue) {
      this.#currentValue = newValue
      this.#trigger()
    }
  }

  #track() {
    if (activeEffect()) {
      this.#subscriptions.add(activeEffect())
    }
  }

  #trigger() {
    for (const effect of this.#subscriptions.values()) {
      effect()
    }
  }
}

export const ref = (initialValue) => new Ref(initialValue)

export const effect = (fn) => {
  const executeFn = () => {
    try {
      effectStack.push(fn)
      fn()
    } finally {
      effectStack.pop()
    }
  }

  executeFn()
}

export class Computed {
  #fn = () => {}

  constructor(fn) {
    this.#fn = fn
  }

  get value() {
    return this.#fn()
  }
}

export const computed = (fn) => new Computed(fn)
