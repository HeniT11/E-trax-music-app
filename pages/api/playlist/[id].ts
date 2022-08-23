import prisma from '../../../lib/prisma'
import { validateRoute } from '../../../lib/auth'

export default validateRoute(async (req, res, user) => {
  req.query.id = parseInt(req.query.id)
  const playlist = await prisma.playlist.findFirst({
    where: {
      id: req.query.id,
      userId: user.id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  })

  console.log('plpl', playlist)
  res.json(playlist)
})
