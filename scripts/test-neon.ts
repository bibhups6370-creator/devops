import { getPrisma } from "../lib/prisma";

async function main() {
  const prisma = getPrisma();
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
    // Disconnect only if the Prisma client was initialized.
    // The client is initialized inside main().
    try {
      await getPrisma().$disconnect();
    } catch {
      // Ignore cleanup errors if initialization failed.
    }
  });