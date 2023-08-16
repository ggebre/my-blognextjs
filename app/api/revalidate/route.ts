// import { NextApiRequest, NextApiResponse } from "next";
// //https://localhost:3000/api/revalidate?path=/&secret=getuGebre
// export default async function Handler(
//     req: NextApiRequest, 
//     res: NextApiResponse
// ) {
//     if (req.query.secret !== process.env.MY_SECRET_TOKEN){
//         return res.status(401).json({message: "Invalid Token!"})
//     }

//     const path = req.query.path as string

//     await res.revalidate(path)

//     return res.json({ revalidated: true})
// }

import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

// e.g a webhook to `your-website.com/api/revalidate?tag=collection&secret=<token>`
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  const tag = request.nextUrl.searchParams.get('tag')
    
  console.log(tag)
  if (secret !== process.env.MY_SECRET_TOKEN) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }
 
  if (!tag) {
    return NextResponse.json({ message: 'Missing tag param' }, { status: 400 })
  }
 
  revalidateTag(tag)
 
  return NextResponse.json({ revalidated: true, now: Date.now() })
}