import { Cart, PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

const prisma = new PrismaClient()

async function updateOrderStatus(id: number, status: number) {
  try {
    const res = await prisma.orders.update({
      where: {
        id,
      },
      data: {
        status,
      },
    })
    // console.log(res)
    return res
  } catch (error) {
    console.error(error)
  }
}

type Data = {
  items?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await unstable_getServerSession(req, res, authOptions)
  const { id, status, userId } = JSON.parse(req.body)

  //@ts-ignore
  if (session == null || session.id !== userId) {
    res
      .status(200)
      .json({ items: [], message: 'no Session on invalid session' })
    return
  }

  try {
    //@ts-ignore
    const wishlist = await updateOrderStatus(id, status)
    res.status(200).json({ items: wishlist, message: 'Success' })
  } catch (error) {
    res.status(200).json({ message: 'Failed' })
  }
}
