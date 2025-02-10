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
