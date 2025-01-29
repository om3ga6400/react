import { Children } from '../types';

export function CardCollection({ children }: Children) {
  return (
    <div className="flex flex-wrap justify-center m-[-2] opacity-75">
      {children}
    </div>
  );
}
