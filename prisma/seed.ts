import { PrismaClient } from '../generated/prisma/client.ts';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL!;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding database...');

  // ── Plans ──────────────────────────────────────────────────
  const plans = [
    {
      name: 'Basic Plan',
      price: 999,
      duration: '30 days',
      credits: '100',
      humanChatCredits: '5',
      audioVideoMinutes: '60',
      liveClassAcess: '1',
    },
    {
      name: 'Pro Plan',
      price: 2499,
      duration: '30 days',
      credits: '1000',
      humanChatCredits: '50',
      audioVideoMinutes: '600',
      liveClassAcess: '10',
    },
    {
      name: 'Premium Plan',
      price: 4999,
      duration: '30 days',
      credits: 'Unlimited',
      humanChatCredits: '500',
      audioVideoMinutes: 'Unlimited',
      liveClassAcess: 'Unlimited',
    },
  ];

  for (const plan of plans) {
    const existing = await prisma.plan.findFirst({ where: { name: plan.name } });
    if (!existing) {
      await prisma.plan.create({ data: plan });
      console.log(`  ✅ Plan created: ${plan.name}`);
    } else {
      console.log(`  ⏭️  Plan already exists: ${plan.name}`);
    }
  }

  // ── Subjects with Chapters ─────────────────────────────────
  const subjects = [
    {
      name: 'Mathematics',
      class: '10',
      code: 'MATH-10',
      chapters: ['Number Systems', 'Polynomials', 'Linear Equations', 'Quadratic Equations', 'Arithmetic Progressions', 'Triangles', 'Coordinate Geometry', 'Trigonometry', 'Statistics', 'Probability'],
    },
    {
      name: 'Physics',
      class: '10',
      code: 'PHY-10',
      chapters: ['Light – Reflection', 'Light – Refraction', 'Human Eye', 'Electricity', 'Magnetic Effects', 'Sources of Energy'],
    },
    {
      name: 'Chemistry',
      class: '10',
      code: 'CHEM-10',
      chapters: ['Chemical Reactions', 'Acids Bases Salts', 'Metals and Non-Metals', 'Carbon Compounds', 'Periodic Classification'],
    },
    {
      name: 'Biology',
      class: '10',
      code: 'BIO-10',
      chapters: ['Life Processes', 'Control and Coordination', 'Reproduction', 'Heredity and Evolution', 'Our Environment'],
    },
    {
      name: 'English',
      class: '10',
      code: 'ENG-10',
      chapters: ['First Flight – Prose', 'First Flight – Poetry', 'Footprints Without Feet', 'Writing Skills', 'Grammar'],
    },
    {
      name: 'History',
      class: '10',
      code: 'HIST-10',
      chapters: ['The Rise of Nationalism', 'Nationalism in India', 'Making of a Global World', 'Age of Industrialisation', 'Print Culture'],
    },
    {
      name: 'Geography',
      class: '10',
      code: 'GEO-10',
      chapters: ['Resources and Development', 'Forest and Wildlife', 'Water Resources', 'Agriculture', 'Minerals and Energy', 'Manufacturing Industries'],
    },
    {
      name: 'Computer Science',
      class: '10',
      code: 'CS-10',
      chapters: ['Networking Basics', 'HTML & CSS', 'Database Concepts', 'Python Basics', 'Cyber Safety'],
    },
  ];

  for (const subjectData of subjects) {
    const { chapters: chapterNames, ...subjectFields } = subjectData;
    let subject = await prisma.subjects.findUnique({ where: { code: subjectFields.code } });

    if (!subject) {
      subject = await prisma.subjects.create({ data: subjectFields });
      console.log(`  ✅ Subject created: ${subject.name}`);
    } else {
      console.log(`  ⏭️  Subject already exists: ${subject.name}`);
    }

    // Add chapters
    for (const chapterName of chapterNames) {
      const existingChapter = await prisma.chapters.findFirst({
        where: { name: chapterName, subjectId: subject.id },
      });
      if (!existingChapter) {
        await prisma.chapters.create({ data: { name: chapterName, subjectId: subject.id } });
      }
    }
    console.log(`     📚 ${chapterNames.length} chapters synced for ${subject.name}`);
  }

  // ── Sample MCQ Questions ───────────────────────────────────
  const mathSubject = await prisma.subjects.findUnique({ where: { code: 'MATH-10' } });
  const physicsSubject = await prisma.subjects.findUnique({ where: { code: 'PHY-10' } });

  const sampleMcqs = [
    {
      subjectId: mathSubject?.id,
      question: 'What is the value of √2 (approximately)?',
      options: ['1.414', '1.732', '2.236', '1.618'],
      answer: '1.414',
      difficulty: 'EASY' as const,
    },
    {
      subjectId: mathSubject?.id,
      question: 'If x² - 5x + 6 = 0, what are the roots?',
      options: ['2 and 3', '1 and 6', '-2 and -3', '2 and -3'],
      answer: '2 and 3',
      difficulty: 'MEDIUM' as const,
    },
    {
      subjectId: mathSubject?.id,
      question: 'What is sin(90°)?',
      options: ['0', '1', '-1', '0.5'],
      answer: '1',
      difficulty: 'EASY' as const,
    },
    {
      subjectId: physicsSubject?.id,
      question: 'What is the SI unit of electric current?',
      options: ['Volt', 'Watt', 'Ampere', 'Ohm'],
      answer: 'Ampere',
      difficulty: 'EASY' as const,
    },
    {
      subjectId: physicsSubject?.id,
      question: 'What happens to resistance when temperature increases (for conductors)?',
      options: ['Decreases', 'Stays same', 'Increases', 'Becomes zero'],
      answer: 'Increases',
      difficulty: 'MEDIUM' as const,
    },
    {
      subjectId: mathSubject?.id,
      question: 'The sum of first n natural numbers is?',
      options: ['n(n+1)/2', 'n(n-1)/2', 'n²', '2n'],
      answer: 'n(n+1)/2',
      difficulty: 'MEDIUM' as const,
    },
    {
      subjectId: physicsSubject?.id,
      question: 'Ohm\'s law states V = ?',
      options: ['I/R', 'IR', 'I+R', 'I-R'],
      answer: 'IR',
      difficulty: 'EASY' as const,
    },
    {
      subjectId: mathSubject?.id,
      question: 'What is tan(45°)?',
      options: ['0', '√3', '1', '1/√2'],
      answer: '1',
      difficulty: 'EASY' as const,
    },
  ];

  let mcqCreated = 0;
  for (const mcq of sampleMcqs) {
    if (!mcq.subjectId) continue;
    const existing = await prisma.mcqQuestion.findFirst({ where: { question: mcq.question } });
    if (!existing) {
      await prisma.mcqQuestion.create({ data: mcq });
      mcqCreated++;
    }
  }
  console.log(`  ✅ ${mcqCreated} MCQ questions created`);

  console.log('\n✅ Seeding complete!');
}

main()
  .catch((e) => { console.error('❌ Seed failed:', e); process.exit(1); })
  .finally(() => prisma.$disconnect());
