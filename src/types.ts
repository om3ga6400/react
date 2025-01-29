interface CardProps {
  title: string;
  src: string;
  url: string;
}

interface Children {
  children?: JSX.Element | JSX.Element[];
}

interface Repo {
  name: string;
  url: string;
  html_url: string;
}

export type { CardProps, Children, Repo };
