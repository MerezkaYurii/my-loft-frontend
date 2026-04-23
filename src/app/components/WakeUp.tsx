'use client';
import { useEffect } from 'react';

export default function WakeUp() {
    useEffect(() => {
        // Вызываем любой простой эндпоинт твоего бекенда.
        // Даже если он вернет 404, сам факт запроса заставит хостинг (Render/Railway) "проснуться".
        // Подставь сюда свой реальный URL бекенда
        const API_URL =
            process.env.NODE_ENV === 'development'
                ? 'http://localhost:4000'
                : process.env.NEXT_PUBLIC_BACKEND_API_URL;



        // Делаем запрос к самому легкому роуту
        fetch(`${API_URL}/api/loft/my-photos?limit=1`)
            .then(() => console.log("Бекенд получил сигнал на прогрев"))
            .catch(() => console.log("Бекенд просыпается..."));
    }, []);

    return null; // Компонент невидим
}