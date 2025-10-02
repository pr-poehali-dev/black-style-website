import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <Card className="bg-gradient-to-br from-zinc-900 to-black border-zinc-800 p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-black leading-tight animate-fade-in">
                  МОМЕНТЫ
                  <br />
                  <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                    ИЗ ЖИЗНИ
                  </span>
                </h1>
                
                <div className="h-1 w-20 bg-white rounded-full"></div>
              </div>

              <div className="space-y-6 text-lg md:text-xl font-light text-zinc-300">
                <p className="leading-relaxed">
                  Я веду свой Telegram канал
                </p>
                <p className="leading-relaxed text-2xl font-semibold">
                  "Моменты из жизни"
                </p>
                <p className="leading-relaxed">
                  Я буду постить туда то, что у меня происходит в жизни
                </p>
                
                <a 
                  href="https://t.me/Lives52" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all hover:scale-105 shadow-lg"
                >
                  <Icon name="Send" size={24} />
                  Подписаться на канал
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
              <img
                src="/img/c0ea69a5-bc12-48b3-bde6-c1fef5874655.jpg"
                alt="Здоровый образ жизни"
                className="rounded-2xl w-full h-auto shadow-2xl border border-zinc-700 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;