-- Update Art Studio Workshop
UPDATE activities
SET 
    duration = '2-2.5 hrs',
    group_size_min = 8,
    group_size_max = 20,
    highlights = '["Professional art supplies included", "Guided by experienced artists", "Take home your masterpiece"]'::jsonb
WHERE id = '0f55d1cd-bc72-491c-891b-8c5dbbcb8028';

-- Update Culinary Team Experience
UPDATE activities
SET 
    duration = '3-4 hrs',
    group_size_min = 10,
    group_size_max = 24,
    highlights = '["Professional kitchen facilities", "Expert chef guidance", "Ingredient preparation included"]'::jsonb
WHERE id = '38ed7118-fb8d-443c-9f78-57b9e7f366eb';

-- Update Leadership Masterclass
UPDATE activities
SET 
    duration = '2-2.5 hrs',
    group_size_min = 12,
    group_size_max = 25,
    highlights = '["Industry expert speakers", "Interactive Q&A session", "Leadership toolkit provided"]'::jsonb
WHERE id = '3d1f0542-92a1-4073-ab11-eb096aa17141';

-- Update Adventure Team Challenge
UPDATE activities
SET 
    duration = '3-4 hrs',
    group_size_min = 10,
    group_size_max = 20,
    highlights = '["Professional safety equipment", "Certified instructors", "Multiple challenge levels"]'::jsonb
WHERE id = '53df97f7-3283-4c44-ae4b-7e8019e3f175';

-- Update Test Activity
UPDATE activities
SET 
    duration = '1-1.5 hrs',
    group_size_min = 8,
    group_size_max = 15,
    highlights = '["Test activity", "Sample features", "Example highlights"]'::jsonb
WHERE id = '6107cc49-0a0d-4f08-9d68-6ddf85384cc9';

-- Update Executive Leadership Workshop
UPDATE activities
SET 
    duration = '4-5 hrs',
    group_size_min = 10,
    group_size_max = 20,
    highlights = '["Comprehensive workbook provided", "Case study analysis", "Strategic planning exercises"]'::jsonb
WHERE id = 'b3cc44e4-0259-431a-a214-99836c2fa817';

-- Update Remote Team Olympics
UPDATE activities
SET 
    duration = '2-2.5 hrs',
    group_size_min = 10,
    group_size_max = 25,
    highlights = '["Live virtual facilitation", "Interactive team games", "Real-time scoreboard"]'::jsonb
WHERE id = 'dfc2d517-aa73-46b9-a55a-58da6e947ad6';

-- Update Wine Tasting Journey
UPDATE activities
SET 
    duration = '2-2.5 hrs',
    group_size_min = 10,
    group_size_max = 20,
    highlights = '["Premium wine selection", "Professional sommelier", "Gourmet food pairings"]'::jsonb
WHERE id = 'e0991dd9-77c7-4085-bdad-95292ca6dbea';

-- Update Crisis Management Training
UPDATE activities
SET 
    duration = '3-4 hrs',
    group_size_min = 12,
    group_size_max = 24,
    highlights = '["Real-world scenarios", "Expert crisis managers", "Take-home crisis playbook"]'::jsonb
WHERE id = 'e90d694f-e643-4f9f-8630-6eedf13cbe58';

-- Update Innovation Keynote
UPDATE activities
SET 
    duration = '1.5-2 hrs',
    group_size_min = 15,
    group_size_max = 25,
    highlights = '["Industry leading speakers", "Networking session", "Innovation workbook"]'::jsonb
WHERE id = 'ecb3fd11-cdbb-4f76-b330-042b29312385';

-- Update Virtual Escape Room
UPDATE activities
SET 
    duration = '1.5-2 hrs',
    group_size_min = 8,
    group_size_max = 20,
    highlights = '["Interactive puzzle solving", "Virtual team rooms", "Professional game master"]'::jsonb
WHERE id = 'ff5eb338-dbb6-4341-b2f5-221e69d02be2';

-- First, let's ensure we're working with fresh data for leadership category
DELETE FROM activities WHERE category = 'leadership';

-- Insert leadership activities
INSERT INTO activities (
    title,
    description,
    image_url,
    category,
    badge,
    is_active,
    created_at
) VALUES 
(
    'Power of Your Leadership Brand',
    'In today''s dynamic work environment, a strong leadership brand sets you apart. This session helps participants define and align their Leadership Identity, ensuring that their values, strengths, and vision reflect in their leadership approach. Through interactive exercises, they will develop strategies to effectively communicate their brand, enhance credibility, and foster a culture of authenticity, accountability, and shared values within their teams.',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'leadership',
    'Most Popular',
    true,
    NOW()
),
(
    'Acing Crucial Conversations',
    'Difficult conversations are inevitable, but handling them effectively can transform relationships and outcomes. This session focuses on identifying high-stakes conversations where opinions differ, emotions run high, and tensions escalate. Participants will learn to express their concerns with clarity, engage in productive dialogue, and build a foundation for mutual understanding.',
    'https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'leadership',
    'Trending',
    true,
    NOW()
),
(
    'First-Time Managers',
    'Stepping into a leadership role for the first time can be overwhelming. This session is designed to equip new managers with essential skills to establish trust, gain credibility, and effectively lead their teams. Participants will learn to plan strategically, execute tasks efficiently, and develop strong communication skills that help them influence with ease.',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'leadership',
    'Essential',
    true,
    NOW()
),
(
    'Building Influence & Impact',
    'Great leaders don''t just manage teams—they inspire, influence, and drive results. This workshop focuses on result-oriented leadership, helping participants develop strategic thinking to make informed decisions that yield impactful outcomes. They will explore techniques to inspire collaboration, build trust, and empower high-performing teams.',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    'leadership',
    'Advanced',
    true,
    NOW()
),
(
    'Surge: Elevate Your Leadership Potential',
    'Leadership is not just about authority—it''s about vision, influence, and innovation. Surge is an immersive experience that helps participants develop authentic leadership through storytelling, allowing them to connect with teams and stakeholders meaningfully. The session fosters future-focused thinking, enabling leaders to anticipate changes and drive strategic growth.',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'leadership',
    'Premium',
    true,
    NOW()
);

