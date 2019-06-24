import Airtable from 'airtable'
const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
  process.env.AIRTABLE_BASE_ID
)

export default async (req, res) => {
  try {
    let data = {}
    await base('Dates')
      .select()
      .eachPage((records, next) => {
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
