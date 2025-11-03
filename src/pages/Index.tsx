import { useState } from "react";
import { Camera, Info, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-gallery-white to-museum-blue-light">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl opacity-10 animate-pulse delay-1000" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
            <p className="text-accent font-medium">AI-Powered Art Discovery</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Museum Vision
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-2">
              Smart Scan Art Guide
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Instantly identify any artwork with your camera. Discover rich histories, hear audio guides, 
            and explore curated museum journeys — no login required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-elevated transition-all hover:scale-105"
              onClick={() => navigate("/scan")}
            >
              <Camera className="mr-2 h-5 w-5" />
              Start Scanning
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 hover:bg-accent/10 transition-all"
              onClick={() => navigate("/about")}
            >
              <Info className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Experience Art Like Never Before</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Powered by advanced AI vision technology
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-card border-0 shadow-soft hover:shadow-elevated transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Camera className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Instant Recognition</h3>
              <p className="text-muted-foreground leading-relaxed">
                Point your camera at any artwork and get instant identification with detailed information about the piece and artist.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-card border-0 shadow-soft hover:shadow-elevated transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Info className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Rich Media</h3>
              <p className="text-muted-foreground leading-relaxed">
                Access curated text, high-resolution images, expert audio guides, and documentary videos for each artwork.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-card border-0 shadow-soft hover:shadow-elevated transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Guided Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Follow AI-recommended routes through the museum based on your interests and discover hidden connections.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Privacy First</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No login required. No personal data collected. We use anonymous session tracking 
            to improve your experience while keeping your privacy intact. GDPR compliant.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Explore?</h2>
          <p className="text-xl opacity-90">
            Start your journey through art history with just a scan
          </p>
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6 shadow-elevated transition-all hover:scale-105"
            onClick={() => navigate("/scan")}
          >
            <Camera className="mr-2 h-5 w-5" />
            Begin Scanning Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
