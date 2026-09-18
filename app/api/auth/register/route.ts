import prisma from '../../../../lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, name, password } = body
    if (!email || !password) return new Response('Email and password required', { status: 400 })
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) return new Response('User already exists', { status: 400 })
    const hashed = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({ data: { email, name, password: hashed } })
    return new Response(JSON.stringify({ id: user.id, email: user.email }), { status: 201 })
  } catch {
    return new Response('Server error', { status: 500 })
  }
}
