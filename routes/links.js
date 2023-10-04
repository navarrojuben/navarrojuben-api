const express = require('express')
const {
  createLink,
  getLinks,
  getLink,
  deleteLink,
  updateLink
} = require('../controllers/linkController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// GET all links
router.get('/', getLinks)

//GET a single link
router.get('/:id', getLink)

// POST a new link
router.post('/', createLink)

// DELETE a link
router.delete('/:id', deleteLink)

// UPDATE a link
router.patch('/:id', updateLink)


module.exports = router