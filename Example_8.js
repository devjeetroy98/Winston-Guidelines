import winston from "winston";

// TODO :  Profiling (Time taken for successfully run and execute)

// * winston.format is a object, hence we can destructure it.
const { combine, timestamp, json, prettyPrint } = winston.format

const logger = winston.createLogger({
    level: 'debug',
    format: combine(
        timestamp(),
        json(),
        prettyPrint()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'app.log' })
    ]
})

// * A dummy request handler
let requestHandler = (path) => {
    const profiler = logger.startTimer()

    // * Introducing delay
    for (let i = 0; i < 1000000000; i++) { }

    profiler.done({ message: `Request to ${path} completed.` })
}

// * Call the dummy request handler
requestHandler('/products')