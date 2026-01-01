🎬 Movies Magic

Movies Magic is a simple Angular movie cards application that allows users to view, filter, and add movies dynamically using a clean card-based UI.

🚀 Features

📌 Display movies in card layout

🖼️ Show movie poster image

🏷️ Display category, title, rating, and description

🔍 Filter movies by category (Comedy, Drama, Action, etc.)

➕ Add new movies dynamically

🧠 Uses Angular Material dropdown

🖼️ Uses placeholder image if no image URL is provided

⚡ Efficient rendering using trackBy

🧩 Functionality Details
1️⃣ Movie Listing

Movies are displayed as cards

Each card contains:

Poster image

Category

Movie title

Rating

Description

2️⃣ Category Filter

Dropdown at the top

Options:

All

Comedy

Drama

Action (and more)

Selecting a category filters the displayed movies instantly

3️⃣ Add Movie Feature

User can add a new movie using:

Movie Title

Image URL

Description

Category dropdown

➡️ Clicking Add immediately shows the new movie card.

4️⃣ Image Handling

If Image URL is empty or invalid

A default placeholder image is used:

assets/images/placeholder.jpg

5️⃣ Card Selection

Clicking a card highlights it

Active card styling handled using:

[class.active]="selectedIndex === i"

🛠️ Tech Stack

Angular (v15+)

Angular Material

HTML

CSS

TypeScript

📂 Project Structure (Simplified)
src/
 ├── app/
 │   ├── app.component.ts
 │   ├── app.component.html
 │   ├── app.component.css
 │
 ├── assets/
 │   └── images/
 │       └── placeholder.jpg

▶️ How to Run the Project

Install dependencies

npm install


Run development server

ng serve


Open in browser

http://localhost:4200