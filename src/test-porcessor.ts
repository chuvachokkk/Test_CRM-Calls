import { LeadProcessor } from './lead-processor'
import { Logger } from './logger'
import { Lead } from './types/lead'

const logger = new Logger('test-log.csv')
const processor = new LeadProcessor(logger)

const testLead: Lead = { id: '1', category: 'it', payload: {} }

processor
	.processLead(testLead)
	.then(() => {
		logger.close()
		console.log('Lead processed!')
	})
	.catch(err => {
		logger.close()
		console.error('Error:', err.message)
	})
