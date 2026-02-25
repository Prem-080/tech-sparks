import imageLinks from './image_links.json';

const getEventImage = (category, id, fallback) => {
    const categoryImages = imageLinks.events[category];
    const eventImage = categoryImages?.find(img => img.id === id)?.image;
    return eventImage || fallback;
};

export const events = {
    technical: [
        {
            id: "tech-1",
            title: "Coding Contest",
            description: "Individual event testing problem solving skills and quick timing.",
            icon: "Code2",
            image: getEventImage('technical', 'tech-1', "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"),
            rules: [
                "Individual event",
                "Problem solving skills",
                "Quick timing"
            ],
        },
        {
            id: "tech-2",
            title: "Webathon",
            description: "A two-round web design challenge. Top winners get an internship!",
            icon: "Globe",
            image: getEventImage('technical', 'tech-2', "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80"),
            rules: [
                "Team of 2",
                "Design webpage for given problem statement",
                "2 rounds - 1st round 30 minutes, 2nd round 45 to 50 minutes",
                "Top winner in webathon will be getting internship"
            ],
        },
        {
            id: "tech-3",
            title: "App/Idea Pitch",
            description: "Present unique ideas through presentations or posters. Working prototype is optional.",
            icon: "Lightbulb",
            image: getEventImage('technical', 'tech-3', "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80"),
            rules: [
                "Team of 2",
                "Unique ideas in presentation/posters",
                "Working prototype (optional)"
            ],
        },
        {
            id: "tech-4",
            title: "Tech Quiz",
            description: "Individual technical quiz with multiple rounds. Fun and learn!",
            icon: "Zap",
            image: getEventImage('technical', 'tech-4', "https://images.unsplash.com/photo-1506729623306-b5a934d88b53?auto=format&fit=crop&q=80"),
            rules: [
                "Individual",
                "Multiple rounds",
                "Fun and learn"
            ],
        },
    ],
    nonTechnical: [
        {
            id: "nontech-1",
            title: "Guess the Content",
            description: "Guess the content for anime and movies in this fast-paced challenge.",
            icon: "Search",
            image: getEventImage('nonTechnical', 'nontech-1', "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80"),
            rules: [
                "Identify content correctly",
                "Multiple rounds",
                "Focus on anime and movies"
            ],
        },
        {
            id: "nontech-2",
            title: "Board Games",
            description: "Test your strategy in classic board games like Chess and Carroms.",
            icon: "Gamepad",
            image: getEventImage('nonTechnical', 'nontech-3', "https://images.unsplash.com/photo-1610812383715-4675ce02082e?auto=format&fit=crop&q=80"),
            rules: [
                "Includes Chess and Carroms",
                "Tournament style"
            ],
        },
        {
            id: "nontech-3",
            title: "Squid Game",
            description: "Experience multiple games inspired by Squid Game in pairs.",
            icon: "CircleDot",
            image: getEventImage('nonTechnical', 'nontech-2', "https://images.unsplash.com/photo-1634157703702-3c124b455499?auto=format&fit=crop&q=80"),
            rules: [
                "Includes multiple games",
                "Dual only"
            ],
        },
        {
            id: "nontech-4",
            title: "The 6-Frame story",
            description: "Tell a compelling story in exactly 6 frames. Individual event.",
            icon: "Layout",
            image: getEventImage('nonTechnical', 'nontech-4', "https://images.unsplash.com/photo-1531058240690-006c446962d8?auto=format&fit=crop&q=80"),
            rules: [
                "Individual",
                "Story in 6 frames"
            ],
        },
    ],
    gaming: [
        {
            id: "game-1",
            title: "BGMI",
            description: "The ultimate battle royale survival challenge in Battlegrounds Mobile India.",
            icon: "Crosshair",
            image: getEventImage('gaming', 'game-1', "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"),
            rules: ["Squad (4 members)", "Points based on placement and kills"],
        },
        {
            id: "game-2",
            title: "Free Fire",
            description: "Fast-paced mobile survival shooter competition in Garena Free Fire.",
            icon: "Flame",
            image: getEventImage('gaming', 'game-2', "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80"),
            rules: ["Squad (4 members)", "Survivors win"],
        },
    ]
};



