module.exports = {
    generate: async function (req, res) {
        const { url } = req.body;

        var shortUrl = require('node-url-shortener');

        if (url == '') {
            res.status(400).json({ error: `URL shouldn't be empty!` })
        } else {
            shortUrl.short(url, function (err, short) {
                if (err) {
                    res.status(400).json({ error: "There was an error" });
                } else {
                    res.status(200).json({ url: url, short: short });
                }
            });
        }
    }
}