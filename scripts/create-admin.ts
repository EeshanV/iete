const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  try {
    const password = await bcrypt.hash('admin123', 12)
    
    const admin = await prisma.user.upsert({
      where: { email: 'admin@admin.com' },
      update: {},
      create: {
        email: 'admin@admin.com',
        name: 'Admin User',
        password,
        role: 'admin'
      }
    })

    console.log('Admin user created successfully:', admin)
  } catch (error) {
    console.error('Error creating admin user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  }) 