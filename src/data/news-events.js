// src/data/news-events.js
// Centralized data + small helpers for Latest News and Upcoming Events

// Images (adjust paths if yours differ)
import news1 from "@/assets/images/news1.jpg";
import news2 from "@/assets/images/news2.jpg";
import news3 from "@/assets/images/news3.jpg";
import news4 from "@/assets/images/news4.jpg";

/**
 * Normalize an item so both `thumbnail` and `image` exist.
 * (Keeps older components that reference `image` working.)
 */
const normalizeThumb = (item) => {
  const i = { ...item };
  if (!i.thumbnail && i.image) i.thumbnail = i.image;
  if (!i.image && i.thumbnail) i.image = i.thumbnail;
  return i;
};

// ---------- DATA ----------
export const NEWS = [
  {
    id: 1,
    thumbnail: news1, // <— unified key
    title:
      "🎉✨Congratulations to the 3 winners of the 2025 Public English Speaking Competition for High School Students.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "2025-08-16", // ISO date
    time: "08:00",
    location: "Meeting Hall, USEA",
    url: { name: "news-detail", params: { slug: "news-2025-08-16" } },
  },
  {
    id: 2,
    thumbnail: news1, // <— unified key
    title:
      "🎉✨Congratulations to the 3 winners of the 2025 Public English Speaking Competition for High School Students.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "2025-08-16", // ISO date
    time: "08:00",
    location: "Meeting Hall, USEA",
    url: { name: "news-detail", params: { slug: "news-2025-08-16" } },
  },
  {
    id: 3,
    thumbnail: news1, // <— unified key
    title:
      "🎉✨Congratulations to the 3 winners of the 2025 Public English Speaking Competition for High School Students.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "2025-08-16", // ISO date
    time: "08:00",
    location: "Meeting Hall, USEA",
    url: { name: "news-detail", params: { slug: "news-2025-08-16" } },
  },
  {
    id: 4,
    thumbnail: news1, // <— unified key
    title:
      "🎉✨Congratulations to the 3 winners of the 2025 Public English Speaking Competition for High School Students.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "2025-08-16", // ISO date
    time: "08:00",
    location: "Meeting Hall, USEA",
    url: { name: "news-detail", params: { slug: "news-2025-08-16" } },
  },
  {
    id: 5,
    thumbnail: news2,
    title:
      "The University of Southeast Asia hosted the finals of the University Entrepreneur Program (USEA-Unipreneur BMC 2025) supported by Khmer Entrepreneurs (KE).",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "2025-08-11",
    time: "08:00",
    location: "Meeting Hall, USEA",
    url: { name: "news-detail", params: { slug: "news-2025-08-11" } },
  },
  {
    id: 6,
    thumbnail: news3,
    title:
      "🎉 Congratulations!!! The top 3 startup teams won a total of approximately 8,400,000 riels... (USEA-Unipreneur BMC 2025).",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "2025-08-09",
    time: "17:00",
    location: "Meeting Hall, USEA",
    url: { name: "news-detail", params: { slug: "news-2025-08-09" } },
  },
  {
    id: 7,
    thumbnail: news4,
    title:
      'Seminar on "Sustainable & Eco-Tourism" organized by USEA and the Boule Du Bruel School of Hotel and Tourism.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "2025-08-04",
    time: "08:00",
    location: "Meeting Hall, USEA",
    url: { name: "news-detail", params: { slug: "news-2025-08-04" } },
  },
].map(normalizeThumb);

export const EVENTS = [
  {
    id: 1,
    thumbnail: news1, // reuse existing images or swap for event images
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, dignissimos qui necessitatibus velit eum est.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "2025-10-16",
    time: "08:00",
    location: "Meeting Hall, USEA",
    url: { name: "events-detail", query: { id: "ev-2025-10-16" } },
  },
  {
    id: 2,
    thumbnail: news2,
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, dignissimos qui necessitatibus velit eum est.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "2025-10-10",
    time: "08:00",
    location: "Meeting Hall, USEA",
    url: { name: "events-detail", query: { id: "ev-2025-10-10" } },
  },
  {
    id: 3,
    thumbnail: news3,
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, dignissimos qui necessitatibus velit eum est.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "2025-10-25",
    time: "08:00",
    location: "Meeting Hall, USEA",
    url: { name: "events-detail", query: { id: "ev-2025-10-25" } },
  },
  {
    id: 4,
    thumbnail: news4,
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, dignissimos qui necessitatibus velit eum est.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "2025-10-21",
    time: "08:00",
    location: "Meeting Hall, USEA",
    url: { name: "events-detail", query: { id: "ev-2025-10-21" } },
  },
].map(normalizeThumb);

// ---------- HELPERS ----------
const dt = (isoDate, time = "00:00") => new Date(`${isoDate}T${time}:00`);

export const latestNewsSorted = () =>
  [...NEWS]
    .map(normalizeThumb)
    .sort((a, b) => dt(b.date).getTime() - dt(a.date).getTime());

export const upcomingEventsSorted = (limit) => {
  const items = [...EVENTS]
    .map(normalizeThumb)
    .sort((a, b) => dt(a.date, a.time) - dt(b.date, b.time));
  return typeof limit === "number" ? items.slice(0, limit) : items;
};

export const formatDisplayDate = (isoDate) =>
  dt(isoDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export const formatDisplayTime = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  const date = new Date();
  date.setHours(h, m, 0, 0);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
};

export const monthAbbrev = (isoDate) =>
  dt(isoDate).toLocaleDateString("en-US", { month: "short" });
export const dayOfMonth = (isoDate) =>
  dt(isoDate).toLocaleDateString("en-US", { day: "2-digit" });
