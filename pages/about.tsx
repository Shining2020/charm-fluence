"use client";

import { siteConfig } from "@/config/site";
import Navbar from "@/components/sections/navbar/default";
import FooterSection from "@/components/sections/footer/default";
import { Section } from "@/components/ui/section";
import CharmLogo from "@/components/logos/charm";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar
        logo={<CharmLogo className="size-6" />}
        name={siteConfig.name}
        homeUrl="/"
        mobileLinks={[
          { text: "功能特色", href: "/#features" },
          { text: "使用统计", href: "/#stats" },
          { text: "常见问题", href: "/#faq" },
        ]}
        actions={[
          { text: "立即开始", href: "/app", isButton: true, variant: "default" },
        ]}
      />

      <Section className="max-w-4xl mx-auto">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">关于我们</h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">公司简介</h2>
              <p>
                <strong>北京有趣有用好玩有限公司</strong>是一家专注于AI技术应用的公司，
                致力于为用户提供创新、实用的AI工具和服务。
              </p>
              <p>
                我们的使命是让AI技术真正服务于人们的日常生活，帮助每个人更好地表达自己、
                提升沟通效率，让每一次对话都更加精彩。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">我们的产品</h2>
              <p>
                <strong>Charm Fluent</strong>是我们推出的AI话术生成工具，旨在帮助用户以不同风格表达想法。
                无论是浪漫、温柔、幽默还是其他风格，我们都能为您生成恰到好处的话术。
              </p>
              <p>
                我们的产品特点：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>多种话术风格，满足不同场景需求</li>
                <li>AI智能改写，快速生成优质内容</li>
                <li>隐私保护，不收集用户数据</li>
                <li>简单易用，无需复杂操作</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">我们的承诺</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">隐私保护</h3>
                  <p>
                    我们承诺不会收集、存储或分享您的任何个人信息或对话内容。
                    您的数据完全由您自己控制，我们不会访问或保存任何内容。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">服务质量</h3>
                  <p>
                    我们致力于提供高质量的服务，不断优化AI模型，确保生成的内容准确、自然、符合您的需求。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">用户体验</h3>
                  <p>
                    我们重视每一位用户的反馈，持续改进产品功能，让使用体验更加流畅、便捷。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">收费说明</h2>
              <p>
                我们的服务采用订阅制收费模式，但我们为所有新用户提供<strong>7天免费体验期</strong>。
                在免费体验期内，您可以无限制使用所有功能，充分体验我们的服务。
              </p>
              <p>
                免费体验期结束后，您可以选择订阅我们的付费服务，继续享受完整的AI话术生成功能。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">联系我们</h2>
              <p>
                如果您有任何问题、建议或反馈，我们非常欢迎您与我们联系：
              </p>
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <p>
                  <strong>公司名称：</strong>北京有趣有用好玩有限公司
                </p>
                <p>
                  <strong>联系邮箱：</strong>
                  <a href="mailto:support@lovelychat.com" className="text-primary hover:underline">
                    support@lovelychat.com
                  </a>
                </p>
                <p>
                  <strong>公司地址：</strong>中国北京市海淀区五道口
                </p>
              </div>
              <p className="mt-4">
                我们会在收到您的邮件后尽快回复，通常会在24小时内给予响应。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">加入我们</h2>
              <p>
                如果您对我们的产品感兴趣，或者想要了解更多信息，欢迎关注我们的动态。
                我们也在不断寻找志同道合的伙伴，共同推动AI技术的发展。
              </p>
            </section>
          </div>
        </div>
      </Section>

      <FooterSection
        logo={<CharmLogo className="size-6" />}
        name={siteConfig.name}
        columns={[
          {
            title: "产品",
            links: [
              { text: "功能特色", href: "/#features" },
              { text: "使用统计", href: "/#stats" },
            ],
          },
          {
            title: "支持",
            links: [
              { text: "常见问题", href: "/#faq" },
              { text: "联系我们", href: "mailto:support@lovelychat.com" },
            ],
          },
          {
            title: "法律",
            links: [
              { text: "隐私政策", href: "/privacy-policy" },
              { text: "使用条款", href: "/terms-of-use" },
              { text: "关于我们", href: "/about" },
            ],
          },
        ]}
        copyright={`© 2025 ${siteConfig.name}. All rights reserved.`}
        policies={[
          { text: "隐私政策", href: "/privacy-policy" },
          { text: "使用条款", href: "/terms-of-use" },
        ]}
      />
    </div>
  );
}

