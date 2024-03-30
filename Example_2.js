import winston from "winston";

// TODO
// *
// * Show debug and higher severity logs in console
// * Store only error logs on file

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'app.log', level: 'error' })
    ]
})

logger.info("An info log")
logger.error("An error log")


/* 
*  Output: 
* 
!  CONSOLE
* {"level":"info","message":"An info log"}
* {"level":"error","message":"An error log"}
*
! FILE
* {"level":"error","message":"An error log"}
*/