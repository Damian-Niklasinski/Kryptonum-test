export interface Question {
  id: number;
  number: string;
  question: string;
  answer: string;
}

export const questions: Question[] = [
  {
    id: 1,
    number: "01",
    question: "Ile kosztuje utworzenie strony internetowej?",
    answer:
      "Quis neque malesuada in est diam. Turpis facilisis nibh imperdiet quam neque sed venenatis. Viverra elit pellentesque eget id senectus sit. Facilisi et vivamus sed ut purus nunc auctor ut.",
  },
  {
    id: 2,
    number: "02",
    question: "Jakie formy rozliczenia oferujecie?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    number: "03",
    question:
      "Ile czasu potrzebujecie, by stworzyć stronę internetową od zera?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    number: "04",
    question:
      "Jakich informacji potrzebujecie, by utworzyć dla mnie stronę internetową?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    number: "05",
    question: "Po co mi strona internetowa?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 6,
    number: "06",
    question: "Jak wygląda współpraca z Kryptonum?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 7,
    number: "07",
    question: "Czy tworzycie logo?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 8,
    number: "08",
    question: "Zajmujecie się optymalizacją SEO?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 9,
    number: "09",
    question:
      "Czy przygotowujecie treści na strony internetowe, które tworzycie?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 10,
    number: "10",
    question: "Czy tworzycie strony internetowe na Wordpressie?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const additionalQuestions: Question[] = [
  {
    id: 11,
    number: "11",
    question: "Czy oferujecie wsparcie techniczne po wdrożeniu?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 12,
    number: "12",
    question: "Kolejne przykadłowe pytanie?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 13,
    number: "13",
    question: "Kolejne przykadłowe pytanie 2?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },

  {
    id: 14,
    number: "14",
    question: "Kolejne przykadłowe pytanie 3?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },

  {
    id: 15,
    number: "15",
    question: "Kolejne przykadłowe pytanie 4?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 16,
    number: "16",
    question: "Kolejne przykadłowe pytanie 5?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 17,
    number: "17",
    question: "Kolejne przykadłowe pytanie 6?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 18,
    number: "18",
    question: "Kolejne przykadłowe pytanie 7?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 19,
    number: "19",
    question: "Kolejne przykadłowe pytanie 8?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 20,
    number: "20",
    question: "Kolejne przykadłowe pytanie 9?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const getNextQuestions = (page: number): Question[] => {
  const startIndex = (page - 1) * 5;
  const endIndex = startIndex + 5;
  return additionalQuestions.slice(startIndex, endIndex);
};

export const loadMoreQuestions = async (): Promise<void> => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(
        "additionalQuestions",
        JSON.stringify(additionalQuestions)
      );
      return Promise.resolve();
    } catch (error) {
      console.error("Error saving to localStorage:", error);
      return Promise.reject(error);
    }
  }
};

export const getAllQuestions = (): Question[] => {
  if (typeof window !== "undefined") {
    const savedQuestions = localStorage.getItem("additionalQuestions");
    if (savedQuestions) {
      return [...questions, ...JSON.parse(savedQuestions)];
    }
  }
  return questions;
};
