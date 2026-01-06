import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { quoteCategories, mockUser } from "@/lib/data";
import { categoryIcons } from "@/lib/icons";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function PreferencesPage() {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-headline text-primary">Your Preferences</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Tailor your daily quotes to match your mood and goals.
        </p>
      </header>
      
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Quote Categories</CardTitle>
            <CardDescription>Select the themes you're most interested in.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {quoteCategories.map((category) => {
              const Icon = categoryIcons[category];
              return (
                <div key={category} className="flex items-center space-x-3 rounded-md border p-3 hover:bg-accent/20">
                  <Checkbox 
                    id={category} 
                    defaultChecked={mockUser.preferences.categories.includes(category)}
                  />
                  <Label htmlFor={category} className="flex items-center gap-2 text-md capitalize cursor-pointer">
                    <Icon className="h-5 w-5 text-accent" />
                    {category}
                  </Label>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Weekly Schedule (Optional)</CardTitle>
            <CardDescription>Assign specific categories to days of the week for a structured routine.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {daysOfWeek.map((day) => (
              <div key={day} className="flex items-center justify-between">
                <Label htmlFor={`select-${day}`} className="text-md">{day}</Label>
                <Select defaultValue={mockUser.preferences.schedule[day.toLowerCase()] || 'any'}>
                  <SelectTrigger id={`select-${day}`} className="w-[180px]">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Category</SelectItem>
                    <Separator />
                    {quoteCategories.map((cat) => (
                      <SelectItem key={cat} value={cat} className="capitalize">{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <div className="flex justify-end">
            <Button size="lg">Save Preferences</Button>
        </div>
      </div>
    </div>
  );
}