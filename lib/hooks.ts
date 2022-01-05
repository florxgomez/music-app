import useSWR from "swr"; // validates cache data
import fetcher from "./fetcher";

// hook to get a user making only one call
export const useMe = () => {
  const { data, error } = useSWR("/me", fetcher);
  return {
    user: data,
    loading: !data && !error,
    error,
  };
};

// hook to get playlists making only one call
export const usePlaylist = () => {
  const { data, error } = useSWR("/playlist", fetcher);

  return {
    playlists: (data as any) || [],
    loading: !data && !error,
    error,
  };
};
