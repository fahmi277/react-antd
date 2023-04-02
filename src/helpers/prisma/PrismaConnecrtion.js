import { PrismaClient } from "@prisma/client";

const PrismaConnection = new PrismaClient();

// export default PrismaConnection;

// let  PrismaConnection;

// if (typeof window === "undefined") {
//   if (process.env["NODE_ENV"] === "production") {
//     PrismaConnection = new PrismaClient()
//   } else {
//     if (!global.PrismaConnection) {
//       global.PrismaConnection = new PrismaClient()
//     }
//     PrismaConnection = global.prisma
//   }
// }

export default PrismaConnection