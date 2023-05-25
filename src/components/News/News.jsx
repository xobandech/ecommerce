import NewsBlock from "./NewsBlock";
import "./NewsStyling.scss";
import NewsHeadlines from "./NewsHeadlines";
import BigNewsBlock from "./BigNewsBlock";
const news = [
  {
    id: 1,
    headline: "Local Community Holds Fundraiser for Homeless Shelter",
    date: "2023-04-28",
    author: "John Doe",
    category: "Community",
    img: "https://picsum.photos/302/180",
    content:
      "The local community came together to raise funds for a new homeless shelter. The event, which was held on Saturday, featured food, games, and live music. Local businesses donated items for a silent auction, and all proceeds will go towards building a new shelter to support those in need. Organizers say they are grateful for the support of the community and hope to continue making a positive impact on the lives of those who are homeless.",
  },
  {
    id: 2,
    headline: "New Study Finds Link Between Sleep and Productivity",
    date: "2023-04-30",
    author: "Jane Smith",
    category: "Health",
    img: "https://picsum.photos/301/181",
    content:
      "A new study published in the Journal of Sleep Research has found a strong link between sleep and productivity. The study, which followed a group of 500 participants over the course of a year, found that those who consistently got 7-8 hours of sleep per night were more productive and had better cognitive function than those who got less sleep. Researchers say the findings highlight the importance of getting enough sleep and suggest that employers should consider implementing policies to promote healthy sleep habits among their employees.",
  },
  {
    id: 3,
    headline: "Local High School Student Wins National Science Competition",
    date: "2023-05-01",
    author: "Mark Johnson",
    category: "Education",
    img: "https://picsum.photos/301/179",
    content:
      "A local high school student has won first place in the National Science Competition. The student, Sarah Johnson, presented a project on the use of nanotechnology to improve the efficiency of solar cells. Her project was selected from over 10,000 entries, and she was awarded a $10,000 scholarship for her achievement. Sarah says she is thrilled to have won and hopes to continue pursuing her passion for science in the future.",
  },
  {
    id: 4,
    headline: "Controversial New Law Raises Concerns Among Privacy Advocates",
    date: "2023-05-02",
    author: "David Lee",
    category: "Politics",
    img: "https://picsum.photos/301/180",
    content:
      "A new law passed by Congress has raised concerns among privacy advocates. The law, which allows the government to collect and store personal data on individuals without a warrant, has been criticized as a violation of civil liberties. Proponents of the law argue that it is necessary for national security, but opponents say it sets a dangerous precedent and could lead to abuses of power. The controversy has sparked a heated debate in Congress and among the public.",
  },
  {
    id: 5,
    headline: "New Restaurant Opens Downtown, Featuring Local Cuisine",
    date: "2023-05-04",
    author: "Amy Chen",
    category: "Food",
    img: "https://picsum.photos/350/181",
    content:
      "A new restaurant has opened in the heart of downtown, featuring local cuisine. The restaurant, called 'Farm to Table', sources all of its ingredients from local farmers and producers, and offers a menu of seasonal dishes. The restaurant has already received rave reviews from food critics and locals alike, with many praising the quality and freshness of the ingredients. The owners say they are excited to bring a taste of the region to downtown and hope to support local farmers and producers in the process.",
  },
  {
    id: 6,
    headline: "New Study Finds That Exercise Can Help Reduce Anxiety",
    date: "2023-05-06",
    author: "Emily Johnson",
    category: "Health",
    img: "https://picsum.photos/350/180",
    content:
      "A new study published in the Journal of Anxiety Research has found that regular exercise can help reduce symptoms of anxiety. The study, which followed a group of 200 participants over the course of six months, found that those who exercised for at least 30 minutes per day experienced significant reductions in their anxiety levels. The researchers say that exercise can be an effective tool for managing anxiety and recommend it as part of a holistic treatment plan.",
  },
  {
    id: 7,
    headline:
      "Local Non-Profit Provides Free Tutoring Services for Underprivileged Children",
    date: "2023-05-05",
    author: "Michael Brown",
    category: "Community",
    img: "https://picsum.photos/302/179",
    content:
      "A local non-profit organization is providing free tutoring services for underprivileged children in the area. The organization, called 'Bright Minds', offers one-on-one tutoring in a variety of subjects, including math, science, and English. The tutors are all volunteers, and the organization relies on donations from the community to fund its operations. The founder of the organization says that they are committed to providing educational opportunities for all children, regardless of their background or financial situation.",
  },
  {
    id: 8,
    headline:
      "New Report Finds That Climate Change is Affecting Global Food Supplies",
    date: "2023-05-04",
    author: "Sophia Lee",
    category: "Environment",
    img: "https://picsum.photos/301/180",
    content:
      "A new report from the United Nations has found that climate change is affecting global food supplies. The report warns that rising temperatures, changing precipitation patterns, and more frequent extreme weather events are all contributing to reduced crop yields and increased food insecurity. The report calls for urgent action to reduce greenhouse gas emissions and build more resilient food systems.",
  },
  {
    id: 9,
    headline:
      "Local Art Museum Hosts Exhibit Featuring Works by Emerging Artists",
    date: "2023-05-02",
    author: "Julia Kim",
    category: "Art",
    img: "https://picsum.photos/298/180",
    content:
      "A local art museum is hosting an exhibit featuring works by emerging artists. The exhibit, titled 'New Horizons', showcases a diverse range of styles and mediums, from paintings and sculptures to digital art and installations. The museum says that the exhibit is part of its commitment to supporting and showcasing up-and-coming artists and hopes to inspire visitors to engage with contemporary art.",
  },
  {
    id: 10,
    headline: "New Technology Allows for More Accurate Weather Forecasting",
    date: "2023-05-01",
    author: "Tom Wilson",
    category: "Science",
    img: "https://picsum.photos/350/182",
    content:
      "A new technology developed by scientists at a local university is allowing for more accurate weather forecasting. The technology, called 'WeatherNet', uses a network of sensors to collect data on temperature, humidity, wind speed, and other meteorological variables. The data is then fed into a computer model that can generate highly detailed forecasts for specific locations. The developers say that the technology has the potential to revolutionize weather forecasting and improve public safety.",
  },
];
const headlines = [
  "Scientists Discover New Species of Underwater Plant",
  "Major Tech Company Announces Plans for Autonomous Electric Cars",
  "Hollywood Actress Wins Award for Humanitarian Work",
  "Study Finds Link Between Social Media Use and Depression",
  "Government Approves New Plan to Combat Climate Change",
  "Massive Data Breach Affects Millions of Customers",
  "Breakthrough in Cancer Research Brings New Hope for Patients",
  "Protests Erupt in Major City Following Police Shooting",
  "World Leaders Gather to Discuss Global Economic Recovery",
  "New Study Reveals Surprising Benefits of Exercise for Mental Health",
];
const bigNews = [
  {
    id: 1,
    headline: "Local High School Wins State Football Championship",
    date: "2023-05-07",
    author: "John Smith",
    category: "Sports",
    img: "https://picsum.photos/670/350",
    content:
      "The local high school football team won the state championship on Saturday, defeating their rivals in a thrilling game that went into overtime. The team had a remarkable season, winning all of their games except for one, which they lost in the last few seconds. The head coach said that the team's hard work, dedication, and teamwork paid off in the end, and he couldn't be more proud of them.",
  },
  {
    id: 2,
    headline:
      "New Study Shows That Reading Fiction Can Improve Empathy and Social Skills",
    date: "2023-05-06",
    author: "Sarah Johnson",
    category: "Education",
    img: "https://picsum.photos/671/350",
    content:
      "A new study published in the Journal of Personality and Social Psychology has found that reading fiction can improve empathy and social skills. The study, which involved over 500 participants, found that those who read more fiction had better social cognition and were better able to understand and relate to others. The researchers say that these findings have important implications for education and suggest that schools should incorporate more fiction into their curricula.",
  },
  {
    id: 3,
    headline: "Local Restaurant Offers Free Meals to Homeless",
    date: "2023-05-05",
    author: "Maria Rodriguez",
    category: "Community",
    img: "https://picsum.photos/670/351",
    content:
      "A local restaurant is offering free meals to homeless people in the area. The restaurant, called 'Caring Kitchen', serves hot meals twice a week to anyone who needs them, no questions asked. The owner of the restaurant said that he started the program because he wanted to give back to the community and help those who are less fortunate. He hopes that other businesses will follow his lead and do their part to help those in need.",
  },
  {
    id: 4,
    headline:
      "New Study Finds That Listening to Music Can Help Improve Memory",
    date: "2023-05-04",
    author: "David Brown",
    category: "Science",
    img: "https://picsum.photos/669/350",
    content:
      "A new study published in the Journal of Cognitive Psychology has found that listening to music can help improve memory. The study, which involved over 200 participants, found that those who listened to music while studying were better able to recall information later on. The researchers say that music can help improve attention, mood, and arousal, all of which can contribute to better memory performance.",
  },
  {
    id: 5,
    headline: "New Art Exhibit Features Works by Local Artists",
    date: "2023-05-03",
    author: "Linda Kim",
    category: "Art",
    img: "https://picsum.photos/670/349",
    content:
      "A new art exhibit featuring works by local artists is now open at the city's art museum. The exhibit, called 'Local Voices', showcases a variety of styles and mediums, from paintings and sculptures to photography and installations. The museum's director said that the exhibit is a celebration of the city's vibrant arts scene and its talented artists.",
  },
]

const News = () => {
  return (
    <>
    <div className="news-container">
      <div className="news">
      <NewsBlock news={news} />
      </div>
      <BigNewsBlock bigNews={bigNews}/>
      <NewsHeadlines headlines={headlines} />
      <div className="news">
      <NewsBlock news={news} />
      </div>
        </div>
    </>
  );
};

export default News;
