import { Card, CardContent } from "../components/ui";
import { Button } from "../components/ui";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3E2723] to-[#1B1B1B] text-white flex flex-col items-center p-4 w-full overflow-x-hidden m-0">
      {/* Header */}
      <header className="w-full max-w-4xl text-center py-8">
        <h1 className="text-5xl font-bold text-[#FFFFFF] drop-shadow-lg">Welcome to Mariia's Store</h1>
        <p className="text-lg mt-2 text-[#BCAAA4] opacity-95">Discover curated collections with elegance and style</p>
      </header>
      
      {/* Introduction */}
      <motion.section 
        className="w-full max-w-4xl bg-[#4E342E] text-[#F5F5F5] p-8 rounded-3xl shadow-xl flex flex-col items-center"
        initial={{ opacity: 1, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/images/maria6.jpg" alt="Mariia" className="w-48 h-48 rounded-full object-cover mb-4 border-4 border-[#FFAB91] shadow-lg" />
        <h2 className="text-3xl font-semibold text-[#FFAB91] drop-shadow-md">Meet Mariia</h2>
        <p className="mt-3 text-lg text-center opacity-95">A passionate entrepreneur bringing a unique selection of fashion and lifestyle products to you.</p>
      </motion.section>
      
      {/* Storefront Preview */}
      <motion.section 
        className="w-full max-w-5xl mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-semibold text-center text-[#FFFFFF] drop-shadow-lg">Featured Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <Card className="bg-[#5D4037] rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300">
            <img src="/images/dress.jpg" alt="Product 1" className="w-full h-52 object-cover rounded-t-3xl" />
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#FFAB91]">Elegant Dress</h3>
              <p className="text-md text-[#D7CCC8] opacity-95">A timeless piece for any occasion.</p>
              <Button className="mt-3 bg-[#6D4C41] hover:bg-[#5D4037] text-[#FFFFFF]">Shop Now</Button>
            </CardContent>
          </Card>

          <Card className="bg-[#5D4037] rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300">
            <img src="/images/bag.jpg" alt="Product 2" className="w-full h-52 object-cover rounded-t-3xl" />
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#FFAB91]">Luxury Handbag</h3>
              <p className="text-md text-[#D7CCC8] opacity-95">Perfectly crafted for sophistication.</p>
              <Button className="mt-3 bg-[#6D4C41] hover:bg-[#5D4037] text-[#FFFFFF]">Shop Now</Button>
            </CardContent>
          </Card>

          <Card className="bg-[#5D4037] rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300">
            <img src="/images/chic.jpg" alt="Product 3" className="w-full h-52 object-cover rounded-t-3xl" />
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#FFAB91]">Chic Accessories</h3>
              <p className="text-md text-[#D7CCC8] opacity-95">Complete your look with elegance.</p>
              <Button className="mt-3 bg-[#6D4C41] hover:bg-[#5D4037] text-[#FFFFFF]">Shop Now</Button>
            </CardContent>
          </Card>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
