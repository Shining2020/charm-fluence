"use client";

import { Heart, Sparkles, MessageCircle, Wand2, Users, Zap, Shield } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/config/site";

import Hero from "@/components/sections/hero/default";
import Items from "@/components/sections/items/default";
import Stats from "@/components/sections/stats/default";
import CTA from "@/components/sections/cta/default";
import FAQ from "@/components/sections/faq/default";
import FooterSection from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import Navigation from "@/components/ui/navigation";
import { Badge } from "@/components/ui/badge";
import CharmLogo from "@/components/logos/charm";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar
        logo={<CharmLogo className="size-6" />}
        name={siteConfig.name}
        mobileLinks={[
          { text: "功能特色", href: "#features" },
          { text: "使用统计", href: "#stats" },
          { text: "常见问题", href: "#faq" },
        ]}
        actions={[
          { text: "立即开始", href: "/app", isButton: true, variant: "default" },
        ]}
        customNavigation={
          <Navigation
            menuItems={[
              {
                title: "了解我们",
                content: "default",
              },
              {
                title: "看看示例",
                content: "components",
              },
              {
                title: "用户故事",
                isLink: true,
                href: siteConfig.url,
              },
            ]}
          />
        }
      />

      <Hero
        badge={
          <Badge variant="outline" className="animate-appear text-base sm:text-lg md:text-xl px-4 py-2">
            <span className="text-muted-foreground">
              ✨ 全新升级，更多话术风格等你探索
            </span>
          </Badge>
        }
        title="让AI帮你写出心动的话"
        description="浪漫、温柔、幽默，多种风格让你的话语更有魅力。不再为如何表达而烦恼，让每一句话都恰到好处。"
        buttons={[
          {
            href: "/app",
            text: "立即开始",
            variant: "default",
          },
          {
            href: "#features",
            text: "了解更多",
            variant: "outline",
          },
        ]}
        mockup={false}
      />

      <div id="stats">
        <Stats
          items={[
          {
            label: "已有",
            value: Math.round(siteConfig.stats.users / 1000),
            suffix: "k+",
            description: "用户正在使用",
          },
          {
            label: "已生成",
            value: Math.round(siteConfig.stats.messages / 1000),
            suffix: "k+",
            description: "条话术内容",
          },
          {
            label: "支持",
            value: siteConfig.stats.styles,
            description: "种不同风格",
          },
          {
            label: "用户满意度",
            value: siteConfig.stats.satisfaction,
            description: "五星好评",
          },
        ]}
        className="fade-bottom"
        />
      </div>

      <div id="features">
        <Items
          title="为什么选择我们？"
        items={[
          {
            title: "💕 多种风格",
            description: "暧昧、幽默、温柔、直球、绿茶、林黛玉体，6种风格任你选择",
            icon: <Sparkles className="size-5 stroke-1" />,
          },
          {
            title: "⚡ 快速生成",
            description: "AI智能改写，秒速生成多种风格的话术，省时省力",
            icon: <Zap className="size-5 stroke-1" />,
          },
          {
            title: "🎨 个性化定制",
            description: "根据你的原始内容，生成符合你风格的独特话术",
            icon: <Wand2 className="size-5 stroke-1" />,
          },
          {
            title: "💬 自然流畅",
            description: "生成的话术自然流畅，符合真实对话场景",
            icon: <MessageCircle className="size-5 stroke-1" />,
          },
          {
            title: "👥 用户喜爱",
            description: "数万用户信赖，帮助无数人表达心意",
            icon: <Users className="size-5 stroke-1" />,
          },
          {
            title: "🔒 隐私保护",
            description: "你的对话内容完全保密，安全可靠",
            icon: <Shield className="size-5 stroke-1" />,
          },
        ]}
        className="fade-bottom"
        />
      </div>

      <div id="faq">
        <FAQ
          title="常见问题"
        items={[
          {
            question: "这个工具是免费的吗？",
            answer: (
              <>
                <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                  是的，基础功能完全免费。你可以使用所有6种话术风格，生成无限量的话术内容。
                </p>
                <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                  我们相信，帮助每个人更好地表达自己的情感，不应该被收费所限制。
                </p>
              </>
            ),
          },
          {
            question: "生成的话术真的有用吗？",
            answer: (
              <>
                <p className="text-muted-foreground mb-4 max-w-[600px]">
                  我们的AI经过大量真实对话数据的训练，能够理解不同风格的表达方式。
                </p>
                <p className="text-muted-foreground mb-4 max-w-[600px]">
                  生成的话术既保留了原意，又融入了所选风格的特色，让表达更有感染力。已有数万用户成功使用，满意度高达98%。
                </p>
              </>
            ),
          },
          {
            question: "我的对话内容会被保存吗？",
            answer: (
              <>
                <p className="text-muted-foreground mb-4 max-w-[580px]">
                  我们非常重视你的隐私。所有输入内容仅在生成话术时使用，不会保存或分享给任何第三方。
                </p>
                <p className="text-muted-foreground mb-4 max-w-[580px]">
                  你可以放心使用，你的对话内容完全保密。
                </p>
              </>
            ),
          },
          {
            question: "支持哪些风格？",
            answer: (
              <>
                <p className="text-muted-foreground mb-4 max-w-[580px]">
                  目前支持6种风格：
                </p>
                <ul className="text-muted-foreground mb-4 max-w-[580px] list-disc list-inside space-y-2">
                  <li><strong>暧昧</strong>：带有微妙的暗示和撩人的感觉</li>
                  <li><strong>幽默</strong>：轻松愉快，让对话更有趣</li>
                  <li><strong>温柔</strong>：体贴温暖，让人感到舒适</li>
                  <li><strong>直球</strong>：直接表达，真诚坦率</li>
                  <li><strong>绿茶</strong>：语气甜美天真，温柔中带点暧昧</li>
                  <li><strong>林黛玉体</strong>：委婉细腻，文字优美，带着淡淡的忧愁</li>
                </ul>
              </>
            ),
          },
          {
            question: "可以同时生成多种风格吗？",
            answer: (
              <p className="text-muted-foreground mb-4 max-w-[580px]">
                当然可以！你可以同时选择多种风格，一次性生成多个版本的话术，方便你对比和选择最合适的表达方式。
              </p>
            ),
          },
          {
            question: "如何开始使用？",
            answer: (
              <>
                <p className="text-muted-foreground mb-4 max-w-[580px]">
                  非常简单！点击右上角的"立即开始"按钮，输入你想说的话，选择你喜欢的风格，然后点击生成即可。
                </p>
                <p className="text-muted-foreground mb-4 max-w-[580px]">
                  无需注册，无需付费，立即体验AI话术生成的魅力。
                </p>
              </>
            ),
          },
        ]}
        className="fade-bottom"
        />
      </div>

      <CTA
        title="准备好开始了吗？"
        buttons={[
          {
            href: "/app",
            text: "立即开始使用",
            variant: "default",
            icon: <Heart className="mr-2 size-4" />,
          },
        ]}
        className="fade-bottom"
      />

      <FooterSection
        logo={<CharmLogo className="size-6" />}
        name={siteConfig.name}
        columns={[
          {
            title: "产品",
            links: [
              { text: "功能特色", href: "#features" },
              { text: "使用统计", href: "#stats" },
            ],
          },
          {
            title: "支持",
            links: [
              { text: "常见问题", href: "#faq" },
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
