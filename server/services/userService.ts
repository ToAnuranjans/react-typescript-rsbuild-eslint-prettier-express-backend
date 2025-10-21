import fetch from 'node-fetch';

type UserRecord = Record<string, unknown>;

export const fetchTopUsers = async (limit: number) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!response.ok) {
    throw new Error(`Failed to fetch users. Status: ${response.status}`);
  }

  const users = (await response.json()) as UserRecord[];
  return users.slice(0, limit);
};
