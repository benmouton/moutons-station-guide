import { useState, useMemo, useEffect } from "react";
import { Link } from "wouter";
import { Search, ChefHat, Clock, Thermometer, Scale, UtensilsCrossed, BookOpen, Soup, Cookie, Sandwich, ListChecks, Lightbulb, Flame, Utensils, Layers, Cake, Beaker, Salad, Coffee, Printer, ClipboardList, FileText, ClipboardCheck, Drumstick, Share2 } from "lucide-react";
import mbbLogo from "@assets/MBB_Logo_transparentBackground_1769633024742.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { recipes, searchRecipes, getRecipeById } from "@/data/recipes";
import { Recipe, RecipeCategory, categoryLabels, recipeCategories, Station, stationLabels, stations, ContentType, contentTypes, contentTypeLabels } from "@shared/schema";

const categoryIcons: Record<RecipeCategory, typeof ChefHat> = {
  prep: UtensilsCrossed,
  tips: Lightbulb,
  appetizers: Soup,
  entrees: ChefHat,
  sides: Cookie,
  kids: Sandwich,
  portions: ListChecks,
  sauces: Layers,
  desserts: Cake,
  seasonings: Beaker,
  wings: Drumstick
};

const categoryColors: Record<RecipeCategory, string> = {
  prep: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
  tips: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
  appetizers: "bg-orange-500/10 text-orange-700 dark:text-orange-400",
  entrees: "bg-red-500/10 text-red-700 dark:text-red-400",
  sides: "bg-green-500/10 text-green-700 dark:text-green-400",
  kids: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
  portions: "bg-slate-500/10 text-slate-700 dark:text-slate-400",
  sauces: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  desserts: "bg-pink-500/10 text-pink-700 dark:text-pink-400",
  seasonings: "bg-teal-500/10 text-teal-700 dark:text-teal-400",
  wings: "bg-orange-600/10 text-orange-800 dark:text-orange-300"
};

const stationIcons: Record<Station, typeof Flame> = {
  sautee: Utensils,
  salad: Salad,
  fry: Flame,
  batch: Layers,
  breakfast: Coffee,
  desserts: Cake,
  expo: ClipboardCheck
};

