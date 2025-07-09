import { Logger } from './logger'
import { Lead } from './types/lead'

export class LeadProcessor {
	constructor(private logger: Logger) {}

	async processLead(lead: Lead): Promise<void> {
		// Пример: эмулируем ошибку для категории "finance"
		if (lead.category === 'finance') {
			throw new Error(`Cannot process category: ${lead.category}`)
		}

		// Асинхронно "спим" 2 секунды
		await new Promise(resolve => setTimeout(resolve, 2000))

		// Логируем результат
		const now = new Date().toISOString().replace('T', ' ').substring(0, 19)
		this.logger.log(`${lead.id},${lead.category},${now}`)
	}
}
