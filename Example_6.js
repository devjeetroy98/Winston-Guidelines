import winston from "winston";

// TODO :  Create child logger

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

const requestMeta = { method: "GET", url: "/dashboard" }
const childLogger = logger.child(requestMeta)

childLogger.info("An info log")
childLogger.error("An error log")


/* 
*  Instruction:
*
* logger.child(<meta>) returns a child logger instance with pre defined meta data
* 
*/


/* 
*  Output:
*
* {
*  method: 'GET',
*  url: '/dashboard',
*  level: 'info',
*  message: 'An info log',
*  timestamp: '2024-03-27T15:12:26.595Z'
* }
* {
*  method: 'GET',
*  url: '/dashboard',
*  level: 'error',
*  message: 'An error log',
*  timestamp: '2024-03-27T15:12:26.598Z'
}
*
*/