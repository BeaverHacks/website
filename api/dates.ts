import Airtable from 'airtable'
import { NowResponse } from '@now/node'

interface Schema {
  Name: string;
  Date: string;
}

const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base<Schema>(
  process.env.AIRTABLE_BASE_ID
)

export default async (_, res: NowResponse): Promise<void> => {
  try {
    const data: { [index: string]: string } = {}
    await base('Dates')
      .select()
      .eachPage((records, next: () => void) => {
        records.forEach(r => {
          data[r.fields.Name.toLowerCase()] = r.fields.Date
        })
        next()
      })
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')
    res.status(200).json(data)
  } catch (e) {
    res.status(500).send(e)
  }
}
