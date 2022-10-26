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
    // let [
    //   {
    //     mal_id,
    //     title,
    //     title_japanese,
    //     synopsis,
    //     type,
    //     themes,
    //     status,
    //     rank,
    //     popularity,
    //     members,
    //     authors,
    //     demographics,
    //     images,
    //     chapters,
    //     publishing,
    //     score,
    //   },
    // ] = req.body;
    try {
      const done = await manga.insertMany(req.body);
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
