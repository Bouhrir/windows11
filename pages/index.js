import Head from "next/head";
import Desktop from "../components/desktop/Desktop";
import Taskbar from "../components/taskbar/Taskbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Windows 11</title>
        <link rel="icon" href="/logo.png" />
        <meta name="title" content="Windows 11" />
        <meta
          name="description"
          content="Windows 11 made with 💛 using NextJS and TailwindCSS by Oussama Bouhrir."
        />
        <meta name="copyright" content="OussamaBouhrir" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.obouhrir.me" />
        <meta property="og:title" content="Windows 11" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W11XMFPKX7"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W11XMFPKX7', { page_path: window.location.pathname });
            `,
          }}
        />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </Head>

      <body className="text-white h-[864px] w-[1536px]">
        <Desktop />
        <Taskbar />
      </body>
    </>
  );
}
