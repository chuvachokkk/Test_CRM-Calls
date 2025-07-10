import { LeadGenerator } from './lead-generator.js';

const generator = new LeadGenerator();
const leads = generator.generateLeads(5);
console.log(leads);
