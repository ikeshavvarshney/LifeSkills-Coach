// Enhanced LifeSkills Coach - Optimized JavaScript Application with Pentagon Tracker
class LifeSkillsCoach {
    constructor() {
        // Expanded topic data with 30+ scenarios each
        this.topics = {
            "road-rules": {
                name: "Road Rules",
                icon: "🚦",
                theme: "road-rules",
                scenarios: [
                    { id: 1, question: "What does a red traffic light mean?", options: ["Stop completely", "Slow down", "Proceed with caution"], correct: 0, explanation: "A red light means you must come to a complete stop and wait for green." },
                    { id: 2, question: "When should you use your turn signal?", options: ["Only when other cars are present", "At least 100 feet before turning", "Right as you begin turning"], correct: 1, explanation: "Signal early to give other road users time to react and adjust." },
                    { id: 3, question: "What should you do at a four-way stop?", options: ["Go if no one else is there", "The first to arrive goes first", "Largest vehicle goes first"], correct: 1, explanation: "At a four-way stop, the first vehicle to arrive has the right of way." },
                    { id: 4, question: "When walking at night, what should you wear?", options: ["Dark colors to blend in", "Bright or reflective clothing", "Any color is fine"], correct: 1, explanation: "Bright and reflective clothing increases your visibility to drivers." },
                    { id: 5, question: "What does a yellow traffic light mean?", options: ["Speed up to get through", "Prepare to stop safely", "Keep current speed"], correct: 1, explanation: "Yellow means prepare to stop safely if you can do so without risk." },
                    { id: 6, question: "Where should children cross the street?", options: ["Anywhere they want", "At designated crosswalks", "Between parked cars"], correct: 1, explanation: "Children should always cross at designated crosswalks for safety." },
                    { id: 7, question: "When cycling, where should you ride?", options: ["On the sidewalk", "In the direction of traffic", "Against traffic flow"], correct: 1, explanation: "Cyclists should ride in the same direction as traffic flow." },
                    { id: 8, question: "What should you do when an ambulance approaches?", options: ["Keep driving normally", "Pull over and stop", "Speed up to get out of the way"], correct: 1, explanation: "Pull over to the right and stop to allow emergency vehicles to pass." },
                    { id: 9, question: "What does a stop sign mean?", options: ["Slow down and look", "Come to a complete stop", "Yield to traffic"], correct: 1, explanation: "A stop sign requires a complete stop before proceeding safely." },
                    { id: 10, question: "When should you use headlights?", options: ["Only at night", "During rain, fog, or low visibility", "Never during the day"], correct: 1, explanation: "Use headlights during any conditions with reduced visibility." },
                    { id: 11, question: "What is the safest following distance?", options: ["1 second behind", "3-4 seconds behind", "Right behind the car"], correct: 1, explanation: "A 3-4 second following distance gives you time to react safely." },
                    { id: 12, question: "When is it safe to use a phone while driving?", options: ["At red lights", "Never while the vehicle is on", "Only for emergencies"], correct: 1, explanation: "Never use a phone while driving. Pull over safely if you must use it." },
                    { id: 13, question: "What should you do before changing lanes?", options: ["Just look in mirrors", "Check mirrors and blind spots", "Change quickly"], correct: 1, explanation: "Always check mirrors and blind spots before changing lanes." },
                    { id: 14, question: "What does a yield sign mean?", options: ["Stop completely", "Give right of way to others", "Go fast through intersection"], correct: 1, explanation: "Yield means give the right of way to other traffic and pedestrians." },
                    { id: 15, question: "When should you wear a seatbelt?", options: ["Only on highways", "Always when in a vehicle", "Only when driving"], correct: 1, explanation: "Always wear a seatbelt when in any moving vehicle." }
                ]
            },
            "personal-hygiene": {
                name: "Personal Hygiene",
                icon: "🧼",
                theme: "personal-hygiene",
                scenarios: [
                    { id: 1, question: "How long should you wash your hands?", options: ["5 seconds", "At least 20 seconds", "1 minute"], correct: 1, explanation: "Wash hands for at least 20 seconds with soap to effectively remove germs." },
                    { id: 2, question: "How often should you brush your teeth?", options: ["Once a week", "Twice a day", "Once a month"], correct: 1, explanation: "Brush your teeth twice a day to maintain good oral health." },
                    { id: 3, question: "When should you wash your hands?", options: ["Only when dirty", "Before eating and after using bathroom", "Once a day"], correct: 1, explanation: "Wash hands before eating, after bathroom use, and after touching surfaces." },
                    { id: 4, question: "How often should you shower or bathe?", options: ["Once a month", "Daily or every other day", "Once a week"], correct: 1, explanation: "Regular bathing (daily or every other day) maintains good hygiene." },
                    { id: 5, question: "What should you use to clean your teeth?", options: ["Just water", "Toothbrush and fluoride toothpaste", "Only mouthwash"], correct: 1, explanation: "Use a toothbrush with fluoride toothpaste for effective teeth cleaning." },
                    { id: 6, question: "How often should you change your underwear?", options: ["Daily", "Weekly", "Monthly"], correct: 0, explanation: "Change underwear daily to maintain personal hygiene and health." },
                    { id: 7, question: "What should you do after coughing or sneezing?", options: ["Nothing", "Wash hands or use sanitizer", "Touch your face"], correct: 1, explanation: "Wash hands or use sanitizer after coughing or sneezing to prevent spread of germs." },
                    { id: 8, question: "How should you cover a cough or sneeze?", options: ["With your hands", "Into your elbow or tissue", "Don't cover it"], correct: 1, explanation: "Cover coughs and sneezes with your elbow or tissue to prevent spreading germs." },
                    { id: 9, question: "How often should you wash your hair?", options: ["Never", "2-3 times per week or as needed", "10 times a day"], correct: 1, explanation: "Wash hair 2-3 times per week or as needed based on hair type and activity." },
                    { id: 10, question: "What should you do with dirty clothes?", options: ["Wear them again", "Wash them regularly", "Throw them away"], correct: 1, explanation: "Wash dirty clothes regularly to maintain cleanliness and hygiene." },
                    { id: 11, question: "How should you take care of your nails?", options: ["Never cut them", "Keep them clean and trimmed", "Bite them"], correct: 1, explanation: "Keep nails clean and properly trimmed to prevent bacteria buildup." },
                    { id: 12, question: "What should you do before preparing food?", options: ["Nothing special", "Wash your hands thoroughly", "Wear gloves only"], correct: 1, explanation: "Always wash hands thoroughly before handling or preparing food." },
                    { id: 13, question: "How often should you replace your toothbrush?", options: ["Never", "Every 3-4 months", "Every year"], correct: 1, explanation: "Replace toothbrushes every 3-4 months or after being sick." },
                    { id: 14, question: "What should you use to clean your ears?", options: ["Cotton swabs deep inside", "Washcloth on outer ear only", "Nothing"], correct: 1, explanation: "Clean only the outer ear with a washcloth; avoid inserting objects into ear canal." },
                    { id: 15, question: "How should you maintain good breath?", options: ["Chew gum only", "Brush teeth, floss, and use mouthwash", "Eat mints"], correct: 1, explanation: "Good breath requires regular brushing, flossing, and mouthwash use." }
                ]
            },
            "waste-management": {
                name: "Waste Management",
                icon: "♻️",
                theme: "waste-management",
                scenarios: [
                    { id: 1, question: "Which item can be recycled?", options: ["Greasy pizza box", "Clean plastic bottle", "Used tissue"], correct: 1, explanation: "Clean plastic bottles can be recycled, but greasy items contaminate recycling." },
                    { id: 2, question: "What should you do with food scraps?", options: ["Throw in trash", "Compost if possible", "Flush down drain"], correct: 1, explanation: "Composting food scraps reduces waste and creates nutrient-rich soil." },
                    { id: 3, question: "How can you reduce plastic waste?", options: ["Use more disposables", "Use reusable bags and bottles", "Buy more plastic"], correct: 1, explanation: "Reusable items significantly reduce single-use plastic waste." },
                    { id: 4, question: "Where should batteries be disposed?", options: ["Regular trash", "Special battery recycling centers", "Down the drain"], correct: 1, explanation: "Batteries contain harmful chemicals and need special disposal methods." },
                    { id: 5, question: "What makes paper unrecyclable?", options: ["Being white", "Grease, wax, or contamination", "Being folded"], correct: 1, explanation: "Grease, wax, and other contamination make paper unrecyclable." },
                    { id: 6, question: "How should you dispose of old electronics?", options: ["Regular trash", "E-waste recycling programs", "Bury them"], correct: 1, explanation: "Electronics contain valuable and harmful materials requiring special recycling." },
                    { id: 7, question: "What belongs in a compost bin?", options: ["Meat and dairy", "Fruit and vegetable scraps", "Plastic wrappers"], correct: 1, explanation: "Fruit and vegetable scraps compost well; meat and dairy can attract pests." },
                    { id: 8, question: "How can you reduce water waste?", options: ["Leave faucets running", "Take shorter showers", "Water plants all day"], correct: 1, explanation: "Shorter showers and mindful water use conserve this precious resource." },
                    { id: 9, question: "What should you do with glass containers?", options: ["Always throw away", "Clean and recycle", "Break them first"], correct: 1, explanation: "Clean glass containers can be recycled indefinitely without quality loss." },
                    { id: 10, question: "How should you handle hazardous waste?", options: ["Regular trash", "Special hazardous waste facilities", "Down the sink"], correct: 1, explanation: "Hazardous waste needs special handling to protect environment and health." },
                    { id: 11, question: "What's the best way to reduce packaging waste?", options: ["Buy more packaged items", "Choose products with minimal packaging", "Ignore packaging"], correct: 1, explanation: "Choosing products with less packaging reduces overall waste." },
                    { id: 12, question: "How should you dispose of old medications?", options: ["Flush them", "Take to pharmacy take-back programs", "Regular trash"], correct: 1, explanation: "Pharmacy take-back programs safely dispose of medications without environmental harm." },
                    { id: 13, question: "What can you do with old clothes?", options: ["Always throw away", "Donate, repurpose, or textile recycle", "Burn them"], correct: 1, explanation: "Old clothes can be donated, repurposed, or recycled through textile programs." },
                    { id: 14, question: "How should you clean recycling containers?", options: ["Don't clean them", "Rinse out food residue", "Use lots of soap"], correct: 1, explanation: "Rinse containers to remove food residue but don't over-wash." },
                    { id: 15, question: "What's wrong with putting recyclables in plastic bags?", options: ["Nothing", "Bags jam sorting machines", "Makes them cleaner"], correct: 1, explanation: "Plastic bags jam recycling sorting machines and should be recycled separately." }
                ]
            },
            "digital-scams": {
                name: "Digital Scams",
                icon: "🔒",
                theme: "digital-scams",
                scenarios: [
                    { id: 1, question: "Someone emails asking for your password. What should you do?", options: ["Send it immediately", "Never share passwords via email", "Call them first"], correct: 1, explanation: "Legitimate companies never ask for passwords via email. This is likely phishing." },
                    { id: 2, question: "What makes a strong password?", options: ["Your birthdate", "Mix of letters, numbers, symbols", "The word 'password'"], correct: 1, explanation: "Strong passwords combine different character types and avoid personal information." },
                    { id: 3, question: "You get a 'too good to be true' deal online. What should you do?", options: ["Buy immediately", "Research carefully first", "Give credit card info"], correct: 1, explanation: "Research sellers and deals thoroughly. If it seems too good to be true, it probably is." },
                    { id: 4, question: "How can you identify a phishing email?", options: ["Perfect grammar", "Urgent threats and suspicious links", "Professional appearance"], correct: 1, explanation: "Phishing emails often use urgent language, threats, and suspicious links." },
                    { id: 5, question: "What should you do before clicking email links?", options: ["Click immediately", "Hover to see the actual URL", "Forward to friends"], correct: 1, explanation: "Hover over links to see where they actually lead before clicking." },
                    { id: 6, question: "How often should you update passwords?", options: ["Never", "Regularly, especially after breaches", "Once a decade"], correct: 1, explanation: "Update passwords regularly and immediately after security breaches." },
                    { id: 7, question: "What's two-factor authentication?", options: ["Using two passwords", "Extra security layer beyond password", "Logging in twice"], correct: 1, explanation: "Two-factor authentication adds an extra security step beyond just passwords." },
                    { id: 8, question: "How should you handle suspicious phone calls about your computer?", options: ["Follow their instructions", "Hang up - legitimate companies don't call", "Give remote access"], correct: 1, explanation: "Legitimate tech companies don't make unsolicited calls about computer problems." },
                    { id: 9, question: "What should you check before entering credit card info online?", options: ["Nothing special", "SSL certificate (https://) and site reputation", "Just the price"], correct: 1, explanation: "Look for https:// and verify the website's reputation before entering payment info." },
                    { id: 10, question: "How should you handle public Wi-Fi for sensitive activities?", options: ["Use freely", "Avoid or use VPN for protection", "Share passwords openly"], correct: 1, explanation: "Public Wi-Fi is insecure; avoid sensitive activities or use a VPN." },
                    { id: 11, question: "What's a red flag in online dating?", options: ["Asking about hobbies", "Requesting money or personal info quickly", "Sharing photos"], correct: 1, explanation: "Requests for money or excessive personal information early on are red flags." },
                    { id: 12, question: "How should you handle unexpected prize notifications?", options: ["Claim immediately", "Be skeptical - research first", "Share with everyone"], correct: 1, explanation: "Unexpected prizes are often scams. Research the organization first." },
                    { id: 13, question: "What should you do if you think you've been scammed?", options: ["Keep it secret", "Report to authorities and change passwords", "Try to get revenge"], correct: 1, explanation: "Report scams to authorities and immediately change compromised passwords." },
                    { id: 14, question: "How can you protect your social media accounts?", options: ["Make everything public", "Use privacy settings and strong passwords", "Accept all friend requests"], correct: 1, explanation: "Use strong passwords and privacy settings to control who sees your information." },
                    { id: 15, question: "What should you do about software updates?", options: ["Ignore them", "Install promptly for security patches", "Wait several years"], correct: 1, explanation: "Software updates often include important security patches." }
                ]
            },
            "food-safety": {
                name: "Food Safety",
                icon: "🍎",
                theme: "food-safety",
                scenarios: [
                    { id: 1, question: "What's the safest way to thaw frozen meat?", options: ["Room temperature counter", "In the refrigerator", "Warm water for hours"], correct: 1, explanation: "Thawing in the refrigerator prevents dangerous bacteria growth." },
                    { id: 2, question: "How can you tell if food has gone bad?", options: ["Only expiration date", "Smell, texture, and appearance changes", "Taste test"], correct: 1, explanation: "Check for off smells, unusual textures, or discoloration. Don't taste questionable food." },
                    { id: 3, question: "What temperature should chicken be cooked to?", options: ["145°F (63°C)", "165°F (74°C)", "Until it looks done"], correct: 1, explanation: "Chicken must reach 165°F (74°C) internal temperature to kill harmful bacteria." },
                    { id: 4, question: "How long can perishable food sit at room temperature?", options: ["All day", "No more than 2 hours", "Up to 8 hours"], correct: 1, explanation: "Perishable food should not sit at room temperature for more than 2 hours." },
                    { id: 5, question: "What should you do before handling food?", options: ["Nothing special", "Wash hands thoroughly", "Wear gloves only"], correct: 1, explanation: "Always wash hands thoroughly before handling any food." },
                    { id: 6, question: "How should raw meat be stored in the refrigerator?", options: ["Anywhere", "Bottom shelf in sealed containers", "Top shelf uncovered"], correct: 1, explanation: "Store raw meat on the bottom shelf in sealed containers to prevent dripping." },
                    { id: 7, question: "What's the danger zone for food temperatures?", options: ["32°F to 40°F", "40°F to 140°F", "Above 200°F"], correct: 1, explanation: "The danger zone (40°F-140°F) allows rapid bacteria growth." },
                    { id: 8, question: "How should you handle leftovers?", options: ["Leave out overnight", "Refrigerate within 2 hours", "Keep warm all day"], correct: 1, explanation: "Refrigerate leftovers within 2 hours to prevent bacterial growth." },
                    { id: 9, question: "What should you use to check meat temperature?", options: ["Your finger", "Food thermometer", "Visual inspection only"], correct: 1, explanation: "A food thermometer is the only reliable way to check internal temperature." },
                    { id: 10, question: "How should you wash fruits and vegetables?", options: ["Don't wash them", "Rinse under cold running water", "Use soap and hot water"], correct: 1, explanation: "Rinse produce under cold running water to remove dirt and bacteria." },
                    { id: 11, question: "What should you do with cracked or dirty eggs?", options: ["Use them anyway", "Discard them", "Just wash the outside"], correct: 1, explanation: "Cracked or dirty eggs can harbor harmful bacteria and should be discarded." },
                    { id: 12, question: "How long do leftovers last in the refrigerator?", options: ["1 week", "3-4 days", "Until they smell bad"], correct: 1, explanation: "Most leftovers should be consumed within 3-4 days when properly refrigerated." },
                    { id: 13, question: "What's cross-contamination in food safety?", options: ["Mixing ingredients", "Harmful bacteria spreading between foods", "Overcooking food"], correct: 1, explanation: "Cross-contamination occurs when harmful bacteria spread from one food to another." },
                    { id: 14, question: "How should cutting boards be handled?", options: ["Use same board for everything", "Separate boards for raw meat and other foods", "Never wash them"], correct: 1, explanation: "Use separate cutting boards for raw meat and other foods to prevent cross-contamination." },
                    { id: 15, question: "What should you do if you drop food on the floor?", options: ["5-second rule applies", "Discard it", "Rinse it off"], correct: 1, explanation: "Food that touches the floor should be discarded regardless of time." }
                ]
            }
        };

        // RPG Level system
        this.rpgLevels = [
            { name: "Beginner", xpRequired: 0, description: "Just starting your learning journey" },
            { name: "Novice", xpRequired: 10, description: "Getting the hang of basic concepts" },
            { name: "Skilled", xpRequired: 25, description: "Solid understanding of fundamentals" },
            { name: "Expert", xpRequired: 50, description: "Advanced knowledge and skills" },
            { name: "Master", xpRequired: 100, description: "Comprehensive mastery achieved" }
        ];

        // Badge system
        this.badges = [
            { name: "First Steps", requirement: 1, description: "Complete your first scenario in any topic", icon: "🚸" },
            { name: "Multi-Skilled", requirement: "complete_all_topics", description: "Complete at least one scenario in each topic", icon: "🌟" },
            { name: "Knowledge Seeker", requirement: 10, description: "Complete 10 scenarios total", icon: "📚" },
            { name: "Life Skills Expert", requirement: 25, description: "Complete 25 scenarios total", icon: "🎓" },
            { name: "Master Learner", requirement: 50, description: "Complete 50 scenarios total", icon: "🏆" },
            { name: "Consistent Learner", requirement: 3, description: "Maintain a 3-day streak", icon: "🔥", type: "streak" },
            { name: "Safety Champion", requirement: 7, description: "Maintain a 7-day streak", icon: "👑", type: "streak" }
        ];

        // Knowledge tips for different topics
        this.knowledgeTips = {
            "road-rules": [
                "Always look both ways before crossing any street, even in parking lots.",
                "Wear bright colors during the day and reflective materials at night.",
                "Make eye contact with drivers before crossing in front of their vehicle.",
                "The 3-second rule helps maintain safe following distance.",
                "School zones require extra attention - children's behavior is unpredictable."
            ],
            "personal-hygiene": [
                "Washing hands is the single most effective way to prevent illness.",
                "Change your toothbrush every 3-4 months for optimal oral health.",
                "Regular bathing helps prevent body odor and skin infections.",
                "Clean nails prevent the spread of germs and bacteria.",
                "Proper sleep hygiene includes clean bedding and a comfortable environment."
            ],
            "waste-management": [
                "Reduce, reuse, recycle - in that order for maximum environmental impact.",
                "Composting can reduce household waste by up to 30%.",
                "One person generates about 4.5 pounds of trash per day on average.",
                "Recycling one aluminum can saves enough energy to run a TV for 3 hours.",
                "Glass can be recycled infinitely without losing quality."
            ],
            "digital-scams": [
                "If an offer seems too good to be true, it probably is a scam.",
                "Never give personal information to unsolicited callers or emails.",
                "Use two-factor authentication whenever possible for better security.",
                "Keep software updated to protect against the latest security threats.",
                "Trust your instincts - if something feels wrong, investigate further."
            ],
            "food-safety": [
                "When in doubt, throw it out - food safety is worth more than saving money.",
                "The 'danger zone' for food temperature is between 40°F and 140°F.",
                "Cross-contamination is prevented by using separate cutting boards for meat and vegetables.",
                "A food thermometer is your best tool for ensuring safe cooking temperatures.",
                "Proper hand washing before food preparation prevents most foodborne illnesses."
            ]
        };

        // App state
        this.currentTopic = "road-rules";
        this.currentScenario = null;
        this.selectedAnswer = null;
        this.userProgress = this.loadProgress();
        this.newlyEarnedBadges = [];
        this.isDarkMode = this.loadThemePreference();

        // Initialize Pentagon Tracker
        this.pentagonTracker = null;

        this.init();
    }

