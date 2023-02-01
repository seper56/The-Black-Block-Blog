const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auths');

router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            where: req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    }
    catch (err) {
        res.status(400).json(err);
    }
});

router.put("/:id", withAuth, async (req, res) => {
    try {
        const post = await Post.update({
            where: {
                id: req.params.id,
            }, 
        });
        res.status(200).json(data);
  } 
    catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
});

if(!postData) {
    res.status(404).json({
        message: 'Post not found',
    });
    return;
}

res.status(200).json(postData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;






