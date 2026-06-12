import React, { useState, useMemo, useRef, useEffect } from "react";

const DB = {"races": [{"date": "2026-04-26", "race": 8, "program": "Magic Millions Cup Thailand 2026", "cls": "New Thoroughbred WFA", "post": "4.20 pm", "dist": 1200, "prize": "400000 (200000-100000-50000-30000-20000)", "no": 2, "name": "Chan Dong Kanda", "th": "ชานดองกันดา", "blinkers": "no", "injury": "no", "sire": "All Too Hard", "dam": "Perfect Stranger", "color": "bay/brown", "country": "aus", "sex": "colt", "bar": 6, "reg": "N960", "weight": 55.5, "form": "(26)3T", "jockey": "Chiragorn", "appr": "no", "trainer": "Denchart Tunjindaprateep", "stable": "Orawan", "silk": "Blue & White stripes jkt. Blue & White stripes cap", "bday": "2022-10-12", "field": "ปกติ", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": "Jockey Fall", "winT": 4840, "placeT": 3760, "winD": 59, "placeD": 21}, {"date": "2026-04-26", "race": 8, "program": "Magic Millions Cup Thailand 2026", "cls": "New Thoroughbred WFA", "post": "4.20 pm", "dist": 1200, "prize": "400000 (200000-100000-50000-30000-20000)", "no": 4, "name": "Harinsko Check", "th": "หรินสโกเช็ก", "blinkers": "no", "injury": "no", "sire": "Encryption", "dam": "Miss Bellezza", "color": "bay", "country": "aus", "sex": "colt", "bar": 1, "reg": "N964", "weight": 55.5, "form": "(26)3T", "jockey": "Wanmongkol", "appr": "no", "trainer": "Denchart Tunjindaprateep", "stable": "F.A. Group", "silk": "Yellow & Blue stripes jkt. Yellow slvs. Yellow cap", "bday": "2022-10-22", "field": "ปกติ", "wplus": 0, "ps": 1, "p3": 1, "psp": 1, "place": 1, "time": "1/10.57", "winT": 2950, "placeT": 3870, "winD": 97, "placeD": 20}, {"date": "2026-04-26", "race": 8, "program": "Magic Millions Cup Thailand 2026", "cls": "New Thoroughbred WFA", "post": "4.20 pm", "dist": 1200, "prize": "400000 (200000-100000-50000-30000-20000)", "no": 11, "name": "Emily Girl", "th": "เอมิลีเกิร์ล", "blinkers": "no", "injury": "no", "sire": "Heroic Valour", "dam": "Lady Emily", "color": "bay", "country": "aus", "sex": "filly", "bar": 9, "reg": "N983", "weight": 52.2, "form": "(26)4T", "jockey": "Jatuphon", "appr": "no", "trainer": "Saranyu Tanyacharoenkul", "stable": "Boonchai", "silk": "Pink bl.V horseshoes B on back jkt.bl.2 wht.hoops slvs.pink cap", "bday": "2023-09-17", "field": "ปกติ", "wplus": 0, "ps": 4, "p3": 3, "psp": 3, "place": 2, "time": "1/10.97", "winT": 2580, "placeT": 2775, "winD": 111, "placeD": 28}, {"date": "2026-04-26", "race": 8, "program": "Magic Millions Cup Thailand 2026", "cls": "New Thoroughbred WFA", "post": "4.20 pm", "dist": 1200, "prize": "400000 (200000-100000-50000-30000-20000)", "no": 1, "name": "Kung Fu Fighting", "th": "กังฟูไฟท์ติ้ง", "blinkers": "no", "injury": "no", "sire": "Heroic Valour", "dam": "Peretti", "color": "bay", "country": "aus", "sex": "colt", "bar": 3, "reg": "N952", "weight": 55.5, "form": "(26)2T", "jockey": "Pongsakorn", "appr": "no", "trainer": "Koson Kaikanha", "stable": "V.P.P.", "silk": "Light gr. front&back org./gr. Star jkt.gr.slvs.&gr.cap", "bday": "2022-10-18", "field": "ปกติ", "wplus": 0, "ps": 2, "p3": 2, "psp": 2, "place": 4, "time": "1/11.58", "winT": 12946, "placeT": 6655, "winD": 22, "placeD": 11}, {"date": "2026-04-26", "race": 8, "program": "Magic Millions Cup Thailand 2026", "cls": "New Thoroughbred WFA", "post": "4.20 pm", "dist": 1200, "prize": "400000 (200000-100000-50000-30000-20000)", "no": 7, "name": "Theodore", "th": "ทีโอดอร์", "blinkers": "no", "injury": "no", "sire": "Maurice", "dam": "Echo Gal", "color": "bay", "country": "aus", "sex": "colt", "bar": 5, "reg": "N965", "weight": 54, "form": "(26)7T", "jockey": "Boonchana", "appr": "no", "trainer": "Pradit Manwong", "stable": "Nillakan", "silk": "Blue & T.Grey. Behind 8 pointed star Grey jkt. Grey & 3 Blue hoop slvs. Blue cap", "bday": "2023-09-21", "field": "ปกติ", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 5, "time": "1/11.75", "winT": 380, "placeT": 700, "winD": 757, "placeD": 113}, {"date": "2026-04-26", "race": 8, "program": "Magic Millions Cup Thailand 2026", "cls": "New Thoroughbred WFA", "post": "4.20 pm", "dist": 1200, "prize": "400000 (200000-100000-50000-30000-20000)", "no": 8, "name": "Full House", "th": "ฟูลเฮ้าส์", "blinkers": "no", "injury": "no", "sire": "Heroic Valour", "dam": "Confessions", "color": "bay", "country": "aus", "sex": "colt", "bar": 2, "reg": "N967", "weight": 54, "form": "(26)2T", "jockey": "Archawin", "appr": "no", "trainer": "Narisara Sripal", "stable": "Pyathai", "silk": "Black jkt. orange stars. black cap. orange stars", "bday": "2023-10-24", "field": "ปกติ", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 7, "time": "1/12.02", "winT": 2445, "placeT": 3175, "winD": 117, "placeD": 25}, {"date": "2026-05-23", "race": 4, "program": "The Koh Chang Stakes", "cls": "New Thoroughbred Class 3", "post": "2.00 pm", "dist": 1200, "prize": "100000 (54000-21000-14500-6000-4500)", "no": 1, "name": "Royal Flush", "th": "รอยัลฟลัช", "blinkers": "no", "injury": "no", "sire": "Power", "dam": "Zatso", "color": "bay", "country": "aus", "sex": "filly", "bar": 1, "reg": "N958", "rating": "68(+5)", "weight": 58.5, "form": "(26)1-2-6-2-4", "jockey": "Pongsakorn", "appr": "no", "trainer": "Prasarn Khankwa", "stable": "Paibulchai", "silk": "Light sky blue jkt. Yellow purple spot slvs. Sky blue cap", "bday": "2022-09-25", "field": "นุ่ม", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 6, "time": "1/13.87", "winT": 590, "placeT": 815, "winD": 323, "placeD": 36}, {"date": "2026-04-26", "race": 8, "program": "Magic Millions Cup Thailand 2026", "cls": "New Thoroughbred WFA", "post": "4.20 pm", "dist": 1200, "prize": "400000 (200000-100000-50000-30000-20000)", "no": 6, "name": "Sweet Caroline", "th": "สวีทแคโรไลน์", "blinkers": "no", "injury": "no", "sire": "Van Couver", "dam": "Romandle", "color": "bay", "country": "aus", "sex": "filly", "bar": 8, "reg": "N951", "weight": 54, "form": "(26)6T", "jockey": "Supakorn", "appr": "no", "trainer": "Suroj Santisewi", "stable": "Wacharavit", "silk": "Orange & yellow & green jkt. Yellow slvs. White cap", "bday": "2022-11-15", "field": "ปกติ", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 8, "time": "1/12.86", "winT": 1285, "placeT": 5305, "winD": 224, "placeD": 34}, {"date": "2026-04-26", "race": 8, "program": "Magic Millions Cup Thailand 2026", "cls": "New Thoroughbred WFA", "post": "4.20 pm", "dist": 1200, "prize": "400000 (200000-100000-50000-30000-20000)", "no": 5, "name": "Ngarm Siam", "th": "งามสยาม", "blinkers": "no", "injury": "no", "sire": "Exceedance", "dam": "Farringdon Hill", "color": "bay", "country": "aus", "sex": "filly", "bar": 7, "reg": "N955", "weight": 54, "form": "(26)2T", "jockey": "Vjitkorn", "appr": "no", "trainer": "Nan Mongkolchainam", "stable": "Paibulchai", "silk": "Light sky blue jkt. Yellow purple spot slvs. Sky blue cap", "bday": "2022-08-24", "field": "ปกติ", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 10, "time": "1/14.03", "winT": 1970, "placeT": 2285, "winD": 146, "placeD": 34}, {"date": "2026-04-26", "race": 8, "program": "Magic Millions Cup Thailand 2026", "cls": "New Thoroughbred WFA", "post": "4.20 pm", "dist": 1200, "prize": "400000 (200000-100000-50000-30000-20000)", "no": 3, "name": "Runway", "th": "รันเวย์", "blinkers": "no", "injury": "no", "sire": "All Too Hard", "dam": "Secretary Bird", "color": "bay", "country": "aus", "sex": "colt", "bar": 4, "reg": "N959", "weight": 55.5, "form": "(25)1T", "jockey": "Visanukorn", "appr": "no", "trainer": "Prasarn Khankwa", "stable": "Ploysakda", "silk": "Pink & sky blue jkt. Squares jkt. & cap", "bday": "2022-10-26", "field": "ปกติ", "wplus": 0, "ps": 3, "p3": 4, "psp": 4, "place": 3, "time": "1/11.52", "winT": 12715, "placeT": 5840, "winD": 22, "placeD": 13}, {"date": "2026-05-23", "race": 5, "program": "The Koh Tao Stakes", "cls": "New Thoroughbred Class Premium", "post": "2.35 pm", "dist": 1200, "prize": "106500 (58000-22000-16000-6000-4500)", "no": 5, "name": "Condominium", "th": "คอนโดมิเนี่ยม", "blinkers": "yes", "injury": "yes", "sire": "All Too Hard", "dam": "Reconstruct", "color": "chestnut", "country": "aus", "sex": "mare", "bar": 5, "reg": "GH179", "rating": "82(-3)", "weight": 55, "form": "(26)7-2-5-1-3", "jockey": "Visanukorn", "appr": "no", "trainer": "Narisara Sripal", "stable": "Phetchnuea", "silk": "Orange jkt. blue&green trapezoid orange slvs. Blue neck&slvs. Orange cap green & blue stripe", "bday": "2020-10-05", "field": "good to soft", "wplus": 0, "ps": 2, "p3": 1, "psp": 1, "place": 1, "time": "1/12.39", "winT": 8260, "placeT": 2465, "winD": 27, "placeD": 11}, {"date": "2026-05-23", "race": 5, "program": "The Koh Tao Stakes", "cls": "New Thoroughbred Class Premium", "post": "2.35 pm", "dist": 1200, "prize": "106500 (58000-22000-16000-6000-4500)", "no": 4, "name": "Saming Phrai", "th": "สมิงไพร", "blinkers": "no", "injury": "no", "sire": "Power", "dam": "Gold Reserve", "color": "bay", "country": "aus", "sex": "colt", "bar": 3, "reg": "N944", "rating": "89(+6)", "weight": 56.5, "form": "(26)1-1-1-1(25)1T", "jockey": "Promrop", "appr": "no", "trainer": "Kanaram Srikatanam", "stable": "Chaophyaramrakob", "silk": "Red front yellow magic design jkt. Red slvs. Red cap", "bday": "2022-08-10", "field": "good to soft", "wplus": 0, "ps": 3, "p3": 5, "psp": 3, "place": 2, "time": "1/12.40", "winT": 10472, "placeT": 2475, "winD": 21, "placeD": 11}, {"date": "2026-05-23", "race": 5, "program": "The Koh Tao Stakes", "cls": "New Thoroughbred Class Premium", "post": "2.35 pm", "dist": 1200, "prize": "106500 (58000-22000-16000-6000-4500)", "no": 1, "name": "Say It So", "th": "เซย์อิทโซ", "blinkers": "no", "injury": "no", "sire": "Akeed Mofeed", "dam": "Bacchanal Woman", "color": "bay", "country": "aus", "sex": "mare", "bar": 7, "reg": "N930", "rating": "115(0)", "weight": 62, "form": "(26)3-2-2-1", "jockey": "Vijitkorn", "appr": "no", "trainer": "Saranyu Tanyacharoenkul", "stable": "Porn Prasert", "silk": "Red jkt. yellow and white star back Red slvs white star & white cap red star", "bday": "2020-09-14", "field": "good to soft", "wplus": 0, "ps": 0, "p3": 0, "psp": 4, "place": 3, "time": "1/12.46", "winT": 5046, "placeT": 2075, "winD": 44, "placeD": 14}, {"date": "2026-04-26", "race": 8, "program": "Magic Millions Cup Thailand 2026", "cls": "New Thoroughbred WFA", "post": "4.20 pm", "dist": 1200, "prize": "400000 (200000-100000-50000-30000-20000)", "no": 9, "name": "Sabai Chiang", "th": "สไบเฉียง", "blinkers": "no", "injury": "no", "sire": "North Pacific", "dam": "Ploveset", "color": "dark bay", "country": "aus", "sex": "colt", "bar": 11, "reg": "N946", "weight": 54, "form": "(26)5T", "jockey": "Promrop", "appr": "no", "trainer": "Kanaram Srikatanam", "stable": "Chaophyaramrakob", "silk": "Red front yellow magic design jkt. Red slvs. Red cap", "bday": "2023-08-13", "field": "ปกติ", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 6, "time": "1/11.97", "winT": 5220, "placeT": 4360, "winD": 55, "placeD": 18}, {"date": "2026-05-23", "race": 5, "program": "The Koh Tao Stakes", "cls": "New Thoroughbred Class Premium", "post": "2.35 pm", "dist": 1200, "prize": "106500 (58000-22000-16000-6000-4500)", "no": 3, "name": "Dark Chocolate", "th": "ดาร์กช็อคโกแลต", "blinkers": "no", "injury": "no", "sire": "Nicconi", "dam": "La Renarde", "color": "dark bay", "country": "aus", "sex": "stallion", "bar": 8, "reg": "N935", "rating": "89(+3)", "weight": 56.5, "form": "(26)2-3-3-2-2", "jockey": "Jatuphon", "appr": "no", "trainer": "Saranyu Tanyacharoenkul", "stable": "J.K. Farm", "silk": "Pink & \"J.K.\" jkt. Violet slvs. Pink cap", "bday": "2021-11-01", "field": "good to soft", "wplus": 0, "ps": 4, "p3": 3, "psp": 2, "place": 4, "time": "1/13.04", "winT": 4638, "placeT": 2470, "winD": 48, "placeD": 11}, {"date": "2026-05-23", "race": 4, "program": "The Koh Chang Stakes", "cls": "New Thoroughbred Class 3", "post": "2.00 pm", "dist": 1200, "prize": "100000 (54000-21000-14500-6000-4500)", "no": 2, "name": "Pulpit", "th": "เพิร์ลพิท", "blinkers": "no", "injury": "no", "sire": "Microphone", "dam": "Sarah's Holy Belle", "color": "bay", "country": "aus", "sex": "mare", "bar": 7, "reg": "N72/1", "rating": "62(+1)", "weight": 55.5, "form": "(26)3-3-x-2-2", "jockey": "Archawin", "appr": "no", "trainer": "Narisara Sripal", "stable": "Pyathai", "silk": "Black jkt. orange stars. black cap. orange stars", "bday": "2021-09-04", "field": "นุ่ม", "wplus": 0, "ps": 4, "p3": 4, "psp": 4, "place": 3, "time": "1/13.46", "winT": 5270, "placeT": 2505, "winD": 36, "placeD": 11}, {"date": "2026-06-07", "race": 5, "program": "The Black Velvet Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1200, "prize": "42000-16000-12000-6000-4500", "no": 4, "name": "Viper Command", "th": "ไวเปอร์คอมมานด์", "blinkers": "no", "injury": "no", "sire": "Hardwater", "dam": "Vipera Gold", "color": "bay", "country": "aus", "sex": "gelding", "bar": 12, "reg": "U3", "rating": "88(+6)", "weight": 56, "form": "(26)1-1-2-3-2", "jockey": "Vjitkorn", "appr": "no", "trainer": "Paichayont Boosabong", "stable": "B.S.P.", "silk": "Blue jkt. Sky blue sash white cap", "bday": "2021-10-31", "field": "soft", "wplus": 0, "ps": 1, "p3": 1, "psp": 1, "place": 1, "time": "1/13.30", "winT": 6950, "placeT": 3460, "winD": 30, "placeD": 14}, {"date": "2026-06-07", "race": 5, "program": "The Black Velvet Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1200, "prize": "42000-16000-12000-6000-4500", "no": 2, "name": "Chaimongkol", "th": "ชัยมงคล", "blinkers": "yes", "injury": "no", "sire": "Heliostatic", "dam": "Raffinee", "color": "chestnut", "country": "arg", "sex": "gelding", "bar": 6, "reg": "V136", "rating": "111(0)", "weight": 61.5, "form": "(26)x-1-1-2-3", "jockey": "Sankeng", "appr": "no", "trainer": "Suwat Chata", "stable": "Kajorndej", "silk": "Green & white stripes jkt. White cap", "bday": "2016-08-21", "field": "soft", "wplus": 0, "ps": 4, "p3": 4, "psp": 4, "place": 2, "time": "1/13.52", "winT": 12425, "placeT": 4930, "winD": 16, "placeD": 10}, {"date": "2026-06-07", "race": 5, "program": "The Black Velvet Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1200, "prize": "42000-16000-12000-6000-4500", "no": 5, "name": "Stand By Me", "th": "สแตนบายมี", "blinkers": "no", "injury": "no", "sire": "Zousain", "dam": "Cinzia", "color": "bay", "country": "aus", "sex": "gelding", "bar": 2, "reg": "U43", "rating": "83(-6)", "weight": 55, "form": "(26)10-8-6-3-5", "jockey": "Jatuphon", "appr": "no", "trainer": "Saranyu Tanyacharoenkul", "stable": "J.K. Farm", "silk": "Pink & \"J.K.\" jkt. Violet slvs. Pink cap", "bday": "2021-10-02", "field": "soft", "wplus": 0, "ps": 0, "p3": 0, "psp": 5, "place": 3, "time": "1/13.83", "winT": 635, "placeT": 1215, "winD": 329, "placeD": 40}, {"date": "2026-05-23", "race": 5, "program": "The Koh Tao Stakes", "cls": "New Thoroughbred Class Premium", "post": "2.35 pm", "dist": 1200, "prize": "106500 (58000-22000-16000-6000-4500)", "no": 8, "name": "Charlotte", "th": "ชาล็อต", "blinkers": "no", "injury": "no", "sire": "Heroic Valour", "dam": "Text Book", "color": "bay", "country": "aus", "sex": "mare", "bar": 6, "reg": "N956", "rating": "68(0)", "weight": 52, "form": "(26)4-4-6-1-3", "jockey": "Asawin", "appr": "no", "trainer": "Prasarn Khankwa", "stable": "Paibulchai", "silk": "Light sky blue jkt. Yellow purple spot slvs. Sky blue cap", "bday": "2021-08-04", "field": "good to soft", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 5, "time": "1/13.90", "winT": 174, "placeT": 609, "winD": 1287, "placeD": 48}, {"date": "2026-05-23", "race": 5, "program": "The Koh Tao Stakes", "cls": "New Thoroughbred Class Premium", "post": "2.35 pm", "dist": 1200, "prize": "106500 (58000-22000-16000-6000-4500)", "no": 2, "name": "Flying Fable", "th": "ฟลายอิ้งเฟเบิ้ล", "blinkers": "no", "injury": "no", "sire": "Sacred Falls", "dam": "Urban Rocker", "color": "dark bay", "country": "nz", "sex": "mare", "bar": 1, "reg": "N939V", "rating": "91(-1)", "weight": 57, "form": "(26)5-6-7-3-3", "jockey": "Choksrinin", "appr": "no", "trainer": "Kanaram Srikatanam", "stable": "Roongpatchara", "silk": "Blue & White jkt. Blue & White slvs. Blue cap", "bday": "2020-11-24", "field": "good to soft", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 6, "time": "1/13.94", "winT": 665, "placeT": 785, "winD": 337, "placeD": 37}, {"date": "2026-06-07", "race": 5, "program": "The Black Velvet Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1200, "prize": "42000-16000-12000-6000-4500", "no": 8, "name": "Mangkorn Oujee", "th": "มังกรอู๋จี้", "blinkers": "no", "injury": "no", "sire": "Charm Spirit", "dam": "Miss Gucci", "color": "bay", "country": "bay", "sex": "gelding", "bar": 8, "reg": "T10", "rating": "76(+8)", "weight": 53, "form": "(26)1-9-1-1-8", "jockey": "Amonrit", "appr": "no", "trainer": "Wanchai Klaoboon", "stable": "Santiparp", "silk": "Light gr.red S front&back red light gr.slvs. & light gr.cap", "bday": "2019-10-14", "field": "soft", "wplus": 0.5, "ps": 2, "p3": 3, "psp": 3, "place": 4, "time": "1/14.01", "winT": 4135, "placeT": 3105, "winD": 50, "placeD": 15}, {"date": "2026-04-26", "race": 8, "program": "Magic Millions Cup Thailand 2026", "cls": "New Thoroughbred WFA", "post": "4.20 pm", "dist": 1200, "prize": "400000 (200000-100000-50000-30000-20000)", "no": 10, "name": "Sabiang Thong", "th": "เสบียงทอง", "blinkers": "no", "injury": "no", "sire": "Dubious", "dam": "Lucky Lips", "color": "chestnut", "country": "aus", "sex": "filly", "bar": 10, "reg": "N945", "weight": 52.5, "form": "(26)6T", "jockey": "Sangroong", "appr": "no", "trainer": "Kanaram Srikatanam", "stable": "Chaophyaramrakob", "silk": "Red front yellow magic design jkt. Red slvs. Red cap", "bday": "2023-10-24", "field": "ปกติ", "wplus": 0, "ps": 5, "p3": 5, "psp": 5, "place": 9, "time": "1/13.06", "winT": 660, "placeT": 1090, "winD": 436, "placeD": 73}, {"date": "2026-05-23", "race": 5, "program": "The Koh Tao Stakes", "cls": "New Thoroughbred Class Premium", "post": "2.35 pm", "dist": 1200, "prize": "106500 (58000-22000-16000-6000-4500)", "no": 6, "name": "Harinsko Check", "th": "หรินสโกเช็ก", "blinkers": "no", "injury": "no", "sire": "Encryption", "dam": "Miss Bellezza", "color": "bay", "country": "aus", "sex": "colt", "bar": 4, "reg": "N964", "rating": "72(+72)", "weight": 52.5, "form": "(26)1-3T", "jockey": "Wanmongkol", "appr": "no", "trainer": "Denchart Tunjindaprateep", "stable": "F.A. Group", "silk": "Yellow & Blue stripes jkt. Yellow slvs. Yellow cap", "bday": "2022-10-22", "field": "good to soft", "wplus": 0, "ps": 5, "p3": 4, "psp": 0, "place": 7, "time": "1/14.34", "winT": 7871, "placeT": 2215, "winD": 28, "placeD": 13}, {"date": "2026-06-07", "race": 5, "program": "The Black Velvet Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1200, "prize": "42000-16000-12000-6000-4500", "no": 11, "name": "Mangkorn Kangwaan", "th": "มังกรกังวาล", "blinkers": "no", "injury": "no", "sire": "Duporth", "dam": "Nurmaah", "color": "bay", "country": "aus", "sex": "gelding", "bar": 5, "reg": "N080", "rating": "71(+1)", "weight": 52, "form": "(26)3-2-7-5(25)8", "jockey": "Charnsuek", "appr": "no", "trainer": "Viroj Nookong", "stable": "Mangkorn 639", "silk": "Violet/White star jkt. Blue slvs. Violet cap", "bday": "2018-10-15", "field": "soft", "wplus": 0, "ps": 0, "p3": 2, "psp": 2, "place": 5, "time": "1/14.81", "winT": 721, "placeT": 870, "winD": 289, "placeD": 56}, {"date": "2026-06-07", "race": 5, "program": "The Black Velvet Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1200, "prize": "42000-16000-12000-6000-4500", "no": 6, "name": "Star of Isaan", "th": "สตาร์อ๊อฟอีสาน", "blinkers": "yes", "injury": "no", "sire": "Churchill", "dam": "Melody Calling", "color": "bay", "country": "aus", "sex": "stallion", "bar": 4, "reg": "U44", "rating": "82(+2)", "weight": 54.5, "form": "(26)2-5-4-7-2", "jockey": "Wanmongkol", "appr": "no", "trainer": "Denchart Tunjindaprateep", "stable": "F.A. Group", "silk": "Yellow & Blue stripes jkt. Yellow slvs.", "bday": "2021-11-08", "field": "soft", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 6, "time": "1/14.95", "winT": 4975, "placeT": 2930, "winD": 42, "placeD": 16}, {"date": "2026-06-07", "race": 5, "program": "The Black Velvet Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1200, "prize": "42000-16000-12000-6000-4500", "no": 1, "name": "Charming Win", "th": "ชาร์มมิ่งวิน", "blinkers": "no", "injury": "no", "sire": "Charm Spirit", "dam": "Jenuwin", "color": "bay", "country": "nz", "sex": "gelding", "bar": 11, "reg": "M64", "rating": "115(0)", "weight": 62.5, "form": "(26)4-2-1-1", "jockey": "Promrop", "appr": "no", "trainer": "Paichayont Boosabong", "stable": "B.S.P.", "silk": "Blue jkt. Sky blue sash white cap", "bday": "2020-09-14", "field": "soft", "wplus": 0, "ps": 3, "p3": 5, "psp": 0, "place": 7, "time": "1/15.26", "winT": 1857, "placeT": 1690, "winD": 112, "placeD": 29}, {"date": "2026-06-07", "race": 5, "program": "The Black Velvet Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1200, "prize": "42000-16000-12000-6000-4500", "no": 10, "name": "Yord Rak Mangkorn", "th": "ยอดรักมังกร", "blinkers": "yes", "injury": "no", "sire": "Showcasing", "dam": "Lady Cherokee", "color": "brown", "country": "nz", "sex": "gelding", "bar": 1, "reg": "T64", "rating": "72(0)", "weight": 52, "form": "(26)7-5-6-7-11", "jockey": "Archawin", "appr": "no", "trainer": "Jindawat Naksusook", "stable": "Mangkorn 639", "silk": "Violet/White star jkt. Blue slvs. Violet cap", "bday": "2018-10-12", "field": "soft", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 8, "time": "1/15.65", "winT": 255, "placeT": 495, "winD": 819, "placeD": 100}, {"date": "2026-05-23", "race": 1, "program": "The Koh Lipe Stakes", "cls": "Country-Bred Class 5", "post": "0.15 pm", "dist": 1200, "prize": "94500 (51000-19500-13500-6000-4500)", "no": 1, "name": "Pattara Siam", "th": "ภัทรสยาม", "blinkers": "no", "injury": "no", "sire": "Wilko", "dam": "Baby Face", "color": "bay", "country": "thai", "sex": "filly", "bar": 8, "reg": "N971", "rating": "37(-1)", "weight": 59, "form": "(26)6-5-3T", "jockey": "Chirakorn", "appr": "no", "trainer": "Natthanes Hlongoon", "stable": "Kajornpetch", "silk": "sky blue green white KJP on back jacket white green stripe sleeves green cap", "bday": "2023-12-21", "field": "soft", "wplus": 0, "ps": 1, "p3": 1, "psp": 1, "place": 1, "time": "1/15.74", "winT": 12935, "placeT": 3390, "winD": 16, "placeD": 15}, {"date": "2026-05-23", "race": 1, "program": "The Koh Lipe Stakes", "cls": "Country-Bred Class 5", "post": "0.15 pm", "dist": 1200, "prize": "94500 (51000-19500-13500-6000-4500)", "no": 5, "name": "Queen Angel", "th": "ควีนแองเจิ้ล", "blinkers": "no", "injury": "no", "sire": "Coal Play", "dam": "Outlaw Angel", "color": "bay", "country": "thai", "sex": "filly", "bar": 7, "reg": "N957", "rating": "34(-4)", "weight": 57.5, "form": "(26)9-3-6-10(25)5T", "jockey": "Pongsakorn", "appr": "no", "trainer": "Prasarn Khankwa", "stable": "Paibulchai", "silk": "light sky blue jacket yellow purple spot sleeves sky blue cap", "bday": "2023-06-07", "field": "soft", "wplus": 0, "ps": 3, "p3": 2, "psp": 2, "place": 2, "time": "1/15.96", "winT": 2100, "placeT": 2195, "winD": 102, "placeD": 13}, {"date": "2026-05-23", "race": 5, "program": "The Koh Tao Stakes", "cls": "New Thoroughbred Class Premium", "post": "2.35 pm", "dist": 1200, "prize": "106500 (58000-22000-16000-6000-4500)", "no": 7, "name": "Fly Away", "th": "ฟลายอเวย์", "blinkers": "yes", "injury": "yes", "sire": "Star Turn", "dam": "Nessie", "color": "bay", "country": "aus", "sex": "stallion", "bar": 2, "reg": "N928", "rating": "71(0)", "weight": 52.5, "form": "(26)x-5-4-4-2", "jockey": "Sangroong", "appr": "no", "trainer": "Kanaram Srikatanam", "stable": "Ladawan", "silk": "Blue white balcony jkt. White cap", "bday": "2021-11-10", "field": "good to soft", "wplus": 0, "ps": 1, "p3": 2, "psp": 5, "place": 8, "time": "1/16.09", "winT": 225, "placeT": 471, "winD": 996, "placeD": 62}, {"date": "2026-05-23", "race": 1, "program": "The Koh Lipe Stakes", "cls": "Country-Bred Class 5", "post": "0.15 pm", "dist": 1200, "prize": "94500 (51000-19500-13500-6000-4500)", "no": 3, "name": "Puthita", "th": "พุธิตา", "blinkers": "yes", "injury": "no", "sire": "Wilko", "dam": "Time Zone", "color": "chestnut", "country": "thai", "sex": "mare", "bar": 3, "reg": "N836", "rating": "36(-3)", "weight": 58.5, "form": "(26)8-4-3-3-6", "jockey": "Tunya", "appr": "no", "trainer": "Arthit Vongsuwan", "stable": "Dao Nuea", "silk": "green with white star jacket green with white star sleeves green cap", "bday": "2020-02-10", "field": "soft", "wplus": 0, "ps": 5, "p3": 5, "psp": 3, "place": 3, "time": "1/16.12", "winT": 3100, "placeT": 2415, "winD": 69, "placeD": 14}, {"date": "2026-06-07", "race": 5, "program": "The Black Velvet Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1200, "prize": "42000-16000-12000-6000-4500", "no": 3, "name": "Champs Elysees", "th": "ฌ็องเซลิเซ่", "blinkers": "no", "injury": "no", "sire": "Zoustar", "dam": "Laughing", "color": "bay", "country": "aus", "sex": "gelding", "bar": 7, "reg": "V124", "rating": "95(-2)", "weight": 57.5, "form": "(26)6-3-5-9-4", "jockey": "Visanukorn", "appr": "no", "trainer": "Saranyu Tanyacharoenkul", "stable": "J.K. Farm", "silk": "Pink & \"J.K.\" jkt. Violet slvs. Pink cap", "bday": "2016-08-10", "field": "soft", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 9, "time": "1/16.48", "winT": 1315, "placeT": 2000, "winD": 158, "placeD": 24}, {"date": "2026-06-07", "race": 5, "program": "The Black Velvet Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1200, "prize": "42000-16000-12000-6000-4500", "no": 12, "name": "Mangkorn Yee Sip See", "th": "มังกรยี่สิบสี่", "blinkers": "yes", "injury": "no", "sire": "Shalaa", "dam": "Chivonne", "color": "bay", "country": "aus", "sex": "gelding", "bar": 10, "reg": "T107", "rating": "71(0)", "weight": 52, "form": "(26)x-3-x-5-4", "jockey": "Somkit", "appr": "no", "trainer": "Wanchai Klaoboon", "stable": "Mangkorn 639", "silk": "Violet/White star jkt. Blue slvs. Violet cap", "bday": "2019-09-20", "field": "soft", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 10, "time": "1/16.49", "winT": 1270, "placeT": 1480, "winD": 164, "placeD": 33}, {"date": "2026-05-23", "race": 1, "program": "The Koh Lipe Stakes", "cls": "Country-Bred Class 5", "post": "0.15 pm", "dist": 1200, "prize": "94500 (51000-19500-13500-6000-4500)", "no": 7, "name": "Phu Thap Boek", "th": "ภูทับเบิก", "blinkers": "yes", "injury": "no", "sire": "Wilko", "dam": "Sri Nual", "color": "chestnut", "country": "thai", "sex": "stallion", "bar": 4, "reg": "N913", "rating": "20(0)", "weight": 52, "form": "(26)4-7-6-8-7", "jockey": "Chanothai", "appr": "no", "trainer": "Pradit Chaipanit", "stable": "P.P.A.", "silk": "red and yellow hoop with P grey jacket grey and yellow hoop sleeves red cap", "bday": "2022-07-06", "field": "soft", "wplus": 0, "ps": 2, "p3": 3, "psp": 4, "place": 4, "time": "1/16.84", "winT": 965, "placeT": 1205, "winD": 224, "placeD": 29}, {"date": "2026-06-07", "race": 5, "program": "The Black Velvet Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1200, "prize": "42000-16000-12000-6000-4500", "no": 9, "name": "Sunshine", "th": "ซันไชน์", "blinkers": "yes", "injury": "no", "sire": "Zensational", "dam": "Caraluna", "color": "grey", "country": "arg", "sex": "gelding", "bar": 3, "reg": "V138", "rating": "73(-4)", "weight": 52.5, "form": "(26)9-6-11-8-6", "jockey": "Sangroong", "appr": "no", "trainer": "Somboon Boonsamrej", "stable": "Rujanaseri", "silk": "Pink & Yellow jkt. Pink cap", "bday": "2016-08-02", "field": "soft", "wplus": 0, "ps": 5, "p3": 0, "psp": 0, "place": 11, "time": "1/17.12", "winT": 123, "placeT": 376, "winD": 1699, "placeD": 131}, {"date": "2026-05-23", "race": 1, "program": "The Koh Lipe Stakes", "cls": "Country-Bred Class 5", "post": "0.15 pm", "dist": 1200, "prize": "94500 (51000-19500-13500-6000-4500)", "no": 6, "name": "F Four", "th": "เอฟโฟร์", "blinkers": "no", "injury": "no", "sire": "Wilko", "dam": "Lightning Fast", "color": "bay", "country": "thai", "sex": "stallion", "bar": 5, "reg": "N898", "rating": "33(+1)", "weight": 57, "form": "(26)3-2-4-4-5", "jockey": "Nitikorn", "appr": "no", "trainer": "Arthit Vongsuwan", "stable": "Dao Nuea", "silk": "green with white star jacket green with white star sleeves green cap", "bday": "2021-07-11", "field": "soft", "wplus": 0, "ps": "n/a", "p3": "n/a", "psp": 5, "place": 6, "time": "1/17.21", "winT": 2140, "placeT": 2299, "winD": 101, "placeD": 15}, {"date": "2026-05-23", "race": 1, "program": "The Koh Lipe Stakes", "cls": "Country-Bred Class 5", "post": "0.15 pm", "dist": 1200, "prize": "94500 (51000-19500-13500-6000-4500)", "no": 4, "name": "Great Spin", "th": "เกรทสปิน", "blinkers": "no", "injury": "no", "sire": "Wilko", "dam": "Kwanjai Pedriw", "color": "dark bay", "country": "thai", "sex": "mare", "bar": 2, "reg": "N925", "rating": "34(-4)", "weight": 57.5, "form": "(25)9-4-6-5-7", "jockey": "Suntipap", "appr": "no", "trainer": "Viraj Kawianvong", "stable": "Roongrangsri", "silk": "sky blue jacket 2 white hoops pink sleeves yellow cap", "bday": "2022-05-06", "field": "soft", "wplus": 0, "ps": "n/a", "p3": "n/a", "psp": "n/a", "place": 5, "time": "1/17.93", "winT": 2565, "placeT": 2890, "winD": 84, "placeD": 12}, {"date": "2026-05-23", "race": 1, "program": "The Koh Lipe Stakes", "cls": "Country-Bred Class 5", "post": "0.15 pm", "dist": 1200, "prize": "94500 (51000-19500-13500-6000-4500)", "no": 2, "name": "Thidadin", "th": "ธิดาดิน", "blinkers": "no", "injury": "no", "sire": "Lyler Trucker", "dam": "Golden Given", "color": "chestnut", "country": "thai", "sex": "mare", "bar": 6, "reg": "N608", "rating": "36(0)", "weight": 58.5, "form": "(26)5-4-10-7-6", "jockey": "Rathakorn", "appr": "yes", "trainer": "Prawat Rongsoongnern", "stable": "Luang Robrookij", "silk": "white jacket red sleeves white cap", "bday": "2015-11-18", "field": "soft", "wplus": -1.5, "ps": 4, "p3": 4, "psp": "n/a", "place": 7, "time": "1/18.74", "winT": 12235, "placeT": 1805, "winD": 17, "placeD": 19}, {"date": "2026-05-10", "race": 5, "program": "May The Horse Be With You Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1300, "prize": "80500 (42000-16000-12000-6000-4500)", "no": 3, "name": "Mangkorn Spirit", "th": "มังกรสปิริต", "blinkers": "yes", "injury": "no", "sire": "Charm Spirit", "dam": "Star Class Eagle", "color": "bay", "country": "nz", "sex": "gelding", "bar": 4, "reg": "X27", "rating": "95(+1)", "weight": 57.5, "form": "(26)4-7-x(25)6-2", "jockey": "Amonrit", "appr": "no", "trainer": "Wanchai Klaoboon", "stable": "Mangkorn 639", "silk": "Violet/White star jkt. Blue slvs. Violet cap", "bday": "2018-11-12", "field": "soft", "wplus": 0, "ps": 3, "p3": 1, "psp": 1, "place": 1, "time": "1/21.79", "winT": 1540, "placeT": 2120, "winD": 153, "placeD": 18}, {"date": "2026-05-10", "race": 5, "program": "May The Horse Be With You Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1300, "prize": "80500 (42000-16000-12000-6000-4500)", "no": 7, "name": "Mangkorn Tong Sip See", "th": "มังกรตองสิบสี่", "blinkers": "yes", "injury": "no", "sire": "Sebring", "dam": "Maxican Gal", "color": "bar", "country": "aus", "sex": "gelding", "bar": 7, "reg": "M179", "rating": "78(+1)", "weight": 53.5, "form": "(26)3-3-4-4-2", "jockey": "Charnsuek", "appr": "no", "trainer": "Viroj Nookong", "stable": "Mangkorn 639", "silk": "Violet/White star jkt. Blue slvs. Violet cap", "bday": "2019-09-06", "field": "soft", "wplus": 0, "ps": 4, "p3": 0, "psp": 3, "place": 2, "time": "1/22.02", "winT": 12535, "placeT": 3185, "winD": 18, "placeD": 12}, {"date": "2026-05-10", "race": 5, "program": "May The Horse Be With You Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1300, "prize": "80500 (42000-16000-12000-6000-4500)", "no": 2, "name": "Champs Elysees", "th": "ฌ็องเซลิเซ่", "blinkers": "no", "injury": "no", "sire": "Zoustar", "dam": "Laughing", "color": "bay", "country": "aus", "sex": "gelding", "bar": 9, "reg": "V124", "rating": "97(-1)", "weight": 58, "form": "(26)5-9-4-5-x", "jockey": "Jatuphon", "appr": "no", "trainer": "Saranyu Tanyacharoenkul", "stable": "J.K. Farm", "silk": "Pink & \"J.K.\" jkt. Violet slvs. Pink cap", "bday": "2016-08-10", "field": "soft", "wplus": 0, "ps": 5, "p3": 5, "psp": 4, "place": 3, "time": "1/22.98", "winT": 3595, "placeT": 2820, "winD": 65, "placeD": 14}, {"date": "2026-05-10", "race": 5, "program": "May The Horse Be With You Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1300, "prize": "80500 (42000-16000-12000-6000-4500)", "no": 1, "name": "Charming Win", "th": "ชาร์มมิ่งวิน", "blinkers": "no", "injury": "no", "sire": "Charm Spirit", "dam": "Jenuwin", "color": "bay", "country": "nz", "sex": "gelding", "bar": 5, "reg": "M64", "rating": "115(+1)", "weight": 62.5, "form": "(26)2-1-1-2-10", "jockey": "Promrop", "appr": "no", "trainer": "Paichayont Boosabong", "stable": "B.S.P.", "silk": "Blue jkt. Sky blue sash white cap", "bday": "2020-09-14", "field": "soft", "wplus": 0, "ps": 2, "p3": 2, "psp": 2, "place": 4, "time": "1/23.12", "winT": 14486, "placeT": 3750, "winD": 16, "placeD": 10}, {"date": "2026-05-10", "race": 5, "program": "May The Horse Be With You Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1300, "prize": "80500 (42000-16000-12000-6000-4500)", "no": 5, "name": "Star of Isaan", "th": "สตาร์อ๊อฟอีสาน", "blinkers": "yes", "injury": "no", "sire": "Churchill", "dam": "Melody Calling", "color": "bay", "country": "aus", "sex": "stallion", "bar": 2, "reg": "U44", "rating": "80(0)", "weight": 54, "form": "(26)4-7-2-6-5", "jockey": "Wanmongkol", "appr": "no", "trainer": "Denchart Tunjindaprateep", "stable": "F.A. Group", "silk": "Yellow & Blue stripes jkt. Yellow slvs. Yellow cap", "bday": "2021-11-08", "field": "soft", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 5, "time": "1/24.61", "winT": 5775, "placeT": 3010, "winD": 41, "placeD": 13}, {"date": "2026-05-10", "race": 5, "program": "May The Horse Be With You Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1300, "prize": "80500 (42000-16000-12000-6000-4500)", "no": 6, "name": "Sunshine", "th": "ซันไชน์", "blinkers": "yes", "injury": "no", "sire": "Zensational", "dam": "Caraluna", "color": "grey", "country": "arg", "sex": "gelding", "bar": 3, "reg": "V138", "rating": "78(0)", "weight": 53.5, "form": "(26)11-8-6-7-2", "jockey": "Rucharotorn", "appr": "no", "trainer": "Somboon Boonsamrej", "stable": "Rujanaseri", "silk": "Pink & Yellow jkt. Pink cap", "bday": "2016-08-02", "field": "soft", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 6, "time": "1/25.29", "winT": 95, "placeT": 320, "winD": 2492, "placeD": 124}, {"date": "2026-05-10", "race": 5, "program": "May The Horse Be With You Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1300, "prize": "80500 (42000-16000-12000-6000-4500)", "no": 8, "name": "Mangkorn Tong Sip Ha", "th": "มังกรตองสิบห้า", "blinkers": "no", "injury": "no", "sire": "Tavistock", "dam": "Ria's Pride", "color": "grey", "country": "nz", "sex": "gelding", "bar": 8, "reg": "K333", "rating": "77(0)", "weight": 53, "form": "(25)10-3-3-8-8", "jockey": "Aekapan", "appr": "no", "trainer": "Viroj Nookong", "stable": "Mangkorn 639", "silk": "Violet/White star jkt. Blue slvs. Violet cap", "bday": "2016-10-25", "field": "soft", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 7, "time": "1/25.88", "winT": 320, "placeT": 765, "winD": 740, "placeD": 52}, {"date": "2026-05-10", "race": 5, "program": "May The Horse Be With You Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1300, "prize": "80500 (42000-16000-12000-6000-4500)", "no": 4, "name": "Stand By Me", "th": "สแตนบายมี", "blinkers": "no", "injury": "no", "sire": "Zousain", "dam": "Cinzia", "color": "bay", "country": "aus", "sex": "gelding", "bar": 6, "reg": "U43", "rating": "89(-2)", "weight": 56, "form": "(26)6-3-5-1-3", "jockey": "Juthathep", "appr": "no", "trainer": "Saranyu Tanyacharoenkul", "stable": "J.K. Farm", "silk": "Pink & \"J.K.\" jkt. Violet slvs. Pink cap", "bday": "2021-10-02", "field": "soft", "wplus": 0, "ps": 0, "p3": 3, "psp": 5, "place": 8, "time": "1/26.29", "winT": 500, "placeT": 955, "winD": 473, "placeD": 41}, {"date": "2026-06-07", "race": 5, "program": "The Black Velvet Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1200, "prize": "42000-16000-12000-6000-4500", "no": 7, "name": "Leo", "th": "ลีโอ", "blinkers": "no", "injury": "no", "sire": "Per Incato", "dam": "Mojo", "color": "brown", "country": "brown", "sex": "gelding", "bar": 9, "reg": "V136", "rating": "77(0)", "weight": 53.5, "form": "(26)11-12(25)2T-5T-1", "jockey": "Choksinin", "appr": "no", "trainer": "Prawatsad Samaehadee", "stable": "Roongsupakrit", "silk": "Wht. Pink star jkt. Pink & Wht. Star & Wht. Hoop slvs. Wht. & Pink Star cap", "bday": "2016-08-21", "field": "soft", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 12, "time": "1/26.57", "winT": 170, "placeT": 300, "winD": 1229, "placeD": 165}, {"date": "2026-05-10", "race": 5, "program": "May The Horse Be With You Stakes", "cls": "Thoroughbred Class 1", "post": "2.35 pm", "dist": 1300, "prize": "80500 (42000-16000-12000-6000-4500)", "no": 9, "name": "Mee Numsap", "th": "มีนำทรัพย์", "blinkers": "no", "injury": "no", "sire": "Per Incanto", "dam": "Kaycent", "color": "bay/brown", "country": "nz", "sex": "gelding", "bar": 1, "reg": "K260", "rating": "73(-1)", "weight": 52, "form": "(26)8-6-1(25)1-3", "jockey": "Kattachai", "appr": "no", "trainer": "Phoochit Saithanu", "stable": "Kajorndej", "silk": "Green & white stripes jkt. White cap", "bday": "2016-09-05", "field": "soft", "wplus": 1, "ps": 1, "p3": 4, "psp": 0, "place": 9, "time": "1/28.28", "winT": 625, "placeT": 1535, "winD": 378, "placeD": 26}, {"date": "2026-05-23", "race": 1, "program": "The Koh Lipe Stakes", "cls": "Country-Bred Class 5", "post": "0.15 pm", "dist": 1200, "prize": "94500 (51000-19500-13500-6000-4500)", "no": 8, "name": "La Vie En Rose", "th": "ลาวีอองโรส", "blinkers": "no", "injury": "no", "sire": "Coal Play", "dam": "Riktor", "color": "chestnut", "country": "thai", "sex": "mare", "bar": 1, "reg": "N770", "rating": "20(-1)", "weight": 52, "form": "(26)6-5-8-5-6", "jockey": "Wanmongkol", "appr": "no", "trainer": "Denchart Tunjindaprateep", "stable": "Orawan", "silk": "blue and white stripes jecket blue and white stripes cap", "bday": "2019-05-09", "field": "soft", "wplus": 0, "ps": "n/a", "p3": "n/a", "psp": "n/a", "place": "scratching", "time": "n/a", "winT": "n/a", "placeT": "n/a", "winD": "n/a", "placeD": "n/a"}, {"date": "2025-08-03", "race": 8, "program": "The 2nd H.M. The Queen's Cup", "cls": "Country-Bred Class Handicap", "post": "4.15 pm", "dist": 1560, "prize": "465000 (300000-70000-50000-30000-15000)", "no": 1, "name": "Concorde", "th": "คองคอร์ด", "blinkers": "yes", "injury": "no", "sire": "Cole Play", "dam": "Dollydynamite", "color": "bay", "country": "thai", "sex": "stallion", "bar": 2, "reg": "N879", "rating": "54(-1)", "weight": 58.5, "form": "(25)6-8-3-5-7", "jockey": "Nitikorn", "appr": "no", "trainer": "Arthit Vongsuwan", "stable": "Dao Nuea", "silk": "Green with White Star jkt. Green with White Star slvs. Green cap", "bday": "2020-02-18", "field": "ปกติ", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 8, "time": "1/34.02", "winT": 2915, "placeT": 3563, "winD": 196, "placeD": 38}, {"date": "2026-05-23", "race": 4, "program": "The Koh Chang Stakes", "cls": "New Thoroughbred Class 3", "post": "2.00 pm", "dist": 1200, "prize": "100000 (54000-21000-14500-6000-4500)", "no": 3, "name": "Runway", "th": "รันเวย์", "blinkers": "no", "injury": "no", "sire": "All Too Hard", "dam": "Secretary Bird", "color": "bay", "country": "aus", "sex": "colt", "bar": 6, "reg": "N959", "rating": "62(+62)", "weight": 55.5, "form": "(26)3(25)1T", "jockey": "Visanukorn", "appr": "no", "trainer": "Prasarn Khankwa", "stable": "Ploysakda", "silk": "Pink & sky blue jkt. Squares jkt. & cap", "bday": "2022-10-26", "field": "นุ่ม", "wplus": 0, "ps": 2, "p3": 2, "psp": 3, "place": 4, "time": "1/13.52", "winT": 7950, "placeT": 2405, "winD": 23, "placeD": 12}, {"date": "2026-05-23", "race": 4, "program": "The Koh Chang Stakes", "cls": "New Thoroughbred Class 3", "post": "2.00 pm", "dist": 1200, "prize": "100000 (54000-21000-14500-6000-4500)", "no": 4, "name": "Flicka", "th": "ฟลิคก้า", "blinkers": "no", "injury": "no", "sire": "Kermadec", "dam": "Sheer Fantazee", "color": "chestnut", "country": "aus", "sex": "mare", "bar": 3, "reg": "O70/7", "rating": "61(+5)", "weight": 55, "form": "(26)1-4-4-3-3", "jockey": "Wanmongkol", "appr": "no", "trainer": "Pradit Manwong", "stable": "Sirikarn", "silk": "Orange with Blue \"M\" & Blue horse head on back jkt. Blue slvs. Blue cap", "bday": "2020-10-24", "field": "นุ่ม", "wplus": 0, "ps": 0, "p3": 3, "psp": 1, "place": 1, "time": "1/11.77", "winT": 12500, "placeT": 2550, "winD": 15, "placeD": 11}, {"date": "2025-11-17", "race": 1, "program": "SAOW MA Cup", "cls": "Country-Bred", "post": "8.00 pm", "dist": 1200, "prize": 0, "no": 1, "name": "Malimare", "th": "มะลิเมร์", "blinkers": "no", "injury": "no", "color": "pink", "country": "thai", "sex": "filly", "bar": 1, "reg": "SM01", "weight": 52, "jockey": "SAOW MA", "appr": "no", "trainer": "SAOW MA", "stable": "RBSMC", "silk": "pink", "bday": "2025-09-06", "field": "ปกติ", "wplus": 0, "ps": 1, "p3": 1, "psp": 1, "place": 1, "time": "1/12.39", "winT": 0, "placeT": 0, "winD": 0, "placeD": 0}, {"date": "2026-05-23", "race": 4, "program": "The Koh Chang Stakes", "cls": "New Thoroughbred Class 3", "post": "2.00 pm", "dist": 1200, "prize": "100000 (54000-21000-14500-6000-4500)", "no": 5, "name": "Woman In Love", "th": "วูแมนอินเลิฟ", "blinkers": "no", "injury": "no", "sire": "Heroic Valour", "dam": "English Summer", "color": "chestnut", "country": "aus", "sex": "mare", "bar": 2, "reg": "N950", "rating": "61(+1)", "weight": 55, "form": "(26)3-5-9-5T", "jockey": "Vjitkorn", "appr": "no", "trainer": "Pichit Sriipradit", "stable": "Porn Prasert", "silk": "Red jkt. yellow and white star back Red slvs white star & white cap red star", "bday": "2021-10-31", "field": "นุ่ม", "wplus": 0, "ps": 5, "p3": 5, "psp": 5, "place": 7, "time": "1/13.94", "winT": 1965, "placeT": 1790, "winD": 97, "placeD": 16}, {"date": "2026-05-23", "race": 4, "program": "The Koh Chang Stakes", "cls": "New Thoroughbred Class 3", "post": "2.00 pm", "dist": 1200, "prize": "100000 (54000-21000-14500-6000-4500)", "no": 6, "name": "Star Ozone", "th": "สตาร์โอโซน", "blinkers": "no", "injury": "no", "sire": "Zousain", "dam": "Melaleuca", "color": "chestnut", "country": "aus", "sex": "gelding", "bar": 4, "reg": "N950", "rating": "59(N)", "weight": 54, "form": "(26)x-4T", "jockey": "Jomkaen", "appr": "yes", "trainer": "Denchart Tunjindaprateep", "stable": "Orawan", "silk": "Blue & White stripes jkt. Blue & White stripes cap", "bday": "2021-10-31", "field": "นุ่ม", "wplus": -1.5, "ps": 0, "p3": 0, "psp": 0, "place": 2, "time": "1/13.26", "winT": 805, "placeT": 1080, "winD": 236, "placeD": 27}, {"date": "2025-08-03", "race": 8, "program": "The 2nd H.M. The Queen's Cup", "cls": "Country-Bred Class Handicap", "post": "4.15 pm", "dist": 1560, "prize": "465000 (300000-70000-50000-30000-15000)", "no": 2, "name": "Louisiana", "th": "ลุยเซียน่า", "blinkers": "no", "injury": "no", "sire": "Cole Play", "dam": "Outlaws Angel", "color": "bay", "country": "thai", "sex": "stallion", "bar": 9, "reg": "N853", "rating": "100(+2)", "weight": 58.5, "form": "(25)3-4-1-2-3", "jockey": "Roongaroon", "appr": "no", "trainer": "Somboon Boonsamrej", "stable": "Pichakorn", "silk": "Bronze & White stripe with \"PK\" jkt. Bronze & White slvs. Bronze cap", "bday": "2020-02-28", "field": "ปกติ", "wplus": 0, "ps": 2, "p3": 2, "psp": 2, "place": 5, "time": "1/32.94", "winT": 32909, "placeT": 12395, "winD": 17, "placeD": 11}, {"date": "2025-08-03", "race": 8, "program": "The 2nd H.M. The Queen's Cup", "cls": "Country-Bred Class Handicap", "post": "4.15 pm", "dist": 1560, "prize": "465000 (300000-70000-50000-30000-15000)", "no": 3, "name": "Krubnai", "th": "ครับนาย", "blinkers": "yes", "injury": "no", "sire": "Cole Play", "dam": "El Jersey", "color": "chestnut", "country": "thai", "sex": "stallion", "bar": 1, "reg": "N643", "rating": "61(0)", "weight": 57, "form": "(26)4-10-8-5-7", "jockey": "Pongsakorn", "appr": "no", "trainer": "Viraj Kawianvong", "stable": "Suparbooroot", "silk": "Sky bl 3 Green hoop & front YC & back SUPARBOOROOT jkt. Sky.bl 3 Gm. Hoop slvs. Bl.sky cap", "bday": "2017-02-09", "field": "ปกติ", "wplus": 0, "ps": 5, "p3": 4, "psp": 5, "place": 4, "time": "1/32.53", "winT": 14510, "placeT": 9820, "winD": 39, "placeD": 14}, {"date": "2025-08-03", "race": 8, "program": "The 2nd H.M. The Queen's Cup", "cls": "Country-Bred Class Handicap", "post": "4.15 pm", "dist": 1560, "prize": "465000 (300000-70000-50000-30000-15000)", "no": 4, "name": "One More", "th": "วันมอร์", "blinkers": "no", "injury": "no", "sire": "Buddy Hewmer", "dam": "Classic Take Over", "color": "chestnut", "country": "thai", "sex": "stallion", "bar": 10, "reg": "N732", "rating": "92(0)", "weight": 57, "form": "(25)4-1-6-1-1", "jockey": "Asawin", "appr": "no", "trainer": "Suphachai Suwanchak", "stable": "Apirom", "silk": "Black jkt. Pink slvs. five hearts front and back. Pink cap", "bday": "2017-09-17", "field": "ปกติ", "wplus": 0, "ps": 1, "p3": 1, "psp": 1, "place": 3, "time": "1/32.23", "winT": 9570, "placeT": 7986, "winD": 59, "placeD": 17}, {"date": "2025-08-03", "race": 8, "program": "The 2nd H.M. The Queen's Cup", "cls": "Country-Bred Class Handicap", "post": "4.15 pm", "dist": 1560, "prize": "465000 (300000-70000-50000-30000-15000)", "no": 5, "name": "Nong Narada", "th": "น้องณาราฏา", "blinkers": "no", "injury": "no", "sire": "Cole Play", "dam": "Zawanash Cash", "color": "bay", "country": "thai", "sex": "mare", "bar": 4, "reg": "N790", "rating": "84(-1)", "weight": 57, "form": "(25)3-5-10-5", "jockey": "Supakorn", "appr": "no", "trainer": "Rangsan Seesai", "stable": "Pichetchai", "silk": "Yellow jkt. & cap red spots", "bday": "2018-07-13", "field": "ปกติ", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 2, "time": "1/32.18", "winT": 24105, "placeT": 10866, "winD": 23, "placeD": 12}, {"date": "2025-08-03", "race": 8, "program": "The 2nd H.M. The Queen's Cup", "cls": "Country-Bred Class Handicap", "post": "4.15 pm", "dist": 1560, "prize": "465000 (300000-70000-50000-30000-15000)", "no": 6, "name": "Sia Show Nuea", "th": "เสี่ยโชว์เหนือ", "blinkers": "yes", "injury": "no", "sire": "Wilko", "dam": "Burning Up", "color": "chestnut", "country": "thai", "sex": "stallion", "bar": 12, "reg": "N803", "rating": "87(0)", "weight": 57, "form": "(25)5-3-3-4-9", "jockey": "Tunya", "appr": "no", "trainer": "Arthit Vongsuwan", "stable": "Dao Nuea", "silk": "Green with White Star jkt. Green with White Star slvs. Green cap", "bday": "2019-09-19", "field": "ปกติ", "wplus": 0, "ps": 3, "p3": 3, "psp": 3, "place": 6, "time": "1/32.96", "winT": 2856, "placeT": 4719, "winD": 200, "placeD": 29}, {"date": "2025-08-03", "race": 8, "program": "The 2nd H.M. The Queen's Cup", "cls": "Country-Bred Class Handicap", "post": "4.15 pm", "dist": 1560, "prize": "465000 (300000-70000-50000-30000-15000)", "no": 7, "name": "Akaradech", "th": "อัคราเดช", "blinkers": "no", "injury": "no", "sire": "Cole Play", "dam": "Loan some Hill", "color": "bay", "country": "thai", "sex": "stallion", "bar": 3, "reg": "N838", "rating": "78(+1)", "weight": 57, "form": "(25)6-1-9-3-6", "jockey": "Suntipap", "appr": "no", "trainer": "Kanaram Srikatanam", "stable": "Amnuaychai", "silk": "Yellow & sky blue jkt. Yellow slvs. Sky blue cap", "bday": "2020-05-10", "field": "ปกติ", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": "scatching", "winT": 0, "placeT": 0, "winD": 0, "placeD": 0}, {"date": "2025-08-03", "race": 8, "program": "The 2nd H.M. The Queen's Cup", "cls": "Country-Bred Class Handicap", "post": "4.15 pm", "dist": 1560, "prize": "465000 (300000-70000-50000-30000-15000)", "no": 8, "name": "Wan Heng", "th": "วันเฮง", "blinkers": "no", "injury": "no", "sire": "Cole Play", "dam": "Khaty Duchess", "color": "bay", "country": "thai", "sex": "stallion", "bar": 5, "reg": "N900", "rating": "77(-4)", "weight": 57, "form": "(25)8-7-6-x-4", "jockey": "Chanothai", "appr": "no", "trainer": "Prawat Rongpoongnern", "stable": "Saisamphan", "silk": "White jkt. Stars blue slvs. Green hoop", "bday": "2021-08-17", "field": "ปกติ", "wplus": 0, "ps": 4, "p3": 5, "psp": 4, "place": 1, "time": "1/32.03", "winT": 4615, "placeT": 5345, "winD": 123, "placeD": 25}, {"date": "2025-08-03", "race": 8, "program": "The 2nd H.M. The Queen's Cup", "cls": "Country-Bred Class Handicap", "post": "4.15 pm", "dist": 1560, "prize": "465000 (300000-70000-50000-30000-15000)", "no": 9, "name": "Nong Veeya", "th": "น้องวีญ่า", "blinkers": "yes", "injury": "no", "sire": "Cole Play", "dam": "Enjoy The Afternoon", "color": "chestnut", "country": "thai", "sex": "mare", "bar": 7, "reg": "N806", "rating": "45(0)", "weight": 55.5, "form": "(25)9-12-6-5-5", "jockey": "Chailit", "appr": "no", "trainer": "Rangsan Seesai", "stable": "Pichetchai", "silk": "Yellow jkt. & cap red spots", "bday": "2018-04-01", "field": "ปกติ", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 9, "time": "1/35.39", "winT": 295, "placeT": 823, "winD": 1938, "placeD": 168}, {"date": "2025-08-03", "race": 8, "program": "The 2nd H.M. The Queen's Cup", "cls": "Country-Bred Class Handicap", "post": "4.15 pm", "dist": 1560, "prize": "465000 (300000-70000-50000-30000-15000)", "no": 10, "name": "Star Charm", "th": "สตาร์ชาร์ม", "blinkers": "yes", "injury": "no", "sire": "Wilko", "dam": "Lenora's Charm", "color": "chestnut", "country": "thai", "sex": "mare", "bar": 6, "reg": "N795", "rating": "80(0)", "weight": 55.5, "form": "(25)F-2-3-11-8", "jockey": "Chiragorn", "appr": "no", "trainer": "Viraj Kawianvong", "stable": "F.A. Group", "silk": "Yellow & Blue stripes jkt. Yellow slvs. Yellow cap", "bday": "2018-03-20", "field": "ปกติ", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": "scatching", "winT": 0, "placeT": 0, "winD": 0, "placeD": 0}, {"date": "2025-08-03", "race": 8, "program": "The 2nd H.M. The Queen's Cup", "cls": "Country-Bred Class Handicap", "post": "4.15 pm", "dist": 1560, "prize": "465000 (300000-70000-50000-30000-15000)", "no": 11, "name": "Coco Love", "th": "โกโก้เลิฟ", "blinkers": "no", "injury": "no", "sire": "Wilko", "dam": "Ironbaby Angel", "color": "bay", "country": "thai", "sex": "mare", "bar": 11, "reg": "N885", "rating": "51(+2)", "weight": 55.5, "form": "(25)2-10-11-7-13", "jockey": "Jatuphon", "appr": "no", "trainer": "Nan Mongkolchainam", "stable": "Sumanat", "silk": "Red & Blue Square jkt. Blue with 2 Red hoop slvs. Red & Blue square cap", "bday": "2019-09-30", "field": "ปกติ", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 10, "time": "1/35.97", "winT": 1540, "placeT": 3250, "winD": 371, "placeD": 42}, {"date": "2025-08-03", "race": 8, "program": "The 2nd H.M. The Queen's Cup", "cls": "Country-Bred Class Handicap", "post": "4.15 pm", "dist": 1560, "prize": "465000 (300000-70000-50000-30000-15000)", "no": 12, "name": "Roongkaew", "th": "รุ้งแก้ว", "blinkers": "no", "injury": "no", "sire": "Tong Dai Dee", "dam": "Ticket to Frame", "color": "bay", "country": "thai", "sex": "mare", "bar": 8, "reg": "N896", "rating": "54(+1)", "weight": 55.5, "form": "(25)3-5-1-7-2", "jockey": "Sangroong", "appr": "no", "trainer": "Viraj Kawianvong", "stable": "Roongrangsri", "silk": "Sky blue jkt. 2 white hoops pink slvs. Yellow cap", "bday": "2021-02-20", "field": "ปกติ", "wplus": 0, "ps": 0, "p3": 0, "psp": 0, "place": 7, "time": "1/33.13", "winT": 1990, "placeT": 5091, "winD": 287, "placeD": 27}, {"date": "2026-05-23", "race": 4, "program": "The Koh Chang Stakes", "cls": "New Thoroughbred Class 3", "post": "2.00 pm", "dist": 1200, "prize": "100000 (54000-21000-14500-6000-4500)", "no": 7, "name": "Sabai Chiang", "th": "สไบเฉียง", "blinkers": "yes", "injury": "no", "sire": "North Pacific", "dam": "Ploveset", "color": "dark bay", "country": "aus", "sex": "colt", "bar": 8, "reg": "N946", "rating": "59(+59)", "weight": 54, "form": "(26)6-5T", "jockey": "Promrop", "appr": "no", "trainer": "Kanaram Srikatanam", "stable": "Chaophyaramrakob", "silk": "Red front yellow magic design jkt. Red slvs. Red cap", "bday": "2023-08-13", "field": "นุ่ม", "wplus": 0, "ps": 1, "p3": 0, "psp": 0, "place": 5, "time": "1/13.85", "winT": 2410, "placeT": 2080, "winD": 79, "placeD": 14}, {"date": "2025-11-17", "race": 1, "program": "SAOW MA Cup", "cls": "Thoroughbred", "post": "8.00 pm", "dist": 1200, "prize": 0, "no": 2, "name": "Popsigeld", "th": "ป๊อปไซเกิ้ลด์", "blinkers": "yes", "injury": "no", "color": "blue", "country": "aus", "sex": "gelding", "bar": 2, "reg": "SM02", "weight": 57, "jockey": "SAOW MA", "appr": "no", "trainer": "SAOW MA", "stable": "RBSMC", "silk": "blue", "bday": "2021-03-10", "field": "ปกติ", "wplus": 0, "ps": 2, "p3": 2, "psp": 2, "place": 1, "time": "1/12.39", "winT": 0, "placeT": 0, "winD": 0, "placeD": 0}, {"date": "2026-05-23", "race": 4, "program": "The Koh Chang Stakes", "cls": "New Thoroughbred Class 3", "post": "2.00 pm", "dist": 1200, "prize": "100000 (54000-21000-14500-6000-4500)", "no": 8, "name": "Sabiang Thong", "th": "เสบียงทอง", "blinkers": "no", "injury": "no", "sire": "Dubious", "dam": "Lucky Lips", "color": "chestnut", "country": "aus", "sex": "filly", "bar": 5, "reg": "N945", "rating": "59(+59)", "weight": 54, "form": "(26)9-6T", "jockey": "Sangroong", "appr": "no", "trainer": "Kanaram Srikatanam", "stable": "Chaophyaramrakob", "silk": "Red front yellow magic design jkt. Red slvs. Red cap", "bday": "2023-11-03", "field": "นุ่ม", "wplus": 0, "ps": 3, "p3": 1, "psp": 2, "place": 8, "time": "1/14.25", "winT": 290, "placeT": 505, "winD": 657, "placeD": 58}, {"date": "2025-11-17", "race": 1, "program": "SAOW MA Cup", "cls": "New Thoroughbred", "post": "8.00 pm", "dist": 1200, "prize": 0, "no": 3, "name": "Stally", "th": "สตอลลี่", "blinkers": "yes", "injury": "no", "color": "yellow", "country": "usa", "sex": "stallion", "bar": 3, "reg": "SM03", "weight": 62, "jockey": "SAOW MA", "appr": "no", "trainer": "SAOW MA", "stable": "RBSMC", "silk": "yellow", "bday": "2022-02-07", "field": "ปกติ", "wplus": 0, "ps": 3, "p3": 3, "psp": 3, "place": 1, "time": "1/12.39", "winT": 0, "placeT": 0, "winD": 0, "placeD": 0}], "registry": [{"th": "กริพเพน", "reg": "N931", "bday": "2021-09-30"}, {"th": "การะเกด", "reg": "N810", "bday": "2018-04-13"}, {"th": "ขวัญดาว", "reg": "N969", "bday": "2023-09-25"}, {"th": "ขอบคุณครับ", "reg": "M114", "bday": "2019-10-17"}, {"th": "ครับผม", "reg": "M62", "bday": "2020-11-22"}, {"th": "ควีนแองเจิ้ล", "reg": "N957", "bday": "2023-06-07"}, {"th": "คามิล่า", "reg": "N693", "bday": "2017-09-05"}, {"th": "คุณธัญชนก", "reg": "V55", "bday": "2018-09-27"}, {"th": "คุณอำนาจ", "reg": "X58", "bday": "2017-08-16"}, {"th": "จันทร์ฉาย", "reg": "N882", "bday": "2021-03-16"}, {"th": "จิ๊กกรู้", "reg": "N875", "bday": "2020-05-18"}, {"th": "จ้าวโช", "reg": "K259", "bday": "2016-09-27"}, {"th": "ซันฮีโร่", "reg": "U4", "bday": "2021-08-21"}, {"th": "ซาโจ้", "reg": "N852", "bday": "2017-05-02"}, {"th": "ซีดาน", "reg": "T57", "bday": "2018-10-08"}, {"th": "ณฐูเดช", "reg": "V77", "bday": "2016-08-21"}, {"th": "ณัฐเดช", "reg": "V77", "bday": "2016-08-21"}, {"th": "ดวงงามตา", "reg": "N868", "bday": "2019-12-31"}, {"th": "ดวงนที", "reg": "N636", "bday": "2017-05-06"}, {"th": "ดวงน้องเล็ก", "reg": "N856", "bday": "2019-05-03"}, {"th": "ดวงใจพี่", "reg": "N371", "bday": "2015-09-04"}, {"th": "ทองสมิธ", "reg": "V187", "bday": "2017-08-29"}, {"th": "ทาเคชิ", "reg": "T75", "bday": "2018-10-13"}, {"th": "ทิวดอร์เกรย์", "reg": "N927", "bday": "2020-09-11"}, {"th": "ธงเอก", "reg": "M61", "bday": "2020-11-10"}, {"th": "ธิดาดิน", "reg": "N608", "bday": "2015-11-18"}, {"th": "นอร์ทสตาร์", "reg": "H550", "bday": "2014-09-17"}, {"th": "นับตังค์", "reg": "N767", "bday": "2018-02-01"}, {"th": "น้องบีบี", "reg": "N787", "bday": "2018-03-27"}, {"th": "น้องมาวิน", "reg": "H74", "bday": "2015-10-12"}, {"th": "น้องเอ็นดู", "reg": "N870", "bday": "2019-11-21"}, {"th": "น้องใหม่", "reg": "K40", "bday": "2019-10-23"}, {"th": "น้ำเหนือ", "reg": "N897", "bday": "2021-07-31"}, {"th": "น้ำเหนือ", "reg": "N987", "bday": "2021-07-31"}, {"th": "บลูมมิ้งวิล", "reg": "N948", "bday": "2023-06-27"}, {"th": "บลูอาย", "reg": "T125", "bday": "2016-01-16"}, {"th": "บอสวัช", "reg": "O70/7", "bday": "2020-10-24"}, {"th": "บิ๊กจอห์นแมนนิวดร้า", "reg": "N899", "bday": "2022-03-09"}, {"th": "บิ๊กเฮง", "reg": "H495", "bday": "2016-05-10"}, {"th": "ปั๊มปัย", "reg": "K2", "bday": "2016-09-18"}, {"th": "ปิงปอง", "reg": "U18", "bday": "2021-09-23"}, {"th": "ปิ่นเพชร", "reg": "V74", "bday": "2017-10-10"}, {"th": "ปีเตอร์แมนนิวดร้า", "reg": "K138", "bday": "2016-08-21"}, {"th": "ผกาดี", "reg": "M176", "bday": "2019-09-30"}, {"th": "ผ่านฟ้า", "reg": "N517", "bday": "2015-06-13"}, {"th": "ฝนเหนือ", "reg": "N907", "bday": "2021-05-08"}, {"th": "พยนต์หนึ่ง", "reg": "V178", "bday": "2016-10-11"}, {"th": "พยัคฆ์ธงไชย", "reg": "M173", "bday": "2019-09-20"}, {"th": "พรโสภา", "reg": "N893", "bday": "2020-07-05"}, {"th": "พลังชัย", "reg": "K77", "bday": "2014-11-08"}, {"th": "พุธิตา", "reg": "N836", "bday": "2020-02-10"}, {"th": "ฟลายอิ้งเลดี้", "reg": "V245", "bday": "2017-10-21"}, {"th": "ฟอลโล่มี", "reg": "T231", "bday": "2019-07-02"}, {"th": "ฟาริส", "reg": "N931", "bday": "2021-09-30"}, {"th": "ฟาสเตอร์", "reg": "N941", "bday": "2022-05-04"}, {"th": "ภัทรสยาม", "reg": "N971", "bday": "2023-12-21"}, {"th": "ภูทับเบิก", "reg": "N913", "bday": "2022-07-06"}, {"th": "มงคลปรีชา", "reg": "N756", "bday": "2017-07-07"}, {"th": "มงคลมังกร", "reg": "M87", "bday": "2019-10-25"}, {"th": "มงคลสาธุ", "reg": "T162", "bday": "2018-08-13"}, {"th": "มังกรจรัสแสง", "reg": "K439", "bday": "2016-09-11"}, {"th": "มังกรชาตรี", "reg": "M52", "bday": "2019-09-09"}, {"th": "มังกรตองสอง", "reg": "K325", "bday": "2015-08-27"}, {"th": "มังกรตองสิบ", "reg": "M127", "bday": "2020-10-10"}, {"th": "มังกรตองสิบสอง", "reg": "K456", "bday": "2017-05-09"}, {"th": "มังกรตองสิบเก้า", "reg": "T96", "bday": "2017-10-31"}, {"th": "มังกรตองสิบเอ็ด", "reg": "H383", "bday": "2015-09-28"}, {"th": "มังกรน้อย", "reg": "H12", "bday": "2014-10-20"}, {"th": "มังกรบิน", "reg": "U106", "bday": "2017-09-23"}, {"th": "มังกรบิ๊กเรท", "reg": "X26", "bday": "2018-09-14"}, {"th": "มังกรภักดี", "reg": "M66", "bday": "2019-10-25"}, {"th": "มังกรมหากาฬ", "reg": "T46", "bday": "2019-09-18"}, {"th": "มังกรมั้งมี", "reg": "K358", "bday": "2017-10-21"}, {"th": "มังกรหลวง", "reg": "V290", "bday": "2017-09-28"}, {"th": "มังกรอลังการ", "reg": "M220", "bday": "2019-10-25"}, {"th": "มังกรเซี่ยงไฮ้", "reg": "H380", "bday": "2015-09-04"}, {"th": "มังกรแสงรุ้ง", "reg": "T43", "bday": "2018-10-21"}, {"th": "มังกรโชคดี", "reg": "T140", "bday": "2019-08-17"}, {"th": "มังกรโตเกียว", "reg": "K455", "bday": "2017-03-01"}, {"th": "มังกรโอฬาร", "reg": "C21", "bday": "2013-09-24"}, {"th": "มีโชคชัย", "reg": "K53", "bday": "2015-09-19"}, {"th": "ม้าลูกพี่", "reg": "K66", "bday": "2016-09-11"}, {"th": "ม้าเก้าเจริญ", "reg": "H375", "bday": "2015-03-18"}, {"th": "ยอดธง", "reg": "T195", "bday": "2019-05-03"}, {"th": "ยอดมังกร", "reg": "H294", "bday": "2014-10-11"}, {"th": "ยูท่าห์", "reg": "N883", "bday": "2021-02-16"}, {"th": "รอยัลชิค", "reg": "V78", "bday": "2016-10-07"}, {"th": "รักของเรา", "reg": "X68", "bday": "2019-10-30"}, {"th": "รักนาย", "reg": "N888", "bday": "2020-09-22"}, {"th": "ลักกี้เฟมัส", "reg": "V276", "bday": "2017-09-07"}, {"th": "ลาวีออง โรส", "reg": "N770", "bday": "2019-05-09"}, {"th": "ลูกฝ้าย", "reg": "N894", "bday": "2019-04-25"}, {"th": "ลูกอุดร", "reg": "V134", "bday": "2015-07-13"}, {"th": "ลูกแก้ว", "reg": "H136", "bday": "2015-09-16"}, {"th": "ลูมินัส", "reg": "N873", "bday": "2019-06-10"}, {"th": "วงเดือน", "reg": "M968", "bday": "2013-04-10"}, {"th": "วอชิงตัน", "reg": "E149", "bday": "2014-09-16"}, {"th": "วินมาร์ค", "reg": "N809", "bday": "2018-12-03"}, {"th": "วินส์วัน", "reg": "M97", "bday": "2019-08-27"}, {"th": "วินเดอะเดย์", "reg": "N663", "bday": "2017-05-02"}, {"th": "วิลเลียมพาวเวอร์", "reg": "X67", "bday": "2017-10-10"}, {"th": "วิลเลี่ยมพาวเวอร์", "reg": "X67", "bday": "2017-10-10"}, {"th": "วิ่งสู้ฟัด", "reg": "E343", "bday": "2014-11-12"}, {"th": "ศูนย์ศูนย์เจ็ด", "reg": "T181", "bday": "2019-11-12"}, {"th": "สตรองวิล", "reg": "N859", "bday": "2019-10-30"}, {"th": "สตาร์ไดมอนด์", "reg": "N861", "bday": "2019-05-22"}, {"th": "สปาย", "reg": "M23", "bday": "2019-08-31"}, {"th": "สิโอ", "reg": "T13", "bday": "2018-10-16"}, {"th": "สุภาพบุรุษ", "reg": "E195", "bday": "2014-09-27"}, {"th": "หญิง-หญิง", "reg": "T86", "bday": "2018-10-03"}, {"th": "หนึ่งบารมี", "reg": "K82", "bday": "2016-10-03"}, {"th": "หนึ่งฤทัย", "reg": "X120", "bday": "2018-10-03"}, {"th": "หนึ่งฤมิตร", "reg": "N689", "bday": "2017-03-09"}, {"th": "หนุ่มเหนือ", "reg": "X66", "bday": "2017-11-02"}, {"th": "อดัมส์อาร์มสตรอง", "reg": "K75", "bday": "2016-09-25"}, {"th": "อัศวโอฬาร", "reg": "K294", "bday": "2016-10-15"}, {"th": "อ้อมใจ", "reg": "N775", "bday": "2018-01-24"}, {"th": "เกรซฟูลเนส", "reg": "N824", "bday": "2019-11-15"}, {"th": "เกรทวิล", "reg": "N887", "bday": "2020-03-13"}, {"th": "เกรทอะเกน", "reg": "H399", "bday": "2014-10-08"}, {"th": "เขียวส่องแสง", "reg": "N773", "bday": "2019-04-01"}, {"th": "เจชัวร์", "reg": "H57", "bday": "2015-11-12"}, {"th": "เชอร์วิน", "reg": "N978", "bday": "2023-09-22"}, {"th": "เซ็พเทมเบอร์", "reg": "N972", "bday": "2023-09-02"}, {"th": "เดอะสตาร์", "reg": "M187", "bday": "2019-09-29"}, {"th": "เทคออฟ", "reg": "U14", "bday": "2021-07-20"}, {"th": "เบนดิโก้", "reg": "N804", "bday": "2019-05-14"}, {"th": "เบลล่าชิญญอนร่า", "reg": "N937", "bday": "2020-12-22"}, {"th": "เป้าฮือ", "reg": "N904", "bday": "2021-07-31"}, {"th": "เพชรชมพู", "reg": "N821", "bday": "2018-02-17"}, {"th": "เพชรน้ำหนึ่ง", "reg": "T179", "bday": "2018-09-02"}, {"th": "เพชรภูมินทร์", "reg": "V223", "bday": "2018-02-24"}, {"th": "เพชรมงคล", "reg": "V121", "bday": "2017-09-24"}, {"th": "เพชรมังกร", "reg": "K440", "bday": "2016-10-06"}, {"th": "เพชรอมรินทร์", "reg": "M215", "bday": "2020-08-10"}, {"th": "เยาวรัตน์", "reg": "N874", "bday": "2019-07-10"}, {"th": "เลิฟบัดดี้", "reg": "N624", "bday": "2016-11-12"}, {"th": "เลิฟมีเทนเดอร์", "reg": "N932", "bday": "2021-11-21"}, {"th": "เวียดนามบอย", "reg": "K65", "bday": "2014-08-04"}, {"th": "เสน่ห์นางพิมพ์", "reg": "N854", "bday": "2018-10-15"}, {"th": "เอฟโฟร่", "reg": "N898", "bday": "2021-07-11"}, {"th": "แก็ปปิ้น", "reg": "T118", "bday": "2020-04-20"}, {"th": "แจ็คแลมวาร์ด", "reg": "V13", "bday": "2017-10-28"}, {"th": "แจ๊คแลมวาร์ด", "reg": "V13", "bday": "2017-10-28"}, {"th": "แดนนีบอย", "reg": "N926", "bday": "2021-10-19"}, {"th": "แตงโม", "reg": "N708", "bday": "2017-08-31"}, {"th": "แบล็คบิวตี้", "reg": "N905", "bday": "2019-03-08"}, {"th": "แม็กซิมัสอ", "reg": "N580", "bday": "2016-05-16"}, {"th": "แสนสุขสม", "reg": "M18", "bday": "2019-09-17"}, {"th": "แหวนมงคล", "reg": "E511", "bday": "2014-10-26"}, {"th": "โกลด์วิล", "reg": "N777", "bday": "2019-05-13"}, {"th": "โกลเด้นบอย", "reg": "T101", "bday": "2019-04-18"}, {"th": "โชคเดชา", "reg": "T220", "bday": "2020-10-03"}, {"th": "โบกี้ดราก้อน", "reg": "H544", "bday": "2016-09-01"}, {"th": "โมเมนต้ม", "reg": "H541", "bday": "2015-08-14"}, {"th": "โรนัลรีฟ", "reg": "T197", "bday": "2019-10-18"}, {"th": "โฮมวัน", "reg": "M190", "bday": "2020-09-24"}, {"th": "ใจสั่งมา", "reg": "H503", "bday": "2013-10-18"}, {"th": "ไซตะมะ", "reg": "H123", "bday": "2015-09-11"}, {"th": "ไดมอนด์ริ้ง", "reg": "K45", "bday": "2016-09-08"}, {"th": "ไมกี้", "reg": "T123", "bday": "2019-09-06"}, {"th": "ไวโอมิง", "reg": "N776", "bday": "2018-06-16"}]};

