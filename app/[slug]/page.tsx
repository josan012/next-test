import React from "react";
import { Time } from "../types";

const FoundCompany = async ({ params }: { params: { slug: string } }) => {
    const fetchCompanyData = async (name: string) => {
        try {
            const response = await fetch(`https://app.informer.md/api/public/company?slug=${params.slug}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching company data:', error);
            throw error;
        }
    };
    const company = await fetchCompanyData(params.slug)
    if (!company) return <div>No data found.</div>;

    return (
        <div>
            <h1>Nume companie: {company.name}</h1>
            <h2>Status: {company.status.keyword}</h2>
            <h2>IDNO: {company.general_data.idno}</h2>
            <h2>Fondat: {company.general_data.creation_date}</h2>
            <h2>Numar angajati: {company.general_data.size.name}</h2>
            <p>Descriere: {company.general_data.description}</p>
            <ul>
                {company.general_data.business_hours.map((time: Time) => (
                    <li key={time.id}>{time.title}: {time.value}</li>
                ))}
            </ul>
        </div>
    )
}
export default FoundCompany