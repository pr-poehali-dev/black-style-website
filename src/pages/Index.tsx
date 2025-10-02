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
                  ЗДОРОВЫЙ
                  <br />
                  <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                    ОБРАЗ ЖИЗНИ
                  </span>
                </h1>
                
                <div className="h-1 w-20 bg-white rounded-full"></div>
              </div>

              <div className="space-y-4 text-lg md:text-xl font-light text-zinc-300">
                <p className="leading-relaxed">
                  Всем привет ✋👋
                </p>
                <p className="leading-relaxed">
                  Я не курю, не пью и не парю — я за здоровый образ жизни
                </p>
                <p className="leading-relaxed">
                  Я уважаю закон РФ
                </p>
                <p className="leading-relaxed text-zinc-400">
                  Мне не интересен ваш этот никотин
                </p>
              </div>

              <div className="grid grid-cols-4 gap-4 pt-4">
                <div className="flex flex-col items-center justify-center p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-colors">
                  <Icon name="Heart" size={28} className="mb-2" />
                  <span className="text-xs text-zinc-400">Здоровье</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-colors">
                  <Icon name="Scale" size={28} className="mb-2" />
                  <span className="text-xs text-zinc-400">Закон</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-colors">
                  <Icon name="Dumbbell" size={28} className="mb-2" />
                  <span className="text-xs text-zinc-400">Спорт</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-colors">
                  <Icon name="Leaf" size={28} className="mb-2" />
                  <span className="text-xs text-zinc-400">Природа</span>
                </div>
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