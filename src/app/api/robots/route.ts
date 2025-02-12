import { NextResponse } from 'next/server'

export async function GET() {
  const robotsTxt = `
User-agent: *
Allow: /
Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml

# Disallow crawling of administrative areas
Disallow: /admin/
Disallow: /api/
`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain'
    }
  })
} 