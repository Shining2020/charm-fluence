"use client";

import { siteConfig } from "@/config/site";
import Navbar from "@/components/sections/navbar/default";
import FooterSection from "@/components/sections/footer/default";
import { Section } from "@/components/ui/section";
import CharmLogo from "@/components/logos/charm";

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold mb-8">隐私政策</h1>
          
          <p className="text-muted-foreground mb-6">
            最后更新日期：2025年1月
          </p>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. 公司信息</h2>
              <p>
                本隐私政策由<strong>北京有趣有用好玩有限公司</strong>（以下简称"我们"或"公司"）制定。
              </p>
              <p>
                <strong>公司地址：</strong>中国北京市海淀区五道口
              </p>
              <p>
                <strong>联系邮箱：</strong>
                <a href="mailto:support@lovelychat.com" className="text-primary hover:underline">
                  support@lovelychat.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. 数据收集</h2>
              <p>
                <strong>我们不会收集您的用户数据。</strong>
              </p>
              <p>
                我们承诺保护您的隐私。在使用我们的服务时，我们不会收集、存储或分享您的个人信息、对话内容或任何其他数据。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. 服务使用</h2>
              <p>
                我们的服务采用本地处理方式，所有内容生成均在您的设备上完成，不会上传到我们的服务器。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. 第三方服务</h2>
              <p>
                我们不会与任何第三方分享您的信息，因为我们不收集任何信息。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. 数据安全</h2>
              <p>
                由于我们不收集任何数据，因此不存在数据泄露的风险。您的所有内容都保留在您的设备上。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. 您的权利</h2>
              <p>
                由于我们不收集您的数据，您无需担心数据访问、删除或修改的问题。您的数据完全由您自己控制。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. 隐私政策更新</h2>
              <p>
                我们可能会不定期更新本隐私政策。任何重大变更都会在本页面公布。我们建议您定期查看本页面以了解最新信息。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. 联系我们</h2>
              <p>
                如果您对本隐私政策有任何疑问或建议，请通过以下方式联系我们：
              </p>
              <p>
                <strong>邮箱：</strong>
                <a href="mailto:support@lovelychat.com" className="text-primary hover:underline">
                  support@lovelychat.com
                </a>
              </p>
              <p>
                <strong>地址：</strong>中国北京市海淀区五道口
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

