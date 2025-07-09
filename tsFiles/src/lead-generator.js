"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadGenerator = void 0;
class LeadGenerator {
    constructor() {
        this.categories = ['sport', 'finance', 'it', 'health', 'other'];
    }
    generateLeads(count) {
        const leads = [];
        for (let i = 0; i < count; i++) {
            const lead = {
                id: (i + 1).toString(),
                category: this.getRandomCategory(),
                payload: { value: Math.random() },
            };
            leads.push(lead);
        }
        return leads;
    }
    getRandomCategory() {
        const idx = Math.floor(Math.random() * this.categories.length);
        return this.categories[idx];
    }
}
exports.LeadGenerator = LeadGenerator;
