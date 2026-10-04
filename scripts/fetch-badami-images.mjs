const pages = [
  'Badami_cave_temples',
  'Bhutanatha_group_of_temples,_Badami',
  'Pattadakal',
  'Virupaksha_Temple,_Pattadakal',
  'Archaeological_Museum,_Badami',
  'Badami_Fort',
  'Upper_Shivalaya,_Badami'
];

async function run() {
  for (const p of pages) {
    try {
      const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(p)}`, {
        headers: { 'User-Agent': 'BagalkoteTourismBot/1.0 (tourism@bagalkote.nic.in)' }
      });
      const data = await res.json();
      console.log(`=== ${p} ===`);
      console.log('Original Image:', data.originalimage?.source || data.thumbnail?.source || 'None');
      
      const mediaRes = await fetch(`https://en.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent(p)}`, {
        headers: { 'User-Agent': 'BagalkoteTourismBot/1.0 (tourism@bagalkote.nic.in)' }
      });
      const mediaData = await mediaRes.json();
      const items = (mediaData.items || []).filter(i => i.type === 'image').slice(0, 4);
      console.log('Gallery Items:', items.map(i => i.srcset?.[0]?.src || i.title));
    } catch (e) {
      console.error('Error for', p, e.message);
    }
  }
}

run();
