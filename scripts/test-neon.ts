import { prisma } from "../lib/prisma";

async function main() {
  const count = await prisma.user.count();

  console.log("Successfully connected to Neon.");
  console.log("User records:", count);
}

main()
  .catch((error) => {
    console.error("Neon connection test failed.");
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
