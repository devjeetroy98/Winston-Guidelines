
import winston from "winston";

// TODO :  Create multiple loggers

// * Order Logger logs messages to console only
winston.loggers.add("OrderLogger", {
    level: 'debug',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console()
    ],
    defaultMeta: { service: "OrderService " }
})


// * Payment Logger logs messages to console & external file
const { combine, timestamp, json, prettyPrint } = winston.format

winston.loggers.add("PaymentLogger", {
    level: 'debug',
    format: combine(
        timestamp(),
        json(),
        prettyPrint()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'app.log' })
    ],
    defaultMeta: { service: "PaymentService " }
})

const orderLogger = winston.loggers.get('OrderLogger')
const paymentLogger = winston.loggers.get('PaymentLogger')

orderLogger.info("An info log.")
orderLogger.error("An error log.")

paymentLogger.info("An info log.")
paymentLogger.error("An error log.")