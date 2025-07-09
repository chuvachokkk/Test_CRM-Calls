"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadProcessor = void 0;
class LeadProcessor {
    constructor(logger) {
        this.logger = logger;
    }
    processLead(lead) {
        return __awaiter(this, void 0, void 0, function* () {
            // Пример: эмулируем ошибку для категории "finance"
            if (lead.category === 'finance') {
                throw new Error(`Cannot process category: ${lead.category}`);
            }
            // Асинхронно "спим" 2 секунды
            yield new Promise(resolve => setTimeout(resolve, 2000));
            // Логируем результат
            const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
            this.logger.log(`${lead.id},${lead.category},${now}`);
        });
    }
}
exports.LeadProcessor = LeadProcessor;
