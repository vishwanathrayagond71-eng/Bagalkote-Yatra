import fs from 'fs';

const filePath = 'src/data/destinations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const slugs = [
  'badami-cave-temples',
  'badami-fort',
  'agastya-lake',
  'aihole-monuments',
  'pattadakal-monuments',
  'mahakuta-temple',
  'kudalasangama',
  'almatti-dam',
  'banashankari-temple',
  'yadahalli-chinkara-sanctuary',
  'guledagudda-fort-falls',
  'badami-archaeological-museum',
  'jamakhandi-heritage',
  'ilkal-heritage-town',
  'navanagar-garden-district-center'
];

slugs.forEach(slug => {
  const pattern = new RegExp(`(id:\\s*'${slug}'[\\s\\S]*?featuredImage:\\s*')[^']+'`);
  content = content.replace(pattern, `$1/images/destinations/${slug}.jpg'`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated destinations.ts to local high-res image paths!');
