"use server";

import { FormSchema } from "./validate";

export async function Action(prevState: any, formData: FormData) {
  const rawData = {
    domain: formData.get("domain") as string,
    keyword: formData.get("keyword") as string,
    location: formData.get("location") as string,
  };

  const validate = FormSchema.safeParse(rawData);

  if (!validate.success) {
    return { success: false, errors: validate.error.flatten().fieldErrors };
  }

  const { domain, keyword, location } = validate.data;

  let allOrganicResults: any[] = [];
  let position = 0;
  const MAX_PAGES = 3;

  try {
    for (let page = 1; page <= MAX_PAGES; page++) {
      const response = await fetch("https://google.serper.dev/search", {
        method: "POST",
        headers: {
          "X-API-KEY": "d16da4600de6f8d1e133904ed3cab7eab4bd3b34",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: keyword,
          gl: "ru",
          hl: "ru",
          location: location,
          page: page,
        }),
      });

      if (!response.ok) {
        throw new Error(`Ошибка Serper API на странице ${page}: ${response.status}`);
      }

      const searchData = await response.json();
      const pageOrganic = searchData.organic || [];

      if (pageOrganic.length === 0) break;

      const formattedPageResults = pageOrganic.map((item: any, index: number) => ({
        position: (page - 1) * 10 + (index + 1),
        title: item.title,
        link: item.link,
        snippet: item.snippet,
      }));

      allOrganicResults = [...allOrganicResults, ...formattedPageResults];

      const foundItem = formattedPageResults.find((item: any) => item.link.toLowerCase().includes(domain));

      // Если нашли сайт — фиксируем сквозную позицию и останавливаем цикл (break)
      if (foundItem) {
        position = foundItem.position;
        break;
      }
    }

    return {
      success: true,
      data: {
        domain,
        keyword,
        location,
        position,
        organicResults: allOrganicResults,
      },
    };
  } catch (error) {
    console.error("Ошибка при запросе к поиску: ", error);
    return {
      success: false,
      errors: { domain: ["Не удалось получить данные из Google. Попробуйте позже"], keyword: [] },
    };
  }
}