/* ---------- design tokens · Blue Archive-inspired light lavender ---------- */
const T = {
  bg: "#F1EEFA",
  card: "#FFFFFF",
  ink: "#33335C",
  muted: "#9A95B8",
  primary: "#8A7CE0",
  deep: "#6C5DD3",
  sky: "#45C8F1",
  gold: "#FFC83D",
  pink: "#FF93C4",
  mint: "#58C9A0",
  line: "#E6E1F4",
  soft: "#F4F1FC",
  shadow: "0 6px 18px rgba(108,93,211,0.10)",
};

/* saddle-cloth colours, no.1–12 (pastel-tuned) */
const CLOTH = {
  /* สีประจำเบอร์อิงโปรแกรมม้าแข่งจริง (เบอร์ 1–13) · เบอร์ 14–16 ไม่ทราบสีจริง ใช้สีสุ่ม */
  1: ["#E03131", "#FFFFFF"],  /* แดง */
  2: ["#F5D327", "#403504"],  /* เหลือง */
  3: ["#F58FBE", "#5C1F3C"],  /* ชมพู */
  4: ["#1E7A34", "#FFFFFF"],  /* เขียวเข้ม */
  5: ["#F2812B", "#3D1E02"],  /* ส้ม */
  6: ["#62C9E8", "#0E3A4A"],  /* ฟ้าอ่อน */
  7: ["#7C4FA8", "#FFFFFF"],  /* ม่วง */
  8: ["#F7F7F3", "#3A3A55"],  /* ขาว */
  9: ["#9CCB3B", "#2F3D08"],  /* เขียวอ่อน */
  10: ["#8A5A33", "#FFFFFF"], /* น้ำตาล */
  11: ["#1F2A4A", "#FFFFFF"], /* กรมท่า */
  12: ["#2456C4", "#FFFFFF"], /* น้ำเงิน */
  13: ["#E8B82A", "#4A3503"], /* เหลืองทอง */
  14: ["#B43C8F", "#FFFFFF"], 15: ["#4ED0C2", "#0F4A44"], 16: ["#7A7F8C", "#FFFFFF"],
};

