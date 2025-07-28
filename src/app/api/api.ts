// const API_URL =
// process.env.NEXT_PUBLIC_BACKEND_API_URL || 'http://localhost:4000';
const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : process.env.NEXT_PUBLIC_BACKEND_API_URL;
console.log('API_URL при билде:', API_URL);
if (!API_URL) {
  throw new Error('API_URL is undefined. Проверь переменные окружения!');
}

export const getLoftData = async (category: string) => {
  const res = await fetch(`${API_URL}/api/loft/${category}`, {
    method: 'GET',
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('Ошибка от сервера:', res.status, errorText);
    throw new Error(`Ошибка загрузки данных для ${category}`);
  }

  const json = await res.json();
  return json.data;
};

export const getLoftItemById = async (category: string, id: string) => {
  const res = await fetch(`${API_URL}/api/loft/${category}/${id}`, {
    method: 'GET',
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('Ошибка от сервера:', res.status, errorText);
    throw new Error(
      `Ошибка загрузки элемента с id ${id} из категории ${category}`,
    );
  }

  const json = await res.json();
  return json.data;
};
