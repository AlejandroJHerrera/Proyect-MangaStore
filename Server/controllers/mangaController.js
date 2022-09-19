const manga = require('../models/manga');

class mangaController {
  async findAll(req, res) {
    try {
      const mangas = await manga.find({});
      res.send(mangas);
    } catch (error) {
      res.send({ error });
    }
  }

  async addManga(req, res) {
    let {
      type,
      slug,
      synopsis,
      averageRating,
      userCount,
      favortiesCount,
      startDate,
      endDate,
      ageRating,
      status,
      posterImage,
      episodeCount,
      youtubeVideoId,
      category,
      categoryId,
    } = req.body;
    console.log(req.body);
    try {
      const done = await manga.create({
        type,
        slug,
        synopsis,
        averageRating,
        userCount,
        favortiesCount,
        startDate,
        endDate,
        ageRating,
        status,
        posterImage,
        episodeCount,
        youtubeVideoId,
        category,
        categoryId,
      });
      res.send({ done });
    } catch (error) {
      res.send({ error });
    }
  }

  async updateManga(req, res) {
    let { slug, newSlug } = req.body;
    console.log(req.body);
    try {
      const done = await manga.updateOne({ slug }, { slug: newSlug });
      res.send({ done });
    } catch (error) {
      res.send({ error });
    }
  }

  async deleteManga(req, res) {
    let id = req.body;
    console.log(id);
    try {
      const removed = await manga.deleteOne(id);
      res.send({ removed });
    } catch (error) {
      res.send({ error });
    }
  }

  async searchManga(req, res) {
    let slug = req.params;
    try {
      const search = await manga.findOne(slug);
      res.send(search);
    } catch (error) {
      res.send({ error });
    }
  }
}

module.exports = new mangaController();
