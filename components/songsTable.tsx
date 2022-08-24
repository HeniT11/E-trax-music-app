import { Box } from '@chakra-ui/layout'
import { Table, Thead, Th, Td, Tr, Tbody, IconButton } from '@chakra-ui/react'
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { useStoreActions } from 'easy-peasy'
import { useContext } from 'react'
import { formatDate, formatTime } from '../lib/formatters'
import { SongContext } from '../lib/songContext'

const SongTable = ({ songs }) => {
  // const playSongs = useStoreActions((store: any) => store.changeActiveSongs)
  // const setActiveSong = useStoreActions((store: any) => store.changeActiveSong)
  const { activeSong, setActiveSong, activeSongs, setActiveSongs } = useContext(SongContext)
    console.log("the song",activeSong)
    console.log("the songs",activeSongs)
  const handlePlay = (song?) => {
    setActiveSong(song || songs[0])
    setActiveSongs(songs)
  }
  return (
    <Box bg="transparent" color="white">
      <Box padding="10px" marginBottom="28px">
        <Box marginTop="30px">
          <IconButton
            icon={<BsFillPlayFill fontSize="30px" />}
            aria-label="play"
            colorScheme="green"
            size="lg"
            isRound
            onClick={() => handlePlay()}
          />
        </Box>
        <Table variant="unstyled">
          <Thead borderBottom="1px solid" borderColor="rbga(255,255,255,0.2)">
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>Date Added</Th>
              <Th>
                <AiOutlineClockCircle />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {songs?.map((song, i) => (
              <Tr
                sx={{
                  transition: 'all 0.3s',
                  '&:hover': {
                    bd: 'rgba(255,255,255, 0.1)',
                  },
                }}
                key={song.id}
                cursor="pointer"
                onClick={() => handlePlay(song)}
              >
                <Td>{i + 1}</Td>
                <Td>{song.name}</Td>
                <Td>{song.createdAt.toString()}</Td>
                <Td>{formatTime(song?.duration)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
}

export default SongTable
