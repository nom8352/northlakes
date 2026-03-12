-- 카불쳐 및 인근 지역 주요 딸기 농장 20곳 데이터 (Upsert)
INSERT INTO business_directory (name, category, location, phone, address)
VALUES 
('Oasis Berries', 'Farm', 'Caboolture', '0421 166 324', '434 Bribie Island Rd, Caboolture QLD 4510'),
('Queensland Berries', 'Farm', 'Caboolture', '0488 217 804', '1/1 Lear Jet Dr, Caboolture QLD 4510'),
('Rolin Farms', 'Farm', 'Elimbah', '0422 536 292', '124-190 Rutters Rd, Elimbah QLD 4516'),
('Stothart Family Farms', 'Farm', 'Bellmere', '0438 593 607', '219 Stern Rd, Bellmere QLD 4510'),
('Schiffke Pty Ltd', 'Farm', 'Bellmere', '(07) 5495 8274', '210 Stern Rd, Bellmere QLD 4510'),
('Pinata Farms', 'Farm', 'Wamuran', '(07) 5497 4295', '347 King St, Wamuran QLD 4512'),
('Sunray Strawberries', 'Farm', 'Wamuran', '(07) 5496 7364', '347 King St, Wamuran QLD 4512'),
('LuvaBerry Farm', 'Farm', 'Wamuran', '0417 741 692', '65 Ziviani Rd, Wamuran QLD 4512'),
('Hermes Strawberries', 'Farm', 'Wamuran', '0422 333 071', '490 Newlands Rd, Wamuran QLD 4512'),
('Diamond Berries', 'Farm', 'Caboolture', '0434 499 805', '452 Old Toorbul Point Rd, Caboolture QLD 4510'),
('Perfection Berries', 'Farm', 'Caboolture', '(07) 5495 1888', '20-22 Piper St, Caboolture QLD 4510'),
('TSL Family Farms', 'Farm', 'Beerwah', '0407 151 768', '118 Mt Beerwah Rd, Beerwah QLD 4519'),
('Hammond Farm', 'Farm', 'Elimbah', '(07) 5496 7183', '120 Mansfield Rd, Elimbah QLD 4516'),
('Inchcolm Farms', 'Farm', 'Wamuran', '(07) 5496 6444', '105 Inchcolm Rd, Wamuran QLD 4512'),
('Berrylicious Strawberries', 'Farm', 'Nambour', '0412 155 058', '9 Howard St, Nambour QLD 4560'),
('McMartin''s Farm', 'Farm', 'Bli Bli', '(07) 5448 4912', '105 Sports Rd, Bli Bli QLD 4560'),
('Cooloola Berries', 'Farm', 'Wolvi', '(07) 5486 7512', '856 Tagigan Rd, Wolvi QLD 4570'),
('Strawberry Fields', 'Farm', 'Glass House Mountains', '(07) 5496 9255', '133 Pikes Rd, Glass House Mountains QLD 4518'),
('Gowinta Farms', 'Farm', 'Beerburrum', '(07) 5496 0055', '2059 Beerburrum Rd, Beerburrum QLD 4517'),
('Best Berries', 'Farm', 'Bellmere', '0401 222 333', '147 Stern Rd, Bellmere QLD 4510')
ON CONFLICT (name) DO UPDATE 
SET category = EXCLUDED.category,
    location = EXCLUDED.location,
    phone = EXCLUDED.phone,
    address = EXCLUDED.address;
