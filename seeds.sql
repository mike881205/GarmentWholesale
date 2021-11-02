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
-- 1-Alpha Apparel
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

-- 2-New Level
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

-- 3-Int'l Traders Outerwear
-- Style 1
("GG5400", "Crew Neck Sweater", "Outerwear, Sweater, 100% Cotton, Crew Neck", 
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 3),
-- Style 2
("XFA2000", "Pullover Hoodie", "Outerwear, Hooded, Cotton/Poly, Pullover", 
"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 3),
-- Style 3
("XFA2000Z", "Zip Up Hoodie", "Outerwear, Hooded, Cotton/Poly, Zip", 
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 3),
-- Style 4
("MRP50PNT", "Cotton Joggers", "Outerwear, Pants, Jogger, 100% Cotton", 
"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 3),

-- 4-Cloud-Nine Headwear
-- Style 1
("6060", "Flat Bill Trucker Hat", "Headwear, Snapback, Structured, Five-panel, High-profile, Cotton/Poly Mesh", 
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 4),
-- Style 2
("8906", "Flat Bill Snapback Hat", "Headwear, Snapback, Structured, Five-panel, High-profile, Cotton/Poly", 
"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 4),
-- Style 3
("5100", "Beanie", "Headwear, 100% Acrylic", 
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 4),
-- Style 4
("4562", "Dad Hat", "Headwear, Adjustable, Unstructured, Six-Panel, Low-profile, 100% Cotton", 
"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 4);

INSERT INTO Colors (color, hexCode, img, BrandId, StyleId)
VALUES
-- Brand 1
-- Style 1
-- Color 1
("Black", "blackHex", "blackImg", 1, 1),
-- Color 2
("White", "whiteHex", "whiteImg", 1, 1),
-- Color 3
("Red", "redHex", "redImg", 1, 1),
-- Color 4
("Green", "greenHex", "greenImg", 1, 1),
-- Color 5
("Blue", "blueHex", "blueImg", 1, 1),
-- Style 2
-- Color 1
("Black", "blackHex", "blackImg", 1, 2),
-- Color 2
("White", "whiteHex", "whiteImg", 1, 2),
-- Color 3
("Red", "redHex", "redImg", 1, 2),
-- Color 4
("Green", "greenHex", "greenImg", 1, 2),
-- Color 5
("Blue", "blueHex", "blueImg", 1, 2),
-- Style 3
-- Color 1
("Black", "blackHex", "blackImg", 1, 3),
-- Color 2
("White", "whiteHex", "whiteImg", 1, 3),
-- Color 3
("Red", "redHex", "redImg", 1, 3),
-- Color 4
("Green", "greenHex", "greenImg", 1, 3),
-- Color 5
("Blue", "blueHex", "blueImg", 1, 3),
-- Style 4
-- Color 1
("Black", "blackHex", "blackImg", 1, 4),
-- Color 2
("White", "whiteHex", "whiteImg", 1, 4),
-- Color 3
("Red", "redHex", "redImg", 1, 4),
-- Color 4
("Green", "greenHex", "greenImg", 1, 4),
-- Color 5
("Blue", "blueHex", "blueImg", 1, 4),

-- Brand 2
-- Style 1
-- Color 1
("Black", "blackHex", "blackImg", 2, 5),
-- Color 2
("White", "whiteHex", "whiteImg", 2, 5),
-- Color 3
("Red", "redHex", "redImg", 2, 5),
-- Color 4
("Green", "greenHex", "greenImg", 2, 5),
-- Color 5
("Blue", "blueHex", "blueImg", 2, 5),
-- Style 2
-- Color 1
("Black", "blackHex", "blackImg", 2, 6),
-- Color 2
("White", "whiteHex", "whiteImg", 2, 6),
-- Color 3
("Red", "redHex", "redImg", 2, 6),
-- Color 4
("Green", "greenHex", "greenImg", 2, 6),
-- Color 5
("Blue", "blueHex", "blueImg", 2, 6),
-- Style 3
-- Color 1
("Black", "blackHex", "blackImg", 2, 7),
-- Color 2
("White", "whiteHex", "whiteImg", 2, 7),
-- Color 3
("Red", "redHex", "redImg", 2, 7),
-- Color 4
("Green", "greenHex", "greenImg", 2, 7),
-- Color 5
("Blue", "blueHex", "blueImg", 2, 7),
-- Style 4
-- Color 1
("Black", "blackHex", "blackImg", 2, 8),
-- Color 2
("White", "whiteHex", "whiteImg", 2, 8),
-- Color 3
("Red", "redHex", "redImg", 2, 8),
-- Color 4
("Green", "greenHex", "greenImg", 2, 8),
-- Color 5
("Blue", "blueHex", "blueImg", 2, 8),

-- Brand 3
-- Style 1
-- Color 1
("Black", "blackHex", "blackImg", 3, 9),
-- Color 2
("White", "whiteHex", "whiteImg", 3, 9),
-- Color 3
("Red", "redHex", "redImg", 3, 9),
-- Color 4
("Green", "greenHex", "greenImg", 3, 9),
-- Color 5
("Blue", "blueHex", "blueImg", 3, 9),
-- Style 2
-- Color 1
("Black", "blackHex", "blackImg", 3, 10),
-- Color 2
("White", "whiteHex", "whiteImg", 3, 10),
-- Color 3
("Red", "redHex", "redImg", 3, 10),
-- Color 4
("Green", "greenHex", "greenImg", 3, 10),
-- Color 5
("Blue", "blueHex", "blueImg", 3, 10),
-- Style 3
-- Color 1
("Black", "blackHex", "blackImg", 3, 11),
-- Color 2
("White", "whiteHex", "whiteImg", 3, 11),
-- Color 3
("Red", "redHex", "redImg", 3, 11),
-- Color 4
("Green", "greenHex", "greenImg", 3, 11),
-- Color 5
("Blue", "blueHex", "blueImg", 3, 11),
-- Style 4
-- Color 1
("Black", "blackHex", "blackImg", 3, 12),
-- Color 2
("White", "whiteHex", "whiteImg", 3, 12),
-- Color 3
("Red", "redHex", "redImg", 3, 12),
-- Color 4
("Green", "greenHex", "greenImg", 3, 12),
-- Color 5
("Blue", "blueHex", "blueImg", 3, 12),

-- Brand 4
-- Style 1
-- Color 1
("Black", "blackHex", "blackImg", 4, 13),
-- Color 2
("White", "whiteHex", "whiteImg", 4, 13),
-- Color 3
("Red", "redHex", "redImg", 4, 13),
-- Color 4
("Green", "greenHex", "greenImg", 4, 13),
-- Color 5
("Blue", "blueHex", "blueImg", 4, 13),
-- Style 2
-- Color 1
("Black", "blackHex", "blackImg", 4, 14),
-- Color 2
("White", "whiteHex", "whiteImg", 4, 14),
-- Color 3
("Red", "redHex", "redImg", 4, 14),
-- Color 4
("Green", "greenHex", "greenImg", 4, 14),
-- Color 5
("Blue", "blueHex", "blueImg", 4, 14),
-- Style 3
-- Color 1
("Black", "blackHex", "blackImg", 4, 15),
-- Color 2
("White", "whiteHex", "whiteImg", 4, 15),
-- Color 3
("Red", "redHex", "redImg", 4, 15),
-- Color 4
("Green", "greenHex", "greenImg", 4, 15),
-- Color 5
("Blue", "blueHex", "blueImg", 4, 15),
-- Style 4
-- Color 1
("Black", "blackHex", "blackImg", 4, 16),
-- Color 2
("White", "whiteHex", "whiteImg", 4, 16),
-- Color 3
("Red", "redHex", "redImg", 4, 16),
-- Color 4
("Green", "greenHex", "greenImg", 4, 16),
-- Color 5
("Blue", "blueHex", "blueImg", 4, 16);