const contentTypeIcons: Record<ContentType, typeof ChefHat> = {
  recipe: ChefHat,
  prep: FileText,
  checklist: ClipboardList
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContentType, setSelectedContentType] = useState<string>("all");
  const [selectedStation, setSelectedStation] = useState<string>("all");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  // Check URL for recipe ID on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const recipeId = params.get('recipe');
    if (recipeId) {
      const recipe = getRecipeById(recipeId);
      if (recipe) {
        setSelectedRecipe(recipe);
        setSheetOpen(true);
      }
    }
  }, []);

  // Update URL when sheet opens/closes
  const handleSheetChange = (open: boolean) => {
    setSheetOpen(open);
    if (!open) {
      // Clear recipe from URL when closing
      const url = new URL(window.location.href);
      url.searchParams.delete('recipe');
      window.history.replaceState({}, '', url.pathname);
    }
  };

  // Filter recipes by content type, station, and search
  const filteredRecipes = useMemo(() => {
    let result = recipes;
    
    // Filter by content type
    if (selectedContentType !== "all") {
      result = result.filter(r => r.contentType === selectedContentType);
    }
    
    // Filter by station
    if (selectedStation !== "all") {
      result = result.filter(r => r.station === selectedStation);
    }
    
    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(recipe =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        (recipe.ingredients?.some(i => i.toLowerCase().includes(query))) ||
        (recipe.instructions?.some(i => i.toLowerCase().includes(query)))
      );
    }
    
    return result;
  }, [searchQuery, selectedContentType, selectedStation]);

  // Group recipes by station for display
  const groupedRecipes = useMemo(() => {
    if (searchQuery) {
      // When searching, show flat list
      return null;
    }
    
    // Determine which stations to include
    const stationsToShow = selectedStation === "all" 
      ? stations 
      : [selectedStation as Station];
    
    // Group by station
    const groups: Record<Station, Recipe[]> = {} as Record<Station, Recipe[]>;
    stationsToShow.forEach(station => {
      groups[station] = [];
    });
    
    filteredRecipes.forEach(recipe => {
      if (groups[recipe.station]) {
        groups[recipe.station].push(recipe);
      }
    });
    
    // Sort each group alphabetically by name
    stationsToShow.forEach(station => {
      groups[station].sort((a, b) => a.name.localeCompare(b.name));
    });
    
    // Build structured result
    return stationsToShow
      .filter(station => groups[station].length > 0)
      .map(station => ({
        station,
        recipes: groups[station]
      }));
  }, [filteredRecipes, selectedStation, searchQuery]);

  const sortedFilteredRecipes = useMemo(() => {
    // When not grouping, sort alphabetically
    return [...filteredRecipes].sort((a, b) => a.name.localeCompare(b.name));
  }, [filteredRecipes]);

  // Count by content type (primary filter)
  const contentTypeCounts = useMemo(() => {
    const counts: Record<string, number> = { all: recipes.length };
    contentTypes.forEach(type => {
      counts[type] = recipes.filter(r => r.contentType === type).length;
    });
    return counts;
  }, []);

  // Count by station (secondary filter) - respects content type filter
  const stationCounts = useMemo(() => {
    const baseRecipes = selectedContentType === "all" 
      ? recipes 
      : recipes.filter(r => r.contentType === selectedContentType);
    
    const counts: Record<string, number> = { all: baseRecipes.length };
    stations.forEach(station => {
      counts[station] = baseRecipes.filter(r => r.station === station).length;
    });
    return counts;
  }, [selectedContentType]);

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setSheetOpen(true);
    // Update URL with recipe ID
    const url = new URL(window.location.href);
    url.searchParams.set('recipe', recipe.id);
    window.history.replaceState({}, '', url.toString());
  };

  const handlePrintChecklist = (recipe: Recipe, e: React.MouseEvent) => {
    e.stopPropagation();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    
    const instructions = recipe.instructions || [];
    const formattedInstructions = instructions
      .filter(line => line.trim() !== '')
      .map(line => {
        if (line.endsWith(':') && line === line.toUpperCase()) {
          return `<h3 style="margin-top: 16px; margin-bottom: 8px; font-weight: bold; font-size: 14px;">${line}</h3>`;
        }
        return `<div style="margin-left: 8px; margin-bottom: 4px;">${line}</div>`;
      })
      .join('');
    
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${recipe.name}</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              padding: 20px; 
              max-width: 800px; 
              margin: 0 auto;
            }
            h1 { 
              font-size: 24px; 
              margin-bottom: 8px;
              border-bottom: 2px solid #333;
              padding-bottom: 8px;
            }
            h3 { 
              font-size: 14px; 
              margin-top: 16px; 
              margin-bottom: 8px;
              background: #f0f0f0;
              padding: 4px 8px;
            }
            .description { 
              color: #666; 
              margin-bottom: 16px; 
              font-style: italic;
            }
            .tip {
              margin-top: 20px;
              padding: 12px;
              background: #fff3cd;
              border-left: 4px solid #ffc107;
              font-size: 12px;
            }
            .back-button {
              display: inline-block;
              margin-bottom: 16px;
              padding: 8px 16px;
              background: #6b7280;
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              font-size: 14px;
            }
            .back-button:hover {
              background: #4b5563;
            }
            @media print {
              body { padding: 0; }
              .back-button { display: none; }
            }
          </style>
        </head>
        <body>
          <button class="back-button" onclick="window.close()">← Back to Guide</button>
          <h1>${recipe.name}</h1>
          <div class="description">${recipe.description || ''}</div>
          ${formattedInstructions}
          ${recipe.tips ? `<div class="tip"><strong>Tip:</strong> ${recipe.tips}</div>` : ''}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const handleContentTypeChange = (type: string) => {
    setSelectedContentType(type);
    // Reset station when changing content type
    setSelectedStation("all");
  };

  const handleStationChange = (station: string) => {
    setSelectedStation(station);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src={mbbLogo} 
                  alt="Mouton's Bistro & Bar" 
                  className="h-14 w-auto object-contain"
                  data-testid="img-logo-header"
                />
                <div>
                  <h1 className="font-serif text-2xl font-bold tracking-tight">Station Guide</h1>
                  <p className="text-sm text-muted-foreground">Kitchen Cookbook</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="relative w-full sm:w-80">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    data-testid="input-search"
                    type="search"
                    placeholder="Search recipes, ingredients..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-10"
                  />
                  {searchQuery && (
                    <button
                      data-testid="button-clear-search"
                      type="button"
                      className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded text-muted-foreground hover:text-foreground"
                      onClick={handleClearSearch}
                    >
                      <span className="sr-only">Clear search</span>
                      <span aria-hidden className="text-lg">×</span>
                    </button>
                  )}
                </div>
                <Link href="/handbook">
                  <Button variant="outline" size="sm" className="gap-1 whitespace-nowrap" data-testid="button-handbook">
                    <BookOpen className="h-4 w-4" />
                    <span className="hidden sm:inline">Handbook</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Primary Content Type Tabs - What am I doing? */}
            <Tabs value={selectedContentType} onValueChange={handleContentTypeChange} className="w-full">
              <TabsList className="flex h-auto flex-wrap gap-1 bg-transparent p-0">
                <TabsTrigger value="all" data-testid="tab-type-all" className="gap-1 px-3 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>All</span>
                  <Badge variant="secondary" className="ml-1 bg-background/20 text-xs">{contentTypeCounts.all}</Badge>
                </TabsTrigger>
                {contentTypes.map((type) => {
                  const Icon = contentTypeIcons[type];
                  return (
                    <TabsTrigger key={type} value={type} data-testid={`tab-type-${type}`} className="gap-1 px-3 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      <Icon className="h-4 w-4" />
                      <span>{contentTypeLabels[type]}</span>
                      <Badge variant="secondary" className="ml-1 bg-background/20 text-xs">{contentTypeCounts[type]}</Badge>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Secondary Station Filters - What station? */}
        <div className="mb-6">
          <ScrollArea className="w-full whitespace-nowrap pb-2">
            <div className="flex gap-2">
              <Button
                data-testid="button-station-all"
                variant={selectedStation === "all" ? "default" : "secondary"}
                size="sm"
                onClick={() => handleStationChange("all")}
                className="shrink-0"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                All Stations
                <Badge variant="secondary" className="ml-2 bg-background/20">
                  {stationCounts.all}
                </Badge>
              </Button>
              
              {stations.filter(station => stationCounts[station] > 0).map((station) => {
                const Icon = stationIcons[station];
                return (
                  <Button
                    key={station}
                    data-testid={`button-station-${station}`}
                    variant={selectedStation === station ? "default" : "secondary"}
                    size="sm"
                    onClick={() => handleStationChange(station)}
                    className="shrink-0"
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {stationLabels[station]}
                    <Badge variant="secondary" className="ml-2 bg-background/20">
                      {stationCounts[station]}
                    </Badge>
                  </Button>
                );
              })}
            </div>
          </ScrollArea>
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
            <span data-testid="text-search-results">
              {filteredRecipes.length} result{filteredRecipes.length !== 1 ? "s" : ""} for "{searchQuery}"
            </span>
            {selectedContentType !== "all" && (
              <span>in {contentTypeLabels[selectedContentType as ContentType]}</span>
            )}
            {selectedStation !== "all" && (
              <span>/ {stationLabels[selectedStation as Station]}</span>
            )}
          </div>
        )}

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          groupedRecipes ? (
            // Grouped by station
            <div className="space-y-10">
              {groupedRecipes.map(({ station, recipes: stationRecipes }) => {
                const StationIcon = stationIcons[station];
                return (
                  <section key={station} data-testid={`section-station-${station}`}>
                    <div className="mb-6 flex items-center gap-2 border-b pb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <StationIcon className="h-5 w-5" />
                      </div>
                      <h2 className="text-xl font-bold">{stationLabels[station]}</h2>
                      <Badge variant="secondary">{stationRecipes.length}</Badge>
                    </div>
                    
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {stationRecipes.map((recipe) => (
                        <RecipeCard
                          key={recipe.id}
                          recipe={recipe}
                          onClick={() => handleRecipeClick(recipe)}
                          showStation={false}
                          showContentType={selectedContentType === "all"}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            // Flat list view (when searching)
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {sortedFilteredRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onClick={() => handleRecipeClick(recipe)}
                  showStation={selectedStation === "all"}
                  showContentType={selectedContentType === "all"}
                />
              ))}
            </div>
          )
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">No recipes found</h3>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <Button
              data-testid="button-clear-filters"
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedContentType("all");
                setSelectedStation("all");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </main>

      {/* Recipe Detail Sheet */}
      <Sheet open={sheetOpen} onOpenChange={handleSheetChange}>
        <SheetContent className="w-full overflow-y-auto sm:max-w-xl">
          {selectedRecipe && (
            <RecipeDetail recipe={selectedRecipe} />
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
  showStation?: boolean;
  showContentType?: boolean;
}

function RecipeCard({ recipe, onClick, showStation = true, showContentType = false }: RecipeCardProps) {
  const ContentTypeIcon = contentTypeIcons[recipe.contentType];
  const StationIcon = stationIcons[recipe.station];
  
  return (
    <Card 
      data-testid={`card-recipe-${recipe.id}`}
      className="cursor-pointer transition-shadow hover:shadow-md hover-elevate"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          {/* Content type badge - only show when viewing "All" content types */}
          {showContentType && (
            <Badge 
              variant="secondary" 
              className="shrink-0 bg-slate-500/10 text-slate-700 dark:text-slate-400"
            >
              <ContentTypeIcon className="mr-1 h-3 w-3" />
              {contentTypeLabels[recipe.contentType]}
            </Badge>
          )}
          {/* Station badge - only show when not already viewing a specific station */}
          {showStation && (
            <Badge variant="outline" className="shrink-0 text-xs">
              <StationIcon className="mr-1 h-3 w-3" />
              {stationLabels[recipe.station]}
            </Badge>
          )}
        </div>
        <CardTitle className="line-clamp-2 text-lg leading-tight">{recipe.name}</CardTitle>
        <CardDescription className="line-clamp-2">{recipe.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          {recipe.cookTime && (
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{recipe.cookTime}</span>
            </div>
          )}
          {recipe.internalTemp && (
            <div className="flex items-center gap-1">
              <Thermometer className="h-3 w-3" />
              <span>{recipe.internalTemp}</span>
            </div>
          )}
          {recipe.portionSize && (
            <div className="flex items-center gap-1">
              <Scale className="h-3 w-3" />
              <span>{recipe.portionSize}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function RecipeDetail({ recipe }: { recipe: Recipe }) {
  const Icon = categoryIcons[recipe.category];
  const StationIcon = stationIcons[recipe.station];
  
  const handlePrintRecipe = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    
    const ingredients = recipe.ingredients || [];
    const formattedIngredients = ingredients.length > 0 
      ? `<div class="section">
           <h2>Ingredients</h2>
           <ul>${ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
         </div>`
      : '';
    
    const instructions = recipe.instructions || [];
    const formattedInstructions = instructions.length > 0
      ? `<div class="section">
           <h2>${recipe.category === "portions" ? "Reference" : recipe.category === "tips" ? "Key Points" : "Instructions"}</h2>
           <ol>${instructions.filter(i => i.trim() !== '').map(inst => `<li>${inst}</li>`).join('')}</ol>
         </div>`
      : '';
    
    const quickInfo = [];
    if (recipe.cookTime) quickInfo.push(`<span><strong>Cook Time:</strong> ${recipe.cookTime}</span>`);
    if (recipe.internalTemp) quickInfo.push(`<span><strong>Internal Temp:</strong> ${recipe.internalTemp}</span>`);
    if (recipe.portionSize) quickInfo.push(`<span><strong>Portion:</strong> ${recipe.portionSize}</span>`);
    if (recipe.yield) quickInfo.push(`<span><strong>Yield:</strong> ${recipe.yield}</span>`);
    
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${recipe.name} - Mouton's Station Guide</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              padding: 20px; 
              max-width: 800px; 
              margin: 0 auto;
              line-height: 1.5;
            }
            h1 { 
              font-size: 24px; 
              margin-bottom: 4px;
              border-bottom: 2px solid #333;
              padding-bottom: 8px;
            }
            h2 {
              font-size: 16px;
              margin-top: 16px;
              margin-bottom: 8px;
              color: #333;
            }
            .station { 
              color: #666; 
              font-size: 12px;
              margin-bottom: 8px;
            }
            .description { 
              color: #666; 
              font-style: italic;
              margin-bottom: 12px;
            }
            .quick-info {
              display: flex;
              flex-wrap: wrap;
              gap: 16px;
              padding: 10px;
              background: #f5f5f5;
              border-radius: 4px;
              margin-bottom: 16px;
              font-size: 13px;
            }
            .section { margin-bottom: 16px; }
            ul, ol { margin: 0; padding-left: 24px; }
            li { margin-bottom: 6px; font-size: 14px; }
            .tip {
              margin-top: 16px;
              padding: 12px;
              background: #fff3cd;
              border-left: 4px solid #ffc107;
              font-size: 13px;
            }
            .back-button {
              display: inline-block;
              margin-bottom: 16px;
              padding: 8px 16px;
              background: #6b7280;
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              font-size: 14px;
            }
            .back-button:hover {
              background: #4b5563;
            }
            @media print {
              body { padding: 0; }
              .back-button { display: none; }
            }
          </style>
        </head>
        <body>
          <button class="back-button" onclick="window.close()">← Back to Guide</button>
          <div class="station">${stationLabels[recipe.station]} - ${categoryLabels[recipe.category]}</div>
          <h1>${recipe.name}</h1>
          <div class="description">${recipe.description || ''}</div>
          ${quickInfo.length > 0 ? `<div class="quick-info">${quickInfo.join(' | ')}</div>` : ''}
          ${formattedIngredients}
          ${formattedInstructions}
          ${recipe.tips ? `<div class="tip"><strong>Chef's Tip:</strong> ${recipe.tips}</div>` : ''}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const handleShareRecipe = async () => {
    // Build the recipe URL with the recipe ID
    const recipeUrl = new URL(window.location.origin);
    recipeUrl.searchParams.set('recipe', recipe.id);
    
    const shareData = {
      title: `${recipe.name} - Mouton's Station Guide`,
      text: `${recipe.name}: ${recipe.description || ''}`,
      url: recipeUrl.toString()
    };
    
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or share failed silently
      }
    } else {
      // Fallback for browsers without Web Share API
      const textToCopy = `${recipe.name}\n${recipe.description || ''}\n\n${recipeUrl.toString()}`;
      try {
        await navigator.clipboard.writeText(textToCopy);
        alert('Recipe link copied to clipboard!');
      } catch (err) {
        alert('Unable to share. Please copy the URL from your browser.');
      }
    }
  };
  
  return (
    <>
      <SheetHeader className="text-left pt-6">
        <div className="mb-3 flex items-center gap-2">
          <img 
            src={mbbLogo} 
            alt="Mouton's Bistro & Bar" 
            className="h-8 w-auto object-contain"
            data-testid="img-logo-recipe"
          />
          <span className="text-xs text-muted-foreground">{stationLabels[recipe.station]}</span>
        </div>
        <div className="mb-2 flex flex-wrap gap-2">
          <Badge 
            variant="secondary" 
            className={categoryColors[recipe.category]}
          >
            <Icon className="mr-1 h-3 w-3" />
            {categoryLabels[recipe.category]}
          </Badge>
          <Badge variant="outline">
            <StationIcon className="mr-1 h-3 w-3" />
            {stationLabels[recipe.station]}
          </Badge>
        </div>
        <SheetTitle className="font-serif text-2xl" data-testid="text-recipe-title">
          {recipe.name}
        </SheetTitle>
        <SheetDescription data-testid="text-recipe-description">
          {recipe.description}
        </SheetDescription>
        <div className="mt-4 flex gap-2">
          <Button
            size="sm"
            variant="outline"
            data-testid="button-print-recipe"
            onClick={handlePrintRecipe}
          >
            <Printer className="mr-1 h-4 w-4" />
            Print
          </Button>
          <Button
            size="sm"
            variant="outline"
            data-testid="button-share-recipe"
            onClick={handleShareRecipe}
          >
            <Share2 className="mr-1 h-4 w-4" />
            Share
          </Button>
        </div>
      </SheetHeader>

      <div className="mt-6 space-y-6">
        {/* Quick Info */}
        <div className="flex flex-wrap gap-3">
          {recipe.cookTime && (
            <div className="flex items-center gap-2 rounded-md bg-muted px-3 py-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Cook Time</p>
                <p className="text-sm font-medium" data-testid="text-cook-time">{recipe.cookTime}</p>
              </div>
            </div>
          )}
          {recipe.internalTemp && (
            <div className="flex items-center gap-2 rounded-md bg-muted px-3 py-2">
              <Thermometer className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Internal Temp</p>
                <p className="text-sm font-medium" data-testid="text-internal-temp">{recipe.internalTemp}</p>
              </div>
            </div>
          )}
          {recipe.portionSize && (
            <div className="flex items-center gap-2 rounded-md bg-muted px-3 py-2">
              <Scale className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Portion</p>
                <p className="text-sm font-medium" data-testid="text-portion-size">{recipe.portionSize}</p>
              </div>
            </div>
          )}
          {recipe.yield && (
            <div className="flex items-center gap-2 rounded-md bg-muted px-3 py-2">
              <UtensilsCrossed className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Yield</p>
                <p className="text-sm font-medium" data-testid="text-yield">{recipe.yield}</p>
              </div>
            </div>
          )}
        </div>

        {/* Ingredients */}
        {recipe.ingredients && recipe.ingredients.length > 0 && (
          <div>
            <h3 className="mb-3 flex items-center gap-2 font-semibold">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-primary/10">
                <span className="text-xs font-bold text-primary">1</span>
              </div>
              Ingredients
            </h3>
            <ul className="space-y-2" data-testid="list-ingredients">
              {recipe.ingredients.map((ingredient, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start gap-2 text-sm"
                  data-testid={`text-ingredient-${idx}`}
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {recipe.ingredients && recipe.instructions && <Separator />}

        {/* Instructions */}
        {recipe.instructions && recipe.instructions.length > 0 && (
          <div>
            <h3 className="mb-3 flex items-center gap-2 font-semibold">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-primary/10">
                <span className="text-xs font-bold text-primary">2</span>
              </div>
              {recipe.category === "portions" ? "Reference" : recipe.category === "tips" ? "Key Points" : "Instructions"}
            </h3>
            <ol className="space-y-3" data-testid="list-instructions">
              {recipe.instructions
                .filter(instruction => instruction.trim() !== "")
                .map((instruction, idx) => (
                <li 
                  key={idx} 
                  className="flex gap-3 text-sm"
                  data-testid={`text-instruction-${idx}`}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
                    {idx + 1}
                  </span>
                  <span className="pt-0.5">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Tips */}
        {recipe.tips && (
          <>
            <Separator />
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
              <h3 className="mb-2 flex items-center gap-2 font-semibold text-primary">
                <ChefHat className="h-4 w-4" />
                Chef's Tips
              </h3>
              <p className="text-sm leading-relaxed" data-testid="text-tips">{recipe.tips}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
