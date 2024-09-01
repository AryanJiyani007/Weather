const defaultStates = [
    {
        name: "Mumbai",
        country: "India",
        state: "Maharashtra",
        lat: 19.0760,
        lon: 72.8777
    },
    {
        name: "Pune",
        country: "India",
        state: "Maharashtra",
        lat: 18.5204,
        lon: 73.8567
    },
    {
        name: "Delhi",
        country: "India",
        state: "Delhi",
        lat: 28.6139,
        lon: 77.2090
    },
    {
        name: "Bangalore",
        country: "India",
        state: "Karnataka",
        lat: 12.9716,
        lon: 77.5946
    },
    {
        name: "Surat",
        country: "India",
        state: "Gujarat",
        lat: 21.1702,
        lon: 72.8311
    },
    {
        name: "Jaipur",
        country: "India",
        state: "Rajasthan",
        lat: 26.9124,
        lon: 75.7873
    },
    {
        name: "Udaipur",
        country: "India",
        state: "Rajasthan",
        lat: 24.5854,
        lon: 73.7125
    },
    {
        name: "Nagpur",
        country: "India",
        state: "Maharashtra",
        lat: 21.1458,
        lon: 79.0882
    },
    {
        name: "Jodhpur",
        country: "India",
        state: "Rajasthan",
        lat: 26.2943,
        lon: 73.0243
    },
    
    {
        name: "Mysore",
        country: "India",
        state: "Karnataka",
        lat: 12.2958,
        lon: 76.6394
    },
    {
        name: "Hubli",
        country: "India",
        state: "Karnataka",
        lat: 15.3647,
        lon: 75.1330
    },
    {
        name: "Chennai",
        country: "India",
        state: "Tamil Nadu",
        lat: 13.0827,
        lon: 80.2707
    },
    {
        name: "Coimbatore",
        country: "India",
        state: "Tamil Nadu",
        lat: 11.0168,
        lon: 76.9558
    },
    {
        name: "Madurai",
        country: "India",
        state: "Tamil Nadu",
        lat: 9.9251,
        lon: 78.1198
    },
    {
        name: "Kolkata",
        country: "India",
        state: "West Bengal",
        lat: 22.5726,
        lon: 88.3639
    },
    {
        name: "Siliguri",
        country: "India",
        state: "West Bengal",
        lat: 26.7271,
        lon: 88.6115
    },
    {
        name: "Asansol",
        country: "India",
        state: "West Bengal",
        lat: 23.6820,
        lon: 86.9856
    },
    {
        name: "Hyderabad",
        country: "India",
        state: "Telangana",
        lat: 17.3850,
        lon: 78.4867
    },
    {
        name: "Warangal",
        country: "India",
        state: "Telangana",
        lat: 17.9784,
        lon: 79.5941
    },
    {
        name: "Khammam",
        country: "India",
        state: "Telangana",
        lat: 17.2470,
        lon: 80.1504
    },
    {
        name: "Ahmedabad",
        country: "India",
        state: "Gujarat",
        lat: 23.0225,
        lon: 72.5714
    },
    {
        name: "Surat",
        country: "India",
        state: "Gujarat",
        lat: 21.1702,
        lon: 72.8311
    },
    {
        name: "Vadodara",
        country: "India",
        state: "Gujarat",
        lat: 22.3074,
        lon: 73.1812
    },
    {
        name: "Chandigarh",
        country: "India",
        state: "Chandigarh",
        lat: 30.7333,
        lon: 76.7794
    },
    {
        name: "Shimla",
        country: "India",
        state: "Himachal Pradesh",
        lat: 31.1048,
        lon: 77.1734
    },
    {
        name: "Dharamshala",
        country: "India",
        state: "Himachal Pradesh",
        lat: 32.2196,
        lon: 76.3249
    },
    {
        name: "Kangra",
        country: "India",
        state: "Himachal Pradesh",
        lat: 32.0781,
        lon: 76.2750
    },
    {
        name: "Dehradun",
        country: "India",
        state: "Uttarakhand",
        lat: 30.3165,
        lon: 78.0322
    },
    {
        name: "Haridwar",
        country: "India",
        state: "Uttarakhand",
        lat: 29.9457,
        lon: 78.1642
    },
    {
        name: "Rishikesh",
        country: "India",
        state: "Uttarakhand",
        lat: 30.0869,
        lon: 78.2684
    },
    {
        name: "Lucknow",
        country: "India",
        state: "Uttar Pradesh",
        lat: 26.8467,
        lon: 80.9462
    },
    {
        name: "Kanpur",
        country: "India",
        state: "Uttar Pradesh",
        lat: 26.4499,
        lon: 80.3319
    },
    {
        name: "Agra",
        country: "India",
        state: "Uttar Pradesh",
        lat: 27.1767,
        lon: 78.0081
    },
    {
        name: "Indore",
        country: "India",
        state: "Madhya Pradesh",
        lat: 22.7196,
        lon: 75.8577
    },
    {
        name: "Bhopal",
        country: "India",
        state: "Madhya Pradesh",
        lat: 23.2599,
        lon: 77.4126
    },
    {
        name: "Gwalior",
        country: "India",
        state: "Madhya Pradesh",
        lat: 26.2183,
        lon: 78.1828
    },
    {
        name: "Coimbatore",
        country: "India",
        state: "Tamil Nadu",
        lat: 11.0168,
        lon: 76.9558
    },
    {
        name: "Chennai",
        country: "India",
        state: "Tamil Nadu",
        lat: 13.0827,
        lon: 80.2707
    },
    {
        name: "Madurai",
        country: "India",
        state: "Tamil Nadu",
        lat: 9.9251,
        lon: 78.1198
    },
    {
        name: "Visakhapatnam",
        country: "India",
        state: "Andhra Pradesh",
        lat: 17.6868,
        lon: 83.2185
    },
    {
        name: "Vijayawada",
        country: "India",
        state: "Andhra Pradesh",
        lat: 16.5062,
        lon: 80.6480
    },
    {
        name: "Tirupati",
        country: "India",
        state: "Andhra Pradesh",
        lat: 13.6288,
        lon: 79.4192
    },
    {
        name: "Ranchi",
        country: "India",
        state: "Jharkhand",
        lat: 23.3441,
        lon: 85.3096
    },
    {
        name: "Jamshedpur",
        country: "India",
        state: "Jharkhand",
        lat: 22.8056,
        lon: 86.4386
    },
    {
        name: "Dhanbad",
        country: "India",
        state: "Jharkhand",
        lat: 23.7960,
        lon: 86.4346
    }
];


export default defaultStates;