import {
  Box,
  Divider,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/layout'
import NextImage from 'next/image'
import NextLink from 'next/link'
import {
  MdFavorite,
  MdHome,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdSearch,
} from 'react-icons/md'
import { usePlaylist } from '../lib/hooks'

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/',
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search',
  },
  {
    name: 'Your Library',
    icon: MdLibraryMusic,
    route: '/library',
  },
]

const musicMenu = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/',
  },
  {
    name: 'Liked Songs',
    icon: MdFavorite,
    route: '/favorites',
  },
]

// const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`)

const Sidebar = () => {
  const { playlists } = usePlaylist()
  console.log('playlists', playlists)
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width={123} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => {
              return (
                <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                  <LinkBox>
                    <NextLink href={menu.route} passHref>
                      <LinkOverlay>
                        <ListIcon
                          as={menu.icon}
                          color="white"
                          marginRight="20px"
                        />
                        {menu.name}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              )
            })}
          </List>
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {musicMenu.map((menu) => {
              return (
                <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                  <LinkBox>
                    <NextLink href={menu.route} passHref>
                      <LinkOverlay>
                        <ListIcon
                          as={menu.icon}
                          color="white"
                          marginRight="20px"
                        />
                        {menu.name}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              )
            })}
          </List>
        </Box>
        <Divider color="gray.800" />
        <Box
          height="47%"
          overflowY="auto"
          paddingY="20px"
          sx={{
            '&::-webkit-scrollbar': {
              width: 0,
            },
          }}
        >
          <List spacing={2}>
            {playlists?.map((playlist) => {
              return (
                <ListItem paddingX="20px" fontSize="16px" key={playlist.id}>
                  <LinkBox>
                    <NextLink
                      href={{
                        pathname: '/playlist/[id]',
                        query: { id: playlist.id },
                      }}
                      passHref
                    >
                      <LinkOverlay>{playlist.name}</LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              )
            })}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
