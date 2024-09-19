import Script from 'next/script';

export const metadata = {
  title: 'Ishant Sikdar',
  description: 'Ishant Sikdar is a skilled Software Engineer with expertise in building scalable web solutions using Next.js, Spring Boot, PostgreSQL, and AWS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Ishant Sikdar is a skilled Software Engineer with expertise in building scalable web solutions using Next.js, Spring Boot, PostgreSQL, and AWS." />

        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Ishant Sikdar - Full-Stack Developer" />
        <meta property="og:description" content="Explore the portfolio of Ishant Sikdar, showcasing full-stack development projects using Next.js, Spring Boot, PostgreSQL, and AWS." />
        <meta property="og:url" content="https://easc01.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://easc01.com/favicon.ico" />
        <meta property="og:image:alt" content="Ishant Sikdar" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.easc01.com" />

        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon and Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FXJBNWM8ZS"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-FXJBNWM8ZS');
          `}
        </Script>

        {/* Schema.org JSON-LD */}
        <Script
          id="schema-org-json-ld"
          type="application/ld+json"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ishant Sikdar",
              "url": "https://easc01.com",
              "logo": "https://easc01.com/favicon.ico"
            }
          `}
        </Script>

        <title>Ishant Sikdar</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
