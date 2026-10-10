# 🌿 Mindful Breathing & Ambient Focus Hub

A calming and interactive web application designed to support mindfulness, guided breathing, meditation, relaxation, and focused study sessions. The platform combines breathing exercises, ambient sounds, meditation tools, and progress tracking in one place.

## ✨ Features

### 🫁 Breathing Studio
- Guided breathing exercises with animated visual guidance.
- Different breathing patterns for relaxation and focus.
- Customizable session duration.
- Optional breathing cues and sound effects.
- Real-time session progress.

### 🧘 Meditation Studio
- Guided meditation sessions.
- Ambient sound options to create a peaceful environment.
- Session timer and meditation controls.
- Pause, resume, and end meditation sessions.

### 🎵 Ambient Sounds
- Multiple ambient sound options for relaxation and concentration.
- Adjustable volume control.
- Audio playback controls.
- Support for adding custom audio sources where available.

### 🎯 Focus Studio
- Focus sessions for studying and productivity.
- Timer-based work sessions.
- Ambient audio support for concentration.

### 📊 Progress Tracking
- Track completed sessions.
- View mindfulness and meditation activity.
- Monitor personal progress over time.

### 👤 User Authentication
- User registration and login.
- Account-based access to application features.
- Database integration using Prisma.

### 📱 Responsive Design
- Clean and user-friendly interface.
- Designed for desktop, tablet, and mobile screens.

## 🛠️ Technology Stack

**Frontend**
- React
- TypeScript
- Vite
- HTML5 and CSS3

**Backend**
- Node.js
- Express.js
- TypeScript
- Prisma ORM

**Database**
- SQLite

**Audio**
- HTML5 Audio API
- Web Audio API

## 📂 Project Structure

```text
mindful-breathing-hub/
├── client/                 # Frontend application
├── server/                 # Backend application
│   ├── prisma/             # Database schema and migrations
│   └── src/                # Server source code
├── package.json            # Root scripts and dependencies
└── README.md               # Project documentation
```

## 🚀 Installation and Setup

### Prerequisites

Install the following before running the project:

- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
cd mindful-breathing-hub
```

Replace `YOUR_REPOSITORY_URL` with your actual GitHub repository URL.

### 2. Install Dependencies

Install the root dependencies:

```bash
npm install
```

Install the backend dependencies:

```bash
cd server
npm install
```

Install the frontend dependencies:

```bash
cd ../client
npm install
```

Return to the project root:

```bash
cd ..
```

### 3. Configure Environment Variables

Check the `server/.env` file and make sure the required database configuration is present.

Example for SQLite:

```env
DATABASE_URL="file:./dev.db"
```

Use the database URL format expected by the project's Prisma configuration. Never commit passwords, API keys, or other private credentials to GitHub.

### 4. Initialize the Database

Run the following commands from the project root:

```bash
npm run db:generate
npm run db:migrate
```

These commands generate the Prisma Client and apply the required database migrations.

### 5. Start the Application

```bash
npm run dev
```

The development script starts the frontend and backend services.

Open the local URL printed by Vite in your terminal. It is commonly:

```text
http://localhost:5173
```

If that port is already in use, Vite may select another port, such as `5174`.

## 🎧 Using the Application

1. Open the application in your browser.
2. Register an account or log in if authentication is required.
3. Choose Breathing Studio, Meditation Studio, or Focus Studio.
4. Select your preferred session duration and available sound.
5. Start your session and use the playback controls as needed.
6. Visit the progress section to review recorded activity.

**Audio note:** Audio playback may depend on browser permissions, user interaction, internet access for external audio URLs, and the selected sound source. Some built-in ambient sounds may be generated electronically rather than using original environmental recordings.

## 🔧 Troubleshooting

**Vite is not recognized**

```bash
cd client
npm install
```

**tsx is not recognized**

```bash
cd server
npm install
```

**Prisma is not recognized**

```bash
cd server
npm install
```

Then return to the root and run:

```bash
npm run db:generate
```

**Port already in use**

If the backend port `4000` is occupied, stop the previous server process before starting the application again. Do not terminate unrelated processes.

**Meditation or ambient sound is not playing**

- Check your device and browser volume.
- Confirm that the correct sound is selected.
- Click the relevant Start or Begin button.
- Check browser permissions and the browser console.
- Verify that any external audio URL is accessible.

**Cannot connect to the server**

- Make sure the backend is running.
- Confirm that the configured API URL and backend port match.
- Check the terminal for server errors.
- Confirm that the database has been initialized.

## 🔒 Privacy and Security

- Keep environment variables and credentials private.
- Use secure authentication practices.
- Avoid storing unnecessary personal information.
- Review database and session-handling logic before deploying publicly.

## 🚀 Future Improvements

- More breathing patterns and meditation sessions.
- Additional built-in ambient sound options.
- Custom audio uploads and playlists.
- Improved progress charts and statistics.
- Personalized mindfulness routines.
- Production deployment and enhanced accessibility.

## 🎓 Project Purpose

Mindful Breathing & Ambient Focus Hub aims to provide an accessible digital space for mindfulness, relaxation, and productive study. It brings together breathing exercises, meditation, ambient audio, and session tracking in a simple web application.

---

**Made with 💚 for mindfulness, relaxation, and better focus.**
