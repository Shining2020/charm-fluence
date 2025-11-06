import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="AI驱动的恋爱社交话术助手，帮你用更有氛围感的方式表达自己。支持暧昧、幽默、温柔、直球、绿茶、诗意等多种风格转换。" />
        <meta name="author" content="恋爱话术助手" />
        <meta property="og:title" content="恋爱话术助手 - AI帮你说出心动的话" />
        <meta property="og:description" content="AI驱动的恋爱社交话术助手，让对话更自然、更心动" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lovable_dev" />
        <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

