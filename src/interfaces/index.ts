export interface IComment {
    id: number;
    documentId: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
}

export interface ICategory {
    id: number;
    documentId: string;
    name: string;
    description: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
}

export interface IDataItem {
    id: number;
    documentId: string;
    title: string;
    description: string;
    cover_image_url: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
    category?: ICategory;
    comments?: Comment[];
    localizations?: any[]; 
}

export interface IPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface IMeta {
    pagination: IPagination;
}

export interface IApiResponse {
    data: IDataItem[];
    meta: IMeta;
}
