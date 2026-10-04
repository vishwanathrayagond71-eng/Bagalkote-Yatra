import fs from 'fs';

const SUPABASE_URL = 'https://drcehambhipdqvtvfong.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyY2VoYW1iaGlwZHF2dHZmb25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExMjkzNTEsImV4cCI6MjEwNjcwNTM1MX0.FMT7g4blWe18O-ZF1cHXlnMsAX92_xCxyiJ4zCeuj3Q';

async function seedData() {
  console.log('Testing Supabase connection...');

  const headers = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json',
    'Prefer': 'resolution=merge-duplicates,return=representation',
  };

  // Check if places table exists
  const checkRes = await fetch(`${SUPABASE_URL}/rest/v1/places?select=count`, {
    headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
  });

  if (checkRes.status === 404) {
    console.error('Tables not created yet! Please run supabase_schema.sql in your Supabase SQL Editor first.');
    return;
  }

  console.log('Tables exist! Seeding initial 15 places...');
  
  // Read destinations from source
  // We will insert places in a format matching the schema
  const placesText = fs.readFileSync('src/data/destinations.ts', 'utf8');
  // Dynamic import if possible or insert known core records
  console.log('Ready to sync with Supabase!');
}

seedData();
