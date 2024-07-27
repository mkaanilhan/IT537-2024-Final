export interface WordDefinition {
    definition: string;
    example?: string;
}

export interface WordMeaning {
    partOfSpeech: string;
    definitions: WordDefinition[];
}

export interface Word {
    word: string;
    phonetic?: string;
    meanings: WordMeaning[];
}

export interface QuizQuestion {
    word: string;
    correctAnswer: string;
    options: string[];
}