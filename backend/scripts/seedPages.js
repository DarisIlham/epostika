import "dotenv/config";

import mongoose from "mongoose";

import connectDatabase from "../config/database.js";
import Page from "../models/Page.js";

const pages = [
  {
    slug: "artistik1",
    title: "Lukisan",
    cover: "lukisan.webp",
  },
  {
    slug: "artistik2",
    title: "Tas",
    cover: "tas.webp",
  },
  {
    slug: "artistik3",
    title: "Lampu Tidur",
    cover: "lampu-tidur.webp",
  },
  {
    slug: "artistik4",
    title: "Home Decor Oval",
    cover: "home-decor-oval.webp",
  },
  {
    slug: "artistik5",
    title: "Home Decor Serving",
    cover: "home-decor-serving.webp",
  },
  {
    slug: "artistik6",
    title: "Coaster",
    cover: "coaster.webp",
  },
  {
    slug: "artistik7",
    title: "Jam Meja",
    cover: "jam-meja.webp",
  },
  {
    slug: "artistik8",
    title: "Cermin",
    cover: "cermin.webp",
  },
  {
    slug: "artistik9",
    title: "Lukisan Kecil",
    cover: "lukisan-kecil.webp",
  },
];

async function seedPages() {
  try {
    await connectDatabase();

    const operations = pages.map((page, index) => ({
      updateOne: {
        filter: {
          slug: page.slug,
        },
        update: {
          $set: {
            title: page.title,
            order: index + 1,
            isActive: true,
            coverImage: {
              url: `/images/jelajah/${page.cover}`,
              alt: `Preview ${page.title}`,
            },
          },
          $setOnInsert: {
            images: [],
          },
        },
        upsert: true,
      },
    }));

    await Page.bulkWrite(operations);

    console.log("Sembilan halaman berhasil disimpan ke MongoDB");
  } catch (error) {
    console.error("Seed gagal:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedPages();