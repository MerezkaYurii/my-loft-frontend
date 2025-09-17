// const API_URL =
// process.env.NEXT_PUBLIC_BACKEND_API_URL || 'http://localhost:4000';
const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : process.env.NEXT_PUBLIC_BACKEND_API_URL;

if (!API_URL) {
  throw new Error('API_URL is undefined. Проверь переменные окружения!');
}

export const getLoftData = async (
  category: string,
  page: number = 1,
  limit: number = 8,
  sort: string = 'createdAt',
  order: 'desc' | 'asc' = 'desc',
) => {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    sort,
    order,
  });
  const res = await fetch(
    `${API_URL}/api/loft/${category}?${queryParams.toString()}`,
    {
      method: 'GET',
      // next: { revalidate: 0 },
    },
  );

  if (!res.ok) {
    const errorText = await res.text();
    console.error('Ошибка от сервера:', res.status, errorText);
    throw new Error(`Ошибка загрузки данных для ${category}`);
  }

  const json = await res.json();

  if (!json.data?.items || !Array.isArray(json.data.items)) {
    console.error('❌ ОШИБКА: Ожидался массив items, но получено:', json.data);
    return {
      items: [],
      pagination: { page: 1, limit: 8, total: 0, totalPages: 1 },
    };
  }

  return {
    items: json.data.items,
    pagination: json.data.pagination,
  };

  // return json.data;
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
