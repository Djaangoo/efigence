import { Category } from './enums';

export interface Report {
    date:        number;
    category:    Category;
    title:       string;
    description: string;
    files:       File[];
}

export interface File {
    filename: string;
    filesize: number;
}

export interface Search {
    phrase: string;
    categories: Category[];
    year: string;
}
