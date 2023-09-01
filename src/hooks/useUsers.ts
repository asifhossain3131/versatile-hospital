import useSWR from 'swr';

const fetcher = async (url: string, options?: RequestInit) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Fetch failed with status: ${response?.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const useUsers = (requestBody: object) => {
  const { data, error, isValidating, mutate } = useSWR(
    '/api/user/getUsers',
    (url) => fetcher(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
  );

  return {
    users: data?.users,
    isLoading: !data && !error,
    isError: error,
    isValidating,
    mutate,
  };
};

export default useUsers;


