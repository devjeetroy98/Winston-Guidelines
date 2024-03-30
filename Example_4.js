import winston from "winston";

// TODO :  Log custom messages on console

// * winston.format is a object, hence we can destructure it.
const { combine, timestamp, printf } = winston.format

const logger = winston.createLogger({
    level: 'debug',
    format: combine(
        timestamp(),
        printf((log) => `${log.timestamp} ${log.level}: ${log.message}`)
    ),
    transports: [
        new winston.transports.Console()
    ]
})

logger.info("An info log")
logger.error("An error log")


/* 
*  Output:
*
* 2024-03-27T15:03:58.558Z info: An info log
* 2024-03-27T15:03:58.559Z error: An error log
*
*/