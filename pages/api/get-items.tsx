import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: 'secret_ncV5kPRNWZnfrH4osQJvuDEAnDhZy2mKppO8DqN0iVc',
})

const databaseId = 'a45a9d236b7a4d40a3975e43001a5698'

async function getItems() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Price',
          direction: 'ascending',
        },
      ],
    })
    // console.log(response)
    return response
  } catch (err) {
    console.error(JSON.stringify(err))
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
  try {
    const response = await getItems()
    res.status(200).json({ items: response?.results, message: `Success` })
  } catch (err) {
    res.status(400).json({ message: `Failed` })
  }
}
