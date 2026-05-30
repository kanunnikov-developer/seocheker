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

  try {
    const response = await fetch("https://google.serper.dev/search", {
      method: "POST",
      headers: {
        "X-API-KEY": process.env.SERPER_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: keyword,
        gl: "ru",
        hl: "ru",
        location: location,
      }),
    });

    if (!response.ok) {
      throw new Error(`Ошибка отправки запроса на Serper API: ${response.status}`);
    }

    const searchData = await response.json();
    const organicResults = searchData.organic || [];

    const foundIndex = organicResults.findIndex((item: any) => item.link.toLowerCase().includes(domain));

    const position = foundIndex !== -1 ? foundIndex + 1 : 0;
    const formattedOrganic = organicResults.map((item: any, index: number) => ({
      position: index + 1,
      title: item.title,
      link: item.link,
      snippet: item.snippet,
    }));

    return {
      success: true,
      data: {
        domain,
        keyword,
        position,
        location,
        organicResults: formattedOrganic,
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
