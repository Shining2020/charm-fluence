import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Copy, Heart, Sparkles, Loader2 } from "lucide-react";

const STYLES = [
  { id: "ambiguous", label: "暧昧", emoji: "💕" },
  { id: "humorous", label: "幽默", emoji: "😄" },
  { id: "gentle", label: "温柔", emoji: "🌸" },
  { id: "direct", label: "直球", emoji: "💪" },
  { id: "greentea", label: "绿茶", emoji: "🍵" },
  { id: "poetic", label: "林黛玉体", emoji: "✨" }, // 林黛玉体风格
];

const STYLE_DESCRIPTIONS = {
  ambiguous: "暧昧风格：带有微妙的暗示和撩人的感觉",
  humorous: "幽默风格：轻松愉快，让对话更有趣",
  gentle: "温柔风格：体贴温暖，让人感到舒适",
  direct: "直球风格：直接表达，真诚坦率",
  greentea: "语气甜美天真，似关心又若有似无地试探，温柔中带点暧昧与心机。",
  poetic: "现代林黛玉风格：用现代表达方式，保留委婉细腻、略带伤感的情绪特色。语气轻柔，文字优美，带着淡淡的忧愁和自怜。可以用反问、感叹、省略号来表达内心的复杂情感，像是轻声低语诉说心事，既温柔又略带忧郁。",

};

const Index = () => {
  const [input, setInput] = useState("");
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [results, setResults] = useState<{ style: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const toggleStyle = (styleId: string) => {
    setSelectedStyles((prev) =>
      prev.includes(styleId)
        ? prev.filter((s) => s !== styleId)
        : [...prev, styleId]
    );
  };

  const generateResponses = async () => {
    if (!input.trim()) {
      toast({
        title: "请输入内容",
        description: "请先输入你想要转换的文字",
        variant: "destructive",
      });
      return;
    }

    if (selectedStyles.length === 0) {
      toast({
        title: "请选择风格",
        description: "请至少选择一种风格",
        variant: "destructive",
      });
      return;
    }

    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
    if (!apiKey) {
      toast({
        title: "配置错误",
        description: "缺少 API 密钥，请在 .env 文件中配置 VITE_OPENROUTER_API_KEY",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setResults([]);

    try {
      const promises = selectedStyles.map(async (styleId) => {
        try {
          const style = STYLES.find((s) => s.id === styleId);
          const prompt = `你是一个擅长改写话术的助手。请将以下原始内容改写成${STYLE_DESCRIPTIONS[styleId as keyof typeof STYLE_DESCRIPTIONS]}的版本。

**原始内容：**
"${input}"

**要求：**
1. 保持原意不变，但要让表达更有吸引力和感染力
2. 完全符合所选风格的特色，语言自然流畅
3. 适合在恋爱或社交场景中使用
4. 长度适中，不要过于冗长
5. 只输出改写后的话术内容，不要添加任何解释、说明或额外文字

**改写后的话术：**`;

          const response = await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
              },
              body: JSON.stringify({
                model: "google/gemini-2.5-flash",
                messages: [
                  {
                    role: "user",
                    content: prompt,
                  },
                ],
              }),
            }
          );

          // 检查 HTTP 响应状态
          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error(`API Error for ${style?.label}:`, response.status, errorData);
            return {
              style: style?.label || styleId,
              text: `生成失败：${response.status === 401 ? "API 密钥无效" : response.status === 429 ? "请求过于频繁，请稍后重试" : `HTTP ${response.status}`}`,
            };
          }

          const data = await response.json();
          
          // 检查响应数据结构
          if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            console.error(`Invalid response format for ${style?.label}:`, data);
            return {
              style: style?.label || styleId,
              text: "生成失败：API 返回数据格式错误",
            };
          }

          const text = data.choices[0].message.content?.trim();
          if (!text) {
            return {
              style: style?.label || styleId,
              text: "生成失败：返回内容为空",
            };
          }

          return {
            style: style?.label || styleId,
            text,
          };
        } catch (error) {
          console.error(`Error generating for ${styleId}:`, error);
          const style = STYLES.find((s) => s.id === styleId);
          return {
            style: style?.label || styleId,
            text: `生成失败：${error instanceof Error ? error.message : "未知错误"}`,
          };
        }
      });

      const allResults = await Promise.all(promises);
      setResults(allResults);
      
      // 检查是否有成功的生成
      const successCount = allResults.filter(r => !r.text.includes("生成失败")).length;
      if (successCount === 0) {
        toast({
          title: "全部生成失败",
          description: "请检查 API 密钥和网络连接",
          variant: "destructive",
        });
      } else if (successCount < allResults.length) {
        toast({
          title: "部分生成失败",
          description: `${successCount}/${allResults.length} 个风格生成成功`,
          variant: "default",
        });
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast({
        title: "生成失败",
        description: error instanceof Error ? error.message : "请检查网络连接或稍后重试",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "已复制",
      description: "内容已复制到剪贴板",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              恋爱话术助手
            </h1>
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <p className="text-muted-foreground text-lg">
            让AI帮你说出心动的话 💕
          </p>
        </div>

        {/* Input Section */}
        <Card className="p-6 mb-8 shadow-lg border-2 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 delay-100">
          <label className="block text-sm font-medium mb-3 text-foreground">
            输入你想说的话：
          </label>
          <Textarea
            placeholder="例如：你吃饭了吗？"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[120px] text-base resize-none border-2 focus:border-primary transition-colors"
          />
        </Card>

        {/* Style Selection */}
        <Card className="p-6 mb-8 shadow-lg border-2 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 delay-200">
          <label className="block text-sm font-medium mb-4 text-foreground">
            选择风格（可多选）：
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {STYLES.map((style) => (
              <Button
                key={style.id}
                variant={
                  selectedStyles.includes(style.id) ? "default" : "outline"
                }
                onClick={() => toggleStyle(style.id)}
                className="h-auto py-4 text-base font-medium transition-all duration-300 hover:scale-105"
              >
                <span className="mr-2 text-xl">{style.emoji}</span>
                {style.label}
              </Button>
            ))}
          </div>
        </Card>

        {/* Generate Button */}
        <div className="flex justify-center mb-12 animate-in fade-in slide-in-from-bottom-4 delay-300">
          <Button
            onClick={generateResponses}
            disabled={loading}
            size="lg"
            className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                AI正在创作中...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                生成话术
              </>
            )}
          </Button>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 delay-400">
            <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
              ✨ 生成结果 ✨
            </h2>
            {results.map((result, index) => (
              <Card
                key={index}
                className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 hover:border-primary group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">
                        {STYLES.find((s) => s.label === result.style)?.emoji}
                      </span>
                      <h3 className="font-semibold text-lg text-primary">
                        {result.style}
                      </h3>
                    </div>
                    <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                      {result.text}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(result.text)}
                    className="shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
                  >
                    <Copy className="h-5 w-5" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
