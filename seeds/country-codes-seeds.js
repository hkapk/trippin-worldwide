const { Code } = require('../models');

const countryCodeData = [
    {
        "country_code_name": "Afghanistan",
        "country_code": "AF"
    },
    {
        "country_code_name": "Albania",
        "country_code": "AL"
    },
    {
        "country_code_name": "Algeria",
        "country_code": "DZ"
    },
    {
        "country_code_name": "American Samoa",
        "country_code": "AS"
    },
    {
        "country_code_name": "Andorra",
        "country_code": "AD"
    },
    {
        "country_code_name": "Angola",
        "country_code": "AO"
    },
    {
        "country_code_name": "Anguilla",
        "country_code": "AI"
    },
    {
        "country_code_name": "Antarctica",
        "country_code": "AQ"
    },
    {
        "country_code_name": "Antigua and Barbuda",
        "country_code": "AG"
    },
    {
        "country_code_name": "Argentina",
        "country_code": "AR"
    },
    {
        "country_code_name": "Armenia",
        "country_code": "AM"
    },
    {
        "country_code_name": "Aruba",
        "country_code": "AW"
    },
    {
        "country_code_name": "Australia",
        "country_code": "AU"
    },
    {
        "country_code_name": "Austria",
        "country_code": "AT"
    },
    {
        "country_code_name": "Azerbaijan",
        "country_code": "AZ"
    },
    {
        "country_code_name": "Bahamas (the)",
        "country_code": "BS"
    },
    {
        "country_code_name": "Bahrain",
        "country_code": "BH"
    },
    {
        "country_code_name": "Bangladesh",
        "country_code": "BD"
    },
    {
        "country_code_name": "Barbados",
        "country_code": "BB"
    },
    {
        "country_code_name": "Belarus",
        "country_code": "BY"
    },
    {
        "country_code_name": "Belgium",
        "country_code": "BE"
    },
    {
        "country_code_name": "Belize",
        "country_code": "BZ"
    },
    {
        "country_code_name": "Benin",
        "country_code": "BJ"
    },
    {
        "country_code_name": "Bermuda",
        "country_code": "BM"
    },
    {
        "country_code_name": "Bhutan",
        "country_code": "BT"
    },
    {
        "country_code_name": "Bolivia (Plurinational State of)",
        "country_code": "BO"
    },
    {
        "country_code_name": "\"Bonaire",
        "country_code": " Sint Eustatius and Saba\""
    },
    {
        "country_code_name": "Bosnia and Herzegovina",
        "country_code": "BA"
    },
    {
        "country_code_name": "Botswana",
        "country_code": "BW"
    },
    {
        "country_code_name": "Bouvet Island",
        "country_code": "BV"
    },
    {
        "country_code_name": "Brazil",
        "country_code": "BR"
    },
    {
        "country_code_name": "British Indian Ocean Territory (the)",
        "country_code": "IO"
    },
    {
        "country_code_name": "Brunei Darussalam",
        "country_code": "BN"
    },
    {
        "country_code_name": "Bulgaria",
        "country_code": "BG"
    },
    {
        "country_code_name": "Burkina Faso",
        "country_code": "BF"
    },
    {
        "country_code_name": "Burundi",
        "country_code": "BI"
    },
    {
        "country_code_name": "Cabo Verde",
        "country_code": "CV"
    },
    {
        "country_code_name": "Cambodia",
        "country_code": "KH"
    },
    {
        "country_code_name": "Cameroon",
        "country_code": "CM"
    },
    {
        "country_code_name": "Canada",
        "country_code": "CA"
    },
    {
        "country_code_name": "Cayman Islands (the)",
        "country_code": "KY"
    },
    {
        "country_code_name": "Central African Republic (the)",
        "country_code": "CF"
    },
    {
        "country_code_name": "Chad",
        "country_code": "TD"
    },
    {
        "country_code_name": "Chile",
        "country_code": "CL"
    },
    {
        "country_code_name": "China",
        "country_code": "CN"
    },
    {
        "country_code_name": "Christmas Island",
        "country_code": "CX"
    },
    {
        "country_code_name": "Cocos (Keeling) Islands (the)",
        "country_code": "CC"
    },
    {
        "country_code_name": "Colombia",
        "country_code": "CO"
    },
    {
        "country_code_name": "Comoros (the)",
        "country_code": "KM"
    },
    {
        "country_code_name": "Congo (the Democratic Republic of the)",
        "country_code": "CD"
    },
    {
        "country_code_name": "Congo (the)",
        "country_code": "CG"
    },
    {
        "country_code_name": "Cook Islands (the)",
        "country_code": "CK"
    },
    {
        "country_code_name": "Costa Rica",
        "country_code": "CR"
    },
    {
        "country_code_name": "Croatia",
        "country_code": "HR"
    },
    {
        "country_code_name": "Cuba",
        "country_code": "CU"
    },
    {
        "country_code_name": "Cura�ao",
        "country_code": "CW"
    },
    {
        "country_code_name": "Cyprus",
        "country_code": "CY"
    },
    {
        "country_code_name": "Czechia",
        "country_code": "CZ"
    },
    {
        "country_code_name": "C�te d'Ivoire",
        "country_code": "CI"
    },
    {
        "country_code_name": "Denmark",
        "country_code": "DK"
    },
    {
        "country_code_name": "Djibouti",
        "country_code": "DJ"
    },
    {
        "country_code_name": "Dominica",
        "country_code": "DM"
    },
    {
        "country_code_name": "Dominican Republic (the)",
        "country_code": "DO"
    },
    {
        "country_code_name": "Ecuador",
        "country_code": "EC"
    },
    {
        "country_code_name": "Egypt",
        "country_code": "EG"
    },
    {
        "country_code_name": "El Salvador",
        "country_code": "SV"
    },
    {
        "country_code_name": "Equatorial Guinea",
        "country_code": "GQ"
    },
    {
        "country_code_name": "Eritrea",
        "country_code": "ER"
    },
    {
        "country_code_name": "Estonia",
        "country_code": "EE"
    },
    {
        "country_code_name": "Eswatini",
        "country_code": "SZ"
    },
    {
        "country_code_name": "Ethiopia",
        "country_code": "ET"
    },
    {
        "country_code_name": "Falkland Islands (the) [Malvinas]",
        "country_code": "FK"
    },
    {
        "country_code_name": "Faroe Islands (the)",
        "country_code": "FO"
    },
    {
        "country_code_name": "Fiji",
        "country_code": "FJ"
    },
    {
        "country_code_name": "Finland",
        "country_code": "FI"
    },
    {
        "country_code_name": "France",
        "country_code": "FR"
    },
    {
        "country_code_name": "French Guiana",
        "country_code": "GF"
    },
    {
        "country_code_name": "French Polynesia",
        "country_code": "PF"
    },
    {
        "country_code_name": "French Southern Territories (the)",
        "country_code": "TF"
    },
    {
        "country_code_name": "Gabon",
        "country_code": "GA"
    },
    {
        "country_code_name": "Gambia (the)",
        "country_code": "GM"
    },
    {
        "country_code_name": "Georgia",
        "country_code": "GE"
    },
    {
        "country_code_name": "Germany",
        "country_code": "DE"
    },
    {
        "country_code_name": "Ghana",
        "country_code": "GH"
    },
    {
        "country_code_name": "Gibraltar",
        "country_code": "GI"
    },
    {
        "country_code_name": "Greece",
        "country_code": "GR"
    },
    {
        "country_code_name": "Greenland",
        "country_code": "GL"
    },
    {
        "country_code_name": "Grenada",
        "country_code": "GD"
    },
    {
        "country_code_name": "Guadeloupe",
        "country_code": "GP"
    },
    {
        "country_code_name": "Guam",
        "country_code": "GU"
    },
    {
        "country_code_name": "Guatemala",
        "country_code": "GT"
    },
    {
        "country_code_name": "Guernsey",
        "country_code": "GG"
    },
    {
        "country_code_name": "Guinea",
        "country_code": "GN"
    },
    {
        "country_code_name": "Guinea-Bissau",
        "country_code": "GW"
    },
    {
        "country_code_name": "Guyana",
        "country_code": "GY"
    },
    {
        "country_code_name": "Haiti",
        "country_code": "HT"
    },
    {
        "country_code_name": "Heard Island and McDonald Islands",
        "country_code": "HM"
    },
    {
        "country_code_name": "Holy See (the)",
        "country_code": "VA"
    },
    {
        "country_code_name": "Honduras",
        "country_code": "HN"
    },
    {
        "country_code_name": "Hong Kong",
        "country_code": "HK"
    },
    {
        "country_code_name": "Hungary",
        "country_code": "HU"
    },
    {
        "country_code_name": "Iceland",
        "country_code": "IS"
    },
    {
        "country_code_name": "India",
        "country_code": "IN"
    },
    {
        "country_code_name": "Indonesia",
        "country_code": "ID"
    },
    {
        "country_code_name": "Iran (Islamic Republic of)",
        "country_code": "IR"
    },
    {
        "country_code_name": "Iraq",
        "country_code": "IQ"
    },
    {
        "country_code_name": "Ireland",
        "country_code": "IE"
    },
    {
        "country_code_name": "Isle of Man",
        "country_code": "IM"
    },
    {
        "country_code_name": "Israel",
        "country_code": "IL"
    },
    {
        "country_code_name": "Italy",
        "country_code": "IT"
    },
    {
        "country_code_name": "Jamaica",
        "country_code": "JM"
    },
    {
        "country_code_name": "Japan",
        "country_code": "JP"
    },
    {
        "country_code_name": "Jersey",
        "country_code": "JE"
    },
    {
        "country_code_name": "Jordan",
        "country_code": "JO"
    },
    {
        "country_code_name": "Kazakhstan",
        "country_code": "KZ"
    },
    {
        "country_code_name": "Kenya",
        "country_code": "KE"
    },
    {
        "country_code_name": "Kiribati",
        "country_code": "KI"
    },
    {
        "country_code_name": "Korea (the Democratic People's Republic of)",
        "country_code": "KP"
    },
    {
        "country_code_name": "Korea (the Republic of)",
        "country_code": "KR"
    },
    {
        "country_code_name": "Kuwait",
        "country_code": "KW"
    },
    {
        "country_code_name": "Kyrgyzstan",
        "country_code": "KG"
    },
    {
        "country_code_name": "Lao People's Democratic Republic (the)",
        "country_code": "LA"
    },
    {
        "country_code_name": "Latvia",
        "country_code": "LV"
    },
    {
        "country_code_name": "Lebanon",
        "country_code": "LB"
    },
    {
        "country_code_name": "Lesotho",
        "country_code": "LS"
    },
    {
        "country_code_name": "Liberia",
        "country_code": "LR"
    },
    {
        "country_code_name": "Libya",
        "country_code": "LY"
    },
    {
        "country_code_name": "Liechtenstein",
        "country_code": "LI"
    },
    {
        "country_code_name": "Lithuania",
        "country_code": "LT"
    },
    {
        "country_code_name": "Luxembourg",
        "country_code": "LU"
    },
    {
        "country_code_name": "Macao",
        "country_code": "MO"
    },
    {
        "country_code_name": "Madagascar",
        "country_code": "MG"
    },
    {
        "country_code_name": "Malawi",
        "country_code": "MW"
    },
    {
        "country_code_name": "Malaysia",
        "country_code": "MY"
    },
    {
        "country_code_name": "Maldives",
        "country_code": "MV"
    },
    {
        "country_code_name": "Mali",
        "country_code": "ML"
    },
    {
        "country_code_name": "Malta",
        "country_code": "MT"
    },
    {
        "country_code_name": "Marshall Islands (the)",
        "country_code": "MH"
    },
    {
        "country_code_name": "Martinique",
        "country_code": "MQ"
    },
    {
        "country_code_name": "Mauritania",
        "country_code": "MR"
    },
    {
        "country_code_name": "Mauritius",
        "country_code": "MU"
    },
    {
        "country_code_name": "Mayotte",
        "country_code": "YT"
    },
    {
        "country_code_name": "Mexico",
        "country_code": "MX"
    },
    {
        "country_code_name": "Micronesia (Federated States of)",
        "country_code": "FM"
    },
    {
        "country_code_name": "Moldova (the Republic of)",
        "country_code": "MD"
    },
    {
        "country_code_name": "Monaco",
        "country_code": "MC"
    },
    {
        "country_code_name": "Mongolia",
        "country_code": "MN"
    },
    {
        "country_code_name": "Montenegro",
        "country_code": "ME"
    },
    {
        "country_code_name": "Montserrat",
        "country_code": "MS"
    },
    {
        "country_code_name": "Morocco",
        "country_code": "MA"
    },
    {
        "country_code_name": "Mozambique",
        "country_code": "MZ"
    },
    {
        "country_code_name": "Myanmar",
        "country_code": "MM"
    },
    {
        "country_code_name": "Namibia",
        "country_code": "NA"
    },
    {
        "country_code_name": "Nauru",
        "country_code": "NR"
    },
    {
        "country_code_name": "Nepal",
        "country_code": "NP"
    },
    {
        "country_code_name": "Netherlands (the)",
        "country_code": "NL"
    },
    {
        "country_code_name": "New Caledonia",
        "country_code": "NC"
    },
    {
        "country_code_name": "New Zealand",
        "country_code": "NZ"
    },
    {
        "country_code_name": "Nicaragua",
        "country_code": "NI"
    },
    {
        "country_code_name": "Niger (the)",
        "country_code": "NE"
    },
    {
        "country_code_name": "Nigeria",
        "country_code": "NG"
    },
    {
        "country_code_name": "Niue",
        "country_code": "NU"
    },
    {
        "country_code_name": "Norfolk Island",
        "country_code": "NF"
    },
    {
        "country_code_name": "North Macedonia",
        "country_code": "MK"
    },
    {
        "country_code_name": "Northern Mariana Islands (the)",
        "country_code": "MP"
    },
    {
        "country_code_name": "Norway",
        "country_code": "NO"
    },
    {
        "country_code_name": "Oman",
        "country_code": "OM"
    },
    {
        "country_code_name": "Pakistan",
        "country_code": "PK"
    },
    {
        "country_code_name": "Palau",
        "country_code": "PW"
    },
    {
        "country_code_name": "\"Palestine",
        "country_code": " State of\""
    },
    {
        "country_code_name": "Panama",
        "country_code": "PA"
    },
    {
        "country_code_name": "Papua New Guinea",
        "country_code": "PG"
    },
    {
        "country_code_name": "Paraguay",
        "country_code": "PY"
    },
    {
        "country_code_name": "Peru",
        "country_code": "PE"
    },
    {
        "country_code_name": "Philippines (the)",
        "country_code": "PH"
    },
    {
        "country_code_name": "Pitcairn",
        "country_code": "PN"
    },
    {
        "country_code_name": "Poland",
        "country_code": "PL"
    },
    {
        "country_code_name": "Portugal",
        "country_code": "PT"
    },
    {
        "country_code_name": "Puerto Rico",
        "country_code": "PR"
    },
    {
        "country_code_name": "Qatar",
        "country_code": "QA"
    },
    {
        "country_code_name": "Romania",
        "country_code": "RO"
    },
    {
        "country_code_name": "Russian Federation (the)",
        "country_code": "RU"
    },
    {
        "country_code_name": "Rwanda",
        "country_code": "RW"
    },
    {
        "country_code_name": "R�union",
        "country_code": "RE"
    },
    {
        "country_code_name": "Saint Barth�lemy",
        "country_code": "BL"
    },
    {
        "country_code_name": "\"Saint Helena",
        "country_code": " Ascension and Tristan da Cunha\""
    },
    {
        "country_code_name": "Saint Kitts and Nevis",
        "country_code": "KN"
    },
    {
        "country_code_name": "Saint Lucia",
        "country_code": "LC"
    },
    {
        "country_code_name": "Saint Martin (French part)",
        "country_code": "MF"
    },
    {
        "country_code_name": "Saint Pierre and Miquelon",
        "country_code": "PM"
    },
    {
        "country_code_name": "Saint Vincent and the Grenadines",
        "country_code": "VC"
    },
    {
        "country_code_name": "Samoa",
        "country_code": "WS"
    },
    {
        "country_code_name": "San Marino",
        "country_code": "SM"
    },
    {
        "country_code_name": "Sao Tome and Principe",
        "country_code": "ST"
    },
    {
        "country_code_name": "Saudi Arabia",
        "country_code": "SA"
    },
    {
        "country_code_name": "Senegal",
        "country_code": "SN"
    },
    {
        "country_code_name": "Serbia",
        "country_code": "RS"
    },
    {
        "country_code_name": "Seychelles",
        "country_code": "SC"
    },
    {
        "country_code_name": "Sierra Leone",
        "country_code": "SL"
    },
    {
        "country_code_name": "Singapore",
        "country_code": "SG"
    },
    {
        "country_code_name": "Sint Maarten (Dutch part)",
        "country_code": "SX"
    },
    {
        "country_code_name": "Slovakia",
        "country_code": "SK"
    },
    {
        "country_code_name": "Slovenia",
        "country_code": "SI"
    },
    {
        "country_code_name": "Solomon Islands",
        "country_code": "SB"
    },
    {
        "country_code_name": "Somalia",
        "country_code": "SO"
    },
    {
        "country_code_name": "South Africa",
        "country_code": "ZA"
    },
    {
        "country_code_name": "South Georgia and the South Sandwich Islands",
        "country_code": "GS"
    },
    {
        "country_code_name": "South Sudan",
        "country_code": "SS"
    },
    {
        "country_code_name": "Spain",
        "country_code": "ES"
    },
    {
        "country_code_name": "Sri Lanka",
        "country_code": "LK"
    },
    {
        "country_code_name": "Sudan (the)",
        "country_code": "SD"
    },
    {
        "country_code_name": "Suriname",
        "country_code": "SR"
    },
    {
        "country_code_name": "Svalbard and Jan Mayen",
        "country_code": "SJ"
    },
    {
        "country_code_name": "Sweden",
        "country_code": "SE"
    },
    {
        "country_code_name": "Switzerland",
        "country_code": "CH"
    },
    {
        "country_code_name": "Syrian Arab Republic (the)",
        "country_code": "SY"
    },
    {
        "country_code_name": "Taiwan (Province of China)",
        "country_code": "TW"
    },
    {
        "country_code_name": "Tajikistan",
        "country_code": "TJ"
    },
    {
        "country_code_name": "\"Tanzania",
        "country_code": " the United Republic of\""
    },
    {
        "country_code_name": "Thailand",
        "country_code": "TH"
    },
    {
        "country_code_name": "Timor-Leste",
        "country_code": "TL"
    },
    {
        "country_code_name": "Togo",
        "country_code": "TG"
    },
    {
        "country_code_name": "Tokelau",
        "country_code": "TK"
    },
    {
        "country_code_name": "Tonga",
        "country_code": "TO"
    },
    {
        "country_code_name": "Trinidad and Tobago",
        "country_code": "TT"
    },
    {
        "country_code_name": "Tunisia",
        "country_code": "TN"
    },
    {
        "country_code_name": "Turkey",
        "country_code": "TR"
    },
    {
        "country_code_name": "Turkmenistan",
        "country_code": "TM"
    },
    {
        "country_code_name": "Turks and Caicos Islands (the)",
        "country_code": "TC"
    },
    {
        "country_code_name": "Tuvalu",
        "country_code": "TV"
    },
    {
        "country_code_name": "Uganda",
        "country_code": "UG"
    },
    {
        "country_code_name": "Ukraine",
        "country_code": "UA"
    },
    {
        "country_code_name": "United Arab Emirates (the)",
        "country_code": "AE"
    },
    {
        "country_code_name": "United Kingdom of Great Britain and Northern Ireland (the)",
        "country_code": "GB"
    },
    {
        "country_code_name": "United States Minor Outlying Islands (the)",
        "country_code": "UM"
    },
    {
        "country_code_name": "United States of America (the)",
        "country_code": "US"
    },
    {
        "country_code_name": "Uruguay",
        "country_code": "UY"
    },
    {
        "country_code_name": "Uzbekistan",
        "country_code": "UZ"
    },
    {
        "country_code_name": "Vanuatu",
        "country_code": "VU"
    },
    {
        "country_code_name": "Venezuela (Bolivarian Republic of)",
        "country_code": "VE"
    },
    {
        "country_code_name": "Viet Nam",
        "country_code": "VN"
    },
    {
        "country_code_name": "Virgin Islands (British)",
        "country_code": "VG"
    },
    {
        "country_code_name": "Virgin Islands (U.S.)",
        "country_code": "VI"
    },
    {
        "country_code_name": "Wallis and Futuna",
        "country_code": "WF"
    },
    {
        "country_code_name": "Western Sahara*",
        "country_code": "EH"
    },
    {
        "country_code_name": "Yemen",
        "country_code": "YE"
    },
    {
        "country_code_name": "Zambia",
        "country_code": "ZM"
    },
    {
        "country_code_name": "Zimbabwe",
        "country_code": "ZW"
    },
    {
        "country_code_name": "Åland Islands",
        "country_code": "AX"
    },
]

const seedCountryCodes = () => Code.bulkCreate(countryCodeData);

module.exports = seedCountryCodes;