const thDate = (iso) => {
  if (!iso) return "—";
  const m = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
  const [y, mo, d] = iso.split("-").map(Number);
  return `${d} ${m[mo - 1]} ${y}`;
};
const COAT = { bay: "น้ำตาลแดง", chestnut: "น้ำตาลทอง", grey: "เทาเงิน", "dark bay": "น้ำตาลเข้ม", brown: "น้ำตาล", "bay/brown": "น้ำตาลแดง", bar: "น้ำตาล" };
const HOME = { nz: "นิวซีแลนด์", aus: "ออสเตรเลีย", arg: "อาร์เจนตินา", thai: "ไทย" };

/* ---------- analysis helpers ---------- */
const TODAY = new Date("2026-06-10");
const ageYMD = (iso) => {
  if (!iso) return null;
  const b = new Date(iso);
  let y = TODAY.getFullYear() - b.getFullYear();
  let m = TODAY.getMonth() - b.getMonth();
  let d = TODAY.getDate() - b.getDate();
  if (d < 0) { m--; d += new Date(TODAY.getFullYear(), TODAY.getMonth(), 0).getDate(); }
  if (m < 0) { y--; m += 12; }
  return `${y} ปี ${m} เดือน ${d} วัน`;
};
const ageYears = (iso) => {
  if (!iso) return null;
  const b = new Date(iso);
  let y = TODAY.getFullYear() - b.getFullYear();
  if (TODAY.getMonth() < b.getMonth() || (TODAY.getMonth() === b.getMonth() && TODAY.getDate() < b.getDate())) y--;
  return y;
};
const yearLevel = (iso) => {
  const a = ageYears(iso);
  if (a == null) return null;
  if (a <= 3) return "ชั้นปี 1";
  if (a === 4) return "ชั้นปี 2";
  if (a === 5) return "ชั้นปี 3";
  return "รุ่นพี่";
};
const pct = (n, d) => (d ? Math.round((n / d) * 100) : 0);

/* speed — time format "1/23.12" = 1 นาที 23.12 วินาที */
const timeSecs = (t) => {
  if (typeof t !== "string" || !t.includes("/")) return null;
  const [mn, sc] = t.split("/");
  const m = parseInt(mn), s = parseFloat(sc);
  if (isNaN(m) || isNaN(s)) return null;
  return m * 60 + s;
};
const speedOf = (r) => {
  const s = timeSecs(r.time);
  if (!s || !r.dist) return null;
  return (r.dist / s) * 3.6;
};
const kmh = (v) => (v == null ? null : `${(Math.round(v * 10) / 10).toFixed(1)} กม./ชม.`);
const TYPE_LABEL = { colt: "Colt", stallion: "Stallion", gelding: "Gelding", filly: "Filly", mare: "Mare" };
const placeLabel = (p) => {
  if (p === "scratching") return "ถอนตัว";
  if (p === 1) return "อันดับ 1";
  return typeof p === "number" ? `อันดับ ${p}` : "—";
};

/* running style — from position start / 3rd curve / spurt / finish */
const posVal = (v) => (typeof v === "number" && v >= 1 ? v : null); /* 0 หรือ n/a = นอกกลุ่มนำ */
const runStyle = (r) => {
  if (typeof r.place !== "number") return null;
  const e = posVal(r.ps) ?? posVal(r.p3);
  if (e !== null && e <= 2) return "ฝีเท้าต้น";
  if (e !== null && e <= 5) return "ไล่ตาม";
  if (e === null && r.place <= 3) return "ฝีเท้าปลาย";
  return "สมดุล";
};
const STYLE_INFO = {
  "ฝีเท้าต้น": { color: "#FFA63D", desc: "ออกตัวไว ชอบพุ่งขึ้นนำตั้งแต่ช่วงต้น แล้วคุมจังหวะเกมจากด้านหน้า" },
  "ไล่ตาม": { color: "#58C9A0", desc: "เกาะกลุ่มหัวแถวช่วงต้น รอจังหวะเร่งสปีดแซงช่วงท้าย" },
  "ฝีเท้าปลาย": { color: "#5BA8F5", desc: "เก็บแรงช่วงต้น แล้วระเบิดสปีดไล่แซงจากท้ายกลุ่มในช่วงสุดท้าย" },
  "สมดุล": { color: "#A0A0BC", desc: "วิ่งกลางถึงท้ายกลุ่ม ผลงานขึ้นกับจังหวะของสนามในวันนั้น" },
};
const analyzeStyle = (runs) => {
  const styles = runs.map(runStyle).filter(Boolean);
  if (!styles.length) return null;
  const count = {};
  styles.forEach((s) => (count[s] = (count[s] || 0) + 1));
  const dist = ["ฝีเท้าต้น", "ไล่ตาม", "ฝีเท้าปลาย", "สมดุล"]
    .filter((k) => count[k])
    .map((k) => ({ k, v: count[k], p: pct(count[k], styles.length) }))
    .sort((a, b) => b.v - a.v);
  const leadStart = runs.filter((r) => posVal(r.ps) !== null && posVal(r.ps) <= 2).length;
  const spurtTop = runs.filter((r) => posVal(r.psp) !== null && posVal(r.psp) <= 3).length;
  return { main: dist[0].k, dist, n: styles.length, leadStartP: pct(leadStart, styles.length), spurtTopP: pct(spurtTop, styles.length) };
};

/* birth-date analysis — Thai zodiac year, day of birth, western sign (เพื่อความบันเทิง) */
const NAKSAT = ["ชวด (หนู)", "ฉลู (วัว)", "ขาล (เสือ)", "เถาะ (กระต่าย)", "มะโรง (งูใหญ่)", "มะเส็ง (งูเล็ก)", "มะเมีย (ม้า)", "มะแม (แพะ)", "วอก (ลิง)", "ระกา (ไก่)", "จอ (สุนัข)", "กุน (หมู)"];
const NAKSAT_TRAIT = [
  "ว่องไว หัวไว ชอบชิงจังหวะก่อนใคร",
  "อดทน บึกบึน วิ่งทนระยะยาวไม่มีถอย",
  "ดุดัน กล้าได้กล้าเสีย ชอบเกมแย่งตำแหน่ง",
  "นุ่มนวล ปราดเปรียว หลบหลีกในกลุ่มเก่ง",
  "สง่างาม มีพลังแฝง มักมาแรงในวันสำคัญ",
  "เยือกเย็น อ่านเกมขาด รอจังหวะเด็ดแล้วค่อยฉก",
  "เกิดมาเพื่อวิ่ง รักอิสระ พลังเหลือล้น",
  "ใจเย็น ไม่ชอบปะทะ ถนัดวิ่งตามจังหวะของตัวเอง",
  "ฉลาดแก้เกมไว สร้างเซอร์ไพรส์ได้เสมอ",
  "ขยัน ตื่นตัวตลอดเวลา สดชัดตั้งแต่ออกสตาร์ท",
  "ซื่อตรง มุ่งมั่น สู้เพื่อทีมจนถึงเส้นชัย",
  "เรียบง่าย ใจดี แต่แรงดีเกินตัวเมื่อถูกปลุก",
];
const DAYS = [
  { name: "อาทิตย์", color: "#F26D6D", trait: "ทะเยอทะยาน มั่นใจสูง ชอบเป็นหัวแถว ออกตัวแรงไม่เกรงใคร" },
  { name: "จันทร์", color: "#F5C84C", trait: "สุขุม อ่อนโยน ความจำดี วิ่งตามแผนอย่างมีวินัย" },
  { name: "อังคาร", color: "#FF93C4", trait: "ใจนักสู้ ไม่ยอมแพ้ ยิ่งโดนกดดันยิ่งฮึด" },
  { name: "พุธ", color: "#58C9A0", trait: "ฉลาด ปรับตัวไว อ่านเกมเก่ง เปลี่ยนจังหวะได้คล่อง" },
  { name: "พฤหัสบดี", color: "#FFA45C", trait: "มีระเบียบ ใจเย็น อึดทน เด่นเรื่องความสม่ำเสมอ" },
  { name: "ศุกร์", color: "#5BA8F5", trait: "ร่าเริง มีเสน่ห์ ทำผลงานดีเมื่อบรรยากาศเป็นใจ" },
  { name: "เสาร์", color: "#9D8DF1", trait: "หนักแน่น อดทนสูง รับแรงกดดันได้ดีที่สุดในบรรดาทุกวัน" },
];
const RASI_BOUND = [[1, 20, "มังกร"], [2, 19, "กุมภ์"], [3, 21, "มีน"], [4, 20, "เมษ"], [5, 21, "พฤษภ"], [6, 21, "เมถุน"], [7, 23, "กรกฎ"], [8, 23, "สิงห์"], [9, 23, "กันย์"], [10, 23, "ตุลย์"], [11, 22, "พิจิก"], [12, 22, "ธนู"], [12, 32, "มังกร"]];
const RASI_TRAIT = { "มังกร": "มีวินัย อดทน ก้าวทีละก้าวแต่มั่นคง", "กุมภ์": "หัวคิดอิสระ ชอบทำอะไรต่างจากเพื่อน", "มีน": "อ่อนไหว สัมผัสจังหวะสนามได้ดี", "เมษ": "พุ่งไปข้างหน้า ใจร้อนแต่ทรงพลัง", "พฤษภ": "หนักแน่น พลังเยอะ ดื้อนิดหน่อยแต่ไว้ใจได้", "เมถุน": "คล่องตัว เปลี่ยนเกมเร็ว เดาทางยาก", "กรกฎ": "ผูกพันกับสเตเบิ้ลเฮาส์และเทรนเนอร์ เล่นดีในที่คุ้นเคย", "สิงห์": "ดาวเด่นของสนาม ยิ่งมีคนเชียร์ยิ่งวิ่งสนุก", "กันย์": "ละเอียด แม่นจังหวะ ฟอร์มสม่ำเสมอ", "ตุลย์": "สมดุลดี วิ่งเรียบลื่นไม่หวือหวา", "พิจิก": "เก็บอาการเก่ง พลังระเบิดซ่อนอยู่ข้างใน", "ธนู": "รักการผจญภัย ยิ่งระยะไกลยิ่งสนุก" };
const birthInfo = (iso) => {
  if (!iso) return null;
  const dt = new Date(iso + "T00:00:00");
  const [y, m, d] = iso.split("-").map(Number);
  const nk = (((y - 4) % 12) + 12) % 12;
  const day = DAYS[dt.getDay()];
  let rasi = "มังกร";
  for (const [bm, bd, name] of RASI_BOUND) { if (m < bm || (m === bm && d < bd)) { rasi = name; break; } }
  return { naksat: NAKSAT[nk], naksatTrait: NAKSAT_TRAIT[nk], day, rasi, rasiTrait: RASI_TRAIT[rasi] };
};

