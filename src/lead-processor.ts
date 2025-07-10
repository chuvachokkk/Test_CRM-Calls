import { Logger } from './logger.js';
import { Lead } from './types/lead.js';

export class LeadProcessor {
	constructor(private logger: Logger) {}

	async processLead(lead: Lead): Promise<void> {
		if (lead.category === 'finance') {
			throw new Error(`Cannot process category: ${lead.category}`);
		}

		await new Promise((resolve) => setTimeout(resolve, 2000));

		const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
		this.logger.log(`${lead.id},${lead.category},${now}`);
	}
}
