import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Instagram, TrendingUp, Video, Award, Users, Target, CreditCard, Music, Mail, Phone, MapPin, Check, Zap } from 'lucide-react';

export default function Index() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [showInfoRequest, setShowInfoRequest] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    sport_type: '',
    instagram_handle: '',
    tiktok_handle: '',
  });

  const [infoRequestData, setInfoRequestData] = useState({
    message: '',
  });

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistering(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast.success('Registration Successful!', {
      description: 'Your athlete profile has been created. Now request pricing information.',
    });

    setShowInfoRequest(true);
    setFormData({
      full_name: '',
      email: '',
      phone: '',
      sport_type: '',
      instagram_handle: '',
      tiktok_handle: '',
    });
    setIsRegistering(false);
  };

  const handleInfoRequest = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    toast.success('Request Submitted!', {
      description: "We'll send you detailed pricing information. Ready to subscribe?",
    });

    setInfoRequestData({ message: '' });
    setShowInfoRequest(false);
    setShowPayment(true);
  };

  const handlePayment = async () => {
    setIsProcessingPayment(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Payment Feature', {
      description: 'Payment integration requires backend setup. Contact us for more info.',
    });

    setIsProcessingPayment(false);
  };

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/landing page.png')" }}
        />
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 z-0 bg-black/60" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            ELEVATE YOUR <span className="text-red-600">ATHLETIC CAREER</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light max-w-3xl mx-auto">
            Professional social media management and video editing that transforms talented athletes into recognized sports stars
          </p>
          <Button 
            onClick={scrollToRegistration}
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-12 py-6 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            START YOUR JOURNEY
          </Button>
          
          {/* Social Media Follow Section */}
          <div className="mt-8 flex items-center justify-center gap-4 text-gray-300">
            <span className="text-sm font-medium">Follow Us:</span>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-red-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">Instagram</span>
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-red-600 transition-colors"
            >
              <Music className="w-5 h-5" />
              <span className="text-sm">TikTok</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">WHO WE ARE</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Established in 2025, we're a cutting-edge sports marketing agency with an impeccable team of professionals dedicated to one mission: <span className="text-red-600 font-bold">making talented athletes visible to the world</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl h-80 overflow-hidden">
              <img 
                src="/Who we are.png" 
                alt="Professional team working on sports content" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                  <p className="text-gray-400">
                    We connect talented athletes with professional teams and sports brands by creating compelling social media presence that showcases their true potential.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Expert Team</h3>
                  <p className="text-gray-400">
                    Our professional video editors and social media managers have years of experience in sports marketing and athlete branding.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">All Sports Welcome</h3>
                  <p className="text-gray-400">
                    From soccer to swimming, basketball to boxing - we specialize in promoting athletes across every sport, with a special focus on soccer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">OUR SERVICES</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete social media management package designed to maximize your athletic visibility
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-zinc-900 border-zinc-800 hover:border-red-600 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Instagram className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Social Media Management</CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  Professional management of your Instagram and TikTok accounts with strategic content planning and posting schedules
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 hover:border-red-600 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Video className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Professional Video Editing</CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  Expert editing team transforms your raw footage into compelling highlight reels that capture your athletic excellence
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 hover:border-red-600 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Brand Exposure</CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  Strategic connections with professional teams and sports brands looking for talented athletes like you
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-16 bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <img 
              src="/how it works.png" 
              alt="Social media growth visualization" 
              className="w-full rounded-lg mb-6"
            />
            <h3 className="text-3xl font-bold mb-4 text-center">How It Works</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-black text-red-600 mb-2">01</div>
                <p className="text-lg">Create your TikTok and Instagram accounts with your athletic content</p>
              </div>
              <div>
                <div className="text-4xl font-black text-red-600 mb-2">02</div>
                <p className="text-lg">Our team manages, edits, and optimizes your content professionally</p>
              </div>
              <div>
                <div className="text-4xl font-black text-red-600 mb-2">03</div>
                <p className="text-lg">Watch your visibility grow as teams and brands discover your talent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">ATHLETES IN ACTION</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300">
              We work with talented athletes across all sports disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="/1.png" 
                alt="Soccer athlete" 
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold">Soccer Excellence</h3>
                  <p className="text-gray-300">Professional football talent</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="/2.png" 
                alt="Basketball athlete" 
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold">Basketball Power</h3>
                  <p className="text-gray-300">Elite court performance</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="/3.png" 
                alt="Multi-sport athletes" 
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold">All Sports</h3>
                  <p className="text-gray-300">Every discipline welcome</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-4">
              Choose Your <span className="text-red-600">Success Plan</span>
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto mt-6">
              Flexible monthly plans designed to fit every athlete's needs and budget. Cancel anytime, no long-term commitments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <p className="text-sm text-gray-400 mb-6">Perfect for emerging athletes</p>
                <div className="mb-8">
                  <span className="text-4xl font-black">$99</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 min-h-[280px]">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">TikTok & Instagram account setup</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">2 professional edited videos/month</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Basic content strategy</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Monthly performance report</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Email support</span>
                </li>
              </ul>

              <Button 
                onClick={scrollToRegistration}
                variant="outline"
                className="w-full border-zinc-700 text-white hover:bg-zinc-800 py-5 text-sm font-semibold"
              >
                Get Started
              </Button>
            </div>

            {/* Pro Plan - Featured */}
            <div className="bg-zinc-900/70 backdrop-blur-sm rounded-2xl p-8 border-2 border-red-600 relative hover:border-red-500 transition-all duration-300 scale-105">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              
              <div className="text-center mb-8 pt-2">
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <p className="text-sm text-gray-400 mb-6">For athletes ready to go pro</p>
                <div className="mb-8">
                  <span className="text-4xl font-black">$249</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 min-h-[280px]">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Everything in Starter</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">5 professional edited videos/month</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Advanced content strategy</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Brand partnership outreach</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Weekly performance reports</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Priority support</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Custom thumbnails & graphics</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Trend analysis & recommendations</span>
                </li>
              </ul>

              <Button 
                onClick={scrollToRegistration}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-5 text-sm font-bold"
              >
                Get Started
              </Button>
            </div>

            {/* Elite Plan */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">Elite</h3>
                <p className="text-sm text-gray-400 mb-6">Maximum reach and visibility</p>
                <div className="mb-8">
                  <span className="text-4xl font-black">$499</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 min-h-[280px]">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Everything in Pro</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Unlimited video edits</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Direct team/brand connections</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Daily content posting</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">24/7 priority support</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Sponsorship negotiation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Media training sessions</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Press release distribution</span>
                </li>
              </ul>

              <Button 
                onClick={scrollToRegistration}
                variant="outline"
                className="w-full border-zinc-700 text-white hover:bg-zinc-800 py-5 text-sm font-semibold"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Payment Methods & Trust */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-xs mb-6">Trusted payment processing</p>
            <div className="flex items-center justify-center gap-6 text-gray-600 text-xs font-medium">
              <span>Stripe</span>
              <span>•</span>
              <span>Visa</span>
              <span>•</span>
              <span>Mastercard</span>
              <span>•</span>
              <span>PayPal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">JOIN OUR ROSTER</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300">
              Register now to start your journey to athletic recognition
            </p>
          </div>

          {!showInfoRequest && !showPayment ? (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Registration Form */}
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-2xl">Athlete Registration</CardTitle>
                  <CardDescription className="text-sm text-gray-400">
                    Fill out your information to get started with our professional services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegistration} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="full_name" className="text-sm">Full Name *</Label>
                        <Input
                          id="full_name"
                          value={formData.full_name}
                          onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                          required
                          className="bg-zinc-800 border-zinc-700 text-white h-10"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-zinc-800 border-zinc-700 text-white h-10"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-zinc-800 border-zinc-700 text-white h-10"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="sport_type" className="text-sm">Primary Sport *</Label>
                        <Select
                          value={formData.sport_type}
                          onValueChange={(value) => setFormData({ ...formData, sport_type: value })}
                        >
                          <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white h-10">
                            <SelectValue placeholder="Select your sport" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="soccer">Soccer</SelectItem>
                            <SelectItem value="basketball">Basketball</SelectItem>
                            <SelectItem value="tennis">Tennis</SelectItem>
                            <SelectItem value="swimming">Swimming</SelectItem>
                            <SelectItem value="track">Track & Field</SelectItem>
                            <SelectItem value="boxing">Boxing</SelectItem>
                            <SelectItem value="volleyball">Volleyball</SelectItem>
                            <SelectItem value="baseball">Baseball</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="instagram_handle" className="text-sm">Instagram Handle</Label>
                        <Input
                          id="instagram_handle"
                          value={formData.instagram_handle}
                          onChange={(e) => setFormData({ ...formData, instagram_handle: e.target.value })}
                          className="bg-zinc-800 border-zinc-700 text-white h-10"
                          placeholder="@yourhandle"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tiktok_handle" className="text-sm">TikTok Handle</Label>
                        <Input
                          id="tiktok_handle"
                          value={formData.tiktok_handle}
                          onChange={(e) => setFormData({ ...formData, tiktok_handle: e.target.value })}
                          className="bg-zinc-800 border-zinc-700 text-white h-10"
                          placeholder="@yourhandle"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isRegistering}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-base py-5 mt-2"
                    >
                      {isRegistering ? 'Registering...' : 'REGISTER NOW'}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Contact Information</h3>
                  <p className="text-sm text-gray-400">
                    Reach out to us through any of these channels. We're here to help you take your athletic career to the next level.
                  </p>
                </div>

                <div className="space-y-6 pt-4">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email Us</h4>
                      <a href="mailto:info@elitesports.agency" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                        info@elitesports.agency
                      </a>
                      <p className="text-xs text-gray-500 mt-1">We reply within 24 hours</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Call Us</h4>
                      <a href="tel:+18005554567" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                        +1 (800) 555-4567
                      </a>
                      <p className="text-xs text-gray-500 mt-1">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Location</h4>
                      <p className="text-gray-400 text-sm">Los Angeles, California</p>
                      <p className="text-xs text-gray-500 mt-1">United States</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-zinc-800 pt-6">
                    <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                    <div className="flex items-center gap-3">
                      <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors group"
                      >
                        <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                      </a>
                      <a 
                        href="https://tiktok.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors group"
                      >
                        <Music className="w-5 h-5 text-gray-400 group-hover:text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : showInfoRequest ? (
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-3xl">Request Pricing Information</CardTitle>
                <CardDescription className="text-base text-gray-400">
                  Tell us about your needs and we'll send you detailed pricing and service information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleInfoRequest} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base">Your Message *</Label>
                    <Textarea
                      id="message"
                      value={infoRequestData.message}
                      onChange={(e) => setInfoRequestData({ message: e.target.value })}
                      required
                      className="bg-zinc-800 border-zinc-700 text-white min-h-32"
                      placeholder="Tell us about your goals, current social media presence, and what you're looking for..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-6"
                  >
                    REQUEST INFORMATION
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowInfoRequest(false)}
                    className="w-full border-zinc-700 text-white hover:bg-zinc-800"
                  >
                    Back to Registration
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-3xl">Subscribe Now</CardTitle>
                <CardDescription className="text-base text-gray-400">
                  Start your professional athlete journey with our monthly subscription
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-zinc-800 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Monthly Subscription</h3>
                    <div className="text-right">
                      <div className="text-3xl font-black text-red-600">$299</div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✓</span>
                      <span>Professional Instagram & TikTok management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✓</span>
                      <span>Expert video editing and content creation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✓</span>
                      <span>Strategic brand and team connections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✓</span>
                      <span>Monthly performance reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✓</span>
                      <span>Dedicated account manager</span>
                    </li>
                  </ul>
                </div>

                <Button
                  onClick={handlePayment}
                  disabled={isProcessingPayment}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-6"
                >
                  {isProcessingPayment ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5 mr-2" />
                      PROCEED TO PAYMENT
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowPayment(false)}
                  className="w-full border-zinc-700 text-white hover:bg-zinc-800"
                >
                  Back
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-6">READY TO GO PRO?</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the elite athletes who trust us to manage their social media presence and connect them with professional opportunities
          </p>
          <Button 
            onClick={scrollToRegistration}
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-12 py-6 rounded-lg transform hover:scale-105 transition-all duration-300"
          >
            GET STARTED TODAY
          </Button>
          <p className="mt-8 text-gray-400">
            Questions? Contact us at <a href="mailto:info@elitesportsagency.com" className="text-red-600 hover:underline">info@elitesportsagency.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">ESPORTS</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Elevating athletic careers through professional social media management. We help talented athletes get discovered by teams and brands worldwide.
              </p>
              <div className="flex items-center gap-3">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </a>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group"
                >
                  <Music className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group"
                >
                  <TrendingUp className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 text-sm hover:text-red-600 transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 text-sm hover:text-red-600 transition-colors">Our Services</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 text-sm hover:text-red-600 transition-colors">Pricing Plans</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 text-sm hover:text-red-600 transition-colors">Success Stories</a>
                </li>
                <li>
                  <a href="#registration" className="text-gray-400 text-sm hover:text-red-600 transition-colors">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Sports We Cover */}
            <div>
              <h4 className="text-white font-semibold mb-6">Sports We Cover</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 text-sm hover:text-red-600 transition-colors">Soccer (Primary Focus)</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 text-sm hover:text-red-600 transition-colors">Basketball</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 text-sm hover:text-red-600 transition-colors">Tennis</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 text-sm hover:text-red-600 transition-colors">Swimming</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 text-sm hover:text-red-600 transition-colors">Track & Field</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 text-sm hover:text-red-600 transition-colors">All Other Sports</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <a href="mailto:contact@esports.agency" className="text-gray-400 text-sm hover:text-red-600 transition-colors">
                      contact@esports.agency
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <a href="tel:+18005554567" className="text-gray-400 text-sm hover:text-red-600 transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm">Los Angeles, CA</p>
                    <p className="text-gray-500 text-xs">United States</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2025 ESPORTS Agency. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-500 text-sm hover:text-red-600 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 text-sm hover:text-red-600 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
