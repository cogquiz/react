import HeadGear from '../assets/head-gear.png'
import ComputerTick from '../assets/computer-with-tick.png'
import BarGraph from '../assets/graph.png'
import SecureIcon from '../assets/secure.png'
import CardImg from '../assets/card-sort.png'
import Nback from '../assets/Nback.png'
import TrailMarketing from '../assets/trail-marketing.png'
import SyllogismsImg from '../assets/syllogisms-tes.png'
import StroopImg from '../assets/stroop-effect.png'
import TOIimg from '../assets/TOL-test.png'
import BrainAi from '../assets/brain-ai.png'
import Planning from '../assets/planning.png'
import SpeedProcessing from '../assets/speed-processing.png'

export const fiveHours = [
    '0 To 5 Hours',
    '6 To 10 Hours',
    '11 To 15 Hours',
    '16 To 20 Hours',
    'More Than 20 Hours',
];

export const oneHours = [
    '0 To 1 Hours',
    '2 To 3 Hours',
    '4 To 5 Hours',
    '6 To 7 Hours',
    '8 To 9 Hours',
];

export const selfEsteemRate = [
    "Low",
    "Below Average",
    "Average",
    "Above Average",
    "High"
]

export const healthRate = [
    "Poor",
    "Below Average",
    "Average",
    "Above Average",
    "Excellent"
]



export const educations = [
    "Preschool",
    'Elementary School',
    'Middle School',
    'High School',
    'Vocational School',
    'College/University',
];

export const levelOfIncomes = [
    "Less than 10,000",
    "10,000 to 30,000",
    "More than 30,000"
]

export const ethnicityList = [
    "White/Non-Hispanic",
    "Black/Non-Hispanic",
    "Asian/Non-Hispanic",
    "Hispanic"
]

export const initialCheckBoxObjects = [
    {

        id: 1,
        title: "Is English your first language?",
        name: "firtsLangEng",
        options: [
            { label: 'Yes', selected: false },
            { label: 'No', selected: false },
        ]
    },
    {

        id: 2,
        title: "Gender",
        name: "gender",
        options: [
            { label: 'Male', selected: false },
            { label: 'Female', selected: false },
        ]
    },
    {

        id: 3,
        title: "Are you currently taking any medications?",
        name: "anyMedication",
        options: [
            { label: 'Yes', selected: false },
            { label: 'No', selected: false },
        ]
    },
    {

        id: 4,
        title: "Have you ever had a head injury?",
        name: "anyHeadInjury",
        options: [
            { label: 'Yes', selected: false },
            { label: 'No', selected: false },
        ]
    }
]


export const paidTest = [
    { id: 1, date: "26/11/2024", name: "Trails", step: "Start" },
    { id: 2, date: "26/11/2024", name: "Tower Of London	", step: "Start" },
    { id: 3, date: "26/11/2024", name: "Nback", step: "Start" },
    { id: 4, date: "26/11/2024", name: "Syllogisms", step: "Start" }
]

export const finishedTest = [
    { id: 1, date: "26/11/2024", name: "Trails", step: "View" },
    { id: 2, date: "26/11/2024", name: "Tower Of London", step: "View" },
    { id: 3, date: "26/11/2024", name: "Nback", step: "View" },
    { id: 4, date: "26/11/2024", name: "Syllogisms", step: "View" },
]

export const carouselData = [
    {
        id: 1,
        title: "Single Test",
        content: "Are you a practitioner, clinition, medical profressional or researcher in need of a specific test? We can make it for you within a two weeks, end-2-end."
    },
    {
        id: 2,
        title: "Research Environment",
        content: "We will make software for you based off of your needs. Neuropsychological testing is our specialty. If you are looking for custom software that is maluable and configurable for multiple tests, can keep a track of participants, store results, we are your best option."
    },
    {
        id: 3,
        title: "Software and Hosting",
        content: "We create the software, and we will host it for you too. We take the worrying out of Hipaa regulations and data integrity. We design and develop Cloud based and Desktop applications."
    },
    {
        id: 4,
        title: "Research Environment",
        content: "We will make software for you based off of your needs. Neuropsychological testing is our specialty. If you are looking for custom software that is maluable and configurable for multiple tests, can keep a track of participants, store results, we are your best option."
    },
]


