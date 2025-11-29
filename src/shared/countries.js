/**
 * Country name to flag emoji mapping
 * Includes common variations and abbreviations
 */

const COUNTRY_FLAGS = {
  // A
  'afghanistan': '\u{1F1E6}\u{1F1EB}',
  'albania': '\u{1F1E6}\u{1F1F1}',
  'algeria': '\u{1F1E9}\u{1F1FF}',
  'andorra': '\u{1F1E6}\u{1F1E9}',
  'angola': '\u{1F1E6}\u{1F1F4}',
  'antigua and barbuda': '\u{1F1E6}\u{1F1EC}',
  'argentina': '\u{1F1E6}\u{1F1F7}',
  'armenia': '\u{1F1E6}\u{1F1F2}',
  'australia': '\u{1F1E6}\u{1F1FA}',
  'austria': '\u{1F1E6}\u{1F1F9}',
  'azerbaijan': '\u{1F1E6}\u{1F1FF}',

  // B
  'bahamas': '\u{1F1E7}\u{1F1F8}',
  'bahrain': '\u{1F1E7}\u{1F1ED}',
  'bangladesh': '\u{1F1E7}\u{1F1E9}',
  'barbados': '\u{1F1E7}\u{1F1E7}',
  'belarus': '\u{1F1E7}\u{1F1FE}',
  'belgium': '\u{1F1E7}\u{1F1EA}',
  'belize': '\u{1F1E7}\u{1F1FF}',
  'benin': '\u{1F1E7}\u{1F1EF}',
  'bhutan': '\u{1F1E7}\u{1F1F9}',
  'bolivia': '\u{1F1E7}\u{1F1F4}',
  'bosnia and herzegovina': '\u{1F1E7}\u{1F1E6}',
  'bosnia': '\u{1F1E7}\u{1F1E6}',
  'botswana': '\u{1F1E7}\u{1F1FC}',
  'brazil': '\u{1F1E7}\u{1F1F7}',
  'brasil': '\u{1F1E7}\u{1F1F7}',
  'brunei': '\u{1F1E7}\u{1F1F3}',
  'bulgaria': '\u{1F1E7}\u{1F1EC}',
  'burkina faso': '\u{1F1E7}\u{1F1EB}',
  'burundi': '\u{1F1E7}\u{1F1EE}',

  // C
  'cambodia': '\u{1F1F0}\u{1F1ED}',
  'cameroon': '\u{1F1E8}\u{1F1F2}',
  'canada': '\u{1F1E8}\u{1F1E6}',
  'cape verde': '\u{1F1E8}\u{1F1FB}',
  'central african republic': '\u{1F1E8}\u{1F1EB}',
  'chad': '\u{1F1F9}\u{1F1E9}',
  'chile': '\u{1F1E8}\u{1F1F1}',
  'china': '\u{1F1E8}\u{1F1F3}',
  'colombia': '\u{1F1E8}\u{1F1F4}',
  'comoros': '\u{1F1F0}\u{1F1F2}',
  'congo': '\u{1F1E8}\u{1F1EC}',
  'costa rica': '\u{1F1E8}\u{1F1F7}',
  'croatia': '\u{1F1ED}\u{1F1F7}',
  'cuba': '\u{1F1E8}\u{1F1FA}',
  'cyprus': '\u{1F1E8}\u{1F1FE}',
  'czech republic': '\u{1F1E8}\u{1F1FF}',
  'czechia': '\u{1F1E8}\u{1F1FF}',

  // D
  'denmark': '\u{1F1E9}\u{1F1F0}',
  'djibouti': '\u{1F1E9}\u{1F1EF}',
  'dominica': '\u{1F1E9}\u{1F1F2}',
  'dominican republic': '\u{1F1E9}\u{1F1F4}',

  // E
  'ecuador': '\u{1F1EA}\u{1F1E8}',
  'egypt': '\u{1F1EA}\u{1F1EC}',
  'el salvador': '\u{1F1F8}\u{1F1FB}',
  'equatorial guinea': '\u{1F1EC}\u{1F1F6}',
  'eritrea': '\u{1F1EA}\u{1F1F7}',
  'estonia': '\u{1F1EA}\u{1F1EA}',
  'eswatini': '\u{1F1F8}\u{1F1FF}',
  'ethiopia': '\u{1F1EA}\u{1F1F9}',

  // F
  'fiji': '\u{1F1EB}\u{1F1EF}',
  'finland': '\u{1F1EB}\u{1F1EE}',
  'france': '\u{1F1EB}\u{1F1F7}',

  // G
  'gabon': '\u{1F1EC}\u{1F1E6}',
  'gambia': '\u{1F1EC}\u{1F1F2}',
  'georgia': '\u{1F1EC}\u{1F1EA}',
  'germany': '\u{1F1E9}\u{1F1EA}',
  'ghana': '\u{1F1EC}\u{1F1ED}',
  'greece': '\u{1F1EC}\u{1F1F7}',
  'grenada': '\u{1F1EC}\u{1F1E9}',
  'guatemala': '\u{1F1EC}\u{1F1F9}',
  'guinea': '\u{1F1EC}\u{1F1F3}',
  'guinea-bissau': '\u{1F1EC}\u{1F1FC}',
  'guyana': '\u{1F1EC}\u{1F1FE}',

  // H
  'haiti': '\u{1F1ED}\u{1F1F9}',
  'honduras': '\u{1F1ED}\u{1F1F3}',
  'hong kong': '\u{1F1ED}\u{1F1F0}',
  'hungary': '\u{1F1ED}\u{1F1FA}',

  // I
  'iceland': '\u{1F1EE}\u{1F1F8}',
  'india': '\u{1F1EE}\u{1F1F3}',
  'indonesia': '\u{1F1EE}\u{1F1E9}',
  'iran': '\u{1F1EE}\u{1F1F7}',
  'iraq': '\u{1F1EE}\u{1F1F6}',
  'ireland': '\u{1F1EE}\u{1F1EA}',
  'israel': '\u{1F1EE}\u{1F1F1}',
  'italy': '\u{1F1EE}\u{1F1F9}',
  'ivory coast': '\u{1F1E8}\u{1F1EE}',

  // J
  'jamaica': '\u{1F1EF}\u{1F1F2}',
  'japan': '\u{1F1EF}\u{1F1F5}',
  'jordan': '\u{1F1EF}\u{1F1F4}',

  // K
  'kazakhstan': '\u{1F1F0}\u{1F1FF}',
  'kenya': '\u{1F1F0}\u{1F1EA}',
  'kiribati': '\u{1F1F0}\u{1F1EE}',
  'korea': '\u{1F1F0}\u{1F1F7}',
  'south korea': '\u{1F1F0}\u{1F1F7}',
  'north korea': '\u{1F1F0}\u{1F1F5}',
  'kuwait': '\u{1F1F0}\u{1F1FC}',
  'kyrgyzstan': '\u{1F1F0}\u{1F1EC}',

  // L
  'laos': '\u{1F1F1}\u{1F1E6}',
  'latvia': '\u{1F1F1}\u{1F1FB}',
  'lebanon': '\u{1F1F1}\u{1F1E7}',
  'lesotho': '\u{1F1F1}\u{1F1F8}',
  'liberia': '\u{1F1F1}\u{1F1F7}',
  'libya': '\u{1F1F1}\u{1F1FE}',
  'liechtenstein': '\u{1F1F1}\u{1F1EE}',
  'lithuania': '\u{1F1F1}\u{1F1F9}',
  'luxembourg': '\u{1F1F1}\u{1F1FA}',

  // M
  'macau': '\u{1F1F2}\u{1F1F4}',
  'madagascar': '\u{1F1F2}\u{1F1EC}',
  'malawi': '\u{1F1F2}\u{1F1FC}',
  'malaysia': '\u{1F1F2}\u{1F1FE}',
  'maldives': '\u{1F1F2}\u{1F1FB}',
  'mali': '\u{1F1F2}\u{1F1F1}',
  'malta': '\u{1F1F2}\u{1F1F9}',
  'marshall islands': '\u{1F1F2}\u{1F1ED}',
  'mauritania': '\u{1F1F2}\u{1F1F7}',
  'mauritius': '\u{1F1F2}\u{1F1FA}',
  'mexico': '\u{1F1F2}\u{1F1FD}',
  'micronesia': '\u{1F1EB}\u{1F1F2}',
  'moldova': '\u{1F1F2}\u{1F1E9}',
  'monaco': '\u{1F1F2}\u{1F1E8}',
  'mongolia': '\u{1F1F2}\u{1F1F3}',
  'montenegro': '\u{1F1F2}\u{1F1EA}',
  'morocco': '\u{1F1F2}\u{1F1E6}',
  'mozambique': '\u{1F1F2}\u{1F1FF}',
  'myanmar': '\u{1F1F2}\u{1F1F2}',
  'burma': '\u{1F1F2}\u{1F1F2}',

  // N
  'namibia': '\u{1F1F3}\u{1F1E6}',
  'nauru': '\u{1F1F3}\u{1F1F7}',
  'nepal': '\u{1F1F3}\u{1F1F5}',
  'netherlands': '\u{1F1F3}\u{1F1F1}',
  'holland': '\u{1F1F3}\u{1F1F1}',
  'new zealand': '\u{1F1F3}\u{1F1FF}',
  'nicaragua': '\u{1F1F3}\u{1F1EE}',
  'niger': '\u{1F1F3}\u{1F1EA}',
  'nigeria': '\u{1F1F3}\u{1F1EC}',
  'north macedonia': '\u{1F1F2}\u{1F1F0}',
  'macedonia': '\u{1F1F2}\u{1F1F0}',
  'norway': '\u{1F1F3}\u{1F1F4}',

  // O
  'oman': '\u{1F1F4}\u{1F1F2}',

  // P
  'pakistan': '\u{1F1F5}\u{1F1F0}',
  'palau': '\u{1F1F5}\u{1F1FC}',
  'palestine': '\u{1F1F5}\u{1F1F8}',
  'panama': '\u{1F1F5}\u{1F1E6}',
  'papua new guinea': '\u{1F1F5}\u{1F1EC}',
  'paraguay': '\u{1F1F5}\u{1F1FE}',
  'peru': '\u{1F1F5}\u{1F1EA}',
  'philippines': '\u{1F1F5}\u{1F1ED}',
  'poland': '\u{1F1F5}\u{1F1F1}',
  'portugal': '\u{1F1F5}\u{1F1F9}',
  'puerto rico': '\u{1F1F5}\u{1F1F7}',

  // Q
  'qatar': '\u{1F1F6}\u{1F1E6}',

  // R
  'romania': '\u{1F1F7}\u{1F1F4}',
  'russia': '\u{1F1F7}\u{1F1FA}',
  'russian federation': '\u{1F1F7}\u{1F1FA}',
  'rwanda': '\u{1F1F7}\u{1F1FC}',

  // S
  'saint kitts and nevis': '\u{1F1F0}\u{1F1F3}',
  'saint lucia': '\u{1F1F1}\u{1F1E8}',
  'saint vincent and the grenadines': '\u{1F1FB}\u{1F1E8}',
  'samoa': '\u{1F1FC}\u{1F1F8}',
  'san marino': '\u{1F1F8}\u{1F1F2}',
  'sao tome and principe': '\u{1F1F8}\u{1F1F9}',
  'saudi arabia': '\u{1F1F8}\u{1F1E6}',
  'senegal': '\u{1F1F8}\u{1F1F3}',
  'serbia': '\u{1F1F7}\u{1F1F8}',
  'seychelles': '\u{1F1F8}\u{1F1E8}',
  'sierra leone': '\u{1F1F8}\u{1F1F1}',
  'singapore': '\u{1F1F8}\u{1F1EC}',
  'slovakia': '\u{1F1F8}\u{1F1F0}',
  'slovenia': '\u{1F1F8}\u{1F1EE}',
  'solomon islands': '\u{1F1F8}\u{1F1E7}',
  'somalia': '\u{1F1F8}\u{1F1F4}',
  'south africa': '\u{1F1FF}\u{1F1E6}',
  'south sudan': '\u{1F1F8}\u{1F1F8}',
  'spain': '\u{1F1EA}\u{1F1F8}',
  'sri lanka': '\u{1F1F1}\u{1F1F0}',
  'sudan': '\u{1F1F8}\u{1F1E9}',
  'suriname': '\u{1F1F8}\u{1F1F7}',
  'sweden': '\u{1F1F8}\u{1F1EA}',
  'switzerland': '\u{1F1E8}\u{1F1ED}',
  'syria': '\u{1F1F8}\u{1F1FE}',

  // T
  'taiwan': '\u{1F1F9}\u{1F1FC}',
  'tajikistan': '\u{1F1F9}\u{1F1EF}',
  'tanzania': '\u{1F1F9}\u{1F1FF}',
  'thailand': '\u{1F1F9}\u{1F1ED}',
  'timor-leste': '\u{1F1F9}\u{1F1F1}',
  'east timor': '\u{1F1F9}\u{1F1F1}',
  'togo': '\u{1F1F9}\u{1F1EC}',
  'tonga': '\u{1F1F9}\u{1F1F4}',
  'trinidad and tobago': '\u{1F1F9}\u{1F1F9}',
  'tunisia': '\u{1F1F9}\u{1F1F3}',
  'turkey': '\u{1F1F9}\u{1F1F7}',
  'turkmenistan': '\u{1F1F9}\u{1F1F2}',
  'tuvalu': '\u{1F1F9}\u{1F1FB}',

  // U
  'uganda': '\u{1F1FA}\u{1F1EC}',
  'ukraine': '\u{1F1FA}\u{1F1E6}',
  'united arab emirates': '\u{1F1E6}\u{1F1EA}',
  'uae': '\u{1F1E6}\u{1F1EA}',
  'united kingdom': '\u{1F1EC}\u{1F1E7}',
  'uk': '\u{1F1EC}\u{1F1E7}',
  'great britain': '\u{1F1EC}\u{1F1E7}',
  'britain': '\u{1F1EC}\u{1F1E7}',
  'england': '\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}',
  'scotland': '\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}',
  'wales': '\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}',
  'united states': '\u{1F1FA}\u{1F1F8}',
  'usa': '\u{1F1FA}\u{1F1F8}',
  'us': '\u{1F1FA}\u{1F1F8}',
  'america': '\u{1F1FA}\u{1F1F8}',
  'uruguay': '\u{1F1FA}\u{1F1FE}',
  'uzbekistan': '\u{1F1FA}\u{1F1FF}',

  // V
  'vanuatu': '\u{1F1FB}\u{1F1FA}',
  'vatican': '\u{1F1FB}\u{1F1E6}',
  'vatican city': '\u{1F1FB}\u{1F1E6}',
  'venezuela': '\u{1F1FB}\u{1F1EA}',
  'vietnam': '\u{1F1FB}\u{1F1F3}',
  'viet nam': '\u{1F1FB}\u{1F1F3}',

  // Y
  'yemen': '\u{1F1FE}\u{1F1EA}',

  // Z
  'zambia': '\u{1F1FF}\u{1F1F2}',
  'zimbabwe': '\u{1F1FF}\u{1F1FC}',

  // Regions (X/Twitter uses these for App Store regions)
  'europe': '\u{1F1EA}\u{1F1FA}',          // EU flag
  'european union': '\u{1F1EA}\u{1F1FA}',
  'eu': '\u{1F1EA}\u{1F1FA}',
  'south asia': '\u{1F1EE}\u{1F1F3}\u{1F1F5}\u{1F1F0}\u{1F1E7}\u{1F1E9}', // India, Pakistan, Bangladesh flags
  'southeast asia': '\u{1F30F}',
  'east asia': '\u{1F30F}',
  'asia': '\u{1F30F}',
  'asia pacific': '\u{1F30F}',
  'apac': '\u{1F30F}',
  'middle east': '\u{1F30D}',              // Globe Europe-Africa
  'mena': '\u{1F30D}',
  'africa': '\u{1F30D}',
  'sub-saharan africa': '\u{1F30D}',
  'north america': '\u{1F1FA}\u{1F1F8}\u{1F1E8}\u{1F1E6}', // USA, Canada flags
  'south america': '\u{1F1E7}\u{1F1F7}\u{1F1E6}\u{1F1F7}\u{1F1E8}\u{1F1F4}', // Brazil, Argentina, Colombia flags
  'latin america': '\u{1F30E}',
  'latam': '\u{1F30E}',
  'americas': '\u{1F30E}',
  'oceania': '\u{1F30F}',
  'pacific': '\u{1F30F}',
  'worldwide': '\u{1F310}',                // Globe with meridians
  'global': '\u{1F310}'
};

