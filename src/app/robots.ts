import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = "https://www.estudiobica.com.uy";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Si en el futuro tenés rutas privadas, bloqueálas acá:
        // disallow: "/admin/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}