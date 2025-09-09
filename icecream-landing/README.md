# **🍦 ICECREAM LANDING PAGE**

*A React.js Pixel-Perfect Assignment*  

This project is my submission for the **coding round** task, where I recreated the provided **Figma prototype** into a **pixel-perfect, fully functional React.js web application**.  

---

### This is how UI looks like:

Interfaces (Different flavor backgrounds)--


1. **Strawberry Interface**
<img width="1470" height="822" alt="Screenshot 2025-09-09 at 8 46 40 PM" src="https://github.com/user-attachments/assets/346fbf71-2e78-4796-b3a2-ce8d0c600900" />

2. **Blueberry Interface**
 
 <img width="1470" height="822" alt="Screenshot 2025-09-09 at 8 48 46 PM" src="https://github.com/user-attachments/assets/e25b1008-1de7-45ea-8ed0-ede975a9f97d" />

3. **Chocolate Interface**

 <img width="1470" height="822" alt="Screenshot 2025-09-09 at 8 55 43 PM" src="https://github.com/user-attachments/assets/4c53096a-72f7-4ee5-8f92-54eb23dcc04f" />

4. **Evergreen Interface**
   
<img width="1470" height="822" alt="Screenshot 2025-09-09 at 8 56 25 PM" src="https://github.com/user-attachments/assets/0a21b97a-b6c4-4123-a575-3606d800cd30" />


## 📌 Tech Stack

1.  React.js (functional components + hooks)
2.  TailwindCSS
3.  pnpm (package manager)
4.  Vercel (deployment)


## ✅ Task Compliance Checklist  

I carefully read and implemented all instructions from the assignment:  

- [x] **React.js with functional components + hooks only** → No class components used.  
- [x] **Pixel-perfect recreation** → All spacing, colors, fonts, and interactions match the Figma prototype exactly.  
- [x] **Fully responsive** → Tested across desktop, tablet, and mobile breakpoints.  
- [x] **Clean and modular folder structure** → Separate components, assets, and styles.  
- [x] **Code readability & comments** → Inline comments + structured file organization.  
- [x] **Deployed successfully** → Deployed on Vercel for live preview.  
- [x] **README** → Includes project overview, folder structure, setup instructions, deployment link, known issues, and documentation.  

---

## 🎨 Figma Design References  

- **Design File:**
  [Figma Design](https://www.figma.com/design/7wBPILkI59YRNAhIz2IWr9/Ice-Cream?node-id=0-1&t=6b8cKaCCH7hEhgx)  
- **Live Prototype Preview:**
  [Prototype](https://www.figma.com/proto/7wBPILkI59YRNAhIz2IWr9/Ice-Cream?page-id=0%3A1&node-id=1-17&viewport=435%2C53%2C0.11&t=zUaIQitWqVhKiM37-1&scaling=scale-down&content-scaling=fixed)  

---

## 📂 Folder Structure  
```
ReactProject-Code-X-Novas/
└── icecream-landing/
    ├── src/
    │   ├── assets/                  # Logo + cone images (big and small with different flavors)
    │   ├── components/              # Reusable React components
    │   │   ├── Navbar.jsx           # Navbar (standalone, for clarity only)
    │   │   ├── Hero.jsx             # Hero section (standalone, for clarity only)
    │   │   └── HeroWithNavbar.jsx   # Combined Navbar + Hero (used in App.jsx for proper scrolling)
    │   ├── App.jsx                  # Root component (renders HeroWithNavbar)
    │   └── index.jsx                # React entry point
    ├── package.json                 # Project dependencies + scripts
    └── README.md                    # Documentation

```

<img width="363" height="822" alt="Screenshot 2025-09-09 at 9 24 44 PM" src="https://github.com/user-attachments/assets/e108bd74-cd12-4b87-b46d-d032c3a8627b" />



---

## ⚙️ Setup Instructions  

##### 1. Clone the repository  
```bash
git clone https://github.com/Sanskriti10247/ReactProject-Code-X-Novas.git
```
##### 2. Navigate to the project
```
cd "ReactProject-Code-X-Novas/icecream-landing"
```
##### 3. Install dependencies
```
pnpm install
```
##### 4. Start development server
```
pnpm run dev
```
👉 Visit http://localhost:5173/ in your browser.


Reference:

<img width="1140" height="304" alt="Screenshot 2025-09-09 at 8 45 37 PM" src="https://github.com/user-attachments/assets/e62fdd7e-c0a1-4e5f-9514-17008d81cc25" />


#### ⚡ Features

1.  Flavor Switching → Clicking small cone icons changes the big cone and gradient background.
2.  Pixel-Perfect Styling → All typography, spacing, and colors match Figma exactly.
3.  Fully Responsive → Layout adapts smoothly across screen sizes.
4.  Interactive Navbar + CTA Button → Matches prototype interactions.
5.  Clean Folder Structure + Comments → Easy to read and maintain.

   

### VIDEO REFERENCE


https://github.com/user-attachments/assets/ed53855c-b4ea-45f7-bb9e-a218630c3028


## 🌐 Deployment

Live Deployed Link (Vercel): 👉 

## 📱 Responsiveness

- The landing page adapts to desktop, tablet, and mobile views.
-Verified using Chrome DevTools + actual resizing.
-Screenshots and recordings (before and after deployment) will be attached in this section.



<details>
 <details> <summary>📂 Click to expand my thought process and decisions</summary>

  #  📝Development Notes  

---

##  🔹 *Initial Approach: Separate Components*  
- I started by creating:  
  - **`Navbar.jsx`** 🧭  
  - **`Hero.jsx`** 🍦  
- **✅ Benefits of this approach:**  
  - *Clarity* → easier to read code.  
  - *Modularity* → components reusable in other contexts.  
  - *Debuggability* → each section could be tested independently.  

---

##  🔹 *Challenge Faced: Scrolling & Layout*  
> ❌ **Problem:** When `Navbar` and `Hero` were separate, scroll & layout alignment broke.  

- **Issues observed:**  
  - 🚫 Vertical + horizontal scroll didn’t sync.  
  - 🚫 Aligning **cones + text with navbar spacing** was messy.  

---

##  🔹 *Final Solution: Combined Component*  
- Created a new **`HeroWithNavbar.jsx`**:  

```jsx
// App.jsx
import HeroWithNavbar from "./components/HeroWithNavbar";

export default function App() {
  return <HeroWithNavbar />;
}
```

***✅ Benefits of combining***:

-Smooth scroll behavior.

-Perfect layout alignment.

-Cleaner App.jsx.

</details>
---



