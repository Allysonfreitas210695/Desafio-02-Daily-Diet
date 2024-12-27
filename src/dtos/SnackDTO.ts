export type SnackDTO = {
    id: string;
    name: string;
    description: string;
    date: string;
    hours: string;
    isInDiet: boolean;
    created_at?: string;
    updated_at?: string;
}

export type SnackSectionListDTO = {
    title: string;
    data: SnackDTO[];
}