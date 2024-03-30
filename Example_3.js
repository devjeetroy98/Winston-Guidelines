import winston from "winston";

// TODO :  Logging for Console based application

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.cli(),
    transports: [
        new winston.transports.Console()
    ]
})

logger.info("An info log")
logger.error("An error log")


/* 
*  Output:
*
* info:    An info log
* error:   An error log
*
*/