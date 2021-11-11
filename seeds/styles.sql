USE garmentWholesale;

INSERT INTO Styles 
(styleNum, styleName, gender_age, fabric, sleeveLength, sleeveType, neckline, fleeceType, hatType, hatClosure, hatStructure, 
description, BrandId)
VALUES
-- 1-Alpha Apparel
-- Style 1
("1003", "Cotton Crew Neck T-Shirt", "gender_age", "fabric", "sleeveLength", "sleeveType", "neckline", NULL, NULL, NULL, NULL,
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 1),
-- Style 2
("1103CVC", "Heather Crew Neck T-Shirt", "gender_age", "fabric", "sleeveLength", "sleeveType", "neckline", NULL, NULL, NULL, NULL, 
"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 1),
-- Style 3
("1053", "Cotton Crew Neck Long Sleeve Tee", "gender_age", "fabric", "sleeveLength", "sleeveType", "neckline", NULL, NULL, NULL, NULL, 
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 1),
-- Style 4
("8043", "Cotton Tank Top", "gender_age", "fabric", "sleeveLength", "sleeveType", "neckline", NULL, NULL, NULL, NULL, 
"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 1),

-- 2-New Level
-- Style 5
("2300", "Cotton V-Neck T-Shirt", "gender_age", "fabric", "sleeveLength", "sleeveType", "neckline", NULL, NULL, NULL, NULL, 
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 2),
-- Style 6
("1060", "Triblend Crew Neck T-Shirt", "gender_age", "fabric", "sleeveLength", "sleeveType", "neckline", NULL, NULL, NULL, NULL, 
"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 2),
-- Style 7
("6340", "Cotton Crew Neck Ringer Tee", "gender_age", "fabric", "sleeveLength", "sleeveType", "neckline", NULL, NULL, NULL, NULL, 
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 2),
-- Style 8
("6305", "Cotton Long Sleeve Raglan Tee", "gender_age", "fabric", "sleeveLength", "sleeveType", "neckline", NULL, NULL, NULL, NULL, 
"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 2),

-- 3-Int'l Traders Outerwear
-- Style 9
("GG5400", "Crew Neck Sweater", "gender_age", "fabric", "sleeveLength", "sleeveType", "neckline", "fleeceType", NULL, NULL, NULL, 
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 3),
-- Style 10
("XFA2000", "Pullover Hoodie", "gender_age", "fabric", "sleeveLength", "sleeveType", "neckline", "fleeceType", NULL, NULL, NULL, 
"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 3),
-- Style 11
("XFA2000Z", "Zip Up Hoodie", "gender_age", "fabric", "sleeveLength", "sleeveType", "neckline", "fleeceType", NULL, NULL, NULL, 
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 3),
-- Style 12
("MRP50PNT", "Cotton Joggers", "gender_age", "fabric", "sleeveLength", "sleeveType", "neckline", "fleeceType", NULL, NULL, NULL, 
"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 3),

-- 4-Cloud-Nine Headwear
-- Style 13
("6060", "Flat Bill Trucker Hat", "gender_age", "fabric", NULL, NULL, NULL, NULL, "hatType", "hatClosure", "hatStructure", 
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 4),
-- Style 14
("8906", "Flat Bill Snapback Hat", "gender_age", "fabric", NULL, NULL, NULL, NULL, "hatType", "hatClosure", "hatStructure", 
"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 4),
-- Style 15
("5100", "Beanie", "gender_age", "fabric", NULL, NULL, NULL, NULL, "hatType", "hatClosure", "hatStructure", 
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 4),
-- Style 16
("4562", "Dad Hat", "gender_age", "fabric", NULL, NULL, NULL, NULL, "hatType", "hatClosure", "hatStructure", 
"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 4);