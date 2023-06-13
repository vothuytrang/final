export interface GetPicturesResults {
    result: Pictures[]
}

export interface Pictures {
    id: string;
    pic_name:       string;
    author:         string;
    published_date: string;
    category:       string;
    comments:       string;
    file:           string;
}