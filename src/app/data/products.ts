export interface Product {
  id: string;
  name: string;
  category: 'pizza' | 'fatayer' | 'calzone';
  description: string;
  sizes: {
    size: string;
    price: number;
  }[];
  image: string;
  images?: string[];
  popular?: boolean;
}

export const products: Product[] = [
  // Pizza Products
  {
    id: '1',
    name: 'بيتزا مارجريتا',
    category: 'pizza',
    description: 'صوص الطماطم، جبنة موتزاريلا، ريحان طازج، زيت زيتون',
    sizes: [
      { size: 'صغير', price: 80 },
      { size: 'وسط', price: 120 },
      { size: 'كبير', price: 160 },
      { size: 'عائلي', price: 200 },
    ],
    image: 'https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBpdGFsaWFufGVufDF8fHx8MTc3NjEwODMxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBpdGFsaWFufGVufDF8fHx8MTc3NjEwODMxMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1651981038189-e71e557f5869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHJlc3RhdXJhbnQlMjBraXRjaGVufGVufDF8fHx8MTc3NjEwODMxMnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1689150911817-3e27168ab6a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGl6emElMjBvdmVufGVufDF8fHx8MTc3NjEwODMxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    popular: true,
  },
  {
    id: '2',
    name: 'بيتزا بيبروني',
    category: 'pizza',
    description: 'صوص الطماطم، جبنة موتزاريلا، شرائح بيبروني حارة',
    sizes: [
      { size: 'صغير', price: 90 },
      { size: 'وسط', price: 130 },
      { size: 'كبير', price: 170 },
      { size: 'عائلي', price: 220 },
    ],
    image: 'https://images.unsplash.com/photo-1764705309243-c47cbc9792e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJvbmklMjBwaXp6YSUyMGZyZXNofGVufDF8fHx8MTc3NjEwODMxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1764705309243-c47cbc9792e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJvbmklMjBwaXp6YSUyMGZyZXNofGVufDF8fHx8MTc3NjEwODMxMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1710575341655-0062ead9f389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGNoZWYlMjBjb29raW5nfGVufDF8fHx8MTc3NjEwODMxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1678443316613-dbc3261c8b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGRlbGl2ZXJ5JTIwYm94fGVufDF8fHx8MTc3NjEwODMxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    popular: true,
  },
  {
    id: '3',
    name: 'بيتزا خضروات',
    category: 'pizza',
    description: 'صوص الطماطم، جبنة موتزاريلا، فلفل ألوان، زيتون، بصل، مشروم',
    sizes: [
      { size: 'صغير', price: 85 },
      { size: 'وسط', price: 125 },
      { size: 'كبير', price: 165 },
      { size: 'عائلي', price: 210 },
    ],
    image: 'https://images.unsplash.com/photo-1635832801146-102d3bb7f88e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzYxMDgzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    popular: true,
  },
  {
    id: '4',
    name: 'بيتزا اللحوم',
    category: 'pizza',
    description: 'صوص الطماطم، جبنة موتزاريلا، لحم بقري، سجق، بيبروني',
    sizes: [
      { size: 'صغير', price: 100 },
      { size: 'وسط', price: 145 },
      { size: 'كبير', price: 190 },
      { size: 'عائلي', price: 240 },
    ],
    image: 'https://images.unsplash.com/photo-1740984822212-9cfd3a2a129a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwcGl6emElMjBiYnF8ZW58MXx8fHwxNzc2MTA4MzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    popular: true,
  },
  {
    id: '5',
    name: 'بيتزا  البحرية',
    category: 'pizza',
    description: 'صوص أبيض، جبنة موتزاريلا، جمبري، كاليماري، سلمون',
    sizes: [
      { size: 'صغير', price: 110 },
      { size: 'وسط', price: 155 },
      { size: 'كبير', price: 200 },
      { size: 'عائلي', price: 250 },
    ],
    image: 'https://images.unsplash.com/photo-1587045170851-8c8e5c08b6e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFmb29kJTIwcGl6emElMjBzaHJpbXB8ZW58MXx8fHwxNzc2MTA4MzExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    popular: true,
  },
  {
    id: '6',
    name: 'بيتزا أربع أجبان',
    category: 'pizza',
    description: 'صوص أبيض، موتزاريلا، بارميزان، ريكوتا، جورجونزولا',
    sizes: [
      { size: 'صغير', price: 95 },
      { size: 'وسط', price: 140 },
      { size: 'كبير', price: 180 },
      { size: 'عائلي', price: 230 },
    ],
    image: 'https://images.unsplash.com/photo-1595378833483-c995dbe4d74f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3VyJTIwY2hlZXNlJTIwcGl6emF8ZW58MXx8fHwxNzc2MDcxMzU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },

  // Fatayer (Eastern Pies)
  {
    id: '7',
    name: 'فطيرة جبنة',
    category: 'fatayer',
    description: 'عجينة طازجة محشوة بالجبنة البيضاء والنعناع',
    sizes: [
      { size: 'صغير', price: 40 },
      { size: 'وسط', price: 60 },
      { size: 'كبير', price: 80 },
    ],
    image: 'https://images.unsplash.com/photo-1733252211052-91a95b0291f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiaWMlMjBmYXRheWVyJTIwcGFzdHJ5fGVufDF8fHx8MTc3NjEwODMxMnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '8',
    name: 'فطيرة سبانخ',
    category: 'fatayer',
    description: 'عجينة طازجة محشوة بالسبانخ والبصل والليمون',
    sizes: [
      { size: 'صغير', price: 35 },
      { size: 'وسط', price: 55 },
      { size: 'كبير', price: 75 },
    ],
    image: 'https://i.pinimg.com/736x/2a/66/da/2a66daa4b679d2bb336134e115f325c3.jpg',
  },
  {
    id: '9',
    name: 'فطيرة لحمة',
    category: 'fatayer',
    description: 'عجينة طازجة محشوة باللحم المفروم والبهارات',
    sizes: [
      { size: 'صغير', price: 45 },
      { size: 'وسط', price: 65 },
      { size: 'كبير', price: 85 },
    ],
    image: 'https://i.pinimg.com/736x/5c/ca/86/5cca86e9e72f527c84d28403f285bfc9.jpg',
  },
  {
    id: '10',
    name: 'فطيرة زعتر',
    category: 'fatayer',
    description: 'عجينة طازجة بالزعتر الطبيعي وزيت الزيتون',
    sizes: [
      { size: 'صغير', price: 30 },
      { size: 'وسط', price: 50 },
      { size: 'كبير', price: 70 },
    ],
    image: 'https://i.pinimg.com/1200x/05/1b/36/051b361ea83d999513b6c36eb09d13f6.jpg',
  },

  // Calzone
  {
    id: '11',
    name: 'كلزوني جبنة',
    category: 'calzone',
    description: 'عجينة محشوة بثلاث أنواع من الجبن',
    sizes: [
      { size: 'عادي', price: 70 },
      { size: 'كبير', price: 100 },
    ],
    image: 'https://i.pinimg.com/736x/01/fc/cb/01fccbf78f75f2d41ba83f100b47279b.jpg',
  },
  {
    id: '12',
    name: 'كلزوني لحم',
    category: 'calzone',
    description: 'عجينة محشوة باللحم البقري والجبنة',
    sizes: [
      { size: 'عادي', price: 80 },
      { size: 'كبير', price: 115 },
    ],
    image: 'https://images.unsplash.com/photo-1536964549204-cce9eab227bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWx6b25lJTIwaXRhbGlhbiUyMGZvb2R8ZW58MXx8fHwxNzc2MTA4MzEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '13',
    name: 'كلزوني ',
    category: 'calzone',
    description: 'عجينة محشوة باللحم البقري والجبنة',
    sizes: [
      { size: 'عادي', price: 80 },
      { size: 'كبير', price: 115 },
    ],
    image: 'https://i.pinimg.com/736x/c6/46/7d/c6467d9921ac60118d4c30bb4f68384e.jpg',
  },
  {
    id: '14',
    name: 'كلزوني لحم',
    category: 'calzone',
    description: 'عجينة محشوة باللحم البقري والجبنة',
    sizes: [
      { size: 'عادي', price: 80 },
      { size: 'كبير', price: 115 },
    ],
    image: 'https://i.pinimg.com/1200x/7b/30/2f/7b302f923f341c773f88fe10a2ad9fff.jpg',
  },
];
