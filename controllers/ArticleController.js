import Article from '../models/article.js';

export async function putArticle(req, res) {
    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    await updatedArticle.save((err, article) => {
        if (err) return res.status(400).send({ error: err });
        res.status(201).send(article);
    });
}

export async function deleteArticle(req, res) {
    Article.deleteOne({ _id: req.params.id}, (err, article) => {
        if (err) return res.status(404).send({ error: err });
        res.status(200).send({ message: 'successfully deleted article' });
    });    
}

export function getArticle(req, res) {
    Article.findById(req.params.id, (err, article) => {
        if (err) return res.status(404).send({ error: err });
        return res.status(200).send(article);
    });
}

export async function postArticle(req, res) {
    try {
        const newArticle = new Article(req.body);
        await newArticle.save((err, article) => {
            if (err) return res.status(500).send({ error: err });
            res.status(201).send(article);
        })
    } catch (err) {
        return res.status(500).send({ error: err });
    }
}

export function getArticles(req, res) {
    Article.find({}, (err, articles) => {
        if (err) return res.status(500).send({ error: err });
        else if (articles && articles.length === 0) return res.status(200).send({ message: 'no articles found' });
        return res.status(200).send(articles);
    });
}
