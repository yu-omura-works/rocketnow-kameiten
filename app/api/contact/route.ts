import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const scriptUrl = 'https://script.google.com/macros/s/AKfycbzIq4w6q7Vcx3s__Im82vIBOuTR3dPkuhZIG6H5JjROPtV-tVfOsMunji5uDA9VJHXbNw/exec';

  const body = new URLSearchParams({
    storeName: data.storeName,
    contactName: data.contactName,
    phone: data.phone,
    email: data.email,
    category: data.category,
    message: data.message,
  });

  await fetch(scriptUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
    redirect: 'follow',
  });

  return NextResponse.json({ result: 'ok' });
}