// ISO 3166-1 alpha-2 code to flag mapping
const COUNTRY_CODES = {
  'AF': '\u{1F1E6}\u{1F1EB}', 'AL': '\u{1F1E6}\u{1F1F1}', 'DZ': '\u{1F1E9}\u{1F1FF}',
  'AD': '\u{1F1E6}\u{1F1E9}', 'AO': '\u{1F1E6}\u{1F1F4}', 'AG': '\u{1F1E6}\u{1F1EC}',
  'AR': '\u{1F1E6}\u{1F1F7}', 'AM': '\u{1F1E6}\u{1F1F2}', 'AU': '\u{1F1E6}\u{1F1FA}',
  'AT': '\u{1F1E6}\u{1F1F9}', 'AZ': '\u{1F1E6}\u{1F1FF}', 'BS': '\u{1F1E7}\u{1F1F8}',
  'BH': '\u{1F1E7}\u{1F1ED}', 'BD': '\u{1F1E7}\u{1F1E9}', 'BB': '\u{1F1E7}\u{1F1E7}',
  'BY': '\u{1F1E7}\u{1F1FE}', 'BE': '\u{1F1E7}\u{1F1EA}', 'BZ': '\u{1F1E7}\u{1F1FF}',
  'BJ': '\u{1F1E7}\u{1F1EF}', 'BT': '\u{1F1E7}\u{1F1F9}', 'BO': '\u{1F1E7}\u{1F1F4}',
  'BA': '\u{1F1E7}\u{1F1E6}', 'BW': '\u{1F1E7}\u{1F1FC}', 'BR': '\u{1F1E7}\u{1F1F7}',
  'BN': '\u{1F1E7}\u{1F1F3}', 'BG': '\u{1F1E7}\u{1F1EC}', 'BF': '\u{1F1E7}\u{1F1EB}',
  'BI': '\u{1F1E7}\u{1F1EE}', 'KH': '\u{1F1F0}\u{1F1ED}', 'CM': '\u{1F1E8}\u{1F1F2}',
  'CA': '\u{1F1E8}\u{1F1E6}', 'CV': '\u{1F1E8}\u{1F1FB}', 'CF': '\u{1F1E8}\u{1F1EB}',
  'TD': '\u{1F1F9}\u{1F1E9}', 'CL': '\u{1F1E8}\u{1F1F1}', 'CN': '\u{1F1E8}\u{1F1F3}',
  'CO': '\u{1F1E8}\u{1F1F4}', 'KM': '\u{1F1F0}\u{1F1F2}', 'CG': '\u{1F1E8}\u{1F1EC}',
  'CR': '\u{1F1E8}\u{1F1F7}', 'HR': '\u{1F1ED}\u{1F1F7}', 'CU': '\u{1F1E8}\u{1F1FA}',
  'CY': '\u{1F1E8}\u{1F1FE}', 'CZ': '\u{1F1E8}\u{1F1FF}', 'DK': '\u{1F1E9}\u{1F1F0}',
  'DJ': '\u{1F1E9}\u{1F1EF}', 'DM': '\u{1F1E9}\u{1F1F2}', 'DO': '\u{1F1E9}\u{1F1F4}',
  'EC': '\u{1F1EA}\u{1F1E8}', 'EG': '\u{1F1EA}\u{1F1EC}', 'SV': '\u{1F1F8}\u{1F1FB}',
  'GQ': '\u{1F1EC}\u{1F1F6}', 'ER': '\u{1F1EA}\u{1F1F7}', 'EE': '\u{1F1EA}\u{1F1EA}',
  'SZ': '\u{1F1F8}\u{1F1FF}', 'ET': '\u{1F1EA}\u{1F1F9}', 'FJ': '\u{1F1EB}\u{1F1EF}',
  'FI': '\u{1F1EB}\u{1F1EE}', 'FR': '\u{1F1EB}\u{1F1F7}', 'GA': '\u{1F1EC}\u{1F1E6}',
  'GM': '\u{1F1EC}\u{1F1F2}', 'GE': '\u{1F1EC}\u{1F1EA}', 'DE': '\u{1F1E9}\u{1F1EA}',
  'GH': '\u{1F1EC}\u{1F1ED}', 'GR': '\u{1F1EC}\u{1F1F7}', 'GD': '\u{1F1EC}\u{1F1E9}',
  'GT': '\u{1F1EC}\u{1F1F9}', 'GN': '\u{1F1EC}\u{1F1F3}', 'GW': '\u{1F1EC}\u{1F1FC}',
  'GY': '\u{1F1EC}\u{1F1FE}', 'HT': '\u{1F1ED}\u{1F1F9}', 'HN': '\u{1F1ED}\u{1F1F3}',
  'HK': '\u{1F1ED}\u{1F1F0}', 'HU': '\u{1F1ED}\u{1F1FA}', 'IS': '\u{1F1EE}\u{1F1F8}',
  'IN': '\u{1F1EE}\u{1F1F3}', 'ID': '\u{1F1EE}\u{1F1E9}', 'IR': '\u{1F1EE}\u{1F1F7}',
  'IQ': '\u{1F1EE}\u{1F1F6}', 'IE': '\u{1F1EE}\u{1F1EA}', 'IL': '\u{1F1EE}\u{1F1F1}',
  'IT': '\u{1F1EE}\u{1F1F9}', 'CI': '\u{1F1E8}\u{1F1EE}', 'JM': '\u{1F1EF}\u{1F1F2}',
  'JP': '\u{1F1EF}\u{1F1F5}', 'JO': '\u{1F1EF}\u{1F1F4}', 'KZ': '\u{1F1F0}\u{1F1FF}',
  'KE': '\u{1F1F0}\u{1F1EA}', 'KI': '\u{1F1F0}\u{1F1EE}', 'KR': '\u{1F1F0}\u{1F1F7}',
  'KP': '\u{1F1F0}\u{1F1F5}', 'KW': '\u{1F1F0}\u{1F1FC}', 'KG': '\u{1F1F0}\u{1F1EC}',
  'LA': '\u{1F1F1}\u{1F1E6}', 'LV': '\u{1F1F1}\u{1F1FB}', 'LB': '\u{1F1F1}\u{1F1E7}',
  'LS': '\u{1F1F1}\u{1F1F8}', 'LR': '\u{1F1F1}\u{1F1F7}', 'LY': '\u{1F1F1}\u{1F1FE}',
  'LI': '\u{1F1F1}\u{1F1EE}', 'LT': '\u{1F1F1}\u{1F1F9}', 'LU': '\u{1F1F1}\u{1F1FA}',
  'MO': '\u{1F1F2}\u{1F1F4}', 'MG': '\u{1F1F2}\u{1F1EC}', 'MW': '\u{1F1F2}\u{1F1FC}',
  'MY': '\u{1F1F2}\u{1F1FE}', 'MV': '\u{1F1F2}\u{1F1FB}', 'ML': '\u{1F1F2}\u{1F1F1}',
  'MT': '\u{1F1F2}\u{1F1F9}', 'MH': '\u{1F1F2}\u{1F1ED}', 'MR': '\u{1F1F2}\u{1F1F7}',
  'MU': '\u{1F1F2}\u{1F1FA}', 'MX': '\u{1F1F2}\u{1F1FD}', 'FM': '\u{1F1EB}\u{1F1F2}',
  'MD': '\u{1F1F2}\u{1F1E9}', 'MC': '\u{1F1F2}\u{1F1E8}', 'MN': '\u{1F1F2}\u{1F1F3}',
  'ME': '\u{1F1F2}\u{1F1EA}', 'MA': '\u{1F1F2}\u{1F1E6}', 'MZ': '\u{1F1F2}\u{1F1FF}',
  'MM': '\u{1F1F2}\u{1F1F2}', 'NA': '\u{1F1F3}\u{1F1E6}', 'NR': '\u{1F1F3}\u{1F1F7}',
  'NP': '\u{1F1F3}\u{1F1F5}', 'NL': '\u{1F1F3}\u{1F1F1}', 'NZ': '\u{1F1F3}\u{1F1FF}',
  'NI': '\u{1F1F3}\u{1F1EE}', 'NE': '\u{1F1F3}\u{1F1EA}', 'NG': '\u{1F1F3}\u{1F1EC}',
  'MK': '\u{1F1F2}\u{1F1F0}', 'NO': '\u{1F1F3}\u{1F1F4}', 'OM': '\u{1F1F4}\u{1F1F2}',
  'PK': '\u{1F1F5}\u{1F1F0}', 'PW': '\u{1F1F5}\u{1F1FC}', 'PS': '\u{1F1F5}\u{1F1F8}',
  'PA': '\u{1F1F5}\u{1F1E6}', 'PG': '\u{1F1F5}\u{1F1EC}', 'PY': '\u{1F1F5}\u{1F1FE}',
  'PE': '\u{1F1F5}\u{1F1EA}', 'PH': '\u{1F1F5}\u{1F1ED}', 'PL': '\u{1F1F5}\u{1F1F1}',
  'PT': '\u{1F1F5}\u{1F1F9}', 'PR': '\u{1F1F5}\u{1F1F7}', 'QA': '\u{1F1F6}\u{1F1E6}',
  'RO': '\u{1F1F7}\u{1F1F4}', 'RU': '\u{1F1F7}\u{1F1FA}', 'RW': '\u{1F1F7}\u{1F1FC}',
  'KN': '\u{1F1F0}\u{1F1F3}', 'LC': '\u{1F1F1}\u{1F1E8}', 'VC': '\u{1F1FB}\u{1F1E8}',
  'WS': '\u{1F1FC}\u{1F1F8}', 'SM': '\u{1F1F8}\u{1F1F2}', 'ST': '\u{1F1F8}\u{1F1F9}',
  'SA': '\u{1F1F8}\u{1F1E6}', 'SN': '\u{1F1F8}\u{1F1F3}', 'RS': '\u{1F1F7}\u{1F1F8}',
  'SC': '\u{1F1F8}\u{1F1E8}', 'SL': '\u{1F1F8}\u{1F1F1}', 'SG': '\u{1F1F8}\u{1F1EC}',
  'SK': '\u{1F1F8}\u{1F1F0}', 'SI': '\u{1F1F8}\u{1F1EE}', 'SB': '\u{1F1F8}\u{1F1E7}',
  'SO': '\u{1F1F8}\u{1F1F4}', 'ZA': '\u{1F1FF}\u{1F1E6}', 'SS': '\u{1F1F8}\u{1F1F8}',
  'ES': '\u{1F1EA}\u{1F1F8}', 'LK': '\u{1F1F1}\u{1F1F0}', 'SD': '\u{1F1F8}\u{1F1E9}',
  'SR': '\u{1F1F8}\u{1F1F7}', 'SE': '\u{1F1F8}\u{1F1EA}', 'CH': '\u{1F1E8}\u{1F1ED}',
  'SY': '\u{1F1F8}\u{1F1FE}', 'TW': '\u{1F1F9}\u{1F1FC}', 'TJ': '\u{1F1F9}\u{1F1EF}',
  'TZ': '\u{1F1F9}\u{1F1FF}', 'TH': '\u{1F1F9}\u{1F1ED}', 'TL': '\u{1F1F9}\u{1F1F1}',
  'TG': '\u{1F1F9}\u{1F1EC}', 'TO': '\u{1F1F9}\u{1F1F4}', 'TT': '\u{1F1F9}\u{1F1F9}',
  'TN': '\u{1F1F9}\u{1F1F3}', 'TR': '\u{1F1F9}\u{1F1F7}', 'TM': '\u{1F1F9}\u{1F1F2}',
  'TV': '\u{1F1F9}\u{1F1FB}', 'UG': '\u{1F1FA}\u{1F1EC}', 'UA': '\u{1F1FA}\u{1F1E6}',
  'AE': '\u{1F1E6}\u{1F1EA}', 'GB': '\u{1F1EC}\u{1F1E7}', 'US': '\u{1F1FA}\u{1F1F8}',
  'UY': '\u{1F1FA}\u{1F1FE}', 'UZ': '\u{1F1FA}\u{1F1FF}', 'VU': '\u{1F1FB}\u{1F1FA}',
  'VA': '\u{1F1FB}\u{1F1E6}', 'VE': '\u{1F1FB}\u{1F1EA}', 'VN': '\u{1F1FB}\u{1F1F3}',
  'YE': '\u{1F1FE}\u{1F1EA}', 'ZM': '\u{1F1FF}\u{1F1F2}', 'ZW': '\u{1F1FF}\u{1F1FC}'
};

