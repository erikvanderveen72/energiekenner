import { NextResponse } from "next/server";

// IndexNow API key — Bing, Yandex en andere zoekmachines
const INDEXNOW_KEY = "energiekenner2026indexnow";

// GET: dient als key-verificatiebestand
export async function GET() {
  return new NextResponse(INDEXNOW_KEY, {
    headers: { "Content-Type": "text/plain" },
  });
}

// POST: stuur URLs naar IndexNow (Bing/Yandex)
export async function POST(request: Request) {
  const { urls } = await request.json();
  const host = "energiekenner.nl";

  if (!urls || !Array.isArray(urls) || urls.length === 0) {
    return NextResponse.json({ error: "No URLs provided" }, { status: 400 });
  }

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation: `https://${host}/api/indexnow`,
        urlList: urls,
      }),
    });

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      submitted: urls.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit to IndexNow" },
      { status: 500 }
    );
  }
}
