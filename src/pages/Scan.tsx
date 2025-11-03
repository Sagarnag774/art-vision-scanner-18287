import { useState, useRef } from "react";
import { Camera, Upload, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Scan = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (error) {
      toast.error("Camera access denied. Please use file upload instead.");
    }
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        const imageData = canvas.toDataURL('image/jpeg');
        setImage(imageData);
        stopCamera();
        analyzeImage(imageData);
      }
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      setIsCameraActive(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target?.result as string;
        setImage(imageData);
        analyzeImage(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async (imageData: string) => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      toast.success("Artwork identified!");
      // Navigate to artwork detail (mock for now)
      navigate("/artwork/1");
    }, 2000);
  };

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

        <Card className="p-8 bg-gradient-card border-0 shadow-elevated">
          <h1 className="text-4xl font-bold mb-2 text-center">Scan Artwork</h1>
          <p className="text-muted-foreground text-center mb-8">
            Point your camera at any artwork or upload a photo
          </p>

          {!image && !isCameraActive && (
            <div className="space-y-4">
              <Button
                onClick={startCamera}
                className="w-full py-8 text-lg bg-primary hover:bg-primary/90 shadow-soft"
                size="lg"
              >
                <Camera className="mr-2 h-6 w-6" />
                Open Camera
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or</span>
                </div>
              </div>

              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                className="w-full py-8 text-lg border-2 hover:bg-accent/10"
                size="lg"
              >
                <Upload className="mr-2 h-6 w-6" />
                Upload Photo
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
            </div>
          )}

          {isCameraActive && (
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden bg-black aspect-video">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4">
                <Button
                  onClick={capturePhoto}
                  className="flex-1 py-6 bg-accent hover:bg-accent/90"
                  size="lg"
                >
                  <Camera className="mr-2 h-5 w-5" />
                  Capture Photo
                </Button>
                <Button
                  onClick={stopCamera}
                  variant="outline"
                  className="flex-1 py-6 border-2"
                  size="lg"
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}

          {image && (
            <div className="space-y-6">
              <div className="relative rounded-lg overflow-hidden shadow-soft">
                <img src={image} alt="Scanned artwork" className="w-full" />
              </div>
              
              {isAnalyzing ? (
                <div className="text-center py-8">
                  <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium">Analyzing artwork...</p>
                  <p className="text-muted-foreground">Using AI vision to identify the piece</p>
                </div>
              ) : (
                <div className="flex gap-4">
                  <Button
                    onClick={() => setImage(null)}
                    variant="outline"
                    className="flex-1 py-6 border-2"
                    size="lg"
                  >
                    Scan Another
                  </Button>
                </div>
              )}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Scan;
