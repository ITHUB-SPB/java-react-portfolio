import { useState } from "react"
import type { WorkDTO } from "../types"

export default function useWorks() {
    const [works, setWorks] = useState<WorkDTO[]>([])
    const [isLoading, setLoading] = useState(false)

    const getWorks = () => {
        setLoading(true)

        fetch('http://localhost:3000/works?_sort=-year,title')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network issues')
                }
                return response.json()
            })
            .then((data) => {
                setWorks(data)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return {
        getWorks,
        isLoading,
        works
    }
}