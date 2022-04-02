export interface Data {
  word: string,
  origin?: string,
  meanings: {
    partOfSpeech: string,
    definitions: {
        definition: string,
        example: string
    }[]
  }[]
}

export interface useDefinitionProps {
  data: Data[],
  isLoading: boolean,
  isError: boolean
}
