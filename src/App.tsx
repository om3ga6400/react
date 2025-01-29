import { useEffect, useState } from 'react';
import { Card, SkeletonCard } from './components/Card';
import { CardCollection } from './components/CardCollection';
import type { Repo } from './types';

export default function App() {
  const username = 'om3ga6400';
  const [repos, setRepos] = useState<Repo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const data = await response.json();
        setRepos(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching repos:', error);
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return (
    <CardCollection>
      {isLoading
        ? // Display skeleton loaders until data is fetched
          Array.from({ length: 12 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        : repos.map((repo) => (
            <Card
              title={repo.name}
              src={`https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repo.name}&theme=catppuccin_mocha&hide_border=true&bg_color=181825&description_lines_count=1`}
              url={repo.html_url}
              key={repo.name}
            />
          ))}
    </CardCollection>
  );
}
