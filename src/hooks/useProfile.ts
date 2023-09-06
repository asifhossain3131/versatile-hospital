import useSWR from 'swr'

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json());
const useProfile = (email:string) => {
    const { data, error, isLoading,mutate } = useSWR(`/api/user/getAnUser?email=${email}`,fetcher)
 
    return {
      currentUser: data,
      isLoading,
      isError: error,
      mutate
    }
};

export default useProfile;