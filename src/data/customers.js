const customers = [
  {
    "id": 1,
    "name": "Umi Melani",
    "membership": "Regular",
    "email": "mwacana@yahoo.com",
    "phone": "+62-202-939-0878",
    "totalTransactions": 6,
    "totalSpent": 406842,
    "lastTransactionDate": "2025-02-01"
  },
  {
    "id": 2,
    "name": "Paramita Rajata, S.Pd",
    "membership": "Platinum",
    "email": "kawaca81@cv.id",
    "phone": "+62 (0024) 240-3381",
    "totalTransactions": 77,
    "totalSpent": 1875720,
    "lastTransactionDate": "2025-05-17"
  },
  {
    "id": 3,
    "name": "Ganjaran Usamah, M.Ak",
    "membership": "Gold",
    "email": "caturangga84@hotmail.com",
    "phone": "+62 (69) 450 0534",
    "totalTransactions": 27,
    "totalSpent": 2403405,
    "lastTransactionDate": "2024-12-31"
  },
  {
    "id": 4,
    "name": "Anita Nasyiah",
    "membership": "Silver",
    "email": "qyolanda@pd.ac.id",
    "phone": "+62-962-736-5271",
    "totalTransactions": 99,
    "totalSpent": 4551525,
    "lastTransactionDate": "2025-02-03"
  },
  {
    "id": 5,
    "name": "Jagaraga Nashiruddin",
    "membership": "Platinum",
    "email": "kamarialestari@ud.gov",
    "phone": "+62 (69) 312-1637",
    "totalTransactions": 38,
    "totalSpent": 3648570,
    "lastTransactionDate": "2025-04-06"
  },
  {
    "id": 6,
    "name": "Hadi Januar, M.TI.",
    "membership": "Regular",
    "email": "suartinidaliono@pd.org",
    "phone": "+62 (31) 429 0018",
    "totalTransactions": 1,
    "totalSpent": 140386,
    "lastTransactionDate": "2025-06-25"
  },
  {
    "id": 7,
    "name": "dr. Zulaikha Hutasoit, S.Kom",
    "membership": "Regular",
    "email": "cpratiwi@ud.edu",
    "phone": "+62-0084-810-0184",
    "totalTransactions": 23,
    "totalSpent": 1008895,
    "lastTransactionDate": "2025-05-22"
  },
  {
    "id": 8,
    "name": "dr. Caket Adriansyah",
    "membership": "Silver",
    "email": "pradanasabar@cv.id",
    "phone": "(017) 213 1451",
    "totalTransactions": 69,
    "totalSpent": 4852218,
    "lastTransactionDate": "2025-01-19"
  },
  {
    "id": 9,
    "name": "Devi Tarihoran",
    "membership": "Platinum",
    "email": "suartinigada@pd.web.id",
    "phone": "+62 (62) 494-5147",
    "totalTransactions": 10,
    "totalSpent": 1140890,
    "lastTransactionDate": "2025-04-29"
  },
  {
    "id": 10,
    "name": "Hani Hutagalung",
    "membership": "Regular",
    "email": "taliamaulana@cv.net.id",
    "phone": "+62 (019) 642 1522",
    "totalTransactions": 56,
    "totalSpent": 835072,
    "lastTransactionDate": "2025-05-08"
  },
  {
    "id": 11,
    "name": "Kamila Simanjuntak",
    "membership": "Regular",
    "email": "slaksmiwati@yahoo.com",
    "phone": "+62 (236) 687 8878",
    "totalTransactions": 10,
    "totalSpent": 920660,
    "lastTransactionDate": "2025-05-29"
  },
  {
    "id": 12,
    "name": "R.A. Kiandra Hutasoit, M.Farm",
    "membership": "Regular",
    "email": "cayadiprakasa@yahoo.com",
    "phone": "+62-30-587-2105",
    "totalTransactions": 74,
    "totalSpent": 8585258,
    "lastTransactionDate": "2025-04-14"
  },
  {
    "id": 13,
    "name": "R. Ida Haryanti, S.E.I",
    "membership": "Regular",
    "email": "imamprasetyo@gmail.com",
    "phone": "+62 (12) 606 5019",
    "totalTransactions": 38,
    "totalSpent": 1527296,
    "lastTransactionDate": "2025-03-11"
  },
  {
    "id": 14,
    "name": "Zalindra Riyanti",
    "membership": "Gold",
    "email": "maulanaopan@pt.com",
    "phone": "(022) 728-4765",
    "totalTransactions": 3,
    "totalSpent": 285408,
    "lastTransactionDate": "2025-01-14"
  },
  {
    "id": 15,
    "name": "Ir. Marsito Budiman, S.Pd",
    "membership": "Silver",
    "email": "banawayuniar@perum.or.id",
    "phone": "+62 (06) 678-4984",
    "totalTransactions": 80,
    "totalSpent": 10448880,
    "lastTransactionDate": "2025-03-27"
  },
  {
    "id": 16,
    "name": "Indra Manullang",
    "membership": "Platinum",
    "email": "nurdiyantiperkasa@gmail.com",
    "phone": "+62-690-362-8917",
    "totalTransactions": 12,
    "totalSpent": 1493772,
    "lastTransactionDate": "2025-05-17"
  },
  {
    "id": 17,
    "name": "Safina Yuniar",
    "membership": "Regular",
    "email": "dmarbun@yahoo.com",
    "phone": "(034) 111-5950",
    "totalTransactions": 32,
    "totalSpent": 3974688,
    "lastTransactionDate": "2025-04-02"
  },
  {
    "id": 18,
    "name": "Elisa Namaga",
    "membership": "Regular",
    "email": "prabowomichelle@ud.ponpes.id",
    "phone": "+62-034-199-0970",
    "totalTransactions": 68,
    "totalSpent": 2081888,
    "lastTransactionDate": "2025-02-15"
  },
  {
    "id": 19,
    "name": "Cornelia Saragih",
    "membership": "Gold",
    "email": "karya68@ud.edu",
    "phone": "+62 (056) 818-2096",
    "totalTransactions": 40,
    "totalSpent": 3960040,
    "lastTransactionDate": "2025-01-09"
  },
  {
    "id": 20,
    "name": "Cut Icha Marpaung",
    "membership": "Platinum",
    "email": "ohutapea@cv.edu",
    "phone": "+62 (88) 985-7254",
    "totalTransactions": 43,
    "totalSpent": 2325182,
    "lastTransactionDate": "2025-04-02"
  },
  {
    "id": 21,
    "name": "drg. Azalea Zulaika",
    "membership": "Gold",
    "email": "hamzahsuryatmi@hotmail.com",
    "phone": "+62 (029) 710 2481",
    "totalTransactions": 66,
    "totalSpent": 2632806,
    "lastTransactionDate": "2025-03-10"
  },
  {
    "id": 22,
    "name": "Jaeman Sihotang",
    "membership": "Silver",
    "email": "gaman14@ud.gov",
    "phone": "(0474) 721 9705",
    "totalTransactions": 100,
    "totalSpent": 10158600,
    "lastTransactionDate": "2025-04-06"
  },
  {
    "id": 23,
    "name": "Lalita Wasita",
    "membership": "Gold",
    "email": "gutama@ud.or.id",
    "phone": "(0409) 038 0214",
    "totalTransactions": 94,
    "totalSpent": 4579304,
    "lastTransactionDate": "2025-06-15"
  },
  {
    "id": 24,
    "name": "Kairav Wacana",
    "membership": "Silver",
    "email": "prayogahariyah@ud.my.id",
    "phone": "0871121663",
    "totalTransactions": 14,
    "totalSpent": 677446,
    "lastTransactionDate": "2025-03-13"
  },
  {
    "id": 25,
    "name": "Bella Simanjuntak",
    "membership": "Gold",
    "email": "sprabowo@hotmail.com",
    "phone": "(0147) 082-7235",
    "totalTransactions": 26,
    "totalSpent": 1442506,
    "lastTransactionDate": "2025-03-18"
  },
  {
    "id": 26,
    "name": "Limar Wibowo",
    "membership": "Gold",
    "email": "satya73@cv.mil.id",
    "phone": "+62 (0421) 214 6147",
    "totalTransactions": 98,
    "totalSpent": 2915794,
    "lastTransactionDate": "2025-04-20"
  },
  {
    "id": 27,
    "name": "Paramita Prabowo",
    "membership": "Regular",
    "email": "balanggaiswahyudi@yahoo.com",
    "phone": "+62 (423) 567 7826",
    "totalTransactions": 99,
    "totalSpent": 13813371,
    "lastTransactionDate": "2025-06-18"
  },
  {
    "id": 28,
    "name": "Queen Wibisono, S.Ked",
    "membership": "Silver",
    "email": "widiastutikiandra@ud.com",
    "phone": "+62 (72) 751 6480",
    "totalTransactions": 97,
    "totalSpent": 12384669,
    "lastTransactionDate": "2025-03-09"
  },
  {
    "id": 29,
    "name": "R. Siska Hartati, M.Farm",
    "membership": "Gold",
    "email": "pratamaharimurti@perum.mil",
    "phone": "+62 (339) 055-0448",
    "totalTransactions": 81,
    "totalSpent": 7522713,
    "lastTransactionDate": "2025-03-28"
  },
  {
    "id": 30,
    "name": "Puti Tira Mandasari, M.M.",
    "membership": "Regular",
    "email": "wthamrin@hotmail.com",
    "phone": "(085) 127-6528",
    "totalTransactions": 57,
    "totalSpent": 1590300,
    "lastTransactionDate": "2025-06-08"
  },
  {
    "id": 31,
    "name": "Kemba Fujiati",
    "membership": "Silver",
    "email": "titin64@hotmail.com",
    "phone": "+62 (011) 109-6179",
    "totalTransactions": 57,
    "totalSpent": 5094774,
    "lastTransactionDate": "2025-04-25"
  },
  {
    "id": 32,
    "name": "R. Mahesa Handayani",
    "membership": "Silver",
    "email": "saadat33@perum.net.id",
    "phone": "+62 (057) 660-5384",
    "totalTransactions": 76,
    "totalSpent": 1879100,
    "lastTransactionDate": "2025-06-29"
  },
  {
    "id": 33,
    "name": "Eman Samosir, S.Farm",
    "membership": "Silver",
    "email": "agustinaatmaja@pt.desa.id",
    "phone": "089 552 9638",
    "totalTransactions": 65,
    "totalSpent": 1914120,
    "lastTransactionDate": "2025-02-20"
  },
  {
    "id": 34,
    "name": "Latif Yuniar",
    "membership": "Platinum",
    "email": "permatasidiq@gmail.com",
    "phone": "(026) 582 6312",
    "totalTransactions": 60,
    "totalSpent": 7707960,
    "lastTransactionDate": "2025-03-16"
  },
  {
    "id": 35,
    "name": "Laswi Permata",
    "membership": "Silver",
    "email": "intan25@gmail.com",
    "phone": "+62 (010) 609 2098",
    "totalTransactions": 8,
    "totalSpent": 853296,
    "lastTransactionDate": "2025-04-07"
  },
  {
    "id": 36,
    "name": "Kenzie Wibowo",
    "membership": "Regular",
    "email": "umayausada@cv.biz.id",
    "phone": "+62-836-404-1209",
    "totalTransactions": 10,
    "totalSpent": 336700,
    "lastTransactionDate": "2025-06-27"
  },
  {
    "id": 37,
    "name": "Balapati Haryanti",
    "membership": "Regular",
    "email": "megantarakarya@cv.net.id",
    "phone": "+62 (361) 706-1713",
    "totalTransactions": 60,
    "totalSpent": 1245180,
    "lastTransactionDate": "2025-06-17"
  },
  {
    "id": 38,
    "name": "Keisha Sihotang",
    "membership": "Silver",
    "email": "gatrasalahudin@gmail.com",
    "phone": "+62 (99) 015-5799",
    "totalTransactions": 74,
    "totalSpent": 4391530,
    "lastTransactionDate": "2025-05-13"
  },
  {
    "id": 39,
    "name": "Capa Nurdiyanti",
    "membership": "Gold",
    "email": "nababannilam@gmail.com",
    "phone": "0808823513",
    "totalTransactions": 78,
    "totalSpent": 10505274,
    "lastTransactionDate": "2025-04-16"
  },
  {
    "id": 40,
    "name": "Dina Prasetya",
    "membership": "Platinum",
    "email": "kawacasaefullah@cv.my.id",
    "phone": "(0686) 342-3461",
    "totalTransactions": 8,
    "totalSpent": 1024808,
    "lastTransactionDate": "2025-01-05"
  },
  {
    "id": 41,
    "name": "KH. Langgeng Saragih, S.E.",
    "membership": "Gold",
    "email": "castuti@perum.web.id",
    "phone": "(063) 955 1720",
    "totalTransactions": 44,
    "totalSpent": 1412664,
    "lastTransactionDate": "2025-04-23"
  },
  {
    "id": 42,
    "name": "Rini Wasita",
    "membership": "Regular",
    "email": "raden01@gmail.com",
    "phone": "+62 (625) 313 5525",
    "totalTransactions": 6,
    "totalSpent": 449664,
    "lastTransactionDate": "2025-04-09"
  },
  {
    "id": 43,
    "name": "Galuh Anggriawan",
    "membership": "Gold",
    "email": "wadipurnawati@yahoo.com",
    "phone": "+62-0816-493-8318",
    "totalTransactions": 57,
    "totalSpent": 8400717,
    "lastTransactionDate": "2025-01-23"
  },
  {
    "id": 44,
    "name": "Rachel Winarsih, S.Pt",
    "membership": "Silver",
    "email": "usimanjuntak@gmail.com",
    "phone": "+62-077-046-1172",
    "totalTransactions": 47,
    "totalSpent": 5063780,
    "lastTransactionDate": "2025-02-22"
  },
  {
    "id": 45,
    "name": "Rika Winarno",
    "membership": "Silver",
    "email": "suryonoargono@pd.edu",
    "phone": "(008) 805 0171",
    "totalTransactions": 50,
    "totalSpent": 5857800,
    "lastTransactionDate": "2025-04-26"
  },
  {
    "id": 46,
    "name": "dr. Nyoman Sihombing, S.T.",
    "membership": "Silver",
    "email": "raharja18@yahoo.com",
    "phone": "(0906) 477-1591",
    "totalTransactions": 87,
    "totalSpent": 2064249,
    "lastTransactionDate": "2025-06-10"
  },
  {
    "id": 47,
    "name": "Asirwada Anggriawan",
    "membership": "Platinum",
    "email": "sinagayuni@cv.desa.id",
    "phone": "0800401041",
    "totalTransactions": 9,
    "totalSpent": 867834,
    "lastTransactionDate": "2025-01-05"
  },
  {
    "id": 48,
    "name": "Shakila Suryatmi",
    "membership": "Silver",
    "email": "zelaya22@hotmail.com",
    "phone": "(0125) 296 7188",
    "totalTransactions": 72,
    "totalSpent": 8016120,
    "lastTransactionDate": "2025-02-20"
  },
  {
    "id": 49,
    "name": "Dr. Salimah Lestari",
    "membership": "Silver",
    "email": "ade31@yahoo.com",
    "phone": "+62 (0158) 331-1703",
    "totalTransactions": 33,
    "totalSpent": 1630827,
    "lastTransactionDate": "2025-02-15"
  },
  {
    "id": 50,
    "name": "Darijan Hastuti, S.Sos",
    "membership": "Silver",
    "email": "vjailani@perum.co.id",
    "phone": "+62 (0728) 123-5679",
    "totalTransactions": 11,
    "totalSpent": 517814,
    "lastTransactionDate": "2025-01-02"
  },
  {
    "id": 51,
    "name": "Purwadi Wacana",
    "membership": "Gold",
    "email": "setiawanslamet@ud.int",
    "phone": "+62 (71) 130 7240",
    "totalTransactions": 40,
    "totalSpent": 4509960,
    "lastTransactionDate": "2025-04-09"
  },
  {
    "id": 52,
    "name": "Karta Hartati, S.I.Kom",
    "membership": "Silver",
    "email": "pudjiastuticawisadi@yahoo.com",
    "phone": "(032) 686-8507",
    "totalTransactions": 77,
    "totalSpent": 2480016,
    "lastTransactionDate": "2025-04-02"
  },
  {
    "id": 53,
    "name": "Cinthia Hardiansyah",
    "membership": "Silver",
    "email": "snababan@gmail.com",
    "phone": "(029) 489 7861",
    "totalTransactions": 72,
    "totalSpent": 7829568,
    "lastTransactionDate": "2025-02-21"
  },
  {
    "id": 54,
    "name": "Mariadi Prayoga",
    "membership": "Platinum",
    "email": "dartonohabibi@perum.id",
    "phone": "+62 (081) 439 6661",
    "totalTransactions": 17,
    "totalSpent": 2515830,
    "lastTransactionDate": "2025-05-12"
  },
  {
    "id": 55,
    "name": "Yuni Santoso, M.Kom.",
    "membership": "Silver",
    "email": "hasimsitumorang@perum.int",
    "phone": "+62 (89) 743-2512",
    "totalTransactions": 83,
    "totalSpent": 10042419,
    "lastTransactionDate": "2025-02-11"
  },
  {
    "id": 56,
    "name": "Mutia Megantara",
    "membership": "Silver",
    "email": "varyani@cv.net",
    "phone": "+62 (09) 579-0737",
    "totalTransactions": 3,
    "totalSpent": 315156,
    "lastTransactionDate": "2025-02-05"
  },
  {
    "id": 57,
    "name": "Reza Budiyanto",
    "membership": "Silver",
    "email": "ellamardhiyah@gmail.com",
    "phone": "+62 (11) 457 7584",
    "totalTransactions": 24,
    "totalSpent": 1587576,
    "lastTransactionDate": "2025-01-21"
  },
  {
    "id": 58,
    "name": "Hafshah Utama",
    "membership": "Gold",
    "email": "thamrinluhung@hotmail.com",
    "phone": "+62 (897) 148 0263",
    "totalTransactions": 99,
    "totalSpent": 13609827,
    "lastTransactionDate": "2025-05-08"
  },
  {
    "id": 59,
    "name": "Garda Mandasari",
    "membership": "Gold",
    "email": "keziaastuti@cv.go.id",
    "phone": "+62 (048) 782-4556",
    "totalTransactions": 29,
    "totalSpent": 1335769,
    "lastTransactionDate": "2025-05-08"
  },
  {
    "id": 60,
    "name": "Ika Saragih",
    "membership": "Platinum",
    "email": "prastutieka@perum.my.id",
    "phone": "+62 (410) 727-2849",
    "totalTransactions": 10,
    "totalSpent": 875400,
    "lastTransactionDate": "2025-04-24"
  },
  {
    "id": 61,
    "name": "Carub Sihombing, M.Kom.",
    "membership": "Platinum",
    "email": "sihombingamong@yahoo.com",
    "phone": "+62-034-910-7406",
    "totalTransactions": 65,
    "totalSpent": 9621755,
    "lastTransactionDate": "2025-04-18"
  },
  {
    "id": 62,
    "name": "Rafid Adriansyah, S.Gz",
    "membership": "Gold",
    "email": "naradisuryono@hotmail.com",
    "phone": "0821423691",
    "totalTransactions": 85,
    "totalSpent": 8353800,
    "lastTransactionDate": "2025-03-09"
  },
  {
    "id": 63,
    "name": "Anggabaya Kusmawati",
    "membership": "Gold",
    "email": "violetuyainah@yahoo.com",
    "phone": "(061) 449-4296",
    "totalTransactions": 77,
    "totalSpent": 8374058,
    "lastTransactionDate": "2025-02-25"
  },
  {
    "id": 64,
    "name": "Wani Prastuti",
    "membership": "Gold",
    "email": "jaismansur@perum.net",
    "phone": "+62 (0978) 266-1287",
    "totalTransactions": 21,
    "totalSpent": 1205547,
    "lastTransactionDate": "2025-05-11"
  },
  {
    "id": 65,
    "name": "Olivia Tamba",
    "membership": "Platinum",
    "email": "sabar76@yahoo.com",
    "phone": "(0080) 612 9439",
    "totalTransactions": 93,
    "totalSpent": 11600169,
    "lastTransactionDate": "2025-05-14"
  },
  {
    "id": 66,
    "name": "Dian Safitri",
    "membership": "Gold",
    "email": "wijayadwi@yahoo.com",
    "phone": "+62-78-701-0415",
    "totalTransactions": 53,
    "totalSpent": 5591394,
    "lastTransactionDate": "2025-04-09"
  },
  {
    "id": 67,
    "name": "Rizki Siregar",
    "membership": "Regular",
    "email": "banawi19@hotmail.com",
    "phone": "080 382 8723",
    "totalTransactions": 57,
    "totalSpent": 4827444,
    "lastTransactionDate": "2025-04-25"
  },
  {
    "id": 68,
    "name": "Manah Mangunsong, S.Pd",
    "membership": "Gold",
    "email": "laksitapadmi@hotmail.com",
    "phone": "+62-110-291-8133",
    "totalTransactions": 30,
    "totalSpent": 4499610,
    "lastTransactionDate": "2025-06-22"
  },
  {
    "id": 69,
    "name": "Aisyah Mayasari",
    "membership": "Gold",
    "email": "hhakim@yahoo.com",
    "phone": "(072) 384 9791",
    "totalTransactions": 40,
    "totalSpent": 5317960,
    "lastTransactionDate": "2025-01-20"
  },
  {
    "id": 70,
    "name": "Makara Damanik",
    "membership": "Regular",
    "email": "tirapermadi@perum.net.id",
    "phone": "(0441) 975-4661",
    "totalTransactions": 48,
    "totalSpent": 6023952,
    "lastTransactionDate": "2025-03-24"
  },
  {
    "id": 71,
    "name": "Yulia Anggraini",
    "membership": "Regular",
    "email": "suryonovinsen@perum.com",
    "phone": "+62 (0097) 052-7740",
    "totalTransactions": 99,
    "totalSpent": 8302536,
    "lastTransactionDate": "2025-03-31"
  },
  {
    "id": 72,
    "name": "Olivia Mardhiyah",
    "membership": "Regular",
    "email": "ella68@cv.edu",
    "phone": "+62 (957) 244-6176",
    "totalTransactions": 65,
    "totalSpent": 9637550,
    "lastTransactionDate": "2025-01-30"
  },
  {
    "id": 73,
    "name": "Hj. Elvina Permata",
    "membership": "Gold",
    "email": "zeldasinaga@hotmail.com",
    "phone": "+62 (996) 100-2311",
    "totalTransactions": 21,
    "totalSpent": 1309329,
    "lastTransactionDate": "2025-04-01"
  },
  {
    "id": 74,
    "name": "Jaswadi Sinaga, S.H.",
    "membership": "Regular",
    "email": "natsirpranawa@pt.int",
    "phone": "+62-017-590-2517",
    "totalTransactions": 33,
    "totalSpent": 781374,
    "lastTransactionDate": "2025-04-06"
  },
  {
    "id": 75,
    "name": "Makuta Pertiwi",
    "membership": "Platinum",
    "email": "johanlestari@ud.mil.id",
    "phone": "083 190 1302",
    "totalTransactions": 48,
    "totalSpent": 1770864,
    "lastTransactionDate": "2025-03-14"
  },
  {
    "id": 76,
    "name": "Gatra Wasita",
    "membership": "Gold",
    "email": "hairyanto87@cv.or.id",
    "phone": "+62 (598) 217-6619",
    "totalTransactions": 37,
    "totalSpent": 1183519,
    "lastTransactionDate": "2025-06-22"
  },
  {
    "id": 77,
    "name": "Purwa Maryati",
    "membership": "Gold",
    "email": "lazuardibella@gmail.com",
    "phone": "+62-098-503-4465",
    "totalTransactions": 35,
    "totalSpent": 4472510,
    "lastTransactionDate": "2025-01-15"
  },
  {
    "id": 78,
    "name": "R. Irma Hutagalung, M.Pd",
    "membership": "Gold",
    "email": "raditya90@perum.ac.id",
    "phone": "+62-05-643-5023",
    "totalTransactions": 56,
    "totalSpent": 1906352,
    "lastTransactionDate": "2025-01-13"
  },
  {
    "id": 79,
    "name": "dr. Usyi Wijayanti, S.Gz",
    "membership": "Platinum",
    "email": "zhidayanto@ud.mil.id",
    "phone": "+62 (087) 240 1078",
    "totalTransactions": 58,
    "totalSpent": 5895178,
    "lastTransactionDate": "2025-04-16"
  },
  {
    "id": 80,
    "name": "Gara Astuti, M.Kom.",
    "membership": "Regular",
    "email": "artantohakim@gmail.com",
    "phone": "+62-896-087-0662",
    "totalTransactions": 54,
    "totalSpent": 1293840,
    "lastTransactionDate": "2025-02-12"
  },
  {
    "id": 81,
    "name": "Maria Pudjiastuti, S.E.I",
    "membership": "Gold",
    "email": "nlazuardi@ud.mil.id",
    "phone": "+62-033-190-3689",
    "totalTransactions": 65,
    "totalSpent": 7022015,
    "lastTransactionDate": "2025-03-24"
  },
  {
    "id": 82,
    "name": "Dt. Taufan Prayoga, S.Gz",
    "membership": "Silver",
    "email": "mahendratomi@ud.desa.id",
    "phone": "+62-0429-671-1148",
    "totalTransactions": 50,
    "totalSpent": 1569600,
    "lastTransactionDate": "2025-01-08"
  },
  {
    "id": 83,
    "name": "Tiara Tamba",
    "membership": "Silver",
    "email": "xsihombing@cv.co.id",
    "phone": "0881056974",
    "totalTransactions": 29,
    "totalSpent": 504281,
    "lastTransactionDate": "2025-02-08"
  },
  {
    "id": 84,
    "name": "Viktor Mandala",
    "membership": "Gold",
    "email": "intan31@cv.my.id",
    "phone": "(0107) 044 9641",
    "totalTransactions": 13,
    "totalSpent": 1272622,
    "lastTransactionDate": "2025-01-15"
  },
  {
    "id": 85,
    "name": "Zulaikha Suryatmi",
    "membership": "Silver",
    "email": "ybudiyanto@yahoo.com",
    "phone": "(0033) 626 8040",
    "totalTransactions": 18,
    "totalSpent": 360720,
    "lastTransactionDate": "2025-01-11"
  },
  {
    "id": 86,
    "name": "Tgk. Waluyo Dongoran, M.Ak",
    "membership": "Regular",
    "email": "maya30@yahoo.com",
    "phone": "(060) 186-4876",
    "totalTransactions": 61,
    "totalSpent": 2829363,
    "lastTransactionDate": "2025-04-15"
  },
  {
    "id": 87,
    "name": "Qori Maryati, S.T.",
    "membership": "Platinum",
    "email": "vhastuti@cv.ac.id",
    "phone": "+62 (038) 459 6094",
    "totalTransactions": 58,
    "totalSpent": 659808,
    "lastTransactionDate": "2025-04-21"
  },
  {
    "id": 88,
    "name": "Sakura Ramadan",
    "membership": "Gold",
    "email": "samosirjelita@ud.my.id",
    "phone": "+62-70-705-7836",
    "totalTransactions": 3,
    "totalSpent": 231264,
    "lastTransactionDate": "2025-03-11"
  },
  {
    "id": 89,
    "name": "Puti Ika Suryatmi",
    "membership": "Regular",
    "email": "faridagatra@yahoo.com",
    "phone": "+62 (0472) 322 9031",
    "totalTransactions": 20,
    "totalSpent": 2967040,
    "lastTransactionDate": "2025-01-11"
  },
  {
    "id": 90,
    "name": "Cengkal Mayasari",
    "membership": "Gold",
    "email": "bakda83@gmail.com",
    "phone": "+62 (0405) 809 3511",
    "totalTransactions": 15,
    "totalSpent": 1282860,
    "lastTransactionDate": "2025-05-07"
  },
  {
    "id": 91,
    "name": "Carla Melani",
    "membership": "Platinum",
    "email": "hasimsimbolon@pd.biz.id",
    "phone": "+62 (05) 955 6574",
    "totalTransactions": 39,
    "totalSpent": 1635699,
    "lastTransactionDate": "2025-04-08"
  },
  {
    "id": 92,
    "name": "Caraka Uwais",
    "membership": "Regular",
    "email": "eja90@perum.co.id",
    "phone": "088 953 6902",
    "totalTransactions": 31,
    "totalSpent": 3721674,
    "lastTransactionDate": "2025-04-30"
  },
  {
    "id": 93,
    "name": "Ir. Bahuwirya Hutagalung, S.H.",
    "membership": "Regular",
    "email": "nurainibaktiono@hotmail.com",
    "phone": "(0887) 543-9435",
    "totalTransactions": 9,
    "totalSpent": 351540,
    "lastTransactionDate": "2025-03-15"
  },
  {
    "id": 94,
    "name": "KH. Gilang Pradipta, M.M.",
    "membership": "Gold",
    "email": "permaditirtayasa@hotmail.com",
    "phone": "(051) 588-1579",
    "totalTransactions": 77,
    "totalSpent": 1101716,
    "lastTransactionDate": "2025-02-16"
  },
  {
    "id": 95,
    "name": "Winda Andriani",
    "membership": "Silver",
    "email": "gawatiprasasta@perum.biz.id",
    "phone": "+62 (511) 668 2973",
    "totalTransactions": 92,
    "totalSpent": 4382604,
    "lastTransactionDate": "2025-02-13"
  },
  {
    "id": 96,
    "name": "Taufik Hasanah",
    "membership": "Silver",
    "email": "dimasandriani@perum.edu",
    "phone": "+62-060-212-8866",
    "totalTransactions": 55,
    "totalSpent": 572550,
    "lastTransactionDate": "2025-06-23"
  },
  {
    "id": 97,
    "name": "Himawan Puspita",
    "membership": "Gold",
    "email": "dasa55@pt.desa.id",
    "phone": "(0676) 472 2981",
    "totalTransactions": 31,
    "totalSpent": 3695200,
    "lastTransactionDate": "2025-03-09"
  },
  {
    "id": 98,
    "name": "Lega Rahayu",
    "membership": "Silver",
    "email": "uwibowo@yahoo.com",
    "phone": "+62 (89) 413-4750",
    "totalTransactions": 86,
    "totalSpent": 2790098,
    "lastTransactionDate": "2025-01-29"
  },
  {
    "id": 99,
    "name": "Dr. Labuh Melani",
    "membership": "Platinum",
    "email": "mariadi65@gmail.com",
    "phone": "+62 (03) 684 9951",
    "totalTransactions": 9,
    "totalSpent": 1331127,
    "lastTransactionDate": "2025-04-19"
  },
  {
    "id": 100,
    "name": "Eli Lazuardi",
    "membership": "Platinum",
    "email": "anita73@gmail.com",
    "phone": "+62 (0491) 342-1388",
    "totalTransactions": 50,
    "totalSpent": 6662150,
    "lastTransactionDate": "2025-03-08"
  },
  {
    "id": 101,
    "name": "Alambana Rahimah",
    "membership": "Silver",
    "email": "adinatalestari@ud.biz.id",
    "phone": "(078) 274-1176",
    "totalTransactions": 82,
    "totalSpent": 9136276,
    "lastTransactionDate": "2025-05-26"
  },
  {
    "id": 102,
    "name": "Clara Mandala",
    "membership": "Silver",
    "email": "thamrincandrakanta@hotmail.com",
    "phone": "+62-0152-854-7815",
    "totalTransactions": 33,
    "totalSpent": 470481,
    "lastTransactionDate": "2025-04-05"
  },
  {
    "id": 103,
    "name": "Ian Januar",
    "membership": "Gold",
    "email": "ilsawijayanti@hotmail.com",
    "phone": "+62-003-296-3347",
    "totalTransactions": 9,
    "totalSpent": 903483,
    "lastTransactionDate": "2025-06-22"
  },
  {
    "id": 104,
    "name": "Yulia Nashiruddin",
    "membership": "Silver",
    "email": "eluh31@hotmail.com",
    "phone": "+62-061-789-3206",
    "totalTransactions": 94,
    "totalSpent": 3494356,
    "lastTransactionDate": "2025-01-29"
  },
  {
    "id": 105,
    "name": "Raisa Wibowo",
    "membership": "Silver",
    "email": "agnes82@cv.net.id",
    "phone": "(095) 874 1314",
    "totalTransactions": 18,
    "totalSpent": 389196,
    "lastTransactionDate": "2025-05-13"
  },
  {
    "id": 106,
    "name": "Jane Prayoga",
    "membership": "Gold",
    "email": "nugrohowisnu@yahoo.com",
    "phone": "+62 (056) 277-9630",
    "totalTransactions": 70,
    "totalSpent": 6912360,
    "lastTransactionDate": "2025-03-22"
  },
  {
    "id": 107,
    "name": "Ophelia Pratama",
    "membership": "Regular",
    "email": "purwantimariadi@yahoo.com",
    "phone": "+62 (667) 664 0473",
    "totalTransactions": 100,
    "totalSpent": 13179800,
    "lastTransactionDate": "2025-02-25"
  },
  {
    "id": 108,
    "name": "Reza Gunawan, S.Pd",
    "membership": "Gold",
    "email": "kprasetya@gmail.com",
    "phone": "0831995298",
    "totalTransactions": 81,
    "totalSpent": 4680423,
    "lastTransactionDate": "2025-03-06"
  },
  {
    "id": 109,
    "name": "Ayu Wibowo, S.Pt",
    "membership": "Platinum",
    "email": "intan10@hotmail.com",
    "phone": "+62-583-286-3425",
    "totalTransactions": 9,
    "totalSpent": 1169793,
    "lastTransactionDate": "2025-01-03"
  },
  {
    "id": 110,
    "name": "Gasti Puspasari",
    "membership": "Platinum",
    "email": "firgantoroarta@perum.net.id",
    "phone": "+62-024-403-3041",
    "totalTransactions": 38,
    "totalSpent": 2388110,
    "lastTransactionDate": "2025-03-05"
  },
  {
    "id": 111,
    "name": "dr. Marwata Wacana, S.E.I",
    "membership": "Silver",
    "email": "hutagalungcakrajiya@hotmail.com",
    "phone": "(000) 892-1963",
    "totalTransactions": 26,
    "totalSpent": 545610,
    "lastTransactionDate": "2025-06-06"
  },
  {
    "id": 112,
    "name": "Tgk. Violet Sinaga",
    "membership": "Regular",
    "email": "sihombingkuncara@yahoo.com",
    "phone": "+62-149-764-6136",
    "totalTransactions": 40,
    "totalSpent": 5804160,
    "lastTransactionDate": "2025-06-10"
  },
  {
    "id": 113,
    "name": "Novi Suryono",
    "membership": "Silver",
    "email": "fbudiyanto@ud.id",
    "phone": "+62-63-757-9145",
    "totalTransactions": 70,
    "totalSpent": 9386860,
    "lastTransactionDate": "2025-04-18"
  },
  {
    "id": 114,
    "name": "Ir. Bakda Kuswoyo, M.Pd",
    "membership": "Silver",
    "email": "anarahayu@pt.web.id",
    "phone": "(0893) 074-6452",
    "totalTransactions": 5,
    "totalSpent": 300480,
    "lastTransactionDate": "2025-01-27"
  },
  {
    "id": 115,
    "name": "Shakila Pratiwi",
    "membership": "Silver",
    "email": "santosoyance@gmail.com",
    "phone": "0878753577",
    "totalTransactions": 46,
    "totalSpent": 1036426,
    "lastTransactionDate": "2025-01-07"
  },
  {
    "id": 116,
    "name": "H. Oskar Hutapea",
    "membership": "Silver",
    "email": "yhutagalung@pt.int",
    "phone": "+62 (37) 106-7287",
    "totalTransactions": 35,
    "totalSpent": 1492050,
    "lastTransactionDate": "2025-04-09"
  },
  {
    "id": 117,
    "name": "Pia Andriani, S.Sos",
    "membership": "Regular",
    "email": "daryani64@perum.sch.id",
    "phone": "+62 (24) 839-5894",
    "totalTransactions": 56,
    "totalSpent": 6432328,
    "lastTransactionDate": "2025-01-27"
  },
  {
    "id": 118,
    "name": "Fathonah Sitompul",
    "membership": "Gold",
    "email": "elikusmawati@ud.gov",
    "phone": "+62 (71) 043 3187",
    "totalTransactions": 50,
    "totalSpent": 4943800,
    "lastTransactionDate": "2025-04-01"
  },
  {
    "id": 119,
    "name": "Aswani Oktaviani",
    "membership": "Silver",
    "email": "cahyantotampubolon@hotmail.com",
    "phone": "0835034469",
    "totalTransactions": 64,
    "totalSpent": 8987008,
    "lastTransactionDate": "2025-03-05"
  },
  {
    "id": 120,
    "name": "Kartika Oktaviani",
    "membership": "Platinum",
    "email": "iriana83@gmail.com",
    "phone": "+62 (13) 424 9128",
    "totalTransactions": 67,
    "totalSpent": 5354573,
    "lastTransactionDate": "2025-05-21"
  },
  {
    "id": 121,
    "name": "Pranata Winarno, S.Psi",
    "membership": "Platinum",
    "email": "kpranowo@gmail.com",
    "phone": "+62-0319-222-7051",
    "totalTransactions": 94,
    "totalSpent": 11400320,
    "lastTransactionDate": "2025-04-24"
  },
  {
    "id": 122,
    "name": "Cahyo Melani",
    "membership": "Silver",
    "email": "ewidiastuti@yahoo.com",
    "phone": "+62 (0813) 866-6754",
    "totalTransactions": 56,
    "totalSpent": 3209080,
    "lastTransactionDate": "2025-06-22"
  },
  {
    "id": 123,
    "name": "Tgk. Karta Hutapea",
    "membership": "Platinum",
    "email": "rahmisetiawan@pd.net.id",
    "phone": "+62 (0186) 520 5756",
    "totalTransactions": 42,
    "totalSpent": 1549590,
    "lastTransactionDate": "2025-06-11"
  },
  {
    "id": 124,
    "name": "Drs. Fitriani Wibowo",
    "membership": "Silver",
    "email": "ajimatnapitupulu@yahoo.com",
    "phone": "+62 (830) 945-1548",
    "totalTransactions": 42,
    "totalSpent": 3675000,
    "lastTransactionDate": "2025-02-10"
  },
  {
    "id": 125,
    "name": "Luluh Saputra",
    "membership": "Gold",
    "email": "suci76@ud.org",
    "phone": "+62-79-772-7810",
    "totalTransactions": 58,
    "totalSpent": 7058774,
    "lastTransactionDate": "2025-06-27"
  },
  {
    "id": 126,
    "name": "Luwar Mangunsong",
    "membership": "Silver",
    "email": "caturandriani@pt.org",
    "phone": "+62 (184) 390 5529",
    "totalTransactions": 89,
    "totalSpent": 11246663,
    "lastTransactionDate": "2025-03-12"
  },
  {
    "id": 127,
    "name": "Padma Budiman",
    "membership": "Silver",
    "email": "qwidiastuti@gmail.com",
    "phone": "+62 (038) 241 2704",
    "totalTransactions": 58,
    "totalSpent": 1223974,
    "lastTransactionDate": "2025-05-20"
  },
  {
    "id": 128,
    "name": "Malik Mayasari",
    "membership": "Silver",
    "email": "rahmiadriansyah@yahoo.com",
    "phone": "+62 (0851) 579 1971",
    "totalTransactions": 79,
    "totalSpent": 9797343,
    "lastTransactionDate": "2025-04-28"
  },
  {
    "id": 129,
    "name": "Cemplunk Irawan",
    "membership": "Platinum",
    "email": "maya02@cv.desa.id",
    "phone": "(0134) 324 0642",
    "totalTransactions": 82,
    "totalSpent": 2052952,
    "lastTransactionDate": "2025-01-22"
  },
  {
    "id": 130,
    "name": "Karya Sihotang",
    "membership": "Silver",
    "email": "harimurtisaputra@gmail.com",
    "phone": "+62 (44) 741-7595",
    "totalTransactions": 86,
    "totalSpent": 10017710,
    "lastTransactionDate": "2025-02-23"
  },
  {
    "id": 131,
    "name": "Ir. Karman Hartati, S.E.",
    "membership": "Platinum",
    "email": "imangunsong@pd.biz.id",
    "phone": "+62-588-418-3437",
    "totalTransactions": 66,
    "totalSpent": 3427974,
    "lastTransactionDate": "2025-03-08"
  },
  {
    "id": 132,
    "name": "Virman Latupono",
    "membership": "Platinum",
    "email": "dmandala@ud.sch.id",
    "phone": "+62-051-502-6755",
    "totalTransactions": 19,
    "totalSpent": 2372416,
    "lastTransactionDate": "2025-02-19"
  },
  {
    "id": 133,
    "name": "Cengkir Tamba",
    "membership": "Gold",
    "email": "warjipalastri@gmail.com",
    "phone": "+62-79-799-6673",
    "totalTransactions": 17,
    "totalSpent": 469608,
    "lastTransactionDate": "2025-05-05"
  },
  {
    "id": 134,
    "name": "Kasiyah Rahimah, S.Psi",
    "membership": "Silver",
    "email": "csalahudin@gmail.com",
    "phone": "081 664 9690",
    "totalTransactions": 100,
    "totalSpent": 10603000,
    "lastTransactionDate": "2025-02-18"
  },
  {
    "id": 135,
    "name": "R.M. Virman Salahudin",
    "membership": "Gold",
    "email": "elonwijayanti@pt.edu",
    "phone": "+62 (762) 702-3244",
    "totalTransactions": 50,
    "totalSpent": 924450,
    "lastTransactionDate": "2025-01-31"
  },
  {
    "id": 136,
    "name": "Daryani Putra",
    "membership": "Silver",
    "email": "prasastagaiman@hotmail.com",
    "phone": "0850725178",
    "totalTransactions": 87,
    "totalSpent": 11131128,
    "lastTransactionDate": "2025-01-15"
  },
  {
    "id": 137,
    "name": "Tami Prabowo",
    "membership": "Platinum",
    "email": "thariyah@gmail.com",
    "phone": "+62 (062) 526-5469",
    "totalTransactions": 48,
    "totalSpent": 6066048,
    "lastTransactionDate": "2025-05-13"
  },
  {
    "id": 138,
    "name": "R. Ganjaran Lestari",
    "membership": "Silver",
    "email": "ophelianugroho@ud.or.id",
    "phone": "+62-99-613-2730",
    "totalTransactions": 74,
    "totalSpent": 3411030,
    "lastTransactionDate": "2025-03-17"
  },
  {
    "id": 139,
    "name": "Maya Iswahyudi",
    "membership": "Silver",
    "email": "lyolanda@yahoo.com",
    "phone": "+62 (44) 670 4622",
    "totalTransactions": 51,
    "totalSpent": 4713114,
    "lastTransactionDate": "2025-02-10"
  },
  {
    "id": 140,
    "name": "Kariman Kurniawan, M.M.",
    "membership": "Platinum",
    "email": "yulia16@cv.edu",
    "phone": "086 707 6604",
    "totalTransactions": 32,
    "totalSpent": 1271648,
    "lastTransactionDate": "2025-03-18"
  },
  {
    "id": 141,
    "name": "Ulya Usada",
    "membership": "Regular",
    "email": "xmardhiyah@ud.gov",
    "phone": "(086) 120-5943",
    "totalTransactions": 95,
    "totalSpent": 5583245,
    "lastTransactionDate": "2025-03-23"
  },
  {
    "id": 142,
    "name": "Ir. Titi Hasanah, S.Farm",
    "membership": "Platinum",
    "email": "csuryono@pd.desa.id",
    "phone": "+62-095-465-4084",
    "totalTransactions": 67,
    "totalSpent": 7466882,
    "lastTransactionDate": "2025-04-09"
  },
  {
    "id": 143,
    "name": "Kani Agustina",
    "membership": "Regular",
    "email": "tsimbolon@perum.desa.id",
    "phone": "+62-086-321-8122",
    "totalTransactions": 34,
    "totalSpent": 2659922,
    "lastTransactionDate": "2025-02-03"
  },
  {
    "id": 144,
    "name": "Mala Saefullah",
    "membership": "Regular",
    "email": "psafitri@hotmail.com",
    "phone": "089 701 5502",
    "totalTransactions": 28,
    "totalSpent": 2376136,
    "lastTransactionDate": "2025-05-02"
  },
  {
    "id": 145,
    "name": "Suci Januar, S.Sos",
    "membership": "Gold",
    "email": "raina46@pt.mil.id",
    "phone": "+62 (039) 449-8830",
    "totalTransactions": 26,
    "totalSpent": 1095848,
    "lastTransactionDate": "2025-04-28"
  },
  {
    "id": 146,
    "name": "Dr. Gasti Fujiati",
    "membership": "Gold",
    "email": "kadirmardhiyah@hotmail.com",
    "phone": "+62-096-244-0630",
    "totalTransactions": 10,
    "totalSpent": 1285000,
    "lastTransactionDate": "2025-03-13"
  },
  {
    "id": 147,
    "name": "Sakura Mustofa",
    "membership": "Platinum",
    "email": "wahyu95@gmail.com",
    "phone": "+62-0305-319-4979",
    "totalTransactions": 92,
    "totalSpent": 11654836,
    "lastTransactionDate": "2025-05-31"
  },
  {
    "id": 148,
    "name": "Legawa Sitompul, M.Pd",
    "membership": "Silver",
    "email": "apuspita@yahoo.com",
    "phone": "+62 (557) 277 3826",
    "totalTransactions": 88,
    "totalSpent": 8252464,
    "lastTransactionDate": "2025-03-22"
  },
  {
    "id": 149,
    "name": "Ami Wijayanti",
    "membership": "Silver",
    "email": "wpurwanti@cv.desa.id",
    "phone": "+62 (0457) 702-9929",
    "totalTransactions": 91,
    "totalSpent": 2459093,
    "lastTransactionDate": "2025-02-18"
  },
  {
    "id": 150,
    "name": "drg. Lidya Damanik",
    "membership": "Gold",
    "email": "yprakasa@hotmail.com",
    "phone": "+62 (69) 116 3319",
    "totalTransactions": 39,
    "totalSpent": 2000271,
    "lastTransactionDate": "2025-03-09"
  },
  {
    "id": 151,
    "name": "Saka Manullang",
    "membership": "Gold",
    "email": "wthamrin@gmail.com",
    "phone": "(094) 551-5888",
    "totalTransactions": 47,
    "totalSpent": 6738249,
    "lastTransactionDate": "2025-02-25"
  },
  {
    "id": 152,
    "name": "Sidiq Waskita",
    "membership": "Gold",
    "email": "csuwarno@gmail.com",
    "phone": "+62 (64) 085-7216",
    "totalTransactions": 16,
    "totalSpent": 1002960,
    "lastTransactionDate": "2025-03-17"
  },
  {
    "id": 153,
    "name": "Hari Andriani, S.Farm",
    "membership": "Platinum",
    "email": "safitriikin@perum.net",
    "phone": "(005) 932-9715",
    "totalTransactions": 31,
    "totalSpent": 4324624,
    "lastTransactionDate": "2025-04-22"
  },
  {
    "id": 154,
    "name": "Rahayu Yolanda, S.Sos",
    "membership": "Regular",
    "email": "vinsenuwais@cv.co.id",
    "phone": "+62 (41) 039 7739",
    "totalTransactions": 47,
    "totalSpent": 5015229,
    "lastTransactionDate": "2025-01-04"
  },
  {
    "id": 155,
    "name": "Raden Nugroho",
    "membership": "Platinum",
    "email": "suartinimujur@gmail.com",
    "phone": "+62-0710-068-7616",
    "totalTransactions": 71,
    "totalSpent": 3125278,
    "lastTransactionDate": "2025-03-27"
  },
  {
    "id": 156,
    "name": "Paulin Lazuardi, M.Ak",
    "membership": "Regular",
    "email": "ulaksmiwati@ud.org",
    "phone": "+62 (687) 611-2491",
    "totalTransactions": 9,
    "totalSpent": 819702,
    "lastTransactionDate": "2025-02-19"
  },
  {
    "id": 157,
    "name": "Ghani Zulkarnain",
    "membership": "Regular",
    "email": "jayenglaksmiwati@gmail.com",
    "phone": "+62 (0151) 773 4547",
    "totalTransactions": 92,
    "totalSpent": 12464068,
    "lastTransactionDate": "2025-05-20"
  },
  {
    "id": 158,
    "name": "drg. Naradi Rajata, M.Farm",
    "membership": "Platinum",
    "email": "mandalaega@hotmail.com",
    "phone": "+62 (0035) 954-4294",
    "totalTransactions": 99,
    "totalSpent": 11615670,
    "lastTransactionDate": "2025-03-05"
  },
  {
    "id": 159,
    "name": "Maida Wulandari, S.Pd",
    "membership": "Platinum",
    "email": "emilsudiati@pd.com",
    "phone": "+62-942-904-5886",
    "totalTransactions": 17,
    "totalSpent": 1582802,
    "lastTransactionDate": "2025-04-02"
  },
  {
    "id": 160,
    "name": "R. Jelita Yuniar",
    "membership": "Silver",
    "email": "elisa56@cv.net.id",
    "phone": "(001) 534 3324",
    "totalTransactions": 58,
    "totalSpent": 7662670,
    "lastTransactionDate": "2025-04-02"
  },
  {
    "id": 161,
    "name": "H. Paiman Lazuardi, S.Kom",
    "membership": "Gold",
    "email": "kharyanti@hotmail.com",
    "phone": "+62-83-350-6158",
    "totalTransactions": 17,
    "totalSpent": 980900,
    "lastTransactionDate": "2025-04-28"
  },
  {
    "id": 162,
    "name": "Puspa Nasyidah",
    "membership": "Platinum",
    "email": "hassanahjessica@cv.id",
    "phone": "+62-0720-948-4131",
    "totalTransactions": 56,
    "totalSpent": 7942032,
    "lastTransactionDate": "2025-01-13"
  },
  {
    "id": 163,
    "name": "Karman Sihombing",
    "membership": "Gold",
    "email": "jagaprasasta@pd.co.id",
    "phone": "+62 (037) 171 7318",
    "totalTransactions": 16,
    "totalSpent": 2333072,
    "lastTransactionDate": "2025-06-24"
  },
  {
    "id": 164,
    "name": "Liman Laksita",
    "membership": "Gold",
    "email": "prastutisatya@gmail.com",
    "phone": "(0399) 704 6947",
    "totalTransactions": 39,
    "totalSpent": 2073357,
    "lastTransactionDate": "2025-04-24"
  },
  {
    "id": 165,
    "name": "Gambira Mayasari",
    "membership": "Silver",
    "email": "sadina44@hotmail.com",
    "phone": "+62-0548-847-1270",
    "totalTransactions": 42,
    "totalSpent": 2902410,
    "lastTransactionDate": "2025-05-02"
  },
  {
    "id": 166,
    "name": "drg. Jumari Marpaung",
    "membership": "Platinum",
    "email": "astutivanesa@pt.ponpes.id",
    "phone": "+62 (31) 334-8458",
    "totalTransactions": 67,
    "totalSpent": 5658887,
    "lastTransactionDate": "2025-03-02"
  },
  {
    "id": 167,
    "name": "Mahdi Salahudin",
    "membership": "Silver",
    "email": "marsudimanullang@pd.web.id",
    "phone": "+62 (58) 796-4347",
    "totalTransactions": 33,
    "totalSpent": 2028147,
    "lastTransactionDate": "2025-04-01"
  },
  {
    "id": 168,
    "name": "Tgk. Kartika Maulana, S.Pd",
    "membership": "Platinum",
    "email": "lasmono74@yahoo.com",
    "phone": "(060) 606 5274",
    "totalTransactions": 17,
    "totalSpent": 1519511,
    "lastTransactionDate": "2025-06-30"
  },
  {
    "id": 169,
    "name": "R.A. Fathonah Wijayanti, S.T.",
    "membership": "Gold",
    "email": "asirwada56@yahoo.com",
    "phone": "+62 (883) 398 7411",
    "totalTransactions": 65,
    "totalSpent": 3523390,
    "lastTransactionDate": "2025-01-03"
  },
  {
    "id": 170,
    "name": "Gamani Kuswandari",
    "membership": "Platinum",
    "email": "wahyunipurwadi@hotmail.com",
    "phone": "(0349) 960-1054",
    "totalTransactions": 22,
    "totalSpent": 2167088,
    "lastTransactionDate": "2025-02-16"
  },
  {
    "id": 171,
    "name": "Maida Suryono",
    "membership": "Platinum",
    "email": "vmansur@ud.edu",
    "phone": "+62 (94) 938 1735",
    "totalTransactions": 4,
    "totalSpent": 125168,
    "lastTransactionDate": "2025-04-14"
  },
  {
    "id": 172,
    "name": "KH. Mitra Rajata",
    "membership": "Gold",
    "email": "mandalacahya@hotmail.com",
    "phone": "+62 (573) 257 3755",
    "totalTransactions": 83,
    "totalSpent": 6588291,
    "lastTransactionDate": "2025-04-21"
  },
  {
    "id": 173,
    "name": "Niyaga Rajata, S.T.",
    "membership": "Platinum",
    "email": "digdayayuniar@pd.or.id",
    "phone": "+62-085-096-0858",
    "totalTransactions": 99,
    "totalSpent": 11801295,
    "lastTransactionDate": "2025-02-07"
  },
  {
    "id": 174,
    "name": "Ratih Sitorus",
    "membership": "Silver",
    "email": "pratiwicengkal@perum.or.id",
    "phone": "+62 (097) 931 6477",
    "totalTransactions": 64,
    "totalSpent": 5499840,
    "lastTransactionDate": "2025-04-05"
  },
  {
    "id": 175,
    "name": "Eka Yulianti, S.Psi",
    "membership": "Regular",
    "email": "salimahpermata@pd.com",
    "phone": "(094) 096 0035",
    "totalTransactions": 62,
    "totalSpent": 4599966,
    "lastTransactionDate": "2025-06-21"
  },
  {
    "id": 176,
    "name": "Eka Prasetyo",
    "membership": "Platinum",
    "email": "qyolanda@gmail.com",
    "phone": "+62 (923) 234-2108",
    "totalTransactions": 39,
    "totalSpent": 5026827,
    "lastTransactionDate": "2025-03-23"
  },
  {
    "id": 177,
    "name": "Cut Victoria Mahendra, M.Pd",
    "membership": "Gold",
    "email": "simbolonlasmono@gmail.com",
    "phone": "+62-342-643-3502",
    "totalTransactions": 89,
    "totalSpent": 2287745,
    "lastTransactionDate": "2025-04-26"
  },
  {
    "id": 178,
    "name": "Dewi Waluyo",
    "membership": "Regular",
    "email": "ypranowo@pd.go.id",
    "phone": "+62-369-112-8981",
    "totalTransactions": 57,
    "totalSpent": 6780264,
    "lastTransactionDate": "2025-06-19"
  },
  {
    "id": 179,
    "name": "Sutan Banawa Lestari, M.Ak",
    "membership": "Silver",
    "email": "radika33@gmail.com",
    "phone": "085 748 1700",
    "totalTransactions": 60,
    "totalSpent": 3808980,
    "lastTransactionDate": "2025-01-31"
  },
  {
    "id": 180,
    "name": "dr. Heru Januar, S.I.Kom",
    "membership": "Silver",
    "email": "cager64@gmail.com",
    "phone": "+62 (067) 045 0232",
    "totalTransactions": 78,
    "totalSpent": 3717558,
    "lastTransactionDate": "2025-03-14"
  },
  {
    "id": 181,
    "name": "Cagak Maryati",
    "membership": "Silver",
    "email": "zizihalimah@pt.mil",
    "phone": "+62 (0596) 262-2822",
    "totalTransactions": 92,
    "totalSpent": 8620952,
    "lastTransactionDate": "2025-04-19"
  },
  {
    "id": 182,
    "name": "Panji Marpaung",
    "membership": "Silver",
    "email": "tputra@ud.com",
    "phone": "+62-50-702-6086",
    "totalTransactions": 52,
    "totalSpent": 2302508,
    "lastTransactionDate": "2025-03-11"
  },
  {
    "id": 183,
    "name": "Drs. Ella Manullang",
    "membership": "Silver",
    "email": "tampubolonivan@pd.int",
    "phone": "(0768) 729-0477",
    "totalTransactions": 66,
    "totalSpent": 2497110,
    "lastTransactionDate": "2025-05-28"
  },
  {
    "id": 184,
    "name": "Dian Sinaga",
    "membership": "Platinum",
    "email": "kuswandariazalea@hotmail.com",
    "phone": "+62-238-223-1164",
    "totalTransactions": 31,
    "totalSpent": 4100742,
    "lastTransactionDate": "2025-06-23"
  },
  {
    "id": 185,
    "name": "Puti Hilda Prasetyo",
    "membership": "Gold",
    "email": "titinsihombing@yahoo.com",
    "phone": "(0988) 942 5652",
    "totalTransactions": 35,
    "totalSpent": 4475030,
    "lastTransactionDate": "2025-06-21"
  },
  {
    "id": 186,
    "name": "Zizi Firmansyah, S.Sos",
    "membership": "Platinum",
    "email": "galihbudiman@pt.go.id",
    "phone": "+62 (097) 753 9673",
    "totalTransactions": 19,
    "totalSpent": 672182,
    "lastTransactionDate": "2025-04-22"
  },
  {
    "id": 187,
    "name": "Tgk. Puji Farida",
    "membership": "Regular",
    "email": "talia85@cv.net.id",
    "phone": "0871584156",
    "totalTransactions": 38,
    "totalSpent": 4206676,
    "lastTransactionDate": "2025-03-29"
  },
  {
    "id": 188,
    "name": "Yoga Palastri",
    "membership": "Silver",
    "email": "pradanavinsen@pt.biz.id",
    "phone": "+62 (54) 768 1826",
    "totalTransactions": 32,
    "totalSpent": 1659648,
    "lastTransactionDate": "2025-05-04"
  },
  {
    "id": 189,
    "name": "Sutan Caket Zulaika",
    "membership": "Gold",
    "email": "napitupulunugraha@perum.org",
    "phone": "0858382521",
    "totalTransactions": 74,
    "totalSpent": 6806224,
    "lastTransactionDate": "2025-06-08"
  },
  {
    "id": 190,
    "name": "Makara Usada",
    "membership": "Regular",
    "email": "ginasuryatmi@cv.biz.id",
    "phone": "(086) 775 2401",
    "totalTransactions": 98,
    "totalSpent": 5073460,
    "lastTransactionDate": "2025-05-12"
  },
  {
    "id": 191,
    "name": "Puti Winarsih, S.Pd",
    "membership": "Regular",
    "email": "halimrizki@cv.id",
    "phone": "(026) 693 3513",
    "totalTransactions": 66,
    "totalSpent": 8736552,
    "lastTransactionDate": "2025-02-17"
  },
  {
    "id": 192,
    "name": "Tugiman Wacana",
    "membership": "Platinum",
    "email": "hendrahandayani@ud.int",
    "phone": "084 819 7374",
    "totalTransactions": 40,
    "totalSpent": 5615280,
    "lastTransactionDate": "2025-02-22"
  },
  {
    "id": 193,
    "name": "Kemba Suryatmi",
    "membership": "Regular",
    "email": "caketsiregar@yahoo.com",
    "phone": "+62-064-176-9274",
    "totalTransactions": 12,
    "totalSpent": 1357032,
    "lastTransactionDate": "2025-06-08"
  },
  {
    "id": 194,
    "name": "R. Bakidin Suartini",
    "membership": "Silver",
    "email": "titilailasari@hotmail.com",
    "phone": "(060) 144-4856",
    "totalTransactions": 31,
    "totalSpent": 2058338,
    "lastTransactionDate": "2025-02-12"
  },
  {
    "id": 195,
    "name": "Tgk. Kani Hutasoit, S.Ked",
    "membership": "Silver",
    "email": "lprasasta@cv.int",
    "phone": "(0899) 698-6091",
    "totalTransactions": 7,
    "totalSpent": 162736,
    "lastTransactionDate": "2025-05-09"
  },
  {
    "id": 196,
    "name": "Hj. Cinthia Permata, S.IP",
    "membership": "Silver",
    "email": "najamprastuti@pd.my.id",
    "phone": "080 660 3920",
    "totalTransactions": 64,
    "totalSpent": 8535104,
    "lastTransactionDate": "2025-04-24"
  },
  {
    "id": 197,
    "name": "Cinthia Siregar",
    "membership": "Platinum",
    "email": "hasanahjono@yahoo.com",
    "phone": "+62 (534) 705-7423",
    "totalTransactions": 69,
    "totalSpent": 837867,
    "lastTransactionDate": "2025-05-02"
  },
  {
    "id": 198,
    "name": "Dr. Marsudi Sinaga, S.Sos",
    "membership": "Silver",
    "email": "betaniairawan@yahoo.com",
    "phone": "+62 (983) 541-1659",
    "totalTransactions": 56,
    "totalSpent": 2526160,
    "lastTransactionDate": "2025-04-18"
  },
  {
    "id": 199,
    "name": "Cengkir Wibowo, S.Kom",
    "membership": "Regular",
    "email": "vtampubolon@yahoo.com",
    "phone": "+62 (225) 013-9488",
    "totalTransactions": 94,
    "totalSpent": 9953284,
    "lastTransactionDate": "2025-04-06"
  },
  {
    "id": 200,
    "name": "Dr. Kawaya Nugroho, S.Sos",
    "membership": "Regular",
    "email": "cengkiriswahyudi@ud.go.id",
    "phone": "+62 (61) 499 1537",
    "totalTransactions": 47,
    "totalSpent": 1027420,
    "lastTransactionDate": "2025-02-26"
  },
  {
    "id": 201,
    "name": "Dipa Pudjiastuti",
    "membership": "Silver",
    "email": "aslijan73@cv.mil",
    "phone": "+62 (04) 309 7768",
    "totalTransactions": 7,
    "totalSpent": 427189,
    "lastTransactionDate": "2025-06-09"
  },
  {
    "id": 202,
    "name": "R.A. Laras Nashiruddin",
    "membership": "Platinum",
    "email": "trajata@yahoo.com",
    "phone": "+62 (0655) 358 5125",
    "totalTransactions": 71,
    "totalSpent": 6081505,
    "lastTransactionDate": "2025-04-17"
  },
  {
    "id": 203,
    "name": "R.A. Wulan Nasyiah, M.Farm",
    "membership": "Regular",
    "email": "mayasariwawan@pt.desa.id",
    "phone": "0837490797",
    "totalTransactions": 50,
    "totalSpent": 7109350,
    "lastTransactionDate": "2025-06-15"
  },
  {
    "id": 204,
    "name": "drg. Bella Narpati",
    "membership": "Platinum",
    "email": "ppurwanti@ud.edu",
    "phone": "+62 (051) 494 0976",
    "totalTransactions": 98,
    "totalSpent": 8166046,
    "lastTransactionDate": "2025-04-06"
  },
  {
    "id": 205,
    "name": "R.M. Harto Pratama, M.M.",
    "membership": "Regular",
    "email": "mitra39@hotmail.com",
    "phone": "(028) 950-9059",
    "totalTransactions": 17,
    "totalSpent": 600848,
    "lastTransactionDate": "2025-05-16"
  },
  {
    "id": 206,
    "name": "R. Luwes Haryanto, M.TI.",
    "membership": "Silver",
    "email": "harsayaprayoga@hotmail.com",
    "phone": "+62 (20) 715-1169",
    "totalTransactions": 48,
    "totalSpent": 4746672,
    "lastTransactionDate": "2025-01-23"
  },
  {
    "id": 207,
    "name": "Harsanto Wasita, S.Sos",
    "membership": "Gold",
    "email": "mahfudnajmudin@gmail.com",
    "phone": "+62 (0526) 471-2463",
    "totalTransactions": 97,
    "totalSpent": 4638346,
    "lastTransactionDate": "2025-05-16"
  },
  {
    "id": 208,
    "name": "Septi Usada",
    "membership": "Regular",
    "email": "unggul18@pt.ponpes.id",
    "phone": "+62-051-208-0056",
    "totalTransactions": 78,
    "totalSpent": 11190114,
    "lastTransactionDate": "2025-02-13"
  },
  {
    "id": 209,
    "name": "Raharja Purnawati",
    "membership": "Platinum",
    "email": "natsirharja@hotmail.com",
    "phone": "(0283) 512-9592",
    "totalTransactions": 65,
    "totalSpent": 1335880,
    "lastTransactionDate": "2025-02-28"
  },
  {
    "id": 210,
    "name": "Tiara Nugroho",
    "membership": "Silver",
    "email": "ndabukke@perum.biz.id",
    "phone": "+62 (0152) 982-1739",
    "totalTransactions": 5,
    "totalSpent": 229615,
    "lastTransactionDate": "2025-06-22"
  },
  {
    "id": 211,
    "name": "dr. Mutia Wahyuni",
    "membership": "Regular",
    "email": "qlatupono@hotmail.com",
    "phone": "+62 (053) 523 7360",
    "totalTransactions": 61,
    "totalSpent": 8914479,
    "lastTransactionDate": "2025-01-30"
  },
  {
    "id": 212,
    "name": "Vero Kuswandari",
    "membership": "Gold",
    "email": "wijayantishakila@perum.ponpes.id",
    "phone": "+62-452-734-6666",
    "totalTransactions": 20,
    "totalSpent": 2902720,
    "lastTransactionDate": "2025-03-10"
  },
  {
    "id": 213,
    "name": "Aisyah Lestari",
    "membership": "Gold",
    "email": "iriana79@ud.or.id",
    "phone": "+62-031-499-8250",
    "totalTransactions": 42,
    "totalSpent": 3927000,
    "lastTransactionDate": "2025-01-15"
  },
  {
    "id": 214,
    "name": "Asirwada Sihombing",
    "membership": "Silver",
    "email": "niyaganasyiah@gmail.com",
    "phone": "(088) 285-0317",
    "totalTransactions": 51,
    "totalSpent": 4510542,
    "lastTransactionDate": "2025-04-13"
  },
  {
    "id": 215,
    "name": "Narji Simanjuntak",
    "membership": "Regular",
    "email": "anastasiaputra@pt.mil",
    "phone": "+62 (040) 352-6356",
    "totalTransactions": 65,
    "totalSpent": 9335170,
    "lastTransactionDate": "2025-02-05"
  },
  {
    "id": 216,
    "name": "Caket Rahimah",
    "membership": "Regular",
    "email": "surya94@ud.mil.id",
    "phone": "(064) 374-9060",
    "totalTransactions": 91,
    "totalSpent": 8061508,
    "lastTransactionDate": "2025-01-08"
  },
  {
    "id": 217,
    "name": "drg. Cagak Wijayanti, S.H.",
    "membership": "Silver",
    "email": "latuponogaliono@pt.gov",
    "phone": "+62 (0648) 449 4116",
    "totalTransactions": 3,
    "totalSpent": 319686,
    "lastTransactionDate": "2025-05-15"
  },
  {
    "id": 218,
    "name": "Wasis Irawan",
    "membership": "Regular",
    "email": "dodomaryati@gmail.com",
    "phone": "(0711) 306-2113",
    "totalTransactions": 87,
    "totalSpent": 3369684,
    "lastTransactionDate": "2025-06-08"
  },
  {
    "id": 219,
    "name": "dr. Maida Megantara",
    "membership": "Platinum",
    "email": "wijayantichelsea@gmail.com",
    "phone": "+62-509-025-4257",
    "totalTransactions": 75,
    "totalSpent": 6799125,
    "lastTransactionDate": "2025-03-25"
  },
  {
    "id": 220,
    "name": "Asman Wijaya, S.Sos",
    "membership": "Silver",
    "email": "cornelia13@cv.my.id",
    "phone": "+62-71-398-4822",
    "totalTransactions": 77,
    "totalSpent": 10349570,
    "lastTransactionDate": "2025-02-07"
  },
  {
    "id": 221,
    "name": "Amelia Kusumo",
    "membership": "Platinum",
    "email": "imaryati@perum.co.id",
    "phone": "+62 (021) 306-0906",
    "totalTransactions": 84,
    "totalSpent": 5850516,
    "lastTransactionDate": "2025-04-16"
  },
  {
    "id": 222,
    "name": "Puti Zamira Prasetyo",
    "membership": "Gold",
    "email": "damaniksalwa@perum.web.id",
    "phone": "(073) 794 5772",
    "totalTransactions": 75,
    "totalSpent": 10195950,
    "lastTransactionDate": "2025-05-29"
  },
  {
    "id": 223,
    "name": "Tgk. Darmana Megantara",
    "membership": "Gold",
    "email": "prayogarajasa@gmail.com",
    "phone": "+62 (064) 207-6836",
    "totalTransactions": 68,
    "totalSpent": 7457152,
    "lastTransactionDate": "2025-03-29"
  },
  {
    "id": 224,
    "name": "Hj. Kamila Pranowo, S.Sos",
    "membership": "Platinum",
    "email": "uharyanti@yahoo.com",
    "phone": "(0675) 556 2833",
    "totalTransactions": 88,
    "totalSpent": 6467120,
    "lastTransactionDate": "2025-01-24"
  },
  {
    "id": 225,
    "name": "Fitriani Purnawati, S.Kom",
    "membership": "Gold",
    "email": "wpudjiastuti@yahoo.com",
    "phone": "+62 (436) 271-8749",
    "totalTransactions": 74,
    "totalSpent": 2871792,
    "lastTransactionDate": "2025-02-11"
  },
  {
    "id": 226,
    "name": "Daliono Pratama",
    "membership": "Silver",
    "email": "titinwinarno@hotmail.com",
    "phone": "(027) 036-9249",
    "totalTransactions": 3,
    "totalSpent": 376845,
    "lastTransactionDate": "2025-03-21"
  },
  {
    "id": 227,
    "name": "Maras Wacana",
    "membership": "Regular",
    "email": "ridwansimanjuntak@cv.web.id",
    "phone": "080 111 0005",
    "totalTransactions": 54,
    "totalSpent": 2683584,
    "lastTransactionDate": "2025-05-29"
  },
  {
    "id": 228,
    "name": "Galar Tamba",
    "membership": "Regular",
    "email": "irsadsamosir@ud.co.id",
    "phone": "(0752) 441 8222",
    "totalTransactions": 89,
    "totalSpent": 5646872,
    "lastTransactionDate": "2025-06-14"
  },
  {
    "id": 229,
    "name": "Kasiran Safitri",
    "membership": "Platinum",
    "email": "jamaliapuspasari@hotmail.com",
    "phone": "(0431) 271-0267",
    "totalTransactions": 65,
    "totalSpent": 8685820,
    "lastTransactionDate": "2025-03-21"
  },
  {
    "id": 230,
    "name": "Ella Damanik",
    "membership": "Gold",
    "email": "kpadmasari@gmail.com",
    "phone": "(0079) 551 5122",
    "totalTransactions": 91,
    "totalSpent": 4203927,
    "lastTransactionDate": "2025-03-14"
  },
  {
    "id": 231,
    "name": "Shania Wijaya",
    "membership": "Regular",
    "email": "winarsihhartana@ud.web.id",
    "phone": "(0099) 625-4384",
    "totalTransactions": 72,
    "totalSpent": 6855048,
    "lastTransactionDate": "2025-05-01"
  },
  {
    "id": 232,
    "name": "Jindra Simanjuntak",
    "membership": "Silver",
    "email": "yuliantijati@ud.co.id",
    "phone": "+62-047-158-0290",
    "totalTransactions": 68,
    "totalSpent": 7397176,
    "lastTransactionDate": "2025-04-11"
  },
  {
    "id": 233,
    "name": "Cut Ilsa Wibowo",
    "membership": "Silver",
    "email": "ywibowo@ud.co.id",
    "phone": "+62 (866) 525-4837",
    "totalTransactions": 23,
    "totalSpent": 3001454,
    "lastTransactionDate": "2025-05-22"
  },
  {
    "id": 234,
    "name": "Chelsea Hartati",
    "membership": "Silver",
    "email": "cici10@pt.gov",
    "phone": "+62 (129) 311-0059",
    "totalTransactions": 70,
    "totalSpent": 7201180,
    "lastTransactionDate": "2025-02-23"
  },
  {
    "id": 235,
    "name": "Lamar Utami",
    "membership": "Gold",
    "email": "titi19@gmail.com",
    "phone": "+62-023-121-1063",
    "totalTransactions": 79,
    "totalSpent": 10816996,
    "lastTransactionDate": "2025-01-13"
  },
  {
    "id": 236,
    "name": "Nasim Hutapea",
    "membership": "Silver",
    "email": "queen83@yahoo.com",
    "phone": "+62-792-749-0728",
    "totalTransactions": 32,
    "totalSpent": 2660448,
    "lastTransactionDate": "2025-02-09"
  },
  {
    "id": 237,
    "name": "Cecep Napitupulu",
    "membership": "Silver",
    "email": "halimapermata@gmail.com",
    "phone": "+62 (013) 253-2694",
    "totalTransactions": 29,
    "totalSpent": 2552493,
    "lastTransactionDate": "2025-01-01"
  },
  {
    "id": 238,
    "name": "Ophelia Uyainah",
    "membership": "Regular",
    "email": "simonramadan@yahoo.com",
    "phone": "+62-0804-421-0175",
    "totalTransactions": 91,
    "totalSpent": 5854576,
    "lastTransactionDate": "2025-04-26"
  },
  {
    "id": 239,
    "name": "Almira Safitri, S.Farm",
    "membership": "Silver",
    "email": "vbudiman@ud.desa.id",
    "phone": "+62 (094) 575 7574",
    "totalTransactions": 41,
    "totalSpent": 5566857,
    "lastTransactionDate": "2025-06-24"
  },
  {
    "id": 240,
    "name": "Iriana Palastri",
    "membership": "Silver",
    "email": "lilinarpati@ud.my.id",
    "phone": "(0567) 772 2660",
    "totalTransactions": 72,
    "totalSpent": 5881320,
    "lastTransactionDate": "2025-05-28"
  },
  {
    "id": 241,
    "name": "Pandu Simanjuntak",
    "membership": "Regular",
    "email": "raharjautama@gmail.com",
    "phone": "(022) 923-1067",
    "totalTransactions": 16,
    "totalSpent": 1752544,
    "lastTransactionDate": "2025-06-18"
  },
  {
    "id": 242,
    "name": "Jessica Napitupulu",
    "membership": "Silver",
    "email": "kwijaya@perum.mil",
    "phone": "(0976) 627-0511",
    "totalTransactions": 45,
    "totalSpent": 2177865,
    "lastTransactionDate": "2025-01-29"
  },
  {
    "id": 243,
    "name": "Natalia Sudiati, S.Pd",
    "membership": "Platinum",
    "email": "dalimalailasari@pd.biz.id",
    "phone": "+62 (54) 969-1928",
    "totalTransactions": 6,
    "totalSpent": 512400,
    "lastTransactionDate": "2025-03-03"
  },
  {
    "id": 244,
    "name": "Tari Wahyudin",
    "membership": "Silver",
    "email": "julia71@pd.mil.id",
    "phone": "+62-0353-574-8595",
    "totalTransactions": 45,
    "totalSpent": 5668470,
    "lastTransactionDate": "2025-02-23"
  },
  {
    "id": 245,
    "name": "Umay Mahendra",
    "membership": "Gold",
    "email": "maimunahsuryatmi@gmail.com",
    "phone": "+62-0797-058-1629",
    "totalTransactions": 96,
    "totalSpent": 13016352,
    "lastTransactionDate": "2025-05-15"
  },
  {
    "id": 246,
    "name": "Karsana Lestari",
    "membership": "Silver",
    "email": "cahyanto76@gmail.com",
    "phone": "+62 (0250) 733 0559",
    "totalTransactions": 26,
    "totalSpent": 2107950,
    "lastTransactionDate": "2025-03-03"
  },
  {
    "id": 247,
    "name": "R.M. Purwanto Saputra",
    "membership": "Gold",
    "email": "msihotang@hotmail.com",
    "phone": "+62-399-140-3884",
    "totalTransactions": 18,
    "totalSpent": 695394,
    "lastTransactionDate": "2025-04-03"
  },
  {
    "id": 248,
    "name": "dr. Indra Anggriawan, S.Pd",
    "membership": "Gold",
    "email": "edwardsihombing@gmail.com",
    "phone": "+62-61-572-7682",
    "totalTransactions": 32,
    "totalSpent": 745824,
    "lastTransactionDate": "2025-02-17"
  },
  {
    "id": 249,
    "name": "Vanya Sihotang",
    "membership": "Platinum",
    "email": "viktor43@ud.co.id",
    "phone": "+62-10-587-5256",
    "totalTransactions": 82,
    "totalSpent": 5824952,
    "lastTransactionDate": "2025-04-25"
  },
  {
    "id": 250,
    "name": "Lutfan Fujiati",
    "membership": "Silver",
    "email": "unugroho@hotmail.com",
    "phone": "+62-045-990-8027",
    "totalTransactions": 13,
    "totalSpent": 1538472,
    "lastTransactionDate": "2025-04-16"
  },
  {
    "id": 251,
    "name": "Cahyono Maryadi",
    "membership": "Platinum",
    "email": "jarwadiiswahyudi@ud.mil.id",
    "phone": "+62 (176) 808 6628",
    "totalTransactions": 92,
    "totalSpent": 12313004,
    "lastTransactionDate": "2025-01-12"
  },
  {
    "id": 252,
    "name": "Rahmat Pranowo",
    "membership": "Platinum",
    "email": "darurajata@gmail.com",
    "phone": "+62-0080-037-0033",
    "totalTransactions": 88,
    "totalSpent": 4051168,
    "lastTransactionDate": "2025-06-08"
  },
  {
    "id": 253,
    "name": "R. Olivia Simanjuntak, S.Psi",
    "membership": "Regular",
    "email": "gbudiyanto@yahoo.com",
    "phone": "(0068) 103-9033",
    "totalTransactions": 71,
    "totalSpent": 3649613,
    "lastTransactionDate": "2025-01-29"
  },
  {
    "id": 254,
    "name": "Agnes Tampubolon",
    "membership": "Regular",
    "email": "cici26@cv.web.id",
    "phone": "+62 (0485) 862-3945",
    "totalTransactions": 84,
    "totalSpent": 11314884,
    "lastTransactionDate": "2025-04-23"
  },
  {
    "id": 255,
    "name": "Hana Wijaya",
    "membership": "Silver",
    "email": "unggul07@cv.go.id",
    "phone": "+62 (033) 943-9457",
    "totalTransactions": 84,
    "totalSpent": 5232024,
    "lastTransactionDate": "2025-02-07"
  },
  {
    "id": 256,
    "name": "Luis Pradana, M.Farm",
    "membership": "Platinum",
    "email": "calistadongoran@yahoo.com",
    "phone": "+62-32-537-6576",
    "totalTransactions": 42,
    "totalSpent": 3562398,
    "lastTransactionDate": "2025-01-10"
  },
  {
    "id": 257,
    "name": "R.M. Viman Lestari, M.Kom.",
    "membership": "Gold",
    "email": "chandrasusanti@gmail.com",
    "phone": "+62-09-004-0476",
    "totalTransactions": 99,
    "totalSpent": 3311649,
    "lastTransactionDate": "2025-04-26"
  },
  {
    "id": 258,
    "name": "R. Cinta Habibi",
    "membership": "Gold",
    "email": "safinanainggolan@yahoo.com",
    "phone": "+62 (146) 040-1424",
    "totalTransactions": 69,
    "totalSpent": 1364613,
    "lastTransactionDate": "2025-05-21"
  },
  {
    "id": 259,
    "name": "Sutan Banawa Usada, S.Ked",
    "membership": "Platinum",
    "email": "alambanakusumo@gmail.com",
    "phone": "+62-0798-440-9712",
    "totalTransactions": 54,
    "totalSpent": 3028374,
    "lastTransactionDate": "2025-03-29"
  },
  {
    "id": 260,
    "name": "Hasta Wastuti",
    "membership": "Gold",
    "email": "firgantoroalmira@yahoo.com",
    "phone": "(0620) 901 4473",
    "totalTransactions": 51,
    "totalSpent": 7132911,
    "lastTransactionDate": "2025-02-10"
  },
  {
    "id": 261,
    "name": "Aisyah Winarsih",
    "membership": "Platinum",
    "email": "jarwadihassanah@gmail.com",
    "phone": "+62-096-873-0451",
    "totalTransactions": 96,
    "totalSpent": 8244672,
    "lastTransactionDate": "2025-06-04"
  },
  {
    "id": 262,
    "name": "Mutia Halimah",
    "membership": "Platinum",
    "email": "tiara58@ud.mil.id",
    "phone": "+62 (96) 575-4278",
    "totalTransactions": 2,
    "totalSpent": 176442,
    "lastTransactionDate": "2025-04-26"
  },
  {
    "id": 263,
    "name": "Mala Irawan",
    "membership": "Regular",
    "email": "mulyatamba@hotmail.com",
    "phone": "(0782) 058 2958",
    "totalTransactions": 43,
    "totalSpent": 3637628,
    "lastTransactionDate": "2025-03-20"
  },
  {
    "id": 264,
    "name": "R. Zizi Pertiwi, S.E.I",
    "membership": "Regular",
    "email": "ahutapea@perum.org",
    "phone": "081 904 8235",
    "totalTransactions": 83,
    "totalSpent": 12238018,
    "lastTransactionDate": "2025-05-02"
  },
  {
    "id": 265,
    "name": "Gamani Wahyudin",
    "membership": "Regular",
    "email": "kprasetya@yahoo.com",
    "phone": "(013) 723-0817",
    "totalTransactions": 18,
    "totalSpent": 2559168,
    "lastTransactionDate": "2025-04-04"
  },
  {
    "id": 266,
    "name": "Marsito Samosir",
    "membership": "Platinum",
    "email": "nsihombing@cv.com",
    "phone": "+62-41-321-1471",
    "totalTransactions": 35,
    "totalSpent": 2119040,
    "lastTransactionDate": "2025-01-28"
  },
  {
    "id": 267,
    "name": "Salimah Waskita",
    "membership": "Regular",
    "email": "mahfud65@ud.sch.id",
    "phone": "(0990) 707-5504",
    "totalTransactions": 43,
    "totalSpent": 2261628,
    "lastTransactionDate": "2025-03-22"
  },
  {
    "id": 268,
    "name": "Zelda Winarno",
    "membership": "Gold",
    "email": "nrahmawati@pd.org",
    "phone": "(0174) 811-3176",
    "totalTransactions": 83,
    "totalSpent": 6427520,
    "lastTransactionDate": "2025-05-16"
  },
  {
    "id": 269,
    "name": "Halima Suartini",
    "membership": "Silver",
    "email": "sinagalukman@hotmail.com",
    "phone": "(0396) 102 9087",
    "totalTransactions": 2,
    "totalSpent": 196742,
    "lastTransactionDate": "2025-05-25"
  },
  {
    "id": 270,
    "name": "R.M. Jaiman Saefullah",
    "membership": "Gold",
    "email": "ramadanlaras@gmail.com",
    "phone": "087 274 2049",
    "totalTransactions": 73,
    "totalSpent": 4426428,
    "lastTransactionDate": "2025-01-13"
  },
  {
    "id": 271,
    "name": "Carla Mangunsong",
    "membership": "Regular",
    "email": "yogalaksita@pt.gov",
    "phone": "(004) 235 9737",
    "totalTransactions": 79,
    "totalSpent": 9187384,
    "lastTransactionDate": "2025-03-05"
  },
  {
    "id": 272,
    "name": "Calista Januar, S.E.",
    "membership": "Platinum",
    "email": "nurulpratiwi@pd.desa.id",
    "phone": "(008) 581-6704",
    "totalTransactions": 66,
    "totalSpent": 6333624,
    "lastTransactionDate": "2025-06-05"
  },
  {
    "id": 273,
    "name": "H. Indra Hidayat",
    "membership": "Gold",
    "email": "saptonotiti@pd.edu",
    "phone": "+62 (002) 192-3785",
    "totalTransactions": 52,
    "totalSpent": 1820208,
    "lastTransactionDate": "2025-03-25"
  },
  {
    "id": 274,
    "name": "Natalia Hidayat",
    "membership": "Silver",
    "email": "jlatupono@cv.edu",
    "phone": "+62 (0260) 508-0184",
    "totalTransactions": 18,
    "totalSpent": 2432898,
    "lastTransactionDate": "2025-04-18"
  },
  {
    "id": 275,
    "name": "Dt. Gadang Mandala",
    "membership": "Silver",
    "email": "yosefprabowo@gmail.com",
    "phone": "(0773) 126-8812",
    "totalTransactions": 32,
    "totalSpent": 377280,
    "lastTransactionDate": "2025-04-23"
  },
  {
    "id": 276,
    "name": "Sidiq Melani",
    "membership": "Regular",
    "email": "kuswandaridewi@perum.id",
    "phone": "(053) 460-6056",
    "totalTransactions": 50,
    "totalSpent": 3587000,
    "lastTransactionDate": "2025-05-09"
  },
  {
    "id": 277,
    "name": "Mumpuni Wahyudin",
    "membership": "Silver",
    "email": "osudiati@hotmail.com",
    "phone": "+62 (79) 862 3984",
    "totalTransactions": 97,
    "totalSpent": 7759030,
    "lastTransactionDate": "2025-01-05"
  },
  {
    "id": 278,
    "name": "R. Ian Rahimah, S.Ked",
    "membership": "Silver",
    "email": "purwanticawisadi@hotmail.com",
    "phone": "+62 (05) 464 7548",
    "totalTransactions": 39,
    "totalSpent": 506883,
    "lastTransactionDate": "2025-04-06"
  },
  {
    "id": 279,
    "name": "Ina Halimah",
    "membership": "Gold",
    "email": "srahmawati@hotmail.com",
    "phone": "+62 (75) 175 8891",
    "totalTransactions": 84,
    "totalSpent": 8757336,
    "lastTransactionDate": "2025-04-27"
  },
  {
    "id": 280,
    "name": "Embuh Saputra, S.Pd",
    "membership": "Regular",
    "email": "marsudi39@ud.co.id",
    "phone": "086 449 6392",
    "totalTransactions": 8,
    "totalSpent": 327928,
    "lastTransactionDate": "2025-02-17"
  },
  {
    "id": 281,
    "name": "H. Ega Nainggolan, S.I.Kom",
    "membership": "Regular",
    "email": "wahyuprastuti@hotmail.com",
    "phone": "+62 (14) 339-5275",
    "totalTransactions": 40,
    "totalSpent": 2074720,
    "lastTransactionDate": "2025-06-04"
  },
  {
    "id": 282,
    "name": "Novi Saputra",
    "membership": "Silver",
    "email": "erik49@gmail.com",
    "phone": "+62 (0168) 601 3477",
    "totalTransactions": 88,
    "totalSpent": 12472416,
    "lastTransactionDate": "2025-02-16"
  },
  {
    "id": 283,
    "name": "Drs. Rizki Saefullah",
    "membership": "Silver",
    "email": "kasiranhabibi@yahoo.com",
    "phone": "(0917) 665-1221",
    "totalTransactions": 89,
    "totalSpent": 3629331,
    "lastTransactionDate": "2025-06-30"
  },
  {
    "id": 284,
    "name": "KH. Asmadi Gunarto, S.Pt",
    "membership": "Gold",
    "email": "pudjiastutigabriella@yahoo.com",
    "phone": "+62 (16) 309 0015",
    "totalTransactions": 48,
    "totalSpent": 3258912,
    "lastTransactionDate": "2025-03-11"
  },
  {
    "id": 285,
    "name": "Ika Suryono, S.Farm",
    "membership": "Gold",
    "email": "irnantosafitri@perum.edu",
    "phone": "+62-89-532-6389",
    "totalTransactions": 18,
    "totalSpent": 2436336,
    "lastTransactionDate": "2025-05-01"
  },
  {
    "id": 286,
    "name": "Bakijan Pertiwi",
    "membership": "Regular",
    "email": "gmaheswara@gmail.com",
    "phone": "(033) 792-2341",
    "totalTransactions": 59,
    "totalSpent": 6368637,
    "lastTransactionDate": "2025-01-03"
  },
  {
    "id": 287,
    "name": "Mumpuni Samosir",
    "membership": "Gold",
    "email": "nhassanah@gmail.com",
    "phone": "+62 (016) 772-6960",
    "totalTransactions": 90,
    "totalSpent": 12008160,
    "lastTransactionDate": "2024-12-31"
  },
  {
    "id": 288,
    "name": "T. Danang Wulandari, M.Kom.",
    "membership": "Platinum",
    "email": "margana07@hotmail.com",
    "phone": "(079) 352 1962",
    "totalTransactions": 98,
    "totalSpent": 7337358,
    "lastTransactionDate": "2025-04-15"
  },
  {
    "id": 289,
    "name": "Fathonah Pratama",
    "membership": "Silver",
    "email": "rusman43@hotmail.com",
    "phone": "+62 (0369) 709-3170",
    "totalTransactions": 68,
    "totalSpent": 8643616,
    "lastTransactionDate": "2025-06-02"
  },
  {
    "id": 290,
    "name": "dr. Karen Wibowo",
    "membership": "Platinum",
    "email": "ufujiati@pd.desa.id",
    "phone": "+62-0454-722-3989",
    "totalTransactions": 10,
    "totalSpent": 394140,
    "lastTransactionDate": "2025-03-16"
  },
  {
    "id": 291,
    "name": "Sutan Slamet Firgantoro, S.Sos",
    "membership": "Gold",
    "email": "pradanacemeti@hotmail.com",
    "phone": "+62 (19) 804-1847",
    "totalTransactions": 71,
    "totalSpent": 10118210,
    "lastTransactionDate": "2025-04-13"
  },
  {
    "id": 292,
    "name": "Dinda Fujiati",
    "membership": "Gold",
    "email": "jagapatiwasita@yahoo.com",
    "phone": "+62 (81) 319-0924",
    "totalTransactions": 74,
    "totalSpent": 3646868,
    "lastTransactionDate": "2025-01-28"
  },
  {
    "id": 293,
    "name": "Lintang Marbun",
    "membership": "Regular",
    "email": "napitupulunovi@pt.ac.id",
    "phone": "+62 (81) 785-2282",
    "totalTransactions": 42,
    "totalSpent": 6148968,
    "lastTransactionDate": "2025-04-16"
  },
  {
    "id": 294,
    "name": "Dt. Gamani Narpati, S.T.",
    "membership": "Regular",
    "email": "wijayaemong@pt.edu",
    "phone": "+62-0959-473-7213",
    "totalTransactions": 15,
    "totalSpent": 957660,
    "lastTransactionDate": "2025-02-16"
  },
  {
    "id": 295,
    "name": "Luluh Gunarto, S.Pt",
    "membership": "Regular",
    "email": "abyasasuwarno@yahoo.com",
    "phone": "087 688 6878",
    "totalTransactions": 12,
    "totalSpent": 1725492,
    "lastTransactionDate": "2025-01-31"
  },
  {
    "id": 296,
    "name": "Drs. Koko Waskita, S.T.",
    "membership": "Gold",
    "email": "chelseamandasari@gmail.com",
    "phone": "+62-031-954-1966",
    "totalTransactions": 8,
    "totalSpent": 1030912,
    "lastTransactionDate": "2025-03-09"
  },
  {
    "id": 297,
    "name": "Kasiyah Dongoran",
    "membership": "Regular",
    "email": "wnapitupulu@gmail.com",
    "phone": "+62-627-924-6320",
    "totalTransactions": 66,
    "totalSpent": 7847466,
    "lastTransactionDate": "2025-03-14"
  },
  {
    "id": 298,
    "name": "Unggul Farida",
    "membership": "Regular",
    "email": "dwacana@hotmail.com",
    "phone": "(0537) 260 3214",
    "totalTransactions": 73,
    "totalSpent": 1834855,
    "lastTransactionDate": "2025-06-23"
  },
  {
    "id": 299,
    "name": "Gara Hastuti",
    "membership": "Platinum",
    "email": "mhutagalung@yahoo.com",
    "phone": "+62 (887) 071-5534",
    "totalTransactions": 87,
    "totalSpent": 7898208,
    "lastTransactionDate": "2025-03-13"
  },
  {
    "id": 300,
    "name": "R.M. Adikara Januar",
    "membership": "Platinum",
    "email": "banawa08@perum.my.id",
    "phone": "(059) 759 5450",
    "totalTransactions": 51,
    "totalSpent": 3911904,
    "lastTransactionDate": "2025-06-28"
  },
  {
    "id": 301,
    "name": "Drs. Bancar Farida",
    "membership": "Platinum",
    "email": "cmulyani@hotmail.com",
    "phone": "0898126574",
    "totalTransactions": 96,
    "totalSpent": 6443616,
    "lastTransactionDate": "2025-06-04"
  },
  {
    "id": 302,
    "name": "Prabowo Napitupulu",
    "membership": "Silver",
    "email": "zsaefullah@pt.com",
    "phone": "+62 (36) 936 2689",
    "totalTransactions": 6,
    "totalSpent": 726414,
    "lastTransactionDate": "2025-01-27"
  },
  {
    "id": 303,
    "name": "Abyasa Haryanto",
    "membership": "Platinum",
    "email": "saptonoade@cv.gov",
    "phone": "(0117) 595-7498",
    "totalTransactions": 90,
    "totalSpent": 2404260,
    "lastTransactionDate": "2025-02-18"
  },
  {
    "id": 304,
    "name": "dr. Siti Widiastuti, S.Psi",
    "membership": "Platinum",
    "email": "melinda33@pd.ac.id",
    "phone": "+62 (847) 609 4412",
    "totalTransactions": 9,
    "totalSpent": 1203750,
    "lastTransactionDate": "2025-04-16"
  },
  {
    "id": 305,
    "name": "Surya Prasetya",
    "membership": "Gold",
    "email": "gmangunsong@pd.sch.id",
    "phone": "+62 (413) 297 1506",
    "totalTransactions": 37,
    "totalSpent": 4335734,
    "lastTransactionDate": "2025-04-17"
  },
  {
    "id": 306,
    "name": "drg. Eva Agustina, M.Kom.",
    "membership": "Regular",
    "email": "opung14@pd.sch.id",
    "phone": "+62-663-439-2529",
    "totalTransactions": 99,
    "totalSpent": 4504599,
    "lastTransactionDate": "2025-03-19"
  },
  {
    "id": 307,
    "name": "drg. Zulaikha Hutasoit",
    "membership": "Regular",
    "email": "hutasoitagus@perum.net",
    "phone": "+62 (00) 720 2455",
    "totalTransactions": 48,
    "totalSpent": 5292672,
    "lastTransactionDate": "2025-03-04"
  },
  {
    "id": 308,
    "name": "Puti Azalea Marbun",
    "membership": "Platinum",
    "email": "daliono09@gmail.com",
    "phone": "+62-090-326-7149",
    "totalTransactions": 49,
    "totalSpent": 5315177,
    "lastTransactionDate": "2025-05-09"
  },
  {
    "id": 309,
    "name": "Drs. Belinda Suryatmi",
    "membership": "Silver",
    "email": "cagerhariyah@hotmail.com",
    "phone": "+62 (0281) 793 4065",
    "totalTransactions": 88,
    "totalSpent": 3947856,
    "lastTransactionDate": "2025-02-25"
  },
  {
    "id": 310,
    "name": "Marsito Kusmawati",
    "membership": "Regular",
    "email": "cici44@hotmail.com",
    "phone": "(063) 453 3722",
    "totalTransactions": 16,
    "totalSpent": 908560,
    "lastTransactionDate": "2025-05-09"
  },
  {
    "id": 311,
    "name": "Asmuni Rahmawati",
    "membership": "Gold",
    "email": "darijanhassanah@cv.co.id",
    "phone": "+62 (937) 661 8943",
    "totalTransactions": 68,
    "totalSpent": 2950044,
    "lastTransactionDate": "2025-01-07"
  },
  {
    "id": 312,
    "name": "Safina Firmansyah",
    "membership": "Silver",
    "email": "purwanababan@yahoo.com",
    "phone": "+62 (000) 462 7765",
    "totalTransactions": 1,
    "totalSpent": 15959,
    "lastTransactionDate": "2025-06-22"
  },
  {
    "id": 313,
    "name": "Rahman Simbolon",
    "membership": "Regular",
    "email": "jessica20@gmail.com",
    "phone": "+62 (0617) 520 2389",
    "totalTransactions": 60,
    "totalSpent": 7270920,
    "lastTransactionDate": "2025-03-28"
  },
  {
    "id": 314,
    "name": "Farah Najmudin",
    "membership": "Regular",
    "email": "anggriawanrina@yahoo.com",
    "phone": "+62 (955) 017 8332",
    "totalTransactions": 30,
    "totalSpent": 2246490,
    "lastTransactionDate": "2025-04-06"
  },
  {
    "id": 315,
    "name": "Maryanto Mayasari, S.T.",
    "membership": "Silver",
    "email": "tedigunarto@yahoo.com",
    "phone": "0848704506",
    "totalTransactions": 45,
    "totalSpent": 2279880,
    "lastTransactionDate": "2025-03-05"
  },
  {
    "id": 316,
    "name": "Prima Haryanto, M.Kom.",
    "membership": "Platinum",
    "email": "ksudiati@gmail.com",
    "phone": "+62 (937) 440 3946",
    "totalTransactions": 25,
    "totalSpent": 989525,
    "lastTransactionDate": "2025-04-24"
  },
  {
    "id": 317,
    "name": "Karta Pradana",
    "membership": "Platinum",
    "email": "udapermadi@pt.ac.id",
    "phone": "0886084907",
    "totalTransactions": 85,
    "totalSpent": 10191585,
    "lastTransactionDate": "2025-02-20"
  },
  {
    "id": 318,
    "name": "Kasusra Wijayanti",
    "membership": "Platinum",
    "email": "prakasaprayogo@hotmail.com",
    "phone": "+62 (283) 061 5370",
    "totalTransactions": 31,
    "totalSpent": 1984713,
    "lastTransactionDate": "2025-04-22"
  },
  {
    "id": 319,
    "name": "Wadi Rajata",
    "membership": "Regular",
    "email": "usyi46@pd.desa.id",
    "phone": "+62 (044) 881-1210",
    "totalTransactions": 13,
    "totalSpent": 244413,
    "lastTransactionDate": "2025-01-19"
  },
  {
    "id": 320,
    "name": "Prayogo Saputra",
    "membership": "Gold",
    "email": "hartatimursita@perum.my.id",
    "phone": "081 794 1515",
    "totalTransactions": 77,
    "totalSpent": 1752520,
    "lastTransactionDate": "2025-02-15"
  },
  {
    "id": 321,
    "name": "Yani Nainggolan",
    "membership": "Regular",
    "email": "safitricawuk@gmail.com",
    "phone": "+62 (25) 288-3750",
    "totalTransactions": 95,
    "totalSpent": 2051620,
    "lastTransactionDate": "2025-02-03"
  },
  {
    "id": 322,
    "name": "drg. Widya Astuti, S.IP",
    "membership": "Gold",
    "email": "gandewanainggolan@hotmail.com",
    "phone": "(0913) 787-6553",
    "totalTransactions": 57,
    "totalSpent": 4071510,
    "lastTransactionDate": "2025-03-07"
  },
  {
    "id": 323,
    "name": "Argono Hartati",
    "membership": "Gold",
    "email": "pertiwinyana@ud.co.id",
    "phone": "(005) 712-1988",
    "totalTransactions": 97,
    "totalSpent": 2405212,
    "lastTransactionDate": "2025-06-23"
  },
  {
    "id": 324,
    "name": "Lega Mansur",
    "membership": "Gold",
    "email": "jpuspasari@hotmail.com",
    "phone": "+62 (190) 534 8640",
    "totalTransactions": 65,
    "totalSpent": 5578820,
    "lastTransactionDate": "2025-05-28"
  },
  {
    "id": 325,
    "name": "Asman Salahudin",
    "membership": "Silver",
    "email": "prabu24@pd.net",
    "phone": "(0446) 004-5212",
    "totalTransactions": 94,
    "totalSpent": 8798212,
    "lastTransactionDate": "2025-06-15"
  },
  {
    "id": 326,
    "name": "Drs. Liman Januar",
    "membership": "Gold",
    "email": "kuswoyokarsana@yahoo.com",
    "phone": "+62 (129) 391 3044",
    "totalTransactions": 31,
    "totalSpent": 2762255,
    "lastTransactionDate": "2025-06-29"
  },
  {
    "id": 327,
    "name": "Dr. Perkasa Namaga, S.Pt",
    "membership": "Gold",
    "email": "daliono60@yahoo.com",
    "phone": "(015) 402-1190",
    "totalTransactions": 85,
    "totalSpent": 12464570,
    "lastTransactionDate": "2025-06-12"
  },
  {
    "id": 328,
    "name": "Azalea Halimah",
    "membership": "Silver",
    "email": "gnamaga@yahoo.com",
    "phone": "+62 (98) 315-2291",
    "totalTransactions": 53,
    "totalSpent": 4705022,
    "lastTransactionDate": "2025-01-20"
  },
  {
    "id": 329,
    "name": "Dt. Jarwadi Pratama, S.E.I",
    "membership": "Regular",
    "email": "rahmanardianto@perum.ponpes.id",
    "phone": "+62-0063-963-8452",
    "totalTransactions": 8,
    "totalSpent": 447280,
    "lastTransactionDate": "2025-05-02"
  },
  {
    "id": 330,
    "name": "drg. Ratna Suwarno",
    "membership": "Platinum",
    "email": "paulinmaheswara@hotmail.com",
    "phone": "(049) 701-6934",
    "totalTransactions": 72,
    "totalSpent": 10074528,
    "lastTransactionDate": "2025-03-19"
  },
  {
    "id": 331,
    "name": "Koko Nashiruddin",
    "membership": "Silver",
    "email": "emangunarto@cv.go.id",
    "phone": "+62 (34) 190 3106",
    "totalTransactions": 45,
    "totalSpent": 4946265,
    "lastTransactionDate": "2025-05-14"
  },
  {
    "id": 332,
    "name": "Farhunnisa Hassanah",
    "membership": "Regular",
    "email": "salimahmaheswara@ud.or.id",
    "phone": "+62 (0732) 365 3377",
    "totalTransactions": 90,
    "totalSpent": 10722330,
    "lastTransactionDate": "2025-01-20"
  },
  {
    "id": 333,
    "name": "Alika Ramadan",
    "membership": "Regular",
    "email": "khariyah@pt.or.id",
    "phone": "+62 (0361) 424-4260",
    "totalTransactions": 20,
    "totalSpent": 1772260,
    "lastTransactionDate": "2025-02-22"
  },
  {
    "id": 334,
    "name": "KH. Karta Haryanto, M.Farm",
    "membership": "Gold",
    "email": "luluh37@gmail.com",
    "phone": "+62 (0764) 273 7203",
    "totalTransactions": 24,
    "totalSpent": 3219120,
    "lastTransactionDate": "2025-04-01"
  },
  {
    "id": 335,
    "name": "Kiandra Prasetya",
    "membership": "Gold",
    "email": "santosoopung@pt.go.id",
    "phone": "+62-19-134-4389",
    "totalTransactions": 29,
    "totalSpent": 2576244,
    "lastTransactionDate": "2025-05-05"
  },
  {
    "id": 336,
    "name": "Dr. Viman Najmudin, M.Kom.",
    "membership": "Regular",
    "email": "artasimbolon@perum.mil",
    "phone": "+62 (14) 644-9369",
    "totalTransactions": 60,
    "totalSpent": 1506300,
    "lastTransactionDate": "2025-04-21"
  },
  {
    "id": 337,
    "name": "dr. Cinta Wibowo",
    "membership": "Gold",
    "email": "jindrasimbolon@gmail.com",
    "phone": "+62 (573) 857 3680",
    "totalTransactions": 54,
    "totalSpent": 8042436,
    "lastTransactionDate": "2025-04-19"
  },
  {
    "id": 338,
    "name": "Baktiono Pratiwi",
    "membership": "Silver",
    "email": "rizkigunawan@pd.net",
    "phone": "+62 (087) 233-3510",
    "totalTransactions": 50,
    "totalSpent": 3683150,
    "lastTransactionDate": "2025-05-13"
  },
  {
    "id": 339,
    "name": "Vega Rahmawati",
    "membership": "Platinum",
    "email": "setiawansyahrini@hotmail.com",
    "phone": "(0315) 391 1498",
    "totalTransactions": 27,
    "totalSpent": 2607552,
    "lastTransactionDate": "2025-02-18"
  },
  {
    "id": 340,
    "name": "Wakiman Permadi, S.Gz",
    "membership": "Platinum",
    "email": "gilda20@yahoo.com",
    "phone": "+62-651-189-3940",
    "totalTransactions": 58,
    "totalSpent": 6221950,
    "lastTransactionDate": "2025-05-24"
  },
  {
    "id": 341,
    "name": "Kamaria Tamba, M.M.",
    "membership": "Platinum",
    "email": "kuswoyoratna@ud.gov",
    "phone": "+62 (30) 233-3247",
    "totalTransactions": 69,
    "totalSpent": 4135377,
    "lastTransactionDate": "2025-03-23"
  },
  {
    "id": 342,
    "name": "Ihsan Prasetyo, M.Ak",
    "membership": "Platinum",
    "email": "lazuardihasan@ud.net",
    "phone": "+62 (76) 025-0826",
    "totalTransactions": 35,
    "totalSpent": 3810520,
    "lastTransactionDate": "2025-01-11"
  },
  {
    "id": 343,
    "name": "Prakosa Manullang",
    "membership": "Gold",
    "email": "mangunsongradika@pd.gov",
    "phone": "+62 (0888) 995 7298",
    "totalTransactions": 10,
    "totalSpent": 593250,
    "lastTransactionDate": "2025-01-21"
  },
  {
    "id": 344,
    "name": "R.A. Melinda Anggraini",
    "membership": "Silver",
    "email": "usetiawan@perum.mil",
    "phone": "(046) 871 9120",
    "totalTransactions": 62,
    "totalSpent": 4015058,
    "lastTransactionDate": "2025-05-08"
  },
  {
    "id": 345,
    "name": "Tira Nasyidah, S.IP",
    "membership": "Gold",
    "email": "lyulianti@hotmail.com",
    "phone": "+62 (08) 283 2308",
    "totalTransactions": 39,
    "totalSpent": 546741,
    "lastTransactionDate": "2025-02-13"
  },
  {
    "id": 346,
    "name": "Drs. Belinda Permadi",
    "membership": "Regular",
    "email": "ella81@ud.gov",
    "phone": "+62-067-323-1829",
    "totalTransactions": 25,
    "totalSpent": 1018825,
    "lastTransactionDate": "2025-06-15"
  },
  {
    "id": 347,
    "name": "Indra Usada",
    "membership": "Regular",
    "email": "viman24@pt.com",
    "phone": "+62-01-529-1137",
    "totalTransactions": 32,
    "totalSpent": 2035552,
    "lastTransactionDate": "2025-03-26"
  },
  {
    "id": 348,
    "name": "Ismail Nasyiah",
    "membership": "Silver",
    "email": "usamahnurul@gmail.com",
    "phone": "+62 (55) 618 4442",
    "totalTransactions": 31,
    "totalSpent": 2923579,
    "lastTransactionDate": "2025-06-05"
  },
  {
    "id": 349,
    "name": "R.M. Limar Winarsih",
    "membership": "Silver",
    "email": "ami81@gmail.com",
    "phone": "+62 (48) 905-6708",
    "totalTransactions": 49,
    "totalSpent": 6478976,
    "lastTransactionDate": "2025-01-16"
  },
  {
    "id": 350,
    "name": "Aisyah Gunawan",
    "membership": "Silver",
    "email": "wijayantikarman@pd.co.id",
    "phone": "+62 (058) 482 6691",
    "totalTransactions": 40,
    "totalSpent": 3142640,
    "lastTransactionDate": "2025-03-25"
  },
  {
    "id": 351,
    "name": "Eka Santoso",
    "membership": "Regular",
    "email": "okta05@cv.org",
    "phone": "0807063369",
    "totalTransactions": 66,
    "totalSpent": 9263628,
    "lastTransactionDate": "2025-02-14"
  },
  {
    "id": 352,
    "name": "Drs. Michelle Safitri",
    "membership": "Silver",
    "email": "oktavianiraisa@hotmail.com",
    "phone": "+62 (21) 040-1648",
    "totalTransactions": 13,
    "totalSpent": 1729962,
    "lastTransactionDate": "2025-06-15"
  },
  {
    "id": 353,
    "name": "Dr. Okta Ardianto",
    "membership": "Silver",
    "email": "septi28@yahoo.com",
    "phone": "(0383) 638-1643",
    "totalTransactions": 27,
    "totalSpent": 2893806,
    "lastTransactionDate": "2025-01-24"
  },
  {
    "id": 354,
    "name": "Atmaja Megantara, S.Sos",
    "membership": "Gold",
    "email": "endahpertiwi@hotmail.com",
    "phone": "+62 (0642) 036-2586",
    "totalTransactions": 53,
    "totalSpent": 1165152,
    "lastTransactionDate": "2025-01-30"
  },
  {
    "id": 355,
    "name": "Galak Ramadan",
    "membership": "Platinum",
    "email": "ygunarto@pd.desa.id",
    "phone": "+62 (0026) 355-8243",
    "totalTransactions": 95,
    "totalSpent": 4583940,
    "lastTransactionDate": "2025-02-10"
  },
  {
    "id": 356,
    "name": "Ayu Winarsih, S.Pt",
    "membership": "Silver",
    "email": "asamosir@yahoo.com",
    "phone": "+62 (0898) 803-1538",
    "totalTransactions": 34,
    "totalSpent": 4061810,
    "lastTransactionDate": "2025-06-17"
  },
  {
    "id": 357,
    "name": "Dr. Cemani Saefullah",
    "membership": "Silver",
    "email": "wadisuryatmi@hotmail.com",
    "phone": "+62-050-404-3333",
    "totalTransactions": 20,
    "totalSpent": 1228600,
    "lastTransactionDate": "2025-05-15"
  },
  {
    "id": 358,
    "name": "dr. Febi Novitasari, S.T.",
    "membership": "Gold",
    "email": "widodoibun@gmail.com",
    "phone": "+62 (011) 978-7180",
    "totalTransactions": 30,
    "totalSpent": 3287160,
    "lastTransactionDate": "2025-05-28"
  },
  {
    "id": 359,
    "name": "Dimas Rahayu",
    "membership": "Silver",
    "email": "azaleapratama@pd.id",
    "phone": "+62-060-119-8756",
    "totalTransactions": 64,
    "totalSpent": 6303360,
    "lastTransactionDate": "2025-04-27"
  },
  {
    "id": 360,
    "name": "Olivia Wasita",
    "membership": "Regular",
    "email": "nashiruddinhamzah@pt.int",
    "phone": "+62 (618) 298 0365",
    "totalTransactions": 98,
    "totalSpent": 13532722,
    "lastTransactionDate": "2025-01-18"
  },
  {
    "id": 361,
    "name": "Nardi Mandasari, S.T.",
    "membership": "Silver",
    "email": "agustinaadiarja@hotmail.com",
    "phone": "+62-659-520-1491",
    "totalTransactions": 59,
    "totalSpent": 3191959,
    "lastTransactionDate": "2025-04-01"
  },
  {
    "id": 362,
    "name": "Tedi Novitasari",
    "membership": "Regular",
    "email": "namagalanang@gmail.com",
    "phone": "+62-0687-509-2632",
    "totalTransactions": 22,
    "totalSpent": 1027158,
    "lastTransactionDate": "2025-06-05"
  },
  {
    "id": 363,
    "name": "Endah Pratama, M.Ak",
    "membership": "Platinum",
    "email": "permadiunggul@ud.net",
    "phone": "+62 (040) 428 8605",
    "totalTransactions": 24,
    "totalSpent": 609504,
    "lastTransactionDate": "2025-06-07"
  },
  {
    "id": 364,
    "name": "Prayogo Sirait",
    "membership": "Platinum",
    "email": "bwidodo@pt.edu",
    "phone": "(000) 308-3566",
    "totalTransactions": 10,
    "totalSpent": 227170,
    "lastTransactionDate": "2025-05-02"
  },
  {
    "id": 365,
    "name": "Puti Yuliana Dongoran",
    "membership": "Gold",
    "email": "yessihasanah@gmail.com",
    "phone": "+62 (312) 345 5068",
    "totalTransactions": 53,
    "totalSpent": 2440226,
    "lastTransactionDate": "2025-06-20"
  },
  {
    "id": 366,
    "name": "Ibrani Pertiwi",
    "membership": "Platinum",
    "email": "futami@perum.or.id",
    "phone": "+62 (0401) 348 0873",
    "totalTransactions": 9,
    "totalSpent": 446319,
    "lastTransactionDate": "2025-04-16"
  },
  {
    "id": 367,
    "name": "Gilda Kuswandari",
    "membership": "Regular",
    "email": "ngunawan@ud.org",
    "phone": "+62 (057) 090-8599",
    "totalTransactions": 28,
    "totalSpent": 3992072,
    "lastTransactionDate": "2025-03-07"
  },
  {
    "id": 368,
    "name": "Rangga Siregar",
    "membership": "Regular",
    "email": "anggabayahartati@yahoo.com",
    "phone": "+62 (69) 996-9964",
    "totalTransactions": 48,
    "totalSpent": 1240608,
    "lastTransactionDate": "2025-05-17"
  },
  {
    "id": 369,
    "name": "Ir. Lukita Rahimah",
    "membership": "Platinum",
    "email": "nurdiyantilantar@gmail.com",
    "phone": "0859693259",
    "totalTransactions": 85,
    "totalSpent": 11720480,
    "lastTransactionDate": "2025-06-10"
  },
  {
    "id": 370,
    "name": "Ayu Mardhiyah",
    "membership": "Regular",
    "email": "garanainggolan@gmail.com",
    "phone": "+62 (34) 266-9806",
    "totalTransactions": 1,
    "totalSpent": 149516,
    "lastTransactionDate": "2025-01-19"
  },
  {
    "id": 371,
    "name": "Ayu Puspita, M.Kom.",
    "membership": "Silver",
    "email": "huyainah@pd.gov",
    "phone": "+62-483-893-5953",
    "totalTransactions": 2,
    "totalSpent": 28768,
    "lastTransactionDate": "2025-04-30"
  },
  {
    "id": 372,
    "name": "R.M. Maryadi Purwanti",
    "membership": "Platinum",
    "email": "adiarja56@cv.web.id",
    "phone": "(050) 826-9582",
    "totalTransactions": 69,
    "totalSpent": 5875557,
    "lastTransactionDate": "2025-06-23"
  },
  {
    "id": 373,
    "name": "Emas Iswahyudi, M.Pd",
    "membership": "Gold",
    "email": "asitumorang@hotmail.com",
    "phone": "+62 (030) 876 1238",
    "totalTransactions": 65,
    "totalSpent": 7986680,
    "lastTransactionDate": "2025-03-25"
  },
  {
    "id": 374,
    "name": "dr. Umi Lazuardi",
    "membership": "Gold",
    "email": "kasusrawacana@hotmail.com",
    "phone": "+62 (39) 484 0027",
    "totalTransactions": 14,
    "totalSpent": 493472,
    "lastTransactionDate": "2025-03-01"
  },
  {
    "id": 375,
    "name": "Abyasa Ardianto",
    "membership": "Silver",
    "email": "ewibisono@gmail.com",
    "phone": "+62 (068) 311-3950",
    "totalTransactions": 31,
    "totalSpent": 1869703,
    "lastTransactionDate": "2025-05-26"
  },
  {
    "id": 376,
    "name": "Harimurti Nuraini",
    "membership": "Regular",
    "email": "caraka49@ud.my.id",
    "phone": "(028) 397-6205",
    "totalTransactions": 46,
    "totalSpent": 3683542,
    "lastTransactionDate": "2025-01-09"
  },
  {
    "id": 377,
    "name": "Estiono Saputra, S.Ked",
    "membership": "Regular",
    "email": "mhandayani@yahoo.com",
    "phone": "(020) 726 6292",
    "totalTransactions": 11,
    "totalSpent": 1185723,
    "lastTransactionDate": "2025-02-11"
  },
  {
    "id": 378,
    "name": "Kala Iswahyudi",
    "membership": "Gold",
    "email": "dwinarno@gmail.com",
    "phone": "+62 (040) 688 4133",
    "totalTransactions": 59,
    "totalSpent": 4351545,
    "lastTransactionDate": "2025-03-07"
  },
  {
    "id": 379,
    "name": "Gina Irawan",
    "membership": "Platinum",
    "email": "nasrullah23@pd.ponpes.id",
    "phone": "+62 (070) 321 1920",
    "totalTransactions": 39,
    "totalSpent": 1214187,
    "lastTransactionDate": "2025-02-08"
  },
  {
    "id": 380,
    "name": "Darmaji Anggraini",
    "membership": "Regular",
    "email": "eman77@pd.mil",
    "phone": "(0184) 449 0295",
    "totalTransactions": 12,
    "totalSpent": 1394892,
    "lastTransactionDate": "2025-03-14"
  },
  {
    "id": 381,
    "name": "Saka Widodo",
    "membership": "Platinum",
    "email": "kuswoyosetya@yahoo.com",
    "phone": "+62 (0037) 341-6781",
    "totalTransactions": 49,
    "totalSpent": 6604269,
    "lastTransactionDate": "2025-01-09"
  },
  {
    "id": 382,
    "name": "Utama Hariyah",
    "membership": "Gold",
    "email": "hardihutagalung@gmail.com",
    "phone": "+62 (17) 982-1348",
    "totalTransactions": 82,
    "totalSpent": 1023114,
    "lastTransactionDate": "2025-06-29"
  },
  {
    "id": 383,
    "name": "Ella Pertiwi",
    "membership": "Regular",
    "email": "csudiati@gmail.com",
    "phone": "(038) 318-2856",
    "totalTransactions": 11,
    "totalSpent": 1551374,
    "lastTransactionDate": "2025-06-29"
  },
  {
    "id": 384,
    "name": "Ghaliyati Pertiwi",
    "membership": "Platinum",
    "email": "lailasarilintang@hotmail.com",
    "phone": "(061) 770-6736",
    "totalTransactions": 83,
    "totalSpent": 8037720,
    "lastTransactionDate": "2025-01-05"
  },
  {
    "id": 385,
    "name": "KH. Cakrajiya Budiman, S.I.Kom",
    "membership": "Gold",
    "email": "jnamaga@cv.id",
    "phone": "+62 (521) 650-5871",
    "totalTransactions": 68,
    "totalSpent": 1438472,
    "lastTransactionDate": "2025-04-10"
  },
  {
    "id": 386,
    "name": "Latika Purnawati",
    "membership": "Silver",
    "email": "nurdiyantisamiah@pt.co.id",
    "phone": "(079) 089 8436",
    "totalTransactions": 28,
    "totalSpent": 3770172,
    "lastTransactionDate": "2025-05-13"
  },
  {
    "id": 387,
    "name": "Drs. Irma Palastri",
    "membership": "Silver",
    "email": "donofirgantoro@pt.ponpes.id",
    "phone": "(094) 842-4959",
    "totalTransactions": 6,
    "totalSpent": 176934,
    "lastTransactionDate": "2025-05-01"
  },
  {
    "id": 388,
    "name": "Ir. Atmaja Yuliarti",
    "membership": "Gold",
    "email": "marsito78@pt.desa.id",
    "phone": "+62 (38) 676-7382",
    "totalTransactions": 70,
    "totalSpent": 1303750,
    "lastTransactionDate": "2025-04-09"
  },
  {
    "id": 389,
    "name": "Dr. Ika Wibowo",
    "membership": "Gold",
    "email": "utamitari@pd.go.id",
    "phone": "0829968722",
    "totalTransactions": 41,
    "totalSpent": 578264,
    "lastTransactionDate": "2025-01-05"
  },
  {
    "id": 390,
    "name": "Drs. Daliman Lailasari",
    "membership": "Regular",
    "email": "wulan80@cv.desa.id",
    "phone": "+62-040-566-9579",
    "totalTransactions": 76,
    "totalSpent": 3632648,
    "lastTransactionDate": "2025-03-03"
  },
  {
    "id": 391,
    "name": "Muni Maheswara",
    "membership": "Gold",
    "email": "gilda25@ud.or.id",
    "phone": "(079) 632 5942",
    "totalTransactions": 10,
    "totalSpent": 884530,
    "lastTransactionDate": "2025-01-07"
  },
  {
    "id": 392,
    "name": "Mahesa Mansur",
    "membership": "Regular",
    "email": "mprasetya@hotmail.com",
    "phone": "+62 (056) 241-5285",
    "totalTransactions": 73,
    "totalSpent": 5331774,
    "lastTransactionDate": "2025-05-03"
  },
  {
    "id": 393,
    "name": "Elma Siregar",
    "membership": "Regular",
    "email": "kasiyahnarpati@yahoo.com",
    "phone": "+62-0358-951-3818",
    "totalTransactions": 87,
    "totalSpent": 8435520,
    "lastTransactionDate": "2025-05-20"
  },
  {
    "id": 394,
    "name": "Kartika Utama",
    "membership": "Platinum",
    "email": "qmaryati@perum.net.id",
    "phone": "+62 (0430) 349-1891",
    "totalTransactions": 97,
    "totalSpent": 4528639,
    "lastTransactionDate": "2025-05-17"
  },
  {
    "id": 395,
    "name": "Puti Novi Rahimah, M.Kom.",
    "membership": "Platinum",
    "email": "napitupuluendah@perum.org",
    "phone": "+62 (053) 641 5471",
    "totalTransactions": 65,
    "totalSpent": 6543160,
    "lastTransactionDate": "2025-06-28"
  },
  {
    "id": 396,
    "name": "dr. Farah Kurniawan, S.Kom",
    "membership": "Gold",
    "email": "pia36@perum.my.id",
    "phone": "+62 (009) 421 4105",
    "totalTransactions": 13,
    "totalSpent": 1619540,
    "lastTransactionDate": "2025-03-04"
  },
  {
    "id": 397,
    "name": "Kiandra Susanti",
    "membership": "Regular",
    "email": "dpurwanti@pd.desa.id",
    "phone": "+62 (38) 885 6225",
    "totalTransactions": 10,
    "totalSpent": 992840,
    "lastTransactionDate": "2025-02-03"
  },
  {
    "id": 398,
    "name": "KH. Prayoga Aryani, S.Farm",
    "membership": "Platinum",
    "email": "latika86@perum.gov",
    "phone": "+62 (75) 854 8596",
    "totalTransactions": 100,
    "totalSpent": 9555700,
    "lastTransactionDate": "2025-04-18"
  },
  {
    "id": 399,
    "name": "Tgk. Pandu Susanti, S.Pd",
    "membership": "Regular",
    "email": "lulutsusanti@pt.co.id",
    "phone": "+62-20-002-4539",
    "totalTransactions": 82,
    "totalSpent": 6695382,
    "lastTransactionDate": "2025-03-11"
  },
  {
    "id": 400,
    "name": "Bagya Prakasa",
    "membership": "Silver",
    "email": "simbolonmahesa@cv.co.id",
    "phone": "+62 (708) 368 2144",
    "totalTransactions": 63,
    "totalSpent": 4397715,
    "lastTransactionDate": "2025-05-05"
  },
  {
    "id": 401,
    "name": "Drs. Paramita Susanti, S.Sos",
    "membership": "Regular",
    "email": "fmegantara@hotmail.com",
    "phone": "+62-0677-462-0258",
    "totalTransactions": 71,
    "totalSpent": 7697465,
    "lastTransactionDate": "2025-02-24"
  },
  {
    "id": 402,
    "name": "Eli Uwais, S.Pd",
    "membership": "Platinum",
    "email": "novitasariibrani@perum.mil",
    "phone": "+62 (023) 920 4910",
    "totalTransactions": 24,
    "totalSpent": 2631192,
    "lastTransactionDate": "2025-05-23"
  },
  {
    "id": 403,
    "name": "Ajeng Iswahyudi, M.TI.",
    "membership": "Gold",
    "email": "fsaptono@cv.desa.id",
    "phone": "+62-82-768-1722",
    "totalTransactions": 99,
    "totalSpent": 8655669,
    "lastTransactionDate": "2025-03-14"
  },
  {
    "id": 404,
    "name": "Natalia Hariyah",
    "membership": "Platinum",
    "email": "olga84@yahoo.com",
    "phone": "+62 (62) 905 2918",
    "totalTransactions": 92,
    "totalSpent": 2692748,
    "lastTransactionDate": "2025-06-23"
  },
  {
    "id": 405,
    "name": "Ir. Opung Hasanah, S.Sos",
    "membership": "Regular",
    "email": "wijayabalamantri@pd.net.id",
    "phone": "+62 (17) 337-3992",
    "totalTransactions": 35,
    "totalSpent": 1764980,
    "lastTransactionDate": "2025-06-07"
  },
  {
    "id": 406,
    "name": "Gamani Najmudin",
    "membership": "Regular",
    "email": "keishapurnawati@pd.mil.id",
    "phone": "+62 (914) 388 2325",
    "totalTransactions": 92,
    "totalSpent": 4640664,
    "lastTransactionDate": "2025-06-11"
  },
  {
    "id": 407,
    "name": "Tira Prasasta",
    "membership": "Platinum",
    "email": "ida44@pt.net.id",
    "phone": "+62-0264-309-5449",
    "totalTransactions": 41,
    "totalSpent": 4286755,
    "lastTransactionDate": "2025-05-06"
  },
  {
    "id": 408,
    "name": "drg. Lurhur Latupono, S.E.",
    "membership": "Silver",
    "email": "ladriansyah@hotmail.com",
    "phone": "+62 (71) 205-3978",
    "totalTransactions": 12,
    "totalSpent": 136332,
    "lastTransactionDate": "2025-06-06"
  },
  {
    "id": 409,
    "name": "Tantri Kusumo",
    "membership": "Silver",
    "email": "isimbolon@cv.int",
    "phone": "+62 (56) 083 2004",
    "totalTransactions": 57,
    "totalSpent": 5947950,
    "lastTransactionDate": "2025-06-25"
  },
  {
    "id": 410,
    "name": "drg. Luluh Hastuti",
    "membership": "Platinum",
    "email": "yani35@hotmail.com",
    "phone": "085 238 6003",
    "totalTransactions": 14,
    "totalSpent": 626290,
    "lastTransactionDate": "2025-05-27"
  },
  {
    "id": 411,
    "name": "Ilsa Prakasa",
    "membership": "Regular",
    "email": "pertiwikarimah@yahoo.com",
    "phone": "+62 (071) 523-9102",
    "totalTransactions": 24,
    "totalSpent": 2951472,
    "lastTransactionDate": "2025-01-03"
  },
  {
    "id": 412,
    "name": "R. Victoria Rahmawati",
    "membership": "Regular",
    "email": "iswahyudiluluh@gmail.com",
    "phone": "(0483) 093-0967",
    "totalTransactions": 72,
    "totalSpent": 10391976,
    "lastTransactionDate": "2025-05-04"
  },
  {
    "id": 413,
    "name": "Mahfud Rahayu",
    "membership": "Platinum",
    "email": "sudiatidartono@gmail.com",
    "phone": "(002) 213 2176",
    "totalTransactions": 14,
    "totalSpent": 236376,
    "lastTransactionDate": "2025-01-16"
  },
  {
    "id": 414,
    "name": "Ir. Cahyono Habibi, S.IP",
    "membership": "Silver",
    "email": "kusumoprakosa@pt.int",
    "phone": "+62-072-587-3393",
    "totalTransactions": 46,
    "totalSpent": 1582216,
    "lastTransactionDate": "2025-03-31"
  },
  {
    "id": 415,
    "name": "Queen Nababan",
    "membership": "Silver",
    "email": "nsirait@hotmail.com",
    "phone": "+62-27-481-2421",
    "totalTransactions": 50,
    "totalSpent": 661750,
    "lastTransactionDate": "2025-01-07"
  },
  {
    "id": 416,
    "name": "Ayu Puspita",
    "membership": "Platinum",
    "email": "mursitaanggriawan@hotmail.com",
    "phone": "+62 (229) 462 0935",
    "totalTransactions": 53,
    "totalSpent": 5917927,
    "lastTransactionDate": "2025-01-17"
  },
  {
    "id": 417,
    "name": "Kezia Haryanto, S.Ked",
    "membership": "Gold",
    "email": "edi97@pt.my.id",
    "phone": "+62 (024) 365-8585",
    "totalTransactions": 93,
    "totalSpent": 6847869,
    "lastTransactionDate": "2025-03-08"
  },
  {
    "id": 418,
    "name": "Vanesa Mustofa",
    "membership": "Gold",
    "email": "rajatacakrawala@pt.org",
    "phone": "(015) 927-3874",
    "totalTransactions": 88,
    "totalSpent": 9662928,
    "lastTransactionDate": "2025-03-16"
  },
  {
    "id": 419,
    "name": "Liman Safitri",
    "membership": "Silver",
    "email": "bhutasoit@perum.edu",
    "phone": "+62 (48) 155 4203",
    "totalTransactions": 18,
    "totalSpent": 1448910,
    "lastTransactionDate": "2025-01-11"
  },
  {
    "id": 420,
    "name": "Zelaya Suwarno, S.Gz",
    "membership": "Gold",
    "email": "maheswaraanom@pd.desa.id",
    "phone": "(049) 157-9554",
    "totalTransactions": 35,
    "totalSpent": 4874415,
    "lastTransactionDate": "2025-05-16"
  },
  {
    "id": 421,
    "name": "R. Hilda Ramadan, M.Kom.",
    "membership": "Regular",
    "email": "jefrihariyah@pt.int",
    "phone": "081 030 6831",
    "totalTransactions": 9,
    "totalSpent": 484488,
    "lastTransactionDate": "2025-03-23"
  },
  {
    "id": 422,
    "name": "Ika Iswahyudi",
    "membership": "Silver",
    "email": "slametmaryati@gmail.com",
    "phone": "0808157129",
    "totalTransactions": 36,
    "totalSpent": 4334004,
    "lastTransactionDate": "2025-03-28"
  },
  {
    "id": 423,
    "name": "Puti Jasmin Halim, M.M.",
    "membership": "Silver",
    "email": "ciaobellagunarto@pd.my.id",
    "phone": "+62-0510-458-4743",
    "totalTransactions": 62,
    "totalSpent": 1870168,
    "lastTransactionDate": "2025-01-05"
  },
  {
    "id": 424,
    "name": "Ellis Latupono",
    "membership": "Regular",
    "email": "budiyantojulia@cv.my.id",
    "phone": "(069) 470-3180",
    "totalTransactions": 33,
    "totalSpent": 2463186,
    "lastTransactionDate": "2025-06-04"
  },
  {
    "id": 425,
    "name": "Mumpuni Pangestu",
    "membership": "Regular",
    "email": "tasnimrajasa@yahoo.com",
    "phone": "(062) 159 1832",
    "totalTransactions": 77,
    "totalSpent": 4717097,
    "lastTransactionDate": "2025-03-05"
  },
  {
    "id": 426,
    "name": "Dr. Anita Firmansyah, S.Gz",
    "membership": "Silver",
    "email": "bagustina@gmail.com",
    "phone": "+62 (0590) 110-7977",
    "totalTransactions": 14,
    "totalSpent": 637238,
    "lastTransactionDate": "2025-05-15"
  },
  {
    "id": 427,
    "name": "Ani Damanik",
    "membership": "Silver",
    "email": "hestipuspasari@gmail.com",
    "phone": "+62 (0905) 315 2049",
    "totalTransactions": 1,
    "totalSpent": 113728,
    "lastTransactionDate": "2025-01-24"
  },
  {
    "id": 428,
    "name": "Dt. Respati Rahmawati",
    "membership": "Silver",
    "email": "ywidodo@hotmail.com",
    "phone": "087 313 7971",
    "totalTransactions": 80,
    "totalSpent": 8766800,
    "lastTransactionDate": "2025-04-28"
  },
  {
    "id": 429,
    "name": "Kezia Suartini",
    "membership": "Regular",
    "email": "zulkarnainprakosa@gmail.com",
    "phone": "+62 (37) 407 7943",
    "totalTransactions": 57,
    "totalSpent": 5571693,
    "lastTransactionDate": "2025-06-06"
  },
  {
    "id": 430,
    "name": "R. Vanesa Sinaga, S.Farm",
    "membership": "Silver",
    "email": "yunitamulyani@perum.web.id",
    "phone": "(0014) 262 0370",
    "totalTransactions": 84,
    "totalSpent": 3837456,
    "lastTransactionDate": "2025-02-14"
  },
  {
    "id": 431,
    "name": "Yuliana Namaga",
    "membership": "Regular",
    "email": "irawanrizki@cv.com",
    "phone": "+62 (0181) 359 9898",
    "totalTransactions": 42,
    "totalSpent": 2631384,
    "lastTransactionDate": "2025-04-10"
  },
  {
    "id": 432,
    "name": "Drs. Ikin Maulana, S.IP",
    "membership": "Regular",
    "email": "udamanik@perum.ponpes.id",
    "phone": "(044) 822 1758",
    "totalTransactions": 41,
    "totalSpent": 2319206,
    "lastTransactionDate": "2025-06-20"
  },
  {
    "id": 433,
    "name": "Gina Pertiwi, M.M.",
    "membership": "Regular",
    "email": "ianggriawan@gmail.com",
    "phone": "+62-004-806-7571",
    "totalTransactions": 41,
    "totalSpent": 3542441,
    "lastTransactionDate": "2025-04-09"
  },
  {
    "id": 434,
    "name": "R. Zaenab Nainggolan, S.Sos",
    "membership": "Silver",
    "email": "mila61@cv.net.id",
    "phone": "+62 (0296) 882 7697",
    "totalTransactions": 74,
    "totalSpent": 5442700,
    "lastTransactionDate": "2025-06-09"
  },
  {
    "id": 435,
    "name": "Asirwanda Santoso, S.Gz",
    "membership": "Regular",
    "email": "daryanirajata@gmail.com",
    "phone": "(015) 607-8327",
    "totalTransactions": 49,
    "totalSpent": 4090471,
    "lastTransactionDate": "2025-05-09"
  },
  {
    "id": 436,
    "name": "Tugiman Puspasari, M.Pd",
    "membership": "Gold",
    "email": "perkasa51@perum.gov",
    "phone": "+62 (0096) 496-6834",
    "totalTransactions": 47,
    "totalSpent": 1873185,
    "lastTransactionDate": "2025-02-24"
  },
  {
    "id": 437,
    "name": "drg. Aisyah Santoso",
    "membership": "Platinum",
    "email": "gadang17@gmail.com",
    "phone": "+62 (85) 162 2593",
    "totalTransactions": 76,
    "totalSpent": 4344616,
    "lastTransactionDate": "2025-06-30"
  },
  {
    "id": 438,
    "name": "Hasim Saefullah, M.Pd",
    "membership": "Gold",
    "email": "mardhiyahkarimah@ud.ponpes.id",
    "phone": "083 906 2467",
    "totalTransactions": 94,
    "totalSpent": 12315034,
    "lastTransactionDate": "2025-06-09"
  },
  {
    "id": 439,
    "name": "Dr. Ibun Suartini, M.Farm",
    "membership": "Platinum",
    "email": "ndamanik@pt.net",
    "phone": "+62-193-592-3613",
    "totalTransactions": 57,
    "totalSpent": 4923090,
    "lastTransactionDate": "2025-01-29"
  },
  {
    "id": 440,
    "name": "Tantri Wasita",
    "membership": "Gold",
    "email": "hardi30@ud.go.id",
    "phone": "+62 (025) 447 2419",
    "totalTransactions": 53,
    "totalSpent": 7467117,
    "lastTransactionDate": "2025-02-10"
  },
  {
    "id": 441,
    "name": "Jamalia Yulianti",
    "membership": "Gold",
    "email": "zamirasiregar@pt.go.id",
    "phone": "+62 (077) 182 4989",
    "totalTransactions": 82,
    "totalSpent": 7329570,
    "lastTransactionDate": "2025-01-18"
  },
  {
    "id": 442,
    "name": "Ir. Artanto Palastri",
    "membership": "Regular",
    "email": "jhariyah@pt.my.id",
    "phone": "+62 (0681) 359 2664",
    "totalTransactions": 33,
    "totalSpent": 1663431,
    "lastTransactionDate": "2025-05-26"
  },
  {
    "id": 443,
    "name": "Raisa Wijayanti",
    "membership": "Regular",
    "email": "jsafitri@ud.net",
    "phone": "+62 (594) 501 1929",
    "totalTransactions": 49,
    "totalSpent": 1440061,
    "lastTransactionDate": "2025-04-16"
  },
  {
    "id": 444,
    "name": "Asmianto Kuswandari",
    "membership": "Regular",
    "email": "zamirawibowo@hotmail.com",
    "phone": "+62-051-171-6039",
    "totalTransactions": 77,
    "totalSpent": 10443356,
    "lastTransactionDate": "2025-05-11"
  },
  {
    "id": 445,
    "name": "KH. Kala Widodo, S.Kom",
    "membership": "Regular",
    "email": "jamal62@gmail.com",
    "phone": "089 455 9067",
    "totalTransactions": 69,
    "totalSpent": 9853545,
    "lastTransactionDate": "2025-04-14"
  },
  {
    "id": 446,
    "name": "Ajiono Riyanti",
    "membership": "Silver",
    "email": "lembahnuraini@hotmail.com",
    "phone": "+62 (0204) 664 8966",
    "totalTransactions": 70,
    "totalSpent": 1374590,
    "lastTransactionDate": "2025-01-01"
  },
  {
    "id": 447,
    "name": "Alika Simbolon",
    "membership": "Platinum",
    "email": "gaman04@yahoo.com",
    "phone": "(057) 758-0974",
    "totalTransactions": 90,
    "totalSpent": 2904930,
    "lastTransactionDate": "2025-04-06"
  },
  {
    "id": 448,
    "name": "Gawati Nababan",
    "membership": "Silver",
    "email": "pmustofa@ud.edu",
    "phone": "+62 (65) 401-6599",
    "totalTransactions": 99,
    "totalSpent": 7432128,
    "lastTransactionDate": "2025-05-29"
  },
  {
    "id": 449,
    "name": "Wahyu Habibi",
    "membership": "Regular",
    "email": "lmarpaung@cv.biz.id",
    "phone": "+62 (76) 774-6259",
    "totalTransactions": 22,
    "totalSpent": 475464,
    "lastTransactionDate": "2025-03-08"
  },
  {
    "id": 450,
    "name": "Ana Jailani",
    "membership": "Regular",
    "email": "kandajanuar@ud.ac.id",
    "phone": "0886008017",
    "totalTransactions": 97,
    "totalSpent": 9401822,
    "lastTransactionDate": "2025-01-13"
  },
  {
    "id": 451,
    "name": "dr. Jaya Lailasari",
    "membership": "Platinum",
    "email": "capanatsir@pd.my.id",
    "phone": "+62 (64) 261 2120",
    "totalTransactions": 14,
    "totalSpent": 178710,
    "lastTransactionDate": "2025-04-24"
  },
  {
    "id": 452,
    "name": "T. Dartono Kuswandari",
    "membership": "Gold",
    "email": "satyasitumorang@hotmail.com",
    "phone": "(080) 785 2548",
    "totalTransactions": 34,
    "totalSpent": 2318664,
    "lastTransactionDate": "2025-02-08"
  },
  {
    "id": 453,
    "name": "Dian Maheswara",
    "membership": "Regular",
    "email": "jono54@pt.mil.id",
    "phone": "+62 (0454) 752 3112",
    "totalTransactions": 58,
    "totalSpent": 6268234,
    "lastTransactionDate": "2025-02-02"
  },
  {
    "id": 454,
    "name": "Warji Hassanah",
    "membership": "Gold",
    "email": "nzulaika@hotmail.com",
    "phone": "+62 (077) 633 4272",
    "totalTransactions": 60,
    "totalSpent": 8471640,
    "lastTransactionDate": "2025-02-06"
  },
  {
    "id": 455,
    "name": "Taswir Puspita",
    "membership": "Regular",
    "email": "cakrabuanakusmawati@yahoo.com",
    "phone": "+62-80-196-3045",
    "totalTransactions": 45,
    "totalSpent": 739710,
    "lastTransactionDate": "2025-01-05"
  },
  {
    "id": 456,
    "name": "Dagel Firmansyah, S.Sos",
    "membership": "Regular",
    "email": "hafshah82@perum.id",
    "phone": "+62 (0001) 816-7784",
    "totalTransactions": 14,
    "totalSpent": 1224230,
    "lastTransactionDate": "2025-05-18"
  },
  {
    "id": 457,
    "name": "Saiful Anggraini",
    "membership": "Gold",
    "email": "kalimrajasa@yahoo.com",
    "phone": "+62 (446) 083-8517",
    "totalTransactions": 11,
    "totalSpent": 444686,
    "lastTransactionDate": "2025-04-09"
  },
  {
    "id": 458,
    "name": "R.A. Mila Puspasari",
    "membership": "Silver",
    "email": "yuniaryulia@cv.edu",
    "phone": "0878848699",
    "totalTransactions": 45,
    "totalSpent": 4129200,
    "lastTransactionDate": "2025-04-27"
  },
  {
    "id": 459,
    "name": "Rini Nuraini",
    "membership": "Regular",
    "email": "samosirlasmono@perum.ac.id",
    "phone": "(0246) 301 9864",
    "totalTransactions": 59,
    "totalSpent": 3789511,
    "lastTransactionDate": "2025-04-22"
  },
  {
    "id": 460,
    "name": "Diah Putra",
    "membership": "Platinum",
    "email": "hmarpaung@cv.edu",
    "phone": "+62 (087) 062-9328",
    "totalTransactions": 45,
    "totalSpent": 6067035,
    "lastTransactionDate": "2025-02-02"
  },
  {
    "id": 461,
    "name": "Dt. Narji Permata",
    "membership": "Silver",
    "email": "erikmaheswara@pt.gov",
    "phone": "+62-0200-186-7661",
    "totalTransactions": 57,
    "totalSpent": 7330542,
    "lastTransactionDate": "2025-06-17"
  },
  {
    "id": 462,
    "name": "Kacung Usamah",
    "membership": "Platinum",
    "email": "amaheswara@hotmail.com",
    "phone": "+62 (043) 561 4038",
    "totalTransactions": 9,
    "totalSpent": 798408,
    "lastTransactionDate": "2025-01-08"
  },
  {
    "id": 463,
    "name": "Sadina Prasasta",
    "membership": "Platinum",
    "email": "laksmiwatikusuma@perum.co.id",
    "phone": "+62 (0695) 100-3076",
    "totalTransactions": 91,
    "totalSpent": 3655288,
    "lastTransactionDate": "2025-02-25"
  },
  {
    "id": 464,
    "name": "Ade Uwais",
    "membership": "Gold",
    "email": "lintang67@gmail.com",
    "phone": "+62 (006) 666 4110",
    "totalTransactions": 44,
    "totalSpent": 1701392,
    "lastTransactionDate": "2025-06-26"
  },
  {
    "id": 465,
    "name": "Hartana Uwais, S.Pd",
    "membership": "Gold",
    "email": "prasetyokardi@pd.co.id",
    "phone": "+62 (069) 949-7089",
    "totalTransactions": 95,
    "totalSpent": 7024300,
    "lastTransactionDate": "2025-06-24"
  },
  {
    "id": 466,
    "name": "Vera Purwanti",
    "membership": "Silver",
    "email": "jandriani@ud.go.id",
    "phone": "0899962697",
    "totalTransactions": 71,
    "totalSpent": 3690438,
    "lastTransactionDate": "2025-01-02"
  },
  {
    "id": 467,
    "name": "Karsana Pradipta",
    "membership": "Regular",
    "email": "halimahfitria@hotmail.com",
    "phone": "(0915) 059-6257",
    "totalTransactions": 72,
    "totalSpent": 8767440,
    "lastTransactionDate": "2025-06-01"
  },
  {
    "id": 468,
    "name": "Kairav Hasanah",
    "membership": "Gold",
    "email": "riyantijasmani@gmail.com",
    "phone": "+62-12-657-8982",
    "totalTransactions": 30,
    "totalSpent": 3485400,
    "lastTransactionDate": "2025-06-12"
  },
  {
    "id": 469,
    "name": "Gada Hutapea",
    "membership": "Regular",
    "email": "estiawan17@ud.int",
    "phone": "(0774) 127 4692",
    "totalTransactions": 24,
    "totalSpent": 2958744,
    "lastTransactionDate": "2025-03-14"
  },
  {
    "id": 470,
    "name": "Bakti Namaga",
    "membership": "Regular",
    "email": "cengkal99@cv.gov",
    "phone": "+62 (97) 589 1704",
    "totalTransactions": 4,
    "totalSpent": 246908,
    "lastTransactionDate": "2025-06-01"
  },
  {
    "id": 471,
    "name": "Karimah Santoso, S.E.I",
    "membership": "Regular",
    "email": "wulan45@pt.com",
    "phone": "+62 (25) 709 0016",
    "totalTransactions": 76,
    "totalSpent": 9317904,
    "lastTransactionDate": "2025-05-20"
  },
  {
    "id": 472,
    "name": "Jasmin Wasita, S.T.",
    "membership": "Gold",
    "email": "nnarpati@ud.or.id",
    "phone": "+62 (89) 540-0178",
    "totalTransactions": 1,
    "totalSpent": 66307,
    "lastTransactionDate": "2025-02-11"
  },
  {
    "id": 473,
    "name": "Drs. Elvina Marpaung, S.T.",
    "membership": "Platinum",
    "email": "cemetimansur@yahoo.com",
    "phone": "+62 (068) 507 1058",
    "totalTransactions": 36,
    "totalSpent": 950400,
    "lastTransactionDate": "2025-05-06"
  },
  {
    "id": 474,
    "name": "Umi Halim, S.Pt",
    "membership": "Silver",
    "email": "ade92@pt.gov",
    "phone": "(010) 537-0923",
    "totalTransactions": 69,
    "totalSpent": 4071690,
    "lastTransactionDate": "2025-05-04"
  },
  {
    "id": 475,
    "name": "Jail Hidayanto",
    "membership": "Regular",
    "email": "widya00@yahoo.com",
    "phone": "+62 (0189) 485 4329",
    "totalTransactions": 42,
    "totalSpent": 2589762,
    "lastTransactionDate": "2025-01-08"
  },
  {
    "id": 476,
    "name": "Laras Rahayu",
    "membership": "Regular",
    "email": "isitumorang@ud.mil.id",
    "phone": "+62 (098) 273 4813",
    "totalTransactions": 15,
    "totalSpent": 1181610,
    "lastTransactionDate": "2025-04-11"
  },
  {
    "id": 477,
    "name": "H. Prayitna Hidayanto, S.Gz",
    "membership": "Regular",
    "email": "bakijan25@hotmail.com",
    "phone": "(032) 174 3574",
    "totalTransactions": 68,
    "totalSpent": 6266676,
    "lastTransactionDate": "2025-06-24"
  },
  {
    "id": 478,
    "name": "Sutan Gandi Maryadi, S.Farm",
    "membership": "Platinum",
    "email": "isaputra@pt.sch.id",
    "phone": "0834488384",
    "totalTransactions": 79,
    "totalSpent": 8919337,
    "lastTransactionDate": "2025-04-11"
  },
  {
    "id": 479,
    "name": "Wirda Pradana",
    "membership": "Regular",
    "email": "rosman28@gmail.com",
    "phone": "+62 (507) 740 6579",
    "totalTransactions": 45,
    "totalSpent": 4602150,
    "lastTransactionDate": "2025-02-03"
  },
  {
    "id": 480,
    "name": "Cindy Utama",
    "membership": "Silver",
    "email": "hendrapratiwi@gmail.com",
    "phone": "+62-90-855-1074",
    "totalTransactions": 80,
    "totalSpent": 4418160,
    "lastTransactionDate": "2025-03-06"
  },
  {
    "id": 481,
    "name": "Mulyanto Rahimah",
    "membership": "Gold",
    "email": "dalionohutasoit@pd.go.id",
    "phone": "+62 (090) 254-7602",
    "totalTransactions": 79,
    "totalSpent": 2545143,
    "lastTransactionDate": "2025-05-21"
  },
  {
    "id": 482,
    "name": "Ajiono Waskita, M.Ak",
    "membership": "Gold",
    "email": "lasmonosantoso@hotmail.com",
    "phone": "+62 (020) 122 7595",
    "totalTransactions": 41,
    "totalSpent": 1676736,
    "lastTransactionDate": "2025-02-01"
  },
  {
    "id": 483,
    "name": "Adikara Manullang",
    "membership": "Gold",
    "email": "hutapeamanah@gmail.com",
    "phone": "+62 (325) 947 9507",
    "totalTransactions": 40,
    "totalSpent": 1626280,
    "lastTransactionDate": "2025-06-18"
  },
  {
    "id": 484,
    "name": "Yahya Lailasari",
    "membership": "Regular",
    "email": "inainggolan@perum.sch.id",
    "phone": "+62 (031) 006-4934",
    "totalTransactions": 48,
    "totalSpent": 2258688,
    "lastTransactionDate": "2025-02-23"
  },
  {
    "id": 485,
    "name": "Amalia Putra, M.Farm",
    "membership": "Regular",
    "email": "setiawanmursinin@pt.org",
    "phone": "089 411 8491",
    "totalTransactions": 54,
    "totalSpent": 2491614,
    "lastTransactionDate": "2025-05-30"
  },
  {
    "id": 486,
    "name": "Gandi Susanti, M.Ak",
    "membership": "Regular",
    "email": "mustofa35@cv.go.id",
    "phone": "+62 (000) 679 9006",
    "totalTransactions": 55,
    "totalSpent": 3228170,
    "lastTransactionDate": "2025-02-11"
  },
  {
    "id": 487,
    "name": "Yunita Pudjiastuti",
    "membership": "Gold",
    "email": "palastriprayitna@pd.net.id",
    "phone": "084 233 9449",
    "totalTransactions": 82,
    "totalSpent": 4543784,
    "lastTransactionDate": "2025-04-20"
  },
  {
    "id": 488,
    "name": "Zelda Prasetyo",
    "membership": "Gold",
    "email": "wijayaami@pd.com",
    "phone": "+62-250-173-6542",
    "totalTransactions": 63,
    "totalSpent": 5400108,
    "lastTransactionDate": "2025-05-15"
  },
  {
    "id": 489,
    "name": "Fitria Suwarno",
    "membership": "Regular",
    "email": "qnasyiah@perum.gov",
    "phone": "+62 (33) 451 1009",
    "totalTransactions": 24,
    "totalSpent": 2219160,
    "lastTransactionDate": "2025-06-23"
  },
  {
    "id": 490,
    "name": "Umar Andriani, S.Gz",
    "membership": "Silver",
    "email": "adikarauyainah@hotmail.com",
    "phone": "0868430211",
    "totalTransactions": 80,
    "totalSpent": 1924240,
    "lastTransactionDate": "2025-01-07"
  },
  {
    "id": 491,
    "name": "Maimunah Prasetya",
    "membership": "Gold",
    "email": "suryonoviolet@pd.co.id",
    "phone": "+62 (12) 996-4260",
    "totalTransactions": 2,
    "totalSpent": 274074,
    "lastTransactionDate": "2025-03-15"
  },
  {
    "id": 492,
    "name": "R.A. Lili Winarsih, S.E.",
    "membership": "Regular",
    "email": "vinsenuwais@perum.ac.id",
    "phone": "(0709) 207 1152",
    "totalTransactions": 25,
    "totalSpent": 2766200,
    "lastTransactionDate": "2025-02-13"
  },
  {
    "id": 493,
    "name": "Umi Pudjiastuti, S.Ked",
    "membership": "Regular",
    "email": "setyanarpati@perum.gov",
    "phone": "+62 (058) 189 7059",
    "totalTransactions": 53,
    "totalSpent": 7361806,
    "lastTransactionDate": "2025-02-12"
  },
  {
    "id": 494,
    "name": "Cici Kusumo",
    "membership": "Regular",
    "email": "gabriellawahyudin@yahoo.com",
    "phone": "0881959772",
    "totalTransactions": 91,
    "totalSpent": 11498123,
    "lastTransactionDate": "2025-01-18"
  },
  {
    "id": 495,
    "name": "Cinta Wibowo, M.Pd",
    "membership": "Platinum",
    "email": "siraitjasmani@perum.ponpes.id",
    "phone": "(092) 897 2845",
    "totalTransactions": 22,
    "totalSpent": 696762,
    "lastTransactionDate": "2025-05-16"
  },
  {
    "id": 496,
    "name": "Zelaya Habibi",
    "membership": "Silver",
    "email": "gandikuswandari@pt.ponpes.id",
    "phone": "+62-948-232-2041",
    "totalTransactions": 98,
    "totalSpent": 6645380,
    "lastTransactionDate": "2025-06-20"
  },
  {
    "id": 497,
    "name": "Nova Setiawan",
    "membership": "Gold",
    "email": "ellakusumo@pd.sch.id",
    "phone": "+62-020-203-0423",
    "totalTransactions": 5,
    "totalSpent": 410255,
    "lastTransactionDate": "2025-02-22"
  },
  {
    "id": 498,
    "name": "Cager Farida",
    "membership": "Gold",
    "email": "dodo13@yahoo.com",
    "phone": "+62-028-165-0646",
    "totalTransactions": 69,
    "totalSpent": 5911437,
    "lastTransactionDate": "2025-06-14"
  },
  {
    "id": 499,
    "name": "Mahmud Hakim",
    "membership": "Regular",
    "email": "tasnimhasanah@yahoo.com",
    "phone": "+62 (691) 983-2102",
    "totalTransactions": 100,
    "totalSpent": 12988400,
    "lastTransactionDate": "2025-02-07"
  },
  {
    "id": 500,
    "name": "Heryanto Zulaika",
    "membership": "Platinum",
    "email": "ysalahudin@cv.or.id",
    "phone": "+62-104-384-1966",
    "totalTransactions": 71,
    "totalSpent": 10217184,
    "lastTransactionDate": "2025-04-26"
  }
];

export default customers;