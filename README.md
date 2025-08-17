# BPL Dream 11

A React single‑page application for building a 6‑player fantasy lineup with a coin‑based credit system. Users can claim a one‑time credit, browse players, and add them to a selected squad while receiving real‑time feedback via React Toastify notifications.

---

## ✨ Features

* **One‑time credit claim** to fund your squad budget
* **Player selection with price per game** and **max 6 players** constraint
* **Live coin balance updates** as you add players
* **Toast notifications** (success, warning, error, info) for a clean UX
* Modular component structure: `Header`, `Hero`, `Players`, `Selected`, `Subscription`, `Footer`

---

## 🧱 Tech Stack

* **React** (Vite or CRA)
* **React Toastify** for notifications
* **CSS** modules / Tailwind (as used in your project styles)

---

## 📁 Project Structure

```
src/
  App.jsx
  App.css
  header/
    Header.jsx
  hero/
    Hero.jsx
  players/
    Players.jsx
  selected/
    Selected.jsx
  subscription/
    Subscription.jsx
  footer/
    Footer.jsx
```

> Your actual file names may vary; adjust as needed.

---

## 🚀 Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run the development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

---

## 🔔 Notifications (React Toastify)

This project uses **React Toastify** for user feedback. Ensure the container is mounted once at the app root.

```jsx
// App.jsx (excerpt)
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <ToastContainer />
      {/* ...rest of app */}
    </div>
  )
}
```

Use toasts anywhere:

```jsx
import { toast } from 'react-toastify'

toast.success("You've selected Shakib Al Hasan", { theme: 'colored', position: 'top-center' })
```

Supported types: `toast`, `toast.success`, `toast.error`, `toast.info`, `toast.warning`.
Themes: `light`, `dark`, `colored`.

---

## 🧠 Core App Logic

The app maintains three key pieces of state in `App.jsx`:

```jsx
const [coins, setCoins] = useState(0)
const [playersPrice, setPlayersPrice] = useState(0)
const [selectPlayers, setSelectPlayers] = useState([])
```

* **coins**: user’s current budget for recruiting players.
* **playersPrice**: aggregated amount (e.g., from actions in the UI; updated via `getCoins`).
* **selectPlayers**: the current squad (max 6 unique players).

### Claiming Credits

One‑time claim that increases `coins` and confirms via toast.

```jsx
const handleCoins = () => {
  if (coins === 0) {
    setCoins(playersPrice + coins) // or set a fixed welcome amount, e.g. setCoins(5000)
    toast.success(`You've claimed free credit ${playersPrice}`, { theme: 'colored', position: 'top-center' })
  } else {
    toast.warn("You can't claim more than once", { theme: 'colored', position: 'top-center' })
  }
}
```

### Selecting Players

* Blocks duplicates
* Checks balance before purchase
* Caps squad at **6** players

```jsx
const selectedPlayers = (player) => {
  const alreadySelected = selectPlayers.some(p => p.id === player.id)
  if (alreadySelected) {
    return toast.error('Already added this player', { theme: 'colored', position: 'top-center' })
  }

  const next = [...selectPlayers, player]

  if (coins < player.price_per_game) {
    return toast.warn('Insufficient Balance', { theme: 'colored', position: 'top-center' })
  }

  if (next.length > 6) {
    return toast.warn("You can't add more than 6 players", { theme: 'colored', position: 'top-center' })
  }

  setCoins(coins - player.price_per_game)
  setSelectPlayers(next)
  toast.success(`You've selected ${player.name}`, { theme: 'colored', position: 'top-center' })
}
```

> **Note:** Ensure the limit check prevents the 7th item (`next.length > 6`).

---

## 🔌 Props & Contracts (high level)

* **Header**: receives `coins` → displays current balance.
* **Hero**: receives `handleCoins` → triggers one‑time credit claim.
* **Players**: receives `getCoins`, `selectedPlayers`, `selectPlayers` → renders available players and selection actions.
* **Selected**: receives `selectPlayers` → renders the current squad.
* **Subscription** / **Footer**: presentational.

---

## ✅ UX Guidelines

* Place only **one** `<ToastContainer />` at the app root.
* Prefer `theme: 'colored'` for vivid feedback (success=green, error=red, info=blue, warning=orange).
* Keep toast `autoClose` around **3000ms** for quick, non‑blocking feedback.

---

## 🧪 Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

> If you’re using CRA, replace with CRA scripts (`react-scripts start/build/test`).

---

## 🛠️ Development Tips

* Remove unused calls like `parseInt(coins)` without assignment (no side effect).
* Keep state updates **atomic** (don’t set `selectPlayers` when validation fails).
* Consider extracting a **PlayerCard** component and a **SelectedList** for clearer separation.
* Add TypeScript or PropTypes for safer props.

---

## 📦 Environment / Data

* Player objects are expected to have: `{ id, name, price_per_game, ... }`.
* If you fetch data, add a `.env` and document keys here.

---

## 🧭 Roadmap

* Persist squad & coins to `localStorage` or backend
* Search/filter players
* Sort by role/price/performance
* Undo last action
* Responsive & accessibility polish

---

## 🤝 Contributing

PRs welcome! Please open an issue first to discuss major changes.

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/my-change`
3. Commit: `git commit -m "feat: add amazing thing"`
4. Push: `git push origin feat/my-change`
5. Open a Pull Request

---

## 📄 License

MIT License — see `LICENSE` for details.

---

## 📷 Screenshots (optional)

Add images/GIFs showing: credit claim, selecting players, and toasts.

---

## 🙌 Acknowledgements

* [React Toastify](https://fkhadra.github.io/react-toastify/) for simple, accessible toasts
