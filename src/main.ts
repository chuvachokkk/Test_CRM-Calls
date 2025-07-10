import pLimit from 'p-limit';
import { LeadGenerator } from './lead-generator.js';
import { LeadProcessor } from './lead-processor.js';
import { Logger } from './logger.js';

async function main() {
	console.log('ЗАПУСК');

	const logger = new Logger('leads-processed.csv');
	const generator = new LeadGenerator();
	const processor = new LeadProcessor(logger);

	console.log('Генерация 10,000 лидов');
	const leads = generator.generateLeads(10000);
	console.log(`Сгенерировано ${leads.length} лидов`);

	const limit = pLimit(33);

	console.log('обработка лидов');
	const startTime = Date.now();

	const promises = leads.map((lead, index) => {
		return limit(async () => {
			try {
				await processor.processLead(lead);
				if ((index + 1) % 1000 === 0) {
					console.log(`Обработано ${index + 1} шт.`);
				}
			} catch (error) {
				const errorMessage =
					error instanceof Error ? error.message : String(error);
				console.error(`Ошибка обработки лида ${lead.id}:`, errorMessage);
			}
		});
	});

	await Promise.all(promises);

	const endTime = Date.now();
	const duration = (endTime - startTime) / 1000;

	console.log(`Обработка завершена за ${duration.toFixed(2)} секунд`);
	console.log(`Результат сохранен в leads-processed.csv`);

	logger.close();
}

main().catch((error) => {
	console.error('ОШБИКА:', error);
	process.exit(1);
});
