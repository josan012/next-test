import React from "react";
import Link from "next/link";
import { Company } from "../../types"
import styles from "./page.module.css"

const SearchedCompany = async ({ params }: { params: { search: string } }) => {
    const fetchCompanyData = async (name: string) => {
        try {
            const response = await fetch(`https://app.informer.md/api/public/search?company_name=${name}`);
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error('Error fetching company data:', error);
            throw error;
        }
    };
    const companies = await fetchCompanyData(params.search)

    return (
        <div>
            {companies.map((company: Company) => (
                <Link href={`/${company.slug}`} key={company.id}>
                    <button className={styles.button}>{company.name} · {company.idno}</button>
                </Link>
            ))}
        </div>
    )
}
export default SearchedCompany