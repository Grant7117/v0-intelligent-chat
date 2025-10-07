// app/api/chat/route.ts
import { NextRequest } from "next/server";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

export const runtime = "nodejs"; // easier debugging

const knowledge = `
<Head>
  <title>Cornerstone on Arum | Boutique Apartments in Table View</title>
  <meta name="description" content="Premium 1 & 2 bedroom apartments from R1.5m. Secure, modern living in Table View. Direct from developer." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://www.cornerstoneonarum.co.za/" />
  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Cornerstone on Arum | Boutique Apartments in Table View" />
  <meta property="og:description" content="Premium 1 & 2 bedroom apartments from R1.5m. Secure, modern living in Table View." />
  <meta property="og:image" content="https://www.cornerstoneonarum.co.za/og-image.jpg" />
  <meta property="og:url" content="https://www.cornerstoneonarum.co.za/" />
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Cornerstone on Arum | Boutique Apartments in Table View" />
  <meta name="twitter:description" content="Premium 1 & 2 bedroom apartments from R1.5m. Direct from developer." />
  <meta name="twitter:image" content="https://www.cornerstoneonarum.co.za/og-image.jpg" />
  <!-- Robots -->
  <meta name="robots" content="index, follow" />
  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">{
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    "name": "Cornerstone on Arum",
    "url": "https://www.cornerstoneonarum.co.za",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "154 Arum Road, Table View",
      "addressLocality": "Cape Town",
      "addressRegion": "Western Cape",
      "addressCountry": "South Africa"
    },
    "numberOfUnits": 22,
    "petsAllowed": true,
    "amenityFeature": [
      {"@type": "LocationFeatureSpecification", "name": "Secure Parking", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "Fibre Ready", "value": true}
    ]
  }</script>
</Head>

Building: Cornerstone on Arum
City: Table View
Country: South Africa
`;

export async function GET() {
  // Smoke test in the browser: http://127.0.0.1:3000/api/chat
  const k = process.env.GEMINI_API_KEY ?? "";
  return Response.json({
    ok: true,
    hasKey: !!k,
    keyLen: k.length,
    model: process.env.GEMINI_MODEL ?? "gemini-1.5-flash",
    temperature: Number(process.env.GEMINI_TEMPERATURE ?? "0.2"),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages = body?.messages;

    if (!Array.isArray(messages)) {
      return Response.json(
        { error: "Body must contain messages: [{ role, content }, ...]" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "GEMINI_API_KEY is missing (check .env.local and restart dev server)" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: process.env.GEMINI_MODEL || "gemini-1.5-flash",
    });

    const chat = model.startChat({
      history: [{ role: "user", content: knowledge }, { role: "model", content: "I have read the knowledge base." }, ...messages.slice(0, -1)],
      generationConfig: {
        temperature: Number(process.env.GEMINI_TEMPERATURE ?? "0.2"),
      },
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ],
    });

    const lastMessage = messages[messages.length - 1];
    const result = await chat.sendMessage(lastMessage.content);
    const response = result.response;
    const reply = response.text();

    return Response.json({ reply });
  } catch (e: any) {
    const status = e?.status ?? e?.response?.status ?? 500;
    const message =
      e?.response?.data?.error?.message ??
      e?.error?.message ??
      e?.message ??
      "Unknown error calling Google Generative AI";

    console.error("route.ts error:", { status, message });
    return Response.json({ error: message }, { status });
  }
}