/**
 * Get flag emoji for a country name or code
 * @param {string} input - Country name or ISO code
 * @returns {string|null} Flag emoji or null if not found
 */
function getFlag(input) {
  if (!input) return null;

  const normalized = input.trim().toLowerCase();

  // Try direct country name lookup
  if (COUNTRY_FLAGS[normalized]) {
    return COUNTRY_FLAGS[normalized];
  }

  // Try ISO code lookup (case insensitive)
  const upperCode = input.trim().toUpperCase();
  if (COUNTRY_CODES[upperCode]) {
    return COUNTRY_CODES[upperCode];
  }

  // Try to extract country from "Country App Store" format
  const appStoreMatch = normalized.match(/^(.+?)\s+app\s+store$/i);
  if (appStoreMatch) {
    return getFlag(appStoreMatch[1]);
  }

  // Try to extract country from "Country Play Store" format
  const playStoreMatch = normalized.match(/^(.+?)\s+(?:play|google)\s+store$/i);
  if (playStoreMatch) {
    return getFlag(playStoreMatch[1]);
  }

  return null;
}

/**
 * Get country name from various input formats
 * @param {string} input - Raw country string
 * @returns {string} Normalized country name
 */
function normalizeCountryName(input) {
  if (!input) return '';

  let normalized = input.trim();

  // Remove "App Store" or "Play Store" suffix
  normalized = normalized.replace(/\s+(app|play|google)\s+store$/i, '');

  return normalized;
}

// Make available globally
if (typeof window !== 'undefined') {
  window.COUNTRY_FLAGS = COUNTRY_FLAGS;
  window.COUNTRY_CODES = COUNTRY_CODES;
  window.getFlag = getFlag;
  window.normalizeCountryName = normalizeCountryName;
}
