import { NextResponse } from 'next/server';
import path from 'path';
import { readFile, writeFile } from 'fs/promises';
import { featuredChefs, nationalFaves, restaurants } from '@/app/data/restaurants';

const submissionsFilePath = path.join(process.cwd(), 'app', 'data', 'submissions.json');

async function appendSubmission(entry: Record<string, unknown>) {
  let submissions: unknown = [];

  try {
    const existing = await readFile(submissionsFilePath, 'utf8');
    submissions = JSON.parse(existing);
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    if (err.code !== 'ENOENT') {
      throw error;
    }
    submissions = [];
  }

  const normalized = Array.isArray(submissions) ? submissions : [];
  normalized.push(entry);

  await writeFile(submissionsFilePath, JSON.stringify(normalized, null, 2), 'utf8');
}

/**
 * Trivial in-memory GET endpoint that exposes the static restaurant data.
 * Real implementations could fetch from a database or external service instead.
 */
export async function GET(_request: Request) {
  return NextResponse.json(
    {
      featuredChefs,
      nationalFaves,
      restaurants,
    },
    { status: 200 },
  );
}

/**
 * Simple POST stub that echoes the payload so the frontend can test requests.
 * Extend this to persist data somewhere when real backend logic is ready.
 */
export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const submission = { payload, createdAt: new Date().toISOString() };
    await appendSubmission(submission);

    return NextResponse.json(
      {
        ok: true,
        received: payload,
        note: 'Stub backend stored the payload on disk.',
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Invalid JSON payload',
      },
      { status: 400 },
    );
  }
}
