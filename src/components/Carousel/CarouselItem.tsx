import { ReactNode } from 'react';

type CarouselItemProps = {
  children: ReactNode;
  className?: string;
};

export default function CarouselItem({ children, className = '' }: CarouselItemProps) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      {children}
    </div>
  );
}