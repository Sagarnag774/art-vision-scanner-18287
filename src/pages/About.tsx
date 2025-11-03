import { ArrowLeft, Shield, Eye, Database, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-museum-blue-light">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-accent/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold">About Museum Vision</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience art through cutting-edge AI technology while maintaining your privacy
            </p>
          </div>

          <Card className="p-8 bg-gradient-card border-0 shadow-elevated">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Museum Vision uses advanced computer vision AI to instantly identify artworks 
                from your camera or uploaded photos. Our system compares your image against 
                a vast database of museum collections worldwide.
              </p>
              <p>
                Once identified, you gain access to curated content including detailed descriptions, 
                historical context, expert audio guides, and documentary videos — all without 
                creating an account or sharing personal information.
              </p>
            </div>
          </Card>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Privacy & Data</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-card border-0 shadow-soft">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">No Login Required</h3>
                <p className="text-muted-foreground">
                  Use all features instantly without creating an account or providing 
                  personal information. Your privacy is our priority.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-soft">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Anonymous Tracking</h3>
                <p className="text-muted-foreground">
                  We use anonymous session IDs to improve your experience. No personal 
                  identifiers, no tracking across devices or sessions.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-soft">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">What We Collect</h3>
                <p className="text-muted-foreground">
                  Session ID, artworks scanned, time spent on pages, and content interactions. 
                  This helps us recommend better routes and improve the app.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-soft">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">GDPR Compliant</h3>
                <p className="text-muted-foreground">
                  Fully compliant with GDPR and privacy regulations. Your data is never 
                  sold or shared with third parties.
                </p>
              </Card>
            </div>
          </div>

          <Card className="p-8 bg-primary text-primary-foreground border-0 shadow-elevated">
            <h2 className="text-3xl font-bold mb-4 text-center">Data Collection Notice</h2>
            <p className="text-lg text-center opacity-90 mb-6">
              By using Museum Vision, you consent to anonymous usage analytics to improve 
              your experience. We collect:
            </p>
            <ul className="space-y-2 text-lg max-w-2xl mx-auto">
              <li>• Anonymous session identifier (random UUID)</li>
              <li>• Artworks you scan and view</li>
              <li>• Time spent on content pages</li>
              <li>• Media interactions (audio, video, images)</li>
              <li>• Device type (mobile/desktop)</li>
            </ul>
            <p className="text-center mt-6 opacity-90">
              No personal information. No email. No names. No tracking cookies.
            </p>
          </Card>

          <div className="text-center py-8">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg shadow-elevated"
              onClick={() => navigate("/scan")}
            >
              Start Exploring
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