export const constantData = [
    {
        id: 1,
        img: HeadGear,
        title: "The CogQuiz General Philosophy",
        content: "Understand Your Brain and Boost Your Potential. Discover Your Cognitive Profile. Take Control of Your Mental Health. Optimize Your Brain With Quizzes."
    },
    {
        id: 2,
        img: ComputerTick,
        title: "History and Validating Data",
        content: "Understand Your Brain and Boost Your Potential. Discover Your Cognitive Profile. Take Control of Your Mental Health. Optimize Your Brain With Quizzes."
    },
    {
        id: 3,
        img: BarGraph,
        title: "Large Norm Base",
        content: "Understand Your Brain and Boost Your Potential. Discover Your Cognitive Profile. Take Control of Your Mental Health. Optimize Your Brain With Quizzes."
    },
    {
        id: 4,
        img: SecureIcon,
        title: "Centralized Secure Database",
        content: "Understand Your Brain and Boost Your Potential. Discover Your Cognitive Profile. Take Control of Your Mental Health. Optimize Your Brain With Quizzes."
    }
]


export const AllTestAvailable = [
    {
        id: 1,
        title: "Card Sort Test",
        img: CardImg,
        category: "Executive"
    },
    {
        id: 2,
        title: "Nback Test",
        img: Nback,
        category: "Memory"
    },
    {
        id: 3,
        title: "trail making test",
        img: TrailMarketing,
        category: "Processing"
    },
    {
        id: 4,
        title: "Syllogisms Test",
        img: SyllogismsImg,
        category: "Processing"
    },
    {
        id: 5,
        title: "Stroop Effect",
        img: StroopImg,
        category: "Memory"
    },
    {
        id: 6,
        title: "Tower of London test",
        img: TOIimg,
        category: "Executive"
    }
]

export const TestCategorysForProfile = [
    {
        id: 1,
        title: "Memory With AI",
        image: BrainAi
    },
    {
        id: 2,
        title: "Executive function and Planning",
        image: Planning
    },
    {
        id: 3,
        title: "Processing Speed",
        image: SpeedProcessing
    },
    {
        id: 4,
        title: "Intelligence",
        image: HeadGear
    }
]

export const TestCategorysForHome = [
    {
        id: 1,
        title: "Memory With AI",
        image: BrainAi
    },
    {
        id: 2,
        title: "Executive function and Planning",
        image: Planning
    },
    {
        id: 3,
        title: "Processing Speed",
        image: SpeedProcessing
    },
]

