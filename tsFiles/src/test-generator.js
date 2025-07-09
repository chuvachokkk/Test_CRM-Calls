"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lead_generator_1 = require("./lead-generator");
const generator = new lead_generator_1.LeadGenerator();
const leads = generator.generateLeads(5);
console.log(leads);
