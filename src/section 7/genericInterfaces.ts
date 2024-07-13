//? Generic interfaces 

interface Count<T> {
    count: T
}
const numericCount: Count<number> = { count: 23 }
const textCount: Count<string> = { count: 'Twele' }