import React from 'react'
import api from '../utils/api'
import { useQuery } from '@tanstack/react-query'


const Main = () => {

    const { data, error, isLoading } = useQuery({
        queryKey: ['movies'],
        queryFn: () => api.get('/api/movies')
            .then((res) => res.data)
    })

    return (
        <div>
            {
                isLoading ? <h1>Yükleniyor...</h1> :
                    error ? <h1>Hataaa</h1> :
                        <div>
                            {
                                data.map((movie) => (
                                    <div>Kart</div>
                                ))
                            }
                        </div>
            }
        </div>
    )
}

export default Main