export const TestCategoryContent = [
    {
        id: 1,
        title: "Types of Memory",
        content: '<div class="container MemoryBlock"><h3 style="font-size:24px;padding-top:10px">Types of Memory</h3><p style="font-size:14px">An early theory proposed by Aristotle of memory conceived of it as a single entity and likened it to an impression made in wax. Current theorist have proposed that memory comes in several different varieties. One distinction is between declarative and nondeclarative memory. </p><h3 style="font-size:24px;padding-top:10px">Declarative Memory</h3><p style="font-size:14px">Declartive memory is the form of memory with which most of us are familiar. A subtype of declarative memory is episodic memory and is characterized by temporal and personal tags. For example, I drove to Albany New York yesterday. A second subtype of declarative memory is semantic memory. This type of memory is reflective of general knowledge (e.g., our knowledge tha Albany is the capital of New York state). </p><h3 style="font-size:24px;padding-top:10px">Nondeclarative Memory</h3><p style="font-size:14px">Nondeclarative memory is a pervasive form of memory that frequently occurs without conscious awareness and tends to occur automatically. Familiar and easily understood examples of this form of memory are driving a car or typing an email. We are all aware that driving and typing can occur effortlessly and without conscious awareness. Less familiar examples are a conversation where people know the cues telling them when it is their turn to speak and more broadley when one can take a variety of cues from the environment to inform them about their safety or preditions about the days weather.</p><h3 style="font-size:24px;padding-top:10px">Working Memory and Short-term Memory</h3><p style="font-size:14px">Working memory has become one of the hottest topics in memory research. Working memory is a form of memory that is held in conscious awareness and is characterized by active manipulation of information. For example, think about the process of multiplying 13 times 17 in your head. You might think 7 times 3 is 21 and I keep the 1 and carry the 2. I multiple 7 time 1 and add the 2 for a place holder of 91. I then multiple 13 times 1 and place 13 one digit to the left under 91. Next I add the numbers to get 221. I vahe temporarly held and manipulated information in my conscious awareness. Short-term memory is similar except that I do not manipulate the information. I look up a phone number and repeated it until I have dialed the number and then I drop it from awareness. . </p></div>',
        category: "Memory"
    },
    {
        id: 2,
        title: "Executive Function",
        content: '<div class="container MemoryBlock"><h1 style="font-size:32px;padding-top:10px">Executive Function</h1><p style="font-size:14px">Executive functions are a set of cognitive processes that monitor, guide, and control our behavior.  These processes facilitate our successful navigation of the world. There is no agreed concensus on the number and nature of these components. However, there is general agreement that these processes are involved in working memory (actively holding and manipulating several bits of information in conscious awareness), inhibition (witholding a response), shifting strategies, attention, and problem solving. For example, imagine the processes a drone pilot has to engage in when flying.  A future Amazon drone pilot has a number of instruments he must monitor and attend to (working memory and attention), be able to switch back and forth between activates (shifting), not drop a package at the wrong address (inhibition), and plan a route to the correct address (problem solving).</p><h3 style="font-size:24px;padding-top:10px">Tests of Executive Function</h3><p style="font-size:14px">The Card Sorting Test available in CogQuiz is thought to measure several different processes of Executive Function. However, it is most prominently associated with an assessment of be able to switch strateges. Secondarly, the Card Sort is associated with working memory where one must hold in awareness the strategy associated with successful performance. The Tower of London is associated primarily with the planning strategy necessary for problem solving. Additionally, working memory will play a role in holding a successful set of moves in conscious awareness when solving a particular problem. The Trails tests has both a speed of processing component and a switching component. The Stroop test has a strong inhibition component. One must overcome the prepotent tendency to read words rather than state their color. </p></div>',
        category: "Executive"
    },
    {
        id: 3,
        title: "About:",
        content: '<div class="container MemoryBlock"><h3 style="font-size:24px;padding-top:10px">About:</h3><p style="font-size:14px">Speed of processing has been a major explantory varialbe for enhanced cognitive performace during development. Specifically, there is a exponential increase in the speed of processing from early childhood up through the teenage years. This speed of processing is associated with enhanced cognitive performance. For example, imagine how thenumber of words in a recall test might increase if increased speed of processing allowed for more word rehersal.</p><p style="font-size:14px;margin-top:20px">Speed of processing increases from early childhood up into the twenties and begins to show a significant decline by the fifties.</p><p style="font-size:14px;margin-top:20px">Similarly, there are reported medium sized correlations between speed of processing and fluid intelligence.Currently, the first part of the Trails test can be considered to provide an assessment of speed of processing.</p></div>',
        category: "Processing"
    },
    {
        id: 8,
        title: "About:",
        content: '<div class="container MemoryBlock"><h3 style="font-size:24px;padding-top:10px">About:</h3><p style="font-size:14px">Currently, there is not a formal intelligence test offered by CogQuiz. However, several of our tests show medium correlations with intelligence. For example, speed of processing (Part A of Trails Test) and problem solving (Tower of London) demonstrate medium sized correations with intelligence. The performance on the N-back working memory test shows a slightly higher correlation with intelligence. The study of human memory stretches back at least 2 000 years to Aristotle’s early attempts to understand memory in his treatise </p></div>',
        category: "Intelligence"
    }
]