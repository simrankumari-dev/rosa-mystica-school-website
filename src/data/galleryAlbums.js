import g1 from "../assets/images/gallery/gallery-1.webp";
import g2 from "../assets/images/gallery/gallery-2.webp";
import g3 from "../assets/images/gallery/gallery-3.webp";
import g4 from "../assets/images/gallery/gallery-4.webp";
import g5 from "../assets/images/gallery/gallery-5.webp";

import mArts from "../assets/images/galleryAlbum/moment-arts.webp";
import mClass from "../assets/images/galleryAlbum/moment-classroom.webp";
import mScience from "../assets/images/galleryAlbum/moment-science.webp";
import mSports from "../assets/images/galleryAlbum/moment-sports.webp";

import performance from "../assets/images/galleryAlbum/hero-performance.webp";
import campus from "../assets/images/galleryAlbum/hero-campus.webp";

import aboutClassroom from "../assets/images/galleryAlbum/about-classroom.webp";

import annualDayDance from "../assets/images/galleryAlbum/annual-day-dance.webp";
import annualDayChoir from "../assets/images/galleryAlbum/annual-day-choir.webp";

import sportsBasketball from "../assets/images/galleryAlbum/sports-basketball.webp";
import sportsMedals from "../assets/images/galleryAlbum/sports-medals.webp";

import scienceRobotics from "../assets/images/galleryAlbum/science-robotics.webp";
import scienceJudges from "../assets/images/galleryAlbum/science-judges.webp";

import artClay from "../assets/images/galleryAlbum/art-clay.webp";
import artDisplay from "../assets/images/galleryAlbum/art-display.webp";
import artPainting from "../assets/images/galleryAlbum/art-painting.webp";

import independenceFlag from "../assets/images/galleryAlbum/independence-flag.webp";
import independenceMarch from "../assets/images/galleryAlbum/independence-march.webp";

import libraryStorytelling from "../assets/images/galleryAlbum/library-storytelling.webp";
import libraryBookfair from "../assets/images/galleryAlbum/library-bookfair.webp";
import libraryCorner from "../assets/images/galleryAlbum/library-corner.webp";

export const ALBUMS = [
  {
    id: "annual-day",
    title: "Annual Day Celebration",
    category: "Culture",
    date: "December 2025",
    cover: performance,
    photos: [
      {
        src: performance,
        alt: "Students performing a dance on the annual day stage",
      },
      {
        src: g2,
        alt: "Children performing on stage during the school annual day",
      },
      {
        src: mArts,
        alt: "Students preparing artwork for the annual day backdrop",
      },
      {
        src: campus,
        alt: "School campus decorated for the annual day celebration",
      },
      {
        src: annualDayDance,
        alt: "Group of children in colorful traditional costumes dancing on stage",
      },
      {
        src: annualDayChoir,
        alt: "School choir singing together during the annual day function",
      },
    ],
  },

  {
    id: "sports-meet",
    title: "Inter-House Sports Meet",
    category: "Sports",
    date: "November 2025",
    cover: mSports,
    photos: [
      {
        src: mSports,
        alt: "Students competing in a race during the sports meet",
      },
      {
        src: g3,
        alt: "Students running on the athletics track during sports day",
      },
      {
        src: campus,
        alt: "School ground prepared for the inter-house sports meet",
      },
      {
        src: sportsBasketball,
        alt: "Students playing an exciting basketball match on the court",
      },
      {
        src: sportsMedals,
        alt: "Winners proudly receiving medals and trophies on the podium",
      },
    ],
  },

  {
    id: "science-exhibition",
    title: "Science Exhibition",
    category: "Academics",
    date: "October 2025",
    cover: mScience,
    photos: [
      {
        src: mScience,
        alt: "Students demonstrating a science model at the exhibition",
      },
      {
        src: g1,
        alt: "Students conducting a science experiment in the school laboratory",
      },
      {
        src: mClass,
        alt: "Classroom session explaining the science exhibition projects",
      },
      {
        src: scienceRobotics,
        alt: "Students presenting a working robotics project to visitors",
      },
      {
        src: scienceJudges,
        alt: "Judges inspecting student science models at the exhibition",
      },
    ],
  },

  {
    id: "art-competition",
    title: "Drawing & Painting Competition",
    category: "Culture",
    date: "September 2025",
    cover: mArts,
    photos: [
      {
        src: mArts,
        alt: "Children painting during the drawing competition",
      },
      {
        src: g5,
        alt: "Children painting at easels during an art class",
      },
      {
        src: artClay,
        alt: "Children shaping colorful clay during the art competition",
      },
      {
        src: artDisplay,
        alt: "Vibrant artwork displayed on the school hallway boards",
      },
      {
        src: artPainting,
        alt: "Young artists painting on canvas with bright colors",
      },
    ],
  },

  {
    id: "independence-day",
    title: "Independence Day Celebration",
    category: "Events",
    date: "August 2025",
    cover: g2,
    photos: [
      {
        src: g2,
        alt: "Students performing a patriotic act on Independence Day",
      },
      {
        src: campus,
        alt: "School campus during the Independence Day flag hoisting",
      },
      {
        src: mClass,
        alt: "Students in class making Independence Day decorations",
      },
      {
        src: independenceFlag,
        alt: "Students and teachers saluting the national flag during the ceremony",
      },
      {
        src: independenceMarch,
        alt: "Students marching with flags during the Independence Day parade",
      },
    ],
  },

  {
    id: "library-reading-week",
    title: "Reading Week",
    category: "Academics",
    date: "July 2025",
    cover: g4,
    photos: [
      {
        src: g4,
        alt: "Students reading and studying in the school library",
      },
      {
        src: aboutClassroom,
        alt: "Students reading together in a bright classroom",
      },
      {
        src: libraryStorytelling,
        alt: "Teacher reading a storybook to young children in the library",
      },
      {
        src: libraryBookfair,
        alt: "Children browsing colorful books at the school book fair",
      },
      {
        src: libraryCorner,
        alt: "Students enjoying books in a cozy library reading corner",
      },
    ],
  },
];

export const CATEGORIES = [
  "All",
  "Events",
  "Academics",
  "Sports",
  "Culture",
];

export const ALL_PHOTOS = ALBUMS.flatMap(
  (album) => album.photos
);