import { Box } from '@chakra-ui/layout'
import { Table, Thead, Th, Td, Tr, Tbody, IconButton } from '@chakra-ui/react'
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { formatDate, formatTime } from '../lib/formatters'

const SongTable = ({ songs }) => {
  console.log('songs from the table', songs)
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