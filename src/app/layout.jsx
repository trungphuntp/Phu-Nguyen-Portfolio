import Footer from "./components/Footer/page";
import Header from "./components/Header/page";
import ScrollHeader from "./components/ScrollHeader/page";
import "./globals.css";
import StyledComponentsRegistry from "./libs/registry";
import "./styles/main.scss";

export const metadata = {
  title: "Phu Nguyen's Portfolio",
  description:
    "The website contains information related to Phu Nguyen and Phu Nguyen's work.",

  keywords: [
    "Next.js",
    "React",
    "HTML",
    "HTML5",
    "HTML5-CSS3",
    "CSS",
    "Web Development",
    "Phu Nguyen's Portfolio",
    "Frontend",
    "Frontend dev",
    "Frontend developer",
  ],
  authors: [{ name: "Phu Nguyen", url: "https://yourwebsite.com" }],
  creator: "Phu Nguyen",
  metadataBase: new URL("https://yourwebsite.com"),
  openGraph: {
    title: "Tên Website của bạn",
    description:
      "The website contains information related to Phu Nguyen and Phu Nguyen's work.",
    url: "https://yourwebsite.com",
    siteName: "Tên Website",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // ảnh chia sẻ MXH
        width: 1200,
        height: 630,
        alt: "Mô tả ảnh",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tên Website của bạn",
    description: "Mô tả khi chia sẻ lên Twitter.",
    images: ["https://yourwebsite.com/og-image.jpg"],
    creator: "@your_twitter_handle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative">
        <StyledComponentsRegistry>
          <Header />
          <ScrollHeader />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
