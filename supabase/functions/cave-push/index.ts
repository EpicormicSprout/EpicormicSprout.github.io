import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const { title, content, path } = await req.json()
    const GITHUB_TOKEN = Deno.env.get('GITHUB_TOKEN')
    const repo = 'EpicormicSprout/cave'
    const filePath = path || `Literature/${title}.md`
    const apiUrl = `https://api.github.com/repos/${repo}/contents/${encodeURIComponent(filePath)}`

    // Check if file exists to get SHA
    let sha = null
    const check = await fetch(apiUrl, {
      headers: { 'Authorization': `token ${GITHUB_TOKEN}`, 'Accept': 'application/vnd.github.v3+json' }
    })
    if (check.ok) {
      const existing = await check.json()
      sha = existing.sha
    }

    const body: any = {
      message: `update note: ${title}`,
      content: btoa(unescape(encodeURIComponent(content))),
    }
    if (sha) body.sha = sha

    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const data = await response.json()
    return new Response(JSON.stringify({ success: response.ok, data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch(e) {
    return new Response(JSON.stringify({ success: false, error: e.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500
    })
  }
})
