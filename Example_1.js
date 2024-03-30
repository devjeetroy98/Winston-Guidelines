import winston from "winston";

// TODO : Basic logging using Winston

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'app.log' })
    ]
})

logger.info("An info log")
logger.error("An error log")

/* 
*  Instruction:
*
* level is "info" by default. If level is "info", logs less severe than "info" are ignored.
* .Console() -> Logs to console (stdout/stderr)
* .File() -> Logs to a file
*/


/* 
*  Output:
*
* {"level":"info","message":"An info log"}
* {"level":"error","message":"An error log"}
*
*/