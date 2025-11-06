"use client";

import { siteConfig } from "@/config/site";
import Navbar from "@/components/sections/navbar/default";
import FooterSection from "@/components/sections/footer/default";
import { Section } from "@/components/ui/section";
import CharmLogo from "@/components/logos/charm";

export default function TermsOfUse() {
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
          <h1 className="text-4xl font-bold mb-8">使用条款</h1>
          
          <p className="text-muted-foreground mb-6">
            最后更新日期：2025年1月
          </p>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. 接受条款</h2>
              <p>
                欢迎使用由<strong>北京有趣有用好玩有限公司</strong>（以下简称"我们"或"公司"）提供的服务。
                通过访问或使用我们的服务，您同意遵守本使用条款。如果您不同意这些条款，请不要使用我们的服务。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. 服务描述</h2>
              <p>
                我们提供AI话术生成服务，帮助用户以不同风格表达想法。我们的服务包括但不限于：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>多种话术风格生成（暧昧、幽默、温柔、直球、绿茶、林黛玉体等）</li>
                <li>AI智能改写功能</li>
                <li>实时内容生成</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. 收费政策</h2>
              <p>
                <strong>我们的服务是收费的，但提供7天免费体验期。</strong>
              </p>
              <p>
                在免费体验期内，您可以免费使用我们的所有功能。免费体验期结束后，您需要订阅付费服务才能继续使用。
              </p>
              <p>
                我们保留随时调整价格和收费政策的权利，但不会影响您已购买的订阅。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. 用户责任</h2>
              <p>使用我们的服务时，您同意：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>仅将服务用于合法目的</li>
                <li>不利用服务生成违法、有害、威胁、辱骂、骚扰、诽谤、粗俗或其他不当内容</li>
                <li>不尝试干扰或破坏服务的正常运行</li>
                <li>不尝试未经授权访问我们的系统或数据</li>
                <li>对您使用服务产生的任何后果负责</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. 知识产权</h2>
              <p>
                服务的所有内容，包括但不限于文本、图形、标识、图标、图像、音频剪辑、数字下载和软件，均为我们或我们的内容提供商的财产，受版权和其他知识产权法保护。
              </p>
              <p>
                您生成的内容归您所有，但您授予我们使用这些内容改进服务的权利。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. 服务可用性</h2>
              <p>
                我们努力确保服务的持续可用性，但不保证服务不会中断、无错误或完全安全。
                我们保留随时修改、暂停或终止服务的权利，无需提前通知。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. 免责声明</h2>
              <p>
                服务按"现状"提供，不提供任何明示或暗示的保证。我们不保证：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>服务将满足您的特定要求</li>
                <li>服务将不间断、及时、安全或无错误</li>
                <li>通过服务获得的结果将准确或可靠</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. 责任限制</h2>
              <p>
                在法律允许的最大范围内，我们不对因使用或无法使用服务而产生的任何直接、间接、偶然、特殊或后果性损害承担责任。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. 退款政策</h2>
              <p>
                如果您对我们的服务不满意，请在订阅后7天内联系我们申请退款。
                退款申请将根据具体情况处理。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. 条款修改</h2>
              <p>
                我们保留随时修改本使用条款的权利。任何重大变更都会在本页面公布。
                继续使用服务即表示您接受修改后的条款。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. 联系我们</h2>
              <p>
                如果您对本使用条款有任何疑问，请通过以下方式联系我们：
              </p>
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

