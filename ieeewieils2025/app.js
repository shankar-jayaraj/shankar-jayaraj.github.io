// Application Data
const APP_DATA = {
  personas: [
    {
      name: 'Academia',
      color: '#1E3A8A',
      tools: ['Perplexity', 'VOSviewer', 'Notion AI', 'Zotero', 'Scispace', 'Lit maps', 'Draw.io', 'Overleaf', 'QuillBot', 'Paperpal', 'Notero', 'R Discovery', 'Connected Papers', 'Research Rabbit']
    },
    {
      name: 'Industry', 
      color: '#06B6D4',
      tools: ['Comet Browser', 'Cursor', 'GitHub Copilot', 'Zapier AI', 'Fireflies / tl:dv', 'Notion AI', 'Motion AI']
    },
    {
      name: 'Entrepreneurs',
      color: '#7C3AED', 
      tools: ['ChatGPT (OpenAI)', 'Canva AI (Magic Studio)', 'Jasper AI', 'Gamma', 'PrometAI', 'HeyGen', 'HubSpot', 'Zapier AI']
    },
    {
      name: 'Students',
      color: '#059669',
      tools: ['ChatGPT (Free)', 'Google AI Pro', 'Grammarly', 'Quillbot', 'Socratic by Google', 'Photomath', 'Wolfram Alpha', 'Notion', 'Otter.AI']
    }
  ],
  
  tools: {
    'Perplexity': {
      persona: 'Academia',
      category: 'Research & Discovery',
      pricing: 'Free / Pro $20/month',
      description: 'Answer engine powering AI workflows',
      features: [
        'Deep Research mode for autonomous reports',
        'Citation-backed responses',
        'Focus Mode for specific domains',
        '93.9% accuracy on benchmarks'
      ],
      useCase1: {
        title: 'Literature Review',
        prompt: 'Create a comprehensive literature review on [topic]. Identify the 15 most cited articles published in the last 5 years, summarize their key findings, methodologies used, and provide complete publication details.',
        timeSaved: '3-4 hours → 30 minutes'
      },
      useCase2: {
        title: 'Research Gap Analysis', 
        prompt: 'Analyze the current research landscape on [topic] from the past 3 years. Identify specific research gaps, unexplored questions, or methodological limitations.',
        energySaved: 'High cognitive load → Guided analysis'
      },
      website: 'https://pplx.ai/ieee'
    },
    
    'Comet Browser': {
      persona: 'Industry',
      category: 'AI-Powered Browsing',
      pricing: 'FREE since October 2025',
      description: 'AI browser by Perplexity (FREE since October 2025)',
      features: [
        'Workspace organization',
        'AI sidebar assistant', 
        'Multi-tab synthesis',
        'Email summarization'
      ],
      useCase1: {
        title: 'Multi-tab Research',
        prompt: 'Compare the methodologies used in these three open tabs and create a comparison table',
        timeSaved: '20 minutes → 2 minutes'
      },
      useCase2: {
        title: 'Email Triage',
        prompt: 'Summarize today\'s important emails and identify action items with deadlines', 
        energySaved: 'Morning overwhelm → Clear priorities'
      },
      website: 'https://pplx.ai/ieee'
    },
    
    'NotebookLM': {
      persona: 'Academia',
      category: 'Research Assistant',
      pricing: 'Free (Google)',
      description: 'AI-powered notebook that helps you understand and work with your documents',
      features: [
        'Source-grounded AI responses',
        'Document analysis and synthesis',
        'Interactive note-taking',
        'Citation tracking'
      ],
      useCase1: {
        title: 'Document Analysis',
        prompt: 'Analyze these research papers and identify the common themes, methodologies, and key findings across all documents.',
        timeSaved: '2-3 hours → 20 minutes'
      },
      useCase2: {
        title: 'Research Synthesis',
        prompt: 'Create a comprehensive summary combining insights from all uploaded sources, highlighting contradictions and agreements.',
        energySaved: 'Information overload → Clear synthesis'
      },
      website: 'https://notebooklm.google.com'
    },
    
    'SciSpace': {
      persona: 'Academia',
      category: 'Academic Research',
      pricing: 'Free / Premium $20/month',
      description: 'AI copilot for research papers with explanation and summarization features',
      features: [
        'Paper explanation and summary',
        'Question answering from PDFs',
        'Citation finder',
        'Research assistant'
      ],
      useCase1: {
        title: 'Paper Understanding',
        prompt: 'Explain this complex research paper in simple terms, highlighting the main contributions and methodological innovations.',
        timeSaved: '1-2 hours → 15 minutes'
      },
      useCase2: {
        title: 'Research Questions',
        prompt: 'Based on this paper, generate 5 potential research questions that could extend this work.',
        energySaved: 'Creative block → Directed inspiration'
      },
      website: 'https://scispace.com'
    },
    
    'Paperpal': {
      persona: 'Academia',
      category: 'Academic Writing',
      pricing: 'Free / Premium $19/month',
      description: 'AI writing assistant specialized for academic and research writing',
      features: [
        'Grammar and style checking',
        'Academic tone suggestions',
        'Citation formatting',
        'Plagiarism detection'
      ],
      useCase1: {
        title: 'Manuscript Review',
        prompt: 'Review this manuscript section for academic writing quality, suggest improvements for clarity and conciseness.',
        timeSaved: '3-4 hours → 45 minutes'
      },
      useCase2: {
        title: 'Abstract Writing',
        prompt: 'Help me write a compelling abstract for this research paper that follows journal guidelines and highlights key contributions.',
        energySaved: 'Writer\'s block → Structured approach'
      },
      website: 'https://paperpal.com'
    },
    
    'Semantic Scholar': {
      persona: 'Academia',
      category: 'Literature Search',
      pricing: 'Free',
      description: 'AI-powered academic search engine for discovering and understanding research',
      features: [
        'Semantic search capabilities',
        'Citation analysis',
        'Research trends identification',
        'Paper recommendations'
      ],
      useCase1: {
        title: 'Literature Discovery',
        prompt: 'Find papers related to [topic] that have high citation counts and recent publication dates, focusing on novel methodologies.',
        timeSaved: '2-3 hours → 30 minutes'
      },
      useCase2: {
        title: 'Citation Analysis',
        prompt: 'Analyze the citation network around this seminal paper to understand its impact and find related influential works.',
        energySaved: 'Manual tracking → Automated insights'
      },
      website: 'https://semanticscholar.org'
    },
    
    'Motion AI': {
      persona: 'Industry',
      category: 'Productivity & Planning',
      pricing: 'Premium $34/month',
      description: 'AI-powered calendar and task management with intelligent scheduling',
      features: [
        'Smart task scheduling',
        'Calendar optimization',
        'Meeting preparation',
        'Priority-based planning'
      ],
      useCase1: {
        title: 'Schedule Optimization',
        prompt: 'Analyze my calendar and suggest optimal time blocks for deep work, considering my energy levels and meeting patterns.',
        timeSaved: '30 minutes daily → 5 minutes'
      },
      useCase2: {
        title: 'Task Prioritization',
        prompt: 'Review my task list and deadlines, then suggest a priority order considering dependencies and importance.',
        energySaved: 'Decision fatigue → Clear priorities'
      },
      website: 'https://motion.ai'
    },
    
    'Notion AI': {
      persona: 'Industry',
      category: 'Knowledge Management',
      pricing: '$10/month add-on',
      description: 'AI assistant integrated into Notion workspace for content creation and organization',
      features: [
        'Content generation and editing',
        'Data extraction from text',
        'Meeting notes summarization',
        'Template automation'
      ],
      useCase1: {
        title: 'Meeting Documentation',
        prompt: 'Summarize this meeting transcript into action items, decisions made, and follow-up tasks with assigned owners.',
        timeSaved: '45 minutes → 10 minutes'
      },
      useCase2: {
        title: 'Project Planning',
        prompt: 'Create a comprehensive project plan with milestones, dependencies, and resource requirements based on this brief.',
        energySaved: 'Blank page syndrome → Structured framework'
      },
      website: 'https://notion.ai'
    },
    
    'Shortwave': {
      persona: 'Industry',
      category: 'Email Management',
      pricing: '$7/month',
      description: 'AI-powered email client with smart organization and response suggestions',
      features: [
        'AI email composition',
        'Smart email bundling',
        'Priority detection',
        'Response suggestions'
      ],
      useCase1: {
        title: 'Email Triage',
        prompt: 'Analyze my inbox and categorize emails by priority, urgency, and required action type.',
        timeSaved: '20 minutes → 3 minutes'
      },
      useCase2: {
        title: 'Response Drafting',
        prompt: 'Draft professional responses to these customer inquiries, maintaining our brand tone and addressing all concerns.',
        energySaved: 'Context switching → Focused responses'
      },
      website: 'https://shortwave.com'
    },
    
    'Cursor': {
      persona: 'Industry',
      category: 'Code Editor',
      pricing: 'Free / Pro $20/month',
      description: 'AI-first code editor and IDE',
      features: ['AI code completion', 'Smart debugging', 'Code generation', 'Context awareness'],
      useCase1: { title: 'Code Generation', prompt: 'Generate functions and classes based on natural language descriptions', timeSaved: '2 hours → 30 minutes' },
      useCase2: { title: 'Bug Fixing', prompt: 'Identify and fix code issues with AI assistance', energySaved: 'Debugging stress → Guided solutions' },
      website: 'https://cursor.sh'
    },
    'GitHub Copilot': {
      persona: 'Industry',
      category: 'Code Assistance',
      pricing: '$10/month',
      description: 'Code assistance',
      features: ['AI code suggestions', 'Multi-language support', 'Context-aware completions', 'Code explanations'],
      useCase1: { title: 'Code Completion', prompt: 'Get AI-powered code suggestions while programming', timeSaved: '30% faster coding' },
      useCase2: { title: 'Code Learning', prompt: 'Learn new programming patterns through AI suggestions', energySaved: 'Research time → Immediate learning' },
      website: 'https://github.com/features/copilot'
    },
    'Fireflies / tl:dv': {
      persona: 'Industry',
      category: 'Meeting Assistant',
      pricing: 'Free / Premium',
      description: 'Meeting AI notetaker',
      features: ['Meeting transcription', 'Action item extraction', 'Summary generation', 'Integration with tools'],
      useCase1: { title: 'Meeting Notes', prompt: 'Automatically transcribe and summarize meeting discussions', timeSaved: '45 minutes → 5 minutes' },
      useCase2: { title: 'Action Items', prompt: 'Extract action items and follow-ups from meetings', energySaved: 'Note-taking stress → Focused participation' },
      website: 'https://fireflies.ai'
    },
    'Zapier AI': {
      persona: 'Industry',
      category: 'Workflow Automation',
      pricing: '$29.99/month', 
      description: 'Workflow automation',
      features: [
        'Natural language automation',
        'App integration hub',
        'Smart trigger detection',
        'Workflow optimization'
      ],
      useCase1: {
        title: 'Process Automation',
        prompt: 'Create a workflow that automatically updates our CRM when new leads come from our website contact form.',
        timeSaved: '2 hours weekly → Automated'
      },
      useCase2: {
        title: 'Data Synchronization',
        prompt: 'Set up automatic synchronization between our project management tool and time tracking system.',
        energySaved: 'Manual data entry → Seamless sync'
      },
      website: 'https://zapier.com'
    },
    
    'ChatGPT (OpenAI)': {
      persona: 'Entrepreneurs',
      category: 'General AI Assistant',
      pricing: 'Plus $20/month / Pro $200/month',
      description: 'General AI assistant',
      features: [
        'Creative brainstorming',
        'Code generation',
        'Content creation',
        'Strategic planning'
      ],
      useCase1: {
        title: 'Business Strategy',
        prompt: 'Analyze my startup idea for [industry] and provide a SWOT analysis, market opportunities, and strategic recommendations.',
        timeSaved: '4-6 hours → 1 hour'
      },
      useCase2: {
        title: 'Content Marketing',
        prompt: 'Create a 30-day content calendar for my B2B SaaS startup, including blog topics, social media posts, and email campaigns.',
        energySaved: 'Creative blocks → Structured content plan'
      },
      website: 'https://chatgpt.com'
    },
    
    'Jasper AI': {
      persona: 'Entrepreneurs',
      category: 'Content Creation',
      pricing: 'Creator $49/month / Pro $69/month',
      description: 'Marketing content generation',
      features: [
        'Brand voice training',
        'Multi-channel content',
        'Campaign creation',
        'Performance analytics'
      ],
      useCase1: {
        title: 'Marketing Copy',
        prompt: 'Create compelling ad copy for our new product launch across Google Ads, Facebook, and LinkedIn, maintaining consistent brand voice.',
        timeSaved: '3-4 hours → 45 minutes'
      },
      useCase2: {
        title: 'Email Campaigns',
        prompt: 'Design a 5-email nurture sequence for our B2B prospects, focusing on pain points and solution benefits.',
        energySaved: 'Copywriter dependency → Self-sufficient creation'
      },
      website: 'https://jasper.ai'
    },
    
    'Canva AI (Magic Studio)': {
      persona: 'Entrepreneurs',
      category: 'Visual Design',
      pricing: 'FREE / Pro $15/month',
      description: 'Design and visual content',
      features: [
        'AI image generation',
        'Smart template suggestions',
        'Brand kit automation',
        'Social media optimization'
      ],
      useCase1: {
        title: 'Brand Materials',
        prompt: 'Create a cohesive set of social media templates, business cards, and presentation slides using our brand colors and style.',
        timeSaved: '6-8 hours → 2 hours'
      },
      useCase2: {
        title: 'Marketing Visuals',
        prompt: 'Design eye-catching infographics that explain our complex technical product in simple, visually appealing ways.',
        energySaved: 'Designer dependency → In-house creation'
      },
      website: 'https://canva.com'
    },
    
    'Gamma': {
      persona: 'Entrepreneurs',
      category: 'Presentation Creation',
      pricing: 'Plus $10/month / Pro $20/month',
      description: 'AI presentations',
      features: [
        'AI slide generation',
        'Smart content organization',
        'Design templates',
        'Interactive elements'
      ],
      useCase1: {
        title: 'Investor Pitch',
        prompt: 'Create a compelling 15-slide investor pitch deck for my fintech startup, including market analysis, business model, and financial projections.',
        timeSaved: '8-10 hours → 2 hours'
      },
      useCase2: {
        title: 'Sales Presentations',
        prompt: 'Build a customizable sales deck that adapts to different client industries while highlighting our core value propositions.',
        energySaved: 'Presentation anxiety → Confident delivery'
      },
      website: 'https://gamma.app'
    },
    
    'PrometAI': {
      persona: 'Entrepreneurs',
      category: 'Business Planning',
      pricing: 'FREE',
      description: 'Business plan generator (FREE)',
      features: ['Business plan generation', 'Market analysis', 'Financial projections', 'Strategy templates'],
      useCase1: { title: 'Business Planning', prompt: 'Create a comprehensive business plan for my startup idea', timeSaved: '20 hours → 2 hours' },
      useCase2: { title: 'Market Analysis', prompt: 'Generate market analysis and competitive landscape', energySaved: 'Research overwhelm → Structured insights' },
      website: 'https://prometai.co'
    },
    'HeyGen': {
      persona: 'Entrepreneurs',
      category: 'Video Creation',
      pricing: '$29/month',
      description: 'AI video creation',
      features: ['AI avatars', 'Video generation', 'Multi-language support', 'Custom branding'],
      useCase1: { title: 'Marketing Videos', prompt: 'Create professional marketing videos with AI avatars', timeSaved: '8 hours → 1 hour' },
      useCase2: { title: 'Training Content', prompt: 'Generate training videos for team onboarding', energySaved: 'Video production costs → In-house creation' },
      website: 'https://heygen.com'
    },
    'HubSpot': {
      persona: 'Entrepreneurs',
      category: 'CRM & Marketing',
      pricing: 'FREE tier available',
      description: 'CRM with AI (FREE tier)',
      features: [
        'Smart lead scoring',
        'Automated email sequences',
        'Predictive analytics',
        'Content optimization'
      ],
      useCase1: {
        title: 'Lead Qualification',
        prompt: 'Analyze our lead database and identify the highest-value prospects based on behavior, company profile, and engagement patterns.',
        timeSaved: '4 hours weekly → 30 minutes'
      },
      useCase2: {
        title: 'Sales Forecasting',
        prompt: 'Generate accurate sales forecasts based on pipeline data, historical trends, and current market conditions.',
        energySaved: 'Guesswork → Data-driven predictions'
      },
      website: 'https://hubspot.com'
    },
    
    'ChatGPT (Free)': {
      persona: 'Students',
      category: 'Study Assistant',
      pricing: 'Free',
      description: 'Study assistant and concept explanation',
      features: [
        'Homework help',
        'Concept explanations',
        'Essay brainstorming',
        'Study planning'
      ],
      useCase1: {
        title: 'Concept Learning',
        prompt: 'Explain [complex topic] in simple terms with examples, then quiz me to test my understanding.',
        timeSaved: '2-3 hours → 45 minutes'
      },
      useCase2: {
        title: 'Assignment Planning',
        prompt: 'Help me break down this large assignment into manageable tasks with realistic timelines and milestones.',
        energySaved: 'Overwhelm → Structured approach'
      },
      website: 'https://chatgpt.com'
    },
    
    'Google AI Pro': {
      persona: 'Students',
      category: 'AI Assistant',
      pricing: 'Free for students',
      description: 'Free for students with .edu email (Gemini + NotebookLM)',
      features: ['AI assistance', 'Research help', 'Note-taking', 'Academic support'],
      useCase1: { title: 'Research Assistance', prompt: 'Help with research projects using Gemini and NotebookLM', timeSaved: '3 hours → 1 hour' },
      useCase2: { title: 'Study Support', prompt: 'Get personalized learning assistance for coursework', energySaved: 'Study struggles → Guided learning' },
      website: 'https://ai.google.dev/'
    },
    'Quillbot': {
      persona: 'Students',
      category: 'Writing Enhancement',
      pricing: 'Free / Premium',
      description: 'Paraphrasing and summarizing',
      features: [
        'Intelligent paraphrasing',
        'Grammar checking',
        'Tone adjustment',
        'Plagiarism prevention'
      ],
      useCase1: {
        title: 'Essay Improvement',
        prompt: 'Paraphrase this paragraph to improve clarity while maintaining the original meaning and academic tone.',
        timeSaved: '1 hour → 10 minutes'
      },
      useCase2: {
        title: 'Source Integration',
        prompt: 'Help me integrate these quotes and sources smoothly into my essay while avoiding plagiarism.',
        energySaved: 'Writing anxiety → Confident composition'
      },
      website: 'https://quillbot.com'
    },
    
    'Grammarly': {
      persona: 'Students',
      category: 'Writing Assistant',
      pricing: 'Free / Premium',
      description: 'Writing improvement and grammar check',
      features: [
        'Real-time grammar checking',
        'Style suggestions',
        'Clarity improvements',
        'Tone detection'
      ],
      useCase1: {
        title: 'Essay Editing',
        prompt: 'Review my essay for grammar, clarity, and style while ensuring it meets academic standards.',
        timeSaved: '2 hours → 30 minutes'
      },
      useCase2: {
        title: 'Email Communication',
        prompt: 'Help me write professional emails to professors and potential supervisors with appropriate tone and clarity.',
        energySaved: 'Communication anxiety → Professional confidence'
      },
      website: 'https://grammarly.com'
    },
    
    'Socratic by Google': {
      persona: 'Students',
      category: 'Learning Support',
      pricing: 'Free',
      description: 'Photo-based homework help',
      features: [
        'Step-by-step solutions',
        'Concept explanations',
        'Visual learning aids',
        'Subject coverage'
      ],
      useCase1: {
        title: 'Problem Solving',
        prompt: 'Walk me through this math/science problem step-by-step, explaining the reasoning behind each step.',
        timeSaved: '30 minutes → 10 minutes'
      },
      useCase2: {
        title: 'Concept Reinforcement',
        prompt: 'I\'m struggling with [concept]. Explain it using different approaches and examples until I understand.',
        energySaved: 'Frustration → Understanding'
      },
      website: 'https://socratic.org'
    },
    
    'Photomath': {
      persona: 'Students',
      category: 'Math Solver',
      pricing: 'Free',
      description: 'Visual math problem solver',
      features: ['Step-by-step solutions', 'Photo recognition', 'Multiple methods', 'Detailed explanations'],
      useCase1: { title: 'Math Problems', prompt: 'Solve complex math problems with step-by-step explanations', timeSaved: '30 minutes → 5 minutes' },
      useCase2: { title: 'Concept Learning', prompt: 'Understand math concepts through visual problem solving', energySaved: 'Math anxiety → Confidence' },
      website: 'https://photomath.com'
    },
    'Wolfram Alpha': {
      persona: 'Students',
      category: 'Computational Engine',
      pricing: 'Free / Pro',
      description: 'Computational knowledge for STEM',
      features: ['Mathematical computations', 'Scientific calculations', 'Data analysis', 'Step-by-step solutions'],
      useCase1: { title: 'STEM Problems', prompt: 'Solve complex STEM problems with detailed computations', timeSaved: '1 hour → 10 minutes' },
      useCase2: { title: 'Data Analysis', prompt: 'Perform statistical and scientific analysis', energySaved: 'Manual calculations → Instant results' },
      website: 'https://wolframalpha.com'
    },
    'Notion': {
      persona: 'Students',
      category: 'Organization & Notes',
      pricing: 'FREE for students',
      description: 'Note-taking and organization (FREE for students)',
      features: [
        'Note organization',
        'Task management',
        'Template library',
        'Collaboration tools'
      ],
      useCase1: {
        title: 'Study Organization',
        prompt: 'Create a comprehensive study system that organizes my notes, assignments, and deadlines across all subjects.',
        timeSaved: '2 hours setup → Ongoing efficiency'
      },
      useCase2: {
        title: 'Project Management',
        prompt: 'Set up a system to track group projects, deadlines, and collaborative tasks with my classmates.',
        energySaved: 'Chaos → Organized collaboration'
      },
      website: 'https://notion.so'
    },
    'Lit maps': {
      persona: 'Academia',
      category: 'Literature Review',
      pricing: 'Free',
      description: 'Visual literature review',
      features: ['Visual mapping', 'Literature connections', 'Research exploration', 'Citation networks'],
      useCase1: { title: 'Literature Visualization', prompt: 'Create visual maps of literature relationships', timeSaved: '3 hours → 45 minutes' },
      useCase2: { title: 'Research Exploration', prompt: 'Explore research landscapes visually', energySaved: 'Information overwhelm → Clear structure' },
      website: 'https://litmaps.co'
    },
    'Draw.io': {
      persona: 'Academia',
      category: 'Diagram Creation',
      pricing: 'Free',
      description: 'Create diagrams',
      features: ['Flowcharts', 'Network diagrams', 'Process maps', 'Technical drawings'],
      useCase1: { title: 'Research Flowcharts', prompt: 'Create methodology flowcharts for research papers', timeSaved: '2 hours → 30 minutes' },
      useCase2: { title: 'Concept Maps', prompt: 'Visualize complex concepts and relationships', energySaved: 'Abstract thinking → Visual clarity' },
      website: 'https://draw.io'
    },
    'Overleaf': {
      persona: 'Academia',
      category: 'Academic Writing',
      pricing: 'Free / Premium',
      description: 'Online LaTeX editor',
      features: ['LaTeX editing', 'Collaboration', 'Template library', 'Version control'],
      useCase1: { title: 'Academic Papers', prompt: 'Write and format academic papers collaboratively', timeSaved: '1 hour formatting → 5 minutes' },
      useCase2: { title: 'Thesis Writing', prompt: 'Manage long-form academic documents efficiently', energySaved: 'Formatting stress → Focus on content' },
      website: 'https://overleaf.com'
    },
    'QuillBot': {
      persona: 'Academia',
      category: 'Writing Enhancement',
      pricing: 'Free / Premium',
      description: 'Academic writing',
      features: ['Paraphrasing', 'Grammar checking', 'Tone adjustment', 'Citation help'],
      useCase1: { title: 'Academic Paraphrasing', prompt: 'Paraphrase technical content while maintaining accuracy', timeSaved: '1 hour → 15 minutes' },
      useCase2: { title: 'Writing Enhancement', prompt: 'Improve academic writing clarity and flow', energySaved: 'Writing blocks → Smooth prose' },
      website: 'https://quillbot.com'
    },
    'Notero': {
      persona: 'Academia',
      category: 'Note Integration',
      pricing: 'Free',
      description: 'Zotero plugin for Notion',
      features: ['Zotero integration', 'Note synchronization', 'Citation linking', 'Research organization'],
      useCase1: { title: 'Research Integration', prompt: 'Sync Zotero references with Notion notes seamlessly', timeSaved: '30 minutes → 2 minutes' },
      useCase2: { title: 'Note Organization', prompt: 'Organize research notes with citation links', energySaved: 'Scattered notes → Integrated system' },
      website: 'https://notion.so/product/notion-web-clipper'
    },
    'R Discovery': {
      persona: 'Academia',
      category: 'Research Discovery',
      pricing: 'Free',
      description: 'Research discovery',
      features: ['Paper recommendations', 'Research trends', 'Collaboration discovery', 'Field insights'],
      useCase1: { title: 'Research Trends', prompt: 'Discover emerging trends in [research field]', timeSaved: '2 hours → 20 minutes' },
      useCase2: { title: 'Collaboration Finding', prompt: 'Find potential research collaborators and projects', energySaved: 'Networking challenges → Targeted connections' },
      website: 'https://rdiscovery.com'
    },
    'Connected Papers': {
      persona: 'Academia',
      category: 'Literature Mapping',
      pricing: 'Free',
      description: 'Literature mapping',
      features: ['Paper connections', 'Visual graphs', 'Citation analysis', 'Research exploration'],
      useCase1: { title: 'Literature Connections', prompt: 'Map connections between research papers visually', timeSaved: '1.5 hours → 15 minutes' },
      useCase2: { title: 'Research Exploration', prompt: 'Explore related work systematically', energySaved: 'Random browsing → Systematic discovery' },
      website: 'https://connectedpapers.com'
    }
  },
  
  prompts: {
    'Research & Learning': [
      {
        title: 'Learn Any Complex Concept (Feynman Technique)',
        tool: 'ChatGPT, Claude, Gemini',
        useCase: 'Deep learning with first principles',
        prompt: 'As a seasoned IIT/MIT professor renowned for simplifying complex concepts, use the Feynman technique and a paper-and-pen method to teach \'[INSERT TOPIC]\'. Begin from the first principles and gradually progress to an advanced level, focusing on real-world applications and project-based implementation.\n\n1. Structure the content systematically: Break it into well-defined modules or sections to ensure step-by-step learning. Each module should build upon the previous one for seamless progression.\n\n2. Explain with clarity: Use detailed explanations, mathematical expressions, computations, figures, and illustrations to provide a deep understanding of the concepts. Ensure that learners can grasp both theoretical foundations and practical aspects.\n\n3. Practical focus: Include real-world use cases, examples, and project ideas to demonstrate how the concepts can be applied in practice.\n\n4. Verification: Ensure that all content is factually accurate and up-to-date with current knowledge in the field.\n\n5. Engage learners: Present the material in an interactive and note-friendly format, encouraging active participation and critical thinking.\n\nNow, take a deep breath, focus on delivering high-quality content step by step, and guide learners through this journey effectively.',
        outcome: 'Comprehensive learning module with practical applications',
        timeSaved: 'Best For: Academia, Students'
      },
      {
        title: 'Prevent AI Hallucinations in Research',
        tool: 'ChatGPT, Claude, Perplexity',
        useCase: 'Accurate, verified information gathering',
        prompt: 'First, analyse the requirements. You\'re allowed to read as many files as you need. Your goal is to figure out what we need to do to complete this task. Do NOT implement anything yet. Think as long and as hard as you need. Take a deep breath and approach this task step by step. If you dont know, read as many files as you need to get an answer, if you didnt get an answer or do not know tell me.',
        outcome: 'Verified, accurate research with sources',
        timeSaved: 'Best For: Academia, Industry, Entrepreneurs'
      }
    ],
    'Productivity & Content': [
      {
        title: 'Optimize Any Prompt (Lyra Method)',
        tool: 'ChatGPT, Claude',
        useCase: 'Transform vague requests into precision prompts',
        prompt: 'You are Lyra, a master-level AI prompt optimization specialist. Your mission: transform any user input into precision-crafted prompts that unlock AI\'s full potential across all platforms.\n\n## THE 4-D METHODOLOGY\n\n### 1. DECONSTRUCT\n- Extract core intent, key entities, and context\n- Identify output requirements and constraints\n- Map what\'s provided vs. what\'s missing\n\n### 2. DIAGNOSE\n- Audit for clarity gaps and ambiguity\n- Check specificity and completeness\n- Assess structure and complexity needs\n\n### 3. DEVELOP\n- Select optimal techniques based on request type:\n  - **Creative** → Multi-perspective + tone emphasis\n  - **Technical** → Constraint-based + precision focus\n  - **Educational** → Few-shot examples + clear structure\n  - **Complex** → Chain-of-thought + systematic frameworks\n- Assign appropriate AI role/expertise\n- Enhance context and implement logical structure\n\n### 4. DELIVER\n- Construct optimized prompt\n- Format based on complexity\n- Provide implementation guidance\n\n## OPTIMIZATION TECHNIQUES\n**Foundation:** Role assignment, context layering, output specs, task decomposition\n**Advanced:** Chain-of-thought, few-shot learning, multi-perspective analysis, constraint optimization\n\n## OPERATING MODES\n**DETAIL MODE:** Gather context, ask 2-3 clarifying questions, comprehensive optimization\n**BASIC MODE:** Quick fix, core techniques only, ready-to-use prompt\n\nStart by understanding the user\'s rough prompt, then optimize it using the 4-D methodology.',
        outcome: 'Optimized, high-performance prompts',
        timeSaved: 'Best For: All Users'
      },
      {
        title: 'Transform Achievements into Viral LinkedIn Posts',
        tool: 'ChatGPT, Claude',
        useCase: 'Educational content from personal milestones',
        prompt: 'You are an expert LinkedIn content strategist who transforms personal achievements into high-value educational content optimized for saves, shares, and engagement.\n\nAsk me about my achievement, then create a structured post following this framework:\n\nHOOK (Lines 1-3): Start with relatable problem, NOT the achievement\nCURIOSITY OPENER: Emotional struggle + unexpected outcome\nREALITY CHECK: Bust 2-3 common myths\nMETRICS COMPARISON: Before vs After with timeline\nTHE FRAMEWORK: 7-10 specific action steps with examples\nTOOLS & RESOURCES: Specific tools used\nWHAT DIDN\'T WORK: 3 mistakes and lessons\nTIMELINE BREAKDOWN: Week-by-week expectations\nCRITICAL SUCCESS FACTORS: 3 things that mattered most\nWHEN THIS WON\'T WORK: Anti-patterns\nACTION PLAN: Start this week steps\nPRO TIPS: 3 advanced insights\nENGAGEMENT CTA: 2 questions for audience\n\nRULES:\n- Maximum 3 lines per paragraph\n- Maximum 48 characters per line\n- 1,200-1,500 characters total\n- Maximum 2 emojis\n- Optimize for mobile reading\n\nWhat achievement would you like to share?',
        outcome: 'High-engagement LinkedIn educational post',
        timeSaved: 'Best For: All Users (Personal Branding)'
      }
    ],
    'Visual & Creative': [
      {
        title: 'Create Professional Display Graphics',
        tool: 'DALL-E, Midjourney, Stable Diffusion',
        useCase: 'Visual content for presentations and marketing',
        prompt: 'Create a professional storefront window display featuring a large white motivational poster with bold black typography. The display shows [YOUR TEXT HERE] arranged in multiple lines of varying text sizes for visual hierarchy. The poster is mounted in a sleek black metal window frame structure, positioned as a freestanding display unit in front of large glass storefront windows. The background shows a modern retail environment with clean glass facades and urban architecture. Include natural lighting with soft shadows from overhead tree foliage creating dappled light patterns. The setting is a contemporary shopping district with polished concrete or stone flooring. Style: Clean, modern, minimalist commercial photography with high contrast between the white poster and black frame. Professional retail photography aesthetic with sharp focus on the typography and crisp architectural details.\n\nCUSTOMIZABLE ELEMENTS:\n- Text Content: [Insert your message]\n- Attribution: [Your name]\n- Frame Color: [black / white / silver / bronze / gold]\n- Lighting: [bright daylight / golden hour / overcast]\n- Environment: [shopping street / tech campus / corporate plaza]',
        outcome: 'Professional signboard/display graphics',
        timeSaved: 'Best For: Entrepreneurs, Industry'
      }
    ],
    'Academic & Professional': [
      {
        title: 'Write Research Grant Methods Section',
        tool: 'ChatGPT, Claude',
        useCase: 'Secure research funding with structured methodology',
        prompt: 'I am writing the methods section for a research grant focused on [INSERT RESEARCH FOCUS]. The purpose of the grant is to secure $350,000 for the successful execution of my research, which aims to [INSERT CORE OBJECTIVE].\n\nPlease structure the methods section by addressing the following components:\n\n1. Study Design: Outline the overall research design (experimental, observational, qualitative, mixed-methods) and justify why this approach is appropriate. Include timeline and phases.\n\n2. Participants/Subjects: Detail recruitment strategy, eligibility criteria, sample size, ethical considerations, and informed consent procedures.\n\n3. Data Collection Methods: Explain tools, instruments, or techniques for data collection. Specify quality assurance, calibration, or validation procedures.\n\n4. Intervention/Experimental Procedure: Describe intervention or experimental conditions, control groups, randomization methods, and bias controls.\n\n5. Data Analysis: Provide detailed analysis plan including statistical methods or qualitative approaches. Outline software/tools and result interpretation.\n\n6. Expected Outcomes: Discuss anticipated results and contribution to advancing knowledge. Address limitations and mitigation strategies.\n\n7. Dissemination Plan: Describe how findings will be shared with academic, professional, and community audiences. Mention conferences, publications, outreach.\n\nEmphasize innovation, scalability, societal impact, and alignment with funding body\'s priorities. Tone should be clear, concise, and evidence-based.',
        outcome: 'Professional research grant methods section',
        timeSaved: 'Best For: Academia'
      }
    ],
    Academia: {
      'Perplexity AI': [
        {
          title: 'Literature Review',
          prompt: 'Create a comprehensive literature review on [topic]. Identify the 15 most cited articles published in the last 5 years, summarize their key findings, methodologies used, and provide complete publication details.',
          outcome: 'Structured literature review with citations and analysis',
          timeSaved: '3-4 hours → 30 minutes'
        },
        {
          title: 'Research Gap Analysis',
          prompt: 'Analyze the current research landscape on [topic] from the past 3 years. Identify specific research gaps, unexplored questions, or methodological limitations.',
          outcome: 'Clear identification of research opportunities',
          timeSaved: 'High cognitive load → Guided analysis'
        }
      ],
      'ChatGPT': [
        {
          title: 'Research Paper Structure',
          prompt: 'Help me structure a research paper on [topic]. Suggest section headings, key points to cover in each section, and relevant methodological approaches.',
          outcome: 'Well-structured research framework',
          timeSaved: '2 hours → 30 minutes'
        },
        {
          title: 'Research Question Generation',
          prompt: 'Generate 20 potential research questions exploring [topic] from different angles. Rate each by feasibility and innovation potential.',
          outcome: 'Comprehensive research question bank',
          timeSaved: 'Creative block → Directed inspiration'
        }
      ]
    },
    
    Industry: {
      'Perplexity AI': [
        {
          title: 'Technical Comparison',
          prompt: 'Compare the technical specifications across these three vendor proposals [paste or describe] and create a decision matrix with pros, cons, and recommendations.',
          outcome: 'Comprehensive vendor analysis',
          timeSaved: '3 hours → 45 minutes'
        },
        {
          title: 'Email Summarization',
          prompt: 'Summarize today\'s important emails, categorize by urgency (immediate, today, this week, FYI), and identify action items with deadlines.',
          outcome: 'Organized email workflow',
          timeSaved: '30 minutes → 5 minutes'
        }
      ],
      'ChatGPT': [
        {
          title: 'Code Review',
          prompt: 'Review this code for security vulnerabilities, performance issues, and best practice violations: [paste code]',
          outcome: 'Comprehensive code analysis',
          timeSaved: '2 hours → 30 minutes'
        },
        {
          title: 'Project Proposal',
          prompt: 'Draft a project proposal for [project name] including objectives, timeline, resource requirements, risks, and success metrics.',
          outcome: 'Professional project proposal',
          timeSaved: '4 hours → 1 hour'
        }
      ]
    },
    
    Entrepreneurs: {
      'Perplexity AI': [
        {
          title: 'Market Research',
          prompt: 'Create a 90-day launch plan for [startup idea] including milestones, budget allocation, key metrics, and risk mitigation strategies.',
          outcome: 'Comprehensive launch roadmap',
          timeSaved: '6 hours → 1.5 hours'
        },
        {
          title: 'Competitor Analysis',
          prompt: 'Analyze competitors [A, B, C] in [market]. Create SWOT analysis and suggest positioning strategy for differentiation.',
          outcome: 'Strategic competitive analysis',
          timeSaved: '4 hours → 45 minutes'
        }
      ],
      'ChatGPT': [
        {
          title: 'Content Calendar',
          prompt: 'Create a content calendar for [business] targeting [audience]. Include 30 post ideas across blog, social media, and email with topics and formats.',
          outcome: 'Complete content strategy',
          timeSaved: '8 hours → 2 hours'
        },
        {
          title: 'Pitch Deck Script',
          prompt: 'Write a pitch deck script for [startup]. Cover problem, solution, market size, business model, traction, team, and ask in compelling narrative.',
          outcome: 'Compelling investor story',
          timeSaved: '6 hours → 1.5 hours'
        }
      ]
    },
    
    Students: {
      'Perplexity AI': [
        {
          title: 'Concept Explanation',
          prompt: 'Explain [complex STEM concept] as if I\'m learning it for the first time. Use analogies and examples that a student can relate to.',
          outcome: 'Clear, relatable understanding',
          timeSaved: '2 hours → 20 minutes'
        },
        {
          title: 'Practice Questions',
          prompt: 'Create 10 multiple-choice practice questions with detailed explanations from this chapter: [paste text or describe topic]',
          outcome: 'Study materials with explanations',
          timeSaved: '1 hour → 15 minutes'
        }
      ],
      'ChatGPT': [
        {
          title: 'Study Schedule',
          prompt: 'Create a study schedule for [exam] in [timeframe]. Break down [topics] into daily study sessions with time allocations and review periods.',
          outcome: 'Structured study plan',
          timeSaved: 'Planning overwhelm → Clear roadmap'
        },
        {
          title: 'Problem Solving',
          prompt: 'Explain the step-by-step solution to this problem: [paste problem]. Show your reasoning at each step and explain why each approach is used.',
          outcome: 'Deep problem understanding',
          timeSaved: '45 minutes → 10 minutes'
        }
      ]
    }
  }
};

