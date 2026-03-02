export const projects = [
    {
        id: "vayu-net",
        title: "VayuNet",
        category: "AI",
        problem: "Real-time atmospheric data processing and predictive pollution modeling is computationally intensive and lacks localized accuracy.",
        solution: "A scalable ML-driven pipeline forecasting localized PM 2.5 levels, providing actionable API endpoints for health dashboards.",
        architecture: "Python microservices ingesting IoT telemetry data into an ML forecasting engine, served via optimized REST APIs.",
        impact: "Provides early health warnings up to 48 hours in advance, successfully tested on robust simulated city datasets.",
        lessons: "Time-series forecasting with highly volatile datasets requires resilient data-cleaning and continuous model retraining loops.",
        futureScope: "Integration with autonomous drone-based sensors for hyper-local validation and dynamic map rendering.",
        githubLink: "https://github.com/prithishmisra23/vayunet",
        liveLink: "https://air-quality-forecast-app-fuhjcggmd9h6sgrhsghf98.streamlit.app/",
    },
    {
        id: "quizito",
        title: "Quizito",
        category: "Full Stack",
        problem: "Current quiz applications lack engaging, gamified mechanics targeted at modern cohorts requiring micro-learning.",
        solution: "A high-performance, real-time quiz platform featuring dynamic leaderboards and instantaneous websocket-based scoring.",
        architecture: "Next.js frontend with SSR for SEO, coupled with a Node.js/PostgreSQL backend emphasizing connection pooling and rapid read/writes.",
        impact: "Engaged initial beta users with an average session duration of over 10 minutes.",
        lessons: "Managing websocket lifecycle events on scale requires careful architectural planning to prevent memory leaks and zombie connections.",
        futureScope: "Implementation of AI-generated dynamic question pools and advanced user-cohort analytics.",
        githubLink: "https://github.com/prithishmisra23/quizito",
        liveLink: "https://quizito-frontend.onrender.com/",
    }
];
