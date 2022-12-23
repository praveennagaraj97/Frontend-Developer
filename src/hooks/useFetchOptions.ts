import axios from 'axios';
import type { SWRConfiguration } from 'swr';

export const useFetchOptions: () => SWRConfiguration = () => {
  return {
    revalidateOnFocus: false,
    revalidateOnMount: true,
    revalidateOnReconnect: true,
    shouldRetryOnError: true,
    errorRetryCount: 7,
    errorRetryInterval: 1000,
    fetcher: (url, params) =>
      axios({
        url,
        params: {
          ...params,
        },
      })
        .then((res) => res.data)
        .catch((e) => {
          throw e;
        }),
  };
};
