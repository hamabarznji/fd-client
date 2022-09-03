const stores = [
    {
        id: 1,
        name: "KFC",
        address: "Erbil",
        sales: "50",
        rating: 6.2,
        date: "2022",
        isOpen: true,
        imageSrc:
            "https://pbs.twimg.com/media/FUlqxDWWYAwpAvS?format=png&name=small",
        storeImage:
            "https://t3.ftcdn.net/jpg/02/10/69/88/240_F_210698830_QKo8rxaAFpmpbOGYtYmKAQDUTcdK3SrK.jpg",
        meals: [
            {
                id: "kfc1",
                storeid: 1,
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                name: "Meal 1",
                price: "8",
                qty: 4,
                imageSrc:
                    "https://t4.ftcdn.net/jpg/01/41/18/37/240_F_141183727_8DAivMmYoRuchveEUTTqzuuTtSA9p9Gn.jpg",
            },
            {
                id: "kfc2",
                storeid: 1,
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                name: "Meal 2",

                price: "4",
                qty: 4,
                imageSrc:
                    "https://t4.ftcdn.net/jpg/00/68/60/15/240_F_68601528_UQly6SRcuSAiZMIer9zWXQKMkjZuk9O4.jpg",
            },
            {
                id: "kfc3",
                storeid: 1,
                name: "Meal 4",
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                price: "9",
                qty: 4,
                imageSrc:
                    "https://t3.ftcdn.net/jpg/02/30/33/96/240_F_230339689_z0TDRqHMyu8X6mspL8bsMNzMGNsphFwX.jpg",
            },
            {
                id: "kfc4",
                storeid: 1,
                name: "Meal 4",
                price: "5",
                qty: 7,
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                imageSrc:
                    "https://t3.ftcdn.net/jpg/00/84/36/32/240_F_84363201_QNzzXiklazOsIf8i7NW01SJHQQL38TvP.jpg",
            },
            {
                id: "kfc5",
                storeid: 1,
                name: "Meal 5",
                price: "5",
                qty: 7,
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                imageSrc:
                    "https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-tomato-sauce_1150-20213.jpg?w=1380&t=st=1662071723~exp=1662072323~hmac=2561fc79683df1048ca0ed7d96256f91791169fe4bc1a3c6d1fae7ee0d694cc4",
            },
        ],
    },
    {
        id: 2,
        name: "Hardeez",
        address: "Erbil",
        isOpen: true,
        rating: 7.4,
        date: "2023",
        slaes: "230",
        imageSrc:
            "https://assets.entrepreneur.com/franchise/305068-avatar-image-1600102238.jpeg?auto=webp&quality=95&crop=1:1&width=95",
        storeImage:
            "https://img.freepik.com/premium-photo/fresh-tasty-homemade-burger-wooden-table_147620-1307.jpg?w=1380",
        meals: [
            {
                id: "hardees1",
                storeid: 1,
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                name: "Hardees Meal 1",
                price: "8",
                slaes: "100",
                qty: 4,
                imageSrc:
                    "https://img.freepik.com/premium-photo/big-double-cheddar-cheeseburger-with-chicken-cutlet_147620-1306.jpg?w=996",
            },
            {
                id: "hardees2",
                storeid: 1,
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                name: "Hardees Meal 2",

                price: "4",
                qty: 4,
                imageSrc:
                    "https://img.freepik.com/premium-photo/fresh-tasty-homemade-burger-wooden-table_147620-1312.jpg?size=338&ext=jpg",
            },
            {
                id: "hardees3",
                storeid: 1,
                name: "Hardees Meal 3",
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                price: "9",
                qty: 4,
                imageSrc:
                    "https://t3.ftcdn.net/jpg/02/58/43/30/240_F_258433064_mJhaTmeRh8Qmehpg3C4jBWj6gJ9A8Kwk.jpg",
            },
            {
                id: "hardees4",
                storeid: 1,
                name: "Hardees Meal 4",
                price: "5",
                qty: 7,
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                imageSrc:
                    "https://t3.ftcdn.net/jpg/02/14/83/66/240_F_214836687_ViWmBQfl0VOOMkjPmQjF9B12tfqLenO0.jpg",
            },
            {
                id: "hardees5",
                storeid: 1,
                name: "Hardees Meal 5",
                price: "5",
                qty: 7,
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                imageSrc:
                    "https://t3.ftcdn.net/jpg/00/74/53/26/240_F_74532687_UsuhVfIquidTUXzqZwnFjTTcvreXcnLx.jpg",
            },
        ],
    },
    {
        id: 3,
        name: "Burger King",
        address: "Erbil",
        isOpen: true,
        rating: 8.2,
        date: "2024",
        slaes: "201",

        imageSrc:
            "https://pbs.twimg.com/profile_images/1526142545708843008/mpGkDEq__400x400.jpg",
        storeImage:
            "https://img.freepik.com/premium-photo/maxi-hamburger-double-cheeseburger-with-flying-ingredients-isolated-wooden-background_158023-173.jpg?size=626&ext=jpg",
        meals: [
            {
                id: "burgerKing1",
                storeid: 1,
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                name: "Burger King Meal 1",
                price: "8",
                qty: 4,
                imageSrc:
                    "https://t4.ftcdn.net/jpg/02/30/30/71/240_F_230307176_PfsGx6S3QAdI51mi9YYiaifIQ3jIf1wu.jpg",
            },
            {
                id: "burgerKing2",
                storeid: 1,
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                name: "Burger King Meal 2",

                price: "4",
                qty: 4,
                imageSrc:
                    "https://t4.ftcdn.net/jpg/02/74/99/01/240_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg",
            },
            {
                id: "burgerKing3",
                storeid: 1,
                name: "Burger King Meal 3",
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                price: "9",
                qty: 4,
                imageSrc:
                    "https://t3.ftcdn.net/jpg/02/17/34/30/240_F_217343007_9Gpk6FQLW4VKtQ971OwAeMxds6v7lTZk.jpg",
            },
            {
                id: "burgerKing4",
                storeid: 1,
                name: "Burger King Meal 4",
                price: "5",
                qty: 7,
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                imageSrc:
                    "https://t4.ftcdn.net/jpg/01/76/97/57/240_F_176975770_Zq2bLwpLnr8a8TkKFdLT0UvTtZX1j4K9.jpg",
            },
            {
                id: "burgerKing5",
                storeid: 1,
                name: "Burger King Meal 5",
                price: "12",
                qty: 7,
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                imageSrc:
                    "https://t4.ftcdn.net/jpg/03/11/05/83/240_F_311058365_sgVDnW0QgBZjNnSdqOEhKigdodNyRvmA.jpg",
            },
        ],
    },
    {
        id: 4,
        name: "Shawarma Corner",
        address: "Erbil",
        isOpen: true,
        rating: 3.2,
        date: "2026",
        slaes: "222",

        imageSrc:
            "http://www.shawarma-corner.com/wp-content/uploads/2017/06/Shawarmacorner-Logo-01-1.png",
        storeImage:
            "https://img.freepik.com/free-photo/arabic-kebab-sandwich-wooden-flat-lay_23-2148651075.jpg?size=626&ext=jpg",
        meals: [
            {
                id: "shawarmacorner1",
                storeid: 1,
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                name: "Shawarma Corner Meal 1",
                price: "8",
                qty: 4,
                imageSrc:
                    "https://img.freepik.com/free-photo/side-view-chicken-doner-with-greens-cucumber-tomato-sauce-cucumber-red-onion-pita-slice-lemon-board_141793-4824.jpg?w=1380&t=st=1662074480~exp=1662075080~hmac=3fe40f5688f6c64c90fb58ac7ed98de5d2cb13a944ac098428f3630a9239220f",
            },
            {
                id: "shawarmacorner2",
                storeid: 1,
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                name: "Shawarma Corner Meal 2",

                price: "4",
                qty: 4,
                imageSrc:
                    "https://img.freepik.com/free-photo/chicken-doner-lavash-with-fries_141793-55.jpg?size=338&ext=jpg",
            },
            {
                id: "shawarmacorner3",
                storeid: 1,
                name: "Shawarma Corner Meal 3",
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                price: "9",
                qty: 4,
                imageSrc:
                    "https://img.freepik.com/free-photo/side-view-doner-pita-with-french-fries-fresh-cucumber-tomato_141793-4970.jpg?size=626&ext=jpg",
            },
            {
                id: "shawarmacorner4",
                storeid: 1,
                name: "Shawarma Corner Meal 4",
                price: "5",
                qty: 7,
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                imageSrc:
                    "https://img.freepik.com/free-photo/side-view-islander-doner-with-tomato-sauce-hot-green-pepper-grilled-tomato-yogurt-tray_141793-4971.jpg?size=626&ext=jpg",
            },
            {
                id: "shawarmacorner5",
                storeid: 1,
                name: "Shawarma Corner Meal 5",
                price: "5",
                qty: 7,
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                imageSrc:
                    "https://img.freepik.com/free-photo/meat-sandwith-served-with-french-fries_141793-17535.jpg?size=626&ext=jpg",
            },
        ],
    },
    {
        id: 5,
        name: "Defermo Restaurant",
        address: "Erbil",
        isOpen: true,
        rating: 4.4,
        date: "3000",
        slaes: "400",

        imageSrc:
            "https://bgare.net/files/img/companies/cOmk6ia07bKHwql9WTSlLcWZZ4Rc7dys6qWLjgy5.jpeg",
        storeImage:
            "https://pizzapalaceburwell.com/wp-content/uploads/2021/11/Food.jpg",
        meals: [
            {
                id: "defermo1",
                storeid: 1,
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                name: "Defermo Meal 1",
                price: "8",
                qty: 4,
                imageSrc:
                    "https://img.freepik.com/free-photo/indian-chicken-biryani-served-terracotta-bowl-with-yogurt-white-background-selective-focus_466689-72554.jpg?w=1380&t=st=1662074211~exp=1662074811~hmac=31f539fa86944968b44ec91298729dbc367e9bce913eba4d7fe7c04300b63361",
            },
            {
                id: "defermo2",
                storeid: 1,
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                name: "Defermo Meal 2",

                price: "4",
                qty: 4,
                imageSrc:
                    "https://img.freepik.com/free-photo/side-view-doner-with-grilled-chicken-greens-lettuce-tomato-french-fries-table_141793-4881.jpg?w=1380&t=st=1662074416~exp=1662075016~hmac=45ebc9056943521e7f8f690c7b3adc2a2a83171d8337ba3238d02b32a97e727c",
            },
            {
                id: "defermo3",
                storeid: 1,
                name: "Defermo Meal 3",
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                price: "9",
                qty: 4,
                imageSrc:
                    "https://img.freepik.com/free-photo/roasted-chicken_144627-13147.jpg?size=338&ext=jpg",
            },
            {
                id: "defermo4",
                storeid: 1,
                name: "Defermo Meal 4",
                price: "5",
                qty: 7,
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                imageSrc:
                    "https://img.freepik.com/free-photo/delicious-grilled-chicken-with-vegetables-dinner_144627-41493.jpg?size=626&ext=jpg",
            },
            {
                id: "defermo5",
                storeid: 1,
                name: "Defermo Meal 5",
                price: "5",
                qty: 7,
                description:
                    "There are many variations of passages of Lorem Ipsum available.",
                imageSrc:
                    "https://img.freepik.com/free-photo/top-view-vegetable-soup-with-meat-inside-plate-grey_140725-36040.jpg?w=1380&t=st=1662074328~exp=1662074928~hmac=52ce84280c7c580657eb0f7acb27871646e2b15acd482fc9bba6ea54290726cc",
            },
        ],
    },
    {
        id: 6,
        name: "Kebab Faruq",
        address: "Erbil",
        isOpen: false,
        rating: 3.2,
        date: "250",
        slaes: "350",
        imageSrc:
            "https://scontent.febl5-2.fna.fbcdn.net/v/t1.6435-9/74647539_104153587700428_6223966722156658688_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5DlwfcewOfEAX9Kf727&_nc_oc=AQkrny9SNofUtmnbJQbu3nvEMsUEf5m1Nl0gfPv0jkbXqIUNHUyDMUPEcw356jBIxIA&_nc_ht=scontent.febl5-2.fna&oh=00_AT8CFGv5mx12pUnQEkUAKXrTHPvUfjtWskOiIVSFx1j5-Q&oe=633A847A",
        storeImage:
            "https://pizzapalaceburwell.com/wp-content/uploads/2021/11/Food.jpg",
    },
];
export default stores;
