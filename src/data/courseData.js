export const courseData = {
  title: "Master Generative AI",
  description: "Learn Generative AI from fundamentals to advanced — become a confident AI practitioner",
  chapters: [
    {
      id: 1,
      title: "Introduction to Generative AI",
      lessons: [
        {
          id: "1-1",
          title: "What is Generative AI?",
          completed: false,
          content: {
            description: "Discover the revolutionary world of Generative AI. Learn what makes it different from traditional AI and why it's transforming every industry.",
            sections: [
              {
                type: "text",
                content: `Generative AI is a type of artificial intelligence that can **create new content** — text, images, code, music, and more. Unlike traditional AI that classifies or predicts, GenAI **generates** entirely new outputs.`
              },
              {
                type: "heading",
                level: 2,
                content: "Why Learn Generative AI?"
              },
              {
                type: "list",
                items: [
                  "**Career demand** — AI skills are the most sought-after in tech",
                  "**10x productivity** — automate writing, coding, design tasks",
                  "**Creative power** — bring ideas to life instantly",
                  "**Future-proof** — AI is reshaping every industry"
                ]
              },
              {
                type: "tip",
                content: "Generative AI isn't replacing humans — it's augmenting them. The best results come from human + AI collaboration."
              },
              {
                type: "heading",
                level: 2,
                content: "Types of Generative AI"
              },
              {
                type: "list",
                items: [
                  "**Large Language Models (LLMs)** — GPT-4, Claude, Gemini (text generation)",
                  "**Image Generators** — DALL-E, Midjourney, Stable Diffusion",
                  "**Code Assistants** — GitHub Copilot, Cursor, Claude Code",
                  "**Audio/Music** — Suno, ElevenLabs, OpenAI Voice",
                  "**Video** — Sora, Runway, Pika Labs"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Your First AI Interaction"
              },
              {
                type: "text",
                content: "Let's see how prompting works. The key is being clear and specific:"
              },
              {
                type: "code",
                language: "text",
                filename: "prompt.txt",
                code: `# Basic prompt
Write a haiku about coding.

# Better prompt (more specific)
Write a haiku about the joy of debugging code at 2am,
with a surprising twist in the last line.

# Best prompt (with context and format)
You are a poet who specializes in tech humor.
Write a haiku about debugging that:
- Captures the frustration and eventual triumph
- Uses a programming metaphor
- Ends with an unexpected punchline

Format: Traditional 5-7-5 syllable structure`
              },
              {
                type: "checkpoint",
                content: "Try asking an AI to explain a complex topic you're learning. Notice how the explanation quality improves when you specify your background level and preferred explanation style."
              }
            ]
          }
        },
        {
          id: "1-2",
          title: "How LLMs Work",
          completed: false,
          content: {
            description: "Understand the magic behind Large Language Models — transformers, tokens, and how AI 'thinks' about language.",
            sections: [
              {
                type: "text",
                content: "Large Language Models are trained on massive amounts of text to predict the next word. But this simple objective leads to emergent capabilities that seem almost magical."
              },
              {
                type: "heading",
                level: 2,
                content: "Key Concepts"
              },
              {
                type: "list",
                items: [
                  "**Tokens** — words/subwords the model processes (\"coding\" = 1 token, \"extraordinary\" = 2 tokens)",
                  "**Context Window** — how much text the model can 'see' at once (4K to 1M+ tokens)",
                  "**Parameters** — the model's learned knowledge (GPT-4 ~1.7T, Claude 3 ~137B)",
                  "**Temperature** — randomness in outputs (0 = deterministic, 1 = creative)"
                ]
              },
              {
                type: "code",
                language: "python",
                filename: "token_example.py",
                code: `# Tokenization example (conceptual)
text = "Hello, world!"

# Tokens might be:
tokens = ["Hello", ",", " world", "!"]
# Each token maps to a number the model understands

# Context window matters!
# GPT-4: 128K tokens (~300 pages)
# Claude 3: 200K tokens (~500 pages)
# Gemini 1.5: 1M tokens (~3,000 pages)`
              },
              {
                type: "heading",
                level: 2,
                content: "The Transformer Architecture"
              },
              {
                type: "text",
                content: "The breakthrough behind modern AI is the **Transformer** (2017). Key innovation: **attention mechanism** — the model learns which parts of input to focus on for each output."
              },
              {
                type: "tip",
                content: "When you ask 'What's the capital of France?', attention helps the model focus on 'capital' and 'France' while generating 'Paris'."
              },
              {
                type: "heading",
                level: 2,
                content: "Training vs Inference"
              },
              {
                type: "list",
                items: [
                  "**Training** — learning patterns from billions of text examples (months, millions of $)",
                  "**Fine-tuning** — specializing a model for specific tasks (hours/days)",
                  "**Inference** — using the trained model to generate outputs (milliseconds)"
                ]
              },
              {
                type: "warning",
                content: "LLMs don't 'know' things like humans do. They're sophisticated pattern matchers that can hallucinate (confidently say wrong things). Always verify important information!"
              },
              {
                type: "quiz",
                question: "What does a higher 'temperature' setting do in an LLM?",
                options: [
                  { id: "a", text: "Makes responses faster" },
                  { id: "b", text: "Makes responses more creative/random" },
                  { id: "c", text: "Makes responses more accurate" },
                  { id: "d", text: "Increases the context window" }
                ],
                correct: "b",
                explanation: "Temperature controls randomness. Low temperature (0-0.3) gives focused, deterministic outputs. High temperature (0.7-1.0) increases creativity and variation."
              }
            ]
          }
        },
        {
          id: "1-3",
          title: "The AI Landscape",
          completed: false,
          content: {
            description: "Navigate the rapidly evolving world of AI providers, models, and tools. Know what to use and when.",
            sections: [
              {
                type: "heading",
                level: 2,
                content: "Major AI Providers"
              },
              {
                type: "list",
                items: [
                  "**OpenAI** — GPT-4, DALL-E, Whisper (market leader, broadest capabilities)",
                  "**Anthropic** — Claude 3 (best for safety, coding, long context)",
                  "**Google** — Gemini (multimodal, integrated with Google services)",
                  "**Meta** — Llama (open-source, run locally)",
                  "**Mistral** — Open-weight models (European, efficient)"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Choosing the Right Model"
              },
              {
                type: "code",
                language: "text",
                filename: "model_selection.txt",
                code: `# Quick decision guide:

TASK: Complex reasoning, coding, analysis
→ Claude 3.5 Sonnet or GPT-4o

TASK: Quick simple queries
→ GPT-4o-mini or Claude 3 Haiku

TASK: Image understanding
→ GPT-4V or Claude 3 (Vision)

TASK: Image generation
→ DALL-E 3 or Midjourney

TASK: Privacy-sensitive / offline
→ Llama 3 (local)

TASK: Very long documents (>100 pages)
→ Claude 3 (200K context) or Gemini 1.5 (1M)`
              },
              {
                type: "heading",
                level: 2,
                content: "Pricing Models"
              },
              {
                type: "text",
                content: "Most AI APIs charge per token (input + output). Understanding costs helps you optimize:"
              },
              {
                type: "code",
                language: "text",
                filename: "pricing.txt",
                code: `# Approximate costs per 1M tokens (as of 2024):

GPT-4o:         $5 input  / $15 output
GPT-4o-mini:    $0.15     / $0.60
Claude Sonnet:  $3        / $15
Claude Haiku:   $0.25     / $1.25
Gemini Pro:     $1.25     / $5

# Pro tip: Use cheaper models for simple tasks,
# expensive models only when needed!`
              },
              {
                type: "tip",
                content: "Many providers offer free tiers! OpenAI, Anthropic, and Google all have free options to get started."
              },
              {
                type: "checkpoint",
                content: "Research and compare two AI providers. What are their strengths? When would you choose one over the other?"
              }
            ]
          }
        }
      ]
    },
    {
      id: 2,
      title: "Prompt Engineering",
      lessons: [
        {
          id: "2-1",
          title: "Prompt Fundamentals",
          completed: false,
          content: {
            description: "Master the art of communicating with AI. Learn the principles that separate amateur prompts from expert ones.",
            sections: [
              {
                type: "text",
                content: "Prompt engineering is the skill of crafting inputs that get the best outputs from AI. It's part art, part science, and the single most important skill for working with GenAI."
              },
              {
                type: "heading",
                level: 2,
                content: "The CLEAR Framework"
              },
              {
                type: "list",
                items: [
                  "**C**ontext — Set the scene, provide background",
                  "**L**ength — Specify desired output length",
                  "**E**xamples — Show what you want (few-shot learning)",
                  "**A**udience — Who is this for?",
                  "**R**ole — Tell the AI who to be"
                ]
              },
              {
                type: "code",
                language: "text",
                filename: "clear_example.txt",
                code: `# Bad prompt:
Write about AI.

# Good prompt (using CLEAR):
Context: I'm writing a blog for software developers
         who are new to AI but experienced in coding.
         
Role: You are a senior AI engineer who explains
      complex topics simply.
      
Length: Write a 500-word introduction.

Audience: Developers who know Python but haven't
          used AI APIs before.
          
Example tone: Conversational but technical, like
              explaining to a colleague over coffee.

Topic: How Large Language Models actually work,
       focusing on practical implications for devs.`
              },
              {
                type: "heading",
                level: 2,
                content: "Common Prompt Patterns"
              },
              {
                type: "code",
                language: "text",
                filename: "patterns.txt",
                code: `# 1. Role Pattern
"You are an expert [role] who specializes in [domain]..."

# 2. Step-by-Step
"Let's solve this step by step:
1. First, identify...
2. Then, analyze...
3. Finally, conclude..."

# 3. Output Format
"Respond in this exact format:
SUMMARY: [one sentence]
DETAILS: [bullet points]
RECOMMENDATION: [action item]"

# 4. Constraints
"Rules:
- Keep under 100 words
- Use simple language (8th grade reading level)
- Include one concrete example
- Do NOT use jargon"`
              },
              {
                type: "warning",
                content: "Avoid vague prompts like 'make it better' or 'be more creative'. Be specific about what 'better' means to you."
              },
              {
                type: "quiz",
                question: "Which prompt will likely get better results?",
                options: [
                  { id: "a", text: "Write a good email." },
                  { id: "b", text: "Write a professional email declining a meeting, keeping it brief and friendly." },
                  { id: "c", text: "Email please." },
                  { id: "d", text: "Help with email." }
                ],
                correct: "b",
                explanation: "Option B provides context (professional), task (declining meeting), and constraints (brief, friendly). Specificity leads to better outputs."
              }
            ]
          }
        },
        {
          id: "2-2",
          title: "Advanced Prompting Techniques",
          completed: false,
          content: {
            description: "Level up with Chain-of-Thought, few-shot learning, and other advanced techniques used by AI experts.",
            sections: [
              {
                type: "heading",
                level: 2,
                content: "Chain-of-Thought (CoT)"
              },
              {
                type: "text",
                content: "Make the AI 'show its work'. This dramatically improves reasoning accuracy."
              },
              {
                type: "code",
                language: "text",
                filename: "chain_of_thought.txt",
                code: `# Without CoT:
Q: If a store has 23 apples and sells 17, then receives 
   a shipment of 31, how many apples are there?
A: 37 ✗ (wrong)

# With CoT:
Q: If a store has 23 apples and sells 17, then receives 
   a shipment of 31, how many apples are there?
   Think step by step.

A: Let me solve this step by step:
   1. Starting apples: 23
   2. After selling 17: 23 - 17 = 6
   3. After shipment of 31: 6 + 31 = 37
   The store has 37 apples. ✓`
              },
              {
                type: "heading",
                level: 2,
                content: "Few-Shot Learning"
              },
              {
                type: "text",
                content: "Show the AI examples of what you want. It learns the pattern and applies it."
              },
              {
                type: "code",
                language: "text",
                filename: "few_shot.txt",
                code: `# Few-shot prompt for sentiment analysis:

Classify the sentiment of these reviews:

Review: "This product changed my life! Best purchase ever."
Sentiment: Positive

Review: "Broke after 2 days. Complete waste of money."
Sentiment: Negative

Review: "It's okay, nothing special but does the job."
Sentiment: Neutral

Review: "The customer service was rude but the product works great."
Sentiment: Mixed

# Now classify this new one:
Review: "Shipping was slow but wow, the quality exceeded expectations!"
Sentiment:`
              },
              {
                type: "heading",
                level: 2,
                content: "Self-Consistency"
              },
              {
                type: "text",
                content: "Ask the AI to generate multiple solutions and pick the most common answer. Great for complex problems."
              },
              {
                type: "code",
                language: "text",
                filename: "self_consistency.txt",
                code: `# Self-consistency prompt:

Solve this problem 3 different ways, then give your
final answer based on the most common result:

Problem: A train leaves Station A at 9am traveling 
at 60mph. Another train leaves Station B (300 miles 
away) at 10am traveling at 80mph toward Station A.
When do they meet?

Approach 1: [solve using algebra]
Approach 2: [solve using distance formula]  
Approach 3: [solve using time intervals]

Most common answer: ___`
              },
              {
                type: "tip",
                content: "Combine techniques! Use role-setting + CoT + examples for best results on complex tasks."
              },
              {
                type: "heading",
                level: 2,
                content: "Prompt Chaining"
              },
              {
                type: "text",
                content: "Break complex tasks into smaller prompts, feeding output from one into the next:"
              },
              {
                type: "code",
                language: "text",
                filename: "chaining.txt",
                code: `# Step 1: Extract key points
"Read this article and list the 5 main arguments."
→ Output: [5 bullet points]

# Step 2: Analyze each point
"For each argument below, identify strengths and weaknesses:
[paste step 1 output]"
→ Output: [analysis]

# Step 3: Synthesize
"Based on this analysis, write a balanced summary:
[paste step 2 output]"
→ Output: [final summary]`
              },
              {
                type: "checkpoint",
                content: "Take a complex task you do regularly. Design a prompt chain that breaks it into 3-4 steps. Test it!"
              }
            ]
          }
        },
        {
          id: "2-3",
          title: "Prompt Templates & Frameworks",
          completed: false,
          content: {
            description: "Build reusable prompt templates for common tasks. Work smarter, not harder.",
            sections: [
              {
                type: "heading",
                level: 2,
                content: "The CO-STAR Framework"
              },
              {
                type: "text",
                content: "A comprehensive framework for structured prompts:"
              },
              {
                type: "code",
                language: "text",
                filename: "costar.txt",
                code: `# CO-STAR Framework:

(C) Context: Background information
(O) Objective: What you want to achieve
(S) Style: Writing style or approach
(T) Tone: Emotional quality
(A) Audience: Who will read this
(R) Response format: How to structure output

# Example:
(C) I'm a startup founder preparing for investor meetings.
(O) Create a 30-second elevator pitch for my AI scheduling app.
(S) Concise and compelling, like a TED talk opening.
(T) Confident and enthusiastic, but not salesy.
(A) Venture capitalists who see 100 pitches a week.
(R) Format as a script with [pause] markers for emphasis.`
              },
              {
                type: "heading",
                level: 2,
                content: "Reusable Templates"
              },
              {
                type: "code",
                language: "text",
                filename: "templates.txt",
                code: `# TEMPLATE: Code Review
"""
Review this [LANGUAGE] code for:
1. Bugs or potential errors
2. Performance improvements
3. Security vulnerabilities
4. Code style/readability

Code:
\`\`\`[LANGUAGE]
[PASTE CODE]
\`\`\`

Format your response as:
## Issues Found
## Suggestions
## Improved Code
"""

# TEMPLATE: Meeting Summary
"""
Summarize these meeting notes:

[PASTE NOTES]

Include:
- Key decisions made
- Action items (with owners)
- Open questions
- Next steps

Format as bullet points, max 200 words.
"""

# TEMPLATE: Email Response
"""
Write a response to this email:

[PASTE EMAIL]

Context: I'm a [ROLE] and want to [GOAL].
Tone: [professional/friendly/formal]
Length: [brief/detailed]
"""
`
              },
              {
                type: "heading",
                level: 2,
                content: "System Prompts"
              },
              {
                type: "text",
                content: "System prompts set persistent behavior for the AI. They're the 'personality layer' that affects all responses:"
              },
              {
                type: "code",
                language: "text",
                filename: "system_prompt.txt",
                code: `# Example system prompt for a coding assistant:

You are an expert software engineer with 15 years of experience.

Core behaviors:
- Always explain your reasoning before showing code
- Point out potential edge cases and bugs
- Suggest tests for any code you write
- Use modern best practices and patterns
- If requirements are unclear, ask clarifying questions

Response style:
- Be concise but thorough
- Use code comments to explain complex logic
- Include "gotchas" or common mistakes to avoid

Never:
- Write code without explaining it
- Ignore error handling
- Use deprecated methods`
              },
              {
                type: "tip",
                content: "Build a personal library of prompt templates for tasks you do often. Save hours every week!"
              },
              {
                type: "quiz",
                question: "What's the main benefit of using a framework like CO-STAR?",
                options: [
                  { id: "a", text: "It makes prompts shorter" },
                  { id: "b", text: "It ensures you don't miss important context" },
                  { id: "c", text: "It makes the AI respond faster" },
                  { id: "d", text: "It reduces API costs" }
                ],
                correct: "b",
                explanation: "Frameworks like CO-STAR provide a checklist that ensures you include all relevant context, leading to more accurate and useful responses."
              }
            ]
          }
        }
      ]
    },
    {
      id: 3,
      title: "AI for Coding",
      lessons: [
        {
          id: "3-1",
          title: "AI-Assisted Development",
          completed: false,
          content: {
            description: "Transform your coding workflow with AI. Write code faster, debug smarter, and learn continuously.",
            sections: [
              {
                type: "text",
                content: "AI coding assistants are the biggest productivity boost for developers since Stack Overflow. Learn to use them effectively and you'll code at 2-5x speed."
              },
              {
                type: "heading",
                level: 2,
                content: "Popular AI Coding Tools"
              },
              {
                type: "list",
                items: [
                  "**GitHub Copilot** — Inline suggestions in your IDE",
                  "**Cursor** — AI-first code editor (fork of VS Code)",
                  "**Claude Code** — Terminal-based coding agent",
                  "**ChatGPT/Claude** — Conversational coding help",
                  "**Codeium** — Free Copilot alternative"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Effective Code Prompts"
              },
              {
                type: "code",
                language: "text",
                filename: "code_prompts.txt",
                code: `# BAD: Vague request
"Write a function to process data"

# GOOD: Specific requirements
"Write a Python function that:
- Takes a list of user dictionaries
- Filters users older than 18
- Sorts by name alphabetically  
- Returns list of just their email addresses

Include type hints and a docstring.
Handle empty lists gracefully."

# BEST: Include context + examples
"Given this data structure:
users = [
    {'name': 'Alice', 'age': 25, 'email': 'alice@example.com'},
    {'name': 'Bob', 'age': 17, 'email': 'bob@example.com'}
]

Write a function get_adult_emails(users) that returns
['alice@example.com'] for the above input.

Use Python 3.10+ features. Include tests."`
              },
              {
                type: "heading",
                level: 2,
                content: "The Debugging Workflow"
              },
              {
                type: "code",
                language: "text",
                filename: "debugging.txt",
                code: `# Debugging prompt template:

I'm getting this error:
\`\`\`
[PASTE ERROR MESSAGE]
\`\`\`

Here's my code:
\`\`\`python
[PASTE RELEVANT CODE]
\`\`\`

What I expected: [describe expected behavior]
What actually happens: [describe actual behavior]
What I've tried: [list attempted fixes]

Please:
1. Explain why this error occurs
2. Show me the fix
3. Explain how to prevent this in the future`
              },
              {
                type: "tip",
                content: "Always review AI-generated code! It can have subtle bugs, security issues, or use outdated patterns. Trust but verify."
              },
              {
                type: "warning",
                content: "Never paste sensitive data (API keys, passwords, proprietary code) into public AI tools. Use local models or enterprise solutions for sensitive work."
              },
              {
                type: "checkpoint",
                content: "Try using an AI to refactor a piece of your own code. Ask it to explain the improvements it makes."
              }
            ]
          }
        },
        {
          id: "3-2",
          title: "Building with AI APIs",
          completed: false,
          content: {
            description: "Integrate AI into your applications. Learn to call AI APIs and handle responses like a pro.",
            sections: [
              {
                type: "text",
                content: "Ready to add AI to your apps? Most providers offer simple REST APIs. Let's see how to use them."
              },
              {
                type: "heading",
                level: 2,
                content: "OpenAI API Basics"
              },
              {
                type: "code",
                language: "python",
                filename: "openai_example.py",
                code: `from openai import OpenAI

client = OpenAI()  # Uses OPENAI_API_KEY env variable

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain quantum computing in one sentence."}
    ],
    temperature=0.7,
    max_tokens=100
)

print(response.choices[0].message.content)
# "Quantum computing uses quantum mechanics principles like 
#  superposition and entanglement to process information 
#  exponentially faster than classical computers for certain problems."`
              },
              {
                type: "heading",
                level: 2,
                content: "Anthropic Claude API"
              },
              {
                type: "code",
                language: "python",
                filename: "claude_example.py",
                code: `import anthropic

client = anthropic.Anthropic()  # Uses ANTHROPIC_API_KEY

message = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    system="You are a senior software engineer.",
    messages=[
        {"role": "user", "content": "Review this code for bugs: ..."}
    ]
)

print(message.content[0].text)`
              },
              {
                type: "heading",
                level: 2,
                content: "Streaming Responses"
              },
              {
                type: "text",
                content: "For long responses, stream tokens as they're generated for better UX:"
              },
              {
                type: "code",
                language: "python",
                filename: "streaming.py",
                code: `# OpenAI streaming
from openai import OpenAI

client = OpenAI()

stream = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Write a short story"}],
    stream=True
)

for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="", flush=True)`
              },
              {
                type: "heading",
                level: 2,
                content: "Error Handling"
              },
              {
                type: "code",
                language: "python",
                filename: "error_handling.py",
                code: `import openai
from openai import RateLimitError, APIError
import time

def call_ai_with_retry(prompt, max_retries=3):
    """Call AI API with exponential backoff retry."""
    for attempt in range(max_retries):
        try:
            response = client.chat.completions.create(
                model="gpt-4o",
                messages=[{"role": "user", "content": prompt}]
            )
            return response.choices[0].message.content
            
        except RateLimitError:
            wait_time = 2 ** attempt  # 1, 2, 4 seconds
            print(f"Rate limited. Waiting {wait_time}s...")
            time.sleep(wait_time)
            
        except APIError as e:
            print(f"API error: {e}")
            raise
            
    raise Exception("Max retries exceeded")`
              },
              {
                type: "tip",
                content: "Always implement rate limiting, retries, and proper error handling. AI APIs can be flaky — your app shouldn't be!"
              },
              {
                type: "quiz",
                question: "Why should you use streaming for long AI responses?",
                options: [
                  { id: "a", text: "It's cheaper" },
                  { id: "b", text: "Better user experience — users see output immediately" },
                  { id: "c", text: "It uses less memory" },
                  { id: "d", text: "It's more accurate" }
                ],
                correct: "b",
                explanation: "Streaming shows users output as it's generated, rather than making them wait for the entire response. This dramatically improves perceived performance."
              }
            ]
          }
        }
      ]
    },
    {
      id: 4,
      title: "AI Agents & Automation",
      lessons: [
        {
          id: "4-1",
          title: "What Are AI Agents?",
          completed: false,
          content: {
            description: "Go beyond chat — learn how AI agents can take actions, use tools, and accomplish complex tasks autonomously.",
            sections: [
              {
                type: "text",
                content: "AI Agents are LLMs that can **take actions** in the real world. They can browse the web, write and run code, manage files, and more — all autonomously."
              },
              {
                type: "heading",
                level: 2,
                content: "Agent vs Chatbot"
              },
              {
                type: "list",
                items: [
                  "**Chatbot** — responds to messages (reactive)",
                  "**Agent** — accomplishes goals using tools (proactive)",
                  "**Chatbot** — one turn at a time",
                  "**Agent** — multi-step reasoning and execution"
                ]
              },
              {
                type: "code",
                language: "text",
                filename: "agent_example.txt",
                code: `# Chatbot interaction:
User: "What's the weather in NYC?"
Bot: "I don't have access to real-time weather data."

# Agent interaction:
User: "What's the weather in NYC?"
Agent: 
  → [Thinking: I need to check weather. I have a weather tool.]
  → [Action: call weather_api("NYC")]
  → [Result: 72°F, sunny]
  → "It's currently 72°F and sunny in New York City!"`
              },
              {
                type: "heading",
                level: 2,
                content: "The Agent Loop"
              },
              {
                type: "text",
                content: "Agents follow a loop: **Think → Act → Observe → Repeat**"
              },
              {
                type: "code",
                language: "text",
                filename: "agent_loop.txt",
                code: `# The ReAct Pattern (Reason + Act):

Task: "Book me a flight to Tokyo next week under $800"

THOUGHT: I need to search for flights to Tokyo. 
         Let me check dates for next week first.
         
ACTION: get_dates_next_week()
OBSERVATION: Feb 10-16, 2025

THOUGHT: Now I'll search flights in that range under $800.
ACTION: search_flights("SFO", "TYO", "2025-02-10", "2025-02-16", max_price=800)
OBSERVATION: Found 3 flights: [UA $750, JAL $820, ANA $690]

THOUGHT: ANA for $690 is the best option under budget.
         I should confirm with the user before booking.
         
ACTION: ask_user("Found ANA flight for $690 on Feb 12. Book it?")
OBSERVATION: User says "Yes"

ACTION: book_flight(ana_flight_id)
OBSERVATION: Booking confirmed! Confirmation #ANA123456

FINAL: "Done! Booked ANA flight for $690 on Feb 12. 
        Confirmation: ANA123456"`
              },
              {
                type: "heading",
                level: 2,
                content: "Popular Agent Frameworks"
              },
              {
                type: "list",
                items: [
                  "**LangChain** — Most popular, lots of integrations",
                  "**CrewAI** — Multi-agent collaboration",
                  "**AutoGPT** — Autonomous goal-pursuit",
                  "**Claude Computer Use** — Can control your computer",
                  "**OpenAI Assistants** — Built-in tool use and memory"
                ]
              },
              {
                type: "warning",
                content: "Agents can take real actions! Always implement safety guardrails and human approval for sensitive operations."
              },
              {
                type: "checkpoint",
                content: "Think of a repetitive task you do. How could an AI agent automate it? What tools would it need?"
              }
            ]
          }
        },
        {
          id: "4-2",
          title: "Building Your First Agent",
          completed: false,
          content: {
            description: "Get hands-on building an AI agent with tools. Learn the patterns that power autonomous AI systems.",
            sections: [
              {
                type: "text",
                content: "Let's build a simple agent that can search the web and summarize results. This pattern scales to any tool-using agent."
              },
              {
                type: "heading",
                level: 2,
                content: "Defining Tools"
              },
              {
                type: "code",
                language: "python",
                filename: "tools.py",
                code: `# Tools are functions the agent can call

def search_web(query: str) -> str:
    """Search the web for information."""
    # In reality, call a search API
    return f"Search results for: {query}..."

def get_weather(city: str) -> str:
    """Get current weather for a city."""
    # In reality, call weather API
    return f"Weather in {city}: 72°F, sunny"

def send_email(to: str, subject: str, body: str) -> str:
    """Send an email."""
    # In reality, use email API
    return f"Email sent to {to}"

# Define tools for the LLM
tools = [
    {
        "name": "search_web",
        "description": "Search the web for current information",
        "parameters": {
            "type": "object",
            "properties": {
                "query": {"type": "string", "description": "Search query"}
            },
            "required": ["query"]
        }
    },
    # ... more tool definitions
]`
              },
              {
                type: "heading",
                level: 2,
                content: "The Agent Loop"
              },
              {
                type: "code",
                language: "python",
                filename: "agent.py",
                code: `from openai import OpenAI

client = OpenAI()

def run_agent(task: str, max_steps: int = 10):
    """Run an agent loop until task is complete."""
    
    messages = [
        {"role": "system", "content": "You are a helpful agent. Use tools to accomplish tasks."},
        {"role": "user", "content": task}
    ]
    
    for step in range(max_steps):
        # Get LLM response
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=messages,
            tools=tools,
            tool_choice="auto"
        )
        
        message = response.choices[0].message
        
        # Check if done (no tool calls)
        if not message.tool_calls:
            return message.content
        
        # Execute tool calls
        for tool_call in message.tool_calls:
            result = execute_tool(
                tool_call.function.name,
                tool_call.function.arguments
            )
            
            # Add result to conversation
            messages.append(message)
            messages.append({
                "role": "tool",
                "tool_call_id": tool_call.id,
                "content": result
            })
    
    return "Max steps reached"

# Run it!
result = run_agent("Find the weather in Tokyo and summarize any major news there today")
print(result)`
              },
              {
                type: "heading",
                level: 2,
                content: "Agent Best Practices"
              },
              {
                type: "list",
                items: [
                  "**Limit steps** — Prevent infinite loops with max iterations",
                  "**Log everything** — Debug by reviewing the agent's reasoning",
                  "**Human in the loop** — Require approval for sensitive actions",
                  "**Fail gracefully** — Handle tool errors without crashing",
                  "**Cost awareness** — Long agent runs can get expensive!"
                ]
              },
              {
                type: "tip",
                content: "Start simple! Build agents with 2-3 tools first. Add complexity gradually as you understand the patterns."
              }
            ]
          }
        }
      ]
    },
    {
      id: 5,
      title: "RAG & Knowledge Bases",
      lessons: [
        {
          id: "5-1",
          title: "Introduction to RAG",
          completed: false,
          content: {
            description: "Give AI access to your data with Retrieval-Augmented Generation. Build chatbots that know your documents.",
            sections: [
              {
                type: "text",
                content: "**RAG (Retrieval-Augmented Generation)** lets you give LLMs access to your own data — documents, databases, knowledge bases — without retraining the model."
              },
              {
                type: "heading",
                level: 2,
                content: "Why RAG?"
              },
              {
                type: "list",
                items: [
                  "**Up-to-date info** — LLMs have knowledge cutoffs",
                  "**Private data** — Use your company's documents",
                  "**Accuracy** — Ground responses in source material",
                  "**Citations** — Know where answers came from"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "How RAG Works"
              },
              {
                type: "code",
                language: "text",
                filename: "rag_flow.txt",
                code: `# The RAG Pipeline:

1. INGESTION (one-time setup):
   Documents → Chunk into pieces → Generate embeddings → Store in vector DB

2. RETRIEVAL (at query time):
   User query → Generate query embedding → Find similar chunks → Return top K results

3. GENERATION:
   "Using this context: [retrieved chunks]
    Answer this question: [user query]"
   → LLM generates grounded response

# Example:
User: "What's our refund policy?"

→ Embed query → Search vector DB
→ Find: "chunk_42: Refunds are available within 30 days..."
→ Prompt: "Context: {chunk_42}\n\nQuestion: What's our refund policy?"
→ LLM: "According to your policy, refunds are available within 30 days of purchase."`
              },
              {
                type: "heading",
                level: 2,
                content: "Embeddings Explained"
              },
              {
                type: "text",
                content: "Embeddings convert text to numbers (vectors) that capture meaning. Similar texts have similar embeddings."
              },
              {
                type: "code",
                language: "python",
                filename: "embeddings.py",
                code: `from openai import OpenAI

client = OpenAI()

# Generate an embedding
response = client.embeddings.create(
    model="text-embedding-3-small",
    input="What is the refund policy?"
)

embedding = response.data[0].embedding
# Returns: [0.0023, -0.009, 0.015, ...] (1536 dimensions)

# Similar texts will have similar vectors!
# "refund policy" ≈ "return items" ≈ "money back"
# These would have high cosine similarity`
              },
              {
                type: "tip",
                content: "Chunk size matters! Too small = missing context. Too big = irrelevant noise. Start with ~500 tokens and adjust."
              },
              {
                type: "quiz",
                question: "What's the main purpose of embeddings in RAG?",
                options: [
                  { id: "a", text: "To compress documents" },
                  { id: "b", text: "To find semantically similar content" },
                  { id: "c", text: "To translate languages" },
                  { id: "d", text: "To generate images" }
                ],
                correct: "b",
                explanation: "Embeddings capture semantic meaning, allowing you to find relevant content even when the exact words don't match. 'Refund policy' matches 'return items' because they're semantically similar."
              }
            ]
          }
        },
        {
          id: "5-2",
          title: "Building a RAG System",
          completed: false,
          content: {
            description: "Hands-on implementation of a RAG pipeline. Index documents and build a Q&A system.",
            sections: [
              {
                type: "heading",
                level: 2,
                content: "Complete RAG Implementation"
              },
              {
                type: "code",
                language: "python",
                filename: "rag_system.py",
                code: `from openai import OpenAI
import numpy as np
from typing import List

client = OpenAI()

class SimpleRAG:
    def __init__(self):
        self.chunks = []
        self.embeddings = []
    
    def add_document(self, text: str, chunk_size: int = 500):
        """Chunk document and generate embeddings."""
        # Simple chunking by characters (use better methods in production!)
        new_chunks = [text[i:i+chunk_size] for i in range(0, len(text), chunk_size)]
        
        # Generate embeddings
        response = client.embeddings.create(
            model="text-embedding-3-small",
            input=new_chunks
        )
        
        for chunk, emb_data in zip(new_chunks, response.data):
            self.chunks.append(chunk)
            self.embeddings.append(emb_data.embedding)
    
    def search(self, query: str, top_k: int = 3) -> List[str]:
        """Find most relevant chunks for a query."""
        # Embed the query
        response = client.embeddings.create(
            model="text-embedding-3-small",
            input=query
        )
        query_embedding = response.data[0].embedding
        
        # Calculate similarities
        similarities = []
        for emb in self.embeddings:
            sim = np.dot(query_embedding, emb)  # Cosine similarity
            similarities.append(sim)
        
        # Get top K indices
        top_indices = np.argsort(similarities)[-top_k:][::-1]
        return [self.chunks[i] for i in top_indices]
    
    def query(self, question: str) -> str:
        """Answer a question using RAG."""
        # Retrieve relevant context
        relevant_chunks = self.search(question)
        context = "\\n\\n".join(relevant_chunks)
        
        # Generate answer
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "Answer based only on the provided context. If the answer isn't in the context, say so."},
                {"role": "user", "content": f"Context:\\n{context}\\n\\nQuestion: {question}"}
            ]
        )
        
        return response.choices[0].message.content

# Usage
rag = SimpleRAG()
rag.add_document(open("company_docs.txt").read())
answer = rag.query("What's our vacation policy?")`
              },
              {
                type: "heading",
                level: 2,
                content: "Production Considerations"
              },
              {
                type: "list",
                items: [
                  "**Vector Database** — Use Pinecone, Weaviate, or Chroma for scale",
                  "**Better Chunking** — Use semantic chunking, respect document structure",
                  "**Hybrid Search** — Combine vector + keyword search",
                  "**Reranking** — Use a reranker model to improve relevance",
                  "**Metadata Filtering** — Filter by date, source, category"
                ]
              },
              {
                type: "code",
                language: "python",
                filename: "production_rag.py",
                code: `# Using a vector database (Pinecone example)
from pinecone import Pinecone

pc = Pinecone(api_key="your-key")
index = pc.Index("my-docs")

# Upsert with metadata
index.upsert(vectors=[
    {
        "id": "doc1-chunk1",
        "values": embedding,
        "metadata": {
            "source": "hr_policy.pdf",
            "page": 5,
            "date": "2024-01-15"
        }
    }
])

# Query with metadata filter
results = index.query(
    vector=query_embedding,
    top_k=5,
    filter={"source": {"$eq": "hr_policy.pdf"}}
)`
              },
              {
                type: "warning",
                content: "RAG isn't magic! Quality depends on your data, chunking strategy, and retrieval tuning. Test with real queries and iterate."
              },
              {
                type: "checkpoint",
                content: "Build a simple RAG system for a set of documents you have (could be PDFs, notes, or web pages). Test it with 10 questions and note where it succeeds or fails."
              }
            ]
          }
        }
      ]
    },
    {
      id: 6,
      title: "AI Image Generation",
      lessons: [
        {
          id: "6-1",
          title: "Image Generation Fundamentals",
          completed: false,
          content: {
            description: "Create stunning images with AI. Learn DALL-E, Midjourney, and Stable Diffusion prompting techniques.",
            sections: [
              {
                type: "text",
                content: "AI image generators transform text descriptions into visuals. The better your prompt, the better your image."
              },
              {
                type: "heading",
                level: 2,
                content: "Major Image Models"
              },
              {
                type: "list",
                items: [
                  "**DALL-E 3** — Best text rendering, easy to use (OpenAI)",
                  "**Midjourney** — Highest aesthetic quality, artistic styles",
                  "**Stable Diffusion** — Open source, run locally, most customizable",
                  "**Ideogram** — Excellent typography and logos",
                  "**Flux** — New open model with great quality"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Anatomy of a Good Image Prompt"
              },
              {
                type: "code",
                language: "text",
                filename: "image_prompt.txt",
                code: `# Basic structure:
[Subject] + [Style] + [Composition] + [Lighting] + [Details]

# Example evolution:

Basic: "A cat"
Better: "A fluffy orange cat sitting on a windowsill"
Good: "A fluffy orange tabby cat sitting on a windowsill, 
       golden hour sunlight streaming in, cozy atmosphere"
Great: "A fluffy orange tabby cat sitting on a windowsill,
        golden hour sunlight streaming in, cozy atmosphere,
        photorealistic, shallow depth of field, 
        soft bokeh background, warm color palette,
        shot on Sony A7III, 85mm lens"`
              },
              {
                type: "heading",
                level: 2,
                content: "Style Keywords"
              },
              {
                type: "code",
                language: "text",
                filename: "style_keywords.txt",
                code: `# Photography styles:
portrait, landscape, macro, aerial, street photography,
product shot, editorial, fashion photography

# Art styles:
oil painting, watercolor, digital art, concept art,
anime, pixel art, vector illustration, 3D render

# Specific artists (use ethically):
"in the style of Studio Ghibli"
"Pixar-style 3D render"
"minimalist Japanese illustration"

# Aesthetic keywords:
cinematic, moody, vibrant, ethereal, dramatic,
whimsical, dark fantasy, cyberpunk, solarpunk

# Quality boosters:
highly detailed, 8K, photorealistic, award-winning,
trending on ArtStation, masterpiece`
              },
              {
                type: "heading",
                level: 2,
                content: "DALL-E 3 API Example"
              },
              {
                type: "code",
                language: "python",
                filename: "dalle_api.py",
                code: `from openai import OpenAI

client = OpenAI()

response = client.images.generate(
    model="dall-e-3",
    prompt="A cozy coffee shop interior with warm lighting, "
           "plants on wooden shelves, exposed brick walls, "
           "morning sunlight through large windows, "
           "photorealistic, architectural photography",
    size="1024x1024",
    quality="hd",  # or "standard"
    n=1
)

image_url = response.data[0].url
print(image_url)

# DALL-E 3 may revise your prompt for safety/quality
revised_prompt = response.data[0].revised_prompt
print(f"Used prompt: {revised_prompt}")`
              },
              {
                type: "tip",
                content: "Be specific about what you DON'T want too. Use negative prompts: 'no text, no watermarks, no blur'"
              },
              {
                type: "quiz",
                question: "Which element most improves image prompt quality?",
                options: [
                  { id: "a", text: "Making it longer" },
                  { id: "b", text: "Adding specific visual details and style" },
                  { id: "c", text: "Using all caps" },
                  { id: "d", text: "Repeating words for emphasis" }
                ],
                correct: "b",
                explanation: "Specific visual details (lighting, composition, style) give the model clear guidance. Length alone doesn't help; specificity does."
              }
            ]
          }
        }
      ]
    },
    {
      id: 7,
      title: "AI Ethics & Safety",
      lessons: [
        {
          id: "7-1",
          title: "Responsible AI Use",
          completed: false,
          content: {
            description: "Navigate the ethical landscape of AI. Learn to use these powerful tools responsibly and safely.",
            sections: [
              {
                type: "text",
                content: "With great power comes great responsibility. AI can do immense good — or harm. Understanding ethics is essential for every AI practitioner."
              },
              {
                type: "heading",
                level: 2,
                content: "Key Ethical Concerns"
              },
              {
                type: "list",
                items: [
                  "**Bias** — AI can amplify existing prejudices in training data",
                  "**Misinformation** — Deepfakes and generated text can deceive",
                  "**Privacy** — AI trained on personal data raises concerns",
                  "**Job displacement** — Automation affects livelihoods",
                  "**Concentration of power** — Who controls powerful AI?"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Best Practices"
              },
              {
                type: "code",
                language: "text",
                filename: "ethics.txt",
                code: `# DO:
✓ Disclose when content is AI-generated
✓ Verify AI outputs for accuracy
✓ Consider impact on affected communities
✓ Implement human oversight for important decisions
✓ Protect user privacy and data

# DON'T:
✗ Use AI to deceive or manipulate
✗ Generate harmful, illegal, or hateful content
✗ Automate decisions that should be human
✗ Ignore AI limitations and hallucinations
✗ Share AI-generated content as fact without verification`
              },
              {
                type: "heading",
                level: 2,
                content: "Hallucinations & Limitations"
              },
              {
                type: "text",
                content: "AI can confidently state false information. This isn't lying — it's a fundamental limitation of how LLMs work."
              },
              {
                type: "warning",
                content: "NEVER use AI for: medical diagnosis, legal advice, financial decisions, or safety-critical systems without expert human review."
              },
              {
                type: "heading",
                level: 2,
                content: "Building Trustworthy AI Systems"
              },
              {
                type: "list",
                items: [
                  "**Transparency** — Tell users they're interacting with AI",
                  "**Auditability** — Log AI decisions for review",
                  "**Fallbacks** — Have human escalation paths",
                  "**Testing** — Check for bias and edge cases",
                  "**Monitoring** — Watch for misuse and failures"
                ]
              },
              {
                type: "tip",
                content: "When in doubt, ask: 'Would I be comfortable if this AI use was reported in the news?' If not, reconsider."
              },
              {
                type: "checkpoint",
                content: "Think of an AI application you want to build. List 3 potential harms and how you would mitigate each one."
              }
            ]
          }
        }
      ]
    },
    {
      id: 8,
      title: "Congratulations! 🎉",
      lessons: [
        {
          id: "8-1",
          title: "Your AI Journey",
          completed: false,
          content: {
            description: "You've completed the Generative AI fundamentals! Here's what's next on your journey to mastery.",
            sections: [
              {
                type: "text",
                content: "**Congratulations!** 🎉 You've learned the fundamentals of Generative AI. You now have the knowledge to build AI-powered applications and continue growing as an AI practitioner."
              },
              {
                type: "heading",
                level: 2,
                content: "What You've Learned"
              },
              {
                type: "list",
                items: [
                  "✅ How LLMs and Generative AI work",
                  "✅ Prompt engineering techniques",
                  "✅ AI-assisted coding and development",
                  "✅ Building AI agents with tools",
                  "✅ RAG and knowledge bases",
                  "✅ Image generation",
                  "✅ AI ethics and responsible use"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Where to Go Next"
              },
              {
                type: "list",
                items: [
                  "**Fine-tuning** — Train models on your specific data",
                  "**Multi-modal AI** — Combine text, image, audio, video",
                  "**AI Agents** — Build more complex autonomous systems",
                  "**Local LLMs** — Run models on your own hardware",
                  "**AI Products** — Build and ship AI-powered applications"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Resources to Continue Learning"
              },
              {
                type: "list",
                items: [
                  "**Documentation** — OpenAI, Anthropic, Google AI docs",
                  "**Communities** — r/LocalLLaMA, Hugging Face, Discord servers",
                  "**Courses** — DeepLearning.AI, fast.ai",
                  "**Papers** — arXiv, Papers With Code",
                  "**Practice** — Build projects, join hackathons!"
                ]
              },
              {
                type: "tip",
                content: "The best way to learn AI is by building! Pick a project that excites you and start creating. Ship something — even if it's imperfect."
              },
              {
                type: "text",
                content: "The AI revolution is just beginning, and you're now part of it. Keep learning, keep building, and remember — the future is being written right now. You've got this! 🚀🤖"
              }
            ]
          }
        }
      ]
    }
  ]
};