/* ไบโอสั้น ๆ ใต้บัตร — ชื่อ + ที่มา + จุดเด่น + นิสัยขัดแย้งน่ารัก ๆ (ไม่ใส่คำนำหน้า) */
const moeBio = (h) => {
  const name = (h.th || h.name || "?").split(" ")[0];
  const origin = { aus: "สาวออสซี่", nz: "สาวกีวี", arg: "สาวอาร์เจนฯ", thai: "สาวไทยแท้" }[h.country] || "สาวนักวิ่ง";
  const hook = {
    "ฝีเท้าต้น": "ชอบนำตั้งแต่ออกตัว",
    "ไล่ตาม": "นักเสียบจังหวะ",
    "ฝีเท้าปลาย": "สปรินต์ปลายโหด",
    "สมดุล": "วิ่งได้ทุกแผน",
  }[h.style ? h.style.main : "สมดุล"];
  const bi = h.bday ? birthInfo(h.bday) : null;
  const traitA = bi ? bi.naksatTrait.split(" ")[0] : "ขยัน";
  const soft = bi ? {
    "อาทิตย์": "ใจถึงพึ่งได้", "จันทร์": "อ่อนโยนกับทุกคน", "อังคาร": "ใจสู้ไม่ถอย",
    "พุธ": "หัวไวเป็นพิเศษ", "พฤหัสบดี": "ใจเย็นน่าคบ", "ศุกร์": "ยิ้มเก่งสุดในรุ่น", "เสาร์": "นิ่งสุดในสนาม",
  }[bi.day.name] : "เป็นมิตรกับทุกคน";
  const champ = h.wins > 0 ? ` · เจ้าของ ${h.wins} แชมป์` : "";
  return `${name} ${origin}${hook} ${traitA} แต่ก็${soft}${champ} ✦`;
};

