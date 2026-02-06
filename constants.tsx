
import { Quote, RoseType } from './types';

export const PETAL_QUOTES: Quote[] = [
  { id: 1, text: "Your smile feels like home." },
  { id: 2, text: "You make ordinary days feel magical." },
  { id: 3, text: "Every rose reminds me of you." },
  { id: 4, text: "You bring warmth into my life without even trying." },
  { id: 5, text: "My favorite moments are the ones that include you." },
  { id: 6, text: "You are the reason this Rose Day feels special." },
];

export const ROSE_TYPES: RoseType[] = [
  {
    id: 1,
    name: "Red Rose",
    emoji: "🌹",
    color: "text-red-500",
    meaning: "Love",
    quote: "My feelings for you grow deeper every day, Smriti."
  },
  {
    id: 2,
    name: "Pink Rose",
    emoji: "🌸",
    color: "text-pink-400",
    meaning: "Admiration",
    quote: "I admire your kindness, your smile, and your beautiful heart."
  },
  {
    id: 3,
    name: "White Rose",
    emoji: "🤍",
    color: "text-white",
    meaning: "Purity",
    quote: "What I feel for you is honest, pure, and real."
  },
  {
    id: 4,
    name: "Yellow Rose",
    emoji: "🌼",
    color: "text-yellow-400",
    meaning: "Happiness",
    quote: "You bring happiness into my life just by being you."
  },
  {
    id: 5,
    name: "Blue Rose",
    emoji: "💙",
    color: "text-blue-400",
    meaning: "Forever",
    quote: "I wish to keep choosing you, today and always."
  }
];
