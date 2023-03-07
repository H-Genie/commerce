import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: 'secret_ncV5kPRNWZnfrH4osQJvuDEAnDhZy2mKppO8DqN0iVc',
})

const databaseId = 'a45a9d236b7a4d40a3975e43001a5698'

async function addItem(name: string) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
    })
    console.log(response)
  } catch (err) {
    console.error(JSON.stringify(err))
  }
}

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name } = req.query
  if (name === null) {
    return res.status(400).json({ message: 'No name' })
  }

  try {
    await addItem(String(name))
    res.status(200).json({ message: `Success ${name} add` })
  } catch (err) {
    res.status(400).json({ message: `Fail ${name} add` })
  }
}
