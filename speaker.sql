-- Add video_url column to activities table
ALTER TABLE activities ADD COLUMN IF NOT EXISTS video_url TEXT;

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