-- First, let's ensure we're working with fresh data for speaker category
DELETE FROM activities WHERE category = 'speaker';

-- Insert speaker sessions
INSERT INTO activities (
    title,
    description,
    image_url,
    video_url,
    category,
    badge,
    is_active,
    duration,
    group_size_min,
    group_size_max,
    highlights,
    created_at
) VALUES 
(
    'Captain Yashika Tyagi - Breaking Barriers in Defense',
    'Join an inspiring session with Captain Yashika Tyagi, a Kargil War Veteran and the first female Army officer posted in the high-altitude area of Leh in 1997. Learn about leadership, courage, and breaking gender barriers in the defense forces.',
    'https://img.youtube.com/vi/W7qB4b_pHaA/maxresdefault.jpg',
    'https://www.youtube.com/watch?v=W7qB4b_pHaA',
    'speaker',
    'Defense Pioneer',
    true,
    '1-1.5 hrs',
    20,
    100,
    '["Kargil War Veteran", "First female officer in Leh", "Leadership in extreme conditions"]'::jsonb,
    NOW()
),
(
    'Samaira Hullur - Soaring High, Starting Young',
    'Get inspired by Samaira Hullur, India''s youngest female commercial pilot. Learn about her journey, challenges, and what it takes to achieve your dreams at a young age.',
    'https://img.youtube.com/vi/sna6UthAUEY/maxresdefault.jpg',
    'https://www.youtube.com/watch?v=sna6UthAUEY',
    'speaker',
    'Youth Icon',
    true,
    '1-1.5 hrs',
    20,
    100,
    '["Youngest female pilot", "Breaking age barriers", "Aviation insights"]'::jsonb,
    NOW()
),
(
    'Kiran Bedi - Pioneering Police Leadership',
    'An exclusive session with Kiran Bedi, India''s first female IPS officer. Discover her groundbreaking journey, leadership philosophy, and approach to creating positive change in society.',
    'https://img.youtube.com/vi/g_CSsL3it9Y/maxresdefault.jpg',
    'https://www.youtube.com/watch?v=g_CSsL3it9Y',
    'speaker',
    'Legendary Leader',
    true,
    '1-1.5 hrs',
    20,
    100,
    '["First female IPS officer", "Social reform leader", "Administrative excellence"]'::jsonb,
    NOW()
),
(
    'Arunima Sinha - Conquering Everest Against All Odds',
    'Be inspired by the extraordinary story of Arunima Sinha, the world''s first female amputee to scale Mount Everest. Learn about resilience, determination, and the power of never giving up.',
    'https://img.youtube.com/vi/Wx9v_J34Fyo/maxresdefault.jpg',
    'https://www.youtube.com/watch?v=Wx9v_J34Fyo',
    'speaker',
    'Inspirational',
    true,
    '1-1.5 hrs',
    20,
    100,
    '["Mount Everest conqueror", "Overcoming physical challenges", "Motivational journey"]'::jsonb,
    NOW()
),
(
    'Hardika Shah - Revolutionizing Financial Inclusion',
    'Join Hardika Shah, CEO of Kinara Capital, as she shares her journey of building a successful fintech company and raising over $150 Million. Learn about entrepreneurship, financial inclusion, and leadership in the fintech space.',
    'https://img.youtube.com/vi/CHd3JYkJMSI/maxresdefault.jpg',
    'https://www.youtube.com/watch?v=CHd3JYkJMSI',
    'speaker',
    'Fintech Leader',
    true,
    '1-1.5 hrs',
    20,
    100,
    '["Fintech pioneer", "Startup success story", "Financial inclusion expert"]'::jsonb,
    NOW()
),
(
    'Radhika Gupta - Mastering Asset Management',
    'Learn from Radhika Gupta, CEO of Edelweiss AML and Shark Tank India Judge, about leadership in finance, investment strategies, and building successful businesses.',
    'https://img.youtube.com/vi/GVZScZFGHVA/maxresdefault.jpg',
    'https://www.youtube.com/watch?v=GVZScZFGHVA',
    'speaker',
    'Finance Expert',
    true,
    '1-1.5 hrs',
    20,
    100,
    '["Investment expert", "Shark Tank judge", "Leadership insights"]'::jsonb,
    NOW()
),
(
    'Geetha Kannan - Advancing Women in Technology',
    'Join Geetha Kannan, Founder & CEO of Wequity, as she shares her expertise in promoting women in technology. Learn about career advancement, leadership in IT, and creating inclusive tech workplaces.',
    'https://img.youtube.com/vi/mDc75hiBVnY/maxresdefault.jpg',
    'https://www.youtube.com/watch?v=mDc75hiBVnY',
    'speaker',
    'Tech Pioneer',
    true,
    '1-1.5 hrs',
    20,
    100,
    '["Women in tech advocate", "IT leadership expert", "Diversity champion"]'::jsonb,
    NOW()
);
