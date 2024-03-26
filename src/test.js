import { ref, effect } from './core/reactivity.js'

const data = ref(0)

effect(() => console.log(data.value))

data.value = 1
data.value = 2