/* ---------- atoms ---------- */
/* character avatar — ears, colour by Type: colt/stallion=เหลือง gelding=ฟ้า filly/mare=ชมพู ไม่ทราบ=เทา */
const TYPE_COLOR = {
  colt: ["#FFC83D", "#FFE9B8"], stallion: ["#FFC83D", "#FFE9B8"],
  gelding: ["#45C8F1", "#C9EFFB"],
  filly: ["#FF93C4", "#FFD9EA"], mare: ["#FF93C4", "#FFD9EA"],
};
/* รูปโปรไฟล์นักเรียน (อนาคต): ใส่ URL รูป 1:1 ตามรหัสนักเรียนหรือชื่อไทย เช่น PHOTOS["N931"] = "https://..." */
const LOGO = "data:image/png;base64,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";
const PHOTOS = {
  /* ตัวอย่างทดลอง — อนาคตจะอัพโหลดผ่านระบบแอดมิน */
  "O70/7": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCADAAMADASIAAhEBAxEB/8QAHQAAAQUBAQEBAAAAAAAAAAAABgIDBAUHCAEACf/EAEwQAAEDAwEFBQQGBgYHCQEAAAECAwQABREhBhIxQVEHEyJhcRQygZEVQlKhscEjM2JygvAIQ1Nj0eEWF3OSosLxJCUmNDVEVGSTsv/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAQIFAAb/xAAvEQACAgEEAAUCBQUBAQAAAAABAgADEQQSITEFEyJBUWGBcZGhsdEUIzLB8EJS/9oADAMBAAIRAxEAPwDlSvq2LZnsUZbZbkXp3v3leL2dtWEIH7Sufwo5h7I2G0tgC3Qwf9iD95yaRs19anA5mlX4Zawy3E5lor2Ttd0juiSo+yxD4lKcA18wD+NbReIVkWwttFuhLkbiu7JaQN1WNNcaGsrv0SUytqS+tS0Pg4GMd2ocUEciKqNV5gxjEk6LyW3ZziT4d/W9JDL02ShgkgK3gBnkSAOFWE+ewJDbah3TmNST4FDkQaEWn0pG6oaGrGFMSzHXGdR7TCcOSjOFNq+0hX1T5cDQ2XByIZXyMGEYOgr4jpUG3ynn0lDTRlpQODKf0qUjmW+Jx1TmpUd9mQnfYdSsc8Hh6jlUSYvPWvt3NLwDxFebp5DNdJiCg9aSQRxFOfdXua6RiNV9pTpSk8qT3WeBrp2IjHnX2opRbNebhrp0+3j5UoODnSN09K+weldOj2hHWmy0MeDTyrxIVyr0O64UCPhXTo0jAVhwYqRIiNpPeILI8Od5Rx8qQ433gyk4I1FSA0lUZLylI3Oe9pun1qCZZRK5L5DanHAAkcx9b0rPtqLgZtwKQfC3+J/kUY7UXe2QGgkPOuvn+qC86Y64wBWdynxJeU4G0Ng/VTwprTV87orrL8rszOs/1LQSNd0YFUVxkLXvYJwM1auym32T3a9SMpPWqRYDm8lZIJ0rGQfM3rTxgQflrWUeJROuc1EfKJTSmZLSX2l430k4J6EHkocj8DpVxIt6lsqCdVDWqcpwehpxcETOYEGC132cegIVKjKMqFnBcAwto9HE/VPnwPI1TDfbVvNLKT05GtCSpxpfesuFp0DG8BkEdFA6KHkaiXaxWm7Rg5DZRabqNCyXP+yS/wBxSv1S/wBlR3TyNEWwjhou1YPKwOauBQtKnAtpxBylxokFJ6jp8KIG9q2Zu79MwW57gIAnxl9xLA81DwufxgnzoelRHojy40plbTqDhTbicEfCoxYGcpJFEKK0HvYTQIcQXM5slxj3Q/8AxnSI0wfwk7rn8J+FMvPqhyDGlhyJIGhYltlpY+fGgYlxOMgKFEVt2+vkKOITzzdyhAY9luLQkNgdBvap+BFUKMOuZcWD34l2VqI8SVDzGorwEnQEHy50iLtPsjM8MyyXCyOn+utMjvWgf9i5+RqaiJEmn/ujaKz3LPBmUTBkemHPCT6Kqm7HYxCDnoyPlQ4pNfb4p+VCuVtTvzrVcIzf9p3RcbPotGU/fUZudFfO6h5lSj9XeGflUg56kxYUOtKBB45rwpQeWPSk7ieS8eoqZ0XhPWvikciKb3FjgoEete4P7X4106Kr3Q03ulXBah8K+7rX9Yr5106eLQpPiRr5VNsi+/D8Zf1knQ+dRwCBxJqwtbS2VKlOp3GUpOVq0z6VV+paseqZt2gwfZ5MJ4DRbJR/uqP5GhGtX2q2cmbR2NyVEQ2UQFOvrKnEpyMDwpB4q8h51lOMnA1rQ07ZSZWqXFmfmajsP2hpdS3AuTgS6MBK1HRf+BrQVFL47xtWR1rm0HHCjLZDbuZbXW4kpa32DhKeak+Q6jypa/Sf+kjul13SWfnNZW44wrewd08c1XzmG1qLyBgK94dKsmnw82nvEKRvpCt1aSk4IyNDTTsbdyUappFWwZoumRKcspHU00tpKklBAUkjBBGc1MfjLaVvIyQeVRspcJHA0cHMVIxIT8QONpacbRLYToll9Ry2P2HB4kemo8qo52z7W9vQnltknSPLISr0S4PAv/hPlRMtKkcdR1pCkIdQpCwFJUMFKuBFSOOpUqD3AWTFfhPFmSy4w6OKHElJ++muFG7rUttruUONzIw0EWcnvEAfsq95PwNU0y2W5xWoftLp+q9l1gnyWNR8QauLPkQZr+JQ5rw6j3c+VWMjZ+5R2e/EYvx/7aOe9R808Pjiq/yq4YHqDKkdybbL5dbM5v2u4zIZ/uHlIB+AODRF/rQ2jdjKYuTVuujKhurEyC2pSk8xvAA8OdCFeCSW+CyKhq1bkiSHI95tqr5sRt3CiLY7+2yobPdi3tBLasZ0CTkJUKqHYezrP6N6VeYbn/2mwUn4pBrKgWHDlbYP7pxV1Z7K/cUFyDOhsqQr9S/PS0s+iVYBFLHT7OmIEZW/d2OYUXuxS7c9HkIurCbS+PDNDfeJB6nd5Z08jxApcSyIkJ3v9MrIpBOApCN7PwyCKvtl489q2T7VLsk24wpjAIbhqbe7p0DCl53+Y5DjWNyYiGnlpUlwYURhYIUPUcjUVFrMjPX4TrcIQcdzUxsvBOO824hJ6hDCfzVXi7HsoyVe1bdOrxybLaSPkDWUdw19n50tLTY4JSKL5De7n8hB+cv/AM/qZo8mZ2fW7eIuFxuSwPDl9WAfQAUPSdoLc+9mDa3nDxC33Dj5Z1odba71YbQjeUeHAVufZB2SRLrbhebu2FNKV+gYVrvJxnfI8+WflUeUF7JP3hEdn6AA/CAVg2W2h7QN+M0ksws7qigbjY6jTUnyGTWt2n+jhs1HjMmRImpeSBvBooTk/wC6SPnWqwbbDtjCWIUVmO0gYCWkBI+6pNdnjAhcD7z85a0rsl2WS7IN+mshbTBwwhY0UvqeooDstqevVzjwGEkreUB6Dma6EgxI9ptzMRkBDLCMevU0fX37V2DsxPwvTb38xuh+8TeJK5ktO+d51at9auYHIDp/lTqGyzhKiXEczoFD8j91Roie+cDyveWSr0Ap6TILY3UjKl6A9OVZAOOBPRMgbueuxAoFTWCnmkj+cVXSLehw5SC2urYSPo9lI97lunXNIEyHLWlCgpl5QJxjKTjz+NFWyK2af4g45Hej+8Mp+0OFMKwdcYomdiEp3kkKT9pJyKrJMBJJIG6eo4UwrgxJ6iJVBeNK+UEOAjTXkeBpb8V1oneSSOoqPvKTyyPKiQMj/Rwjvd/DdehPfbYWUfhUhyVOfATcYtsu6eGZTPdu/wD6IwfnXyXwdAc+RpRfSOI08q4gHucOOpV3C02p5veZtdzguZ1S2+l9rHlkBQ++ik2myM7J2py1eyQpr2GpRkjxlYJBUTgkA6HGgAqrQpKxlCvhXvqkH4VRk3YGZZSF5xGNpNi5dkQiRebQpMZwApmRT+jOepA0P7wqpjWqykJUz7VKUrglShg/LWjGBtNd7ax7PGnPpY/sVELR8lZFUM6CZk5cwvA76itTLiSWyT5AjTyqFD9EyTt7AjVwusO0259qOho3SSU4dYJR7IlPJJSR4jz40JvyHJLq3XnFOOLO8pa1FSlHqSeNGiQlGCLVs+SOfsaz/wA1MOiQp1TiG7ayVHOG4Wg8hk0RPT0IN13HJMEAkrOEpJ9BmpLNrnSP1UR9XnuECiUPTxoJikeTMZKcVNsiX5m09hgyH5jrEqe028l1QAWneGRgcqtuc9ASuxB2TLTYPsTv16LFwucZcKA5hSd7HeOpzyGfCD1Pwrpaz2tFthMwo7YAQkJCUDTQYx8BUhJbBKEboCNN1P1egxyq2tDQDSncaqOM+VVHqMOzCtOIw3an1arKUD5mn02dse86o+gxVhXilJQkrUoJSkZJJwAKKEETN7n3nCPZNZ0R4su+PoG8f0LBPIfWPx0FG0p5yQgtlSgkkcOOlVe81sxs7a7aB+leU22EjiVE5NWCyS4D1JzWfe5dy5+03dJWtdYrHY7+8nw8AEjglAH51GQlbtwY+zlSz6J0/Eino28GnQeOh+GK8acAWtQ4ojJA9SST+IoEaj7cf21S3FqIQFYSPKlx4CZVwfDQCRHaSkdN5Rz+GKfipDbQazqgDe9TrTlhPdNzn3V+9IWceQ0/KozIM9ZsKhgOO7gB/qzg/OoVyts6CN9KkTWSd3dUNxwZ8xoas2buVd4pxKQEjwgcSc09OmBq2GSW99ZA3GxxUs6BI8ySBUqzAwToDy0E0OMOuFreUy8DgtPDB+B4GmX7e2T4k7ivKiX6OajB+y3VpEl5l/C1K5qWgOZHQZUQPIUUzuxGRJhQ5ez91BS8ylxUaeCpKVFIPhcGoHkQadqDMSB7TOvK1gFveZE/a1HUAK8xoahORFoON4jyNEG1cG+bDy0sX+xTY7S893JZw80vHHCk9POq6Pc4VzRvRZDT3VIOFD1HGi+pexAehv8AEyr7l1ByBr5U82+6NFpJqS8W05IOPKmA8jkanOZGMRxUhLaAtYWB5JJx8q+S804PCtJpAfA50kvI8vlUYnZjq8clD5Uytax7uD86979KgcZOOgptTqycJQrOOelTidmMPyZLYJAb/icxVj2eJk7Qbd2SMloLSzKD6t1zBwgFRwTpnSq1xiQ+CAWkDrjeNW+xNxY2W2ustwly0ojsycOqXgBCFApUT86tnAkAZPM3e67Wm27Xotz7CoodQAw+tYKZKxxSehwQR11rRdnprcyGS2eByRzFc3dtPaJZLuEWqyPRbk4VJcXKbG8lkjkhX2j1HAVN7Ku2N6I7HgXl3de0bTJV7ro5JX0PRXzqo4OYewCxdg7nTNBfbDfFWLs/uS2lbr0sJhtnpvnCj/u71ElpuzV0bKkKSVDXTpWX/wBIuWRbLHbwrR+Ut1Qzx3UgDT+KiM3pyIrpqc3qjTmVq7r2n7Ro538x4ylltPIBINHo4VlPZ06G9oFvqOoZUNeqiB+davSmsUKwUdATT8Nc2VtYeyTLSNGSuNvj31t7tRUtq9rbbz+saRlOOGD/AJVItTmULQTwIIppTBc2ngtgkN9ytSseWf8AGk5oGSY8ZMaPKuzi1ZedAwo6JbCt0H86jWxYdhuOpOUrK1DzyompG00haG3IKd1LJY3xgcweFQ7KsNWNCiPdQBjzrvbMgSwQwA6OiQCfWiLY+F9L3Zp55AMK1tiQsn6z6iQgfwgKV6lNDbcoKUlJxkt76z0rXuzzZ1qHsyE3EtxzIbU88tZCcKX7oyfsp3flRqE3NF9VYEXJmb7csKjbbOKGQiXEYeT5FClIP/LW1bCy/bNkra4Scpa7tWeqSR+VZJt/crPJl23cu9udnx1OR3WW5KFKwcHOAeGUffR72azgLDcYGdYrhWn91Yz+INN6c7bufcTP1679PkexjPbPE72wwZSRqzJ3SR0Uk/mBWKz9mrbcHS5JhMrXjeLgTuqz6jBrf9rYhumxdxihJU7GSHUDmQkhQ+7NZK7GDkUrbxg+MemNaHrARZuHuIXwsh6NrDODByzbD2+6zocJMqa2XnFJVlYcASElWm8CeXWrPazscFghInMS1yI6RvSD3e6ppBGi8A6pHPpx61Z7DORYl6M+Y6lpqMyrdzqVLWQkBIGpOAdBWwJh3e/2xlttpFnZCBuPSEB2QoH+7zuoB/aJP7IqadzL3K6ry62HE5hXsW+RlmQFDlhZ/wAKqJ9ivMIq3W+8A18LuTWybWdmwsqu+jMPyGkpy5HWsqKR9ttIwCnyA06UL9wwWAqO20BjKSgDUfChNc6HBh001VgyP3maswtoJYzHZWsA4wFZI9RnSnFWO/LVh3dbVw1OorQvpFcRsJQyhYPvFQr6Zd2ZjSd+IgrGQcny4g1x1T+wnf0CfJgfH7Pr7JRlcgBJ/vAB91MyNgfZJBbfkoWsccZV+OKMot7kRWm2glCko0A4ZHSkyn/pRanENFKxqeelU/qLJcaGodiUELYSKhKVPvuHI1Q2AAPjVpA2WtEBzf8AZe/1yQ8oqzU6MCIm63uhYBAChoFedIt04zG1IdQG5LR3XW+h6jyPKqNYx7MOtKL0JPkbXXfstUxdrdIXNsjwOGXclUZXNGRnTy4UNbc9sUbtCu9ncEhMZLAWhXeqGAVEcAPTjRSlpu6QH7NKCVMSfc3vqOcj8eFc67WbOydl75It0ltTZQolGeaeVN6EizNbnn/US8RLUbb6hx7/AEP8GLsL6YltucgaOBLSUHp48n8K2RtwOtocHBaQofEZrGbXHL9nloSPEt1tA+YH51sjCUNtJab91oBvHTAxV9djP/fAg/Cs7fpgfuZMgO91ITngrwmrJwhmWh44BLLrYPTw5H4VRxlFxT7R99rxDzTxB/npU+a19K2soCiHEkHTjpx+6s4jmaxEbvT3trxUn6gQk+eU0zDSowkNp9xQBPlgU7b0d/GKlAb+S2r1HCn7GgEOtKGqCR+YqehI6kW02eTebwzEcmvtokOoY7pk7vhJ8WVYz7oPSui7V2dbLoiIXIsUOW64N4rmJMhWDwGXCeVZH2bwEyNuWGlDglxYHwA/5q6HAAGBwHCn9L/jmY3iTeoKIDbW9n9pXZ5iLbaoUdDyAVNNMISkLSBuKAA04AH1oP2IuKYF2bR+rjzmTFUngEq+p94x8a2kgEYOoNY5tts99BXx5LQKIk0mQwR9RX10j0OCPI1NwKkWD2kaRxYhof3h624nQuDebWktup+0g6GsskwDbJUiAvjHcU36jOh+IIo22Wvzd5glCnEGZGw3IbB1SrGhx0UNRQ1t5bpkC8s3iMyqRDloDEttOq23EjwLSOYKcgga+EYyTir3r5iBhI0TeTaVb3/efdmluT7fcEbiVOoW22glOSkHe1B5aVs6UhCQlOgAwKyLsyukBraPdMpkpuSB7Od8YW42FZSOp3Tw46GjzbDahGztrlSt4DuE8UqG8pR4ITnmfQ+lVoGFldeS1u2XFxdt7bKfpBbCGyfD3pAyfLnn0rKds9lrBIW5N2fmtw55O85FfPdtSPPxYKF+eMHmOdZTtZt9tJc5TwZlvR3ecWEkqWknJ/SOk72cciR6DhWfzLVcLlmZc0JR3zm6XZKiXHVY558WABxozIrDDQFTuhypmmykhuQ5GebLTydHGVkEj4jIIPUHFI9laeSEj9G4OB5Gh2B2XdoSLYu52+13CNAQhK21KIcDqeRbQrxcNdOXWlxNoJcWGhy6xRg5HfsHKSRocpOopK3SleV6mvp9ctnpfgyydaWysoWMEffVpbo6mWipWMrwcdBTMR+LdIySh1DzZ9xxCgfhmpqmyloJQSCkaHNKH4j0jvFKHl5GUkeIDnQ1c5z9pnszW1bzsbdCzyeYUfCo+aVeE+oNWEpCm5eEqV3bySo5JyFZ1x8wahuMt3eI5DStP0jF3ld2s6LQrQj91Q+RwaugHvB2dcdwwkOsXSKzeYRyzI/WAcWneYPTrVZ2g7JM7fbLCYgJTdoI3Q59odD5H7qEtkdp3tnJr8OUhb0YkNyo6tCpPJY6KFabbHm4EtpxDiX7dOThDo4LSeHxHMUMhqWBXsdQuEvQhuj3OfdhYwmpUzgHdktrPoCD+VE+yd8M683mG4vJS93rY8vdUPmBQv2ZSQ3enmVcHGSR6g/5mokWc5s9tj7U5lLSnSVebajr/j8K2La97uv04mBp7/Lqrf2zg/8AfeaZaXHluSX1ghLMlyMFZzvoPiT8sqHypUe9OMvKScIcZdSCkcFozg1LaZSzG7oFIZkyFKURzSU5yPMHUUP3dtaX1FeEyG/C5jgscljyIrLB3EzfK7VEMIK0plyWm9UKw6n4HB/Kn4yfZrlvjRDowfWoNnc3nGFq4rRg/EVbOt7yd4cRVDIhd2XtA9obRGTiE+s6ae82K2Obe4dvaDr7wS2eC9Ak/wASiB99YL2c7Tx7Vtrl9QC1wJDDaQkqK3coUlOBqSd3AHMkVGmdmG13aHKfl3B59LBcIS9cXgSoajCQnPhHUYB5VpabHliYOvB87mba3t1a5CwI625KddWZLKiMeQXmod+XaNt7WYLU0Q5za+8jKfTulDoB0OdCCMggHgeorKo/9F6EmKjvby2mVzKIqSjhw1O9Vvst2Q7SbN3UFN3iOQ8DxtuuBQweBQoEHPnkaUY4PEWAKncO4xbbNdLPtjKcaaSzchFQS0pXgkJQo7zSjwwQtKkq5EdCRR0l6FtNanW/0iEq8DiFeF2O4NQCPqrScEegIyKIblYId1nQJ7m+3KgKUW3G9N5Kk7qkKHNJB+BAxXszZqDKe9qZCocvGO/YwCofZUOCk+R4csVCAqMe0LZcrndjBmcDYCHtG+/gi33yOtK5Co/hS+oaoeCDpk8d5JCgcjJxV4/spfb3BbtW07aJ0fvAtU63yBHfdGMYcSpOmOZQoZq+XY5bE2POQW3JEfIDjeU76TxQpJ4g+uh1FXKZIcb3t1aOqVDBFcAFOZWywviZrt12XxgjZ+17P25hi3lUxmQltAG4XGfC4eOVeEjeP2uNU/8Aq+VJhWuQ5a23Y7Ub2KZClMd7IdIUMHvMjGCNVZ4YOvCtZlOIfZWy74m1jBGcUyVNq8JKuHHOvzpfUo1jAqZej0AgiBWwtum7MzrvcJD0+dCt0RuDEgJfU8lcj31oaSeSfAjOuMq1AGKynaSxSrRJWzdRHTcHX1yX2WCChgrJVuZHE5USfUVvN3u8DY+wvy2WW20spIZaBwFLOSPvJJPHjmsKkyEX4MPuOqcVIV3rr6hhTilcVVN1hWsJGNDTutNhgXKtsm0vquNlVuHi7F+o51IHX+RRDYdo2LvGU41kOpwHGlHxIP5jzp561yGQCQFZWW9OvL50NXiCYc5uVCWY05Sd5KgPC7qQUK+IpTIfgzV27TlfyhNJSFN7x4p1FUk1oszo01tZbWD3ZWB7pPuk9QdUkdD5VJtl2bvVvDyRuPNnddb5oVSpLCZUdxlWgWkpz06H51UZU4MscMOIzdLcLqybhHjD25pBbdYKsd6OOAevNJ+BpXZ3ta0S5aH+8chPqIwpOHIrnPQ8PMVDeuz9uiRrtgqQydyY2NcozhRHmlQz6Zpy6QbZYbo5tgp8oaLBDjbYyH1q9xQ8yKJsDLtb7fj8QHmFG3L17/h8/wAzLtjZQhTpUrm1FcUB8qvp0GDtZbhMgqwtAypB1WyeYUOaT1oIiylRe93RnvW1Nn0NGnZvs664+b7I7xERglLaUkgvudP3RzrU1KhM25wR1/ExdDYbMacDIOc/z9oZ25l+3w7RCkyA48hgd4OYJTp9wxSr62gxC6UjvEYSlXMDPCmLp3iHk3BxW8/3gKjwGOgHSl3l5L8aOhvJDygRjp/JrI5JyZ6LAAwOhHbRMfaEcOp3kEBSHB+Boojyke0LiKOFe83n6yTr91UMe0PsQksvAtrXhaBnVI5Up8mbGbUhZbkM+HIOqFD8iKqcGSJKu8GTEnR7xbtJMZaXAAOJScg+ddJ2e9N36ywroxoiWyl0AfVyNR8DkfCuaLdtShR9muSS26PDvjgT59KO9ldt51jjoYhKZnQN4lLB+qScndI4ZOdKNVZs4aKaqg2gFexNiLqt6nWnFc+NDNp2+sVzUlp19UCQTjupI3dfJXD8KKGUpWneQtK09UnIptWDdTKsQpwwxJDajSnHyg4CdeOtfNor6Q0tSUqaSlawoaKVugjOuvpV+faL5XPMcJJTkjHlUV7NTVCmHG81JEhTKl7e4UwArPmatVxgTwqsv8xuxWWbdHcbsVlTmDwJHAfPFDIjKuIE3y3K2+2s+gVBRtFrb3pigSA48oaNZ9MZ8s9azbZlsO25okHLDZQrJz4kkg/hW77GWtVu2fhKdwZUvEqQvjvOOeJRz8cfCsXsMMRYk9jc3Q3NktEE5xuuqFBvHpj2jf1kCSZzgCUYwSDvYoW2pipAekpKlB1xLuvIBPAUSvNFx0YGhA+FVO0TKBGQ2dQskHzpFTgzREDlBVsmRZUZClOBke1NJ/rGgAM4+0CdOuDV9lKkpW2oLQsBSVDgQeBqqgKL8+fI5JWmOj0SMn7yakIWmButf1ClEpH2M6n4c/iaM3PHvKJxz7T2OhPezYywFIUrf3TwKVjUfMGmrZB9s2Tn2OV4xG72MlSjxRjebPwBHyr2VHnru0FcNhTjS1bkhQ4ISASCfiaRtpe4+y9hfSlSTOmgobSOJOMFR8gPyqyAkhV7MDcVVSzdDP5GZXsns0/tNdWYjYIQpYClfz5Vs8luPDQ1AiJSiNFT3aABgEjiar9hLS3s/YnpwADqx3DKueTqpVVG1G0TVrjLG9lZ0wDqo9BRL7W1FuF6HUrpaE0lGW7PJP8AqLnPm4zm4zZykHA8+pqexh29IShOWoicJ6Z/6/hVDs0pUWG/dpu6HdzOvLPup+Aq92aPfQFSzxfWSD1Aqjrtz9IdLA2Pk8wjivqdktpcy4VKA86pdr7rCsEx5wPJCkHxp+qc/V6lVIvW0X+jcRcxABdSkhJ+znTPr0rGbndJN2lKkSXFKJJIGdE0TS6U2nJ6imu1o04wOSZrKX4l/YbkxlAOlOSn7Y8utG/YPfo9p24FulFCG7mgx074/rQd5seuQQP3qyXZ3eZtsJQJSQkKBB4amrORfpcJSLk0tLUqEe/beSkbwWnVJ88ECuC7LMCFf+7Rk+4zO21wY7urjDS/3kA/jTiGEIG6lCUjoBgUGdk3arau1OwIlx1tM3RlIE2FveJtX2kjiUHkeXA0dbp9KdK4M89vJEQE4pQHTWvVN7ySkKKSQRvDiPOgW32667MyX2LvdrpdEvOFTMp9ai0UngghONxY+R5dBBIAzLIpY4ENpL7MRouynW2GxxW6oISPiaGJ3aXspAuka2OXQLlyloQ2hppaxlZwnJAwAcjWvW2o7SipuJGCyc76m+8Vn1Vk04zs63drvEuU+GCqA53zLzgG+teCBjnujPPnjHCqixScCFbTsg3ORCIt4JBFBXa4P/Bj0YD/AM0+20T0Gqj/APzR1u+dZ/207Q2qxbLoROktiY4+25FjZ8bu6oBZA6BJOT6VZhwZSo+sZ+ZW9pu3C9jdi7c3bVpFxuDLbEZWRltO4N5zHlkAeZ8qzbZAKRslDUvJW/vuEk5J3lk5oR7SZNyeuQfkyC/HRES3BUOCWUp8IHn1POjy0MCNYLWwMeCM2P8AhFI3tlczb09QrAEcUMAUO3+QFyENg5DYyaubrNEKOV6FR0SDzNA93nFlpSt7Lrp0/M0oi5MbHzGLGoJtKH1ad4px1WfNRNSHm0z2mXGnAAFBY0znyobuN5TbNkmN0/pC0APXJwP56U1B2kbtcdpUh5JLjQcLZ4q05DrTRqY+ofMCLkXCk+whWnvlBEdt9xssuoXlKiN9vofwPpQL2rPBc2A3vZUlpSj8T/lRfanpaLc5cLokMqyt5LSRq01jO6ep0zWUbQ3ly/XV2asbqVeFCPspHAUxo6z5ufiIeJXKKNvu37TWtpL+zabYy0DuJYb+8nU+p4D0rJXLmLldUSJ6l9wFZ3RrhPHFWW210XLuHcbx3UeJQ8zw+Q/GhqmdHpwibj2Yn4lrC9uwdL+surxtI/cUezNZaihW8E81HGNa1DZNwO2KMU8MaDpz/OsVrSezq8hy2vwVq8bAKk55iq6yoCobR1L+G6gved55IlBt9eVTrouIknu2Va66E/5D8TQsONSbm531xkucd51R4551FpylAiBRM3U2my1nM0CyKCrTEI/swPlUXaiWI9rU3nxvEIA8uJpGyUnvbaWjxZWR8Dr/AI1WbRd9cr03CYTvqSAhKR1Op/nypCuom/b9ZtXajboww9xj+ZD2d2mu+yd0bulknOwZjfuut4yBkaa8jjUc66h7OP6XNquiWoG20T6MlYCfb4ySphw9VI4o+GR6VzUNi7nnBCAQcaHT51XTrNMt6yl5pQxzxofQ1rvpXxllnnVtAPBn6S225wbzCbnW2ZHmRXRlDzDgWhXxFSSMjB4V+f3ZPtftPs5tEy1Y7vIgpdVhaQN9tXkpB0UPv8xXU2zPbovCI+1dpLC+Ht1uBdZPmps+NHw3hWe67TiaFdbum9RkTWQy2k5CEg+QpYHIUE3ntg2UtbQ9mmOXWQtG+hiCgqOvDeUcJR/Ec+VZntL2l7RbT7zPeC1QVf8AtYbh31j+8d0J9EhI9aocCGp0ttx4HHzNJ237VbZswl6HA7u5XRA8TSV/oo+nF1Y4fujxHy41yxf9prrtfc13i8yjIlvJABxhLaOIQhP1UjPD4nJo6c2buM7Z+5vQIpDceK6vQbo0SScedZihSUspVnCQgH4Ype18jAmrTpEpbvJxCG33WLdbabFc30tlrWNJVr3JP1V/sHryo+tby2bNFRLU2l6OyEPBK94JKRxzzGmc1zcxc5qLo5PS06tDivEndOFJ5D5Vq+z93MnZqYlK1aJG7vcdxRxjHlQ9VQyKPiRpdSlxOOCP2+ZPnXxNzkPSDlEdnwIzz6n8Kzra/aBxMlpttRStSgo45IB0Hxq2lzvZozver3GUErV5ms4mzHJstyQs+Jas46DkKJo6Azbj0ILxLVeWmxezLfaqelbqILWe7ZJUf3jrj4Zr7ZebaLe+5cLr3sh9nHcMBOd4/aJOmnKqyHa7hcw8uJEfkhpJW4pCCoJAGSSa0Ts87Jk3phu5XpZbjKAWhnJGUngVY115JGvMkCtenRtYvlLMG3W4sNx/74gdetorrtTL8CHQ2nIQwxk7oPHOOJPWrGwdku2e0msCxylJHFSkkCujLNGsOzcdLFqsMPCcfpJCd4k9QkaD7/Wig7YXa325bwWyg4yEoaAA6CtarwkIuJnXa93bd2frOJrq8ZFxkudXFY9M4qJS3XC66twgAqUVEDzpFZCjAAjrtuYt8z6plquLtrmIktE6ZSoDmk8RUOvq4gEYM5WKkMvYilneUTknJzrSaeiRH50huNGaW684d1KEjJJrbezn+jjP2ijuTJ1xhw2Wsd64sBSWj0yrTPzqZWZnspDnR3lOOR3UxnW875GBnkfxoot2ygdmKuK5KN9xW+AkeJI6VrM3ZPsktQMS49p0dclI3VJihLmvwBFCzOzUKXGWbFfI9ycZTncSN0q1OqcE6cPPjTGnFNd/mZ4x+sJZa76YVe4P6Svdg+E92E55AnFV76Wc+zzkFoL0/SDKFfHhSfpR+O4tqbvRnEAnJVlCwOOD18jrUtueiS1uuBt9pY1xqCK2UtSwZUzMKsvcq7LaIez1+M5xKkx90hKuIbJ+t6cfSj5KkrSFIUFJIyCDkEUGOpTFARvFcVZwgnUtn7J8qsNhb3Csl5RZr3n6PlLxFfz4WVk+6o/ZPI8qxfE9Eebk+4novBvElr/sWcA9H+YWRYMma4G2WlrJ6CjXZvYDvlpemkKSDqB7o8vM0WWvZpuMkBxCEIHBtHP1POsi7Xe3lVvfd2a2NdQH05afuCNQg8ClrzHAq+XWsOqt7W2qJtarXrUuQYf7Z9qWyfZxH9gcWJc4DCbdGwpZ/fPBI9dfKuayiRdn3XI0U26Kt1S0NBW+UIJyEAkcBnGa8smz7sh8y5ri3X3TvrW4cqOeJOaLENsQmsJASnrzNej03hNaAGzk/pPKX+KWsTsOJQt28ITuLUoj1zUq2wg048yy6tAfbUgg6jPEfhTn6HCvESrkANKQlRSQUnBHA09bpkasoAOfpFatTYtgck8fWCO1sR19AbSpZKDvBI17zP50mx7BqeSHrkooTgq7sHBAAySTy0qfOkPInmQhY/RKKU5GeX/Wr/YiK9tRtLFbk4WzGT3q0clEaDI9SPlWVbSq2iikYjy2F1N9xzCaezHsez9riQYAjO3F5LEdhKjjBIypQGMndOT5njRhGjBltLDQJA8uPnQ646L52jPqTrFsMbuG+nfL94+uM/Kji2x9xkuEeJfD0r0dChRx0OPymLa2ZXx0Bb6EngVCp98/9Ncx1H41CjHclIzyVirG7N95b30jknPyo57gT3P/2Q==", /* ฟลิคก้า */
  N900: "data:image/jpeg;base64,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", /* วันเฮง */
  SM01: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCADAAMADASIAAhEBAxEB/8QAHQAAAQQDAQEAAAAAAAAAAAAABgQFBwgAAgMBCf/EAEoQAAIBAwEFBQQHBQUGBAcAAAECAwQFEQAGEiExQQcTUWFxFCKBkQgVMkJSYqEjcpKxwSRDU4LwFiUzNKLRRHOy8VRVY2SD0uH/xAAaAQACAwEBAAAAAAAAAAAAAAACBAEDBQAG/8QALxEAAgIBBAEDAgUDBQAAAAAAAAECAxEEEiExQRMiUQWRFGFxobEywfAjNELR4f/aAAwDAQACEQMRAD8AqpqUvo33E0PahRw72Fq4JYCPE7uR/LUW6LuyWuFu7Stm6gnA9viQnyY7v9dcW0y22Rf5l22eooJ/baXiwHvx9HHUY66rp289isFIku2myNPi3y/ta2hjH/LE85EH4CeY+6fLVltzofTTRbZVWomoJAGjkDFVYZB6MpHUEHOPXRtG5fp43Ry+0UC1mpe7euyI7E3I3yzwn6krH4ovEUsh+7+6eny1EOgMGyt1y2yLH/R+7aEkig2P2jqQsi4S31cjcGHSFj4/hPw8NTltHZqXaWxV9mrVzBWwtC/5c8j6g4Pw18/wSpBBwR11YHsg+kGYUgsG2NQTGMR09zc5KjosviPzfPx0SfhmjpdUmvTsIO2gslXs3eq20VyFKmjlaJx44PMeRHH46btWO+kj2fi50cW2tqRZHhRUre74h4vuSjHPHInwx4arjqGsCWopdU3EzWazXWnpZ6uURU8Ms0h5JGpZj8BqCg5azT8Ng9rDF33+zN67vGd/2KTH8tIYtnrxPUmlitda845xCBt/5YzrshbX8Dz2X2lL32g2CgkXejkrEZweqqd4/wAtXFr5Wlr5TyKEAfIH+uqtdk1kvOzvaPYq642ivpqdajceWWBlVN4FQSSOHEjVqprfXV15Wnt1MtTNLAZHQyiPcCEDeJPjvAAeI0UWbf0ySqg5T4Pa2q9q7sA8AuSPzaSV9CKvZm+Bhn2iimgUeQRv5k/prZ1lhmnppoZIaqA7skL43kJGRy4EHmCMg6dqiIQ26WEjCrA68f3TouzRscXBKPTPn+dea61KhaiVRyDkD565arPImazWazXHGazWa9xrjjzS+w1ott7t9aTj2apimz+64P8ATSDXo1xKeOT6KxTxVDv3bZ3W4j14g6GpJO4r4Zs43KpQfRm3T/6tNext5luuyez98jkO9V0MW8w/xEUI4PxXOl1eGkpp3Ay+DIAPEe8P1Gj8Hqqopw3Lyh7v1lotoLVVWq5QCakqozHIhHTxHmOY1R7tD2Kq9gdqKqzVOXRDvwS44SxH7Lf0PmNXx3lnjWZDlZFDg+RGR/PUM/SY2MW87HJfoIs1VpfLMBxaFjhh8Dg/PUNeTO1dKsr3LtFT9e6lHs07A7/t5FHc61/qeyseFVMhLzf+WnNvXgPPVgdmexnYfZONfZrJFX1K86q44mcnxC/ZHyPrqEmzPp0llvK6K89mnavtDsrF9V1NDPe7BICj0boWMangdw44DH3TwPlpm2u2Nga9wPsis9wt9zl3KWmEZ9oglP8AcOnPeHQ8iOvPV2rVQTVVQlHQqsAAye6UIsa+OFx8PHRrS2C3UzRymlimqEGBUSoGk5YPvHiOZ5a5rBdqYquKrnLL/gqjsD9GK22+KKu27qXqqogN9U0UmFj8pZRzPiF+epps1JbtmacU2z9ot1ohAxilgUMfVz7x+J0W7SbMD2SWptcYjmVSTEBkN5gePl10EQz1UG77UUlibGJUXdI8yORHy0UUh7RVUTjmCy/zHhrtcG4mtqM/vkaRVFRTXrfhq/ZLiYjhlmVJGQ+vNT8RrpBQC63Ogt71E8EVQ778lO+5J7sbMAG6cQD54xyzpztuycs2zqW2SWIXuyySRR1O7urMrMXXeA+46suR0YEjiuuckuCb9RVVNQcQSulor6iCW12Q1FW9TEwFvlYyKq8t4SscxgHGCxYZ4AaM9iKC8265S1F5tT00lTSQxtKsqSIsiFiwypyAS+QSOmmalvFTYKh7tHTyMII2jr6JiBIVXLYHTfUkkdGDHjxB0X2fayG91P1ZLRVlFXmnFQ8cqZQRnADLIPdYHPDHgQcEaCbaXArrbJ/0L+lnG47F26/X43e4TyyIlP7OaaOQojgOWDORgnGTgZxxPPQH2kT2vZagrJLXE1OkNsqqiZe9Zg3AJH7pJwSxbGOeDqUmt+7TzxtWSQNKu6JIiAyeY3gRn1Govu+ylRabvR26uqIbnRV0rVDVkozNUtEuVilByDz3gRhcIRujqNbbXu7FtJJuxLdj8ih7EsxJ5k51rqzvan9HamvCS3XZKNKatGWeizhJf3D0Pkfn01FWx30fdvtuKSvqrbbIoo6GVoHFXKImeVRkooPXiOeBx56Loqu086niRG+pK7O+wraHbuCO4zyw2WzufdrKoEtMOvdxj3n9eA89FWxH0Z9qKZqTaPa609xZoczT0e+DUbq8i6dE6nBzjpqwFplobjK0MFXTSdyoBihkUkKOAAA5KPLhqUsjOj0cbU5zfC+4B2P6PHZhaIgLiL3e5uryOIU+Cr/U6fR2D9kFzQxR2OspnxzSqcMPPiTo7jpoVGBEg+GvJLbTyjgm4w4hkOCDqdqHnpKMYSPnhrNZrNCYJaj6Ll9h2g2IuOy9RJia2VHfQkfaWOTiCPRwf4vPUnGKSCd6edAs0fEgcmHRl8Qf05HVRuxPbobA7e0VfO5Wgqf7LVjp3bEe98Dg6u9X26C70yMsgVwN+CdOO7kcx4qRzHUaJG5oNRiGGNmzsoNK1Ax/aUh3FzzaI8UPyyvqp1j2+PaaFzUrvWMkoU/+YkHivlCDzP3+Q4c09qsdRfLrJFVJJS09CGir5EbCzqwDCFD1De6xPMDhzY6KagiVhuoscaALHGowEUcgB013Ydk1KbhB8ef+htmQBd5txERcAABVRQOQHIADTJLNVVgL0yukOQseBh5mJwBx5ZJGBz8dPVZTmumFLxECYab83UJ/U+WPHThZKJaq9LlR3VCgkx07xshfkoY/EaJvCLJ3xqrcvge9nrP9T29IpGElS+Gnl/E3l5DkP/fTnrNZqs87KTk9z7M1H19oBbr1NTquIZ19oiGOAycOvwYg+jjUg6GtuaZfYaa4cAaSdd4n/Dc7jfqyn/LqU8MZ0dvp2r4fAH1ss1uhhrKSIyT01RDJEgbG8S4Xdz0BDEH11Ir7okiucIO6yBJRjiU5gkeKkn4FtBdRQrVU8tPJkLIpUkcx5jzB4/DRhs9cfrC3B5VCVKN3dQg5CTqR5Hgw8m1Mhv6nFtqY37U7PmtU3CiiElSE3ZIc4FVH+HP4uJ3T8DwPBr2UMd/2fhp4qkxXSzN3ENRu+8oAwhZTxKsoCup+8rDgVBBl3vdziBlwrDKHoccx6/66aHbxs9PQXuPaWyDFSBuV1IPs1sPl4SrzU9fsnnkCzPVjcNj8dA7VVl/qto5qvMVDUUUa07UMrF4qhWO8zkjB3SQNxhxG62RxKhNUz11zv1GLqtLSil7yWkSn3mE7Mm62XbHFQT7uOucnBAObpaaXaWjgrKSo7moC79NVoucA8cEfeQ8Mqf0IBApUxe1u1nu0JpK8e+m43B93lLC/XHPHMciMHiSfgd0voyxx7kOFTbnpUQuVO90HThnTTLR1ltuH11ZSsdfgLPCx3Yq+Mfck8GH3X5ryOVJGlNur6ipZ6CuP9tpuLAfZlU8pUHg2OI6EEeGVqxl2CjmdTjPY81uhifI+2S/U19oVqlZBE5KPFIMSROODRuvRgeBH9DpPtNszHdLTFFboKSGrpJI5KRyNxYsMN4AqDgFN5SMYOdMd0h+o6836EN7MwC3OJBnejHATgfiTr4pnqo0cU5iEEfduHjIBVt7IYeIPXQvBhyjKuXAAr7TT1klDX0wp6lFEgCSb6SITjeVsA4yMEEAjh4g6UquiO87N268zR1FUZ46iJCkUsM7RsgJBOMHB4gcwdCdFUstXVW+okDz0szQ94BgTAAENjocEZHiDjUpmtptR6qw+0fO3WazWaExTNWb+jx203W6LSbB1NBNX124UoKpeIRQM/tfyKOOeeBjw1WTVy/ok9mqbMbKTbaXKELX3YblNvjjHTA9P32GfQDXfoW1TlF5iTjS2yKgoUoI3MioC0shPvySHiXPqTk//AM0kuarRBmETAKgIGclz0+Z4acGy7Fg265GN4ddNc472rjh3t5Yh3jevJR/M/DViWBunKfZxp6ZoYgrENIxLOfFjz/15ac9loh7HUVOONRUSN/lU7g/RP10nxxGnDZld2wUB/FArn1Iz/XUTO1cvakORONZrlO5TuwPvOB/r5a66AzzNN20VCblYbhRrjfmppEQ+DFTg/PGnHWHXHJ45AO3T+3W+lqv8eFJf4lB/rrusk1uqlr6dGkGNyogX++j8vzrkkePEdRhr2JmNdZY6cLuS0TyUrox4jccqD6Fd0j10SLQSZ4lR+urO0blk4zjiQ8wSw3ClRklEkbgPFKvUdD6jSlGbu8ygKV5kcvXTCskdiRpXLCjZt+Y/4R/xB4D8Xz8cu1RJvJBFvK3fOBkcioG8f0H66BrBjWQ2vAlp92015pvs0tY5eHwSU8WTy3uLDz3vLSu42yku1OIKuESKGDqeTIw5MpHFSPEa9rqWGvpnp51JRx0OCDzBB6EHBB6EaS2+oraaT2O4qZMf8KrUYEo8HA+y/wCh5jwEYATBLaaw3i3otbSIa+SkJeCdF/agH7UcqD7aMAPeXiCAd3hnS2x3+iv1qgulG2YphxyMMjDgysOjAggjy0Z6GL/sNBcJ5bjaal7RdX4tPCoMc58Jo+T+vBh0bU5HKtV4mbd6GyOB/XSLZirFpr22dnXNOime3MTyhyA0X/42IA/Ky+B022+vqRUvbbrTpRXWEZeJW3o5V6SRMftIfmp4Hz3vVHUVtLHLRsFuFHIKikdjgd4BxRvyupKHybPTRYG7aFZXmIcTQpK3eNJ7qjiBoI2wstotVNHc7bGtFXNVouIzj2ku3vAjPFgMtnmN3wzogs10huNDT10O8YahN7cbgynkVbwZSCD5g6U3MWeroZVutNTtSRozuZ1BVBji2Ty4ddS1xwZdFrqsUvg+YWs1mvQMnVYAYdkuwc3aPt5bLAgYQSSd5VOP7uFeLn5cB5ka+hE8cFFBT26kjWKmpY1jSNeSgDAA9BqIPoz9lx7OdkX2iusQW9XqNWWNh70EHNUPmeDH4DUqb5ZizHJJyTooLnI7pqs+5iuOYiIjPHkNcrWiz08lQf79yQfyjgv8s/HSO5VJprfPKv2whC/vHgP1I0qpf7JFHEn2Y1C48gMatGZV8ZQk2jqJqGnipqNlaurpPZ6YEcFYgkufJVBY+mOunbY99/ZS0ZYsRRxKWbmSFAJPnw0x0b/WN9rrpIVEFvQ0sRY4VSMNM2fXdX/IdL9mrilDbIqeeCqhiEsixTPERGyGQlDnoCCvMDVEpZkKX5cUPlYd0wHp3q5+OR/XSjXCuyKZnAyUIf5EH+mu+uFDNaTzJTwvNId1EUsx8AOJ1vrxgGUggEEYIPXXHALYdlbrEPrSnq6SFpxI4geNm7xGlaSPfYEYYK5HAHn1wNda6u9r7hav2qlggnaO4QQM3eAhfd4p7xTJU+7gkEeY0tslpR/rOlNTWolPVvHEiVUgWNMBlUANgAA4x4aaoqZtn602+ZSIZpC8ExJJLHiUdjxLfhJ5jhzHGISWdpoVLe9smPttt+zVyiYW6WKUAe93FS28vrhsj46V2uxLY6OOloppJYYt4RLUuXMSn7itz3R0znA4chjQ9V26jrmWSeBWlX7Ey5WRP3XXDD4HSimu9zsy/tHlutIvNWx7Sg8jwEnocHzPLRuLAt0k0uHkIu+rom9+ijkXximyfkwH89LFO+oOCM9COOklqvFBe6X2mgqUnjzutjgyN1VlPFT5EA6WaESaxwcfaAk5ifhnip121wqaUVGDvbrDrrpEjRJus5fHU6l4wQsgf2oUAqrRTy04QXGKceyueGCeak/hYcD6g9BoLtm2ZRd2aeElWMckM8irLE4OGRuOcg5HHR3cKlLtcXqM5pKAYQ9HlPL9f0Hnra37F2+am76uoKCpnmO+7T0yOxzyySM8tWtJJJ9j2i1jqhJyW6LfH6+QWsu0tNQXvcXK2+6yA5JBWnqzw5jhuygAfvgfj0dBgeJ0I7S7O7AUoekudFaY5mXjFSIUnI5/Zhw2kVu2xjoLrRUC1FxmoKltwVF2CxGI9AJc5YnorgE9GJ4a6MsFOoh6zdtUGl5+PufP/VgPo3dhzbQ1sO2m09MUsdI+/SQSL/zsoPA46oD8zw8dEHZp9FuktM8V029qIauWMhktFK+8mf8A6sg5j8q/PU/JUpLGiQrHHBD+yjijXdSMLw3VA5AYxqpLJdRpJSeZcIXVFW1VLvtwA4KvgNaq2k6trcNqxGnsSWEJL6/7CnjzweoTPoMn+YGl1wrlt1DUVbDeEMbPu/iIHAfE4Hx0ybST7hox0Ds3yx/3041q+3VFvol4ieoWRx+RPf8A/UEHx1zeFk6yOK4v9RbQ2Cpg2co6ZAksySRy1CO2BOQ2+4JwebknzxjS2QVddXrRXFYYaaRO8WOJixkKkZVmIHkcAcePHGnpF3FCjkBjSa407zxLJCB7RC3eRZ4ZI6ehGR8dLpmG57m2xUyB0KsMgjB1xomJp1VvtJ7jeo4a2palKunSaPO6w5HmD1B8weB9NJJqxaG6QwycI63Ko3TvVGd34qCR+4dGVjhrRpAsqofvA4+Gt9I7ozQ0wqlBJp2EpA6qPtf9JOuOENn928XxP/uY2HxhT/sdLLnbKe60r09RGHVhjjpLQlFvtyCsCJYqecEHgQQ65/6dKbpeLfY6J6251tPRUyc5Z5AijyyeZ8tUtclqk8poDp5KrZ2cU11ZnpGO7DXnkM8ll8D4PyPXB5uBOh659vnZ2S1LJW1NZEwKs0dG7IR15gZGhKq7SaKS70dl7PBPepK07qUtRCyR0p5+6zEHAAOVPujoRy1bGzHEjUptk1iawF81F7PfS9LVTW+smTfgqocZOPtRyKeEi9QG5ccEafaXbmqto7vaO3siL/4+gRpYD5snF4/ky/m0LbS3ONqeIqz0dxppVdIKpe6kB9D9oZwMqSOPPT5S1qV1BDWQ8FljEijPLhy/pqxpMut0sLYqfyGNBfbVdKY1VDcaSqgAyZIZVYD1weGmiuu097aSkt5MVKvCeqcYAHgP9ZOha4bPWW7OJ6u2Uk0p4ibcCyfxrg/rrrsVRBL7c7BNVVTUMUUNbRwyTM+FbeSRQzEnAdAcZ4b+pjiPJmX6BxWZS9v7hNbaCOreOKFCtBTnOW5yt4n/AFy08zVD0jZdS8RPMc10nut5tuzVJC9Y7QxyOIYUiiaRnfBO6qqCScKTy6HTRNtlNWRlbfs3daoNwD1CLTR/HfO98lOgc1n3FElKeFBYS6Ai+2OrqNor9crO4mcVad7RuwVZwYIjlGP2ZOJ5+63XB46baaop7jTyLuby5MU0MyYZGHNHQ8iPA6PbFa7hHWVNXWU8cclXUido4mLJEoREC7zAFuCZzgc9e7V7CRXmQ3K1SR0N3RQveMD3VSo5Rygcx4MPeXpkZBrjZhteDa02u9CMa7OsfYQxFt4e6efhrjZnP1bAzHi4Zz/mYn+uqH/7cbUmnNMdo7wYSMd37ZJjHz1djZt3odkbJHITvilpIjnxKoNXJ5Oo1CubwsYCqMlzhQWPgBnWwbW1mkQ1S++6TZ/ZkY3eRzvZ1lRUxyQwBJM7qkFNzG6fXrnUhuT37cDJtQpMVPJ0VmU/ED/tpy2Km+tLuZic+w0iRHyd2JP/AEonz037RHftpP4XU/0/rpns020Vv2Ur9otmhHVzwXSZp6FxkVdPGqxsoPMMpQsMefPONBa/aFq/9sl5zgmF3VFLMQqqMkk4AGhybtJ2NgqvZZdp7QswOCpql4H1zjVeNr+0fabtfu8Fks1NPTUcuAlBFJnvDj3nlfgCB58APPRLRfR0ipbNNV3Gvrq+riiL+yW1EUM2OCKz8z0zw1Qsvox/w8YL/UeGTI11FLMbnblWvtsx/bmkkEu6f8RQOviBnPPmOKu80NPtXs/JFSVe6ZVEtLVQnJilU7yOp8VYDh6g9dVGtU9/2Pq3rrRXT22rhkZZaYMQ6EHijqRhvMEasX2b32r2vtBuiRx2q6+6alYsPT1WRwkMecjex9oEHgRk4IExn4YFlSS3QeUFOzN+nuFNHT3SFaa4qCrgfYlK8GKehByvNT4jBL6eOh6QVUczvUWh5BKQZUp3WRHYDAdclWVscOXQceGnKOOVo1eKoqIgRncmUMR5HPH9dHuKMALtTtNS9nUstfc4pWpYomioYVPGoUneCE+KMDjPJGzxIOolveze2XaHTTbYbUrXR0SjNHb6SFpJWB5LHHyRccS7ccccHhqaL1sMNqtrqG4XWQ1dLbFLRQuuIzKcY93rgDJzzJUcgdHCIsMYUcABz/rocZeRlWqtLauSkdJs9S1MZkeolhYk/s8Z3PI54n9NbUViu9F7RdLTUuKi17s8jU7FZYoycCUeKg8Djl1GDnT52i3Sgk7QLv7BJuxT1JKmMe6SeGficn46XdmMstB2g2Vd0YqpHo5i2T3iSI3AjqMgarxyWV3WxeZcpkvdlnaPR9pNpa1X6Cle70y70kUkalKlP8VVPDP4gOR48jp3no4LNV1VHBEkNNG3fRIowqowyQB0AYPqF6Xs5uKdtNTaNnaua3w2+RKtqpOdHGwDbo6E8SoB4Ec+GdTF2hVIoGgIYmSqp2gBPXdYHPydtWVPEsDdEIq+Kh1LwItn6o1dlpZSckqVPwYj+mupqhaL/abuTuxJIaKpPhFMQAT5CRYz6E6Q7IAjZuiY/fDuPQux122hEclkrYpgGjliMbL4huH9dMtZH7alZmv5OXa1c659prXSW2r9lnt1O9aGK76NJITGquvVSqyA4wfeyDnRdsVtTSbSWzCR+y11KFSqo2bLQseRB+8jcSrdfIggRIKm419XNWXWRJagpFAsoOTJHGuA7eDEliRyz66VU1RV2yuhultIFdTZ3VJws6H7UT/lb9Dg9NVyqys+St/S3+GUepL9yc9ZpBYr1SbQ2mmulExaCoXIDDDIQcMjDoykEEeI0v0sYLXg+ZeyVkl2j2mtloiUs1XUpEcdFJ94/AZOruX2aOjtkLKQscVTTbo/KJUH8tQX9HHYNqTvdtLnGY1KNDQBxzB4PIPh7o9TqXdoGku1FUU8ZK70bCPybHA/MDTkVwbf0zSyVTk/IX94Ezk8tdRJpmorgt3tMNXHyqoBIPIkcR8DkfDSqkqvaKdJOpGG8j10WB3ZlZOt4JktdSBxKpvgD8vH+mo2t+1cuzvZntjRRzYkrZYqqkYNx3aslZMehjc/5tSVvgghuKngR4jUarsrarnU2203Rp4qWKVrVJJE+60ZziF/AgME58MSarsjlFN1SlW8+OQl+jdsrAlhqb46Az1kzQh+qRIQN0erZ+Q1OAVIkwAFUDUa9k+z107PZqvZmukFZb5nNTQVqLgZ+/E4+63Jh0PvYPDGn7tQsS33ZtVeeogjpamKoleA4bugd2T1G6zHj4arj1wed1DzY2yu/a7PRVW3V5uFLKDStKq76cVkcKAxHjxB1JX0c7gKiguNvlIZqRlnp3HSKXO8vpvrnHi2tNuOxairNljDs/Az3KGVZV72YkzKMgqCeAznI9NFfZdsLLsbaqP2mnhiq2oFiqHjIO/J3rNgnruggZ0Lg0+QK7a51+3sP861J1qGyOBBGvCcaAJI6QsN4jxGgTaG2VVy2wrbfU3e5wUFTQxTR01PLuI+6zJJxxnrHkD8WjPvCjBhzGkF/oPrOOmrKOSOOvonLw94cK4Iw8bH8LDr0IU9NWQa8gWwk4vb5IH2t7E619uKGSz0Ty2epeEyyGXPs+6Rv7+TnBAyMeONSPH2bWii2ksVbbLbLC0NcZXkV3ZERY3PHJI4sVGjqjqYpKZWeJ4H+9HIBvA/DIPqOGksLMkksxJVpBuqgPCNPDzY9T6Dpo3sWSqtX2OKl/x/zn5ONus9NbbhdK5AGqblU99NJ1IVQiL6BVHxJ0IdrkxjpbYyDMu9OEHixVQB/EV0cBtA21BF62vo6ce9T2eLvpj0M8hBRPgqhz6r46rr5kbekji2L+BzstjantdLT74iSFEiVnUgMAMEg9eX66HdqaoAJRo2eO+x8hwH/fT81/mtdG+JCFDKy8ckEdB66C6yqmuFZLV1Db0srFmIGNNJGxpK7HY5T68CKpcQUk8p5JGz/JSdd7fVRV1KlRC+8jAZ4YIPUEdCOoOkN8Be3+yKf2ldItKv+Y+8fggY/DXkFup63aC8yZmhdTThZIJCjD9lxHDgenMHUjspvdhBNsltCdkdokiqH3bPeZljkJPu01WeCP5LJwQ/mCHqdS/qp3bFe7jshsoHhuArBXS+ymGrp429wqSTvKAcjAweh1L/ANH3tXi7TdjIkq5wb7bFWCuQn3pOizDxDAcfzA+WlrY4eTzH1OMI3e3t9gzcrxbLHSK1fW0dBTxKFRZHWNVAHAKv9ANRFt52906QyUGygaSZgVNfIuFTzjU8SfM/LUGyzyzvvyyPIx+87En9dc9WubZN/wBYsmtta2os39HLbn64sM2ztZOWrbexliLnJkhY5PrusT/ENSlBKaGskiY4jc59PA6pNsztHX7J3ulvFtl7uppn3hn7LjkVYdQRkHVu9ltsbXt/YYrxbHAkQBammJy8DfhPl4HqPjooPwO/S9UrI+lLsMQdCm0lAv1jIjMUgusW5vj7k6DgfUqAR5x6eaOs3AI5D7vRvDW94t31tbpaZXEcpw8Mp493IvFW9M8/LOiZouLiwv2O2gfaDZ+kr5MLVgGGqUfcnQ7rj+IZHkRomjro5YzHUICCMHhkMPMaiDsyvLR3yroJUMBr0MrwE8YKuEKsq/5kKMD1C566k4c9KP2vB5/UaeKk4nWgiW2gwRv3tMoAhznfjXohPUDoeeOBzz10pYhB3jb7M8khkZj1PIfAAAD01yU67pqHNvsUVEIcpG9JTxUdPHTwIEijGFUa6E6b6y90lFUpRZeorZF30pIAGlK/iIzhV/MxA1ynuVRCgkrJLZaoz/8AFVAd/kMD5MdQkD5HBzrg50OV9/qpMi2V0lY3Ro6FUi/jkYcPTOuez16vcly+r74tAzSwtNBLSKyjKsAyMGJycMpBGOvDQuSzgahXLbuxwER4a8zrnPWUtPvd9UwRbgy2/Iq7o88nQ5cduKRQ0VpC10vLvjkU6erff9Ez6jRKLfRZCLk8RWR1vl7Wz06hEE1ZNlaeDP226k+CDmT8OZGhZGjtkDNNKZZpXaWWTGGmkbizY/QeAAHTSJq6UyyTvI09VLgSTyDBIHJVUcFUdFHqcnJ0iqZRGrTVMojXq8rBR8zpmuvb2bOl0exbp9m1ZVSVsu8/BR9lRyGkz7kSNJI6oiAszMcBQOZJ6DSB9pKFyUoO8uUo4YpRvIP3pDhB8/hpOaKpucqy3V4zCpDJRQ5MQI5FyeMhHhgKPA89WrnofUuMRO9CDc61bmyssEalKNGGCQ32pSOm8MADnu8fva6WE99JcqwcVqK1wp8VjCxg/NG17caySjoZZYhvVBwkK/ilY4UfM59AdM21G1Nu7NNlEkmZZZo4+5pYSfeqJAOfpnix8/E6nGCqcow90nwuWRT9IzaRa6/UVihcMtvjMk2P8R8cPgoHz0E9m3aBc+zTaukv9sbeMZ3J4CcLURH7SN69D0IB6aYLlcam73Cor6yUy1NRI0sjn7zE5OlNds5dLdaaC7VNHLHQ3BWanmI91wrMp/VW+Wl5PLPG6m93WuwbNZrNZqBczTzsttZdtjrqlytFU0Ey+6y80lXqrDkRpm1muJjJxeY9lpdhe1yi2tt8lRVW+oopKchZ3iQyxKTyPu5ZQcHmMeejy132jrFzQ11LVp4RSq2PgDkahj6NFjqqiC61aqQk8kcKN093JY/DI+epvuPZ1a69i8kNLNJ0aenUt/EOOrU+OT1+lvcqYysfLONVQuLzR7QWzdgulITmOYMIapChXckwMg4Y4ccR1BHDRNTdo9piQC9xVNkmHA+1LvxE/llTKkeuD5aA67YekolaKakkjjcFQ8NRKo5dMNwOiPs3pLQHW3VNDQ095pk92dYQHrYx/eqx47341ByDx5EaquXnBRraYpep/D/8JAt1xpbnGZaSQyxA439xlU+mQM/DTgg1rHGAAqjh00OXXtL2Xs0xp5LgamZW3GSkjMu63gWHug+Wc6XxkxJyQG7W2cJtbXrNTpK1TIlRCzICWVlC4BPgysNPVosFJbEV+5iNRji4Qe75DW9RtxsjtS1O9PcEp7jTORTitQwCQngY94+7x4Y48wDpb3oV+7lVoZRzilG6w+HX1GRpedbjJtmzp9arKY1rhr9zoT1OvKOIy7QUBX+6jndvIFQv8yNeDedgsaPI7cAqDJOnyz2hqIPUVG6amYAEA5EajkoPXick9T6DU1p5yVaq2MYbfLE172Xsu0MYW62mgr937JqIFcr6HmPgdAP+ydur7xOlE1bR26iZoC1PWzD2iYcGAyxAROXDm2RyXjIe1Fxks1grq6EA1Ece7ACOcrEJGP4mXTFQ2wWm309Kgbu4kCK55uccW8yTkk+J05Us8i+lby3kGqnYWjCj/el5fJ3VRqx/ePhwI1wl2B2dt0Jq6uHv2XrIN9ifAF8nRC0hmvixfdggLY/Mxx/Ifrpl2jrTU1ncKf2cPD1br/200lya9SnOSWRlYLnCIEQfZQclHhrA4EyRYJZgW4dAOvzOsmlSmjMj5xyAHNj4DUK9pva2FiqLLs/UK803uVddE2VVeXdRHqOeW65OOejlJRRfqdVCiO6bDPa3tMsuzkntc0i1ckAYUVJG3vTSHgZWP3UAyoPXLEdDqv8AtPtTddtLu1fcZTLM/uRxIPdjXPBUHQfz00SyyTuXkdnc8yxyTq0P0S+xeOr3e0G/UodEYraoZFyCwOGnI8jwXzBPQaXlJs8rq9dPUcPhfAH9mv0T9sNqp6St2ijFhtDkPIJj/apE8Fj+6T4tjHPB5an/ALRuzWz3xrJsbHHTUFhjt/dztyeCOKWIx92TwDn3xvNngW4EnUw8tIKuwWqvrVrqu301TUIndpJNGHKrknhngOJOgefAnFpPk+XWs1ms1IJmijYDs8vXaHeVt9rh3YkIaoqnB7unTxY+PgOZ0QdkvY1cu0eq9rqGehscL7stVu+9KRzSMHmfE8h+mrbbObNWnZG0xWqzUcdHSRD7K82PVmbmzHxOpSyPabRuz3S6Ouyuwdr2F2WorfbJAY4kAJbG/I2TvE465wceflpc8qx4B4s3BVHM6RzXNTIIKRRPMf4V8ydKKenMWXkcyTN9pz/IeA0ZtRg4r3s6yRJPEYpUDKwwRoHuUFJC1TJUT7kFK5kWpVyjQ7gP7RWHFSOPEeGnLbTbi07KUTtXXGGjyMF3b3h5KvNm8hy66rH2mdsk+1lO9ms0UlHaCcSM/CSoA5A/hXy69fDXZwTLVQ08G5+fHySRS9t22W3mzFdQoY4aOKoaE18Y7qeph6K5+yDjG9uDJz06s4FV3ZEyyTYwMRT4KjoApAGmLsoLXPZtbbSQVFTVJVSMYKeF5HbIUg4UHhz46JROkFTJT1CzU9RA5SaGeJo3jfwZTxBxjnoIpHmZSb5EdPdUilbv0bA4NvL76fvDqP8AXHU0dju17VNYmy9yaOqpZYzLQNKA/dlRlowT90r7y+GCOWMQ5dlhniVkZe/B9x16eR8tO3ZDNPN2i7O0sZwFqmlUfhURvvr8P66iS45Oi+S2Sxoi7qKqr4KMDWEa51VXTW+meprJ4qaCMZeWZwiqPMngNDsu1jXNSLNC3cnlWzoVRh4opwz+vAeZ0tkvhCU3hGm3kyCjt1KWGZ7lTAr5Kxf+aDXB6qWVAjkEcM8Bk6bL/TyLbHq9+WpqKWSOrLOcs3dsGYADgPd3uA0tR1kVXjYMjAFWHIg8jpih5Rq01KCwxmlqhR3mulPMUyso+WNBW0e0du2Ytst0u1SIolPq8jH7qjqT/wC+ifbKSK3f7xmfu4FgfvX8AnvH9M/LVONvNtq7be9SVtQzJTISlNT592JP/wBjzJ1e5YQ3frI6apSXMn/YdNuO1i9bXSzQRuaG2tlVp4z7xX87dc9emgfnrvQ0FXc6qOkoqaaqqZTuxxQoXdz4ADidWI7N/op3VbZNtFtez0c8EDz0lqiIMjSKpZO9PEKMge6OJ6kaplL5PNWWTulum8g52ZfRlv20y0l32o37FZpmUoki4qaoHjhVP2AR95uPgDq71st1JabdTUFDAlPSU0SwwxIMLGijAA9BpBdVS7WOOphG8pVKlPMYzn5HTpTTrU08cyHKuoI1PGAXD27jprWQsEO4Mt01trNQAfKvRX2Z7C1PaFtXS2eEtHT/APFqpgP+FCuN4+pyAPMjQpqwv0d6f6u2UudfTxb1ZX1XcF843Yo1BwT0G85zjngalLLGtFp/XtUCcqaS2bN2+ntVqp0SCljEUUMf2UA8T1PU+Jzoevu21ut6lrteaGjTokkyr/05ydMW193g2a2crrxXlqkU8eUhJKxu5OFXdHTJHPPDVUrtdau9XCavrZO8nmbeYgYA8gByA6DRt7Te1epho8RjHMmWgr/pGbDbOQslvFdeak/aaCLu48+G8+Dj0B1HG1P0oNrLwjwWampLJCwxvx/tZv4m4D4LqGtLLVaa++XCG3WykmrKudt2OGFSzMfTQOTMO3XXWvv7Dzs5brp2kbbWu01FZU1VXc6qOBppXLsqs3vNx6AZPw1eiy9gXZ1sxTobbshbKupjUYkuOZy58SX3gD6DUXfRY7Fa3Ze8XHai/R0zzxR+yUXdOJFRj/xSGHAkcEyuRxcZ1Ym6RXAiKa3SQd5GeMUwIWQdRvDip88EeWoXIrLOeewOqu1HYvYp/qmshks9ZGAz0EVC3uA8N4FF3Cv5gcfy0y9sPZrS7eWlNqNnmVrtBBvJJTnIrYMZCnoxGcr6kdRgvvdr2b23jS07RW1VqwC0UVR7kyHq0UgPH1U+o0L2GnHZy4pLPtBFfLG9clG1NJIjTWySQkKN5eDKWxlSARnI6jUpZIzjkrZFPmn7yXdjxkPk4AIODz0K1ct1r7nHdKG01s1ntNbFLU1awuIxvlcbzcN0EA448c51Yqt2Tt1y7Qb6/wBW05IlWdljwjlpIkAI54zI2TjHM6lC87OUVFSUi1Td/VTusTzcmDcwyry3VbHukEY0VkccEQn5QOVdBs3aGgra+aSpKn+y+21UtWV/8pXZuPmBkeOuE220juRR2eeb808yx5+A3j89DN7EFNe5auYu1VUorkNHukE5yE/JkZyOZJzxzrKatl3f2alFPU6tp0MJRUpPJZd9TnF7a0khwrts78ZCBblpohz9mkSWQj/OF/QHSnY/aKlZY7Z3sndElaRpRhgRzgbIGHXpyyvDpxYq2tEZyxy5HXWmyVsl2jgraaCnFUa+o7/eclUp4wqosjMOIJ3N5QPePDGOYYenrhHjgSr1mq9ZWwbl8rOFj+z+Pt5CrtCti3fZGvpmi77KZ7vJHeDqnD8QyPjqPKbsB2W2pqoFtVqp6GCVFmkkjmkmMSMAyqSW3d8gg4GQoIJOSF0eR3GrpoK2x3aoE9ZSu0cdVu7vtKo2CSOjgYJ8c58dEPZbUQ0gr7PuqpRzVU+BjMTt7y/5Xz8HXSNre3KPT6qpOtX4zj+H/n6jh2f9leyvZrRiGw2yKKoYYlrJPfnl9XPEDyGB5aLwNZr3ShksbbAVoO9sch/5Yb1OD9+nJ90f5eKH0U9dewVAslZ7HNkU0zZhfopP3T/r+esvFvmq44qiikSG4UrGSnkf7JOOKPj7jDgfDgRxA1rR1tHtfbJoZI3p6iJu6qKd8d7Sygcj+hBHBgQRwOmISXTBTxlPpj4rBgCCCD1GsODz0F011rLWJaWvlMSQqzGpLYjKjmWJ4DQFevpGdnVmmeFtoHrZUJyKOF5Bn944U/PVzqS7YvJtPCWT/9k=", /* มะลิเมร์ */
  SM02: "data:image/jpeg;base64,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", /* ป๊อปไซเกิ้ลด์ */
  SM03: "data:image/jpeg;base64,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", /* สตอลลี่ */
  N957: "data:image/jpeg;base64,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", /* ควีนแองเจิ้ล */
  N967: "data:image/jpeg;base64,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", /* ฟูลเฮ้าส์ */
};
const photoOf = (x) => (x ? PHOTOS[x.reg] || PHOTOS[x.th] || null : null);
const Avatar = ({ name, sex, size = 48, tone, photo }) => {
  if (photo) {
    return <img src={photo} alt={String(name || "")} style={{
      width: size, height: size, minWidth: size, borderRadius: "50%", objectFit: "cover",
      border: "3px solid #fff", boxShadow: "0 4px 12px rgba(108,93,211,0.28)", display: "block",
    }} />;
  }
  const [main, soft2] = tone || TYPE_COLOR[sex] || ["#A9A9C0", "#E5E4F0"];
  const ear = {
    position: "absolute", width: size * 0.26, height: size * 0.32, background: main,
    borderRadius: "60% 60% 20% 20%", border: "2.5px solid #fff", zIndex: 1,
  };
  return (
    <div style={{ position: "relative", width: size, height: size + size * 0.18, minWidth: size }}>
      {/* ears */}
      <div style={{ ...ear, top: 0, left: size * 0.06, transform: "rotate(-18deg)" }} />
      <div style={{ ...ear, top: 0, right: size * 0.06, transform: "rotate(18deg)" }} />
      {/* face */}
      <div style={{
        position: "absolute", bottom: 0, width: size, height: size, borderRadius: "50%",
        background: `linear-gradient(140deg, ${soft2}, ${main})`, zIndex: 2,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#fff", fontFamily: "'Prompt',sans-serif", fontWeight: 700, fontSize: size * 0.4,
        border: "3px solid #fff", boxShadow: "0 4px 12px rgba(108,93,211,0.28)",
        textShadow: "0 1px 3px rgba(0,0,0,0.18)",
      }}>{String(name || "?").trim()[0]}</div>
    </div>
  );
};

