import Page from "../models/Page.js";

export async function getPages(req, res) {
  const pages = await Page.find({
    isActive: true,
  })
    .select("slug title description order coverImage")
    .sort({ order: 1 })
    .lean();

  res.status(200).json({
    success: true,
    data: pages,
  });
}

export async function getPageBySlug(req, res) {
  const page = await Page.findOne({
    slug: req.params.slug.toLowerCase(),
    isActive: true,
  })
    .select("slug title description coverImage images")
    .lean();

  if (!page) {
    const error = new Error("Halaman tidak ditemukan");
    error.statusCode = 404;
    throw error;
  }

  const activeImages = page.images
    .filter((image) => image.isActive)
    .sort((firstImage, secondImage) => firstImage.order - secondImage.order);

  res.status(200).json({
    success: true,
    data: {
      ...page,
      images: activeImages,
    },
  });
}