"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lead_processor_1 = require("./lead-processor");
const logger_1 = require("./logger");
const logger = new logger_1.Logger('test-log.csv');
const processor = new lead_processor_1.LeadProcessor(logger);
const testLead = { id: '1', category: 'it', payload: {} };
processor
    .processLead(testLead)
    .then(() => {
    logger.close();
    console.log('Lead processed!');
})
    .catch(err => {
    logger.close();
    console.error('Error:', err.message);
});
