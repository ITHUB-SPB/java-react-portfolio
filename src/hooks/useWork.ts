import { useState } from "react"
import type { WorkDTO } from "../types"

export default function useWork(id: string) {
    const [work, setWork] = useState<WorkDTO | null>(null)
    const [isLoading, setLoading] = useState(false)

    const getWork = () => {
        setLoading(true)

        fetch('http://localhost:3000/works/' + id)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network issues')
                }
                return response.json()
            })
            .then((data) => {
                setWork(data)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return {
        getWork,
        isLoading,
        work
    }
}