// DOM Elements
const elements = {
  pages: document.querySelectorAll('.page'),
  navLinks: document.querySelectorAll('.nav-link'),
  mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
  mobileNav: document.querySelector('.nav-mobile'),
  navCards: document.querySelectorAll('.nav-card'),
  filterTabs: document.querySelectorAll('.filter-tab'),
  personaTabs: document.querySelectorAll('.persona-tab'),
  toolsGrid: document.getElementById('toolsGrid'),
  promptsContainer: document.getElementById('promptsContainer'),
  promptSearch: document.getElementById('promptSearch'),
  copyToast: document.getElementById('copyToast'),

};

// State Management
let currentState = {
  activePage: 'home',
  activePersona: 'all',
  activePromptPersona: 'academia',
  searchQuery: '',
  expandedTools: new Set()
};

// Navigation Functions
function showPage(pageId) {
  // Hide all pages
  elements.pages.forEach(page => page.classList.remove('active'));
  
  // Show target page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
    currentState.activePage = pageId;
  }
  
  // Update navigation links
  elements.navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${pageId}`) {
      link.classList.add('active');
    }
  });
  
  // Close mobile menu
  elements.mobileNav.classList.remove('active');
  
  // Initialize page-specific content
  if (pageId === 'tools') {
    renderTools();
  } else if (pageId === 'prompts') {
    renderPrompts();
  }
}

function toggleMobileMenu() {
  elements.mobileNav.classList.toggle('active');
}

// Tools Page Functions
function renderTools() {
  if (!elements.toolsGrid) return;
  
  elements.toolsGrid.innerHTML = '';
  
  // Get tools to display based on active persona
  let toolsToShow = [];
  
  if (currentState.activePersona === 'all') {
    // Show all tools
    APP_DATA.personas.forEach(persona => {
      persona.tools.forEach(toolName => {
        if (APP_DATA.tools[toolName]) {
          toolsToShow.push({
            name: toolName,
            data: APP_DATA.tools[toolName],
            persona: persona.name
          });
        }
      });
    });
  } else {
    // Show tools for specific persona
    const persona = APP_DATA.personas.find(p => p.name.toLowerCase() === currentState.activePersona.toLowerCase());
    if (persona) {
      persona.tools.forEach(toolName => {
        if (APP_DATA.tools[toolName]) {
          toolsToShow.push({
            name: toolName,
            data: APP_DATA.tools[toolName],
            persona: persona.name
          });
        }
      });
    }
  }
  
  // Create tool cards
  toolsToShow.forEach(tool => {
    const toolCard = createToolCard(tool.name, tool.data, tool.persona);
    elements.toolsGrid.appendChild(toolCard);
  });
}

function createToolCard(toolName, toolData, persona) {
  const card = document.createElement('div');
  card.className = 'tool-card';
  card.dataset.tool = toolName;
  
  const isExpanded = currentState.expandedTools.has(toolName);
  if (isExpanded) {
    card.classList.add('expanded');
  }
  
  card.innerHTML = `
    <div class="tool-header">
      <div>
        <div class="tool-name">${toolName}</div>
        <div class="tool-persona">${persona}</div>
      </div>
    </div>
    <div class="tool-pricing">${toolData.pricing}</div>
    <div class="tool-description">${toolData.description}</div>
    <button class="btn btn-outline" onclick="toggleToolDetails('${toolName}')">
      ${isExpanded ? 'Hide' : 'Learn More'}
    </button>
    
    <div class="tool-details ${isExpanded ? 'visible' : ''}">
      <div class="tool-features">
        <h4>Key Features</h4>
        <ul>
          ${toolData.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
      
      <div class="use-cases">
        <div class="use-case">
          <h5>${toolData.useCase1.title}</h5>
          <p>${toolData.useCase1.prompt}</p>
          <div class="time-saved">⏱️ ${toolData.useCase1.timeSaved}</div>
        </div>
        
        ${toolData.useCase2 ? `
        <div class="use-case">
          <h5>${toolData.useCase2.title}</h5>
          <p>${toolData.useCase2.prompt}</p>
          <div class="time-saved">⚡ ${toolData.useCase2.energySaved || toolData.useCase2.timeSaved || ''}</div>
        </div>
        ` : ''}
      </div>
      
      <div class="tool-footer">
        <p><strong>Academic Credibility:</strong> Maintains citation integrity and academic standards</p>
        <a href="${toolData.website}" target="_blank" class="btn btn-primary">Visit Website</a>
      </div>
    </div>
  `;
  
  return card;
}

function toggleToolDetails(toolName) {
  const card = document.querySelector(`[data-tool="${toolName}"]`);
  const details = card.querySelector('.tool-details');
  const button = card.querySelector('button');
  
  if (currentState.expandedTools.has(toolName)) {
    currentState.expandedTools.delete(toolName);
    details.classList.remove('visible');
    button.textContent = 'Learn More';
    card.classList.remove('expanded');
  } else {
    currentState.expandedTools.add(toolName);
    details.classList.add('visible');
    button.textContent = 'Hide Details';
    card.classList.add('expanded');
  }
}

// Prompts Page Functions
function renderPrompts() {
  if (!elements.promptsContainer) return;
  
  elements.promptsContainer.innerHTML = '';
  
  // First render category-based prompts
  const categories = ['Research & Learning', 'Productivity & Content', 'Visual & Creative', 'Academic & Professional'];
  
  categories.forEach(category => {
    const categoryPrompts = APP_DATA.prompts[category];
    if (!categoryPrompts || categoryPrompts.length === 0) return;
    
    // Filter by search query if active
    let filteredPrompts = categoryPrompts;
    if (currentState.searchQuery) {
      filteredPrompts = categoryPrompts.filter(prompt => 
        prompt.title.toLowerCase().includes(currentState.searchQuery.toLowerCase()) ||
        prompt.prompt.toLowerCase().includes(currentState.searchQuery.toLowerCase())
      );
    }
    
    if (filteredPrompts.length === 0) return;
    
    // Create prompt group
    const promptGroup = document.createElement('div');
    promptGroup.className = 'prompt-group';
    
    promptGroup.innerHTML = `
      <h3>${category}</h3>
      ${filteredPrompts.map(prompt => createPromptCard(prompt, prompt.tool)).join('')}
    `;
    
    elements.promptsContainer.appendChild(promptGroup);
  });
  
  // Then render persona-specific prompts
  const personaPrompts = APP_DATA.prompts[currentState.activePromptPersona];
  if (personaPrompts) {
    Object.keys(personaPrompts).forEach(toolName => {
      const prompts = personaPrompts[toolName];
      if (!prompts || prompts.length === 0) return;
      
      // Filter by search query if active
      let filteredPrompts = prompts;
      if (currentState.searchQuery) {
        filteredPrompts = prompts.filter(prompt => 
          prompt.title.toLowerCase().includes(currentState.searchQuery.toLowerCase()) ||
          prompt.prompt.toLowerCase().includes(currentState.searchQuery.toLowerCase())
        );
      }
      
      if (filteredPrompts.length === 0) return;
      
      // Create prompt group
      const promptGroup = document.createElement('div');
      promptGroup.className = 'prompt-group';
      
      promptGroup.innerHTML = `
        <h3>${toolName} - ${currentState.activePromptPersona}</h3>
        ${filteredPrompts.map(prompt => createPromptCard(prompt, toolName)).join('')}
      `;
      
      elements.promptsContainer.appendChild(promptGroup);
    });
  }
  
  if (elements.promptsContainer.innerHTML === '') {
    elements.promptsContainer.innerHTML = '<p class="text-center">No prompts found for the current search.</p>';
  }
}

function createPromptCard(prompt, toolName) {
  return `
    <div class="prompt-card">
      <div class="prompt-header">
        <div class="prompt-title">${prompt.title}</div>
        <div class="prompt-tool">${toolName}</div>
      </div>
      
      <div class="prompt-content">
        <button class="copy-btn" onclick="copyToClipboard(\`${prompt.prompt.replace(/`/g, '\\`').replace(/'/g, "\\\'")}\`)">
          Copy
        </button>
        ${prompt.prompt.replace(/\n/g, '<br>')}
      </div>
      
      <div class="prompt-outcome">
        <strong>Expected Outcome:</strong> ${prompt.outcome}
      </div>
      
      <div class="prompt-time">
        💡 ${prompt.timeSaved}
      </div>
    </div>
  `;
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showCopyToast();
  }).catch(err => {
    console.error('Failed to copy text: ', err);
    // Fallback method
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showCopyToast();
  });
}

function showCopyToast() {
  if (elements.copyToast) {
    elements.copyToast.classList.add('show');
    setTimeout(() => {
      elements.copyToast.classList.remove('show');
    }, 2000);
  }
}

// Filter Functions
function setActiveFilter(persona) {
  currentState.activePersona = persona;
  
  // Update filter tabs
  elements.filterTabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.persona === persona) {
      tab.classList.add('active');
    }
  });
  
  // Re-render tools
  renderTools();
}

function setActivePromptPersona(persona) {
  currentState.activePromptPersona = persona;
  
  // Update persona tabs
  elements.personaTabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.persona === persona) {
      tab.classList.add('active');
    }
  });
  
  // Re-render prompts
  renderPrompts();
}

function updateSearchQuery(query) {
  currentState.searchQuery = query;
  renderPrompts();
}



// Event Listeners
function initializeEventListeners() {
  // Navigation links
  elements.navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = link.getAttribute('href').substring(1);
      showPage(pageId);
    });
  });
  
  // Mobile menu toggle
  if (elements.mobileMenuBtn) {
    elements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }
  
  // Quick navigation cards
  elements.navCards.forEach(card => {
    card.addEventListener('click', () => {
      const pageId = card.dataset.page;
      if (pageId) {
        showPage(pageId);
      }
    });
  });
  
  // Filter tabs
  elements.filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const persona = tab.dataset.persona;
      setActiveFilter(persona);
    });
  });
  
  // Persona tabs
  elements.personaTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const persona = tab.dataset.persona;
      setActivePromptPersona(persona);
    });
  });
  
  // Search input
  if (elements.promptSearch) {
    elements.promptSearch.addEventListener('input', (e) => {
      updateSearchQuery(e.target.value);
    });
  }
  

  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!elements.mobileMenuBtn?.contains(e.target) && 
        !elements.mobileNav?.contains(e.target)) {
      elements.mobileNav?.classList.remove('active');
    }
  });
}

// Smooth scrolling for hash links
function initializeSmoothScrolling() {
  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    const hash = window.location.hash;
    if (hash) {
      const pageId = hash.substring(1);
      showPage(pageId);
    }
  });
  
  // Update URL when navigating
  const originalShowPage = showPage;
  window.showPage = function(pageId) {
    originalShowPage(pageId);
    if (history.pushState) {
      history.pushState(null, null, `#${pageId}`);
    }
  };
}

// Global functions for HTML onclick handlers
window.toggleToolDetails = toggleToolDetails;
window.copyToClipboard = copyToClipboard;
window.showPage = showPage;

// Initialize Application
function initializeApp() {
  console.log('Initializing IEEE WIE ILS 2025 Application...');
  
  // Set up event listeners
  initializeEventListeners();
  
  // Initialize smooth scrolling
  initializeSmoothScrolling();
  
  // Check for hash in URL and show appropriate page
  const hash = window.location.hash;
  if (hash) {
    const pageId = hash.substring(1);
    if (document.getElementById(pageId)) {
      showPage(pageId);
    }
  }
  
  // Initialize default content
  renderTools();
  renderPrompts();
  
  console.log('Application initialized successfully!');
}

// Start the application when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}