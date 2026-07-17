export const pricingPlans = [
  // ==========================
  // Website Development
  // ==========================

  {
    id: "starter-web",
    category: "Web Development",
    title: "Starter Website",
    price: "₹5,000 – ₹8,000",
    color: "#5B7FFF",
    description:
      "Perfect for individuals and small businesses looking to establish a professional online presence.",
    features: [
      "Responsive Website",
      "Modern UI Design",
      "Up to 5 Pages",
      "Contact Form",
      "Basic SEO",
      "2 Revisions",
    ],
  },

  {
    id: "business-web",
    category: "Web Development",
    title: "Business Launch",
    badge: "Great Value",
    price: "₹8,000 – ₹15,000",
    color: "#F4C430",
    description:
      "Everything you need to launch your business online with hosting and a custom domain included.",
    features: [
      "Everything in Starter",
      "Domain Included",
      "Hosting Included",
      "SSL Certificate",
      "Performance Optimization",
      "Basic SEO Setup",
    ],
  },

  {
    id: "growth-web",
    category: "Web Development",
    title: "Growth Partner",
    badge: "Most Popular",
    price: "₹15,000 – ₹25,000",
    color: "#3B82F6",
    description:
      "A complete solution for businesses that need ongoing support, SEO, and maintenance.",
    features: [
      "Everything in Business",
      "Advanced SEO",
      "Monthly Maintenance",
      "Priority Support",
      "Security Monitoring",
      "Performance Reports",
    ],
  },

  // ==========================
  // Video Editing
  // ==========================

  {
    id: "short-edit",
    category: "Video Editing",
    title: "Short Form Editing",
    price: "₹700 – ₹1,000",
    color: "#7C3AED",
    description:
      "Professional edits for Reels, Shorts and social media content.",
    features: [
      "Captions",
      "Motion Graphics",
      "Color Correction",
      "Sound Effects",
      "2 Revisions",
      "Fast Delivery",
    ],
  },

  {
    id: "long-edit",
    category: "Video Editing",
    title: "Long Form Editing",
    price: "₹3,000 – ₹8,000",
    color: "#8B5CF6",
    description:
      "High-quality editing for YouTube videos, podcasts and commercial content.",
    features: [
      "Color Grading",
      "Audio Cleanup",
      "Motion Graphics",
      "B-roll Integration",
      "Thumbnail Consultation",
      "3 Revisions",
    ],
  },

  {
    id: "monthly-edit",
    category: "Video Editing",
    title: "Monthly Editing",
    badge: "Creator Choice",
    price: "₹30,000+",
    color: "#A855F7",
    description:
      "A dedicated editing partnership for creators and brands publishing consistently.",
    features: [
      "Dedicated Editor",
      "Priority Delivery",
      "Monthly Content",
      "Short-form Repurposing",
      "Premium Motion Graphics",
      "Direct Support",
    ],
  },

  // ==========================
  // Graphic Design
  // ==========================

  {
    id: "social-design",
    category: "Graphic Design",
    title: "Social Media Design",
    price: "₹500 – ₹2,000",
    color: "#EC4899",
    description:
      "Creative assets for social media, promotions and marketing campaigns.",
    features: [
      "Instagram Posts",
      "Stories",
      "Posters",
      "Flyers",
      "Banners",
      "2 Revisions",
    ],
  },

  {
    id: "branding",
    category: "Graphic Design",
    title: "Brand Identity",
    price: "₹2,500 – ₹6,000",
    color: "#F97316",
    description:
      "Professional branding that gives your business a memorable identity.",
    features: [
      "Logo Design",
      "Brand Colors",
      "Typography",
      "Business Card",
      "Brand Guidelines",
      "Social Media Kit",
    ],
  },

  {
    id: "design-suite",
    category: "Graphic Design",
    title: "Business Design Suite",
    badge: "Most Popular",
    price: "₹8,000+",
    color: "#EF4444",
    description:
      "Complete branding and marketing assets tailored for growing businesses.",
    features: [
      "Complete Brand Identity",
      "Marketing Materials",
      "Presentation Deck",
      "Print-ready Assets",
      "Social Templates",
      "Priority Revisions",
    ],
  },
];

export const comparisonTable = [
  {
    feature: "Responsive Website",
    starter: true,
    business: true,
    growth: true,
  },
  {
    feature: "Custom UI Design",
    starter: true,
    business: true,
    growth: true,
  },
  {
    feature: "Up to 5 Pages",
    starter: true,
    business: true,
    growth: true,
  },
  {
    feature: "Domain Included",
    starter: false,
    business: true,
    growth: true,
  },
  {
    feature: "Hosting Included",
    starter: false,
    business: true,
    growth: true,
  },
  {
    feature: "SSL Certificate",
    starter: false,
    business: true,
    growth: true,
  },
  {
    feature: "Basic SEO",
    starter: true,
    business: true,
    growth: true,
  },
  {
    feature: "Advanced SEO",
    starter: false,
    business: false,
    growth: true,
  },
  {
    feature: "Monthly Maintenance",
    starter: false,
    business: false,
    growth: true,
  },
  {
    feature: "Priority Support",
    starter: false,
    business: false,
    growth: true,
  },
];