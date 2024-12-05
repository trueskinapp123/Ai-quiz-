export type SkinCharacteristic = {
  question: string;
  description: string;
  options: {
    value: string;
    label: string;
    skinTypeIndicator: SkinTypeIndicator;
  }[];
};

export type SkinTypeIndicator = {
  normal?: number;
  oily?: number;
  dry?: number;
  combination?: number;
  sensitive?: number;
};

export const skinTypeQuestions: SkinCharacteristic[] = [
  {
    question: "How does your skin feel after cleansing?",
    description: "Pay attention to your skin's immediate response after washing.",
    options: [
      {
        value: "comfortable",
        label: "Comfortable and balanced",
        skinTypeIndicator: { normal: 2 }
      },
      {
        value: "tight",
        label: "Tight and dry",
        skinTypeIndicator: { dry: 2 }
      },
      {
        value: "oily",
        label: "Still slightly oily",
        skinTypeIndicator: { oily: 2 }
      },
      {
        value: "mixed",
        label: "Tight in some areas, oily in others",
        skinTypeIndicator: { combination: 2 }
      },
      {
        value: "irritated",
        label: "Irritated or stinging",
        skinTypeIndicator: { sensitive: 2 }
      }
    ]
  },
  {
    question: "How often does your skin get shiny throughout the day?",
    description: "Consider your skin's behavior during a typical day.",
    options: [
      {
        value: "never",
        label: "Never",
        skinTypeIndicator: { dry: 2 }
      },
      {
        value: "rarely",
        label: "Rarely",
        skinTypeIndicator: { normal: 2 }
      },
      {
        value: "t-zone",
        label: "Only in T-zone",
        skinTypeIndicator: { combination: 2 }
      },
      {
        value: "often",
        label: "Often all over",
        skinTypeIndicator: { oily: 2 }
      }
    ]
  },
  {
    question: "How does your skin react to new products?",
    description: "Think about when you try new skincare products.",
    options: [
      {
        value: "rarely-reacts",
        label: "Rarely reacts",
        skinTypeIndicator: { normal: 2 }
      },
      {
        value: "sometimes-reacts",
        label: "Sometimes reacts",
        skinTypeIndicator: { combination: 1, sensitive: 1 }
      },
      {
        value: "often-reacts",
        label: "Often reacts with redness or irritation",
        skinTypeIndicator: { sensitive: 2 }
      }
    ]
  },
  {
    question: "What's your pore size?",
    description: "Look closely at your pores in different areas of your face.",
    options: [
      {
        value: "invisible",
        label: "Barely visible",
        skinTypeIndicator: { dry: 1, normal: 1 }
      },
      {
        value: "visible-tzone",
        label: "Visible in T-zone only",
        skinTypeIndicator: { combination: 2 }
      },
      {
        value: "visible-all",
        label: "Visible all over",
        skinTypeIndicator: { oily: 2 }
      }
    ]
  },
  {
    question: "How often do you experience flakiness or dry patches?",
    description: "Consider any areas where your skin feels rough or looks flaky.",
    options: [
      {
        value: "never",
        label: "Never",
        skinTypeIndicator: { normal: 1, oily: 1 }
      },
      {
        value: "sometimes",
        label: "Sometimes in specific areas",
        skinTypeIndicator: { combination: 2 }
      },
      {
        value: "often",
        label: "Often all over",
        skinTypeIndicator: { dry: 2 }
      },
      {
        value: "with-irritation",
        label: "Often with redness/irritation",
        skinTypeIndicator: { sensitive: 2, dry: 1 }
      }
    ]
  }
];