## Installation

First, clone this repository:

<!-- start:code block -->
# Clone this repository
git clone https://github.com/mfts/papermark.git
cd papermark

# Install dependencies
npm install

# Copy the example .env file
cp .env.example .env

# Initialize the database
npx prisma generate
npx prisma db push

# Run the app
npm run dev

# Open http://localhost:4200 in your browser
open http://localhost:4200
<!-- end:code block -->