const Cloth = ({ n, size = 34 }) => {
  const [bg, fg] = CLOTH[n] || [T.soft, T.muted];
  return (
    <div style={{
      width: size, height: size, minWidth: size, background: bg, color: fg,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, fontSize: size * 0.45,
      borderRadius: 9, border: "2px solid #fff", boxShadow: "0 2px 6px rgba(51,51,92,0.15)",
      transform: "skewX(-6deg)",
    }}><span style={{ transform: "skewX(6deg)" }}>{n ?? "–"}</span></div>
  );
};

const PlacePill = ({ p }) => {
  let bg = "#F4F2FB", fg = T.muted, bd = T.line;
  if (p === 1) { bg = T.gold; fg = "#5C4A12"; bd = T.gold; }
  else if (p === 2 || p === 3) { bg = "#E2F6EE"; fg = "#1E8A65"; bd = "#BDE8D7"; }
  else if (p === "scratching") { bg = "#FDEDED"; fg = "#D06262"; bd = "#F6D2D2"; }
  return (
    <span style={{
      padding: "3px 10px", borderRadius: 8, fontSize: 12.5, fontWeight: 700,
      background: bg, color: fg, border: `1.5px solid ${bd}`, whiteSpace: "nowrap",
      fontFamily: "'Prompt',sans-serif", display: "inline-block", transform: "skewX(-6deg)",
    }}><span style={{ display: "inline-block", transform: "skewX(6deg)" }}>{placeLabel(p)}</span></span>
  );
};

/* past-5-runs form string → chips */
const FormChips = ({ form }) => {
  if (!form) return null;
  const runs = String(form).replace(/\(\d+\)/g, " ").trim().split(/[-\s]+/).filter(Boolean);
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {runs.slice(-5).map((r, i) => {
        const n = parseInt(r);
        const win = n === 1, pod = n === 2 || n === 3;
        return (
          <span key={i} title={`ผลครั้งก่อน: ${r}`} style={{
            width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 11, fontFamily: "'IBM Plex Mono',monospace", fontWeight: 600, borderRadius: 6,
            background: win ? T.gold : pod ? "#E2F6EE" : "#F4F2FB",
            color: win ? "#5C4A12" : pod ? "#1E8A65" : T.muted,
            border: `1.5px solid ${win ? T.gold : pod ? "#BDE8D7" : T.line}`,
          }}>{r}</span>
        );
      })}
    </div>
  );
};

const Bar = ({ label, p, color }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <span style={{ width: 64, fontSize: 12.5, color: T.muted, whiteSpace: "nowrap", fontWeight: 600 }}>{label}</span>
    <div style={{ flex: 1, height: 10, background: "#ECE8F8", borderRadius: 99, overflow: "hidden" }}>
      <div style={{ width: `${p}%`, height: "100%", background: `linear-gradient(90deg, ${color}, ${color}CC)`, borderRadius: 99 }} />
    </div>
    <span style={{ width: 44, textAlign: "right", fontFamily: "'IBM Plex Mono',monospace", fontWeight: 600, fontSize: 12.5, color: T.ink }}>{p}%</span>
  </div>
);

const Stat = ({ label, value, accent }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
    <span style={{ fontSize: 11.5, letterSpacing: "0.06em", color: T.muted, fontWeight: 600 }}>{label}</span>
    <span style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Prompt',sans-serif", color: accent ? T.deep : T.ink }}>{value}</span>
  </div>
);

