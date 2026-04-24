'use client';
import { useEffect, useRef } from 'react';

const API_URL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:4000'
        : process.env.NEXT_PUBLIC_BACKEND_API_URL;

export default function WakeUp() {
    const hasFetched = useRef(false);

    useEffect(() => {
        if (!API_URL || hasFetched.current) return;
        hasFetched.current = true;
        // Делаем запрос к самому легкому роуту
        fetch(`${API_URL}/api/loft/my-photos?limit=1`)
            .then(() => console.log('Бекенд получил сигнал на прогрев'))
            .catch(() => {
                console.log('Бекенд просыпается...')
                hasFetched.current = false;
            });
    }, []);

    return null; // Компонент невидим
}
