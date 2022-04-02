import useSWR from 'swr';
import constants from '../constants';
import { fetcher } from '../utilities';
import { useDefinitionProps } from '../types';

export const useDefinition = (word: string): useDefinitionProps => {
  const { data, error } = useSWR(`${constants.apiHost}/word/${word}`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}
