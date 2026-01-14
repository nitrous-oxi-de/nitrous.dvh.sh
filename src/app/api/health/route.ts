/**
 * @file        src/app/api/health/route.ts
 * @author      David @dvhsh (https://dvh.sh)
 * @description Health check API route
 */

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    {
      status: 'healthy',
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}

// Path: src/app/api/health/route.ts
