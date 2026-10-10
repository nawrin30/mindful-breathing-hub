import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main(){ console.log('Seed complete: breathing techniques, meditation presets, and ambient library are shipped as typed client/server constants. No demo users are created.');
 }
main().finally(()=>prisma.$disconnect());
