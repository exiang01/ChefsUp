export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

export type Restaurant = {
  id: number;
  slug: string;
  name: string;
  chef: string;
  cuisine: string;
  location: string;
  prepTime: string;
  deliveryFee: string;
  rating: number;
  img: string;
  description: string;
  highlights: string[];
  menu: MenuItem[];
};

export const featuredChefs: Restaurant[] = [
  {
    id: 1,
    slug: "homestyle-ramen-aiko",
    name: "Homestyle Ramen by Aiko",
    chef: "Chef Aiko Tanaka",
    cuisine: "Tokyo comfort",
    location: "Kitsilano • Vancouver",
    prepTime: "30 – 40 mins",
    deliveryFee: "$1.99 Delivery Fee",
    rating: 9.7,
    img: "/placeholder1.jpg",
    description:
      "Slow-simmered broths, hand-pulled noodles, and cozy bowls that taste like home.",
    highlights: ["House-made tare", "Local farm vegetables", "Vegan option"],
    menu: [
      {
        name: "Citrus Shoyu Ramen",
        description: "12-hour chicken broth with burnt garlic oil and yuzu zest.",
        price: "$17",
      },
      {
        name: "Miso Butter Corn Ramen",
        description: "Rich miso tare, sweet corn, scallion salad, roasted nori.",
        price: "$18",
        tag: "Best seller",
      },
      {
        name: "Smoked Shiitake Mazemen",
        description: "Brothless noodles tossed in sesame tare with crispy tofu.",
        price: "$16",
      },
    ],
  },
  {
    id: 2,
    slug: "vegan-bento-mira",
    name: "Vegan Bento by Mira",
    chef: "Chef Mira Patel",
    cuisine: "Plant-based modern",
    location: "Commercial Dr • Vancouver",
    prepTime: "35 – 45 mins",
    deliveryFee: "$0 Delivery Fee Over $25",
    rating: 9.3,
    img: "/placeholder1.jpg",
    description:
      "Bright, seasonal bento with layered textures, ferments, and house pickles.",
    highlights: ["Zero-waste kitchen", "Cold-pressed dressings", "Protein packed"],
    menu: [
      {
        name: "Mira's Bento Set",
        description: "Crispy tofu katsu, soba salad, maple-tamari brussels.",
        price: "$19",
        tag: "Editor’s pick",
      },
      {
        name: "Smoked Beet Onigiri",
        description: "Nori-wrapped rice stuffed with beet tartare & avocado cream.",
        price: "$9",
      },
      {
        name: "Matcha Panna Cotta",
        description: "Coconut panna cotta with toasted rice crumble.",
        price: "$8",
      },
    ],
  },
  {
    id: 3,
    slug: "sushi-rolls-kenji",
    name: "Sushi Rolls by Kenji",
    chef: "Chef Kenji Sato",
    cuisine: "Contemporary sushi",
    location: "Downtown • Vancouver",
    prepTime: "40 – 55 mins",
    deliveryFee: "$1.49 Delivery Fee",
    rating: 9.5,
    img: "/placeholder1.jpg",
    description:
      "Artful rolls with line-caught seafood, torched toppings, and heritage rice.",
    highlights: ["Wild BC albacore", "Warm rice service", "House ponzu"],
    menu: [
      {
        name: "Aburi Salmon Mosaic",
        description: "Pressed sushi with ume glaze and pickled mustard seed.",
        price: "$21",
      },
      {
        name: "Kenji's Crunch Roll",
        description: "Prawn tempura, avocado mousse, shiso tempura topping.",
        price: "$19",
        tag: "Fan favourite",
      },
      {
        name: "Cedar-Smoked Sablefish",
        description: "Nigiri topped with miso sablefish & charred lemon.",
        price: "$22",
      },
    ],
  },
];

export const nationalFaves: Restaurant[] = [
  {
    id: 4,
    slug: "pizza-sofia",
    name: "Pizza by Sofia",
    chef: "Chef Sofia Romano",
    cuisine: "Roman street pies",
    location: "Gastown • Vancouver",
    prepTime: "25 – 35 mins",
    deliveryFee: "$0.99 Delivery Fee",
    rating: 9.9,
    img: "/placeholder1.jpg",
    description:
      "Long-fermented dough baked on steel for a caramelized, airy crunch.",
    highlights: ["72 hour ferment", "BC cheese blend", "Family sauce"],
    menu: [
      {
        name: "Guanciale Margherita",
        description: "Bianca mozzarella, basil oil, aged guanciale crisp.",
        price: "$23",
        tag: "Most ordered",
      },
      {
        name: "Sweet Heat Pistachio",
        description: "Pistachio pesto, burrata, Calabrian honey drizzle.",
        price: "$24",
      },
      {
        name: "Porcini & Taleggio",
        description: "Roasted mushrooms, taleggio fonduta, thyme crumble.",
        price: "$25",
      },
    ],
  },
  {
    id: 5,
    slug: "fried-chicken-ray",
    name: "Fried Chicken by Ray",
    chef: "Chef Ray Johnson",
    cuisine: "Southern backyard",
    location: "Mount Pleasant • Vancouver",
    prepTime: "30 – 40 mins",
    deliveryFee: "$0.79 Delivery Fee",
    rating: 9.4,
    img: "/placeholder1.jpg",
    description:
      "Double-brined, pressure-fried chicken served with smoked maple hot sauce.",
    highlights: ["Gluten-free breading", "House pickles", "Secret spice dust"],
    menu: [
      {
        name: "Ray's Picnic Box",
        description: "8-piece mix, honey biscuits, dill slaw, maple hot sauce.",
        price: "$36",
      },
      {
        name: "Hot Honey Sandos",
        description: "Brioche bun, shredded lettuce, smoked mayo, quick pickles.",
        price: "$15",
        tag: "Limited",
      },
      {
        name: "Charred Corn Salad",
        description: "Fire-roasted corn, cotija, lime crema, crispy okra.",
        price: "$11",
      },
    ],
  },
  {
    id: 6,
    slug: "classic-italian-marco",
    name: "Classic Italian by Marco",
    chef: "Chef Marco Conti",
    cuisine: "Trattoria classics",
    location: "Yaletown • Vancouver",
    prepTime: "30 – 40 mins",
    deliveryFee: "$0.79 Delivery Fee",
    rating: 9.3,
    img: "/placeholder1.jpg",
    description:
      "Hand-cut pasta, slow braises, and sauces cooked the day they are served.",
    highlights: ["Imported San Marzano", "Fresh herbs daily", "Family recipes"],
    menu: [
      {
        name: "Nonna's Ragù Tagliatelle",
        description: "12-hour beef & porcini ragù over egg yolk pasta.",
        price: "$24",
        tag: "Heritage",
      },
      {
        name: "Lemon Ricotta Agnolotti",
        description: "Brown butter emulsion, toasted pine nuts, sage.",
        price: "$23",
      },
      {
        name: "Burnt Basque Cheesecake",
        description: "Creamy vanilla bean cheesecake with aperitivo jam.",
        price: "$10",
      },
    ],
  },
];

export const restaurants: Restaurant[] = [...featuredChefs, ...nationalFaves];

export const findRestaurantBySlug = (slug: string) =>
  restaurants.find((restaurant) => restaurant.slug === slug);
