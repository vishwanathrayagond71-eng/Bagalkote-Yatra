-- =============================================================
-- Bagalkote Yatra - Supabase Permissions Fix
-- Run this in your Supabase SQL Editor
-- =============================================================

-- 1. Ensure all tables exist
CREATE TABLE IF NOT EXISTS places (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title JSONB NOT NULL,
  tagline JSONB,
  category TEXT NOT NULL,
  featured_image TEXT NOT NULL,
  gallery TEXT[] DEFAULT '{}',
  video_url TEXT,
  short_description JSONB,
  description JSONB,
  history JSONB,
  architecture JSONB,
  best_time_to_visit JSONB,
  entry_fee JSONB,
  timings JSONB,
  how_to_reach JSONB,
  nearby_attractions TEXT[] DEFAULT '{}',
  coordinates JSONB,
  map_embed_url TEXT,
  highlights TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'published',
  featured BOOLEAN DEFAULT false,
  rating NUMERIC DEFAULT 4.8,
  reviews_count INTEGER DEFAULT 0,
  seo JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS reviews (
  id TEXT PRIMARY KEY,
  place_slug TEXT NOT NULL,
  place_name TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_location TEXT,
  author_avatar TEXT,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title TEXT,
  comment TEXT NOT NULL,
  visit_season TEXT,
  helpful_count INTEGER DEFAULT 0,
  verified BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS official_contacts (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  badge JSONB NOT NULL,
  designation JSONB NOT NULL,
  phone TEXT NOT NULL,
  alternate_phone TEXT,
  email TEXT NOT NULL,
  office_location JSONB NOT NULL,
  timing JSONB NOT NULL,
  whatsapp TEXT,
  is_primary BOOLEAN DEFAULT false,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Grant full database permissions to anon and authenticated roles
GRANT ALL ON TABLE places TO anon, authenticated;
GRANT ALL ON TABLE reviews TO anon, authenticated;
GRANT ALL ON TABLE official_contacts TO anon, authenticated;
GRANT ALL ON TABLE contact_inquiries TO anon, authenticated;

-- Grant sequence permissions for contact_inquiries ID generator
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;

-- 3. Drop existing policies to prevent "policy already exists" error
DROP POLICY IF EXISTS "Allow public read on places" ON places;
DROP POLICY IF EXISTS "Allow public write on places" ON places;
DROP POLICY IF EXISTS "Allow public all on places" ON places;

DROP POLICY IF EXISTS "Allow public read on reviews" ON reviews;
DROP POLICY IF EXISTS "Allow public insert on reviews" ON reviews;
DROP POLICY IF EXISTS "Allow public update on reviews" ON reviews;
DROP POLICY IF EXISTS "Allow public all on reviews" ON reviews;

DROP POLICY IF EXISTS "Allow public read on official_contacts" ON official_contacts;
DROP POLICY IF EXISTS "Allow public write on official_contacts" ON official_contacts;
DROP POLICY IF EXISTS "Allow public all on official_contacts" ON official_contacts;

DROP POLICY IF EXISTS "Allow public read on contact_inquiries" ON contact_inquiries;
DROP POLICY IF EXISTS "Allow public insert on contact_inquiries" ON contact_inquiries;
DROP POLICY IF EXISTS "Allow public all on contact_inquiries" ON contact_inquiries;

-- 4. Enable Row Level Security (RLS) with permissive open policies
ALTER TABLE places ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE official_contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public all on places" ON places FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public all on reviews" ON reviews FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public all on official_contacts" ON official_contacts FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public all on contact_inquiries" ON contact_inquiries FOR ALL USING (true) WITH CHECK (true);

SELECT 'All Bagalkote Yatra tables and permissions configured successfully!' AS result;
