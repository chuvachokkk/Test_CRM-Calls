import { LeadGenerator } from './lead-generator'

const generator = new LeadGenerator()
const leads = generator.generateLeads(5)
console.log(leads)
