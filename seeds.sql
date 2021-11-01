USE garmentWholesale;

INSERT INTO Warehouses (city, state, zip)
VALUES 
("Miami", "FL", 33139),
("Los Angeles", "CA", 90210),
("New York", "NY", 10001),
("Chicago", "IL", 60604);

INSERT INTO Brands (brandName, abrv)
VALUES
-- 1
("Alpha Apparel", "AA"),
-- 2
("New Level", "NL"),
-- 3
("Int'l Traders Outerwear", "ITO"),
-- 4
("Cloud-Nine Headwear", "CNH");

INSERT INTO Styles (styleNum, styleName, keyWords, description, BrandId)
VALUES
-- Alpha Apparel
-- Style 1
("1003", "Cotton Crew Neck T-Shirt", "Short Sleeve, Tee Shirt, 100% Cotton, Crew Neck",
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 1),
-- Style 2
("1103CVC", "Heather Crew Neck T-Shirt", "Short Sleeve, Tee Shirt, Cotton/Poly, Crew Neck", 
"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 1),
-- Style 3
("1053", "Cotton Crew Neck Long Sleeve Tee", "Long Sleeve, Tee Shirt, 100% Cotton, Crew Neck", 
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 1),
-- Style 4
("8043", "Cotton Tank Top", "Tank Top, 100% Cotton", 
"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 1),

-- New Level
-- Style 1
("2300", "Cotton V-Neck T-Shirt", "Short Sleeve, Tee Shirt, 100% Cotton, V-Neck", 
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 2),
-- Style 2
("1060", "Triblend Crew Neck T-Shirt", "Short Sleeve, Tee Shirt, Cotton/Poly/Rayon, Crew Neck", 
"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 2),
-- Style 3
("6340", "Cotton Crew Neck Ringer Tee", "Short Sleeve, Tee Shirt, 100% Cotton, Crew Neck, Ringer", 
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 2),
-- Style 4
("6305", "Cotton Long Sleeve Raglan Tee", "Long Sleeve, Tee Shirt, 100% Cotton, Crew Neck, Raglan", 
"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 2),

-- Int'l Traders Outerwear
-- Style 1
("GG5400", "Cotton V-Neck T-Shirt", "Short Sleeve, Tee Shirt, 100% Cotton, V-Neck", 
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 3),
-- Style 2
("XFA2000", "Triblend Crew Neck T-Shirt", "Short Sleeve, Tee Shirt, Cotton/Poly/Rayon, Crew Neck", 
"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 3),
-- Style 3
("XFA2000ZU", "Cotton Crew Neck Ringer Tee", "Short Sleeve, Tee Shirt, 100% Cotton, Crew Neck, Ringer", 
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 3),
-- Style 4
("MRP50PNT", "Cotton Long Sleeve Raglan Tee", "Long Sleeve, Tee Shirt, 100% Cotton, Crew Neck, Raglan", 
"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 3);



