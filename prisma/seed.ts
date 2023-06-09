import { PrismaClient } from "@prisma/client";
import { links } from "../data/links";

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            email: "cosmin.sava@gmail.com",
            role: "USER"
        }
    })
    await prisma.link.createMany({
        data: links
    })
}

main().catch(e => {
    console.log("erroare -----",e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})


