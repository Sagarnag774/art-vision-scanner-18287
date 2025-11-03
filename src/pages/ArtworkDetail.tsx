import { useState } from "react";
import { ArrowLeft, Play, Pause, Volume2, Image as ImageIcon, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate, useParams } from "react-router-dom";

const ArtworkDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Mock artwork data
  const artwork = {
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    medium: "Oil on canvas",
    dimensions: "73.7 cm × 92.1 cm",
    location: "Museum of Modern Art, New York",
    image: "https://images.unsplash.com/photo-1578926314433-e2789279f4aa?w=800",
    description: "The Starry Night is an oil-on-canvas painting by Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village.",
    history: "Van Gogh painted The Starry Night during his 12-month stay at the Saint-Paul-de-Mausole asylum near Saint-Rémy-de-Provence, France, several months after suffering a breakdown in which he severed part of his own ear with a razor.",
    audioGuide: "Audio guide available",
    videoUrl: "https://example.com/video",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-museum-blue-light">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/scan")}
          className="mb-6 hover:bg-accent/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Scan
        </Button>

        {/* Hero Image */}
        <Card className="overflow-hidden border-0 shadow-elevated mb-8">
          <div className="aspect-video bg-black relative">
            <img 
              src={artwork.image} 
              alt={artwork.title}
              className="w-full h-full object-contain"
            />
          </div>
        </Card>

        {/* Artwork Info */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{artwork.title}</h1>
              <p className="text-2xl text-muted-foreground mb-4">{artwork.artist}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="px-4 py-2 bg-accent/10 rounded-full text-accent font-medium">
                  {artwork.year}
                </span>
                <span className="px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
                  {artwork.medium}
                </span>
              </div>
            </div>

            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="space-y-4">
                <Card className="p-6 bg-gradient-card border-0 shadow-soft">
                  <p className="text-lg leading-relaxed">{artwork.description}</p>
                </Card>
              </TabsContent>
              
              <TabsContent value="history" className="space-y-4">
                <Card className="p-6 bg-gradient-card border-0 shadow-soft">
                  <p className="text-lg leading-relaxed">{artwork.history}</p>
                </Card>
              </TabsContent>
              
              <TabsContent value="details" className="space-y-4">
                <Card className="p-6 bg-gradient-card border-0 shadow-soft">
                  <dl className="space-y-4 text-lg">
                    <div>
                      <dt className="font-semibold text-muted-foreground">Dimensions</dt>
                      <dd>{artwork.dimensions}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-muted-foreground">Location</dt>
                      <dd>{artwork.location}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-muted-foreground">Medium</dt>
                      <dd>{artwork.medium}</dd>
                    </div>
                  </dl>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Media Panel */}
          <div className="space-y-4">
            <Card className="p-6 bg-gradient-card border-0 shadow-soft">
              <h3 className="text-xl font-bold mb-4">Media Guide</h3>
              
              <div className="space-y-3">
                <Button 
                  className="w-full justify-start py-6 bg-primary hover:bg-primary/90"
                  onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                >
                  {isAudioPlaying ? (
                    <Pause className="mr-2 h-5 w-5" />
                  ) : (
                    <Volume2 className="mr-2 h-5 w-5" />
                  )}
                  {isAudioPlaying ? "Pause" : "Play"} Audio Guide
                </Button>

                <Button 
                  variant="outline"
                  className="w-full justify-start py-6 border-2"
                >
                  <ImageIcon className="mr-2 h-5 w-5" />
                  View Gallery
                </Button>

                <Button 
                  variant="outline"
                  className="w-full justify-start py-6 border-2"
                >
                  <Video className="mr-2 h-5 w-5" />
                  Watch Documentary
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-0 shadow-soft">
              <h3 className="text-xl font-bold mb-4">Next Stop</h3>
              <p className="text-muted-foreground mb-4">
                Based on your interest in Post-Impressionism
              </p>
              <Button className="w-full bg-accent hover:bg-accent/90">
                View Recommendation
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;
