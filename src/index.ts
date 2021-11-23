class Startup {
    public static main(): number {
        const numbers = [...Array(10000000)].map((_, i) => 0 + i * 1);
        const startTime1 = new Date().getTime()
        const doubled1 = numbers.map(number => number * 2); // [2, 4, 6, 8, 10]
        const even1 = numbers.filter(number => number % 2 === 0); // [2, 4]
        const endTime1 = new Date().getTime()
        const startTime2 = new Date().getTime()
        const doubled2:number[] = []
        const even2:number[] = []
        for (const n of numbers){
            doubled2.push(n * 2)
            if(n % 2 === 0) even2.push(n)
        }
        const endTime2 = new Date().getTime()
        
        const startTime3 = new Date().getTime()
        const doubled3:number[] = []
        const even3:number[] = []
        numbers.forEach(n => {
            doubled3.push(n * 2)
            if(n % 2 === 0) even3.push(n)
        })
        const endTime3 = new Date().getTime()

        console.log (`\n\nMap Time taken: ${ endTime1 - startTime1 } ms`)
        console.log (`\nLoop Time taken: ${ endTime2 - startTime2 } ms`)
        console.log (`\nForEach Loop Time taken: ${ endTime3 - startTime3 } ms`)
        console.log(doubled1.length, even1.length)
        return 0;
    }
}

Startup.main();