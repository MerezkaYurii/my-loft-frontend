// Для App Router: app/api/lofts/[collection]/route.ts
import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.BACKEND_API_URL || 'http://localhost:4000';

export async function POST(
  req: NextRequest,
  // { params }: { params: { collection: string } },
): Promise<NextResponse> {
  const body = await req.json();
  // const { collection } = params;
  // Извлекаем collection из URL вручную
  const url = new URL(req.url);
  const segments = url.pathname.split('/');
  const collection = segments[segments.length - 1];
  try {
    const res = await fetch(`${API_URL}/api/loft/${collection}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 },
    );
  }
}
