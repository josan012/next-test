type Company = {
    id: number,
    slug: string,
    name: string,
    industry?: string,
    location?: string,
    website?: string,
    email?: boolean,
    phone?: boolean,
    idno: string,
    mobile?: boolean,
    employees: string,
    turnover: number,
    creation_year: number,
    creation_date: string,
    status: string,
    partners?: string[],
    full_location?: string
}

type Information = {
    data: Company[],
    pages: number,
    total_results: number
}

type Time = {
    id: number;
    title: string;
    value: string;
}

export type { Company, Information, Time }