    init() {
        this.bindEvents();
        this.applyTheme();
        this.setTopicTheme(this.currentTopic);
        this.updateDisplay();
        this.renderRPGTracker();
        this.initializePentagonTracker();
        this.loadTodaysScenario();
        this.renderBadges();
    }

    initializePentagonTracker() {
        // Initialize the Pentagon Tracker after DOM is ready
        setTimeout(() => {
            const canvas = document.getElementById('radar');
            if (canvas) {
                this.pentagonTracker = new PentagonTracker('radar');
                this.renderPentagonTracker();
            }
        }, 100);
    }

    bindEvents() {
        // Wait for DOM to be fully loaded before binding events
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupEventListeners();
            });
        } else {
            this.setupEventListeners();
        }
    }

    setupEventListeners() {
        // Theme toggle - with error handling
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleTheme();
            });
        }

        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const topic = e.currentTarget.getAttribute('data-topic');
                this.switchTopic(topic);
            });
        });

        // Reset progress
        const resetButton = document.getElementById('reset-progress');
        if (resetButton) {
            resetButton.addEventListener('click', (e) => {
                e.preventDefault();
                if (confirm('Are you sure you want to reset ALL your progress across all topics? This cannot be undone.')) {
                    this.resetProgress();
                }
            });
        }

        // Modal controls
        const closeButton = document.getElementById('close-feedback');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                this.closeFeedbackModal();
            });
        }

        const continueButton = document.getElementById('continue-button');
        if (continueButton) {
            continueButton.addEventListener('click', () => {
                this.closeFeedbackModal();
            });
        }

        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', () => {
                this.closeFeedbackModal();
            });
        }

        // Keyboard accessibility
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeFeedbackModal();
            }
        });
    }

    loadThemePreference() {
        try {
            const saved = localStorage.getItem('lifeskills-theme');
            return saved === 'dark';
        } catch (error) {
            console.error('Error loading theme preference:', error);
            return false;
        }
    }

    saveThemePreference() {
        try {
            localStorage.setItem('lifeskills-theme', this.isDarkMode ? 'dark' : 'light');
        } catch (error) {
            console.error('Error saving theme preference:', error);
        }
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        this.applyTheme();
        this.saveThemePreference();
    }

    applyTheme() {
        const html = document.documentElement;
        const themeIcon = document.getElementById('theme-icon');

        if (this.isDarkMode) {
            html.setAttribute('data-color-scheme', 'dark');
            if (themeIcon) themeIcon.textContent = '☀️';
        } else {
            html.setAttribute('data-color-scheme', 'light');
            if (themeIcon) themeIcon.textContent = '🌙';
        }

        // Force a reflow to ensure theme changes are applied
        html.offsetHeight;
    }

    switchTopic(topicId) {
        if (!this.topics[topicId]) return;

        this.selectedAnswer = null;
        this.currentTopic = topicId;

        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        const activeNavItem = document.querySelector(`[data-topic="${topicId}"]`);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }

        // Update theme with smooth transition
        this.setTopicTheme(topicId);

        // Update header
        const topic = this.topics[topicId];
        const topicNameElement = document.getElementById('current-topic-name');
        if (topicNameElement) {
            topicNameElement.textContent = `${topic.name} - Daily Learning Coach`;
        }

        // Update stats label
        const topicLabelElement = document.getElementById('topic-completed-label');
        if (topicLabelElement) {
            topicLabelElement.textContent = `${topic.name} Completed`;
        }

        // Update display and load scenario
        this.updateDisplay();
        this.renderRPGTracker();
        this.renderPentagonTracker();
        this.loadTodaysScenario();
    }

    setTopicTheme(topicId) {
        const topic = this.topics[topicId];
        if (topic && topic.theme) {
            document.documentElement.setAttribute('data-theme', topic.theme);
        }
    }

    loadProgress() {
        const defaultProgress = {
            completedScenarios: {},
            currentStreak: 0,
            bestStreak: 0,
            lastCompletionDate: null,
            earnedBadges: [],
            topicXP: {
                "road-rules": 0,
                "personal-hygiene": 0,
                "waste-management": 0,
                "digital-scams": 0,
                "food-safety": 0
            }
        };

        try {
            const saved = JSON.parse(localStorage.getItem('lifeskills-progress') || '{}');
            return { ...defaultProgress, ...saved, topicXP: { ...defaultProgress.topicXP, ...saved.topicXP } };
        } catch (error) {
            console.error('Error loading progress:', error);
            return defaultProgress;
        }
    }

    saveProgress() {
        try {
            localStorage.setItem('lifeskills-progress', JSON.stringify(this.userProgress));
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    }

    getDaysSinceEpoch() {
        return Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    }

    loadTodaysScenario() {
        const topic = this.topics[this.currentTopic];
        if (!topic || !topic.scenarios.length) return;

        const today = this.getDaysSinceEpoch();
        const scenarioIndex = (today + Object.keys(this.topics).indexOf(this.currentTopic)) % topic.scenarios.length;
        this.currentScenario = topic.scenarios[scenarioIndex];

        const todayKey = new Date().toDateString();
        const topicProgress = this.userProgress.completedScenarios[this.currentTopic] || [];
        const alreadyCompleted = topicProgress.some(completion => completion.date === todayKey);

        this.renderScenario(alreadyCompleted);
    }

    renderScenario(isCompleted = false) {
        if (!this.currentScenario) return;

        const topic = this.topics[this.currentTopic];
        const categoryElement = document.getElementById('scenario-category');
        const questionElement = document.getElementById('scenario-question');

        if (categoryElement) {
            categoryElement.textContent = topic.name.toUpperCase();
        }
        if (questionElement) {
            questionElement.textContent = this.currentScenario.question;
        }

        const optionsContainer = document.getElementById('answer-options');
        if (!optionsContainer) return;

        optionsContainer.innerHTML = '';

        if (isCompleted) {
            optionsContainer.innerHTML = `
                <div class="completed-message">
                    <h3>✅ Today's ${topic.name} Challenge Complete!</h3>
                    <p>You've already completed today's scenario for this topic. Come back tomorrow for a new challenge!</p>
                    <p><strong>Correct Answer:</strong> ${this.currentScenario.options[this.currentScenario.correct]}</p>
                    <div style="margin-top: 20px; padding: 16px; background: var(--bg-tertiary); border-radius: var(--radius-md); border: 2px solid var(--accent-primary);">
                        <h4>💡 Today's Knowledge Tip</h4>
                        <p>${this.getRandomKnowledgeTip()}</p>
                    </div>
                </div>
            `;
            return;
        }

        this.currentScenario.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'answer-option';
            button.textContent = option;
            button.setAttribute('role', 'radio');
            button.setAttribute('aria-checked', 'false');
            button.addEventListener('click', () => this.selectAnswer(index, button));

            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.selectAnswer(index, button);
                }
            });

            optionsContainer.appendChild(button);
        });
    }

    selectAnswer(answerIndex, buttonElement) {
        document.querySelectorAll('.answer-option').forEach(btn => {
            btn.classList.remove('selected');
            btn.setAttribute('aria-checked', 'false');
            btn.disabled = true;
        });

        buttonElement.classList.add('selected');
        buttonElement.setAttribute('aria-checked', 'true');
        this.selectedAnswer = answerIndex;

        setTimeout(() => {
            this.submitAnswer();
        }, 500);
    }

    submitAnswer() {
        if (this.selectedAnswer === null || !this.currentScenario) return;

        const isCorrect = this.selectedAnswer === this.currentScenario.correct;
        this.updateProgress(isCorrect);
        this.showFeedback(isCorrect);
    }

    updateProgress(isCorrect) {
        const today = new Date().toDateString();
        const todayCompletion = {
            date: today,
            scenarioId: this.currentScenario.id,
            correct: isCorrect,
            timestamp: Date.now()
        };

        if (!this.userProgress.completedScenarios[this.currentTopic]) {
            this.userProgress.completedScenarios[this.currentTopic] = [];
        }

        this.userProgress.completedScenarios[this.currentTopic].push(todayCompletion);

        if (isCorrect) {
            this.userProgress.topicXP[this.currentTopic] = (this.userProgress.topicXP[this.currentTopic] || 0) + 1;
        }

        this.updateStreak(today);
        const newBadges = this.checkNewBadges();
        this.newlyEarnedBadges = newBadges;

        this.saveProgress();
        this.updateDisplay();
        this.renderRPGTracker();
        this.renderPentagonTracker();
        this.renderBadges();
    }

    updateStreak(today) {
        const lastDate = this.userProgress.lastCompletionDate;

        if (!lastDate) {
            this.userProgress.currentStreak = 1;
        } else {
            const lastCompletionDate = new Date(lastDate);
            const todayDate = new Date(today);
            const diffTime = todayDate - lastCompletionDate;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays === 1) {
                this.userProgress.currentStreak += 1;
            } else if (diffDays > 1) {
                this.userProgress.currentStreak = 1;
            }
        }

        if (this.userProgress.currentStreak > this.userProgress.bestStreak) {
            this.userProgress.bestStreak = this.userProgress.currentStreak;
        }

        this.userProgress.lastCompletionDate = today;
    }

    showFeedback(isCorrect) {
        const modal = document.getElementById('feedback-modal');
        if (!modal) return;

        const resultIcon = document.getElementById('result-icon');
        const resultMessage = document.getElementById('result-message');
        const xpGained = document.getElementById('xp-gained');
        const explanationText = document.getElementById('explanation-text');
        const safetyTip = document.getElementById('safety-tip');
        const newBadgesContainer = document.getElementById('new-badges');

        if (isCorrect) {
            if (resultIcon) resultIcon.textContent = '✅';
            if (resultMessage) {
                resultMessage.textContent = 'Excellent! That\'s the correct answer.';
                resultMessage.style.color = 'var(--accent-primary)';
            }
            if (xpGained) xpGained.style.display = 'flex';
        } else {
            if (resultIcon) resultIcon.textContent = '❌';
            if (resultMessage) {
                resultMessage.textContent = 'Not quite right. Let\'s learn from this!';
                resultMessage.style.color = '#ef4444';
            }
            if (xpGained) xpGained.style.display = 'none';
        }

        if (explanationText) explanationText.textContent = this.currentScenario.explanation;
        if (safetyTip) safetyTip.textContent = this.getRandomKnowledgeTip();

        if (newBadgesContainer) {
            this.displayNewBadges(this.newlyEarnedBadges || [], newBadgesContainer);
        }

        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');

        setTimeout(() => {
            const continueButton = document.getElementById('continue-button');
            if (continueButton) continueButton.focus();
        }, 100);
    }

    closeFeedbackModal() {
        const modal = document.getElementById('feedback-modal');
        if (!modal) return;

        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');

        this.newlyEarnedBadges = [];
        this.selectedAnswer = null;

        document.querySelectorAll('.answer-option').forEach(btn => {
            btn.disabled = false;
        });

        this.loadTodaysScenario();
    }

    getRandomKnowledgeTip() {
        const tips = this.knowledgeTips[this.currentTopic] || [];
        if (tips.length === 0) return "Keep learning and stay curious!";
        const randomIndex = Math.floor(Math.random() * tips.length);
        return tips[randomIndex];
    }

    checkNewBadges() {
        const newBadges = [];
        const totalCompleted = this.getTotalCompleted();
        const currentStreak = this.userProgress.currentStreak;

        for (const badge of this.badges) {
            if (this.userProgress.earnedBadges.includes(badge.name)) continue;

            let earned = false;
            if (badge.requirement === "complete_all_topics") {
                earned = Object.keys(this.topics).every(topic =>
                    (this.userProgress.completedScenarios[topic] || []).length > 0
                );
            } else if (badge.type === 'streak') {
                earned = currentStreak >= badge.requirement;
            } else {
                earned = totalCompleted >= badge.requirement;
            }

            if (earned) {
                this.userProgress.earnedBadges.push(badge.name);
                newBadges.push(badge);
            }
        }

        return newBadges;
    }

    displayNewBadges(badges, container) {
        if (!container) return;

        container.innerHTML = '';

        if (badges.length > 0) {
            const header = document.createElement('h4');
            header.textContent = '🎉 New Badge' + (badges.length > 1 ? 's' : '') + ' Earned!';
            header.style.color = 'var(--accent-primary)';
            header.style.marginBottom = 'var(--space-12)';
            container.appendChild(header);

            badges.forEach(badge => {
                const badgeElement = document.createElement('div');
                badgeElement.className = 'badge-earned';
                badgeElement.innerHTML = `
                    <span>${badge.icon}</span>
                    <span>${badge.name}</span>
                `;
                container.appendChild(badgeElement);
            });
        }
    }

    getTotalCompleted() {
        return Object.values(this.userProgress.completedScenarios)
            .reduce((total, topicScenarios) => total + topicScenarios.length, 0);
    }

    getCurrentTopicCompleted() {
        return (this.userProgress.completedScenarios[this.currentTopic] || []).length;
    }

    getTotalXP() {
        return Object.values(this.userProgress.topicXP).reduce((total, xp) => total + xp, 0);
    }

    getLevel(xp) {
        for (let i = this.rpgLevels.length - 1; i >= 0; i--) {
            if (xp >= this.rpgLevels[i].xpRequired) {
                return this.rpgLevels[i];
            }
        }
        return this.rpgLevels[0];
    }

    getNextLevel(currentLevel) {
        const currentIndex = this.rpgLevels.findIndex(level => level.name === currentLevel.name);
        return currentIndex < this.rpgLevels.length - 1 ? this.rpgLevels[currentIndex + 1] : null;
    }

    updateDisplay() {
        const elements = {
            'current-streak': this.userProgress.currentStreak,
            'total-completed': this.getTotalCompleted(),
            'topic-completed': this.getCurrentTopicCompleted(),
            'best-streak': this.userProgress.bestStreak,
            'badges-earned': this.userProgress.earnedBadges.length
        };

        Object.entries(elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value;
        });
    }

    // Pentagon Tracker Rendering - Using Canvas
    renderPentagonTracker() {
        if (this.pentagonTracker) {
            this.pentagonTracker.updateStats(this.userProgress.topicXP);
        }
        // FIXED: Ensure pentagon stats are rendered
        this.renderPentagonStats();
    }

    // FIXED: Pentagon stats rendering
    renderPentagonStats() {
        const container = document.getElementById('pentagon-stats');
        if (!container) return;

        container.innerHTML = '';

        Object.entries(this.topics).forEach(([topicId, topic]) => {
            const topicXP = this.userProgress.topicXP[topicId] || 0;
            const topicLevel = this.getLevel(topicXP);

            const statElement = document.createElement('div');
            statElement.className = 'pentagon-stat';
            statElement.innerHTML = `
                <span class="pentagon-stat-icon">${topic.icon}</span>
                <div class="pentagon-stat-info">
                    <div class="pentagon-stat-name">${topic.name}</div>
                    <div class="pentagon-stat-level">${topicLevel.name} (${topicXP} XP)</div>
                </div>
            `;

            container.appendChild(statElement);
        });
    }

    renderRPGTracker() {
        const totalXP = this.getTotalXP();
        const currentLevel = this.getLevel(totalXP);
        const nextLevel = this.getNextLevel(currentLevel);

        const levelElement = document.getElementById('overall-level');
        if (levelElement) {
            levelElement.textContent = currentLevel.name;
        }

        const xpFill = document.getElementById('overall-xp-fill');
        const xpText = document.getElementById('overall-xp-text');

        if (nextLevel) {
            const progress = ((totalXP - currentLevel.xpRequired) / (nextLevel.xpRequired - currentLevel.xpRequired)) * 100;
            if (xpFill) xpFill.style.width = `${Math.min(progress, 100)}%`;
            if (xpText) xpText.textContent = `${totalXP} / ${nextLevel.xpRequired} XP`;
        } else {
            if (xpFill) xpFill.style.width = '100%';
            if (xpText) xpText.textContent = `${totalXP} XP (Max Level)`;
        }

        const container = document.getElementById('topic-progress-grid');
        if (!container) return;

        container.innerHTML = '';

        Object.entries(this.topics).forEach(([topicId, topic]) => {
            const topicXP = this.userProgress.topicXP[topicId] || 0;
            const topicLevel = this.getLevel(topicXP);
            const topicNextLevel = this.getNextLevel(topicLevel);

            const progressCard = document.createElement('div');
            progressCard.className = 'topic-progress';

            let progressWidth = 0;
            let progressText = `${topicXP} XP`;

            if (topicNextLevel) {
                progressWidth = ((topicXP - topicLevel.xpRequired) / (topicNextLevel.xpRequired - topicLevel.xpRequired)) * 100;
                progressText = `${topicXP} / ${topicNextLevel.xpRequired} XP`;
            } else if (topicXP > 0) {
                progressWidth = 100;
                progressText = `${topicXP} XP (Max)`;
            }

            progressCard.innerHTML = `
                <div class="topic-header">
                    <span class="topic-icon">${topic.icon}</span>
                    <div>
                        <div class="topic-name">${topic.name}</div>
                        <div class="topic-level">${topicLevel.name}</div>
                    </div>
                </div>
                <div class="xp-bar">
                    <div class="xp-fill" style="width: ${progressWidth}%"></div>
                    <span class="xp-text">${progressText}</span>
                </div>
            `;

            container.appendChild(progressCard);
        });
    }

    renderBadges() {
        const container = document.getElementById('badges-grid');
        if (!container) return;

        container.innerHTML = '';

        this.badges.forEach(badge => {
            const isEarned = this.userProgress.earnedBadges.includes(badge.name);

            const badgeCard = document.createElement('div');
            badgeCard.className = `badge-card ${isEarned ? 'earned' : ''}`;

            badgeCard.innerHTML = `
                <div class="badge-icon">${badge.icon}</div>
                <div class="badge-name">${badge.name}</div>
                <p class="badge-description">${badge.description}</p>
            `;

            container.appendChild(badgeCard);
        });
    }

    resetProgress() {
        this.userProgress = {
            completedScenarios: {},
            currentStreak: 0,
            bestStreak: 0,
            lastCompletionDate: null,
            earnedBadges: [],
            topicXP: {
                "road-rules": 0,
                "personal-hygiene": 0,
                "waste-management": 0,
                "digital-scams": 0,
                "food-safety": 0
            }
        };

        this.selectedAnswer = null;
        this.newlyEarnedBadges = [];
        this.saveProgress();
        this.updateDisplay();
        this.renderRPGTracker();
        this.renderPentagonTracker();
        this.loadTodaysScenario();
        this.renderBadges();

        alert('All progress has been reset successfully!');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LifeSkillsCoach();
});