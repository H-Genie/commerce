import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

const prisma = new PrismaClient()

async function getComment(userId: string, orderItemId: number) {
  try {
    const res = await prisma.comment.findUnique({
      where: {
        orderItemId,
      },
    })

    if (res?.userId === userId) {
      return res
    }

    return { message: 'userId is not matched' }
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
  const { orderItemId } = req.query
  const session = await unstable_getServerSession(req, res, authOptions)

  if (session == null) {
    res.status(200).json({ items: [], message: 'no Session' })
    return
  }
  if (orderItemId == null) {
    res.status(200).json({ items: [], message: 'no orderItemId' })
    return
  }

  try {
    // @ts-ignore
    const wishlist = await getComment(String(session.id), Number(orderItemId))

    res.status(200).json({ items: wishlist, message: 'Success' })
  } catch (error) {
    res.status(200).json({ message: 'Failed' })
  }
}
