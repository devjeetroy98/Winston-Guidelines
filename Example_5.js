import winston from "winston";

// TODO :  Add Custom Key-Value pair in logs

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
logger.info("An info log", requestMeta)
logger.error("An error log", requestMeta)


/* 
*  Instruction:
*
* json() is used to print messages in json format
* prettyPrint() helps us to print json messages in a readable way, unlike in 1 line.
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