const SectionTitle = ({ children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
    <span style={{ width: 5, height: 18, background: `linear-gradient(180deg, ${T.sky}, ${T.primary})`, borderRadius: 3, transform: "skewX(-10deg)" }} />
    <span style={{ fontFamily: "'Prompt',sans-serif", fontWeight: 700, fontSize: 14.5, color: T.deep }}>{children}</span>
  </div>
);

/* ---------- main ---------- */
export default function App() {
  const [q, setQ] = useState("");
  const [tab, setTab] = useState("students");
  const [cls, setCls] = useState("all");
  const [dist, setDist] = useState("all");
  const [sel, setSel] = useState(null);
  const [searchOpen, setSearchOpen] = useState(true);
  const [openRace, setOpenRace] = useState(null);

  const races = DB.races;
  const registry = DB.registry;

  /* aggregate characters from race rows */
  const students = useMemo(() => {
    const map = new Map();
    races.forEach((r) => {
      const key = r.reg || r.th || r.name;
      if (!key) return;
      if (!map.has(key)) map.set(key, { ...r, runs: [] });
      const h = map.get(key);
      ["name", "th", "sire", "dam", "color", "country", "sex", "bday", "trainer", "stable", "silk"].forEach((k) => { if (r[k] && !h[k]) h[k] = r[k]; });
      h.runs.push(r);
    });
    return [...map.values()].map((h) => {
      const placed = h.runs.filter((r) => typeof r.place === "number");
      const wins = placed.filter((r) => r.place === 1).length;
      const podium = placed.filter((r) => r.place <= 3).length;
      const times = h.runs.map((r) => r.time).filter((t) => typeof t === "string" && t.includes("/"));
      const best = times.sort()[0];
      const style = analyzeStyle(h.runs);
      /* speed */
      const speeds = h.runs.map(speedOf).filter((v) => v != null);
      const topSpeed = speeds.length ? Math.max(...speeds) : null;
      const avgSpeed = speeds.length ? speeds.reduce((a, b) => a + b, 0) / speeds.length : null;
      let topRun = null;
      h.runs.forEach((r) => { const v = speedOf(r); if (v != null && (!topRun || v > topRun.v)) topRun = { v, r }; });
      /* favourite distance — best avg finishing position */
      const byDist = {};
      placed.forEach((r) => { if (r.dist) { if (!byDist[r.dist]) byDist[r.dist] = []; byDist[r.dist].push(r.place); } });
      let favDist = null;
      Object.entries(byDist).forEach(([d, ps]) => {
        const avg = ps.reduce((a, b) => a + b, 0) / ps.length;
        if (!favDist || avg < favDist.avg) favDist = { d: Number(d), avg, n: ps.length };
      });
      /* favourite partner */
      const byJ = {};
      h.runs.forEach((r) => {
        if (!r.jockey) return;
        if (!byJ[r.jockey]) byJ[r.jockey] = { rides: 0, wins: 0, podium: 0 };
        const j = byJ[r.jockey];
        j.rides++;
        if (r.place === 1) j.wins++;
        if (typeof r.place === "number" && r.place <= 3) j.podium++;
      });
      let partner = null;
      Object.entries(byJ).forEach(([nm, s]) => {
        if (!partner || s.wins > partner.wins || (s.wins === partner.wins && s.podium > partner.podium) ||
          (s.wins === partner.wins && s.podium === partner.podium && s.rides > partner.rides)) partner = { name: nm, ...s };
      });
      /* longest win streak */
      let streak = 0, cur = 0;
      [...h.runs].sort((a, b) => (a.date || "").localeCompare(b.date || "")).forEach((r) => {
        if (r.place === 1) { cur++; if (cur > streak) streak = cur; }
        else if (typeof r.place === "number") cur = 0;
      });
      return { ...h, wins, podium, starts: h.runs.length, finished: placed.length, best, style,
        topSpeed, avgSpeed, topRun, favDist, partner, streak,
        winP: pct(wins, placed.length), podiumP: pct(podium, placed.length) };
    }).sort((a, b) => b.wins - a.wins || b.podium - a.podium || (a.th || "").localeCompare(b.th || "", "th"));
  }, [races]);

  const classes = useMemo(() => [...new Set(races.map((r) => r.cls).filter(Boolean))], [races]);
  const dists = useMemo(() => [...new Set(races.map((r) => r.dist).filter(Boolean))].sort((a, b) => a - b), [races]);

  const ql = q.trim().toLowerCase();
  const match = (obj, fields) => !ql || fields.some((f) => obj[f] && String(obj[f]).toLowerCase().includes(ql));

  const fStudents = students.filter((h) =>
    match(h, ["name", "th", "reg", "jockey", "trainer", "stable", "sire", "dam"]) &&
    (cls === "all" || h.runs.some((r) => r.cls && (cls === "Thoroughbred" ? r.cls.startsWith("Thoroughbred") : r.cls.startsWith(cls)))) &&
    (dist === "all" || h.runs.some((r) => r.dist === Number(dist)))
  );
  const fRaces = races.filter((r) =>
    match(r, ["name", "th", "reg", "jockey", "trainer", "stable", "program", "sire", "dam"]) &&
    (cls === "all" || (r.cls && (cls === "Thoroughbred" ? r.cls.startsWith("Thoroughbred") : r.cls.startsWith(cls)))) && (dist === "all" || r.dist === Number(dist))
  );

  const grouped = useMemo(() => {
    const g = new Map();
    fRaces.forEach((r) => {
      const k = `${r.date}__${r.race}__${r.program || ""}`;
      if (!g.has(k)) g.set(k, { date: r.date, race: r.race, program: r.program, cls: r.cls, dist: r.dist, post: r.post, rows: [] });
      g.get(k).rows.push(r);
    });
    return [...g.values()].sort((a, b) => (b.date || "").localeCompare(a.date || "") || (a.race || 0) - (b.race || 0))
      .map((g2) => ({ ...g2, rows: g2.rows.sort((a, b) => (typeof a.place === "number" ? a.place : 99) - (typeof b.place === "number" ? b.place : 99)) }));
  }, [fRaces]);

  /* overall highlight stats */
  const hall = useMemo(() => {
    const byMax = (arr, fn) => arr.reduce((b, h) => (fn(h) != null && (b == null || fn(h) > fn(b)) ? h : b), null);
    const fastest = byMax(students, (h) => h.topSpeed);
    const barCount = (h, n) => (h.runs || []).filter((r) => r.bar === n).length;
    const bar7 = byMax(students, (h) => (barCount(h, 7) > 0 ? barCount(h, 7) : null));
    const bar13 = byMax(students, (h) => (barCount(h, 13) > 0 ? barCount(h, 13) : null));
    const injCount = (h) => (h.runs || []).filter((r) => r.injury === "yes").length;
    const mostInj = byMax(students, (h) => (injCount(h) > 0 ? injCount(h) : null));
    return [
      fastest && { icon: "⚡", title: "วิ่งเร็วที่สุด", h: fastest, value: kmh(fastest.topSpeed) },
      bar7 && { icon: "7️⃣", title: "ได้ซองเลข 7 มากที่สุด", h: bar7, value: `${barCount(bar7, 7)} ครั้ง` },
      bar13 && { icon: "🍀", title: "ได้ซองเลข 13 มากที่สุด", h: bar13, value: `${barCount(bar13, 13)} ครั้ง` },
      mostInj && { icon: "🩹", title: "เจ็บบ่อยสุด", h: mostInj, value: `${injCount(mostInj)} ครั้ง` },
    ].filter(Boolean);
  }, [students]);

  const inputStyle = {
    background: "#FFFFFF", border: `2px solid ${T.line}`, color: T.ink,
    borderRadius: 12, padding: "10px 14px", fontSize: 14.5, fontFamily: "'Sarabun',sans-serif", outline: "none",
  };

  return (
    <div style={{ minHeight: "100vh", background: T.bg, color: T.ink, fontFamily: "'Sarabun',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700;800&family=Sarabun:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;600;700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        ::selection { background: ${T.primary}; color: #fff; }
        input::placeholder { color: ${T.muted}; }
        input:focus, select:focus { border-color: ${T.primary} !important; box-shadow: 0 0 0 3px rgba(138,124,224,0.18); }
        button { cursor: pointer; }
        .card { transition: transform .16s ease, box-shadow .16s ease; }
        .card:hover { transform: translateY(-3px); box-shadow: 0 12px 26px rgba(108,93,211,0.18) !important; }
        @media (prefers-reduced-motion: reduce) { .card { transition: none; } }
        ::-webkit-scrollbar { width: 10px; height: 10px; }
        ::-webkit-scrollbar-thumb { background: #D5CEF0; border-radius: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        tr.rowhover:hover td { background: #F7F4FE; }
      `}</style>

      {/* header */}
      <header style={{ background: "#FFFFFF", borderBottom: `1px solid ${T.line}`, position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          background: `repeating-linear-gradient(-55deg, rgba(138,124,224,0.06) 0 16px, transparent 16px 36px)`,
        }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: `linear-gradient(90deg, ${T.sky}, ${T.primary}, ${T.pink})` }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "12px 14px 10px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <img src={LOGO} alt="RBSMC" style={{ width: 46, height: 46, objectFit: "contain", display: "block" }} />
            <h1 style={{ margin: 0, fontFamily: "'Prompt',sans-serif", fontWeight: 800, fontSize: 24, letterSpacing: "0.01em", color: T.ink }}>
              RBS<span style={{ color: T.deep }}>MC</span>
            </h1>
          </div>
        </div>
      </header>

      {/* menu dropdown + collapsible search */}
      <div style={{ position: "sticky", top: 0, zIndex: 5, background: "rgba(241,238,250,0.92)", backdropFilter: "blur(10px)", borderBottom: `1px solid ${T.line}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 14px", display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <select value={tab} onChange={(e) => setTab(e.target.value)} style={{
            border: "none", borderRadius: 10, padding: "10px 14px", cursor: "pointer",
            background: `linear-gradient(135deg, ${T.sky}, ${T.deep})`, color: "#fff",
            fontSize: 14, fontWeight: 700, fontFamily: "'Prompt',sans-serif", outline: "none",
            boxShadow: "0 6px 14px rgba(108,93,211,0.3)",
          }}>
            <option style={{ color: T.ink, background: "#fff" }} value="students">🎓 นักเรียน ({fStudents.length})</option>
            <option style={{ color: T.ink, background: "#fff" }} value="races">📋 ผลการแข่ง ({grouped.length})</option>
            <option style={{ color: T.ink, background: "#fff" }} value="stats">📊 สถิติภาพรวม</option>
            <option style={{ color: T.ink, background: "#fff" }} value="sim">🏁 Simulation Race</option>
          </select>
          <button onClick={() => setSearchOpen((o) => !o)} style={{
            border: "none", borderRadius: 10, padding: "10px 14px", cursor: "pointer",
            background: "#fff", color: searchOpen ? T.deep : T.muted, fontSize: 13, fontWeight: 700,
            fontFamily: "'Prompt',sans-serif", boxShadow: `inset 0 0 0 2px ${searchOpen ? T.deep : T.line}`,
          }}>🔍</button>
          {!searchOpen && q && <span style={{ fontSize: 12, color: T.muted }}>กำลังกรอง: "{q}"</span>}
        </div>
        {searchOpen && (
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 14px 10px", display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <input
              value={q} onChange={(e) => setQ(e.target.value)}
              placeholder="ค้นหา… ชื่อนักเรียน (ไทย/อังกฤษ) · รหัส · จ๊อกกี้ · เทรนเนอร์ · สเตเบิ้ลเฮาส์"
              style={{ ...inputStyle, flex: "1 1 320px" }}
            />
            <select value={cls} onChange={(e) => setCls(e.target.value)} style={{ ...inputStyle, padding: "10px 12px" }}>
              <option value="all">Class</option>
              <option value="Country-Bred">Country-Bred</option>
              <option value="Thoroughbred">Thoroughbred</option>
              <option value="New Thoroughbred">New Thoroughbred</option>
            </select>
            <select value={dist} onChange={(e) => setDist(e.target.value)} style={{ ...inputStyle, padding: "10px 12px" }}>
              <option value="all">Range</option>
              {dists.map((d) => <option key={d} value={d}>{d.toLocaleString()} ม.</option>)}
            </select>
          </div>
        )}
      </div>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 12px 36px" }}>

        {/* ---- students tab ---- */}
        {tab === "students" && (
          <>
            {fStudents.length === 0 ? <Empty q={q} /> :
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(162px, 1fr))", gap: 12 }}>
            {fStudents.map((h) => (
              <button key={h.reg || h.th} className="card" onClick={() => setSel(h)} style={{
                textAlign: "center", background: T.card, border: "none", borderRadius: 18,
                padding: 0, color: T.ink, fontFamily: "'Sarabun',sans-serif", overflow: "hidden",
                display: "flex", flexDirection: "column", boxShadow: T.shadow,
              }}>
                {/* แถบหัวบัตรนักเรียน */}
                <div style={{
                  background: `linear-gradient(90deg, ${T.sky}, ${T.deep}, ${T.pink})`,
                  padding: "5px 10px", display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontWeight: 700, fontSize: 8.5, color: "#fff", letterSpacing: "0.12em" }}>RBSMC · STUDENT ID</span>
                  {h.wins > 0 && <span style={{ background: "#fff", color: T.deep, fontWeight: 800, fontSize: 9, borderRadius: 6, padding: "1px 6px", fontFamily: "'Prompt',sans-serif" }}>🏆 {h.wins}</span>}
                </div>
                {/* รูปโปรไฟล์ (เผื่อพื้นที่สำหรับรูปจริง 1:1 ในอนาคต) */}
                <div style={{ padding: "14px 10px 6px", display: "flex", justifyContent: "center" }}>
                  <Avatar name={h.th || h.name} sex={h.sex} photo={photoOf(h)} size={64} />
                </div>
                <div style={{ padding: "0 12px" }}>
                  <div style={{ fontFamily: "'Prompt',sans-serif", fontWeight: 800, fontSize: 15.5, lineHeight: 1.2 }}>{h.th || h.name}</div>
                  <div style={{ color: T.muted, fontSize: 11 }}>{h.name || "—"}</div>
                  <div style={{ fontSize: 10.5, marginTop: 2 }}>
                    {h.reg && <span style={{ fontFamily: "'IBM Plex Mono',monospace", color: T.deep, fontWeight: 700 }}>{h.reg}</span>}
                    {h.sex && <span style={{ color: T.muted, marginLeft: 6 }}>{TYPE_LABEL[h.sex] || h.sex}</span>}
                    {h.bday && <span style={{ color: T.muted, marginLeft: 6 }}>{yearLevel(h.bday)}</span>}
                  </div>
                </div>
                {/* สถิติย่อ */}
                <div style={{ display: "flex", justifyContent: "center", gap: 10, fontSize: 10.5, color: T.muted, margin: "8px 0 6px", flexWrap: "wrap", padding: "0 8px" }}>
                  <span>สนาม <b style={{ color: T.ink }}>{h.starts}</b></span>
                  <span>ชนะ <b style={{ color: "#D9A116" }}>{h.winP}%</b></span>
                  <span>เพลส <b style={{ color: "#1E8A65" }}>{h.podiumP}%</b></span>
                  {h.topSpeed && <span style={{ fontFamily: "'IBM Plex Mono',monospace" }}><b style={{ color: T.ink }}>{kmh(h.topSpeed)}</b></span>}
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, marginBottom: 8 }}>
                  <FormChips form={h.runs[h.runs.length - 1]?.form} />
                  {h.style && <span style={{
                    fontSize: 9.5, fontWeight: 700, fontFamily: "'Prompt',sans-serif",
                    color: "#fff", background: STYLE_INFO[h.style.main].color,
                    borderRadius: 7, padding: "2px 8px", whiteSpace: "nowrap",
                  }}>สาย{h.style.main}</span>}
                </div>
                {/* ไบโอโมเอะ */}
                <div style={{
                  marginTop: "auto", background: T.soft, padding: "8px 12px 10px",
                  fontSize: 10.5, lineHeight: 1.55, color: T.ink, fontStyle: "italic",
                }}>{moeBio(h)}</div>
              </button>
            ))}
            </div>}
          </>
        )}

        {/* ---- races tab : การ์ดสรุป กดเพื่อดูผลเต็ม ---- */}
        {tab === "races" && (
          grouped.length === 0 ? <Empty q={q} /> :
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {grouped.map((g, gi) => {
              const gkey = `${g.date}__${g.race}__${g.program || ""}`;
              const open = openRace === gkey;
              return (
                <section key={gkey} style={{ background: T.card, borderRadius: 16, overflow: "hidden", boxShadow: T.shadow }}>
                  {/* การ์ดสรุปรายการ */}
                  <button onClick={() => setOpenRace(open ? null : gkey)} style={{
                    width: "100%", textAlign: "left", border: "none", cursor: "pointer",
                    padding: "12px 14px", fontFamily: "'Sarabun',sans-serif",
                    background: open
                      ? `linear-gradient(90deg, rgba(69,200,241,0.16), rgba(138,124,224,0.14) 55%, transparent)`
                      : `linear-gradient(90deg, rgba(69,200,241,0.08), rgba(138,124,224,0.06) 55%, transparent)`,
                  }}>
                    <div style={{ fontFamily: "'Prompt',sans-serif", fontWeight: 700, fontSize: 15, color: T.ink }}>
                      {g.program || "ไม่ระบุรายการ"}
                      <span style={{ float: "right", color: T.deep, fontSize: 13 }}>{open ? "▲" : "▼"}</span>
                    </div>
                    <div style={{ fontSize: 12, color: T.muted, marginTop: 3 }}>
                      <span style={{ fontFamily: "'IBM Plex Mono',monospace", color: T.deep, fontWeight: 700 }}>{thDate(g.date)}{g.post ? ` · ${g.post}` : ""}</span>
                      {g.race != null && <span> · Race {g.race}</span>}
                      {g.cls && <span> · {g.cls}</span>}
                      {g.dist && <span> · {g.dist.toLocaleString()} ม.</span>}
                    </div>
                  </button>
                  {/* ผลการแข่งเต็ม (เมื่อกดเปิด) */}
                  {open && (
                    <div style={{ overflowX: "auto", borderTop: `1px solid ${T.line}` }}>
                      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 420 }}>
                        <thead>
                          <tr style={{ color: T.muted, fontSize: 11, textAlign: "left" }}>
                            {["อันดับ", "เบอร์", "นักเรียน", "เวลา", "ความเร็ว"].map((h) => (
                              <th key={h} style={{ padding: "8px 12px", fontWeight: 700, letterSpacing: "0.05em", borderBottom: `1px solid ${T.line}`, background: T.soft }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {g.rows.map((r, ri) => (
                            <tr key={ri} className="rowhover" style={{ borderBottom: ri < g.rows.length - 1 ? `1px solid #F2EFFA` : "none", background: r.place === 1 ? "#FFF9E6" : "transparent" }}>
                              <td style={{ padding: "8px 12px" }}><PlacePill p={r.place} /></td>
                              <td style={{ padding: "8px 12px" }}><Cloth n={r.no} size={24} /></td>
                              <td style={{ padding: "8px 12px" }}>
                                <button onClick={() => { const h = students.find((x) => (x.reg || x.th) === (r.reg || r.th)); if (h) setSel(h); }}
                                  style={{ background: "none", border: "none", color: T.ink, fontFamily: "'Sarabun',sans-serif", fontSize: 13, padding: 0, cursor: "pointer", textDecoration: "underline", textDecorationColor: "rgba(138,124,224,0.45)", textUnderlineOffset: 3, textAlign: "left" }}>
                                  <b>{r.th || r.name}</b>
                                </button>
                                <div style={{ fontSize: 11, color: T.muted }}>{r.name}</div>
                              </td>
                              <td style={{ padding: "8px 12px", fontFamily: "'IBM Plex Mono',monospace", fontSize: 12, fontWeight: r.place === 1 ? 700 : 400, color: r.place === 1 ? "#D9A116" : T.ink }}>{typeof r.time === "string" ? r.time : "—"}</td>
                              <td style={{ padding: "8px 12px", fontFamily: "'IBM Plex Mono',monospace", fontSize: 12, color: T.deep, fontWeight: 600 }}>{kmh(speedOf(r)) || "—"}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        )}

        {/* ---- overall stats tab ---- */}
        {tab === "stats" && (
          hall.length === 0 ? <Empty q={q} /> :
          <section>
            <SectionTitle>สถิติภาพรวม</SectionTitle>
            <div style={{ fontSize: 12.5, color: T.muted, marginBottom: 12 }}>คำนวณจากผลการแข่งทั้งหมดในฐานข้อมูล · แตะการ์ดเพื่อเปิดโปรไฟล์นักเรียน</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 12 }}>
              {hall.map((it, i) => (
                <button key={i} className="card" onClick={() => setSel(it.h)} style={{
                  textAlign: "left", background: T.card, border: "none", borderRadius: 16,
                  padding: "14px 16px", boxShadow: T.shadow, display: "flex", alignItems: "center", gap: 12,
                  fontFamily: "'Sarabun',sans-serif", color: T.ink,
                }}>
                  <span style={{ fontSize: 26 }}>{it.icon}</span>
                  <Avatar name={it.h.th || it.h.name} sex={it.h.sex} photo={photoOf(it.h)} size={40} />
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 11.5, color: T.muted, fontWeight: 700 }}>{it.title}</div>
                    <div style={{ fontFamily: "'Prompt',sans-serif", fontWeight: 700, fontSize: 15, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{it.h.th || it.h.name}</div>
                    <div style={{ fontSize: 13, color: T.deep, fontWeight: 700, fontFamily: "'IBM Plex Mono',monospace" }}>{it.value}</div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* ---- race simulator tab ---- */}
        {tab === "sim" && <Simulator students={students} openProfile={setSel} />}

        <div style={{ textAlign: "center", fontSize: 11.5, color: T.muted, marginTop: 28 }}>
          แอปพลิเคชันนี้สร้างขึ้นเพื่อความบันเทิง ตัวละคร พฤติกรรม สถานที่ และเหตุการณ์ เป็นสิ่งสมมติ มิได้พาดพิงถึงองค์กร วิชาชีพ หรือกลุ่มบุคคลใด ๆ
        </div>
      </main>

      {/* ---- student profile modal ---- */}
      {sel && (
        <div onClick={() => setSel(null)} style={{
          position: "fixed", inset: 0, background: "rgba(51,51,92,0.45)", backdropFilter: "blur(5px)",
          display: "flex", alignItems: "center", justifyContent: "center", zIndex: 20, padding: 16,
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            background: T.card, borderRadius: 22, maxWidth: 720, width: "100%",
            maxHeight: "88vh", overflowY: "auto", boxShadow: "0 24px 60px rgba(51,51,92,0.35)",
          }}>
            <div style={{
              padding: "22px 24px 18px", borderBottom: `1px solid ${T.line}`, position: "sticky", top: 0,
              background: `linear-gradient(120deg, #FFFFFF 40%, rgba(69,200,241,0.10), rgba(138,124,224,0.14))`,
              display: "flex", gap: 14, alignItems: "center", zIndex: 2, borderRadius: "22px 22px 0 0",
            }}>
              <Avatar name={sel.th || sel.name} sex={sel.sex} photo={photoOf(sel)} size={56} />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Prompt',sans-serif", fontWeight: 800, fontSize: 22 }}>{sel.th || sel.name}</div>
                <div style={{ color: T.muted, fontSize: 13.5 }}>{sel.name}
                  {sel.reg && <span style={{ fontFamily: "'IBM Plex Mono',monospace", marginLeft: 10, color: T.deep, fontWeight: 700 }}>{sel.reg}</span>}
                  {sel.sex && <span style={{ marginLeft: 10 }}>{TYPE_LABEL[sel.sex] || sel.sex}</span>}
                  {sel.bday && <span style={{ marginLeft: 10 }}>{yearLevel(sel.bday)}</span>}
                </div>
              </div>
              <button onClick={() => setSel(null)} aria-label="ปิด" style={{
                background: "#fff", border: `2px solid ${T.line}`, color: T.muted, borderRadius: 10,
                width: 34, height: 34, fontSize: 16, lineHeight: 1, fontWeight: 700,
              }}>✕</button>
            </div>

            <div style={{ padding: "18px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 14, borderBottom: `1px solid ${T.line}` }}>
              {[
                ["Type", sel.sex ? TYPE_LABEL[sel.sex] || sel.sex : null],
                ["สเตเบิ้ลเฮาส์", sel.stable], ["เทรนเนอร์", sel.trainer],
                ["คุณพ่อ", sel.sire], ["คุณแม่", sel.dam],
                ["สีผม", COAT[sel.color] || sel.color], ["บ้านเกิด", HOME[sel.country] || (sel.country || "").toUpperCase() || null],
                ["วันเกิด", sel.bday ? thDate(sel.bday) : null], ["อายุ", sel.bday ? ageYMD(sel.bday) : null],
              ].filter(([, v]) => v).map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontSize: 11.5, color: T.muted, letterSpacing: "0.05em", fontWeight: 600 }}>{k}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, marginTop: 2 }}>{v}</div>
                </div>
              ))}
              {sel.silk && (
                <div style={{ gridColumn: "1 / -1" }}>
                  <div style={{ fontSize: 11.5, color: T.muted, letterSpacing: "0.05em", fontWeight: 600 }}>ชุดประจำทีม</div>
                  <div style={{ fontSize: 13.5, marginTop: 2 }}>{sel.silk}</div>
                </div>
              )}
            </div>

            <div style={{ padding: "16px 24px", borderBottom: `1px solid ${T.line}` }}>
              <SectionTitle>สถิติผลงาน</SectionTitle>
              <div style={{ display: "flex", gap: 28, flexWrap: "wrap", marginBottom: 14 }}>
                <Stat label="ลงสนาม" value={sel.starts} />
                <Stat label="ชนะ" value={`${sel.wins} (${sel.winP}%)`} accent />
                <Stat label="เพลส" value={`${sel.podium} (${sel.podiumP}%)`} />
                {sel.topSpeed && <Stat label="ความเร็วสูงสุด" value={kmh(sel.topSpeed)} accent />}
                {sel.avgSpeed && <Stat label="ความเร็วเฉลี่ย" value={kmh(sel.avgSpeed)} />}
                {sel.best && <Stat label="เวลาดีสุด" value={sel.best} />}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Bar label="ชนะ" p={sel.winP} color={T.gold} />
                <Bar label="เพลส" p={sel.podiumP} color={T.mint} />
                <Bar label="จบใน 5" p={pct(sel.runs.filter((r) => typeof r.place === "number" && r.place <= 5).length, sel.finished)} color={T.sky} />
              </div>
            </div>

            {(sel.topRun || sel.favDist || sel.partner || sel.streak >= 2) && (
              <div style={{ padding: "16px 24px", borderBottom: `1px solid ${T.line}` }}>
                <SectionTitle>สถิติที่น่าสนใจ</SectionTitle>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 8 }}>
                  {sel.topRun && (
                    <div style={{ background: T.soft, borderRadius: 14, padding: "11px 13px" }}>
                      <div style={{ fontSize: 11.5, color: T.muted, fontWeight: 700 }}>⚡ สถิติความเร็วสูงสุด</div>
                      <div style={{ fontFamily: "'Prompt',sans-serif", fontWeight: 700, fontSize: 15, color: T.deep }}>{kmh(sel.topRun.v)}</div>
                      <div style={{ fontSize: 12, color: T.muted }}>{sel.topRun.r.program || ""} · {sel.topRun.r.dist ? `${sel.topRun.r.dist.toLocaleString()} ม.` : ""} · {thDate(sel.topRun.r.date)}</div>
                    </div>
                  )}
                  {sel.favDist && (
                    <div style={{ background: T.soft, borderRadius: 14, padding: "11px 13px" }}>
                      <div style={{ fontSize: 11.5, color: T.muted, fontWeight: 700 }}>📏 ระยะที่ถนัด</div>
                      <div style={{ fontFamily: "'Prompt',sans-serif", fontWeight: 700, fontSize: 15, color: T.deep }}>{sel.favDist.d.toLocaleString()} ม.</div>
                      <div style={{ fontSize: 12, color: T.muted }}>อันดับเฉลี่ย {(Math.round(sel.favDist.avg * 10) / 10).toFixed(1)} จาก {sel.favDist.n} สนาม</div>
                    </div>
                  )}
                  {sel.partner && (
                    <div style={{ background: T.soft, borderRadius: 14, padding: "11px 13px" }}>
                      <div style={{ fontSize: 11.5, color: T.muted, fontWeight: 700 }}>🤝 จ๊อกกี้คู่บุญ</div>
                      <div style={{ fontFamily: "'Prompt',sans-serif", fontWeight: 700, fontSize: 15, color: T.deep }}>{sel.partner.name}</div>
                      <div style={{ fontSize: 12, color: T.muted }}>ชนะ {sel.partner.wins} · เพลส {sel.partner.podium} จาก {sel.partner.rides} ครั้งที่ขี่ให้</div>
                    </div>
                  )}
                  {sel.streak >= 2 && (
                    <div style={{ background: T.soft, borderRadius: 14, padding: "11px 13px" }}>
                      <div style={{ fontSize: 11.5, color: T.muted, fontWeight: 700 }}>🔥 ชนะติดต่อกันสูงสุด</div>
                      <div style={{ fontFamily: "'Prompt',sans-serif", fontWeight: 700, fontSize: 15, color: T.deep }}>{sel.streak} ครั้งซ้อน</div>
                      <div style={{ fontSize: 12, color: T.muted }}>นับจากผลที่บันทึกในฐานข้อมูล</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {sel.style && (
              <div style={{ padding: "16px 24px", borderBottom: `1px solid ${T.line}` }}>
                <SectionTitle>วิเคราะห์สไตล์การวิ่ง</SectionTitle>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                  <span style={{
                    fontFamily: "'Prompt',sans-serif", fontWeight: 800, fontSize: 16, color: "#fff",
                    background: STYLE_INFO[sel.style.main].color, borderRadius: 9, padding: "4px 14px",
                    transform: "skewX(-8deg)", display: "inline-block",
                  }}><span style={{ display: "inline-block", transform: "skewX(8deg)" }}>สาย{sel.style.main}</span></span>
                  <span style={{ fontSize: 12, color: T.muted }}>จากตำแหน่งสตาร์ท–โค้ง 3–ช่วงสปรินต์ ใน {sel.style.n} การแข่ง</span>
                </div>
                <div style={{ fontSize: 13.5, marginBottom: 12 }}>{STYLE_INFO[sel.style.main].desc}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
                  {sel.style.dist.map((s) => <Bar key={s.k} label={s.k} p={s.p} color={STYLE_INFO[s.k].color} />)}
                </div>
                <div style={{ display: "flex", gap: 20, fontSize: 12.5, color: T.muted, flexWrap: "wrap" }}>
                  <span>ขึ้นนำตั้งแต่ออกสตาร์ท <b style={{ color: T.ink }}>{sel.style.leadStartP}%</b></span>
                  <span>อยู่หัวแถวช่วงสปรินต์ <b style={{ color: T.ink }}>{sel.style.spurtTopP}%</b></span>
                </div>
              </div>
            )}

            {sel.bday && <BirthSection iso={sel.bday} />}

            <div style={{ padding: "16px 24px 24px" }}>
              <SectionTitle>ประวัติการแข่งขัน</SectionTitle>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[...sel.runs].sort((a, b) => (b.date || "").localeCompare(a.date || "")).map((r, i) => (
                  <div key={i} style={{ background: T.soft, borderRadius: 14, padding: "12px 14px", display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                    <PlacePill p={r.place} />
                    <div style={{ flex: 1, minWidth: 180 }}>
                      <div style={{ fontWeight: 700, fontSize: 13.5 }}>{r.program || "ไม่ระบุรายการ"}</div>
                      <div style={{ fontSize: 12, color: T.muted }}>{thDate(r.date)}{r.dist ? ` · ${r.dist.toLocaleString()} ม.` : ""}{r.cls ? ` · ${r.cls}` : ""}</div>
                    </div>
                    <div style={{ textAlign: "right", fontSize: 12, color: T.muted }}>
                      {r.jockey && <div>จ๊อกกี้ {r.jockey}</div>}
                      <div style={{ fontFamily: "'IBM Plex Mono',monospace" }}>
                        {typeof r.time === "string" ? r.time : ""}{speedOf(r) ? ` · ${kmh(speedOf(r))}` : ""}{r.weight ? ` · ${r.weight} กก.` : ""}{r.rating ? ` · เรต ${r.rating}` : ""}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

/* ---------- Simulation Race · oval grass track ---------- */
/* oval geometry (viewBox 1000x440) · วิ่งทวนเข็ม · เส้นชัยบนทางตรงล่าง (ล็อคตายตัว เยื้องซ้ายจากกึ่งกลาง) */
const HS = 300, RB = 170, CXa = 500, CYa = 220, ROUT = 192, RIN = 64;
const STRAIGHT = 2 * HS, CURVE = Math.PI * RB, C_LAP = 2 * STRAIGHT + 2 * CURVE; /* ~2268 ม. */
const SEG_A = STRAIGHT / 2, SEG_B = CURVE, SEG_C = STRAIGHT, SEG_D = CURVE;
const B_CURVE1 = SEG_A;                       /* เข้าโค้งขวาล่าง→บน */
const B_TOP = SEG_A + SEG_B;                  /* ขึ้นทางตรงหลัง */
const B_CURVE3 = SEG_A + SEG_B + SEG_C;       /* โค้งป้าย 3 (โค้งซ้ายบน) */
const B_HOME = SEG_A + SEG_B + SEG_C + SEG_D; /* เข้าทางตรงสุดท้าย */
const FIN_OFF = 0;                            /* เส้นชัยอยู่กึ่งกลางทางตรงล่างพอดี */
const FIN_S = C_LAP - FIN_OFF;
const FINX = CXa - FIN_OFF;
const LAP_M = 2000;                           /* สนาม 1 รอบ = 2,000 ม. — เกินกว่านี้คือวิ่งน็อครอบ */
const KU = C_LAP / LAP_M;                     /* หน่วยภาพต่อเมตร */
const mu = (m) => m * KU;
const HOME_M = SEG_A / KU;                    /* ทางตรงสุดท้าย: สุดโค้งซ้าย→เส้นชัย ~265 ม. */
const pointOf = (phi, r) => {
  let sp = ((phi % C_LAP) + C_LAP) % C_LAP;
  if (sp < SEG_A) return { x: CXa + sp, y: CYa + r };
  sp -= SEG_A;
  if (sp < SEG_B) { const a = sp / SEG_B, th = Math.PI / 2 - Math.PI * a; return { x: CXa + HS + r * Math.cos(th), y: CYa + r * Math.sin(th) }; }
  sp -= SEG_B;
  if (sp < SEG_C) return { x: CXa + HS - sp, y: CYa - r };
  sp -= SEG_C;
  if (sp < SEG_D) { const a = sp / SEG_D, th = -Math.PI / 2 - Math.PI * a; return { x: CXa - HS + r * Math.cos(th), y: CYa + r * Math.sin(th) }; }
  sp -= SEG_D;
  return { x: CXa - HS + sp, y: CYa + r };
};
const inCurve = (sAbs) => {
  const sp = ((sAbs % C_LAP) + C_LAP) % C_LAP;
  return (sp >= B_CURVE1 && sp < B_TOP) || (sp >= B_CURVE3 && sp < B_HOME);
};

const SIM_DISTS = [1100, 1200, 1300, 1560, 1900, 2000, 2400, 3000];
const WEATHER_OPTS = [
  { key: "random", label: "สุ่มสภาพอากาศ" },
  { key: "clear", label: "☀️ ฟ้าใส" },
  { key: "rain", label: "🌧 ฝนตก" },
];
const TIME_OPTS = [
  { key: "random", label: "สุ่มเวลาแข่ง", h: null },
  { key: "12.15", label: "12.15 น.", h: 12.25 }, { key: "13.40", label: "13.40 น.", h: 13.67 },
  { key: "14.35", label: "14.35 น.", h: 14.58 }, { key: "15.20", label: "15.20 น.", h: 15.33 },
  { key: "16.10", label: "16.10 น.", h: 16.17 }, { key: "17.05", label: "17.05 น.", h: 17.08 },
  { key: "18.00", label: "18.00 น.", h: 18.0 },
];
const COND_FACTOR = { good: 1.012, "good to soft": 1.0, soft: 0.985, heavy: 0.966 };
const COND_TH = { good: "สนามดี", "good to soft": "ค่อนข้างนุ่ม", soft: "สนามนุ่ม", heavy: "สนามแฉะ" };
const styleCurve = (style, p) => {
  /* normalized: ทุกสไตล์เฉลี่ย ~1.0 ตลอดเรซ — เปลี่ยนรูปแบบการวิ่ง ไม่เปลี่ยนเวลาที่คาดหวัง */
  if (style === "ฝีเท้าต้น") return (1.05 - 0.07 * p) / 1.015;
  if (style === "ไล่ตาม") return (0.99 + 0.04 * p) / 1.01;
  if (style === "ฝีเท้าปลาย") return (p < 0.6 ? 0.955 + 0.02 * p : 0.967 + 0.14 * (p - 0.6)) / 0.9746;
  return 1.0;
};
const fmtRaceTime = (t) => `${Math.floor(t / 60)}/${(t % 60).toFixed(2).padStart(5, "0")}`;
const OFF_MAX = ROUT - RIN - 34; /* ระยะแกว่งออกนอกสุดของไลน์วิ่ง */
const railR = (off) => RIN + 16 + off;

const Simulator = ({ students, openProfile }) => {
  const [phase, setPhase] = useState("setup"); // setup | countdown | running | done
  const [picked, setPicked] = useState([]);
  const [dist, setDist] = useState(1200);
  const [weather, setWeather] = useState("random");
  const [timeKey, setTimeKey] = useState("random");
  const [simSpeed, setSimSpeed] = useState(1);
  const [runners, setRunners] = useState([]);
  const [clock, setClock] = useState(0);
  const [env, setEnv] = useState(null); // { weather, cond, time, temp }
  const [count, setCount] = useState(3);
  const [log, setLog] = useState([]); // commentary log (ล่าสุดอยู่บน)
  const simRef = useRef(null);
  const speedRef = useRef(simSpeed);
  speedRef.current = simSpeed;
  const rafRef = useRef(null);

  const keyOf = (h) => h.reg || h.th;
  const nameOf = (r) => r.h.th || r.h.name;
  const toggle = (key) => setPicked((p) => p.includes(key) ? p.filter((k) => k !== key) : (p.length < 16 ? [...p, key] : p));
  const randomPick = () => {
    const pool = [...students];
    for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
    setPicked(pool.slice(0, 16).map(keyOf));
  };

  const pushMsg = (S, text) => {
    S.log = [{ t: S.t, text }, ...S.log].slice(0, 7);
    setLog(S.log);
  };

  const start = () => {
    /* environment: weather → field condition · time → temperature */
    const w = weather === "random" ? (Math.random() < 0.32 ? "rain" : "clear") : weather;
    const condPick = w === "rain"
      ? (Math.random() < 0.5 ? "soft" : "heavy")
      : (Math.random() < 0.5 ? "good" : "good to soft");
    const tPool = TIME_OPTS.filter((t) => t.h != null);
    const tPick = timeKey === "random" ? tPool[Math.floor(Math.random() * tPool.length)] : TIME_OPTS.find((t) => t.key === timeKey);
    const temp = w === "rain" ? "cool" : (tPick.h < 16 ? "hot" : "cool");
    setEnv({ weather: w, cond: condPick, time: tPick, temp });

    const list = students.filter((h) => picked.includes(keyOf(h)));
    /* เบอร์ = อันดับคะแนนความสามารถภาพรวม (เก่งสุด = เบอร์ 1) */
    const score = (h) => (h.topSpeed || h.avgSpeed || 54) * 1.5 + (h.winP || 0) * 0.6 + (h.podiumP || 0) * 0.3 + (h.wins || 0) * 2;
    const byScore = [...list].sort((a, b) => score(b) - score(a));
    const noOf = new Map(byScore.map((h, i) => [keyOf(h), i + 1]));
    /* ซอง = สุ่ม · ซอง 1 ชิดรั้วในสุด ไล่ออกไปจนซองท้ายอยู่นอกสุด */
    const gates = list.map((_, i) => i + 1);
    for (let i = gates.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [gates[i], gates[j]] = [gates[j], gates[i]]; }
    const gateGap = Math.min(5.5, OFF_MAX / Math.max(list.length, 1));
    const rs = list.map((h, i) => {
      const kmhAvg = h.avgSpeed || 56 + Math.random() * 2; /* ไม่มีสถิติ → ใช้ค่ากลาง */
      const base = (kmhAvg / 3.6) * Math.pow(1250 / dist, 0.08) * COND_FACTOR[condPick];
      /* ระบบอุบัติเหตุ — โอกาสขึ้นกับสภาพสนาม อากาศ และประวัติอาการเจ็บ */
      let pAcc = 0.018;
      if (condPick === "soft") pAcc += 0.012;
      if (condPick === "heavy") pAcc += 0.026;
      if (temp === "hot") pAcc += 0.012;
      if (h.runs && h.runs.some((r) => r.injury === "yes")) pAcc += 0.022;
      const acc = Math.random() < pAcc ? { at: 0.25 + Math.random() * 0.65, severe: Math.random() < 0.4 } : null;
      /* [ระบบลับ 1] ความถนัดโค้ง/ทางตรง — จากตำแหน่งจริงในฐานข้อมูล:
         โค้ง 3 → ช่วงสปรินต์ = ฝีมือในโค้ง · ช่วงสปรินต์ → เส้นชัย = ฝีมือทางตรง */
      const pv = (x) => (typeof x === "number" && x >= 1 ? x : 6);
      let cg = [], sg = [];
      (h.runs || []).forEach((rr) => {
        if (typeof rr.place !== "number") return;
        if (rr.p3 != null && rr.psp != null) cg.push(pv(rr.p3) - pv(rr.psp));
        if (rr.psp != null) sg.push(pv(rr.psp) - Math.min(rr.place, 6));
      });
      const avg = (a) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0);
      const clampG = (g) => Math.max(-1.5, Math.min(1.5, g));
      const curveApt = 1 + clampG(avg(cg)) * 0.013;
      const straightApt = 1 + clampG(avg(sg)) * 0.013;
      /* [ระบบลับ 2] สมาธิ — blinkers ช่วยมาก + ความสม่ำเสมอของฟอร์ม + นิสัยตามวันเกิด + สนาม/อากาศ */
      let focus = 55;
      const hasBlinkers = (h.runs || []).some((rr) => rr.blinkers === "yes");
      if (hasBlinkers) focus += 25;
      const places = (h.runs || []).map((rr) => rr.place).filter((x) => typeof x === "number");
      let sdVal = 2.4; /* ความแกว่งของฟอร์ม (ค่ากลางถ้าข้อมูลน้อย) */
      if (places.length >= 2) {
        const m = avg(places);
        sdVal = Math.sqrt(avg(places.map((x) => (x - m) * (x - m))));
        focus += Math.max(0, 12 - sdVal * 4);
      }
      if (h.bday) {
        const dayMod = [-4, 6, -6, 4, 6, 0, 8][new Date(h.bday + "T00:00:00").getDay()];
        focus += dayMod;
      }
      if (w === "rain") focus -= 10;
      if (condPick === "heavy") focus -= 8;
      if (condPick === "soft") focus -= 4;
      if (temp === "hot") focus -= 6; else focus += 3;
      focus = Math.max(20, Math.min(98, Math.round(focus)));
      const styleMain = h.style ? h.style.main : "สมดุล";
      /* [ระบบ Mental] โปรไฟล์จิตใจรายคน — เดาจากนิสัยวันเกิด/นักษัตร ฟอร์ม และสไตล์เท่าที่ข้อมูลมี
         rival: เจอคนเก่งกว่าจ่อหน้า → fight ฮึดสู้ / fold ถอดใจ / thrill ยิ่งมันส์
         press: ตกอยู่ใต้แรงกดดัน (โดนบัง เจ็บ รั้งท้าย) → clutch ยิ่งเครียดยิ่งนิ่ง / panic ยิ่งเครียดยิ่งหลุด / enjoy กดดันแล้วสนุก
         skill: ผลข้างเคียงการใช้สกิล → surge ยิ่งใช้ยิ่งติดลม / drain ใช้แล้วแผ่ว / even เฉย ๆ */
      const dayIdx = h.bday ? new Date(h.bday + "T00:00:00").getDay() : 3;
      const nkIdx = h.bday ? ((((+h.bday.slice(0, 4)) - 4) % 12) + 12) % 12 : (i % 12);
      const rivalT = (dayIdx === 0 || dayIdx === 2 || [2, 6, 10].includes(nkIdx)) ? "fight"
        : (dayIdx === 5 || [3, 7, 11].includes(nkIdx)) ? "fold" : "thrill";
      const pressT = (hasBlinkers || sdVal < 1.8) ? "clutch" : sdVal > 3 ? "panic" : "enjoy";
      const skillT = styleMain === "ฝีเท้าปลาย" ? "surge" : styleMain === "ฝีเท้าต้น" ? "drain" : "even";
      const mental = { rival: rivalT, press: pressT, skill: skillT };
      /* จุดใช้สกิลเร่งบนทางตรงสุดท้าย (5 ครั้งตามกติกา · ทางตรงสุดท้ายยาว 150 ม.) */
      const boostMarks = [250, 200, 150, 100, 50].map((m) => dist - m - Math.random() * 12);
      const gate = gates[i];
      /* กลยุทธ์ตามซอง: ซองใน=ชิดราง · ซองนอก=ตัดเข้าใน (ฝีเท้าต้น/ไล่ตาม) หรืออ้อมนอก (ฝีเท้าปลาย/สมดุล) */
      const third = Math.ceil(list.length / 3);
      const strat = gate <= third ? "rail" : gate > list.length - third
        ? ((styleMain === "ฝีเท้าต้น" || styleMain === "ไล่ตาม") ? "cross" : "wide")
        : "mid";
      return {
        h, lane: i, key: keyOf(h), no: noOf.get(keyOf(h)), gate, strat,
        base, luck: 0.985 + Math.random() * 0.03, noise: 0,
        progress: 0, prevProgress: 0, v: 0,
        off: 2 + (gate - 1) * gateGap, targetOff: 4, blocked: false,
        charges: 5, boostMarks, boostUntil: -1,
        finish: null, overrun: 0, decel: 0.75 + Math.random() * 2.1, /* วิ่งเลยเส้นชัย ~50–200 ม. แล้วค่อยชะลอ */
        curveApt, straightApt, focus, mental, stress: 0, momentum: 0, wasBoost: false, drainUntil: -1,
        acc, hurt: false, out: false,
        style: styleMain,
      };
    });
    setRunners(rs);
    setClock(0);
    simRef.current = { rs, t: 0, last: null, flags: {}, log: [], lastLead: -99, lastChase: -99, lastPass: -99 };
    setLog([]);
    setCount(3);
    setPhase("countdown");
  };

  /* countdown 3-2-1 */
  useEffect(() => {
    if (phase !== "countdown") return;
    if (count <= 0) {
      const S = simRef.current;
      if (S) pushMsg(S, "ม้าออกแล้ว! 🏇");
      setPhase("running");
      return;
    }
    const id = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(id);
  }, [phase, count]);

  /* race loop */
  useEffect(() => {
    if (phase !== "running") return;
    const E = env;
    const startS = ((FIN_S - mu(dist)) % C_LAP + C_LAP) % C_LAP;
    const free = (rs, me, sPos, offCand) =>
      !rs.some((o) => o !== me && !o.out && Math.abs(o.progress - sPos) < 14 && Math.abs(o.off - offCand) < 8);
    const step = (now) => {
      const S = simRef.current;
      if (!S) return;
      if (S.last == null) S.last = now;
      const dt = Math.min((now - S.last) / 1000, 0.05) * speedRef.current;
      S.last = now;
      S.t += dt;
      let allDone = true;
      const order = [...S.rs].filter((r) => !r.out).sort((a, b) => b.progress - a.progress);

      S.rs.forEach((r) => {
        if (r.out) return;
        if (r.finish != null) {
          /* วิ่งเลยเส้นชัยแล้วค่อย ๆ ชะลอ — อัตราชะลอแต่ละคนไม่เท่ากัน */
          if (r.v > 0.4) { r.v = Math.max(0, r.v - r.decel * dt); r.overrun += r.v * dt; allDone = false; }
          else r.v = 0;
          return;
        }
        allDone = false;
        r.prevProgress = r.progress;
        const p = Math.min(r.progress / dist, 1);
        const remaining = dist - r.progress;
        const nm = nameOf(r);
        /* accident trigger */
        if (r.acc && !r.hurt && !r.out && p >= r.acc.at) {
          if (r.acc.severe) { r.out = true; pushMsg(S, `${nm} เจ็บขาระหว่างทาง ไม่ไหว ขอถอนตัว 😢`); return; }
          r.hurt = true; pushMsg(S, `${nm} เจ็บขาระหว่างทาง แต่ฝืนวิ่งต่อ! 🩹`);
        }
        /* สกิลเร่งบนทางตรงสุดท้าย (สูงสุด 5 ครั้ง) */
        if (remaining <= HOME_M + 4 && r.charges > 0 && r.boostMarks.length && r.progress >= r.boostMarks[0]) {
          r.boostMarks.shift();
          r.charges--;
          r.boostUntil = S.t + 0.9;
        }
        const boosting = S.t < r.boostUntil;
        r.boosting = boosting;
        /* ความเร็ว */
        /* [ระบบ Mental] ความเครียดสะสมจาก โดนบัง/เจ็บ/รั้งท้าย แล้วตอบสนองตามนิสัย */
        const idxRank = order.indexOf(r);
        const lastPlace = order.length > 2 && idxRank === order.length - 1;
        const stressed = r.blocked || r.hurt || lastPlace;
        r.stress = stressed ? Math.min(1, r.stress + dt * 0.45) : Math.max(0, r.stress - dt * 0.6);
        let effFocus = r.focus;
        if (r.mental.press === "clutch") effFocus += 18 * r.stress;
        else if (r.mental.press === "panic") effFocus -= 24 * r.stress;
        else effFocus += 6 * r.stress;
        effFocus = Math.max(10, Math.min(99, effFocus));
        /* สมาธิ(สุทธิ)ต่ำ = ฟอร์มแกว่งกว่า */
        const noiseAmp = 0.012 + (1 - effFocus / 100) * 0.014;
        r.noise += (Math.random() - 0.5) * noiseAmp;
        r.noise = Math.max(-0.04, Math.min(0.04, r.noise * 0.97));
        let v = r.base * styleCurve(r.style, p) * r.luck * (1 + r.noise);
        if (boosting) v *= 1.085;
        if (r.hurt) v *= 0.82;
        if (E && E.temp === "hot" && p > 0.7) v *= 1 - 0.035 * ((p - 0.7) / 0.3);
        /* วิ่งโค้งนอก = เสียระยะ (off ภาพถูกขยายเพื่อให้เห็นชัด จึงคูณสเกลลง) */
        const sAbs = startS + mu(r.progress);
        const onCurve = inCurve(sAbs);
        /* [ระบบลับ 1] โบนัส/โทษตามความถนัดโค้ง–ทางตรง */
        v *= onCurve ? r.curveApt : r.straightApt;
        if (onCurve) v *= RB / (RB + r.off * 0.15);
        /* [ระบบ Mental] แรงกดดันกระทบฝีเท้า */
        if (r.mental.press === "panic") v *= 1 - 0.012 * r.stress;
        else if (r.mental.press === "clutch") v *= 1 + 0.006 * r.stress;
        /* เจอรุ่นเก่งกว่า (เบอร์ดีกว่า) จ่ออยู่ข้างหน้าไม่เกิน 15 ม. */
        const rival = S.rs.find((o) => o !== r && !o.out && o.finish == null && o.no < r.no &&
          o.progress >= r.progress && o.progress - r.progress < 15);
        if (rival) v *= r.mental.rival === "fight" ? 1.012 : r.mental.rival === "fold" ? 0.988 : 1.005;
        /* ผลข้างเคียงหลังใช้สกิลแต่ละครั้ง */
        if (boosting) r.wasBoost = true;
        else if (r.wasBoost) {
          r.wasBoost = false;
          if (r.mental.skill === "drain") r.drainUntil = S.t + 1.6;
          else if (r.mental.skill === "surge") r.momentum = Math.min(0.02, r.momentum + 0.006);
        }
        if (S.t < r.drainUntil) v *= 0.975;
        v *= 1 + r.momentum;
        /* การบังกัน: มีคนขวางข้างหน้าในไลน์เดียวกัน → ความเร็วถูกกดและหาทางแซง */
        /* กลยุทธ์จากซองสตาร์ท */
        if (r.strat === "cross" && p < 0.12) v *= 1.02; /* ซองนอกสายหน้า: เร่งช่วงต้นเพื่อตัดเข้าใน */
        const minOff = r.strat === "wide" && remaining > HOME_M ? 12 : 0; /* สายอ้อมนอก: ถือไลน์นอกจนถึงทางตรงสุดท้าย */
        const shiftRate = r.strat === "cross" ? 24 : r.strat === "rail" ? 18 : 16;
        const blocker = S.rs.find((o) => o !== r && !o.out && o.finish == null &&
          o.progress > r.progress && o.progress - r.progress < 12 && Math.abs(o.off - r.off) < 8);
        r.blocked = false;
        /* [ระบบลับ 2] สมาธิสูง = ตัดสินใจหาช่องได้บ่อยและแม่นกว่า สมาธิหลุด = คิดไม่ออก ติดอยู่หลังคน */
        const decide = Math.random() < 0.25 + 0.72 * (effFocus / 100);
        if (blocker && v > blocker.v) {
          r.blocked = true;
          v = Math.min(v, blocker.v * 0.99);
          if (decide) {
            /* หาไลน์แซง: สายอ้อมนอกลองออกนอกก่อน นอกนั้นเข้าในก่อน */
            const inn = Math.max(minOff, r.off - 11), out2 = Math.min(OFF_MAX, r.off + 11);
            const tryOrder = r.strat === "wide" ? [out2, inn] : [inn, out2];
            if (free(S.rs, r, r.progress, tryOrder[0])) r.targetOff = tryOrder[0];
            else if (free(S.rs, r, r.progress, tryOrder[1])) r.targetOff = tryOrder[1];
          }
        } else if (decide) {
          /* ไม่มีใครขวาง → พยายามตัดเข้าชิดรั้วในเพื่อลดระยะ (สายอ้อมนอกถือไลน์ตาม minOff) */
          if (free(S.rs, r, r.progress + 6, Math.max(minOff, r.off - 9))) r.targetOff = Math.max(minOff, r.off - 9);
          else r.targetOff = r.off;
        }
        /* ขยับไลน์เข้าหาเป้าหมาย */
        const dOff = r.targetOff - r.off;
        const shift = Math.sign(dOff) * Math.min(Math.abs(dOff), shiftRate * dt);
        r.off = Math.max(0, Math.min(OFF_MAX, r.off + shift));
        r.movingIn = dOff < -2; r.movingOut = dOff > 2;
        r.v = v;
        r.progress += v * dt;
        if (r.progress >= dist) { r.progress = dist; r.finish = S.t; }
      });

      /* ---- คำบรรยาย ---- */
      const leader = order[0];
      if (leader) {
        const lname = nameOf(leader);
        const sU = startS + mu(leader.progress);
        const crossed = (b) => {
          const bb = b <= startS ? b + C_LAP : b;
          return startS + mu(leader.prevProgress) < bb && sU >= bb;
        };
        const finalLap = leader.progress >= dist - LAP_M; /* ระยะน็อครอบ: ประกาศจุดสำคัญเฉพาะรอบสุดท้าย */
        if (dist > LAP_M && !S.flags.lap && finalLap && leader.progress > 1) {
          S.flags.lap = true;
          pushMsg(S, `${lname} นำฝูงผ่านเส้นชัยรอบแรก — เหลืออีก 1 รอบเต็ม!`);
        }
        if (finalLap && crossed(B_CURVE1)) pushMsg(S, `เข้าโค้งแรก — ${lname} นำอยู่!`);
        if (finalLap && crossed(B_TOP)) pushMsg(S, `ขึ้นทางตรงหลัง ${lname} ยังคุมเกม`);
        if (finalLap && crossed(B_CURVE3)) {
          const top3 = order.slice(0, 3).map(nameOf);
          pushMsg(S, `ที่โค้งป้าย 3 — ${top3[0]} นำมา${top3[1] ? ` ตามด้วย ${top3[1]}` : ""}${top3[2] ? ` และ ${top3[2]}` : ""}`);
        }
        if (finalLap && crossed(B_HOME) && !S.flags.home) { S.flags.home = true; pushMsg(S, "เข้าทางตรงสุดท้าย สปรินต์เต็มที่! ⚡"); }
        /* ผู้นำประจำช่วง */
        if (S.t - S.lastLead > 8 && leader.finish == null) {
          S.lastLead = S.t;
          if (S.flags.lastLeader && S.flags.lastLeader !== leader.key) pushMsg(S, `เปลี่ยนผู้นำ! ขณะนี้ ${lname} ขึ้นนำ`);
          else pushMsg(S, `ขณะนี้ ${lname} เป็นผู้นำ`);
          S.flags.lastLeader = leader.key;
        }
        /* ตามมาติด ๆ */
        if (order[1] && leader.finish == null && leader.progress - order[1].progress < 5 && S.t - S.lastChase > 9) {
          S.lastChase = S.t;
          pushMsg(S, `${nameOf(order[1])} วิ่งตามมาติด ๆ!`);
        }
      }
      /* ตรวจการแซง */
      if (S.t - S.lastPass > 1.6) {
        outer:
        for (const a of S.rs) {
          if (a.out || a.finish != null) continue;
          for (const b of S.rs) {
            if (b === a || b.out) continue;
            if (a.prevProgress <= b.prevProgress && a.progress > b.progress && b.finish == null) {
              const sAbs = startS + mu(a.progress);
              const where = inCurve(sAbs) ? (a.off < b.off ? "แซงโค้งใน" : "แซงโค้งนอก") : "แซงขึ้นหน้า";
              pushMsg(S, `${nameOf(a)} ${where} ${nameOf(b)}!`);
              S.lastPass = S.t;
              break outer;
            }
          }
        }
      }
      if (!S.flags.first && S.rs.some((r) => r.finish != null)) {
        const w = [...S.rs].filter((r) => r.finish != null).sort((a, b) => a.finish - b.finish)[0];
        S.flags.first = true;
        pushMsg(S, `${nameOf(w)} เข้าเส้นชัยเป็นอันดับ 1! 🎉`);
      }
      if (S.doneAt == null && S.rs.every((r) => r.out || r.finish != null)) S.doneAt = S.t;
      setClock(S.t);
      setRunners([...S.rs]);
      if (allDone || (S.doneAt != null && S.t - S.doneAt > 24) || S.t > 900) { setPhase("done"); return; }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase, dist, env]);

  const raceOver = phase === "done" || (runners.length > 0 && runners.every((r) => r.out || r.finish != null));
  const ranked = useMemo(() => {
    return [...runners].sort((a, b) => {
      if (a.out !== b.out) return a.out ? 1 : -1;
      if (a.finish != null && b.finish != null) return a.finish - b.finish;
      if (a.finish != null) return -1;
      if (b.finish != null) return 1;
      return b.progress - a.progress;
    });
  }, [runners]);

  const statusOf = (r) => {
    if (r.out) return { icon: "💔", text: "ถอนตัวจากการแข่ง", c: "#D06262" };
    if (r.finish != null) return { icon: "🏁", text: `เข้าเส้นชัย ${fmtRaceTime(r.finish)}`, c: "#1E8A65" };
    if (r.boosting) return { icon: "⚡", text: `ใช้สกิลเร่งความเร็ว! (เหลือ ${r.charges}/5)`, c: "#D9A116" };
    if (r.hurt) return { icon: "🩹", text: "เจ็บขา ความเร็วลดลง", c: "#D06262" };
    if (r.blocked && r.focus < 45) return { icon: "😵", text: "สมาธิหลุด หาช่องแซงไม่เจอ", c: "#D06262" };
    if (r.blocked) return { icon: "⛔", text: "โดนบังอยู่ กำลังหาทางแซง", c: "#B0813B" };
    if (r.stress > 0.55 && r.mental) {
      if (r.mental.press === "clutch") return { icon: "🧊", text: "ยิ่งกดดันยิ่งนิ่ง สมาธิเต็มร้อย", c: T.deep };
      if (r.mental.press === "panic") return { icon: "😖", text: "เครียดหนัก เริ่มทำอะไรไม่ถูก", c: "#D06262" };
      return { icon: "😆", text: "โดนกดดันแต่กลับสนุก", c: "#1E8A65" };
    }
    if (r.movingIn) return { icon: "↘", text: "ตัดเข้าโค้งในเพื่อลดระยะ", c: T.deep };
    if (r.movingOut) return { icon: "↗", text: "ออกไลน์นอกเพื่อแซง", c: T.deep };
    return { icon: "🏇", text: "วิ่งตามจังหวะปกติ", c: T.muted };
  };

  const chipBtn = (active) => ({
    border: "none", borderRadius: 10, padding: "8px 14px", fontFamily: "'Prompt',sans-serif",
    fontWeight: 700, fontSize: 13, cursor: "pointer",
    background: active ? `linear-gradient(135deg, ${T.sky}, ${T.deep})` : "#FFFFFF",
    color: active ? "#fff" : T.muted,
    boxShadow: active ? "0 4px 10px rgba(108,93,211,0.3)" : `inset 0 0 0 2px ${T.line}`,
  });

  /* ---- setup ---- */
  if (phase === "setup") {
    return (
      <section>
        <SectionTitle>Simulation Race — เลือกผู้เข้าแข่ง</SectionTitle>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
          <button onClick={randomPick} style={chipBtn(false)}>🎲 สุ่ม 16 คน</button>
          <button onClick={() => setPicked([])} style={chipBtn(false)}>ล้างที่เลือก</button>
          <select value={dist} onChange={(e) => setDist(Number(e.target.value))} style={{ ...chipBtn(false), padding: "8px 12px" }}>
            {SIM_DISTS.map((d) => <option key={d} value={d}>{d.toLocaleString()} ม.</option>)}
          </select>
          <select value={weather} onChange={(e) => setWeather(e.target.value)} style={{ ...chipBtn(false), padding: "8px 12px" }}>
            {WEATHER_OPTS.map((c) => <option key={c.key} value={c.key}>{c.label}</option>)}
          </select>
          <select value={timeKey} onChange={(e) => setTimeKey(e.target.value)} style={{ ...chipBtn(false), padding: "8px 12px" }}>
            {TIME_OPTS.map((t) => <option key={t.key} value={t.key}>{t.label}</option>)}
          </select>
          <select value={simSpeed} onChange={(e) => setSimSpeed(Number(e.target.value))} style={{ ...chipBtn(false), padding: "8px 12px" }}>
            {[1, 2].map((sp) => <option key={sp} value={sp}>{sp === 1 ? "เรียลไทม์ (x1)" : "ความเร็วจำลอง x2"}</option>)}
          </select>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: 8, marginBottom: 18 }}>
          {students.map((h) => {
            const k = keyOf(h), on = picked.includes(k);
            return (
              <button key={k} onClick={() => toggle(k)} style={{
                display: "flex", alignItems: "center", gap: 8, textAlign: "left",
                background: on ? "linear-gradient(135deg, rgba(69,200,241,0.16), rgba(138,124,224,0.16))" : "#fff",
                border: "none", borderRadius: 12, padding: "8px 10px", cursor: "pointer",
                boxShadow: on ? `inset 0 0 0 2px ${T.deep}` : `inset 0 0 0 2px ${T.line}`,
              }}>
                <Avatar name={h.th || h.name} sex={h.sex} photo={photoOf(h)} size={30} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: "'Prompt',sans-serif", fontWeight: 700, fontSize: 12.5, color: T.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{h.th || h.name}</div>
                  <div style={{ fontSize: 10.5, color: T.muted }}>{h.avgSpeed ? kmh(h.avgSpeed) : "ไม่มีสถิติ"} · {h.style ? h.style.main : "สมดุล"}</div>
                </div>
              </button>
            );
          })}
        </div>
        <button onClick={start} disabled={picked.length < 2} style={{
          ...chipBtn(picked.length >= 2), fontSize: 15, padding: "12px 28px",
          opacity: picked.length < 2 ? 0.5 : 1, transform: "skewX(-8deg)",
        }}><span style={{ display: "inline-block", transform: "skewX(8deg)" }}>🏁 เริ่มการแข่ง ({picked.length} คน)</span></button>
      </section>
    );
  }

  /* ---- countdown / running / done : oval track view ---- */
  const startS = ((FIN_S - mu(dist)) % C_LAP + C_LAP) % C_LAP;
  const startPt = pointOf(startS, RB);
  /* ฝูงอยู่ครึ่งล่างสนาม (เช่น ทางตรงหน้าเส้นชัย) → ยกกระดาน Top 5 ขึ้นไปกึ่งกลางเส้นรั้วในด้านบน */
  const leadR = ranked.find((r) => !r.out);
  const boardRaise = leadR
    ? pointOf(startS + mu(Math.min(leadR.progress, dist) + (leadR.overrun || 0)), RB).y > CYa
    : false;
  const wIcon = env ? (env.weather === "rain" ? "🌧" : "☀️") : "";
  const tempTxt = env ? (env.temp === "hot" ? "🔥 อากาศร้อน" : "❄️ อากาศเย็น") : "";

  return (
    <section>
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginBottom: 8 }}>
        <SectionTitle>Simulation Race · {dist.toLocaleString()} ม.</SectionTitle>
        <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontWeight: 700, color: T.deep, fontSize: 14 }}>⏱ {fmtRaceTime(clock)}</span>
        {phase === "running" && (
          <select value={simSpeed} onChange={(e) => setSimSpeed(Number(e.target.value))} style={{ ...chipBtn(false), padding: "5px 10px", fontSize: 12 }}>
            {[1, 2].map((sp) => <option key={sp} value={sp}>{sp === 1 ? "เรียลไทม์" : "x2"}</option>)}
          </select>
        )}
      </div>
      {env && (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
          {[`${wIcon} ${env.weather === "rain" ? "ฝนตก" : "ฟ้าใส"}`, `⏰ ${env.time.label}`, tempTxt, `🏟 ${COND_TH[env.cond]}`].map((c, i) => (
            <span key={i} style={{ background: "#fff", borderRadius: 8, padding: "4px 10px", fontSize: 12, fontWeight: 700, color: T.ink, fontFamily: "'Prompt',sans-serif", boxShadow: `inset 0 0 0 1.5px ${T.line}` }}>{c}</span>
          ))}
        </div>
      )}

      {/* oval track — จำกัดความสูงให้ทั้งเกมจบในจอเดียว */}
      <div style={{
        position: "relative", width: "100%", maxWidth: 740, margin: "0 auto 10px", aspectRatio: "1000 / 440",
        background: env && env.weather === "rain" ? "linear-gradient(180deg, #E3E6F2, #EDEAF8)" : "linear-gradient(180deg, #EAF6FD, #F3F0FB)",
        borderRadius: 18, boxShadow: T.shadow, overflow: "hidden",
      }}>
        <svg viewBox="0 0 1000 440" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          {/* outer track band (capsule) */}
          <rect x={CXa - HS - ROUT} y={CYa - ROUT} width={2 * HS + 2 * ROUT} height={2 * ROUT} rx={ROUT}
            fill={env && env.cond === "heavy" ? "#7FA873" : env && env.cond === "soft" ? "#97C284" : env && env.cond === "good" ? "#B9E2A3" : "#ABD795"} />
          {/* infield */}
          <rect x={CXa - HS - RIN} y={CYa - RIN} width={2 * HS + 2 * RIN} height={2 * RIN} rx={RIN} fill="#E5F4D9" />
          {/* rails */}
          <rect x={CXa - HS - ROUT} y={CYa - ROUT} width={2 * HS + 2 * ROUT} height={2 * ROUT} rx={ROUT} fill="none" stroke="#FFFFFF" strokeWidth="3.5" />
          <rect x={CXa - HS - RIN} y={CYa - RIN} width={2 * HS + 2 * RIN} height={2 * RIN} rx={RIN} fill="none" stroke="#FFFFFF" strokeWidth="3.5" />
          {/* finish line (ล็อคตำแหน่ง เยื้องซ้าย) */}
          {Array.from({ length: 8 }).map((_, i) => {
            const seg = (ROUT - RIN) / 8, y = CYa + RIN + i * seg;
            return (
              <g key={i}>
                <rect x={FINX - 6} y={y} width={6} height={seg} fill={i % 2 ? "#33335C" : "#FFFFFF"} />
                <rect x={FINX} y={y} width={6} height={seg} fill={i % 2 ? "#FFFFFF" : "#33335C"} />
              </g>
            );
          })}
          {/* start gate marker (โชว์เฉพาะช่วงนับถอยหลัง) */}
          {phase === "countdown" && <circle cx={startPt.x} cy={startPt.y} r="6.5" fill={T.deep} stroke="#fff" strokeWidth="2.5" />}
          {/* direction arrow */}
          <text x={CXa - HS + 60} y={CYa + RB + 5} fontSize="20" fill="#86A877" fontWeight="700">→</text>
          {/* rain */}
          {env && env.weather === "rain" && Array.from({ length: 26 }).map((_, i) => (
            <line key={"r" + i} x1={(i * 137) % 1000} y1={(i * 53) % 440} x2={((i * 137) % 1000) - 7} y2={((i * 53) % 440) + 16} stroke="#9FB6E8" strokeWidth="2" opacity="0.55" />
          ))}
        </svg>
        {/* labels */}
        {phase === "countdown" && (
          <div style={{
            position: "absolute", left: `${startPt.x / 10}%`, top: `${startPt.y / 4.4}%`,
            transform: "translate(-50%, -50%)", fontFamily: "'Prompt',sans-serif", fontWeight: 800,
            fontSize: 11, color: T.deep, textShadow: "0 0 4px #fff, 0 0 6px #fff", letterSpacing: "0.06em",
          }}>START</div>
        )}
        <div style={{ position: "absolute", left: `${FINX / 10}%`, top: `${(CYa + ROUT) / 4.4}%`, transform: "translate(-50%, -8%)", fontFamily: "'Prompt',sans-serif", fontWeight: 800, fontSize: 11, color: "#33335C", textShadow: "0 0 4px #fff" }}>FINISH</div>

        {/* กระดานอันดับสด Top 5 — วางแนวนอนกลางเกาะสนาม ไม่บังตัววิ่งในโค้ง · ที่ 1 ซ้ายสุดและเลเยอร์บนสุด */}
        <div style={{
          position: "absolute", left: "50%", top: boardRaise ? `${((CYa - RIN) / 4.4)}%` : "50%",
          transform: "translate(-50%, -50%)", transition: "top 0.5s ease",
          width: 5 * 48 + 8, height: 54, zIndex: 40, pointerEvents: "none",
        }}>
          {[...runners].sort((a, b) => String(a.key).localeCompare(String(b.key))).map((r) => {
            const idx = ranked.findIndex((x) => x.key === r.key);
            const show = idx >= 0 && idx < 5 && !r.out;
            return (
              <div key={"b" + r.key} style={{
                position: "absolute", top: "50%",
                left: (show ? idx : 5.4) * 48,
                transform: "translateY(-50%)",
                opacity: show ? 1 : 0, zIndex: show ? 10 - idx : 0,
                transition: "left 0.45s ease, opacity 0.3s ease",
              }}>
                <div style={{ position: "relative" }}>
                  <Avatar name={nameOf(r)} sex={r.h.sex} photo={photoOf(r.h)} size={40} />
                  <span style={{
                    position: "absolute", top: -4, left: -6, width: 15, height: 15, borderRadius: 99,
                    background: idx === 0 ? "#FFD84D" : "#fff", color: idx === 0 ? "#5C4A12" : T.deep,
                    fontFamily: "'IBM Plex Mono',monospace", fontWeight: 700, fontSize: 9,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: `1.5px solid ${idx === 0 ? "#E8B82A" : T.line}`, boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
                  }}>{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* runners */}
        {runners.map((r) => {
          const rr = railR(r.off);
          const sNow = startS + mu(Math.min(r.progress, dist) + (r.overrun || 0));
          const pt = pointOf(sNow, rr);
          const rank = ranked.findIndex((x) => x.key === r.key) + 1;
          return (
            <div key={r.key} style={{
              position: "absolute", left: `${pt.x / 10}%`, top: `${pt.y / 4.4}%`,
              /* เลเยอร์ตามอันดับ: ผู้นำอยู่บนสุด อันดับถัดไปไล่ลงมา */
              transform: "translate(-50%, -55%)", zIndex: r.out ? 3 : 6 + (runners.length - rank), opacity: r.out ? 0.4 : 1,
            }}>
              <div style={{ position: "relative", animation: phase === "running" && !r.out && (r.finish == null || r.v > 1.5) ? "gallop 0.38s ease-in-out infinite" : "none" }}>
                {/* skill aura */}
                {r.boosting && (
                  <div style={{
                    position: "absolute", inset: -9, borderRadius: "50%", zIndex: -1,
                    background: "radial-gradient(circle, rgba(255,216,77,0.85) 0%, rgba(255,166,61,0.45) 45%, transparent 70%)",
                    animation: "aura 0.45s ease-in-out infinite",
                  }} />
                )}
                {/* เบอร์ + ชื่อ เหนือหัว */}
                <div style={{
                  position: "absolute", left: "50%", bottom: "100%", transform: "translate(-50%, -3px)",
                  whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 3, zIndex: 6,
                }}>
                  <span style={{
                    background: (CLOTH[r.no] || ["#888"])[0], color: (CLOTH[r.no] || ["#888", "#fff"])[1],
                    fontFamily: "'IBM Plex Mono',monospace", fontWeight: 700, fontSize: 8.5,
                    borderRadius: 4, padding: "0 3px", border: "1px solid #fff",
                  }}>{r.no}</span>
                  <span style={{
                    fontFamily: "'Prompt',sans-serif", fontWeight: 700, fontSize: 9, color: T.ink,
                    textShadow: "0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff",
                  }}>{nameOf(r)}</span>
                </div>
                <Avatar name={nameOf(r)} sex={r.h.sex} photo={photoOf(r.h)} size={26} />
                {r.hurt && !r.out && <span style={{ position: "absolute", bottom: -6, right: -8, fontSize: 11 }}>🩹</span>}
                {r.out && <span style={{ position: "absolute", bottom: -6, right: -8, fontSize: 11 }}>💔</span>}
              </div>
            </div>
          );
        })}

        {/* countdown overlay */}
        {phase === "countdown" && (
          <div style={{ position: "absolute", inset: 0, background: "rgba(51,51,92,0.30)", backdropFilter: "blur(2px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
            <div key={count} style={{
              fontFamily: "'Prompt',sans-serif", fontWeight: 800, fontSize: 90, color: "#fff",
              textShadow: "0 6px 24px rgba(51,51,92,0.6)", animation: "pop 0.9s ease-out",
            }}>{count > 0 ? count : "GO!"}</div>
          </div>
        )}
        <style>{`
          @keyframes gallop { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes pop { 0% { transform: scale(0.4); opacity: 0; } 30% { transform: scale(1.15); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
          @keyframes aura { 0%,100% { transform: scale(1); opacity: 0.9; } 50% { transform: scale(1.25); opacity: 0.6; } }
        `}</style>
      </div>

      {/* Caller + Status วางคู่กัน ให้ทั้งเกมจบในจอเดียว */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 10, marginBottom: 10, alignItems: "start" }}>
      <div style={{ background: "#fff", borderRadius: 14, boxShadow: T.shadow, padding: "8px 12px" }}>
        <SectionTitle>📣 Caller</SectionTitle>
        <div style={{ display: "flex", gap: 6, alignItems: "baseline", minHeight: 20 }}>
          {log.length === 0 ? (
            <span style={{ fontSize: 11.5, color: T.muted }}>เตรียมปล่อยตัว…</span>
          ) : (
            <>
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9.5, color: T.muted, minWidth: 40 }}>{fmtRaceTime(log[0].t)}</span>
              <span style={{ fontFamily: "'Prompt',sans-serif", fontWeight: 700, fontSize: 12.5, color: T.deep }}>{log[0].text}</span>
            </>
          )}
        </div>
      </div>
      <div style={{ background: "#fff", borderRadius: 14, boxShadow: T.shadow, padding: "8px 12px" }}>
        <SectionTitle>{raceOver ? "🏆 ผลการแข่งขัน" : "🛰 Status"}</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: 3, maxHeight: 200, overflowY: "auto" }}>
          {ranked.map((r, i) => {
            const st = statusOf(r);
            return (
              <div key={r.key} style={{
                display: "flex", alignItems: "center", gap: 6, fontSize: 11, padding: "3px 6px", borderRadius: 8,
                background: raceOver && i === 0 && !r.out ? "#FFF9E6" : i % 2 ? T.soft : "transparent", opacity: r.out ? 0.65 : 1,
              }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontWeight: 700, fontSize: 10.5, color: r.out ? "#D06262" : i === 0 ? "#D9A116" : T.muted, minWidth: 18, textAlign: "right" }}>{r.out ? "✕" : i + 1}</span>
                <Cloth n={r.no} size={16} />
                <button onClick={() => openProfile(r.h)} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", fontFamily: "'Prompt',sans-serif", fontWeight: 700, fontSize: 11.5, color: T.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 86, textAlign: "left" }}>
                  {nameOf(r)}
                </button>
                <span style={{ color: st.c, fontWeight: 600, fontSize: 10, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", flex: 1 }}>{st.icon} {st.text}</span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontWeight: 700, fontSize: 10, color: r.out ? "#D06262" : r.finish != null ? T.deep : T.muted, whiteSpace: "nowrap" }}>
                  {r.out ? "ถอน" : r.finish != null ? fmtRaceTime(r.finish) : `${Math.round(r.progress)}ม.`}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {raceOver && (
          <button onClick={start} style={{ ...chipBtn(true), fontSize: 14, padding: "10px 22px", transform: "skewX(-8deg)" }}>
            <span style={{ display: "inline-block", transform: "skewX(8deg)" }}>🔄 แข่งอีกครั้ง (ตัวเดิม)</span>
          </button>
        )}
        <button onClick={() => { cancelAnimationFrame(rafRef.current); setPhase("setup"); }} style={{ ...chipBtn(false), fontSize: 14, padding: "10px 22px", transform: "skewX(-8deg)" }}>
          <span style={{ display: "inline-block", transform: "skewX(8deg)" }}>⚙️ ตั้งค่าใหม่</span>
        </button>
      </div>
    </section>
  );
};

/* birth-date personality analysis */
const BirthSection = ({ iso, last }) => {
  const bi = birthInfo(iso);
  if (!bi) return null;
  const Row = ({ tag, title, trait, dot }) => (
    <div style={{ background: T.soft, borderRadius: 14, padding: "12px 14px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        <span style={{ fontSize: 11, color: T.muted, letterSpacing: "0.06em", fontWeight: 700 }}>{tag}</span>
        {dot && <span style={{ width: 10, height: 10, borderRadius: 99, background: dot, display: "inline-block", border: "2px solid #fff", boxShadow: "0 1px 3px rgba(0,0,0,0.15)" }} />}
        <span style={{ fontFamily: "'Prompt',sans-serif", fontWeight: 700, fontSize: 14.5, color: T.ink }}>{title}</span>
      </div>
      <div style={{ fontSize: 13, color: T.ink, lineHeight: 1.55 }}>{trait}</div>
    </div>
  );
  return (
    <div style={{ padding: "16px 24px 18px", borderBottom: last ? "none" : `1px solid ${T.line}` }}>
      <SectionTitle>วิเคราะห์นิสัยจากวันเกิด</SectionTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Row tag="ปีนักษัตร" title={bi.naksat} trait={bi.naksatTrait} />
        <Row tag="เกิดวัน" title={`วัน${bi.day.name}`} trait={bi.day.trait} dot={bi.day.color} />
        <Row tag="ราศี" title={`ราศี${bi.rasi}`} trait={bi.rasiTrait} />
      </div>
      <div style={{ fontSize: 11.5, color: T.muted, marginTop: 10 }}>* อิงตามความเชื่อทางโหราศาสตร์ไทย จัดทำเพื่อความบันเทิง ไม่ใช่ข้อมูลเชิงสถิติ</div>
    </div>
  );
};

const Empty = ({ q }) => (
  <div style={{ textAlign: "center", padding: "70px 20px", color: "#9A95B8" }}>
    <div style={{ fontSize: 42, marginBottom: 10 }}>🎠</div>
    <div style={{ fontFamily: "'Prompt',sans-serif", fontWeight: 700, fontSize: 16, color: "#33335C" }}>ไม่พบนักเรียนที่ตรงกับ {q ? `"${q}"` : "ตัวกรอง"}</div>
    <div style={{ fontSize: 13.5, marginTop: 6 }}>ลองค้นด้วยชื่อไทยหรืออังกฤษ รหัสนักเรียน จ๊อกกี้ หรือล้างตัวกรองรุ่นการแข่ง</div>
  </div>
);
