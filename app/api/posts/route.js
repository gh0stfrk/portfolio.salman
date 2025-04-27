import { NextResponse } from 'next/server';
import getPostMetadata from "@/utils/getPostMetadata";

export async function GET() {
  try {
    const posts = getPostMetadata();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}