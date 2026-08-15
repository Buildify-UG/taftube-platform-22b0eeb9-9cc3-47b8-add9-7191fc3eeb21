import { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface Video {
  id: number;
  creator: string;
  avatar: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  thumbnail: string;
  isLiked: boolean;
}

const sampleVideos: Video[] = [
  {
    id: 1,
    creator: '@Luna.Creative',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    caption: '✨ Just dropped my latest dance challenge! Who can nail this move? #TafTubeChallenge #Dance',
    likes: 45230,
    comments: 892,
    shares: 3421,
    saves: 2156,
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=700&fit=crop',
    isLiked: false,
  },
  {
    id: 2,
    creator: '@TechMaster',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    caption: '🎬 AI just transformed my editing workflow! Check out this before & after #TechTips #AI',
    likes: 28945,
    comments: 456,
    shares: 2103,
    saves: 1834,
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=400&h=700&fit=crop',
    isLiked: false,
  },
  {
    id: 3,
    creator: '@ComedyKing',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    caption: '😂 POV: You tried to explain crypto to your grandma #Comedy #Relatable',
    likes: 156780,
    comments: 3245,
    shares: 8932,
    saves: 5421,
    thumbnail: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=700&fit=crop',
    isLiked: false,
  },
];

const creators = [
  { name: '@Luna.Creative', followers: '2.3M', earnings: '$12,450', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
  { name: '@TechMaster', followers: '1.8M', earnings: '$8,920', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
  { name: '@ComedyKing', followers: '3.1M', earnings: '$15,680', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
];

const gifts = [
  { name: 'Heart', icon: '❤️', value: 1 },
  { name: 'Star', icon: '⭐', value: 5 },
  { name: 'Fire', icon: '🔥', value: 10 },
  { name: 'Crown', icon: '👑', value: 50 },
  { name: 'Diamond', icon: '💎', value: 100 },
];

export default function Index() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videos, setVideos] = useState(sampleVideos);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedGift, setSelectedGift] = useState<string | null>(null);

  const currentVideo = videos[currentVideoIndex];

  const handleLike = () => {
    const newVideos = [...videos];
    newVideos[currentVideoIndex].isLiked = !newVideos[currentVideoIndex].isLiked;
    if (!newVideos[currentVideoIndex].isLiked) {
      newVideos[currentVideoIndex].likes -= 1;
    } else {
      newVideos[currentVideoIndex].likes += 1;
    }
    setVideos(newVideos);
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8 inline-block">
            <div className="text-6xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              TafTube
            </div>
            <p className="text-sm font-semibold text-primary mt-2 tracking-widest">CREATOR PLATFORM</p>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Create. Share. Earn.
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            The next-generation short-video platform where creators build communities, earn real income, and inspire millions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all">
              Get Started Free
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary/5 transition-all">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary">50M+</div>
              <p className="text-muted-foreground text-sm">Videos</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">12M+</div>
              <p className="text-muted-foreground text-sm">Creators</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">$2.3B</div>
              <p className="text-muted-foreground text-sm">Paid Out</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Feed Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Discover Trending Content</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Video Player */}
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video max-w-2xl mx-auto">
                <img 
                  src={currentVideo.thumbnail} 
                  alt="video thumbnail"
                  className="w-full h-full object-cover"
                />
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-between p-6">
                  {/* Top Controls */}
                  <div className="flex justify-between items-start">
                    <div className="flex gap-2">
                      <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition">
                        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                      </button>
                      <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition" onClick={() => setIsMuted(!isMuted)}>
                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                      </button>
                    </div>
                    <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Trending 🔥
                    </span>
                  </div>

                  {/* Bottom Creator Info */}
                  <div className="flex items-end justify-between">
                    <div className="flex gap-3 items-end flex-1">
                      <img src={currentVideo.avatar} alt={currentVideo.creator} className="w-12 h-12 rounded-full border-2 border-white" />
                      <div className="text-left mb-1">
                        <p className="text-white font-bold">{currentVideo.creator}</p>
                        <p className="text-white/80 text-sm">{currentVideo.caption.substring(0, 40)}...</p>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col gap-4 ml-4">
                      <button 
                        onClick={handleLike}
                        className={`flex flex-col items-center gap-1 transition transform hover:scale-110 ${currentVideo.isLiked ? 'text-red-500' : 'text-white'}`}
                      >
                        <Heart size={28} fill={currentVideo.isLiked ? 'currentColor' : 'none'} />
                        <span className="text-xs font-semibold">{(currentVideo.likes / 1000).toFixed(1)}K</span>
                      </button>
                      <button className="flex flex-col items-center gap-1 text-white transition transform hover:scale-110">
                        <MessageCircle size={28} />
                        <span className="text-xs font-semibold">{(currentVideo.comments / 1000).toFixed(1)}K</span>
                      </button>
                      <button className="flex flex-col items-center gap-1 text-white transition transform hover:scale-110">
                        <Share2 size={28} />
                        <span className="text-xs font-semibold">{(currentVideo.shares / 1000).toFixed(1)}K</span>
                      </button>
                      <button className="flex flex-col items-center gap-1 text-white transition transform hover:scale-110">
                        <Bookmark size={28} />
                        <span className="text-xs font-semibold">{(currentVideo.saves / 1000).toFixed(1)}K</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <button 
                  onClick={handlePrevVideo}
                  className="px-6 py-3 bg-secondary text-white font-bold rounded-full hover:shadow-lg transition"
                >
                  ← Previous
                </button>
                <button 
                  onClick={handleNextVideo}
                  className="px-6 py-3 bg-primary text-white font-bold rounded-full hover:shadow-lg transition"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Virtual Gifts Sidebar */}
            <div className="bg-gradient-to-b from-accent/10 to-primary/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send Gifts</h3>
              <p className="text-muted-foreground text-sm mb-6">Support your favorite creators with virtual gifts</p>
              
              <div className="space-y-3 mb-8">
                {gifts.map((gift) => (
                  <button
                    key={gift.name}
                    onClick={() => setSelectedGift(gift.name)}
                    className={`w-full p-4 rounded-xl font-semibold transition transform hover:scale-105 ${
                      selectedGift === gift.name
                        ? 'bg-primary text-white shadow-lg scale-105'
                        : 'bg-white text-foreground border-2 border-primary/20 hover:border-primary/50'
                    }`}
                  >
                    <span className="text-2xl mr-2">{gift.icon}</span>
                    {gift.name}
                    <span className="float-right text-sm opacity-75">{gift.value} coins</span>
                  </button>
                ))}
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:shadow-lg transition">
                Send Gift {selectedGift && `(${selectedGift})`}
              </button>

              <div className="mt-8 pt-8 border-t border-primary/20">
                <h4 className="font-bold text-foreground mb-4">Your Coins</h4>
                <div className="bg-white rounded-xl p-4 mb-4">
                  <p className="text-3xl font-bold text-primary">2,450</p>
                  <p className="text-muted-foreground text-sm">Available coins</p>
                </div>
                <button className="w-full py-2 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition">
                  Buy More Coins
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Creators */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Top Creators Earning Big</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {creators.map((creator, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition border border-primary/10">
                <div className="flex items-center gap-4 mb-6">
                  <img src={creator.avatar} alt={creator.name} className="w-16 h-16 rounded-full" />
                  <div>
                    <p className="font-bold text-lg text-foreground">{creator.name}</p>
                    <p className="text-muted-foreground text-sm">{creator.followers} followers</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 mb-6">
                  <p className="text-muted-foreground text-sm mb-2">Monthly Earnings</p>
                  <p className="text-3xl font-bold text-primary">{creator.earnings}</p>
                </div>

                <div className="space-y-3">
                  <button className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:shadow-lg transition">
                    Subscribe
                  </button>
                  <button className="w-full py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Dashboard Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Creator Studio Dashboard</h2>
          
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-12 border border-primary/10">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-muted-foreground text-sm mb-2">Total Views</p>
                <p className="text-4xl font-bold text-primary">2.3M</p>
                <p className="text-xs text-accent mt-2">↑ 12% this month</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-muted-foreground text-sm mb-2">Watch Time</p>
                <p className="text-4xl font-bold text-secondary">845K hrs</p>
                <p className="text-xs text-accent mt-2">↑ 8% this month</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-muted-foreground text-sm mb-2">Followers</p>
                <p className="text-4xl font-bold text-primary">234K</p>
                <p className="text-xs text-accent mt-2">↑ 5% this month</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-muted-foreground text-sm mb-2">Est. Earnings</p>
                <p className="text-4xl font-bold text-accent">$12,450</p>
                <p className="text-xs text-muted-foreground mt-2">Pending withdrawal</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Revenue Breakdown</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-foreground">Virtual Gifts</span>
                      <span className="text-primary font-bold">$7,200</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '58%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-foreground">Ad Revenue</span>
                      <span className="text-secondary font-bold">$3,850</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: '31%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-foreground">Subscriptions</span>
                      <span className="text-accent font-bold">$1,400</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '11%' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Wallet</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white">
                    <p className="text-sm opacity-90 mb-2">Available Balance</p>
                    <p className="text-4xl font-bold">$12,450</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-xl p-4">
                      <p className="text-xs text-muted-foreground mb-1">Pending</p>
                      <p className="text-2xl font-bold text-foreground">$3,200</p>
                    </div>
                    <div className="bg-muted rounded-xl p-4">
                      <p className="text-xs text-muted-foreground mb-1">Lifetime</p>
                      <p className="text-2xl font-bold text-foreground">$87,450</p>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:shadow-lg transition">
                    Withdraw Earnings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Platform Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'AI Video Tools', desc: 'Auto-captions, hashtags, and content ideas' },
              { title: 'Virtual Gifts', desc: 'Send gifts worth real money to creators' },
              { title: 'Creator Subscriptions', desc: 'Earn recurring revenue from subscribers' },
              { title: 'Analytics Dashboard', desc: 'Track views, engagement, and earnings' },
              { title: 'Challenge System', desc: 'Participate in trending challenges' },
              { title: 'Secure Payments', desc: 'Multiple payment methods, instant withdrawals' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition border border-primary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Start Earning?</h2>
          <p className="text-xl text-white/90 mb-12">Join millions of creators building communities and earning real income on TafTube.</p>
          
          <button className="px-12 py-5 bg-white text-primary font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 transition">
            Create Your Account Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="text-2xl font-bold mb-2">TafTube</p>
              <p className="text-white/60 text-sm">The creator platform for the next generation</p>
            </div>
            <div>
              <p className="font-bold mb-4">Product</p>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Creator Fund</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4">Company</p>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4">Legal</p>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Guidelines</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            <p>&copy; 2026 TafTube. All rights reserved. | This is a first-version demo.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
