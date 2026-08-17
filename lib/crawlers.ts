/**
 * The AI crawlers and answer-engine agents this site explicitly welcomes.
 *
 * A `User-Agent: *` allow already permits all of them, so why name them? Two
 * reasons:
 *
 *  1. Google-Extended and Applebot-Extended are not crawlers. They are opt-out
 *     tokens controlling whether content already crawled may be used for AI
 *     features (AI Overviews, Gemini grounding, Apple Intelligence). A wildcard
 *     `Allow` is not the signal those tokens read, and being absent from
 *     robots.txt is the ambiguous case — naming them states the intent.
 *  2. Several of these operators publish the specific token they honour, and
 *     some third-party robots parsers only credit a site for a policy it states
 *     explicitly. For a site whose entire goal here is to be *quotable* by
 *     answer engines, silence is the wrong default.
 *
 * Grouped by operator. If a token is ever meant to be blocked, move it into its
 * own `disallow` rule rather than deleting it — the record of the decision is
 * worth more than the tidier file.
 */
export const AI_CRAWLERS = [
  // OpenAI: training crawler, search index, and live user-triggered fetches.
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic.
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  // Google's AI-usage opt-out token (not Googlebot, which the wildcard covers).
  'Google-Extended',
  // Apple Intelligence's opt-out token (not Applebot itself).
  'Applebot-Extended',
  // Perplexity: index crawler and live user-triggered fetches.
  'PerplexityBot',
  'Perplexity-User',
  // Microsoft Copilot / Bing's AI surface.
  'BingBot',
  // Meta AI.
  'meta-externalagent',
  // Common Crawl — the corpus a large share of open models are trained on.
  'CCBot',
  // Others that publish a named token.
  'cohere-ai',
  'Amazonbot',
  'YouBot',
  'DuckAssistBot',
  'MistralAI-User',
]
