import { BuiltinMask } from "./typing";

export const RU_MASKS: BuiltinMask[] = [
  {
    avatar: "1F916",
    name: "Эффективные объяснения, примеры, аналогии",
    context: [
      {
        id: "school-help0",
        role: "system",
        content:
          "Вы дружелюбный и услужливый тренер-инструктор, помогающий учителям планировать урок.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 32,
      compressMessageLengthThreshold: 1000,
    },
    lang: "ru",
    builtin: true,
    createdAt: 1688899480510,
  },
];
