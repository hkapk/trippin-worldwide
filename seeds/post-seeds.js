const { Post } = require('../models');

const postData = [
    {
        user_id: 1,
        title: "Family trip to the City",
        description: "Sightseeing visit to Central Park, the MET, the Statue of Liberty, and Times Square",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        start_date: '2010-10-01',
        end_date: '2010-10-07',
        photo_url: "https://rvt-trippin-ww.s3.amazonaws.com/1641488001955_NewYork.jpg"
    },
    {
        user_id: 2,
        title: "My London Trip",
        description: "Tour of all of the english pubs",

        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        start_date: '2011-09-01',
        end_date: '2011-09-07',
        photo_url: "https://rvt-trippin-ww.s3.amazonaws.com/1641488445229_London.jpg"
    },
    {
        user_id: 3,
        title: "A Paris Adventure",
        description: "A trip filled with art and pastries",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        start_date: '2012-08-01',
        end_date: '2012-08-07',
        photo_url: "https://rvt-trippin-ww.s3.amazonaws.com/1641488484927_Paris.jpg"
    },
    {
        user_id: 4,
        title: "Trip to Down Under",
        description: "Harbor views and museums",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        start_date: '2013-07-01',
        end_date: '2013-07-07',
        photo_url: "https://rvt-trippin-ww.s3.amazonaws.com/1641489190578_Sydney.jpg"
    },
    {
        user_id: 5,
        title: "Beach Vacation",
        description: "Relaxing time with friends",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        start_date: '2014-06-01',
        end_date: '2014-06-07',
        photo_url: "https://rvt-trippin-ww.s3.amazonaws.com/1641488564350_beach.jpg",
    },
    {
        user_id: 1,
        title: "New Adventures in Japan",
        description: "A tour of Tokoyo life and culture",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        start_date: '2015-05-01',
        end_date: '2015-05-07',
        photo_url: "https://rvt-trippin-ww.s3.amazonaws.com/1641489239681_Tokyo.jpg"
    },
    {
        user_id: 2,
        title: "The Bay Area",
        description: "A visit to the Golden Gate bridge, wineries, and state parks",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        start_date: '2016-04-01',
        end_date: '2016-04-07',
        photo_url: "https://rvt-trippin-ww.s3.amazonaws.com/1641489407725_SanFran.jpg"
    },
    {
        user_id: 3,
        title: "Coastal visit to Spain",
        description: "Explored the city life and views of Spanish architecture",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        start_date: '2017-03-01',
        end_date: '2017-03-07',
        photo_url: "https://rvt-trippin-ww.s3.amazonaws.com/1641489475339_Spain.jpg"
    },
    {
        user_id: 4,
        title: "Island Visit",
        description: "Spent time on the beach and exploring the island landscape",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        start_date: '2018-02-01',
        end_date: '2018-02-07',
        photo_url: "https://rvt-trippin-ww.s3.amazonaws.com/1641489514202_Island.jpg"
    },
    {
        user_id: 5,
        title: "Getaway through Italy",
        description: "Toured the Italian city life and countryside",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        start_date: '2019-01-01',
        end_date: '2019-01-07',
        photo_url: "https://rvt-trippin-ww.s3.amazonaws.com/1641489723880_italycountry.jpg"
    },
    {
        user_id: 1,
        title: "Roman Holiday",
        description: "Sightseeing in capitol",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        start_date: '2020-12-01',
        end_date: '2020-12-07',
        photo_url: "https://rvt-trippin-ww.s3.amazonaws.com/1641489822073_Rome.jpg"
    },
    {
        user_id: 2,
        title: "Wine trip to Northern California",
        description: "Tour the city and traveled surrounding areas",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        start_date: '2021-11-01',
        end_date: '2021-11-07',
        photo_url: "https://rvt-trippin-ww.s3.amazonaws.com/1641489880513_wine.jpg",
    },
    {
        user_id: 3,
        title: "When in Rome",
        description: "Summer college trip with best friends from school",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        start_date: '2019-10-01',
        end_date: '2019-10-07',
        photo_url: "https://rvt-trippin-ww.s3.amazonaws.com/1641489779209_Rome2.jpg"
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;