"use client"
import { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import styles from "./page.module.css"
export const Search = () => {
    const [totalResults, setTotalResults] = useState(0)
    const [name, setName] = useState("")

    const getTotalResults = async () => {
        try {
            const response = await fetch(`https://app.informer.md/api/public/search`);
            const data = await response.json();
            setTotalResults(data.total_results)
            return data.total_reuslts;
        } catch (error) {
            console.error('Error fetching company data:', error);
            throw error;
        }
    };

    useEffect(() => {
        getTotalResults()
    }, [])

    return (
        <div className={styles.main}>
            <input type="text" className={styles.input} placeholder={`Cauta printre ${totalResults.toString()} companii`} onChange={e => setName(e.currentTarget.value)} />
            <Link href={`/search/${name}`}>
                <button className={styles.button}>Cauta</button>
            </Link>
        </div>
    );
}

export default Search