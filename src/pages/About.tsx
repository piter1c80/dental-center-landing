import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const About = () => {
  const values = [
    {
      title: 'Профессионализм',
      description: 'Высококвалифицированные врачи с многолетним опытом',
      icon: 'Award'
    },
    {
      title: 'Современность',
      description: 'Новейшее оборудование и передовые технологии',
      icon: 'Zap'
    },
    {
      title: 'Комфорт',
      description: 'Уютная атмосфера и индивидуальный подход',
      icon: 'Heart'
    },
    {
      title: 'Качество',
      description: 'Гарантия на все виды лечения и материалы',
      icon: 'Shield'
    }
  ];

  const timeline = [
    {
      year: '2010',
      title: 'Основание клиники',
      description: 'Открытие первого кабинета с командой из 3 врачей'
    },
    {
      year: '2013',
      title: 'Расширение',
      description: 'Переезд в новое помещение, увеличение штата до 8 специалистов'
    },
    {
      year: '2016',
      title: 'Модернизация',
      description: 'Установка современного оборудования, внедрение цифровых технологий'
    },
    {
      year: '2019',
      title: 'Сертификация',
      description: 'Получение международных сертификатов качества ISO'
    },
    {
      year: '2022',
      title: 'Инновации',
      description: 'Внедрение 3D-планирования и роботизированной имплантации'
    },
    {
      year: '2024',
      title: 'Лидерство',
      description: 'Признание лучшей стоматологической клиникой региона'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                <Icon name="Smile" className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">DentalCenter</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Главная</a>
              <a href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="/doctors" className="text-gray-600 hover:text-blue-600 transition-colors">Врачи</a>
              <a href="/about" className="text-blue-600 font-medium">О нас</a>
              <a href="/contacts" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                О <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">нашей клинике</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                DentalCenter — это современная стоматологическая клиника, которая уже более 14 лет 
                заботится о здоровье и красоте улыбок наших пациентов. Мы объединили опыт 
                высококвалифицированных врачей с новейшими технологиями для достижения 
                наилучших результатов лечения.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Icon name="Calendar" className="w-5 h-5 mr-2" />
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700">
                  <Icon name="Play" className="w-5 h-5 mr-2" />
                  Виртуальный тур
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Наша миссия</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Сделать качественную стоматологическую помощь доступной каждому, 
                  обеспечивая комфортное и безболезненное лечение с использованием 
                  самых современных методов и технологий.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">14+</div>
                    <div className="text-sm opacity-90">лет работы</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">15000+</div>
                    <div className="text-sm opacity-90">пациентов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши ценности</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе каждый день
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">История развития</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Путь от небольшого кабинета до ведущей стоматологической клиники
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="bg-blue-50 text-blue-700 font-bold">
                            {item.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-green-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Современное оборудование</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы инвестируем в лучшие технологии для качественного лечения
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Microscope" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-center">Дентальный микроскоп</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Позволяет проводить лечение с максимальной точностью и минимальным вмешательством
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Scan" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-center">3D томограф</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Трехмерная диагностика для точного планирования имплантации и сложного лечения
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-center">Лазерная установка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Безболезненное лечение десен и мягких тканей с быстрым заживлением
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Присоединяйтесь к нашей семье пациентов</h2>
          <p className="text-xl mb-8 opacity-90">
            Более 15 000 человек уже доверили нам свое здоровье и красоту улыбки
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            <Icon name="UserPlus" className="w-5 h-5 mr-2" />
            Стать нашим пациентом
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;