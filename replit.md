# Station Guide - Mouton's Southern Bistro

A searchable kitchen station guide for Mouton's Southern Bistro, converted from the original Sautée, Salad, Fry, Batch, Breakfast, and Desserts Station cookbooks.

## Overview

This application provides kitchen staff with quick access to recipes, prep instructions, and portion guides from the Mouton's Bistro cookbooks. Features include real-time search, station filtering, category filtering, and detailed recipe views. App title displays as "Mouton's Station Guide" when sharing links.

## Features

- **Multi-Station Support**: 313 items across 7 stations (Sautée, Salad, Fry, Batch, Breakfast, Desserts, Expo)
- **Content Type First Filtering**: Primary tabs for Recipes, Prep & Mise en Place, Checklists (what am I doing?)
- **Station Filtering**: Secondary filter to narrow by station (what station?)
- **Contextual Badges**: Station badges hidden when viewing a specific station; content type badges shown only in "All" view
- **Searchable Database**: Full-text search across names, descriptions, ingredients, and instructions
- **Recipe Details**: Ingredients, step-by-step instructions, cook times, internal temperatures, portion sizes, and chef's tips
- **Employee Handbook**: Separate page with company policies, dress code, safety, customer service guidelines
- **Print Functionality**: Print button on recipe details, checklists, and handbook
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Warm Kitchen Theme**: Professional color scheme

## Project Structure

```
client/
  src/
    data/recipes.ts     # All recipe data (313 recipes) and search functions
    pages/Home.tsx      # Main page with search, station tabs, category filters, two-level grouping
    pages/Handbook.tsx  # Employee handbook with company policies and procedures
    App.tsx             # Router configuration
    assets/             # Logo and images
shared/
  schema.ts             # TypeScript types for recipes, stations, categories
server/
  routes.ts             # API endpoints
```

## Stations (in display order)

| Station | Recipe Count | Description |
|---------|--------------|-------------|
| Sautée | 50 | Sautéed and pan-cooked items: shrimp, crawfish, pasta, gumbo, étouffée |
| Salad/Grill | 51 | Po-Boys, sandwiches, burgers, salads, cold prep items |
| Fry | 32 | Deep-fried items: catfish, chicken fried steak, boudin balls, gator bites |
| Batch | 108 | Prep items, sauces, dressings, seasonings, portion guides |
| Breakfast | 38 | Waffles, omelets, eggs, biscuits, hash browns |
| Desserts | 26 | Cakes, pies, cookies, bread pudding, Bananas Foster |
| Expo | 4 | Morning/Night shift checklists and plating guides |

## Content Types (Primary Classification)

Each recipe has a `contentType` field that determines primary grouping:

| Content Type | Description |
|--------------|-------------|
| recipe | Menu items to cook: appetizers, entrees, sides, kids items, sauces, desserts |
| prep | Prep & mise en place: setup, marination, portions, seasonings, tips |
| checklist | Shift checklists: station setup and stocking guides |

## Recipe Categories (Secondary Classification)

| Category | Description |
|----------|-------------|
| prep | Setup, marination, preparation guides |
| tips | General techniques and station-specific guidance |
| appetizers | Boudin Balls, Gator Bites, Fried Pickles, Crawfish Dip |
| entrees | Catfish, Chicken Fried Steak, Shrimp Platter, Crawfish Étouffée |
| sides | French Fries, Fried Okra, Onion Rings, Sautéed Vegetables |
| kids | Chicken Nuggets, Mini Corndogs, Catfish Nuggets |
| portions | Seafood portions, general portions, prep lists |
| sauces | Hollandaise, Remoulade, Tartar Sauce, Vinaigrettes, Gravies |
| desserts | All dessert items |
| seasonings | Cajun Spice, SPG, Angry Seasoning, Fish Taco Seasoning |

## Recipe Data Format

Recipes in `client/src/data/recipes.ts` use consistent formatting:
- **Field names**: camelCase (cookTime, internalTemp, portionSize)
- **Instruction headers**: "ALL CAPS:" format (e.g., "COOKING:", "PLATING:")
- **Ingredient sections**: "--- SECTION NAME ---" format
- **Internal temps**: Specific temperatures like "165°F", "145°F" (not vague descriptions)

## Recipe ID Naming Convention

Recipe IDs are namespaced by station to avoid collisions:
- Sautée: `sautee-*` (e.g., `sautee-crawfish-etouffee`)
- Salad/Grill: `salad-*` (e.g., `salad-shrimp-poboy`)
- Fry: `fry-*` (e.g., `fry-catfish`)
- Batch: `batch-*` (e.g., `batch-hollandaise`)
- Breakfast: `breakfast-*` (e.g., `breakfast-belgian-waffle`)
- Desserts: `batch-*` (desserts use batch prefix for historical reasons)

## Key Recipes to Remember

- **Crab Oscar**: Uses NY strip steak (10-12 oz), NOT filet mignon
- **Club Sandwich**: Must include ham slices
- **Chicken Fried Steak**: Internal temp 145°F, cook time 2:30

## Technical Details

- **Frontend**: React with TypeScript, TanStack Query, Wouter routing
- **Styling**: Tailwind CSS with custom warm kitchen theme
- **UI Components**: Shadcn/ui component library
- **Data**: Client-side recipe database with search/filter functions
- **Port**: 5000

## Running the Application

```bash
npm run dev
```

## UI Design Principle

**"If the user has already declared intent via navigation, do not restate it on the card."**

This prevents redundant information on cards:
- Station badge is hidden when viewing a specific station
- Content type badge is hidden when viewing a specific content type

## Recent Changes

- Feb 2026: **Employee Handbook** - Added separate Handbook page with all company policies accessible from header
- Feb 2026: Added One-Pot Cajun Chicken Alfredo Orzo and Homemade Pistolette Sandwich Rolls recipes
- Feb 2026: Added Fondant Potatoes recipe to Sautée station
- Jan 2026: **Major UX Refactor** - Added contentType field (recipe/prep/checklist) as primary filter
- Jan 2026: Reorganized UI with content type tabs as primary, station buttons as secondary
- Jan 2026: Contextual badge display - badges only show when they add information
- Jan 2026: Added print functionality to recipe details and checklists
- Jan 2026: Fixed overlapping station tabs layout
- Jan 2026: Fixed Chicken Fried Steak internal temp from vague to "145°F"
- Jan 2026: Added Louisiana recipes: Crawfish Corn Chowder, Beef Birria, Texas Red Chili
