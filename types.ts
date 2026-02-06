
export interface SlideProps {
  onNext: () => void;
}

export interface Quote {
  id: number;
  text: string;
}

export interface RoseType {
  id: number;
  name: string;
  emoji: string;
  color: string;
  meaning: string;
  quote: string;
}
