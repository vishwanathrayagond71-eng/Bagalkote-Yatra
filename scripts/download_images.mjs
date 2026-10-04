import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/images/destinations');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Map of places to reliable, verified high-resolution authentic images
const placeImages = {
  'badami-cave-temples': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Bhutanatha_group_of_temples%2C_Badami.jpg/1920px-Bhutanatha_group_of_temples%2C_Badami.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/7/7b/Vishnu_image_inside_cave_number_3_in_Badami.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Badami.JPG/1280px-Badami.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Nataraja_temple_Badami.jpg/1280px-Nataraja_temple_Badami.jpg'
  ],
  'badami-fort': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Upper_Shivalaya_Badami.jpg/1920px-Upper_Shivalaya_Badami.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/af/HBPA_N_1008_Badami_NorthFort_View.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cannon_at_Badami_Fort.jpg/1280px-Cannon_at_Badami_Fort.jpg'
  ],
  'agastya-lake': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Bhutanatha_group_of_temples%2C_Badami.jpg/1920px-Bhutanatha_group_of_temples%2C_Badami.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Bhutanatha_group_at_sunset%2C_Badami.jpg/1280px-Bhutanatha_group_at_sunset%2C_Badami.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Agastya_lake_Badami.jpg/1280px-Agastya_lake_Badami.jpg'
  ],
  'aihole-monuments': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/8th_century_Durga_temple_exterior_view%2C_Aihole_Hindu_temples_and_monuments_3.jpg/1920px-8th_century_Durga_temple_exterior_view%2C_Aihole_Hindu_temples_and_monuments_3.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Lad_Khan_Temple%2C_Aihole.JPG/1280px-Lad_Khan_Temple%2C_Aihole.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Aihole_Durga_temple_colonnade.jpg/1280px-Aihole_Durga_temple_colonnade.jpg'
  ],
  'pattadakal-monuments': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Pattadakal_000.JPG/1920px-Pattadakal_000.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Virupaksha_temple%2C_Pattadakal.jpg/1920px-Virupaksha_temple%2C_Pattadakal.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Mallikarjuna_temple%2C_Pattadakal.jpg/1280px-Mallikarjuna_temple%2C_Pattadakal.jpg'
  ],
  'mahakuta-temple': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Mahakuta_group_of_temples1_at_Mahakuta.jpg/1920px-Mahakuta_group_of_temples1_at_Mahakuta.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Pushkarini_at_Mahakuta_temple_complex.jpg/1280px-Pushkarini_at_Mahakuta_temple_complex.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Mahakutesvara_Temple.jpg/1280px-Mahakutesvara_Temple.jpg'
  ],
  'kudalasangama': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Kudalasangama.jpg/1920px-Kudalasangama.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sangameshwara_temple%2C_Kudalasangama.jpg/1280px-Sangameshwara_temple%2C_Kudalasangama.jpg'
  ],
  'almatti-dam': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Almatti_Dam_26.jpg/1920px-Almatti_Dam_26.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Almatti_Dam_Karnataka.jpg/1280px-Almatti_Dam_Karnataka.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Almatti_Dam_water_gates.jpg/1280px-Almatti_Dam_water_gates.jpg'
  ],
  'banashankari-temple': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Shakambari_temple_near_Badami.JPG/1920px-Shakambari_temple_near_Badami.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Banashankari_Temple_tower.jpg/1280px-Banashankari_Temple_tower.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Banashankari_Haridra_Tirtha_pushkarini.jpg/1280px-Banashankari_Haridra_Tirtha_pushkarini.jpg'
  ],
  'yadahalli-chinkara-sanctuary': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Chinkara_-_Shreeram_M_V_-_Bikaner.jpg/1920px-Chinkara_-_Shreeram_M_V_-_Bikaner.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Gazella_bennettii_female_Rajasthan.jpg/1280px-Gazella_bennettii_female_Rajasthan.jpg'
  ],
  'guledagudda-fort-falls': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Guledgudda.jpg/1920px-Guledgudda.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Badami_Taluk.jpg/1280px-Badami_Taluk.jpg'
  ],
  'badami-archaeological-museum': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/7th_century_Ardhanarishvara_%28left_half_Shiva%2C_right_half_Parvati%29_at_the_Kadasiddheswara_Shaivism_temple%2C_Pattadakal_monuments_Karnataka.jpg/1920px-7th_century_Ardhanarishvara_%28left_half_Shiva%2C_right_half_Parvati%29_at_the_Kadasiddheswara_Shaivism_temple%2C_Pattadakal_monuments_Karnataka.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Badami_Archaeological_Museum.jpg/1280px-Badami_Archaeological_Museum.jpg'
  ],
  'jamakhandi-heritage': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Ramatirtha_Palace_-_Front_view.jpg/1920px-Ramatirtha_Palace_-_Front_view.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Jamkhandi_Royal_Palace.jpg/1280px-Jamkhandi_Royal_Palace.jpg'
  ],
  'ilkal-heritage-town': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Weaving_ilkal_saree.jpg/1920px-Weaving_ilkal_saree.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Traditional_Ilkal_saree_with_kasuti_work.jpg/1280px-Traditional_Ilkal_saree_with_kasuti_work.jpg'
  ],
  'navanagar-garden-district-center': [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Badami_Taluk.jpg/1920px-Badami_Taluk.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Agastya_lake_Badami.jpg/1280px-Agastya_lake_Badami.jpg'
  ]
};

async function downloadFile(url, destPath) {
  const headers = {
    'User-Agent': 'BagalkoteTourismBot/1.0 (https://bagalkotetourism.gov.in; contact@bagalkotetourism.gov.in) Node/24',
    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
  };

  try {
    const res = await fetch(url, { headers });
    if (!res.ok) {
      console.log(`Failed ${url}: status ${res.status}`);
      return false;
    }
    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('text/html')) {
      console.log(`Returned HTML for ${url}`);
      return false;
    }
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    if (buffer.length < 5000) {
      console.log(`Too small (${buffer.length} bytes) for ${url}`);
      return false;
    }
    fs.writeFileSync(destPath, buffer);
    console.log(`Saved: ${path.basename(destPath)} (${Math.round(buffer.length / 1024)} KB)`);
    return true;
  } catch (err) {
    console.log(`Error downloading ${url}:`, err.message);
    return false;
  }
}

async function run() {
  console.log('Downloading high resolution authentic images to local public directory...');
  for (const [slug, urls] of Object.entries(placeImages)) {
    const primaryDest = path.join(outDir, `${slug}.jpg`);
    let success = false;
    for (const url of urls) {
      // Sleep 300ms to be polite to Wikimedia
      await new Promise(r => setTimeout(r, 300));
      success = await downloadFile(url, primaryDest);
      if (success) break;
    }
    if (!success) {
      console.warn(`Could not download primary image for ${slug}`);
    }
  }
  console.log('Done downloading primary images.');
}

run();
