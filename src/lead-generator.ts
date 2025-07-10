import { Lead } from './types/lead.js'

export class LeadGenerator {
	private categories = ['sport', 'finance', 'it', 'health', 'other']

	generateLeads(count: number): Lead[] {
		const leads: Lead[] = []
		for (let i = 0; i < count; i++) {
			const lead: Lead = {
				id: (i + 1).toString(),
				category: this.getRandomCategory(),
				payload: { value: Math.random() },
			}
			leads.push(lead)
		}
		return leads
	}

	private getRandomCategory(): string {
		const idx = Math.floor(Math.random() * this.categories.length)
		return this.categories[idx]
	}
}
