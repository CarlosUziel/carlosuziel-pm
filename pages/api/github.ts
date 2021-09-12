import { NextApiResponse, NextApiRequest } from 'next';

export interface repoType {
  id: string;
  name: string;
  html_url: string;
  created_at: string;
  pushed_at: string;
  language: string;
  description: string;
  stargazers_count: number;
  fork: boolean;
}

export async function getGHRepos(): Promise<{
  followers: any;
  repos: any;
  stars: any;
}> {
  const userResponse = await fetch(`https://api.github.com/users/CarlosUziel`);
  const userReposResponse = await fetch(
    `https://api.github.com/users/CarlosUziel/repos?per_page=100`
  );

  const user = await userResponse.json();
  const repositories = await userReposResponse.json();

  const notForked = repositories.filter((repo: any) => !repo.fork);

  const stars =
    notForked.reduce((a: number, r: { stargazers_count: number }) => a + r.stargazers_count, 0) ||
    null;

  const sendRepos = notForked.map(
    ({
      id,
      name,
      html_url,
      created_at,
      pushed_at,
      language,
      description,
      fork,
      stargazers_count,
    }: repoType) => ({
      id,
      name,
      html_url,
      created_at,
      pushed_at,
      language,
      description,
      fork,
      stargazers_count,
    })
  );
  return {
    followers: user.followers,
    repos: sendRepos,
    stars,
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { stars, repos, followers } = await getGHRepos();
  res.setHeader(`Cache-Control`, `public, s-maxage=1200, stale-while-revalidate=600`);
  return res.status(200).json({
    stars,
    repos,
    followers,
  });
};
