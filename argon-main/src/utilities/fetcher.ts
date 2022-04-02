export const fetcher = async (
  input: RequestInfo,
  init: RequestInit
) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error('Network response was not OK');
  };
  return await response.json();
};
