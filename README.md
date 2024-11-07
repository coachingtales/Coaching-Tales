# Coaching Tales

## Project Overview: Celebrating Female Football Coaches
This project aims to spotlight the inspiring stories of female football coaches, showcasing the significant impact they've had on the sport. By sharing their journeys, challenges, and successes, we hope to inspire the next generation, encouraging young girls to follow in their footsteps and pursue careers in football. Through this initiative, in collaboration with the National Football Museum in Manchester, we celebrate the contributions of these trailblazing women and motivate future athletes and coaches to continue breaking barriers in the sport.

## UX (User Experience)

The *Coaching Tales* website provides an engaging, app-like experience on iPads, ideal for museum visitors exploring coaching stories. The UX prioritises straightforward navigation and accessibility, guiding users smoothly through each story.

### Target Audience
Our main users include:
- Museum visitors, even those less familiar with digital interfaces
- Football fans and aspiring coaches interested in the journeys of female coaches

### User Flow
Users can:
- Select from three coaching tales, each with a unique colour to represent its path
- Navigate content that includes text, audio, and visuals, enhancing the storytelling experience
- Finish each pathway with a summary page, reflecting their chosen journey and key insights

### Accessibility
We adhere to WCAG 2.1 standards to ensure accessibility for all users. Features like high-contrast colours, large buttons, and clear icons ensure usability for visitors with varied needs.

## UI (User Interface)

### Design Elements
The UI blends style with functionality, optimised for iPad use. Key features include:
- A circular motif symbolising a football, highlighting the coaching theme
- Large, identifiable buttons and icons for easy interaction
- 3D images of each coach, adding a modern, dynamic look to the site

### Key Components
- **Colour-coded Pathways**: Each tale is distinguished by a specific colour, visually guiding users through their journey.
- **Simple Navigation**: Clear icons help users switch between text, audio, and story progression, keeping navigation intuitive.
- **Audio Player**: A user-friendly audio player with images supports storytelling. It’s also adaptable to video in the future.

### Design & Development Tools
Using Figma for prototyping and a component-based architecture, the interface is built for scalability and ease of updates.

## Accessibility & Testing

- **Contrast & Accessibility Testing**: The site is regularly tested to meet WCAG 2.1 standards, ensuring an inclusive experience.
- **Component Flexibility**: Built with adaptable components, allowing future updates, such as video playback, without a full redesign.

## Project details for future developers.

The current project is set-up as a PWA or progressive web app for iPad. Future plans would include creating a mobile and desktop friendly version. The two main files for the PWA are the **manifest.json** and the **ServiceWorkerRegistrar.tsx** in the components folder. Other features -

**useCoachDetails.ts**
This custom hook, designed to manage and provide detailed information about a specific coach. By taking parameters such as **coach**, **path**, and **choices**, this hook fetches and sets various coach-related details from a data source (**coachData.json**). It then returns these details in a structured format, including text descriptions, titles, and potential audio content. The **useCoachDetails** hook is intended for use in components where specific contextual or media information about a coach is needed, enhancing interactivity and user experience by dynamically loading relevant content based on the provided parameters.

**useCoachNavigation.ts**
This custom hook, which facilitates navigation through various coach-related content within the application. It manages several states, including the current coach ID, page transition effects, loading states, and tracking whether the user is on the first page. The hook allows for smooth transitions between coach details by setting the appropriate coach data URL and updating state as users navigate. It is especially useful for components that require organized navigation and loading indicators when displaying sequential or paginated coach content.

## Tech Stack

Front-end
- Next.js
- React
- TypeScript
- Tailwind CSS
- Biome

Database
- Supabase

DevSecOps
- Vercel
- Husky
- Snyk
- GitGuardian

Collaborations & Prototypes
- Notion
- Figma


## Folder Structure
- TypeScript
- Husky
- Vercel
- Supabase

## Getting Started

``` bash
    cd coaching-tales
    npm i
    npm run dev
```
Visit - http://localhost:3000/
            
