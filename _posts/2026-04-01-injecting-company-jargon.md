---
title: Injecting company jargon for generative AI
lead: >-
  LLMs don't know a company's internal vocabulary, so they guess. A simple way to
  teach it to them from a YAML file, tested across model sizes.
description: "How to inject company-specific vocabulary into LLM prompts: a worked example that turns natural-language requests into arXiv API queries."
external_url: https://medium.com/sdg-group/injecting-company-jargon-for-generative-ai-specific-use-cases-bde8d198751e
external_site: SDG Group's Medium
---

Every company has its own vocabulary: team names, project phases, acronyms,
internal product names. Large language models have never seen it, so when a
request uses that jargon they fill the gap with a plausible guess, and that guess
is often a hallucination.

In this article for SDG Group's Medium publication I show how to inject that
knowledge from a YAML glossary straight into the prompt. The worked example is an
app that turns natural-language requests into valid [arXiv API](https://info.arxiv.org/help/api/)
queries, and I compare how well the approach works across model sizes.

The code is on GitHub: [ordovas/context-inject-arxiv](https://github.com/ordovas/context-inject-arxiv).
