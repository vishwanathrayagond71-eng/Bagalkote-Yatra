// Supabase Client & Service for Bagalkote Yatra
// Works natively with standard fetch API - Zero extra npm packages required!

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://drcehambhipdqvtvfong.supabase.co';
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

interface FetchOptions extends RequestInit {
  params?: Record<string, string>;
}

export async function supabaseRequest<T>(endpoint: string, options: FetchOptions = {}): Promise<{ data: T | null; error: Error | null }> {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return { data: null, error: new Error('Supabase credentials not configured') };
  }

  try {
    let url = `${SUPABASE_URL}/rest/v1/${endpoint}`;
    if (options.params) {
      const searchParams = new URLSearchParams(options.params);
      url += `?${searchParams.toString()}`;
    }

    const headers: Record<string, string> = {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation',
      ...(options.headers as Record<string, string> || {}),
    };

    const res = await fetch(url, {
      ...options,
      headers,
    });

    if (!res.ok) {
      const errText = await res.text();
      return { data: null, error: new Error(`Supabase Error (${res.status}): ${errText}`) };
    }

    const data = await res.json();
    return { data, error: null };
  } catch (err: any) {
    return { data: null, error: err };
  }
}

// -------------------------------------------------------------
// Database Operations for Bagalkote Yatra
// -------------------------------------------------------------

// 1. Places
export async function fetchRemotePlaces() {
  return supabaseRequest<any[]>('places?select=*&order=created_at.desc');
}

export async function upsertRemotePlace(placeData: any) {
  return supabaseRequest('places', {
    method: 'POST',
    headers: {
      'Prefer': 'resolution=merge-duplicates,return=representation',
    },
    body: JSON.stringify(placeData),
  });
}

export async function deleteRemotePlace(placeId: string) {
  return supabaseRequest(`places?id=eq.${placeId}`, {
    method: 'DELETE',
  });
}

// 2. Reviews
export async function fetchRemoteReviews() {
  return supabaseRequest<any[]>('reviews?select=*&order=created_at.desc');
}

export async function insertRemoteReview(reviewData: any) {
  return supabaseRequest('reviews', {
    method: 'POST',
    body: JSON.stringify(reviewData),
  });
}

// 3. Official Contacts
export async function fetchRemoteContacts() {
  return supabaseRequest<any[]>('official_contacts?select=*&order=id.asc');
}

export async function upsertRemoteContact(contactData: any) {
  return supabaseRequest('official_contacts', {
    method: 'POST',
    headers: {
      'Prefer': 'resolution=merge-duplicates,return=representation',
    },
    body: JSON.stringify(contactData),
  });
}

// 4. Contact Form Inquiries
export async function submitInquiry(inquiryData: { name: string; email: string; phone?: string; subject: string; message: string }) {
  return supabaseRequest('contact_inquiries', {
    method: 'POST',
    body: JSON.stringify({
      ...inquiryData,
      created_at: new Date().toISOString(),
    }),
  });
}
