import { ref, effect, computed } from './core/reactivity.js'

const data = ref(0)

const double = computed(() => data.value * 2)
const triple = computed(() => data.value * 3)

effect(() => console.log(data.value, double.value, triple.value))

data.value = 1
data.value = 2
