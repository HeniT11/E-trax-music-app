import useSWR from 'swr'
import fetcher from './fetcher'

export const useMe = () => {
  const { data, error } = useSWR('/me', fetcher)
  console.log("userData", data)
  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  }
}

export const usePlaylist = () => {
  const { data, error } = useSWR('/playlist', fetcher)
  console.log("playlist data", data)
  return {
    playlists: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  }
}

export const useArtist = () => {
  const { data, error } = useSWR('/artists', fetcher)
  console.log("Artist data", data)
  return {
    artists: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  }
}
