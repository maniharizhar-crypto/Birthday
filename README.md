# 🌻 Musku's Interactive Birthday Website

A handcrafted, mobile-first interactive birthday website created especially for **Muskan ("Musku")** for her 20th birthday (08 October 2005).

---

## 🌸 Visual Experience & Chapters

1. **Seed Intro (`SeedIntro.jsx`)**:
   - Organic 6-phase growth animation from a seed pod to a blooming sunflower.
   - Poetic pacing with *“Some things take a little time to bloom...”* and *“This little one is for you, Musku 🌻”*.
   - Includes subtle skip button and remembers previous visits via `localStorage`.

2. **Moonlit Garden Welcome (`FlowerGarden.jsx`)**:
   - Gentle night sky with moon, fireflies, and botanical SVG flowers (sunflower, pink roses, lilies, lavender).
   - *“For Musku 🌻 — I made you a little corner of the internet.”*

3. **Memory Scrapbook (`PhotoCard.jsx`)**:
   - Progressive single-photo scrapbook cards with washi tape, authentic tilt, drop shadows, and handwritten captions.

4. **Eyes Section (`EyesSection.jsx`)**:
   - Tasteful cinematic focus highlighting the warm brown/golden glow of her eyes with delicate shimmer.

5. **Our Story (`StorySection.jsx`)**:
   - Scrapbook chronicle of meeting at the clinic and the friend's inquiry: *“Does he have a girlfriend? 👀”*.

6. **Personality Section (`PersonalitySection.jsx`)**:
   - The sunflower nature + playful warning about her intimidating temper when angry.

7. **4 Mini-Games (`MiniGame.jsx`)**:
   - *The Look* (Black vs. White vs. Smiling vs. Eye-contact Musku)
   - *Winter Escape* (Manali vs. Kashmir vs. Unknown)
   - *The Watch* (Metal strap vs. Leather strap)
   - *Soft Flirt* (What did I notice first?)

8. **The Birthday Letter (`Letter.jsx`)**:
   - 3D envelope with wax seal nestled in botanical flowers. Unfolds into the emotional handwritten centerpiece letter.

9. **Final Moonlit Garden (`MoonGarden.jsx`)**:
   - Glowing moon, night botanical blooms, 3 poetic reflections, grand birthday message, and replay button.

10. **Ambient Music (`MusicToggle.jsx`)**:
    - Starts muted by default.
    - Features a built-in lush Web Audio ambient synthesizer that plays soft soothing chords immediately, or seamlessly plays any `/audio/ambient.mp3` file.

---

## 📸 Adding Musku's Photos

Place her 5 photos in the `public/photos/` directory:
- `photo1.jpg` — Black look / Classic
- `photo2.jpg` — Black look / Chic
- `photo3.jpg` — White outfit / Moonlight
- `photo4.jpg` — Contagious smile
- `photo5.jpg` — Playful / Troublemaker

*All image captions, questions, and letter paragraphs can be customized anytime in `src/data/musku.js`.*

---

## 🚀 Running the Project

```bash
# Start local development server (with mobile network access)
npm run dev -- --host
```

- **Local browser URL**: [http://localhost:5173](http://localhost:5173)
- **Mobile phone URL**: Connect your phone to the same Wi-Fi network and open `http://<your-computer-ip>:5173` (e.g. `http://192.168.0.115:5173`).
